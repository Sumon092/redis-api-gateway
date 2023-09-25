import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'dhb56id7u',
  api_key: '155513293993391',
  api_secret: 'wtGwufl7B4PffLYNS3p1qtAQjVw'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploads = multer({ storage: storage });

const uploadToCloudynary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, function (error: Error, result: ICloudinaryResponse) {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelper = { uploadToCloudynary, uploads };
