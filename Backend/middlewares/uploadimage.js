const multer = require("multer");

module.exports = (
    multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null,"./public/upload/projects")
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname )
            }
        }),
        fileFilter: (req, file, cb) => {
            const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formaroAceito => formatoAceito = file.mimetype )

            if(extensaoImg){
                return cb(null, true);
            }
            return cb(null, false);
        }
    })
)