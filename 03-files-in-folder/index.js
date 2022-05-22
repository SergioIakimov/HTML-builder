const fs = require("fs");
const path = require("path");

//import { stat } from "fs";
fs.readdir(
  path.join(__dirname, "secret-folder"),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        fs.stat(path.join(__dirname, "secret-folder"), (err, stat) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(
            file.name.split(".")[0],
            path.extname(file.name).split(".").pop(),
            `${stat.size}`
          );
        });

        //let stat = fs.stat(__dirname, "secret-folder");
        //let names = [];
        //console.log(file);
        //names = file.name.split(".");

        //console.log(`${names[0]} - ${names[1]} - ${file.stat.size}`);
        //stats = fs.statSync("myfile.txt")
        //var ext = path.extname(path.join(__dirname, "secret-folder"));
        //console.log(ext);
        //console.log(`${path.extname(file)} - `);
      });
    }
  }
);
