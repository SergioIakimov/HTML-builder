const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
const output = fs.createWriteStream("text.txt");

stdout.write("Please write input text for text.txt");

stdin.on("data", (result) => {
  if (result.toString().trim() === "exit") {
    stdout.write("Good job text was succesfully recorded");
    process.exit();
  } else {
    output.write(result);
  }
});
stdin.on("error", (error) => stdout("error", error.message));
process.on("SIGINT", () => {
  stdout.write("Good job text was succesfully recorded! Thanx");
});
