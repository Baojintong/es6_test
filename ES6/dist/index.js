"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(gen);

function gen() {
    return _regenerator2.default.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 123 + 456;

                case 2:
                    _context.next = 4;
                    return 222 + 4526;

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}
function test() {
    console.log(gen());
}
