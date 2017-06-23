'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cliSpinner = require('cli-spinner');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spinner = function () {
  function Spinner(text, autostart) {
    _classCallCheck(this, Spinner);

    this.spinner = new _cliSpinner.Spinner(text);
    this.spinner.setSpinnerString('|/-\\');

    if (autostart) {
      this.start();
    }
  }

  _createClass(Spinner, [{
    key: 'start',
    value: function start() {
      this.spinner.start();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.spinner.stop();
    }
  }]);

  return Spinner;
}();

exports.default = Spinner;
module.exports = exports['default'];
//# sourceMappingURL=spinner.js.map