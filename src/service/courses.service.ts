import format from "pg-format";
import {
  ICourses,
  ICoursesCreate,
  ICoursesRead,
  ICoursesResult,
} from "../interfaces/courses.interface";
import { client } from "../database";

export const createCoursesService = async (
  data: ICoursesCreate
): Promise<ICourses> => {
  const queryFormat: string = format(
    `INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(data),
    Object.values(data)
  );

  const queryResult: ICoursesResult = await client.query(queryFormat);
  return queryResult.rows[0];
};

export const readCoursesService = async (): Promise<ICoursesRead> => {
  const query: ICoursesResult = await client.query(`SELECT * FROM "courses";`);
  return query.rows;
};

export const deleteCourseUserService = async (
  courseId: string,
  userId: string
) => {
  console.log("service");
  const query = `DELETE FROM "userCourses" WHERE ("courseId", "userId") = ($1, $2);`;

  const responseQuery = await client.query(query, [courseId, userId]);
  return responseQuery;
};

export const readUserByCourseService = async (
  courseId: string
): Promise<Response[]> => {
  const query: string = `
    SELECT
    "u"."id" AS "userId",
    "u"."name" AS "userName",
    "c"."id" AS "courseId",
    "c"."name" AS "courseName",
    "c"."description" AS "courseDescription",
    "uc"."active" AS "userActiveInCourse"
    FROM "users" AS "u"
    JOIN "userCourses" AS "uc" ON "uc"."userId" = "u"."id"
    JOIN "courses" AS "c" ON "uc"."courseId" = "c"."id"
    WHERE "c"."id" = $1;
    `;
  const queryResult = await client.query(query, [courseId]);

  return queryResult.rows;
};
