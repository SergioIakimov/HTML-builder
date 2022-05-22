const { createReadStream } = require("fs");
const path = require("path");

const txtPath = path.join(__dirname, "text.txt");
//console.log(txtPath);

const stream = createReadStream(txtPath, "utf8");
//const stream = createReadStream("./01-read-file/text.txt", "utf8");
stream.on("data", (result) => {
  console.log(result);
});
