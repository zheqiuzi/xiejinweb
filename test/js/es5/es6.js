"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

var a = [1, 2, 3];
a.forEach(function (item) {
    return console.log(item);
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, "done");
});

promise.then(function (value) {
    console.log(value);
});
console.log("-----------");
function gen(x) {
    var y;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log("1");
                    _context.next = 3;
                    return x + 2;

                case 3:
                    y = _context.sent;

                    console.log("2");
                    return _context.abrupt("return", y);

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var g = gen(1);
console.log(g);

console.log(g.next());

console.log(g.next(2));

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: "toString",
        value: function toString() {
            return this.x + "-" + this.y;
        }
    }]);

    return Point;
}();

var point = new Point(11, 22);
console.log(point.toString());