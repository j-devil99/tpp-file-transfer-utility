const fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");

function checkWhetherFile(path_string) {
  return fs.lstatSync(path_string).isFile();
}

function childReader(src) {
  let children = fs.readdirSync(src);
  return children;
}

function untreefyLogic(src, dest, obj) {
  let isFile = checkWhetherFile(src);
  if (isFile == true) {
    let newName = uniqid();
    let oldName = path.basename(src);
    fs.copyFileSync(src, path.join(dest, newName));
    // console.log(`file copied from ${oldName} to ${newName}`);
    obj.isFile = true;
    obj.newName = newName;
    obj.oldName = oldName;
  } else {
    let dirName = path.basename(src);
    obj.isFile = false;
    obj.name = dirName;
    obj.children = [];
    let children = childReader(src);
    for (let i = 0; i < children.length; i++) {
      let childPath = path.join(src, children[i]);
      let chobj = {};
      untreefyLogic(childPath, dest, chobj);
      obj.children.push(chobj);
    }
  }
}

module.exports.untreefy = function () {
  let root = {};
  let src = arguments[0];
  let dest = arguments[1];
  // console.log(src, dest);
  
  // console.log(JSON.stringify(root, undefined, 4));
  untreefyLogic(src, dest, root);
  fs.writeFileSync(path.join(dest, "metadata.json"), JSON.stringify(root));
  console.log("Data Copied");
};