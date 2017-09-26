const fs = require('fs-extra');
const path = require('path');

function listPathContents(url, returnFullUrl = true) {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err);
      }
      if (returnFullUrl) {
        let list = [];
        for (let file in files) {
          list.push(path.join(url, files[file]));
        }
        resolve(list);
      }
      resolve(files);
    });
  });
};

function getFolders(pathArr = []) {
  function folderStat(obj) {
    return new Promise((resolve, reject) => {
      fs.lstat(obj, (err, stat) => {
        if (err) {
          reject(err);
        }
        if (stat.isDirectory()) {
          resolve(obj);
        }
        resolve(null);
      });
    });
  }
  let promises = [];
  return new Promise((resolve, reject) => {
    let foldersArr = pathArr.map(obj => {
      return folderStat(obj);
    });
    Promise.all(foldersArr).then(result => {
      const final = result.filter(obj => {
        return obj !== null;
      });
      resolve(final);
    });
  });
}

function getFiles(pathArr = []) {
  function fileStat(obj) {
    return new Promise((resolve, reject) => {
      fs.lstat(obj, (err, stat) => {
        if (err) {
          reject(err);
        }
        if (stat.isFile()) {
          resolve(obj);
        }
        resolve(null);
      });
    });
  }
  let promises = [];
  return new Promise((resolve, reject) => {
    let filesArr = pathArr.map(obj => {
      return fileStat(obj);
    });
    Promise.all(filesArr).then(result => {
      const final = result.filter(obj => {
        return obj !== null;
      });
      resolve(final);
    });
  });
}

function folderExists(pathToFolder) {
  return new Promise((resolve, reject) => {
    fs.lstat(pathToFolder, (err, stat) => {
      if (err) {
        resolve(false);
      }
      if (stat.folderExists()) {
        resolve(true);
      }
      resolve(false);
    })
  });
}

function fileExists(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.lstat(pathToFile, (err, stat) => {
      if (err) {
        resolve(false);
      }
      if (stat.fileExists()) {
        resolve(true);
      }
      resolve(false);
    })
  });
}

module.exports.listPathContents = listPathContents;
module.exports.getFolders = getFolders;
module.exports.getFiles = getFiles;
module.exports.folderExists = folderExists;
module.exports.fileExists = fileExists;
