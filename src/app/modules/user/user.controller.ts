import { Request, Response, NextFunction } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  // FileUploadHelper.uploadToCloudynary();
  console.log(req.file, req.data, 'file and data');
};

export const UserController = { createStudent };
