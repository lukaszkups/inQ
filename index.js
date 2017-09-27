const {listPathContents, getFiles, getFolders, folderExists, fileExists} = require('./dev/files');

listPathContents('./content/lists/notes').then(list => {
  getFiles(list).then(files => {
    console.warn('files: ', files);
  });
  getFolders(list).then(folders => {
    console.log('folders: ', folders);
  })
});

folderExists('./content/lists/').then(res => {
  console.log('Folder exists 1: ', res);
});

folderExists('./content/lists/notes/2017-09-17-hello-world.md').then(res => {
  console.log('Folder exists 2: ', res);
});


fileExists('./content/lists/').then(res => {
  console.log('File exists 1: ', res);
});

fileExists('./content/lists/notes/2017-09-17-hello-world.md').then(res => {
  console.log('File exists 2: ', res);
});