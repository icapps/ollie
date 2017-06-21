

const _Ollie = require('./Ollie');

const _Ollie2 = _interopRequireDefault(_Ollie);

const _constants = require('./constants');

const _surveys = require('./surveys');

const _surveys2 = _interopRequireDefault(_surveys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ollie = new _Ollie2.default({ projectTypes: _constants.projectTypes, surveys: _surveys2.default });
ollie.basic();
