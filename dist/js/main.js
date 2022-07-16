/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"03 July 2023 22:04\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  //функция плавного скролла\r\n  const scrollTo = (id) => {\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n    //открытие и закрытие меню\r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.add(\"active-menu\");\r\n    } else if (\r\n      (menu.classList.contains(\"active-menu\") && !e.target.closest(\"menu\")) ||\r\n      e.target.classList.contains(\"close-btn\") ||\r\n      e.target.matches(\"menu ul li a\")\r\n    ) {\r\n      menu.classList.remove(\"active-menu\");\r\n    }\r\n    // запуск плавного скролла\r\n    if (e.target.closest(\"main a, menu ul li a\")) {\r\n      e.preventDefault();\r\n      scrollTo(e.target.closest(\"main a, menu ul li a\").getAttribute(\"href\"));\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalInner = modal.querySelector(\".popup-content\");\r\n  const btns = document.querySelector(\".service\");\r\n  let i = 0;\r\n  let a = 0;\r\n\r\n  const toDefault = () => {\r\n    modal.style.display = \"\";\r\n    i = 0;\r\n    a = 0;\r\n  };\r\n\r\n  const animation = () => {\r\n    const width = document.documentElement.clientWidth;\r\n    if (width > 768) {\r\n      const idInterval = requestAnimationFrame(animation);\r\n      modalInner.style.opacity = 0;\r\n      modalInner.style.left = 0;\r\n\r\n      a++;\r\n      i = i + 0.03;\r\n\r\n      modalInner.style.left = a + \"%\";\r\n      modalInner.style.opacity = i;\r\n\r\n      if (a > 37) {\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    }\r\n  };\r\n\r\n  btns.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\"button.popup-btn\")) {\r\n      return;\r\n    } else {\r\n      modal.style.display = \"block\";\r\n      animation();\r\n    }\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    )\r\n      toDefault();\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (modal.style.display.length !== 0 && e.key === \"Escape\") toDefault();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      tabs.forEach((tab, index) => {\r\n        tab === e.target.closest(\".service-header-tab\")\r\n          ? (tab.classList.add(\"active\"),\r\n            tabContent[index].classList.remove(\"d-none\"))\r\n          : (tab.classList.remove(\"active\"),\r\n            tabContent[index].classList.add(\"d-none\"));\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  // deadline = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000); // for endless timer\r\n  const timerDays = document.getElementById(\"timer-days\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {\r\n      timeRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  // TIMEOUT\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    if (getTime.timeRemaining > 0) {\r\n      timerDays.textContent = getTime.days;\r\n      timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n      timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n      timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n      setTimeout(updateClock, 1000);\r\n    }\r\n  };\r\n  updateClock();\r\n\r\n  // INTERVAL\r\n  // const updateClock = () => {\r\n  //   let getTime = getTimeRemaining();\r\n  //   if (getTime.timeRemaining < 0) clearInterval(idInterval);\r\n  //   else {\r\n  //     timerDays.textContent = getTime.days;\r\n  //     timerHours.textContent = getTime.hours;\r\n  //     timerMinutes.textContent = getTime.minutes;\r\n  //     timerSeconds.textContent = getTime.seconds;\r\n  //   }\r\n  // };\r\n  // const idInterval = setInterval(updateClock, 1000);\r\n  // updateClock();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const calcInputs = document.querySelectorAll(\".calc-block > input\");\r\n  const textInputs = document.querySelectorAll(\"[name=user_name], .mess\");\r\n  const emailInputs = document.querySelectorAll(\"[type=email]\");\r\n  const telInputs = document.querySelectorAll(\"[type=tel]\");\r\n\r\n  const typeNumber = (input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  };\r\n\r\n  const typeCyrillic = (input) => {\r\n    input.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value\r\n        .replace(/\\s+/g, \" \") // заменить 1+ пробелов на 1\r\n        .replace(/\\-+/g, \"-\") // заменить 1+ дефизов на 1\r\n        .replace(/^\\s+|\\s+$/g, \"\") // убрать все пробелы в начале и конце\r\n        .replace(/^\\-+|\\-+$/g, \"\") // убрать все дефизы в начале и конце\r\n        .replace(/[^А-Яа-я\\s-]/g, \"\") // убрать все символы за исключением:\r\n        .replace(/(^|\\s)\\S/g, (a) => {\r\n          return a.toUpperCase();\r\n        });\r\n    });\r\n  };\r\n\r\n  const typeEmail = (input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']/g, \"\");\r\n    });\r\n  };\r\n  const typeTel = (input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]/g, \"\");\r\n    });\r\n  };\r\n\r\n  calcInputs.forEach((item) => {\r\n    typeNumber(item);\r\n  });\r\n\r\n  textInputs.forEach((item) => {\r\n    typeCyrillic(item);\r\n  });\r\n\r\n  emailInputs.forEach((item) => {\r\n    typeEmail(item);\r\n  });\r\n\r\n  telInputs.forEach((item) => {\r\n    typeTel(item);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;