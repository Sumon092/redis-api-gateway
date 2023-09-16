import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post('/', AcademicSemesterController.insertIntoDB);
router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getAcaSemById);
router.patch('/:id', AcademicSemesterController.updateAcaSemById);

export const AcademicSemesterRoutes = router;
