// This file runs on first start of the inQ

const fs = require('fs');

const CONFIG = require('./../config.json');
const files = require('./files');

// Checks if project's output folder exists and creates it when necessary
function prepareOutputFolder() {
  files.createFolder(CONFIG.output.url);
}

prepareOutputFolder();