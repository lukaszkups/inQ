const {listFolders} = require('./dev/files');

listFolders('./content/lists/notes').then(list => {
  console.log(list);
});