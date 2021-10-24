const multer = require("multer");
const fileToUpLoad = multer({ dest: "files/" });
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile } = require("../configs/S3");

const files = fileToUpLoad.single("theFile");

const fileUpload = async (req, res) => {
  const file = await req.file;
  console.log("this is your file", file);

  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log("this is the result", result);
  res.json({ secure_url: result.Location });
};

module.exports = { files, fileUpload };
