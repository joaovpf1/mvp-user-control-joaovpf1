import format from "pg-format";
import { client } from "../database";
import AppError from "../errors";

export const userCoursesCreateCourseService = async (
  userId: string,
  courseId: string
): Promise<{ message: string }> => {
  const queryFormat: string = format(
    `INSERT INTO "userCourses" ("active", "userId", "courseId") VALUES (true, $1, $2) RETURNING *;`
  );
  if (!courseId || !userId) {
    throw new AppError("User/course not found", 404);
  } else {
    await client.query(queryFormat, [userId, courseId]);
    return { message: "User successfully vinculed to course" };
  };
};
