'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exec;

var _child_process = require('child_process');

function exec(command) {
  return new Promise(function (resolve, reject) {
    (0, _child_process.exec)(command, {}, function (err) {
      if (err) reject(err);
      resolve();
    });
  });
}