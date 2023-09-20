import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../axios';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudynary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
  const { academicDepartment } = req.body;
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.academicDepartment = academicDepartmentResponse.data[0].id;
  }
};

export const UserService = { createStudent };
