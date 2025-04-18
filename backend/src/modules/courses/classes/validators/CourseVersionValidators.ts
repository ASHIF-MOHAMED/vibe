import 'reflect-metadata';
import {IsEmpty, IsNotEmpty, IsString, IsMongoId} from 'class-validator';
import {ICourseVersion} from 'shared/interfaces/IUser';

/**
 * DTO for creating a new course version.
 *
 * @category Courses/Validators/CourseVersionValidators
 */
class CreateCourseVersionBody implements Partial<ICourseVersion> {
  /**
   * ID of the course this version belongs to.
   * This is auto-populated and should remain empty in the request body.
   */
  @IsEmpty()
  courseId: string;

  /**
   * The version label or identifier (e.g., "v1.0", "Fall 2025").
   */
  @IsNotEmpty()
  @IsString()
  version: string;

  /**
   * A brief description of the course version.
   */
  @IsNotEmpty()
  @IsString()
  description: string;
}

/**
 * Route parameters for creating a course version under a specific course.
 *
 * @category Courses/Validators/CourseVersionValidators
 */
class CreateCourseVersionParams {
  /**
   * ID of the course to attach the new version to.
   */
  @IsMongoId()
  @IsString()
  id: string;
}

/**
 * Route parameters for reading a course version by ID.
 *
 * @category Courses/Validators/CourseVersionValidators
 */
class ReadCourseVersionParams {
  /**
   * ID of the course version to retrieve.
   */
  @IsMongoId()
  @IsString()
  id: string;
}

/**
 * Route parameters for deleting a module from a course version.
 *
 * @category Courses/Validators/CourseVersionValidators
 */
class DeleteModuleParams {
  /**
   * ID of the course version.
   */
  @IsMongoId()
  @IsString()
  versionId: string;

  /**
   * ID of the module to delete.
   */
  @IsMongoId()
  @IsString()
  moduleId: string;
}

export {
  CreateCourseVersionBody,
  CreateCourseVersionParams,
  ReadCourseVersionParams,
  DeleteModuleParams,
};
