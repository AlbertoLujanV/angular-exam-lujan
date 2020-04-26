import { Course } from './course.interface';

export interface CourseReleaseResponse {
    courses: {
        items: Course[]
    }
}