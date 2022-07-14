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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => (/* binding */ Index),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ \"parse\");\n/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Index = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const user = new (parse__WEBPACK_IMPORTED_MODULE_2___default().User)();\n    const { 0: submitting , 1: setSubmitting1  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const onLogin = async (values)=>{\n        parse__WEBPACK_IMPORTED_MODULE_2___default().User.logIn(values.username, values.password).then((user)=>{\n            console.log('successfully logged ${user.get(\"username\")}');\n            router.push(\"/home\");\n            return true;\n        }).catch((error)=>{\n            console.log(user);\n            console.log({\n                error\n            });\n            return false;\n        });\n    };\n    function validateUser(value) {\n        let error;\n        if (!value) {\n            error = \"Username required\";\n        }\n        return error;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        background: \"#212121\",\n        width: \"100%\",\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n            column: 1,\n            spacing: \"10px\",\n            justifyContent: \"center\",\n            width: \"100%\",\n            pt: \"25vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"white\",\n                        children: \"DegenProps baby\"\n                    }, void 0, false, {\n                        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        width: \"25%\",\n                        border: \"1px solid white\",\n                        src: \"https://i.imgur.com/RjxRYti.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {\n                    initialValues: {\n                        username: \"\",\n                        password: \"\"\n                    },\n                    onSubmit: async (values, setSubmitting)=>{\n                        console.log(values);\n                        onLogin(values);\n                        setSubmitting(false);\n                    },\n                    children: ({ isSubmitting  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {\n                                        name: \"username\",\n                                        validate: validateUser,\n                                        children: ({ field , form  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n                                                isInvalid: form.errors.name && form.touched.name,\n                                                isRequired: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                                        m: \"10px\",\n                                                        ...field,\n                                                        textColor: \"white\",\n                                                        width: \"30%\",\n                                                        id: \"username\",\n                                                        placeholder: \"username\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {\n                                    name: \"password\",\n                                    validate: validateUser,\n                                    children: ({ field , form  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n                                            isInvalid: form.errors.name && form.touched.name,\n                                            isRequired: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                                    ...field,\n                                                    m: \"10px\",\n                                                    textColor: \"white\",\n                                                    width: \"30%\",\n                                                    id: \"password\",\n                                                    placeholder: \"password\",\n                                                    type: \"password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        variant: \"outline\",\n                                        border: \"1px solid\",\n                                        textColor: \"white\",\n                                        type: \"submit\",\n                                        isLoading: isSubmitting,\n                                        _hover: {\n                                            bg: \"#FFFFFF00\"\n                                        },\n                                        _active: {\n                                            bg: \"#FFFFFF00\",\n                                            borderImage: \"linear-gradient(to bottom, #D94389, #a858f5) 1\",\n                                            outline: \"none\"\n                                        },\n                                        mt: \"10px\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, undefined),\n                \");\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/herman/Projects/DegenProps/src/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUY7QUFNOUQ7QUFDQztBQUNLO0FBQ2M7QUFDTDtBQUVqQyxNQUFNYyxLQUFLLEdBQUcsSUFBTTtJQUN6QixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsTUFBTUcsSUFBSSxHQUFHLElBQUlSLG1EQUFVLEVBQUU7SUFDN0IsTUFBTSxFQWZSLEdBZVNVLFVBQVUsR0FmbkIsR0FlcUJDLGNBQWEsTUFBSVYsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFbkQsTUFBTVcsT0FBTyxHQUFHLE9BQU1DLE1BQU0sR0FBSztRQUMvQmIsdURBQWdCLENBQUNhLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFRixNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUMvQ0MsSUFBSSxDQUFDLENBQUNULElBQWdCLEdBQUs7WUFDMUJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO1lBQzFEWixNQUFNLENBQUNhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztTQUNYLENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEtBQWEsR0FBSztZQUN4QkosT0FBTyxDQUFDQyxHQUFHLENBQUNYLElBQUksQ0FBQyxDQUFDO1lBQ2xCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQztnQkFBQ0csS0FBSzthQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLEtBQUssQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDRjtJQUVELFNBQVNDLFlBQVksQ0FBQ0MsS0FBSyxFQUFDO1FBQzFCLElBQUlGLEtBQUs7UUFDVCxJQUFJLENBQUNFLEtBQUssRUFBRTtZQUNWRixLQUFLLEdBQUcsbUJBQW1CLENBQUM7U0FDN0I7UUFDRCxPQUFPQSxLQUFLLENBQUM7S0FDZDtJQUVELHFCQUNFLDhEQUFDM0IsaURBQUc7UUFBQzhCLFVBQVUsRUFBQyxTQUFTO1FBQUNDLEtBQUssRUFBQyxNQUFNO1FBQUNDLE1BQU0sRUFBQyxPQUFPO2tCQUNyRCw0RUFBQ25DLHdEQUFVO1lBQUNvQyxNQUFNLEVBQUUsQ0FBQztZQUFFQyxPQUFPLEVBQUMsTUFBTTtZQUFDQyxjQUFjLEVBQUMsUUFBUTtZQUFDSixLQUFLLEVBQUMsTUFBTTtZQUFDSyxFQUFFLEVBQUMsTUFBTTs7OEJBQ2xGLDhEQUFDdEMsb0RBQU07OEJBQ0wsNEVBQUNJLGtEQUFJO3dCQUFDbUMsS0FBSyxFQUFDLE9BQU87a0NBQUMsaUJBRXBCOzs7OztpQ0FBTzs7Ozs7NkJBQ0E7OEJBQ1QsOERBQUN2QyxvREFBTTs4QkFDTCw0RUFBQ0csbURBQUs7d0JBQUM4QixLQUFLLEVBQUMsS0FBSzt3QkFBQ08sTUFBTSxFQUFDLGlCQUFpQjt3QkFBQ0MsR0FBRyxFQUFDLGlDQUFpQzs7Ozs7aUNBQUc7Ozs7OzZCQUM3RTs4QkFDVCw4REFBQ2hDLDBDQUFNO29CQUNMaUMsYUFBYSxFQUFFO3dCQUNYcEIsUUFBUSxFQUFFLEVBQUU7d0JBQ1pDLFFBQVEsRUFBRSxFQUFFO3FCQUNiO29CQUNIb0IsUUFBUSxFQUFFLE9BQU92QixNQUFNLEVBQUVGLGFBQWEsR0FBTTt3QkFDMUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFNLENBQUMsQ0FBQzt3QkFDcEJELE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUM7d0JBQ2hCRixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCOzhCQUVBLENBQUMsRUFBRTBCLFlBQVksR0FBRSxpQkFDaEIsOERBQUNqQyx3Q0FBSTs7OENBQ0QsOERBQUNYLG9EQUFNOzhDQUNQLDRFQUFDVSx5Q0FBSzt3Q0FBQ21DLElBQUksRUFBQyxVQUFVO3dDQUFDQyxRQUFRLEVBQUVoQixZQUFZO2tEQUMxQyxDQUFDLEVBQUNpQixLQUFLLEdBQUVDLElBQUksR0FBRSxpQkFDZCw4REFBQzFDLHlEQUFXO2dEQUFDMkMsU0FBUyxFQUFFRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0wsSUFBSSxJQUFJRyxJQUFJLENBQUNHLE9BQU8sQ0FBQ04sSUFBSTtnREFBRU8sVUFBVTswREFDckUsNEVBQUNwRCxvREFBTTs4REFDTCw0RUFBQ0MsbURBQUs7d0RBQUNvRCxDQUFDLEVBQUMsTUFBTTt3REFBRSxHQUFHTixLQUFLO3dEQUFFTyxTQUFTLEVBQUMsT0FBTzt3REFBQ3JCLEtBQUssRUFBQyxLQUFLO3dEQUFDc0IsRUFBRSxFQUFDLFVBQVU7d0RBQUNDLFdBQVcsRUFBQyxVQUFVOzs7OztpRUFBRzs7Ozs7NkRBQ3pGOzs7Ozt5REFDQzs7Ozs7aURBRVY7Ozs7OzZDQUNDOzhDQUNULDhEQUFDOUMseUNBQUs7b0NBQUNtQyxJQUFJLEVBQUMsVUFBVTtvQ0FBQ0MsUUFBUSxFQUFFaEIsWUFBWTs4Q0FDMUMsQ0FBQyxFQUFDaUIsS0FBSyxHQUFFQyxJQUFJLEdBQUUsaUJBQ2QsOERBQUMxQyx5REFBVzs0Q0FBQzJDLFNBQVMsRUFBRUQsSUFBSSxDQUFDRSxNQUFNLENBQUNMLElBQUksSUFBSUcsSUFBSSxDQUFDRyxPQUFPLENBQUNOLElBQUk7NENBQUVPLFVBQVU7c0RBQ3JFLDRFQUFDcEQsb0RBQU07MERBQ0wsNEVBQUNDLG1EQUFLO29EQUFFLEdBQUc4QyxLQUFLO29EQUFFTSxDQUFDLEVBQUMsTUFBTTtvREFBQ0MsU0FBUyxFQUFDLE9BQU87b0RBQUNyQixLQUFLLEVBQUMsS0FBSztvREFBQ3NCLEVBQUUsRUFBQyxVQUFVO29EQUFDQyxXQUFXLEVBQUMsVUFBVTtvREFBQ0MsSUFBSSxFQUFDLFVBQVU7Ozs7OzZEQUFHOzs7Ozt5REFDekc7Ozs7O3FEQUNDOzs7Ozs2Q0FFVjs4Q0FDViw4REFBQ3pELG9EQUFNOzhDQUNELDRFQUFDSyxvREFBTTt3Q0FDTHFELE9BQU8sRUFBQyxTQUFTO3dDQUNqQmxCLE1BQU0sRUFBQyxXQUFXO3dDQUNsQmMsU0FBUyxFQUFDLE9BQU87d0NBQ2pCRyxJQUFJLEVBQUMsUUFBUTt3Q0FDYkUsU0FBUyxFQUFFZixZQUFZO3dDQUN2QmdCLE1BQU0sRUFBRTs0Q0FBQ0MsRUFBRSxFQUFDLFdBQVc7eUNBQUM7d0NBQ3hCQyxPQUFPLEVBQUU7NENBQ1BELEVBQUUsRUFBQyxXQUFXOzRDQUNkRSxXQUFXLEVBQUUsZ0RBQWdEOzRDQUM3REMsT0FBTyxFQUFFLE1BQU07eUNBQUM7d0NBQ2xCQyxFQUFFLEVBQUMsTUFBTTtrREFBQyxRQUVaOzs7OztpREFBUzs7Ozs7NkNBQ047Ozs7OztxQ0FDSjs7Ozs7NkJBRUY7Z0JBQUEsSUFFWDs7Ozs7O3FCQUFjOzs7OztpQkFDTixDQUNUO0NBQ0Y7QUFHRCxpRUFBZXBELEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZ2VuLXByb3BzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUdyaWQsIENlbnRlciwgSW5wdXQsICBCb3gsIEltYWdlLCBUZXh0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBGb3JtSGVscGVyVGV4dCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBQYXJzZSBmcm9tICdwYXJzZSc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VyID0gbmV3IFBhcnNlLlVzZXIoKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTG9naW4gPSBhc3luYyh2YWx1ZXMpID0+IHtcbiAgICBQYXJzZS5Vc2VyLmxvZ0luKHZhbHVlcy51c2VybmFtZSwgdmFsdWVzLnBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHVzZXI6IFBhcnNlLlVzZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBsb2dnZWQgJHt1c2VyLmdldChcInVzZXJuYW1lXCIpfScpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogb2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh7ZXJyb3J9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVVc2VyKHZhbHVlKXtcbiAgICBsZXQgZXJyb3I7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgZXJyb3IgPSAnVXNlcm5hbWUgcmVxdWlyZWQnO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggYmFja2dyb3VuZD1cIiMyMTIxMjFcIiB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDB2aCc+XG4gICAgPFNpbXBsZUdyaWQgY29sdW1uPXsxfSBzcGFjaW5nPVwiMTBweFwiIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIHdpZHRoPVwiMTAwJVwiIHB0PVwiMjV2aFwiPlxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPFRleHQgY29sb3I9J3doaXRlJz5cbiAgICAgICAgICBEZWdlblByb3BzIGJhYnlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9DZW50ZXI+XG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIyNSVcIiBib3JkZXI9XCIxcHggc29saWQgd2hpdGVcIiBzcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vUmp4Ull0aS5qcGcnIC8+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCBzZXRTdWJtaXR0aW5nICkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgICAgb25Mb2dpbih2YWx1ZXMpO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3VzZXJuYW1lJyB2YWxpZGF0ZT17dmFsaWRhdGVVc2VyfT5cbiAgICAgICAgICAgICAgICB7KHtmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5uYW1lICYmIGZvcm0udG91Y2hlZC5uYW1lfSBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbT0nMTBweCcgey4uLmZpZWxkfSB0ZXh0Q29sb3I9J3doaXRlJyB3aWR0aD0nMzAlJyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSd1c2VybmFtZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdwYXNzd29yZCcgdmFsaWRhdGU9e3ZhbGlkYXRlVXNlcn0+XG4gICAgICAgICAgICAgICAgeyh7ZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMubmFtZSAmJiBmb3JtLnRvdWNoZWQubmFtZX0gaXNSZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gbT0nMTBweCcgdGV4dENvbG9yPSd3aGl0ZScgd2lkdGg9JzMwJScgaWQ9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXI9JzFweCBzb2xpZCdcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7Ymc6JyNGRkZGRkYwMCd9fVxuICAgICAgICAgICAgICAgICAgICBfYWN0aXZlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmc6JyNGRkZGRkYwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVySW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDk0Mzg5LCAjYTg1OGY1KSAxJyxcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZSd9fVxuICAgICAgICAgICAgICAgICAgICBtdD0nMTBweCc+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICAgICk7XG4gICAgPC9TaW1wbGVHcmlkID5cbiAgICAgIDwvQm94PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiU2ltcGxlR3JpZCIsIkNlbnRlciIsIklucHV0IiwiQm94IiwiSW1hZ2UiLCJUZXh0IiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJQYXJzZSIsInVzZVN0YXRlIiwiRm9ybWlrIiwiRmllbGQiLCJGb3JtIiwidXNlUm91dGVyIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VyIiwiVXNlciIsInN1Ym1pdHRpbmciLCJzZXRTdWJtaXR0aW5nIiwib25Mb2dpbiIsInZhbHVlcyIsImxvZ0luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJ2YWxpZGF0ZVVzZXIiLCJ2YWx1ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImNvbHVtbiIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsInB0IiwiY29sb3IiLCJib3JkZXIiLCJzcmMiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJuYW1lIiwidmFsaWRhdGUiLCJmaWVsZCIsImZvcm0iLCJpc0ludmFsaWQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNSZXF1aXJlZCIsIm0iLCJ0ZXh0Q29sb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhcmlhbnQiLCJpc0xvYWRpbmciLCJfaG92ZXIiLCJiZyIsIl9hY3RpdmUiLCJib3JkZXJJbWFnZSIsIm91dGxpbmUiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "parse":
/*!************************!*\
  !*** external "parse" ***!
  \************************/
/***/ ((module) => {

module.exports = require("parse");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();