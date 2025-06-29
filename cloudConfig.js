const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { v4: uuidv4 } = require('uuid'); // ✅ Import UUID

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowed_formats: ['png', 'jpg', 'jpeg'], // ✅ corrected: use allowed_formats
    public_id: (req, file) => uuidv4(), // ✅ unique name per upload
  },
});

module.exports = {
  cloudinary,
  storage
};