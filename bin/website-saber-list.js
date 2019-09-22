#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ncp = require('ncp');

function copyTemplate(file,to) {
  const _from = path.join(__dirname, '../templates/', file);
  fs.writeFileSync(to, fs.readFileSync(_from, 'utf-8'));
}

function mkdir(path, cb) {
  fs.mkdir(path, err => {
    if (err) {
      console.log(err);
    } else {
      cb && cb();
    }
  })
}

mkdir('./public', () => {
  mkdir('./public/js', () => {
    copyTemplate('index.js', './public/js/index.js');
  })
})

ncp(path.join(__dirname, '../gulpfile.js'), 'test', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('copy is done !')
  }
})