/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/code.js":
/*!*************************!*\
  !*** ./src/app/code.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navItemList = Array.from(document.querySelectorAll('.nav-item'));\nvar growthBtn = document.querySelector('.growth');\nvar lineAnimation = document.querySelector('.lineBold');\nvar ambitionsBtn = document.querySelector('.ambitions');\nvar ambitionsCard = Array.from(document.querySelectorAll('.ambitionsCard'));\nvar growthCard = Array.from(document.querySelectorAll('.growthCard'));\nvar inputField = document.querySelector('.typeText_');\n\nfunction onScroll(event) {\n  var sections = document.querySelectorAll('.forScroll a');\n  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n\n  for (var i = 0; i < sections.length; i++) {\n    var currLink = sections[i];\n    var val = currLink.getAttribute('href');\n    val = val.substr(1);\n    var refElement = document.getElementById(val);\n\n    if (refElement.offsetTop - 110 <= scrollPos && refElement.offsetTop + refElement.offsetHeight - 110 > scrollPos) {\n      document.querySelector('.nav-link').classList.remove('active');\n      currLink.classList.add('active');\n    } else {\n      currLink.classList.remove('active');\n    }\n  }\n}\n\n;\nwindow.addEventListener(\"scroll\", onScroll);\n\nvar changeToAmbitions = function changeToAmbitions() {\n  growthCard.forEach(function (el) {\n    el.style.display = 'none';\n  });\n  ambitionsCard.forEach(function (el) {\n    el.style.display = 'flex';\n    el.style.flexDirection = 'column';\n    el.style.alignItems = 'center';\n    el.style.justifyContent = 'space-between';\n  });\n  lineAnimation.style.transform = 'translateX(175px)';\n  lineAnimation.style.transition = 'transform 0.3s';\n};\n\nvar changeToGrowth = function changeToGrowth() {\n  growthCard.forEach(function (el) {\n    el.style.display = 'flex';\n    el.style.flexDirection = 'column';\n    el.style.alignItems = 'center';\n    el.style.justifyContent = 'space-between';\n  });\n  ambitionsCard.forEach(function (el) {\n    el.style.display = 'none';\n  });\n\n  if (lineAnimation.hasAttribute('style')) {\n    lineAnimation.style.transform = 'translateX(0px)';\n    lineAnimation.style.transition = 'transform 0.3s';\n  }\n};\n\ngrowthBtn.addEventListener('click', changeToGrowth);\nambitionsBtn.addEventListener('click', changeToAmbitions);\n\nfunction parallax() {\n  var parallax = document.querySelectorAll(\".parallax\"),\n      speed = 0.05;\n\n  window.onscroll = function () {\n    [].slice.call(parallax).forEach(function (el, i) {\n      var windowYOffset = window.pageYOffset,\n          elBackgroundPos = \"50% \" + windowYOffset * speed + \"px\";\n      el.style.backgroundPosition = elBackgroundPos;\n    });\n  };\n}\n\nparallax();\n\nvar showSendBtn = function showSendBtn() {\n  var value = inputField.value;\n\n  if (value.length >= 1) {\n    document.querySelector('.attach').style.display = 'none';\n    document.querySelector('.sendChat').style.display = 'block';\n  } else {\n    document.querySelector('.attach').style.display = 'block';\n    document.querySelector('.sendChat').style.display = 'none';\n  }\n};\n\ninputField.onkeyup = showSendBtn;\n\nwindow.openForm = function () {\n  document.getElementById(\"myForm\").style.display = \"block\";\n  document.getElementById(\"myForm\").style.transition = \"1s\";\n};\n\ndocument.querySelector('.closeChat').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.getElementById(\"myForm\").style.display = \"none\";\n});\n$(\"#homeBtn, #logoName, #logoBottom, #scrollUp\").click(function (e) {\n  e.preventDefault();\n  $([document.documentElement, document.body]).animate({\n    scrollTop: $(\"#home\").offset().top - 110\n  }, 500);\n});\n$(\"#aboutBtn\").click(function (e) {\n  e.preventDefault();\n  $([document.documentElement, document.body]).animate({\n    scrollTop: $(\"#about\").offset().top - 110\n  }, 500);\n});\n$(\"#servicesBtn\").click(function (e) {\n  e.preventDefault();\n  $([document.documentElement, document.body]).animate({\n    scrollTop: $(\"#services\").offset().top - 110\n  }, 500);\n});\n$(\"#contactBtn\").click(function (e) {\n  e.preventDefault();\n  $([document.documentElement, document.body]).animate({\n    scrollTop: $(\"#contact\").offset().top - 110\n  }, 500);\n});\n\nfunction mediaQuerryListener(x) {\n  if (x.matches) {\n    console.log(\"max width function\");\n    $(window).scroll(function () {\n      if (x.matches) {\n        clearTimeout($.data(this, 'scrollTimer'));\n        $.data(this, 'scrollTimer', setTimeout(function () {\n          $('#scrollUp').removeClass('show-flex');\n          $('#scrollUp').addClass('hide');\n        }, 3000));\n      } else {\n        clearTimeout($.data(this, 'scrollTimer'));\n        $('#scrollUp').removeClass('show-flex');\n        $('#scrollUp').addClass('hide');\n      }\n    });\n    $(document).scroll(function () {\n      var y = $(this).scrollTop();\n      var homeElement = document.getElementById('home');\n      $('#scrollUp').removeClass('hide');\n      $('#scrollUp').addClass('show-flex');\n\n      if (y < homeElement.offsetHeight) {\n        $('#scrollUp').removeClass('show-flex');\n        $('#scrollUp').addClass('hide');\n      } else {\n        $('#scrollUp').removeClass('hide');\n        $('#scrollUp').addClass('show-flex');\n      }\n    });\n  }\n}\n\nvar maxWidth992px = window.matchMedia(\"(max-width: 992px)\");\nmaxWidth992px.addListener(mediaQuerryListener);\nmediaQuerryListener(maxWidth992px);\n\n//# sourceURL=webpack:///./src/app/code.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss/main.scss */ \"./src/styles/scss/main.scss\");\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/code */ \"./src/app/code.js\");\n/* harmony import */ var _app_code__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_code__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import './assets/images/climb.jpg';\n// import loginpng from './assets/images/login.png';\n// import cloud_2png from './assets/images/cloud_2.png';\n// import portraitjpg from './assets/images/portrait.jpg';\n// import facebookpng from './assets/images/facebook.png';\n// import twitterpng from './assets/images/twitter.png';\n// import instagrampng from './assets/images/instagram.png';\n// import youtubepng from './assets/images/youtube.png';\n// import attachmentsvg from './assets/icons/attachment.svg';\n// import closesvg from './assets/icons/close.svg';\n// import emojisvg from './assets/icons/emoji.svg';\n// import sendsvg from './assets/icons/send.svg';\n// import up_arrowsvg from './assets/icons/up_arrow.svg';\n// document.getElementById('climb-jpg').setAttribute('src', climbjpg);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/styles/scss/main.scss":
/*!***********************************!*\
  !*** ./src/styles/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/scss/main.scss?");

/***/ })

/******/ });