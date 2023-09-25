import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const createStudent = async (req: Request)=> {
  const file = req.file;
  const uploadedImage = await FileUploadHelper.uploadToCloudynary(file);
  console.log(uploadedImage);
};

export const UserService = { createStudent };
