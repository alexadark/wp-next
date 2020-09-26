webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query-devtools */ \"./node_modules/react-query-devtools/index.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Volumes/workspace/current projects/wp-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // import useSWR from 'swr'\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var _data$posts, _data$posts$nodes;\n\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? {} : _ref$posts;\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])([\"posts\"], _lib_api__WEBPACK_IMPORTED_MODULE_2__[\"requestAllPosts\"], {\n    initialData: posts // refetchInterval: 1000,\n\n  }),\n      data = _useQuery.data,\n      isFetching = _useQuery.isFetching,\n      isLoading = _useQuery.isLoading;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Blog\"), data === null || data === void 0 ? void 0 : (_data$posts = data.posts) === null || _data$posts === void 0 ? void 0 : (_data$posts$nodes = _data$posts.nodes) === null || _data$posts$nodes === void 0 ? void 0 : _data$posts$nodes.map(function (post) {\n    var title = post.title,\n        excerpt = post.excerpt,\n        slug = post.slug;\n    return __jsx(\"article\", {\n      key: slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"posts/\".concat(slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, title))), __jsx(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: excerpt\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }));\n  }), __jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__[\"ReactQueryDevtools\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Blog, \"JwH8OM3hM2pvu6XRkayrc6T65gE=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Blog;\n// export const getServerSideProps = async () => {\n//   const data = await requestAllPosts()\n//   return {\n//     props: {\n//       posts: data.posts.nodes,\n//     },\n//   }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJCbG9nIiwicG9zdHMiLCJ1c2VRdWVyeSIsInJlcXVlc3RBbGxQb3N0cyIsImluaXRpYWxEYXRhIiwiZGF0YSIsImlzRmV0Y2hpbmciLCJpc0xvYWRpbmciLCJub2RlcyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImV4Y2VycHQiLCJzbHVnIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUE7O0FBQUE7O0FBQUEsd0JBQWpCQyxLQUFpQjtBQUFBLE1BQWpCQSxLQUFpQiwyQkFBVCxFQUFTOztBQUFBLGtCQUNTQyw0REFBUSxDQUFDLENBQUMsT0FBRCxDQUFELEVBQVlDLHdEQUFaLEVBQTZCO0FBQzNFQyxlQUFXLEVBQUVILEtBRDhELENBRTNFOztBQUYyRSxHQUE3QixDQURqQjtBQUFBLE1BQ3ZCSSxJQUR1QixhQUN2QkEsSUFEdUI7QUFBQSxNQUNqQkMsVUFEaUIsYUFDakJBLFVBRGlCO0FBQUEsTUFDTEMsU0FESyxhQUNMQSxTQURLOztBQU0vQixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUdHRixJQUhILGFBR0dBLElBSEgsc0NBR0dBLElBQUksQ0FBRUosS0FIVCxxRUFHRyxZQUFhTyxLQUhoQixzREFHRyxrQkFBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUFBLFFBQ3pCQyxLQUR5QixHQUNBRCxJQURBLENBQ3pCQyxLQUR5QjtBQUFBLFFBQ2xCQyxPQURrQixHQUNBRixJQURBLENBQ2xCRSxPQURrQjtBQUFBLFFBQ1RDLElBRFMsR0FDQUgsSUFEQSxDQUNURyxJQURTO0FBRWpDLFdBQ0U7QUFBUyxTQUFHLEVBQUVBLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxrQkFBV0EsSUFBWCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLEtBQUosQ0FERixDQURGLENBREYsRUFNRTtBQUFLLDZCQUF1QixFQUFFO0FBQUVHLGNBQU0sRUFBRUY7QUFBVixPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVELEdBWkEsQ0FISCxFQWdCRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRCxDQTFCRDs7R0FBTVosSTtVQUNvQ0Usb0Q7OztLQURwQ0YsSTtBQXVDTjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyByZXF1ZXN0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS1kZXZ0b29sc1wiXG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzID0ge30gfSkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGlzRmV0Y2hpbmcsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoW1wicG9zdHNcIl0sIHJlcXVlc3RBbGxQb3N0cywge1xuICAgIGluaXRpYWxEYXRhOiBwb3N0cyxcbiAgICAvLyByZWZldGNoSW50ZXJ2YWw6IDEwMDAsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkJsb2c8L2gxPlxuXG4gICAgICB7ZGF0YT8ucG9zdHM/Lm5vZGVzPy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZXhjZXJwdCwgc2x1ZyB9ID0gcG9zdFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxhcnRpY2xlIGtleT17c2x1Z30+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Bwb3N0cy8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBleGNlcnB0IH19IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0QWxsUG9zdHMoKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBkYXRhLnBvc3RzLm5vZGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdEFsbFBvc3RzKClcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBwb3N0czogZGF0YS5wb3N0cy5ub2Rlcyxcbi8vICAgICB9LFxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})