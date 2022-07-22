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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('03 July 2023 22:04');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('portfolio', 5000); //slider name/ time interval\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.querySelector('#total');\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (!calcSquare.value || !calcType[calcType.selectedIndex].value)\r\n      return (total.innerText = 0);\r\n\r\n    if (calcTypeValue === 1) {\r\n      price = 100;\r\n    } else if (calcTypeValue === 1.4) {\r\n      price = 120;\r\n    } else if (calcTypeValue === 2) {\r\n      price = 110;\r\n    }\r\n\r\n    if (+calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (+calcDay.value >= 10 || +calcDay.value === 0) {\r\n      calcDayValue = 1;\r\n    } else if (+calcDay.value >= 1 && +calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (+calcDay.value >= 5 && +calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    totalValue =\r\n      price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;\r\n\r\n    total.innerText = 0;\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        total.innerText = Math.round(totalValue * progress);\r\n      },\r\n    });\r\n  };\r\n\r\n  calcBlock.addEventListener('input', e => {\r\n    if (\r\n      e.target !== calcType &&\r\n      e.target !== calcSquare &&\r\n      e.target !== calcCount &&\r\n      e.target !== calcDay\r\n    )\r\n      return;\r\n    countCalc();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"slicer\": () => (/* binding */ slicer)\n/* harmony export */ });\nconst slicer = (str, num) => {\r\n  return str.trim().length > num\r\n    ? str.trim().substring(0, num).trim() + '...'\r\n    : str.trim();\r\n};\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  //функция плавного скролла\r\n  const scrollTo = (id) => {\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n    //не запускать дальнейшую проверку если клик не прошел по этим двум кнопкам и если не было открыто меню\r\n    if (\r\n      !e.target.closest(\".menu, main a\") &&\r\n      !menu.classList.contains(\"active-menu\")\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    //открытие и закрытие меню\r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.add(\"active-menu\");\r\n    } else if (\r\n      (menu.classList.contains(\"active-menu\") && !e.target.closest(\"menu\")) ||\r\n      e.target.classList.contains(\"close-btn\") ||\r\n      e.target.matches(\"menu ul li a\")\r\n    ) {\r\n      menu.classList.remove(\"active-menu\");\r\n    }\r\n\r\n    // запуск плавного скролла\r\n    if (e.target.closest(\"main a, menu ul li a\")) {\r\n      e.preventDefault();\r\n      scrollTo(e.target.closest(\"main a, menu ul li a\").getAttribute(\"href\"));\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const modalInner = modal.querySelector('.popup-content');\r\n  const btns = document.querySelector('.service');\r\n  let i = 0;\r\n  let a = 0;\r\n\r\n  const toDefault = () => {\r\n    modal.style.display = '';\r\n    modalInner.style.opacity = '';\r\n    modalInner.style.left = '';\r\n    i = 0;\r\n    a = 0;\r\n  };\r\n\r\n  btns.addEventListener('click', e => {\r\n    if (!e.target.closest('button.popup-btn')) return;\r\n\r\n    modal.style.display = 'block';\r\n\r\n    const width = document.documentElement.clientWidth;\r\n    if (width <= 768) return;\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 1000,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        modalInner.style.left = 38 * progress + '%';\r\n        modalInner.style.opacity = progress;\r\n      },\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', e => {\r\n    if (\r\n      !e.target.closest('.popup-content') ||\r\n      e.target.classList.contains('popup-close')\r\n    )\r\n      toDefault();\r\n  });\r\n\r\n  document.addEventListener('keydown', e => {\r\n    if (modal.style.display.length !== 0 && e.key === 'Escape') toDefault();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderName = \"slider\", timeInterval = 3000) => {\r\n  const sliderBlock = document.querySelector(`.${sliderName}-content`);\r\n  const slides = document.querySelectorAll(`.${sliderName}-item`);\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  if (!sliderBlock || slides.length === 0) {\r\n    console.log(`Ошибка в слайдере: не найдены необходимые классы`);\r\n    return;\r\n  }\r\n\r\n  const dots = (() => {\r\n    const dotsBlock = document.createElement(\"ul\");\r\n    dotsBlock.classList.add(`${sliderName}-dots`);\r\n    sliderBlock.append(dotsBlock);\r\n    for (let i = 0; i < slides.length; i++) {\r\n      const dot = document.createElement(\"li\");\r\n      dot.classList.add(`${sliderName}-dot`);\r\n      dotsBlock.append(dot);\r\n    }\r\n    const dots = document.querySelectorAll(`.${sliderName}-dot`);\r\n    dots[0].classList.add(`${sliderName}-dot-active`);\r\n    return dots;\r\n  })();\r\n\r\n  const prevSlide = (elems, index, startClass) => {\r\n    elems[index].classList.remove(startClass);\r\n  };\r\n  const nextSlide = (elems, index, startClass) => {\r\n    elems[index].classList.add(startClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(\r\n      slides,\r\n      currentSlide,\r\n      `${slides[0].className.match(/^\\S+\\S/)[0]}-active`\r\n    );\r\n    prevSlide(dots, currentSlide, `${sliderName}-dot-active`);\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(\r\n      slides,\r\n      currentSlide,\r\n      `${slides[0].className.match(/^\\S+\\S/g)[0]}-active`\r\n    );\r\n    nextSlide(dots, currentSlide, `${sliderName}-dot-active`);\r\n  };\r\n\r\n  const startSlide = () => {\r\n    interval = setInterval(autoSlide, timeInterval);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (\r\n      !e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`) ||\r\n      e.target.matches(`.${sliderName}-dot-active`)\r\n    )\r\n      return;\r\n    prevSlide(\r\n      slides,\r\n      currentSlide,\r\n      `${slides[0].className.match(/^\\S+\\S/g)[0]}-active`\r\n    );\r\n    prevSlide(dots, currentSlide, `${sliderName}-dot-active`);\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(`${sliderName}-dot`)) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(\r\n      slides,\r\n      currentSlide,\r\n      `${slides[0].className.match(/^\\S+\\S/g)[0]}-active`\r\n    );\r\n    nextSlide(dots, currentSlide, `${sliderName}-dot-active`);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (!e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`)) return;\r\n      stopSlide();\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (!e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`)) return;\r\n      startSlide(timeInterval);\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n  tabPanel.addEventListener('click', e => {\r\n    if (!e.target.closest('.service-header-tab')) return;\r\n    tabs.forEach((tab, index) => {\r\n      tab === e.target.closest('.service-header-tab')\r\n        ? (tab.classList.add('active'),\r\n          tabContent[index].classList.remove('d-none'))\r\n        : (tab.classList.remove('active'),\r\n          tabContent[index].classList.add('d-none'));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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