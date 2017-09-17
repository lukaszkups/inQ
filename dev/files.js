const fs = require('fs-extra');
const path = require('path');

function listFolders(url, returnFullUrl = true) {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err);
      }
      if (returnFullUrl) {
        let list = [];
        for (let file in files) {
          list.push(path.join(__dirname, url, files[file]));
        }
        resolve(list);
      }
      resolve(files);
    });
  });
};

module.exports.listFolders = listFolders;