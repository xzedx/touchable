webpackJsonp([2],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_touchable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_touchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_touchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* tslint:disable:no-console */



var style = '\n.active {\n  background: red;\n}\n.x {\n display:inline-block;\n width:100px;\n height:100px;\n border:1px solid yellow;\n}\n.x:active {\n  background: red;\n}\n';
var Test = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createClass({
    displayName: 'Test',
    componentWillMount: function componentWillMount() {
        window.log = this.log;
    },
    onPress: function onPress(e) {
        this.log('onPress', e);
    },
    onLongPress: function onLongPress(e) {
        this.log('onLongPress', e);
    },
    log: function log(m) {
        this.refs.log.innerHTML += '<p>' + m + ':' + Date.now() + '</p>';
        this.refs.log.scrollTop = this.refs.log.scrollHeight;
    },
    render: function render() {
        var _this = this;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: '20px' } }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { ref: "log", style: { height: 100, overflow: 'auto', margin: 10 } }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: style } }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_rc_touchable___default.a, { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.onPress, onLongPress: this.onLongPress }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: {
                width: 100,
                height: 100,
                border: '1px solid red',
                boxSizing: 'border-box',
                WebkitUserSelect: 'none'
            } }, "click")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { tabIndex: 0, className: "x", onClick: function onClick() {
                _this.log('onClick');
            } }, "click"));
    }
});
__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ })

},[268]);
//# sourceMappingURL=demo.js.map