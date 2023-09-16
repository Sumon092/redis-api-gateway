import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.patch('/:id', AcademicSemesterController.updateAcaSem);
router.post('/', AcademicSemesterController.insertIntoDB);
router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getAcaSemById);
router.delete('/:id', AcademicSemesterController.deleteAcaSem);

export const AcademicSemesterRoutes = router;
