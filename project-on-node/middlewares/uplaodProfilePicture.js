import multer from 'multer' ;

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, 'profilePictures'); // Ensure this path is correct
    cb(null, uploadPath); // Save uploaded images to 'profilePictures' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Save with a unique filename
  }
});

const upload = multer({ storage: storage });

export default upload

