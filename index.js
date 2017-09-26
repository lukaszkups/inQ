const {listPathContents, getFiles, getFolders} = require('./dev/files');

listPathContents('./content/lists/notes').then(list => {
  // console.log(list);
  getFiles(list).then(files => {
    console.warn('files: ', files);
  });
  getFolders(list).then(folders => {
    console.log('folders: ', folders);
  })
});