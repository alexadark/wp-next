webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query-devtools */ \"./node_modules/react-query-devtools/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Volumes/workspace/current projects/wp-next/pages/[slug].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Page = function Page(_ref) {\n  _s();\n\n  var _data$page;\n\n  var _ref$page = _ref.page,\n      page = _ref$page === void 0 ? {} : _ref$page,\n      slug = _ref.slug;\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])([\"page\", slug], function () {\n    return Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"requestPage\"])(slug);\n  }, {\n    initialData: page,\n    refetchInterval: 1000\n  }),\n      data = _useQuery.data;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, data === null || data === void 0 ? void 0 : (_data$page = data.page) === null || _data$page === void 0 ? void 0 : _data$page.title), __jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__[\"ReactQueryDevtools\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async ({ params }) => {\n//   const data = await requestPage(params.slug)\n//   return {\n//     props: {\n//       page: data.page,\n//     },\n//   }\n// }\n\n\n_s(Page, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzPzQ2MmIiXSwibmFtZXMiOlsiUGFnZSIsInBhZ2UiLCJzbHVnIiwidXNlUXVlcnkiLCJyZXF1ZXN0UGFnZSIsImluaXRpYWxEYXRhIiwicmVmZXRjaEludGVydmFsIiwiZGF0YSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF5QjtBQUFBOztBQUFBOztBQUFBLHVCQUF0QkMsSUFBc0I7QUFBQSxNQUF0QkEsSUFBc0IsMEJBQWYsRUFBZTtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDbkJDLDREQUFRLENBQUMsQ0FBQyxNQUFELEVBQVNELElBQVQsQ0FBRCxFQUFpQjtBQUFBLFdBQU1FLDREQUFXLENBQUNGLElBQUQsQ0FBakI7QUFBQSxHQUFqQixFQUEwQztBQUNqRUcsZUFBVyxFQUFFSixJQURvRDtBQUVqRUssbUJBQWUsRUFBRTtBQUZnRCxHQUExQyxDQURXO0FBQUEsTUFDNUJDLElBRDRCLGFBQzVCQSxJQUQ0Qjs7QUFLcEMsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUwsYUFBS0EsSUFBTCxxQ0FBS0EsSUFBSSxDQUFFTixJQUFYLCtDQUFLLFdBQVlPLEtBQWpCLENBREYsRUFFRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FYRCxDLENBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcEJNUixJO1VBQ2FHLG9EOzs7S0FEYkgsSTs7QUEwQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdFBhZ2UsIHJlcXVlc3RBbGxQYWdlU2x1Z3MgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwicmVhY3QtcXVlcnktZGV2dG9vbHNcIlxuXG5jb25zdCBQYWdlID0gKHsgcGFnZSA9IHt9LCBzbHVnIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShbXCJwYWdlXCIsIHNsdWddLCAoKSA9PiByZXF1ZXN0UGFnZShzbHVnKSwge1xuICAgIGluaXRpYWxEYXRhOiBwYWdlLFxuICAgIHJlZmV0Y2hJbnRlcnZhbDogMTAwMCxcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntkYXRhPy5wYWdlPy50aXRsZX08L2gxPlxuICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICAgIDwvPlxuICApXG59XG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3RQYWdlKHBhcmFtcy5zbHVnKVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIHBhZ2U6IGRhdGEucGFnZSxcbi8vICAgICB9LFxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0UGFnZShwYXJhbXMuc2x1ZylcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYWdlOiBkYXRhLnBhZ2UsXG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IHJlcXVlc3RBbGxQYWdlU2x1Z3MoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhbGxQYWdlcz8ubm9kZXM/Lm1hcCgocGFnZSkgPT4gYC8ke3BhZ2U/LnNsdWd9YCkgfHwgW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ })

})