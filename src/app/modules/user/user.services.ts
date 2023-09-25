import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage:ICloudinaryResponse = await FileUploadHelper.uploadToCloudynary(file);
  console.log(file, uploadedImage);
};

export const UserService = { createStudent };
