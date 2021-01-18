module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/FreddieWellfair/Desktop/social-media/contexts/AuthContext.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: session,\n    1: setSession\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    isLoggedIn: false,\n    user: null\n  });\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    pathname\n  } = router;\n\n  const login = async (username, password, setSubmitting) => {\n    fetch(\"/api/auth/login\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        username: username,\n        password: password\n      })\n    }).then(res => res.json()).then(data => {\n      setSession({\n        isLoggedIn: true,\n        user: data\n      });\n      localStorage.setItem(\"token\", data === null || data === void 0 ? void 0 : data.token);\n      router.push(\"/feed\");\n    }).catch(err => setTimeout(() => {\n      setSubmitting(false);\n      console.log(err);\n    }, 1000));\n  };\n\n  const signUp = async (email, username, password, setSubmitting, setSuccess) => {\n    fetch(\"/api/auth/signup\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        email: email,\n        username: username,\n        password: password\n      })\n    }).then(res => res.json()).then(() => {\n      setSubmitting(false);\n      setSuccess(true);\n    }).catch(err => setTimeout(() => {\n      setSubmitting(false);\n      console.log(err);\n    }));\n  };\n\n  const logout = () => {\n    setSession({\n      isLoggedIn: false,\n      user: null\n    });\n    router.push(\"/\");\n    localStorage.setItem(\"token\", \"\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (pathname !== \"/\" && !session.user) {\n      router.push(\"/\");\n    }\n  }, [pathname]);\n\n  const refreshFollowing = data => {\n    const {\n      isLoggedIn,\n      user\n    } = session;\n    const {\n      meta\n    } = user;\n\n    const updatedMeta = _objectSpread(_objectSpread({}, meta), {}, {\n      following: data\n    });\n\n    const updatedSession = {\n      isLoggedIn: isLoggedIn,\n      user: _objectSpread(_objectSpread({}, user), {}, {\n        meta: _objectSpread({}, updatedMeta)\n      })\n    };\n    setSession(_objectSpread({}, updatedSession));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      session,\n      login,\n      logout,\n      signUp,\n      refreshFollowing\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcz83MmJiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJ1c2VTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRTdWJtaXR0aW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNpZ25VcCIsImVtYWlsIiwic2V0U3VjY2VzcyIsImxvZ291dCIsInVzZUVmZmVjdCIsInJlZnJlc2hGb2xsb3dpbmciLCJtZXRhIiwidXBkYXRlZE1ldGEiLCJmb2xsb3dpbmciLCJ1cGRhdGVkU2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQztBQUNyQ0MsY0FBVSxFQUFFLEtBRHlCO0FBRXJDQyxRQUFJLEVBQUU7QUFGK0IsR0FBRCxDQUF0QztBQUlBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBZUYsTUFBckI7O0FBRUEsUUFBTUcsS0FBSyxHQUFHLE9BQU9DLFFBQVAsRUFBaUJDLFFB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VUFEUztBQUVyQkMsVUFBSSxrQ0FDQ0EsSUFERDtBQUVGaUMsWUFBSSxvQkFDQ0MsV0FERDtBQUZGO0FBRmlCLEtBQXZCO0FBVUFyQyxjQUFVLG1CQUFNdUMsY0FBTixFQUFWO0FBQ0QsR0FwQkQ7O0FBc0JBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQUV4QyxhQUFGO0FBQVdRLFdBQVg7QUFBa0IwQixZQUFsQjtBQUEwQkgsWUFBMUI7QUFBa0NLO0FBQWxDLEtBRFQ7QUFBQSxjQUdHckM7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQTdHRDs7QUErR2VELDJFQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvQXV0aENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsLFxuICB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcjtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQsIHNldFN1Ym1pdHRpbmcpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvYXV0aC9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0U2Vzc2lvbih7XG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICB1c2VyOiBkYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhPy50b2tlbik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2ZlZWRcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChcbiAgICBlbWFpbCxcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZCxcbiAgICBzZXRTdWJtaXR0aW5nLFxuICAgIHNldFN1Y2Nlc3NcbiAgKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFNlc3Npb24oe1xuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICB1c2VyOiBudWxsLFxuICAgIH0pO1xuXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aG5hbWUgIT09IFwiL1wiICYmICFzZXNzaW9uLnVzZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIGNvbnN0IHJlZnJlc2hGb2xsb3dpbmcgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiwgdXNlciB9ID0gc2Vzc2lvbjtcbiAgICBjb25zdCB7IG1ldGEgfSA9IHVzZXI7XG5cbiAgICBjb25zdCB1cGRhdGVkTWV0YSA9IHtcbiAgICAgIC4uLm1ldGEsXG4gICAgICBmb2xsb3dpbmc6IGRhdGEsXG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZWRTZXNzaW9uID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4udXNlcixcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIC4uLnVwZGF0ZWRNZXRhLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgc2V0U2Vzc2lvbih7IC4uLnVwZGF0ZWRTZXNzaW9uIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBzZXNzaW9uLCBsb2dpbiwgbG9nb3V0LCBzaWduVXAsIHJlZnJlc2hGb2xsb3dpbmcgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./contexts/AuthContext.js\");\n\nvar _jsxFileName = \"/Users/FreddieWellfair/Desktop/social-media/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  colors: {\n    brand: {\n      white: \"#fafafa\",\n      darkGrey: \"#171717\"\n    }\n  }\n});\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    theme: theme,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsidGhlbWUiLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImJyYW5kIiwid2hpdGUiLCJkYXJrR3JleSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0Msb0VBQVcsQ0FBQztBQUN4QkMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsU0FERjtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQUREO0FBRGdCLENBQUQsQ0FBekI7QUFTZSxTQUFTQyxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsU0FBSyxFQUFFUixLQUF2QjtBQUFBLDJCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dHMvQXV0aENvbnRleHRcIjtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9yczoge1xuICAgIGJyYW5kOiB7XG4gICAgICB3aGl0ZTogXCIjZmFmYWZhXCIsXG4gICAgICBkYXJrR3JleTogXCIjMTcxNzE3XCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });