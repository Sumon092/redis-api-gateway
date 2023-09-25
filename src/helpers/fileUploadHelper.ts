import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

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

const uploadToCloudynary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = { uploadToCloudynary, uploads };
