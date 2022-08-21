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

/***/ "./src/Forecast.js":
/*!*************************!*\
  !*** ./src/Forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forecast)\n/* harmony export */ });\nclass Forecast {\n    constructor(zipCode = \"27513\", apiKey = \"\") {\n        this.zip = zipCode;\n        this.keyInput = apiKey;\n        this.numberOfForecasts = 0;\n        this.time = [];\n        this.description = [];\n        this.tempFeels = [];\n        this.city = \"\";\n        this.sunrise = \"\";\n        this.sunset = \"\";\n    };\n\n    async getApiText() {\n        let apiKey = await fetch(\"./weathersecrets.txt\")\n        return (await apiKey.text()).toString();\n    };\n\n    async __getWeatherJson() {;\n        let key;\n        if (this.keyInput === \"\") {\n            key = await this.getApiText();\n        } else {\n            key = this.keyInput;\n        };\n        let getForecastJson = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.zip}&appid=${key}&units=imperial`)\n        return (getForecastJson.json());\n    };\n    \n    async weatherResult() {\n        let forecastJson = await this.__getWeatherJson();\n        console.log(forecastJson);\n        this.numberOfForecasts = forecastJson.list.length;\n        this.city = forecastJson.city.name + \", \" + forecastJson.city.country;\n        this.sunrise = forecastJson.city.sunrise;\n        this.sunset = forecastJson.city.sunset;\n        // console.log(\"Printing forecastJson.city\");\n        // console.log(forecastJson.city);\n        // console.log(\"Printing this.city\")\n        // console.log(this.city)\n        // console.log(\"Printing forecastJson.city.sunrise\");\n        // console.log(this.sunrise)\n        // console.log(\"Printing forecastJson.city.sunset\");\n        // console.log(this.sunset);\n        // console.log(\"Printing forecastJson.list\");\n        // console.log(forecastJson.list);\n        for (let i=0; i < (forecastJson.list.length); i++) {\n            // console.log(`This is forecastJson.list number ${i}`)\n            this.time.push(forecastJson.list[i].dt_txt);\n            // console.log(`This is the date/time ${forecastJson.list[i].dt_txt}`)\n            // console.log(\"Printing forecastJson.list[i].weather[0].description \")\n            this.description.push(forecastJson.list[i].weather[0].description);\n            // console.log(forecastJson.list[i].weather[0].description);\n            // console.log(\"Printing forecastJson.list[i].main.feels_like\")\n            this.tempFeels.push(forecastJson.list[i].main.feels_like);\n            // console.log(forecastJson.list[i].main.feels_like);\n        };\n    };\n    \n}\n\n//# sourceURL=webpack://weatherapp/./src/Forecast.js?");

/***/ }),

/***/ "./src/getGif.js":
/*!***********************!*\
  !*** ./src/getGif.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGif)\n/* harmony export */ });\nasync function getGif(searchTerm, giphyKey) {\n    let apiKey;\n    let textFromKey;\n    let key;\n    if (giphyKey) {\n        key = giphyKey;\n    } else {\n        apiKey = await fetch(\"./giphysecrets.txt\");\n        textFromKey = apiKey.text();\n        key = textFromKey.toString();\n    };\n    \n\n    let result = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`, {mode: \"cors\"})\n    return result.json();\n\n    \n\n    // none of the above works, wtf?!\n    // time to sleep, tomorrow.\n};\n\n//# sourceURL=webpack://weatherapp/./src/getGif.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forecast */ \"./src/Forecast.js\");\n/* harmony import */ var _getGif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getGif */ \"./src/getGif.js\");\n\n\n\nconst content = document.getElementById(\"forecast\");\nconst zipInput = document.getElementById(\"zipCode\");\nconst weatherKeyInput = document.getElementById(\"apiKey\");\nconst giphyInput = document.getElementById(\"giphyKey\");\nconst weatherButton = document.getElementById(\"getWeatherButton\");\nconst gifDiv = document.getElementById(\"gifDiv\");\n\nlet time = [];\nlet description = [];\nlet tempFeels = [];\n\n\n\nfunction createAndAppendChild(parent, text) {\n    let childElement = document.createElement(\"div\");\n    childElement.textContent = text;\n    parent.appendChild(childElement);\n};\n\n\nasync function getWeather(zip, openWeatherKey, giphyKey) {\n\n    if (document.getElementById(\"title\")) {\n        for (let i = time.length; i >= 0; i--) { \n            if (document.getElementById(`forecast${i}`)) {\n                document.getElementById(`forecast${i}`).remove();\n                console.log(`Deleted forecast${i}`);\n\n                delete document.getElementById(`forecast${i}`);\n                delete time[i];\n                delete description[i];\n                delete tempFeels[i];\n            };\n        };\n\n        document.getElementById(\"gif\").remove();\n        delete document.getElementById(\"gif\");\n\n        document.getElementById(\"title\").remove();\n        delete document.getElementById(\"title\");\n\n        time = [];\n        description = [];\n        tempFeels = [];\n    };\n\n    let newForecast = new _Forecast__WEBPACK_IMPORTED_MODULE_0__[\"default\"](zip, openWeatherKey);\n\n    await newForecast.weatherResult();\n    let titleDiv = document.createElement(\"div\");\n    titleDiv.id = \"title\";\n\n    let city = newForecast.city;\n    createAndAppendChild(titleDiv, city);\n    let sunrise = newForecast.sunrise;\n    createAndAppendChild(titleDiv, sunrise);\n    let sunset = newForecast.sunset;\n    createAndAppendChild(titleDiv, sunset);\n\n    content.appendChild(titleDiv);\n\n    for (let i = 0; i <= newForecast.numberOfForecasts; i++) {\n        let currentElement = document.createElement(\"div\");  \n        currentElement.id = `forecast${i}`;\n        \n        time.push(newForecast.time[i]);\n        description.push(newForecast.description[i]);\n        tempFeels.push(newForecast.tempFeels[i]);\n\n        createAndAppendChild(currentElement, time[i]);\n        createAndAppendChild(currentElement, description[i]);\n        createAndAppendChild(currentElement, tempFeels[i]);\n        \n        content.appendChild(currentElement);\n    };\n\n    let img = document.createElement(\"img\");\n    // img.src = await getGif(newForecast.description[0].toString().replace(/\\s/g, \"\")).data.images.original.url;\n    let linkToGif = await (0,_getGif__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newForecast.description[0].toString().replace(/\\s/g, \"\"), giphyKey);\n    console.log(linkToGif);\n    img.src = await linkToGif.data.url;\n    gifDiv.appendChild(img);\n    \n};\n\n\nweatherButton.addEventListener(\"click\", (e) => {\n    let zipValue = zipInput.value;\n    console.log(zipValue);\n    let keyValue = weatherKeyInput.value;\n    console.log(keyValue);\n    let giphyKey = giphyInput.value;\n    getWeather(zipValue, keyValue, giphyKey);\n})\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;