import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAcaSemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAcaSemById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateAcaSem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateAcaSemById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteAcaSem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.delSemById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getAcaSemById,
  updateAcaSem,
  deleteAcaSem
};
