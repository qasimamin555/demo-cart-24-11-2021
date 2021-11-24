/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/Home */ \"./client/components/pages/Home.js\");\n/* harmony import */ var _components_pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/About */ \"./client/components/pages/About.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu */ \"./client/components/menu.js\");\n/* harmony import */ var _components_pages_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/Cart */ \"./client/components/pages/Cart.js\");\n/* harmony import */ var _components_pages_Signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/Signup */ \"./client/components/pages/Signup.js\");\n/* harmony import */ var _components_pages_signin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/signin */ \"./client/components/pages/signin.js\");\n/* harmony import */ var _components_privateRoute_privateRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/privateRoute/privateRoute */ \"./client/components/privateRoute/privateRoute.js\");\n/* harmony import */ var _components_pages_searched__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/searched */ \"./client/components/pages/searched.js\");\n/* harmony import */ var _components_pages_Checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/Checkout */ \"./client/components/pages/Checkout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/\",\n    component: _components_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/product/:productId\",\n    component: _components_pages_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/cart\",\n    component: _components_pages_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/checkout\",\n    component: _components_pages_Checkout__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  })));\n};\n\nconst _default = (0,react_hot_loader__WEBPACK_IMPORTED_MODULE_4__.hot)(module)(MainRouter);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/MainRouter.js?");

/***/ }),

/***/ "./client/components/Api/auth-helper.js":
/*!**********************************************!*\
  !*** ./client/components/Api/auth-helper.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _authApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authApi */ \"./client/components/Api/authApi.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) {\n      return JSON.parse(sessionStorage.getItem('jwt'));\n    } else return false;\n  },\n\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb(); //optional\n\n    (0,_authApi__WEBPACK_IMPORTED_MODULE_0__.signout)().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/Api/auth-helper.js?");

/***/ }),

/***/ "./client/components/Api/authApi.js":
/*!******************************************!*\
  !*** ./client/components/Api/authApi.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"signin\": () => (/* binding */ signin),\n/* harmony export */   \"signout\": () => (/* binding */ signout)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = user => {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst signup = user => {\n  return fetch('/api/users/', {\n    method: 'post',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(error => error);\n};\n\nconst signout = () => {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\authApi.js\");\n  reactHotLoader.register(signup, \"signup\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\authApi.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\authApi.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/Api/authApi.js?");

/***/ }),

/***/ "./client/components/Api/productApi.js":
/*!*********************************************!*\
  !*** ./client/components/Api/productApi.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListLatest\": () => (/* binding */ ListLatest),\n/* harmony export */   \"read\": () => (/* binding */ read),\n/* harmony export */   \"listRelated\": () => (/* binding */ listRelated),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"sendingEmail\": () => (/* binding */ sendingEmail)\n/* harmony export */ });\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst ListLatest = () => {\n  return fetch('/api/products/latest', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst read = async params => {\n  return await fetch('/api/products/' + params.productId, {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst listRelated = async (params, signal) => {\n  try {\n    let response = await fetch('/api/products/related/' + params.productId, {\n      method: 'GET',\n      signal: signal\n    });\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst list = async params => {\n  const query = query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params);\n\n  try {\n    let response = await fetch('/api/products?' + query, {\n      method: 'GET'\n    });\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst sendingEmail = async email => {\n  console.log(email);\n  return fetch('/sendEmail', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      email: email\n    })\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ListLatest, \"ListLatest\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\productApi.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\productApi.js\");\n  reactHotLoader.register(listRelated, \"listRelated\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\productApi.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\productApi.js\");\n  reactHotLoader.register(sendingEmail, \"sendingEmail\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\Api\\\\productApi.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/Api/productApi.js?");

/***/ }),

/***/ "./client/components/button.js":
/*!*************************************!*\
  !*** ./client/components/button.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UnstyledButtonCustom)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/core/ButtonUnstyled */ \"@mui/core/ButtonUnstyled\");\n/* harmony import */ var _mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst ButtonRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ButtonRoot(props, ref) {\n  const {\n    children,\n    ...other\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", _extends({\n    width: \"150\",\n    height: \"50\"\n  }, other, {\n    ref: ref\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"polygon\", {\n    points: \"0,50 0,0 150,0 150,50\",\n    className: \"bg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"polygon\", {\n    points: \"0,50 0,0 150,0 150,50\",\n    className: \"borderEffect\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"foreignObject\", {\n    x: \"0\",\n    y: \"0\",\n    width: \"150\",\n    height: \"50\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, children)));\n});\nButtonRoot.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)\n};\nconst CustomButtonRoot = (0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRoot)(({\n  theme\n}) => `\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ${theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'};\n  --hover-color: ${theme.palette.mode === 'light' ? 'rgba(25,118,210,0.04)' : 'rgba(144,202,249,0.08)'};\n  --active-color: ${theme.palette.mode === 'light' ? 'rgba(25,118,210,0.12)' : 'rgba(144,202,249,0.24)'};\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.${_mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__.buttonUnstyledClasses.focusVisible} {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.${_mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__.buttonUnstyledClasses.focusVisible} {\n    outline: none;\n  }\n\n  &.${_mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__.buttonUnstyledClasses.active} { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }`);\nconst SvgButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function SvgButton(props, ref) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_core_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2___default()), _extends({}, props, {\n    component: CustomButtonRoot,\n    ref: ref\n  }));\n});\nfunction UnstyledButtonCustom() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SvgButton, null, \"Button\");\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ButtonRoot, \"ButtonRoot\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\button.js\");\n  reactHotLoader.register(CustomButtonRoot, \"CustomButtonRoot\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\button.js\");\n  reactHotLoader.register(SvgButton, \"SvgButton\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\button.js\");\n  reactHotLoader.register(UnstyledButtonCustom, \"UnstyledButtonCustom\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\button.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/button.js?");

/***/ }),

/***/ "./client/components/components/CardDetail.js":
/*!****************************************************!*\
  !*** ./client/components/components/CardDetail.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Table */ \"@mui/material/Table\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableBody */ \"@mui/material/TableBody\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableCell */ \"@mui/material/TableCell\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableContainer */ \"@mui/material/TableContainer\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableHead */ \"@mui/material/TableHead\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableRow */ \"@mui/material/TableRow\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nfunction CardDetail(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    style: {\n      fontFamily: 'sans-serif',\n      fontWeight: 'bold'\n    },\n    variant: 'h5'\n  }, props.detail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: {\n      fontWeight: 'bold'\n    }\n  }, \"Detail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Table__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), null, \"Dessert (100g serving)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), {\n    align: \"right\"\n  }, \"Calories\"))))));\n}\n\nconst _default = CardDetail;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CardDetail, \"CardDetail\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\CardDetail.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\CardDetail.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/CardDetail.js?");

/***/ }),

/***/ "./client/components/components/cards.js":
/*!***********************************************!*\
  !*** ./client/components/components/cards.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ActionAreaCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/PhotoCamera */ \"@mui/icons-material/PhotoCamera\");\n/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardMedia */ \"@mui/material/CardMedia\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import Link from '@mui/material/Link';\n\n\n\n\nfunction Copyright() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n    variant: \"body2\",\n    color: \"text.secondary\",\n    align: \"center\"\n  }, 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {\n    color: \"inherit\",\n    href: \"https://material-ui.com/\"\n  }, \"Your Website\"), ' ', new Date().getFullYear(), '.');\n}\n\nconst cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__.createTheme)();\nfunction ActionAreaCard(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n    marginTop: \"20px\",\n    component: \"h1\",\n    variant: \"h6\",\n    align: \"left\",\n    color: \"text.secondary\",\n    gutterBottom: true\n  }, props.productTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n    container: true,\n    spacing: 1\n  }, props.products.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n    item: true,\n    key: index,\n    xs: 6,\n    sm: 4,\n    md: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {\n    style: {\n      textDecoration: 'none'\n    },\n    to: '/product/' + item._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {\n    style: {\n      height: '350px'\n    },\n    sx: {\n      display: 'flex',\n      flexDirection: 'column'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: {\n      width: 'auto',\n      height: 250\n    } // sx={{ width: 500, height: 450 }}\n    ,\n    component: \"img\" // sx={{\n    //   // 16:9\n    //   pt: '2%',\n    // }}\n    ,\n    image: item.image,\n    alt: \"random\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {\n    sx: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n    color: \"orange\",\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Rs \", item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n    color: \"text.secondary\",\n    style: {\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis',\n      textTransform: 'capitalize',\n      fontWeight: 'bold'\n    }\n  }, item.description))))))))));\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cards.js\");\n  reactHotLoader.register(cards, \"cards\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cards.js\");\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cards.js\");\n  reactHotLoader.register(ActionAreaCard, \"ActionAreaCard\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cards.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/cards.js?");

/***/ }),

/***/ "./client/components/components/cart-handler.js":
/*!******************************************************!*\
  !*** ./client/components/components/cart-handler.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst cart = {\n  addCart(item, cb) {\n    let cart = [];\n\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        cart = JSON.parse(localStorage.getItem('cart'));\n      }\n\n      cart.push({\n        product: item,\n        quantity: 1\n      });\n      localStorage.setItem('cart', JSON.stringify(cart));\n      cb();\n    }\n  },\n\n  getCart() {\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        return JSON.parse(localStorage.getItem('cart'));\n      }\n    }\n\n    return [];\n  },\n\n  updateCart(itemIndex, quantity) {\n    let cart = [];\n\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        cart = JSON.parse(localStorage.getItem('cart'));\n      }\n\n      cart[itemIndex].quantity = quantity;\n      localStorage.setItem('cart', JSON.stringify(cart));\n    }\n  },\n\n  removeItem(itemIndex) {\n    let cart = [];\n\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        cart = JSON.parse(localStorage.getItem('cart'));\n      }\n\n      cart.splice(itemIndex, 1);\n      localStorage.setItem('cart', JSON.stringify(cart));\n    }\n\n    return cart;\n  },\n\n  itemTotal() {\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        return JSON.parse(localStorage.getItem('cart')).length;\n      }\n    }\n\n    return 0;\n  },\n\n  orderSucess(cb) {\n    if (typeof window !== \"undefined\") {\n      if (localStorage.getItem('cart')) {\n        localStorage.removeItem('cart');\n        cb();\n      }\n    }\n  }\n\n};\nconst _default = cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(cart, \"cart\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cart-handler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\cart-handler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/cart-handler.js?");

/***/ }),

/***/ "./client/components/components/categorie.js":
/*!***************************************************!*\
  !*** ./client/components/components/categorie.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FullWidthGrid)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({ ...theme.typography.body2,\n  padding: theme.spacing(1),\n  textAlign: 'center',\n  color: theme.palette.text.secondary\n}));\nfunction FullWidthGrid() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n    style: {\n      fontSize: '16px'\n    },\n    sx: {\n      flexGrow: 1,\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 6,\n    md: 11\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      fontWeight: 'bold',\n      marginLeft: 10\n    }\n  }, \"ALL CATEGORIES\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"Mobile phones\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"Cars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"Motorcycles\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"House\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"TV-Video-Audio\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"Tabletes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      cursor: 'pointer',\n      marginLeft: 20,\n      fontSize: 16\n    }\n  }, \"Lands\"))));\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Item, \"Item\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\categorie.js\");\n  reactHotLoader.register(FullWidthGrid, \"FullWidthGrid\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\categorie.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/categorie.js?");

/***/ }),

/***/ "./client/components/components/dialogue.js":
/*!**************************************************!*\
  !*** ./client/components/components/dialogue.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Menu */ \"@mui/material/Menu\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Person */ \"@mui/icons-material/Person\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Lock */ \"@mui/icons-material/Lock\");\n/* harmony import */ var _mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nfunction BasicMenu(props) {\n  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: handleClick,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n    size: \"large\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"primary-search-account-menu\",\n    \"aria-haspopup\": \"true\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {\n    PaperProps: {\n      style: {\n        width: 250\n      }\n    },\n    id: \"basic-menu\",\n    anchorEl: anchorEl,\n    open: open,\n    onClose: handleClose,\n    MenuListProps: {\n      'aria-labelledby': 'basic-button'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    style: {\n      textAlign: 'center',\n      textTransform: 'capitalize'\n    },\n    variant: 'h6'\n  }, \"Hi \", _Api_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && _Api_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: () => {\n      _Api_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].signout(async function () {\n        await history.push('/');\n        await handleClose();\n        await window.location.reload();\n      });\n    }\n  }, \"Sign Out \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_6___default()), {\n    style: {\n      position: 'absolute',\n      right: '3px'\n    }\n  }))));\n}\n\n__signature__(BasicMenu, \"useHistory{history}\\nuseState{[anchorEl, setAnchorEl](null)}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BasicMenu, \"BasicMenu\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\dialogue.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/dialogue.js?");

/***/ }),

/***/ "./client/components/components/error.js":
/*!***********************************************!*\
  !*** ./client/components/components/error.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Error = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {\n  severity: \"error\"\n}, \" \", props.children, \" \");\n\nconst _default = Error;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Error, \"Error\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\error.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\error.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/error.js?");

/***/ }),

/***/ "./client/components/components/imageSlider.js":
/*!*****************************************************!*\
  !*** ./client/components/components/imageSlider.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nfunction ImageSlider(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Carousel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Carousel.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    style: {\n      width: 300\n    } //  style={{height:400,width:'auto'}} \n    ,\n    className: \"d-block w-100\",\n    src: props.photo,\n    alt: \"First slide\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Carousel.Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, props.title)))));\n}\n\nconst _default = ImageSlider;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ImageSlider, \"ImageSlider\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\imageSlider.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\imageSlider.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/imageSlider.js?");

/***/ }),

/***/ "./client/components/components/price.js":
/*!***********************************************!*\
  !*** ./client/components/components/price.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cart_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-handler */ \"./client/components/components/cart-handler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nclass Price extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor() {\n    super();\n    this.state = {\n      redirect: false\n    };\n  }\n\n  addToCart() {\n    _cart_handler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addCart(this.props.data, async () => {\n      this.setState({\n        redirect: true\n      });\n    });\n  }\n\n  render() {\n    if (this.state.redirect) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n        to: '/cart'\n      });\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {\n      variant: 'h4'\n    }, this.props.data.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Arrives: Sep 29 - Oct 5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n      onClick: () => this.addToCart(),\n      style: {\n        textAlign: 'center',\n        backgroundColor: 'orange'\n      },\n      variant: \"contained\"\n    }, \"Add to Cart\")));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Price, \"Price\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\price.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\components\\\\price.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/components/price.js?");

/***/ }),

/***/ "./client/components/menu.js":
/*!***********************************!*\
  !*** ./client/components/menu.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrimarySearchAppBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/InputBase */ \"@mui/material/InputBase\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Badge */ \"@mui/material/Badge\");\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Menu */ \"@mui/material/Menu\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ \"@mui/icons-material/AccountCircle\");\n/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"@mui/icons-material/Mail\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Notifications */ \"@mui/icons-material/Notifications\");\n/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"@mui/icons-material/MoreVert\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _images_olx_logo_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/olx-logo.png */ \"./client/components/images/olx-logo.png\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/FormControl */ \"@mui/material/FormControl\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/OutlinedInput */ \"@mui/material/OutlinedInput\");\n/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/InputLabel */ \"@mui/material/InputLabel\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material/Chat */ \"@mui/icons-material/Chat\");\n/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./button */ \"./client/components/button.js\");\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"@mui/icons-material/AddShoppingCart\");\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* harmony import */ var _components_dialogue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dialogue */ \"./client/components/components/dialogue.js\");\n/* harmony import */ var _components_cart_handler__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cart-handler */ \"./client/components/components/cart-handler.js\");\n/* harmony import */ var _mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Pageview */ \"@mui/icons-material/Pageview\");\n/* harmony import */ var _mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var _Api_productApi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Api/productApi */ \"./client/components/Api/productApi.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import {InputGroup,FormControl} from 'react-bootstrap';\n\nconst Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(({\n  theme\n}) => ({\n  position: 'relative',\n  borderRadius: theme.shape.borderRadius,\n  backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.15),\n  '&:hover': {\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.25)\n  },\n  marginRight: theme.spacing(2),\n  marginLeft: 0,\n  width: '100%',\n  [theme.breakpoints.up('sm')]: {\n    marginLeft: theme.spacing(3),\n    width: 'auto'\n  }\n}));\nconst SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(({\n  theme\n}) => ({\n  padding: theme.spacing(0, 2),\n  height: '100%',\n  position: 'absolute',\n  pointerEvents: 'none',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center'\n}));\nconst StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7___default()))(({\n  theme\n}) => ({\n  color: 'inherit',\n  '& .MuiInputBase-input': {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)})`,\n    transition: theme.transitions.create('width'),\n    width: '100%',\n    [theme.breakpoints.up('md')]: {\n      width: '20ch'\n    }\n  }\n}));\nfunction PrimarySearchAppBar(props) {\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\");\n  const [direct, Not] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [datas, setData] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);\n\n  const handleChange = event => {\n    setValue(event.target.value);\n  };\n\n  const search = () => {\n    if (value) {\n      (0,_Api_productApi__WEBPACK_IMPORTED_MODULE_32__.list)({\n        search: value || undefined\n      }).then(async data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          await setData(data);\n          await Not(true);\n        }\n      });\n    }\n  };\n\n  if (direct) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Redirect, {\n      to: {\n        pathname: \"/search\",\n        state: datas\n      }\n    });\n  }\n\n  const isMenuOpen = Boolean(anchorEl);\n  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);\n\n  const handleProfileMenuOpen = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleMobileMenuClose = () => {\n    setMobileMoreAnchorEl(null);\n  };\n\n  const handleMenuClose = () => {\n    setAnchorEl(null);\n    handleMobileMenuClose();\n  };\n\n  const handleMobileMenuOpen = event => {\n    setMobileMoreAnchorEl(event.currentTarget);\n  };\n\n  const menuId = 'primary-search-account-menu';\n  const renderMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {\n    anchorEl: anchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: menuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMenuOpen,\n    onClose: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {\n    onClick: handleMenuClose\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {\n    onClick: handleMenuClose\n  }, \"My account\"));\n  const mobileMenuId = 'primary-search-account-menu-mobile';\n  const renderMobileMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {\n    anchorEl: mobileMoreAnchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: mobileMenuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMobileMenuOpen,\n    onClose: handleMobileMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Link, {\n    style: {\n      textDecoration: 'none'\n    },\n    to: '/cart'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n    onClick: handleMobileMenuClose,\n    size: \"large\",\n    \"aria-label\": \"show 4 new mails\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {\n    badgeContent: _components_cart_handler__WEBPACK_IMPORTED_MODULE_29__[\"default\"].itemTotal(),\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Cart\"))), _Api_auth_helper__WEBPACK_IMPORTED_MODULE_27__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dialogue__WEBPACK_IMPORTED_MODULE_28__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Link, {\n    style: {\n      textDecoration: \"none\"\n    },\n    to: '/signin'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {\n    onClick: handleMobileMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n    size: \"large\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"primary-search-account-menu\",\n    \"aria-haspopup\": \"true\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Profile\"))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n    sx: {\n      flexGrow: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n    position: \"fixed\",\n    color: \"default\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n    style: {\n      fontWeight: 'bold',\n      color: 'orange'\n    },\n    edge: \"start\",\n    color: \"secondary\",\n    \"aria-label\": \"open drawer\",\n    sx: {\n      mr: 1\n    }\n  }, \"Demo Shopping Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n    sx: {\n      flexGrow: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n    sx: {\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n    style: {\n      color: 'orange',\n      fontSize: '22px',\n      marginRight: '5px'\n    },\n    size: \"large\",\n    edge: \"end\",\n    \"aria-label\": \"account of current user\",\n    \"aria-haspopup\": \"true\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Link, {\n    style: {\n      color: 'black'\n    },\n    to: '/cart'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {\n    badgeContent: _components_cart_handler__WEBPACK_IMPORTED_MODULE_29__[\"default\"].itemTotal(),\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_25___default()), {\n    style: {\n      fontSize: '32px'\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), null, \"Cart\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n    sx: {\n      display: {\n        xs: 'flex',\n        md: 'none'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n    size: \"large\",\n    \"aria-label\": \"show more\",\n    \"aria-controls\": mobileMenuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleMobileMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default()), null))))), renderMobileMenu, renderMenu);\n}\n\n__signature__(PrimarySearchAppBar, \"useState{[anchorEl, setAnchorEl](null)}\\nuseState{[mobileMoreAnchorEl, setMobileMoreAnchorEl](null)}\\nuseState{[value,setValue](\\\"\\\")}\\nuseState{[direct,Not](false)}\\nuseState{[datas,setData]([])}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Search, \"Search\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\menu.js\");\n  reactHotLoader.register(SearchIconWrapper, \"SearchIconWrapper\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\menu.js\");\n  reactHotLoader.register(StyledInputBase, \"StyledInputBase\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\menu.js\");\n  reactHotLoader.register(PrimarySearchAppBar, \"PrimarySearchAppBar\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/menu.js?");

/***/ }),

/***/ "./client/components/pages/About.js":
/*!******************************************!*\
  !*** ./client/components/pages/About.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicGrid)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_imageSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imageSlider */ \"./client/components/components/imageSlider.js\");\n/* harmony import */ var _components_CardDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardDetail */ \"./client/components/components/CardDetail.js\");\n/* harmony import */ var _components_price_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/price.js */ \"./client/components/components/price.js\");\n/* harmony import */ var _Api_productApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Api/productApi */ \"./client/components/Api/productApi.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cards */ \"./client/components/components/cards.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({ ...theme.typography.body2,\n  padding: theme.spacing(1),\n  color: theme.palette.text.secondary\n}));\nfunction BasicGrid(props) {\n  const [product, setProduct] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});\n  const [suggestions, setSuggestions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);\n  const [progress, stopProgress] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');\n\n  const loadProduct = productId => {\n    (0,_Api_productApi__WEBPACK_IMPORTED_MODULE_8__.read)({\n      productId: productId\n    }).then(data => {\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setProduct(data);\n        stopProgress(true);\n      }\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    loadProduct(props.match.params.productId);\n  }, [props.match.params.productId]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_Api_productApi__WEBPACK_IMPORTED_MODULE_8__.listRelated)({\n      productId: props.match.params.productId\n    }, signal).then(data => {\n      if (data.error) {\n        setError(data.error);\n      }\n\n      setSuggestions(data);\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [props.match.params.productId]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, !progress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__.LinearProgress, {\n    style: {\n      marginTop: '74px'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n    style: {\n      paddingTop: '100px'\n    },\n    sx: {\n      flexGrow: 1\n    },\n    sx: {\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    }\n  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n    variant: 'h3'\n  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    style: {\n      margin: 10\n    },\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_imageSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    photo: product.image,\n    title: product.name\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CardDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    detail: product.description\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 2.5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_price_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    data: product\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cards__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    productTitle: 'Related products',\n    products: suggestions\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n    style: {\n      paddingTop: '100px'\n    },\n    sx: {\n      flexGrow: 1\n    },\n    sx: {\n      display: {\n        xs: 'flex',\n        md: 'none'\n      }\n    }\n  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n    variant: 'h3'\n  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: '15'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_imageSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    photo: product.image,\n    title: product.name\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 15\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_price_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    data: product\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 15\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CardDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    detail: product.description\n  }))), suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cards__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    productTitle: 'Related products',\n    products: suggestions\n  })))));\n}\n\n__signature__(BasicGrid, \"useState{[product,setProduct]({})}\\nuseState{[suggestions, setSuggestions]([])}\\nuseState{[progress,stopProgress](false)}\\nuseState{[error,setError]('')}\\nuseEffect{}\\nuseEffect{}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Item, \"Item\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\About.js\");\n  reactHotLoader.register(BasicGrid, \"BasicGrid\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\About.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/About.js?");

/***/ }),

/***/ "./client/components/pages/Cart.js":
/*!*****************************************!*\
  !*** ./client/components/pages/Cart.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_cart_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart-handler */ \"./client/components/components/cart-handler.js\");\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* harmony import */ var _Api_productApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Api/productApi */ \"./client/components/Api/productApi.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Cart(props) {\n  const [cartItems, setCartItems] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(_components_cart_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getCart());\n  const [click, setClick] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const [btn, setBtn] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\");\n\n  const sentEmail = event => {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget); // setBtn(true)\n\n    const email = data.get('email');\n    (0,_Api_productApi__WEBPACK_IMPORTED_MODULE_9__.sendingEmail)(email).then(result => {\n      console.log(result);\n\n      if (result.msg === 'success') {\n        _components_cart_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"].orderSucess(async () => {\n          await props.history.push('/');\n          await _components_cart_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"].itemTotal();\n          alert('email sent you successfully');\n        });\n      }\n    }).catch(err => alert('something wrong in email'));\n  };\n\n  const handleChange = index => event => {\n    let updatedCartItems = cartItems;\n\n    if (event.target.value == 0) {\n      updatedCartItems[index].quantity = 1;\n    } else {\n      updatedCartItems[index].quantity = event.target.value;\n    }\n\n    setCartItems([...updatedCartItems]);\n    _components_cart_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"].updateCart(index, event.target.value);\n  };\n\n  const removeItem = index => event => {\n    let updatedCartItems = _components_cart_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"].removeItem(index); // if(updatedCartItems.length == 0){\n    //   props.setCheckout(false)\n    // }\n\n    setCartItems(updatedCartItems);\n  };\n\n  const getTotal = () => {\n    return cartItems.reduce((a, b) => {\n      return a + b.quantity * b.product.price;\n    }, 0);\n  }; // const getItems = () => {\n  //   return cartItems.reduce((a,b)=>{\n  //       return (+a.quantity) + (+b.quantity)\n  //   })\n  // }\n\n\n  const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()))(({\n    theme\n  }) => ({ ...theme.typography.body2,\n    padding: theme.spacing(1),\n    color: theme.palette.text.secondary\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, cartItems.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {\n    style: {\n      paddingTop: '100px'\n    },\n    sx: {\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n    container: true,\n    spacing: 0\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n    style: {\n      margin: '20px'\n    },\n    item: true,\n    xs: 6.4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    style: {\n      margin: '5 20px',\n      fontWeight: '600'\n    },\n    variant: 'h5'\n  }, \"Shopping Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    style: {\n      float: 'right'\n    },\n    variant: 'h6'\n  }, \"Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, cartItems.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      container: true,\n      spacing: 2\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 4\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"d-block w-100\",\n      src: item.product.image\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 6\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n      variant: 'h6'\n    }, item.product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Eligible for FREE Shipping \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      value: item.quantity,\n      onChange: handleChange(index),\n      style: {\n        width: '13%',\n        outline: '1px solid blue',\n        textAlign: 'center'\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: removeItem(index),\n      style: {\n        marginLeft: 10\n      }\n    }, \"delete\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 2\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n      style: {\n        textAlign: 'right',\n        fontWeight: 600,\n        color: 'orange'\n      },\n      variant: 'h6'\n    }, \"Rs \", item.product.price))));\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n    item: true,\n    xs: 5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: 'h6'\n  }, \"Subtotal : \", getTotal(), \"Rs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" Your order qualifies for FREE Shipping. Choose this option at checkout. See details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    style: {\n      backgroundColor: 'orange'\n    },\n    onClick: () => props.history.push('/'),\n    variant: \"contained\"\n  }, \"Continue Shopping\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), click ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    style: {\n      fontWeight: 'bold',\n      fontSize: 25\n    }\n  }, \"enter your email :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: sentEmail\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"e.g.qasim@gmail.com ...\",\n    type: \"email\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    type: \"submit\",\n    style: {\n      backgroundColor: 'orange',\n      marginLeft: 20\n    },\n    disabled: btn,\n    variant: \"contained\"\n  }, \"Order\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    style: {\n      backgroundColor: 'orange'\n    },\n    onClick: () => setClick(true),\n    variant: \"contained\"\n  }, \"Proceed to Checkout\"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    sx: {\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    },\n    style: {\n      marginTop: 200,\n      textAlign: 'center',\n      fontWeight: 'bold',\n      fontSize: 30\n    }\n  }, \"No any product selected\"), cartItems.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {\n    style: {\n      paddingTop: '100px'\n    },\n    sx: {\n      display: {\n        xs: 'flex',\n        md: 'none'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n    container: true,\n    spacing: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n    item: true,\n    xs: 15\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: 'h6'\n  }, \"Subtotal $\", getTotal()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" Your order qualifies for FREE Shipping. Choose this option at checkout. See details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    style: {\n      backgroundColor: 'orange'\n    },\n    onClick: () => props.history.push('/'),\n    variant: \"contained\"\n  }, \"Continue Shopping\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), click ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    style: {\n      fontWeight: 'bold',\n      fontSize: 25\n    }\n  }, \"enter your email :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: sentEmail\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"e.g.qasim@gmail.com ...\",\n    type: \"email\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    type: \"submit\",\n    style: {\n      backgroundColor: 'orange',\n      marginLeft: 20\n    },\n    disabled: btn,\n    variant: \"contained\"\n  }, \"Order\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n    style: {\n      backgroundColor: 'orange'\n    },\n    onClick: () => setClick(true),\n    variant: \"contained\"\n  }, \"Proceed to Checkout\"))), cartItems.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 15\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        margin: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      container: true,\n      spacing: 2\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 5\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"d-block w-100\",\n      src: item.product.image\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      item: true,\n      xs: 7\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n      variant: 'h6'\n    }, item.product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Eligible for FREE Shipping \")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {\n      xs: 15,\n      item: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        margin: '0 15px',\n        textAlign: 'center'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      value: item.quantity,\n      onChange: handleChange(index),\n      style: {\n        width: '20%',\n        outline: '1px solid blue',\n        textAlign: 'center'\n      },\n      type: \"number\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: removeItem(index),\n      style: {\n        marginLeft: 10\n      }\n    }, \"delete\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null));\n  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    style: {\n      marginTop: 200,\n      textAlign: 'center',\n      fontWeight: 'bold',\n      fontSize: 35\n    },\n    sx: {\n      display: {\n        xs: 'flex',\n        md: 'none'\n      }\n    }\n  }, \"No any product selected\"));\n}\n\n__signature__(Cart, \"useState{[cartItems, setCartItems](cart.getCart())}\\nuseState{[click,setClick](false)}\\nuseState{[btn,setBtn](false)}\\nuseState{[value,setValue](\\\"\\\")}\");\n\nconst _default = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Cart, \"Cart\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Cart.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Cart.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/Cart.js?");

/***/ }),

/***/ "./client/components/pages/Checkout.js":
/*!*********************************************!*\
  !*** ./client/components/pages/Checkout.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// import React from 'react';\n// import request from 'request'\n// function Easypaisa(props) {\n//     const payment = () => {\n//         const options = {\n//             method: 'POST',\n//             url: 'https://api.eu-de.apiconnect.appdomain.cloud/easypaisaapigw-telenorbankpk-production/gateway/pinless/initiate-link-transaction',\n//             headers: {\n//               'X-IBM-Client-Id': 'f12fe2e5-ddd0-4c14-9e25-48fc67ef21ee',\n//               'X-IBM-Client-Secret': 'W0xK5jX5aM6wB1rH3kT7vL3mJ5kI4aF0bE6gW8mQ6uU1wX1dM3',\n//               // Credentials: 'REPLACE_THIS_VALUE',\n//               'content-type': 'application/json',\n//               accept: 'application/json'\n//             },\n//             body: {\n//               request: {\n//                 orderId: '6539888216244224',\n//                 storeId: '4453880825905152',\n//                 transactionAmount: '1761223297204224',\n//                 transactionType: 'dizhocs',\n//                 mobileAccountNo: '4903361739317481',\n//                 emailAddress: '879 Emve Road',\n//                 otp: 'popirsok'\n//               },\n//               signature: 'awfiudguur'\n//             },\n//             json: true\n//           };\n//           request(options, function (error, response, body) {\n//             if (error) throw new Error(error);\n//             console.log(body);\n//           });\n//     }\n//     return (\n//         <div style={{marginTop:'100px',textAlign:'center'}}>\n//             <button onClick={payment}>Payment Method</button>\n//         </div>\n//     );\n// }\n// export default Easypaisa;\n// // import React from 'react';\n// // function Easypaisa(props) {\n// //     const getApi = () => {\n// //         var url = 'https://newsapi.org/v2/everything?' +\n// //           'q=Apple&' +\n// //           'from=2021-10-15&' +\n// //           'sortBy=popularity&' +\n// //           'apiKey=516167e497494080b516c99fda0814bb';\n// //            var req = new Request(url);\n// //             fetch(req)\n// //               .then(function(response) {\n// //             console.log(response.json());\n// //         })\n// //       }\n// //     return (\n// //         <div style={{textAlign:'center',marginTop:200}}>\n// //             <button onClick={getApi}>get news</button>\n// //         </div>\n// //     );\n// // }\n// // export default Easypaisa;\n\n\n\n\nfunction Checkout(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: '100px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    style: {\n      backgroundColor: 'orange',\n      height: 400\n    },\n    alignItems: \"center\",\n    justify: \"center\"\n  }, \"hello worlld\"));\n}\n\nconst _default = Checkout;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Checkout, \"Checkout\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Checkout.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Checkout.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/Checkout.js?");

/***/ }),

/***/ "./client/components/pages/Home.js":
/*!*****************************************!*\
  !*** ./client/components/pages/Home.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_categorie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/categorie */ \"./client/components/components/categorie.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cards */ \"./client/components/components/cards.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Api_productApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Api/productApi */ \"./client/components/Api/productApi.js\");\n/* harmony import */ var _images_shooping_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/shooping.jpg */ \"./client/components/images/shooping.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const shuffleImage = () => {\n    return _images_shooping_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    (0,_Api_productApi__WEBPACK_IMPORTED_MODULE_4__.ListLatest)().then(data => {\n      if (data.error) {\n        console.log(data);\n        setError(data.error);\n      }\n\n      setProduct(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: 100\n    }\n  }, product.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.LinearProgress, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    varaint: 'h6'\n  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    History: props,\n    productTitle: 'Fresh Recommendation',\n    products: product\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null));\n}\n\n__signature__(Home, \"useState{[product,setProduct]([])}\\nuseState{[error,setError]('')}\\nuseEffect{}\");\n\nconst _default = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Home.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/Home.js?");

/***/ }),

/***/ "./client/components/pages/Signup.js":
/*!*******************************************!*\
  !*** ./client/components/pages/Signup.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Checkbox */ \"@mui/material/Checkbox\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/error */ \"./client/components/components/error.js\");\n/* harmony import */ var _Api_authApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Api/authApi */ \"./client/components/Api/authApi.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n // import Link from '@mui/material/Link';\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), _extends({\n    variant: \"body2\",\n    color: \"text.secondary\",\n    align: \"center\"\n  }, props), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {\n    color: \"inherit\",\n    href: \"https://material-ui.com/\"\n  }, \"Your Website\"), ' ', new Date().getFullYear(), '.');\n}\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.createTheme)();\nfunction SignUp(props) {\n  const [acount, setAcount] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n    open: false,\n    message: ''\n  });\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget); // eslint-disable-next-line no-console\n\n    const user = {\n      firstName: data.get('firstName'),\n      lastName: data.get('lastName'),\n      email: data.get('email'),\n      password: data.get('password')\n    }; //     if(user.firstName === ''){\n    //       setError('Enter First Name'); return;\n    //     }\n    //          if(user.lastName === ''){\n    //                     setError('Enter Last Name');\n    //                 return;\n    // }\n    //          if(user.email === ''){\n    //                   setError('Enter Email');\n    //                 return;\n    // }\n    //  const emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);\n    //           if(!emailPattern.test(user.email)){\n    //                   setError('Invalid Email Address'); return;\n    // }\n    //          if(user.password === ''){\n    //                   setError('Enter Password');\n    //                 return;\n    // }\n    // const strongRegex = new RegExp(\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})\");\n    //          if(!strongRegex.test(user.password)){\n    //                   setError(\"Your Password is too weak.Enter at least 1 capital and small alphabet and 1 num               ber\")\n    // }\n    //          if(user.password.length > 12){\n    //                   setError('your password must be  8 to 12 charctor');\n    //                  return;\n    //   }\n    //          if(user.password.length < 8){\n    //                 setError('your password must be  8 to 12 charctor');\n    //                return;\n    // }\n\n    (0,_Api_authApi__WEBPACK_IMPORTED_MODULE_15__.signup)(user).then(res => {\n      if (res.error) {\n        console.log(res);\n        setError(res.error);\n      } else {\n        console.log(res.message);\n        setAcount({\n          open: true,\n          message: res.message\n        });\n      }\n    });\n  }; // console.log('account',account)\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      marginTop: '100px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.ThemeProvider, {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default()), {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n    sx: {\n      marginTop: 8,\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: {\n      m: 1,\n      bgcolor: 'secondary.main'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n    component: \"form\",\n    noValidate: true,\n    onSubmit: handleSubmit,\n    sx: {\n      mt: 3\n    }\n  }, error === \"\" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_error__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: {\n      marginTop: 10\n    },\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    autoComplete: \"fname\",\n    name: \"firstName\",\n    required: true,\n    fullWidth: true,\n    id: \"firstName\",\n    label: \"First Name\",\n    autoFocus: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    required: true,\n    fullWidth: true,\n    id: \"lastName\",\n    label: \"Last Name\",\n    name: \"lastName\",\n    autoComplete: \"lname\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"new-password\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    sx: {\n      mt: 3,\n      mb: 2\n    }\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    container: true,\n    justifyContent: \"flex-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {\n    to: '/signin'\n  }, \"Already have an account? Sign in\"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Dialog, {\n    open: acount.open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.DialogTitle, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.DialogContentText, null, acount.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"raised\"\n  }, \"Sign In\")))));\n}\n\n__signature__(SignUp, \"useState{[acount,setAcount]({open:false,message:''})}\\nuseState{[error,setError]('')}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Signup.js\");\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Signup.js\");\n  reactHotLoader.register(SignUp, \"SignUp\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/Signup.js?");

/***/ }),

/***/ "./client/components/pages/searched.js":
/*!*********************************************!*\
  !*** ./client/components/pages/searched.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cards */ \"./client/components/components/cards.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nfunction Search(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log(props.location.state);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: 100\n    }\n  }, props.location.state ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    productTitle: 'Searching Result',\n    products: props.location.state\n  }) : \"Loading ...\");\n}\n\n__signature__(Search, \"useEffect{}\");\n\nconst _default = Search;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Search, \"Search\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\searched.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\searched.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/searched.js?");

/***/ }),

/***/ "./client/components/pages/signin.js":
/*!*******************************************!*\
  !*** ./client/components/pages/signin.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Checkbox */ \"@mui/material/Checkbox\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Api_authApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Api/authApi */ \"./client/components/Api/authApi.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/error */ \"./client/components/components/error.js\");\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), _extends({\n    variant: \"body2\",\n    color: \"text.secondary\",\n    align: \"center\"\n  }, props), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default()), {\n    color: \"inherit\",\n    href: \"https://material-ui.com/\"\n  }, \"Your Website\"), ' ', new Date().getFullYear(), '.');\n}\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.createTheme)();\nfunction SignIn(props) {\n  const [redirect, setRedirect] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget);\n    const user = {\n      email: data.get('email'),\n      password: data.get('password')\n    };\n    (0,_Api_authApi__WEBPACK_IMPORTED_MODULE_14__.signin)(user).then(result => {\n      if (result.error) {\n        setError(result.error); // this.setState({error: result.error})\n      } else {\n        _Api_auth_helper__WEBPACK_IMPORTED_MODULE_16__[\"default\"].authenticate(result, async () => {\n          await setRedirect(true);\n          await window.location.reload();\n        });\n      }\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Redirect, {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      marginTop: '100px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider, {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Container__WEBPACK_IMPORTED_MODULE_12___default()), {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {\n    sx: {\n      marginTop: 8,\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: {\n      m: 1,\n      bgcolor: 'secondary.main'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {\n    component: \"form\",\n    onSubmit: handleSubmit,\n    noValidate: true,\n    sx: {\n      mt: 1\n    }\n  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_error__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\",\n    autoFocus: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"current-password\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    sx: {\n      mt: 3,\n      mb: 2\n    }\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8___default()), {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8___default()), {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default()), {\n    href: \"/signup\",\n    variant: \"body2\"\n  }, \"Don't have an account? Sign Up\"))))))));\n}\n\n__signature__(SignIn, \"useState{[redirect,setRedirect](false)}\\nuseState{[error,setError]('')}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\signin.js\");\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\signin.js\");\n  reactHotLoader.register(SignIn, \"SignIn\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\pages\\\\signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/pages/signin.js?");

/***/ }),

/***/ "./client/components/privateRoute/privateRoute.js":
/*!********************************************************!*\
  !*** ./client/components/privateRoute/privateRoute.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/auth-helper */ \"./client/components/Api/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n  render: props => !_Api_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n    to: {\n      pathname: '/signin',\n      state: {\n        from: props.location\n      }\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props)\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\privateRoute\\\\privateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\components\\\\privateRoute\\\\privateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/components/privateRoute/privateRoute.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  palette: {\n    primary: {\n      light: '#8eacbb',\n      main: '#607d8b',\n      dark: '#34515e',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#e7ff8c',\n      main: '#b2ff59',\n      dark: '#7ecb20',\n      contrastText: '#000'\n    },\n    openTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.blueGrey[400],\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.lightGreen[400],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./client/theme.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || \"mongodb+srv://admin:qasim654@cluster0.gpl1x.mongodb.net/setup?retryWrites=true&w=majority\",\n  // mongoUri: process.env.MONGODB_URI ||\n  //   process.env.MONGO_HOST ||\n  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +\n  //   (process.env.MONGO_PORT || '27017') +\n  //   '/mernprojectsss',\n  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',\n  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',\n  stripe_test_api_key: 'YOUR_stripe_test_api_key',\n  strip_key: \"sk_test_51Jea9HClD5kfNQcfZOm4k2BBxJpZtc8SGV2KJjtTDT09EScSYXl6uQq07B0YMKT7FhrDszky7YMRTd3oC2KnFWYg0015ENB0vk\",\n  gmail: \"qasimamin1477@gmail.com\",\n  pass: \"xqlkgnnjhzbxvbtf\"\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./config/config.js?");

/***/ }),

/***/ "./server/controller/auth.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/auth.controller.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst signin = (req, res, next) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    'email': req.body.email\n  }, (err, user) => {\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].jwtSecret);\n    var expires = new Date(Date.now() + 18400 * 1000).toUTCString();\n    res.cookie(\"token\", token, {\n      maxAge: 18090 * 1000,\n      // expires works the same as the maxAge\n      expires: new Date(),\n      secure: true,\n      httpOnly: true\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.firstName,\n        email: user.email\n      }\n    });\n  });\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"token\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst _default = {\n  signin,\n  signout\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/controller/auth.controller.js?");

/***/ }),

/***/ "./server/controller/product.controller.js":
/*!*************************************************!*\
  !*** ./server/controller/product.controller.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product.model */ \"./server/models/product.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nodemailer_smtp_transport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer-smtp-transport */ \"nodemailer-smtp-transport\");\n/* harmony import */ var nodemailer_smtp_transport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nodemailer_smtp_transport__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst EmailService = async (req, res) => {\n  const tomail = req.body.email;\n  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2___default().createTransport(nodemailer_smtp_transport__WEBPACK_IMPORTED_MODULE_3___default()({\n    service: 'gmail',\n    auth: {\n      user: process.env.gmail,\n      pass: process.env.pass\n    }\n  }));\n  var mailOptions = {\n    from: process.env.gmail,\n    to: tomail,\n    subject: 'ZohraJabin Alert',\n    html: `<!doctype html>\n    <html ⚡4email>\n      <head>\n        <meta charset=\"utf-8\">\n      </head>\n      <body>\n          <h1>ZohraJabin</h1><hr />\n          <h2>\n              Thankyou for placced order ${tomail} !<br />\n              Your order number :u889374857988943\n          </h2>\n      </body>\n    </html>`\n  };\n  transporter.sendMail(mailOptions, function (error, info) {\n    if (error) {\n      res.json({\n        msg: error\n      });\n    } else {\n      res.json({\n        msg: 'success'\n      });\n    }\n  });\n};\n\nconst productByID = async (req, res, next, id) => {\n  try {\n    let product = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('shop', '_id name').exec();\n    if (!product) return res.status('400').json({\n      error: \"Product not found\"\n    });\n    req.product = product;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve product\"\n    });\n  }\n};\n\nconst products = (req, res) => {\n  const user = new _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save().then((err, result) => {\n    res.json().send(result);\n  });\n};\n\nconst listLatest = async (req, res) => {\n  await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).sort('-created').limit(5).exec((err, products) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(products);\n  });\n};\n\nconst read = (req, res) => {\n  _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById({\n    \"_id\": req.params.productId\n  }).exec((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    return res.json(result);\n  });\n};\n\nconst listRelated = async (req, res) => {\n  // console.log(req.product)\n  try {\n    let products = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      \"_id\": {\n        \"$ne\": req.product\n      },\n      \"category\": req.product.category\n    }).limit(5).populate('shop', '_id name').exec();\n    res.json(products);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  const query = {};\n  if (req.query.search) query.name = {\n    '$regex': req.query.search,\n    '$options': \"i\"\n  }; // if(req.query.category && req.query.category != 'All')\n  //   query.category =  req.query.category\n\n  try {\n    let products = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).exec();\n    res.json(products);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  products,\n  listLatest,\n  read,\n  listRelated,\n  productByID,\n  list,\n  EmailService\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(EmailService, \"EmailService\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(productByID, \"productByID\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(products, \"products\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(listLatest, \"listLatest\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(listRelated, \"listRelated\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\product.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/controller/product.controller.js?");

/***/ }),

/***/ "./server/controller/user.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/user.controller.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst create = (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save((err, result) => {\n    if (err) {\n      return res.json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json({\n      message: \"Successfully signed up!!!\"\n    });\n  });\n};\n\nconst _default = {\n  create\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\controller\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/controller/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_product_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/product.routes */ \"./server/routes/product.routes.js\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_15__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config(); // Middlewares\n\n\n_devBundle__WEBPACK_IMPORTED_MODULE_10__[\"default\"].compile(app);\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_15___default()());\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\napp.use('/', _routes_product_routes__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n});\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/**\n * Get unique error field name\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = // fieldName.charAt(0).toUpperCase() + fieldName.slice(1) +\n    ' email already existss';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/product.model.js":
/*!****************************************!*\
  !*** ./server/models/product.model.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  image: {\n    data: Buffer,\n    contentType: String\n  },\n  description: {\n    type: String,\n    trim: true\n  },\n  category: {\n    type: String\n  },\n  quantity: {\n    type: Number,\n    required: \"Quantity is required\"\n  },\n  price: {\n    type: Number,\n    required: \"Price is required\"\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  shop: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId),\n    ref: 'Shop'\n  }\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', ProductSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ProductSchema, \"ProductSchema\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\models\\\\product.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\models\\\\product.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/models/product.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  firstName: {\n    type: String,\n    trim: true,\n    required: 'firstName is required'\n  },\n  lastName: {\n    type: String,\n    trim: true,\n    required: 'lastName is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  seller: {\n    type: Boolean,\n    default: false\n  },\n  stripe_seller: {},\n  stripe_customer: {}\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/auth.controller */ \"./server/controller/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin/').post(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout/').get(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/product.routes.js":
/*!*****************************************!*\
  !*** ./server/routes/product.routes.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_product_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/product.controller */ \"./server/controller/product.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/product/').post(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products);\nrouter.route('/api/products/latest/').get(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listLatest);\nrouter.route('/api/products/:productId').get(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read);\nrouter.route('/api/products/related/:productId').get(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listRelated);\nrouter.route('/api/products').get(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\nrouter.route('/sendEmail').post(_controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EmailService);\nrouter.param('productId', _controller_product_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].productByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\product.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\product.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/routes/product.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/user.controller */ \"./server/controller/user.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').post(_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n // require('dotenv').config()\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', error => {\n  if (error) {\n    console.log('network problem');\n  }\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack://mern-setup/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!Doctype html>\n    <html lang='en'>\n        <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta charset='utf-8'>\n            <title>MERN Kickstart</title>\n        </head>\n        <body>\n            <div id='root'>${markup}</div>\n            <style>${css}</style>\n            <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n    </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nmodule.exports = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  // resolve: {\n  //   // modules: [...],\n  //   fallback: {\n  //     \"fs\": false,\n  //     \"tls\": false,\n  //     \"net\": false,\n  //     \"path\": false,\n  //     \"zlib\": false,\n  //     \"http\": false,\n  //     \"https\": false,\n  //     \"stream\": false,\n  //     \"crypto\": false,\n  //     // \"crypto-browserify\": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify \n  //   } \n  // },\n  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/index.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()] //     devtool: 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug\n  //     devServer: {\n  //                 contentBase: path.join(__dirname, 'public'),\n  //                 historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change\n  //  }\n\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\DEll\\\\Desktop\\\\setup for MERN\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-setup/./webpack.config.client.js?");

/***/ }),

/***/ "./client/components/images/olx-logo.png":
/*!***********************************************!*\
  !*** ./client/components/images/olx-logo.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ab6e0fbb0d2c29d919177e8be108f269.png\");\n\n//# sourceURL=webpack://mern-setup/./client/components/images/olx-logo.png?");

/***/ }),

/***/ "./client/components/images/shooping.jpg":
/*!***********************************************!*\
  !*** ./client/components/images/shooping.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fb9b2ac26555ce978840c202427addc0.jpg\");\n\n//# sourceURL=webpack://mern-setup/./client/components/images/shooping.jpg?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@mui/core/ButtonUnstyled":
/*!*******************************************!*\
  !*** external "@mui/core/ButtonUnstyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/core/ButtonUnstyled");

/***/ }),

/***/ "@mui/icons-material/AccountCircle":
/*!****************************************************!*\
  !*** external "@mui/icons-material/AccountCircle" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ "@mui/icons-material/AddShoppingCart":
/*!******************************************************!*\
  !*** external "@mui/icons-material/AddShoppingCart" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AddShoppingCart");

/***/ }),

/***/ "@mui/icons-material/Chat":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Chat" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Chat");

/***/ }),

/***/ "@mui/icons-material/Lock":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Lock" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ "@mui/icons-material/LockOutlined":
/*!***************************************************!*\
  !*** external "@mui/icons-material/LockOutlined" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LockOutlined");

/***/ }),

/***/ "@mui/icons-material/Mail":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Mail" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/icons-material/MoreVert":
/*!***********************************************!*\
  !*** external "@mui/icons-material/MoreVert" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ "@mui/icons-material/Notifications":
/*!****************************************************!*\
  !*** external "@mui/icons-material/Notifications" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Notifications");

/***/ }),

/***/ "@mui/icons-material/Pageview":
/*!***********************************************!*\
  !*** external "@mui/icons-material/Pageview" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Pageview");

/***/ }),

/***/ "@mui/icons-material/Person":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Person" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ "@mui/icons-material/PhotoCamera":
/*!**************************************************!*\
  !*** external "@mui/icons-material/PhotoCamera" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PhotoCamera");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Badge":
/*!**************************************!*\
  !*** external "@mui/material/Badge" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/CardMedia":
/*!******************************************!*\
  !*** external "@mui/material/CardMedia" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/InputBase":
/*!******************************************!*\
  !*** external "@mui/material/InputBase" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ "@mui/material/InputLabel":
/*!*******************************************!*\
  !*** external "@mui/material/InputLabel" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/Menu":
/*!*************************************!*\
  !*** external "@mui/material/Menu" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/OutlinedInput":
/*!**********************************************!*\
  !*** external "@mui/material/OutlinedInput" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/Table":
/*!**************************************!*\
  !*** external "@mui/material/Table" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Table");

/***/ }),

/***/ "@mui/material/TableBody":
/*!******************************************!*\
  !*** external "@mui/material/TableBody" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ "@mui/material/TableCell":
/*!******************************************!*\
  !*** external "@mui/material/TableCell" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ "@mui/material/TableContainer":
/*!***********************************************!*\
  !*** external "@mui/material/TableContainer" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ "@mui/material/TableHead":
/*!******************************************!*\
  !*** external "@mui/material/TableHead" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ "@mui/material/TableRow":
/*!*****************************************!*\
  !*** external "@mui/material/TableRow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");

/***/ }),

/***/ "nodemailer-smtp-transport":
/*!********************************************!*\
  !*** external "nodemailer-smtp-transport" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer-smtp-transport");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;