import {
  IUsersCreate,
  IUsersResult,
  IUsersReturn,
} from "../interfaces/users.interface";
import format from "pg-format";
import { client } from "../database";
import { hash } from "bcryptjs";
import { userReadReturnSchema, userReturnSchema } from "../schemas/user.schema";
import AppError from "../errors";

export const createUserService = async (
  data: IUsersCreate
): Promise<IUsersReturn> => {
  data.password = await hash(data.password, 10);

  const queryFormat: string = format(
    `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(data),
    Object.values(data)
  );

  const queryResult: IUsersResult = await client.query(queryFormat);
  return userReturnSchema.parse(queryResult.rows[0]);
};

export const userReadService = async () => {
  const query = await client.query(`SELECT * FROM "users";`);
  return userReadReturnSchema.parse(query.rows);
};

export const userReadCoursesService = async (userId: string) => {
  const query: string = `
    SELECT
    "c"."id" AS "courseId",
    "c"."name" AS "courseName",
    "c"."description" AS "courseDescription",
    "uc"."active" AS "userActiveInCourse",
    "u"."id" AS "userId",
    "u"."name" AS "userName"
    FROM "users" AS "u"
    JOIN "userCourses" AS "uc" ON "uc"."userId" = "u"."id"
    JOIN "courses" AS "c" ON "uc"."courseId" = "c"."id"
    WHERE "u"."id" = $1;
    `;
  const queryResult = await client.query(query, [userId]);

  if (queryResult.rowCount === 0) {
    throw new AppError("No course found", 404);
  } else {
    return queryResult.rows;
  };
};
