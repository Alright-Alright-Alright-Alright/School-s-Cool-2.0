const multer = require("multer");
const fileToUpLoad = multer({ dest: "files/" });

const files = fileToUpLoad.single("theFile");

module.exports = files;
