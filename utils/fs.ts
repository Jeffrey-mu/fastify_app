const fs = require("fs");
interface FileModel {
  name: string;
  path: string;
  children: Array<FileModel>;
}
interface Options {
  deep: boolean;
}
function findFileFath(path: string, options?: Options) {
  const fieleInfo: FileModel = {
    name: path,
    path,
    children: [],
  };
  // 判断文件类型
  if (!isFile(path)) {
    fieleInfo.children = readFile(fieleInfo.path);
  }
  return fieleInfo;
  function isFile(path: string): boolean {
    return fs.statSync(path).isFile();
  }
  function readFile(path: string) {
    return fs.readdirSync(path).map((el) => options.deep ? findFileFath(path + "/" + el) : {
      name: el,
      el,
      children: [],
    });
  }
}

module.exports = findFileFath;
