'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IOSSurvey = function () {
  function IOSSurvey() {
    _classCallCheck(this, IOSSurvey);
  }

  _createClass(IOSSurvey, [{
    key: 'process',
    value: function process(answers) {
      console.log('iOS not yet implemented');
      throw new Error('(;*△*;)');
    }
  }]);

  return IOSSurvey;
}();

exports.default = IOSSurvey;
module.exports = exports['default'];
//# sourceMappingURL=ios.survey.js.map