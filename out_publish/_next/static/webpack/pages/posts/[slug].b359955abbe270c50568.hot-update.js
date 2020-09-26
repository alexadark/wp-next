webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/post */ \"./components/post/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query-devtools */ \"./node_modules/react-query-devtools/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Volumes/workspace/current projects/wp-next/pages/posts/[slug].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var _ref$post = _ref.post,\n      post = _ref$post === void 0 ? {} : _ref$post,\n      slug = _ref.slug;\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])([\"post\", slug], function () {\n    return Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"requestPost\"])(slug);\n  }, {\n    initialData: post,\n    refetchInterval: 1000\n  }),\n      data = _useQuery.data;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"PostEntry\"], {\n    location: \"single\",\n    post: data.post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__[\"ReactQueryDevtools\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n}; // export const getServerSideProps = async ({ params }) => {\n//   const data = await requestPost(params.slug)\n//   return {\n//     props: {\n//       post: data.post,\n//     },\n//   }\n// }\n\n\n_s(Post, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzP2RlYzkiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJzbHVnIiwidXNlUXVlcnkiLCJyZXF1ZXN0UG9zdCIsImluaXRpYWxEYXRhIiwicmVmZXRjaEludGVydmFsIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSx1QkFBdEJDLElBQXNCO0FBQUEsTUFBdEJBLElBQXNCLDBCQUFmLEVBQWU7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ25CQyw0REFBUSxDQUFDLENBQUMsTUFBRCxFQUFTRCxJQUFULENBQUQsRUFBaUI7QUFBQSxXQUFNRSw0REFBVyxDQUFDRixJQUFELENBQWpCO0FBQUEsR0FBakIsRUFBMEM7QUFDakVHLGVBQVcsRUFBRUosSUFEb0Q7QUFFakVLLG1CQUFlLEVBQUU7QUFGZ0QsR0FBMUMsQ0FEVztBQUFBLE1BQzVCQyxJQUQ0QixhQUM1QkEsSUFENEI7O0FBTXBDLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFXLFlBQVEsRUFBQyxRQUFwQjtBQUE2QixRQUFJLEVBQUVBLElBQUksQ0FBQ04sSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBWkQsQyxDQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXRCTUQsSTtVQUNhRyxvRDs7O0tBRGJILEk7O0FBNENTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3RQb3N0LCByZXF1ZXN0QWxsUG9zdFNsdWdzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgUG9zdEVudHJ5LCBQb3N0RW50cnlJbmZvIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdFwiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwicmVhY3QtcXVlcnktZGV2dG9vbHNcIlxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCA9IHt9LCBzbHVnIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShbXCJwb3N0XCIsIHNsdWddLCAoKSA9PiByZXF1ZXN0UG9zdChzbHVnKSwge1xuICAgIGluaXRpYWxEYXRhOiBwb3N0LFxuICAgIHJlZmV0Y2hJbnRlcnZhbDogMTAwMCxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UG9zdEVudHJ5IGxvY2F0aW9uPVwic2luZ2xlXCIgcG9zdD17ZGF0YS5wb3N0fSAvPlxuICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdFBvc3QocGFyYW1zLnNsdWcpXG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgcG9zdDogZGF0YS5wb3N0LFxuLy8gICAgIH0sXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3RQb3N0KHBhcmFtcy5zbHVnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IGRhdGEsXG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IHJlcXVlc3RBbGxQb3N0U2x1Z3MoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhbGxQb3N0cz8ubm9kZXM/Lm1hcCgocG9zdCkgPT4gYC8ke3Bvc3Q/LnNsdWd9YCkgfHwgW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ })

})