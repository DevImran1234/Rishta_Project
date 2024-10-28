// import multer from "multer";
// import multerS3 from "multer-s3";
// import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
// import path from "path";

// const s3 = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.BUCKET_NAME,
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: "public-read",
//     key: function (req, file, cb) {
//       if (!req.user || !req.user._id) {
//         return cb(new Error("User ID not found in request"));
//       }
//       const userId = req.user._id;
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       const fileName =
//         file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
//       const fullPath = `uploads/${userId.toString()}/${fileName}`;
//       cb(null, fullPath);
//     },
//   }),
// });

// export default upload;
