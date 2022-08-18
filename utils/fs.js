var fs = require("fs");
function findFileFath(path, { deep }) {
  var fieleInfo = {
    name: "",
    path: readFilePath(path),
    children: [],
  };
  if (isFile(path)) {
    fieleInfo.name = path;
  } else {
    fieleInfo.children = readFile(fieleInfo.path);
  }
  return fieleInfo;
  function isFile(path) {
    return fs.statSync(path).isFile();
  }
  function readFile(path) {
    return fs.readdirSync(path).map(function (el) {
      console.log(el);
      return deep
        ? findFileFath(path + "/" + el)
        : {
            name: el,
            path: readFilePath(path),
            children: [],
          };
    });
  }
  function readFilePath(path) {
    return path;
  }
}

module.exports = findFileFath;
