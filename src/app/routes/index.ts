import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
