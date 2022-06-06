"use strict";
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
exports.id = "pages/api/account";
exports.ids = ["pages/api/account"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/pages/api/account.tsx":
/*!***********************************!*\
  !*** ./src/pages/api/account.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://bherman:GENESISpgatour3!@degencluster.bqy0g.mongodb.net/?retryWrites=true&w=majority`);\n    const db = client.db();\n    const accountCollection = db.collection(\"account\");\n    if (req.method === \"POST\") {\n        await accountCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Added Account\"\n        });\n    }\n    if (req.method === \"GET\") {\n        return accountCollection.find().forEach(console.log);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUd0QyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDaEMsTUFBTUMsTUFBTSxHQUFHLE1BQU1KLHdEQUFtQixDQUNwQyxDQUFDLGtHQUFrRyxDQUFDLENBQ3ZHO0lBQ0QsTUFBTU0sRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtJQUN0QixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3BELElBQUlOLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDUixHQUFHLENBQUNTLElBQUksQ0FBQyxDQUFDO1FBQzVDUCxNQUFNLENBQUNRLEtBQUssRUFBRSxDQUFDO1FBQ2ZULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7S0FDcEQ7SUFDRCxJQUFJYixHQUFHLENBQUNPLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0YsaUJBQWlCLENBQUNTLElBQUksRUFBRSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7S0FDdEQ7Q0FDRjtBQUVELGlFQUFlbEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVnZW4tcHJvcHMvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQudHN4PzVjZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICBgbW9uZ29kYitzcnY6Ly9iaGVybWFuOkdFTkVTSVNwZ2F0b3VyMyFAZGVnZW5jbHVzdGVyLmJxeTBnLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG4gICAgKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IGFjY291bnRDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcImFjY291bnRcIik7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGF3YWl0IGFjY291bnRDb2xsZWN0aW9uLmluc2VydE9uZShyZXEuYm9keSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoeyBNZXNzYWdlOiBcIkFkZGVkIEFjY291bnRcIiB9KTtcbiAgfVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHJldHVybiBhY2NvdW50Q29sbGVjdGlvbi5maW5kKCkuZm9yRWFjaChjb25zb2xlLmxvZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG5cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJhY2NvdW50Q29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZXRob2QiLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJzZW5kIiwiTWVzc2FnZSIsImZpbmQiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account.tsx"));
module.exports = __webpack_exports__;

})();