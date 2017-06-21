

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exec;

const _child_process = require('child_process');

function exec(command) {
  return new Promise((resolve, reject) => {
    (0, _child_process.exec)(command, {}, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}
