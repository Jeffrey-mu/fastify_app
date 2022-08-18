var fs = require("fs");
function findFileFath(path, options) {
    var fieleInfo = {
        name: path,
        path: path,
        children: []
    };
    // 判断文件类型
    if (!isFile(path)) {
        fieleInfo.children = readFile(fieleInfo.path);
    }
    return fieleInfo;
    function isFile(path) {
        return fs.statSync(path).isFile();
    }
    function readFile(path) {
        return fs.readdirSync(path).map(function (el) { return options.deep ? findFileFath(path + "/" + el) : {
            name: el,
            el: el,
            children: []
        }; });
    }
}
module.exports = findFileFath;
