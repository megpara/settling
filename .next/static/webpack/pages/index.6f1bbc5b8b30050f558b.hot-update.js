"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar paths = {\n  \"/info\": \"01\",\n  \"/work\": \"02\",\n  \"/press\": \"03\"\n};\nvar homePath = \"/\";\nfunction Nav(_ref) {\n  _s();\n\n  var props = _ref.props;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      isPopupOpen = _useState2[0],\n      setIsPopupOpen = _useState2[1];\n\n  var closeModal = function closeModal() {\n    return setIsModalOpen(false);\n  };\n\n  var closePopup = function closePopup() {\n    return setIsPopupOpen(false);\n  };\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var path = router.asPath;\n  var showAlternateNav = path !== homePath;\n\n  if (showAlternateNav) {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"absolute md:p-[3rem] p-[2rem] flex w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: \"h-[20px] cursor-pointer\",\n          src: \"/volta.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-end items-center md:text-base text-xs\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"info\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/info\",\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"work\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/work\",\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"press\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/press\",\n            children: \"Press\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"co-lab\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/teaching\",\n            children: \"Teaching\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this);\n  } else {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"01\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/info\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomleft), \" buttonTertiary\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          target: \"_blank\",\n          href: \"mailto:meganparadowski@gmail.com\",\n          children: \"Say Hello\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomright), \" flex justify-end\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().icons),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            href: \"https://www.instagram.com/megparadowski/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"/insta-logo-white.png\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"02\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/teaching\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright),\n          children: \"Portfolio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: nav\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Nav, \"AYILSLIORF7c/gCs6JRwSvWneK4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0E1RnVCWjtVQU9QSjs7O0tBUE9JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzP2ExMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTmF2Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuY29uc3QgcGF0aHMgPSB7XG4gIFwiL2luZm9cIjogXCIwMVwiLFxuICBcIi93b3JrXCI6IFwiMDJcIixcbiAgXCIvcHJlc3NcIjogXCIwM1wiLFxufTtcbmNvbnN0IGhvbWVQYXRoID0gXCIvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdih7IHByb3BzIH0pIHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKTtcbiAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHNldElzUG9wdXBPcGVuKGZhbHNlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xuICBjb25zdCBzaG93QWx0ZXJuYXRlTmF2ID0gcGF0aCAhPT0gaG9tZVBhdGg7XG4gIGlmIChzaG93QWx0ZXJuYXRlTmF2KSB7XG4gICAgdmFyIG5hdiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbWQ6cC1bM3JlbV0gcC1bMnJlbV0gZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtWzIwcHhdIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL3ZvbHRhLnBuZ1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgbWQ6dGV4dC1iYXNlIHRleHQteHNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1kOnBsLTQgcGwtMlwiICsgKHBhdGguaW5jbHVkZXMoXCJpbmZvXCIpID8gXCIgZm9udC10aGluXCIgOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5mb1wiPkFib3V0PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibWQ6cGwtNCBwbC0yXCIgKyAocGF0aC5pbmNsdWRlcyhcIndvcmtcIikgPyBcIiBmb250LXRoaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+V29yazwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1kOnBsLTQgcGwtMlwiICsgKHBhdGguaW5jbHVkZXMoXCJwcmVzc1wiKSA/IFwiIGZvbnQtdGhpblwiIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3ByZXNzXCI+UHJlc3M8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtZDpwbC00IHBsLTJcIiArIChwYXRoLmluY2x1ZGVzKFwiY28tbGFiXCIpID8gXCIgZm9udC10aGluXCIgOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhY2hpbmdcIj5UZWFjaGluZzwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHZhciBuYXYgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9wbGVmdH0gJHtzdHlsZXMubmF2Ymd9YH0+MDE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BsZWZ0fT5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BsZWZ0fSBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3Blbih0cnVlKX0+ICovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5mb1wiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm90dG9tbGVmdH0gJHtzdHlsZXMubmF2Ymd9YH0+U2F5IEhlbGxvPC9kaXY+ICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvdHRvbWxlZnR9IGJ1dHRvblRlcnRpYXJ5YH0+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIm1haWx0bzptZWdhbnBhcmFkb3dza2lAZ21haWwuY29tXCI+XG4gICAgICAgICAgICBTYXkgSGVsbG9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvdHRvbXJpZ2h0fSBmbGV4IGp1c3RpZnktZW5kYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tZWdwYXJhZG93c2tpL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2luc3RhLWxvZ28td2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHsvKiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly92aW1lby5jb20vdm9sdGFjb2xsZWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZpbWVvLWxvZ28td2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWVnYW5wYXJhZG93c2tpQGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbWFpbF9pY29uX3doaXRlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9tZWdhbnBhcmFkb3dza2kuY29tXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3dlYi1zaW1wbGUtd2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvcHJpZ2h0fSAke3N0eWxlcy5uYXZiZ31gfT4wMjwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL3RlYWNoaW5nXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudG9wcmlnaHR9PlBvcnRmb2xpbzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7LyogPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPiAqL31cbiAgICAgICAgey8qIDxQb3B1cCBvcGVuPXtpc1BvcHVwT3Blbn0gY2xvc2VQb3B1cD17Y2xvc2VQb3B1cH0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxkaXY+e25hdn08L2Rpdj47XG59XG4iXSwibmFtZXMiOlsiTW9kYWwiLCJMaW5rIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlBvcHVwIiwicGF0aHMiLCJob21lUGF0aCIsIk5hdiIsInByb3BzIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImlzUG9wdXBPcGVuIiwic2V0SXNQb3B1cE9wZW4iLCJjbG9zZU1vZGFsIiwiY2xvc2VQb3B1cCIsInJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJzaG93QWx0ZXJuYXRlTmF2IiwibmF2IiwiaW5jbHVkZXMiLCJ0b3BsZWZ0IiwibmF2YmciLCJib3R0b21sZWZ0IiwiYm90dG9tcmlnaHQiLCJpY29ucyIsInRvcHJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});