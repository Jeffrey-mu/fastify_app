const fs = require("fs");
interface FileModel {
  name: string;
  path: string;
  children: Array<FileModel>;
}
function findFileFath(path: string) {
  const fieleInfo: FileModel = {
    name: "",
    path,
    children: [],
  };
  // 判断文件类型
  if (isFile(path)) {
    fieleInfo.name = path;
  } else {
    fieleInfo.children = readFile(fieleInfo.path);
  }
  return fieleInfo;
}
function isFile(path: string): boolean {
  return fs.statSync(path).isFile();
}
function readFile(path: string) {
  return fs.readdirSync(path).map((el) => findFileFath(path + "/" + el));
}
module.exports = { findFileFath };
