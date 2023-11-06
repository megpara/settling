/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst pageVariants = {\n  pageInitial: {\n    opacity: 0\n  },\n  pageAnimate: {\n    // backgroundColor: \"transparent\",\n    opacity: 1\n  },\n  pageExit: {\n    opacity: 0\n  }\n};\nconst pageMotionProps = {\n  initial: \"pageInitial\",\n  animate: \"pageAnimate\",\n  exit: \"pageExit\",\n  variants: pageVariants\n};\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    Array.from(document.querySelectorAll('head > link[rel=\"stylesheet\"][data-n-p]')).forEach(node => {\n      node.removeAttribute(\"data-n-p\");\n    });\n\n    const mutationHandler = mutations => {\n      mutations.forEach(({\n        target\n      }) => {\n        if (target.nodeName === \"STYLE\") {\n          if (target.getAttribute(\"media\") === \"x\") {\n            target.removeAttribute(\"media\");\n          }\n        }\n      });\n    };\n\n    const observer = new MutationObserver(mutationHandler);\n    observer.observe(document.head, {\n      subtree: true,\n      attributeFilter: [\"media\"]\n    });\n    return () => {\n      observer.disconnect();\n    };\n  }, []);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const path = router.asPath;\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (path == \"/\") {\n      document.documentElement.style.overflow = \"hidden\";\n    } else {\n      document.documentElement.style.overflow = \"auto\";\n    }\n  }, [path]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n      exitBeforeEnter: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, _objectSpread(_objectSpread({}, pageMotionProps), {}, {\n        style: {\n          height: \"100%\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }), router.route, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNLEVBQUU7QUFBVixTQUhUO0FBQUEsK0JBS0UsOERBQUMsU0FBRCxvQkFBZTFCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLFVBQ09vQixNQUFNLENBQUNPLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBLGtCQURGO0FBbUJEOztBQUVELGlFQUFlN0IsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcGFnZVZhcmlhbnRzID0ge1xuICBwYWdlSW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIHBhZ2VBbmltYXRlOiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbiAgcGFnZUV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICB9LFxufTtcblxuY29uc3QgcGFnZU1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiBcInBhZ2VJbml0aWFsXCIsXG4gIGFuaW1hdGU6IFwicGFnZUFuaW1hdGVcIixcbiAgZXhpdDogXCJwYWdlRXhpdFwiLFxuICB2YXJpYW50czogcGFnZVZhcmlhbnRzLFxufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hlYWQgPiBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1bZGF0YS1uLXBdJylcbiAgICApLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1uLXBcIik7XG4gICAgfSk7XG4gICAgY29uc3QgbXV0YXRpb25IYW5kbGVyID0gKG11dGF0aW9ucykgPT4ge1xuICAgICAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJtZWRpYVwiKSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbkhhbmRsZXIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwge1xuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wibWVkaWFcIl0sXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRoID0gcm91dGVyLmFzUGF0aDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aCA9PSBcIi9cIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgfVxuICB9LCBbcGF0aF0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+e1wiIFwifVxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAga2V5PXtyb3V0ZXIucm91dGV9XG4gICAgICAgICAgey4uLnBhZ2VNb3Rpb25Qcm9wc31cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwicGFnZVZhcmlhbnRzIiwicGFnZUluaXRpYWwiLCJvcGFjaXR5IiwicGFnZUFuaW1hdGUiLCJwYWdlRXhpdCIsInBhZ2VNb3Rpb25Qcm9wcyIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsInZhcmlhbnRzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm11dGF0aW9uSGFuZGxlciIsIm11dGF0aW9ucyIsInRhcmdldCIsIm5vZGVOYW1lIiwiZ2V0QXR0cmlidXRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImhlYWQiLCJzdWJ0cmVlIiwiYXR0cmlidXRlRmlsdGVyIiwiZGlzY29ubmVjdCIsInJvdXRlciIsInBhdGgiLCJhc1BhdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();