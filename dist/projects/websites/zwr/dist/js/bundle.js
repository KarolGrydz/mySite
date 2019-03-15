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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var variables = {
	title6kV: document.querySelector('#area-6kV'),
	link6kV: document.querySelector('#area-text-6kV'),
	arr6kV: [],

	title500V: document.querySelector('#area-500V'),
	link500V: document.querySelector('#area-text-500V'),
	arr500V: [],

	title400V: document.querySelector('#area-400V'),
	link400V: document.querySelector('#area-text-400V'),
	arr400V: [],

	title230V: document.querySelector('#area-230V'),
	link230V: document.querySelector('#area-text-230V'),
	arr230V: [],

	titleSterowanie: document.querySelector('#area-sterowanie'),
	linkSterowanie: document.querySelector('#area-text-sterowanie'),
	arrSterowanie: [],

	titleFirmowe: document.querySelector('#area-firmowe'),
	linkFirmowe: document.querySelector('#area-text-firmowe'),
	arrFirmowe: [],

	version: ["Firefox 51", "Firefox 50", "Firefox 49", "Firefox 48", "Firefox 47", "Firefox 46", "Firefox 45", "Firefox 44", "Firefox 43", "Firefox 42", "Firefox 41", "Firefox 40", "Firefox 39", "Firefox 38", "Firefox 37", "Firefox 36", "Firefox 35", "Firefox 34"],

	machines: [/*---!!! Rozdzielnie 6kV !!!---*/
	/*Nowe nazewnictwo*/
	"r-11", "r-11.1", "r-11.2", "r-12", "r-12.1", "r-12.2", "r-13", "r-13.1", "r-13.2", "r-14", "r-14.1", "r-14.2", "r-15", "r-16", "r-16.1", "r-16.2", "r-17", "r-17.1", "r-17.2", "r-18.3", "r-15", "r-5.2", "r-4.3", "r-3.3", "r-3.2", "schemat sieci",
	/*Stare nazewnictwo*/
	"rwn-11", "rwn-11.1", "rwn-11.2", "rwn-12", "rwn-12.1", "rwn-12.2", "rwn-13", "rwn-13.1", "rwn-13.2", "rwn-14", "rwn-14.1", "rwn-14.2", "rwn-15", "rwn-16", "rwn-16.1", "rwn-16.2", "rwn-17", "rwn-17.1", "rwn-17.2", "rwn-18.3", "rwn-15", "rwn-5.2", "rwn-4.3", "rwn-3.3", "rwn-3.2",
	/*Rozdzielki 500V*/
	"rnn-11.1", "rnn-11.2 I", "rnn-12.1", "rnn-12.2 I", "rnn-13.1", "rnn-13.2 I", "rnn-13.2 II", "rnn-14.1", "rnn-14.2 II", "rnn-16.1", "rnn-16.2 I", "rnn-16.2 II", "rnn-17.1", "rnn-17.2 II", "rnn-4.3", "rg-wr", "rg-1 magazyn odczynników", "irnn-3.3", "irnn-3.2", "iirnn-3.3", "iirnn-3.2", "rnn-10.1", "rmf-500V", "rmk-500V", "rp-51", "rpo-1.1", "rpo-1.2", "rpo-3.1", "rpo-3.2", "rpo-4.1", "rpo-4.2", "rzk-1", "rzk-1.1", "rzk-1.1.1", "rzk-1.2",
	/*Rozdzielki 500V siłowe*/
	/*Flotacja*/
	"irf-3.1", "irf-3.2", "irf-3", "irf-51", "irf-pd1", "iirf-22", "iirf-51", "iirf-52", "iiirf-5", "rw-51", "szafa prób",
	/*Młynownia*/
	"irm-1", "irm-2", "irm-3", "irm-3.1", "irm-3.2", "irm-6", "irm-7", "irm-8", "irm-9", "irm-10", "irm-11", "irm-12", "irm-13", "irm-14", "irm-52", "irm-53", "sspo", "iirm-1", "iirm-2", "iirm-3", "iirm-4", "iirm-5", "iirm-6", "iirm-7", "iirm-9", "iirm-51", "iirm-52", "iiirm-3", "iiirm-4", "iiirm-4.1", "zasil. syst. monitoringu wizyjnego na WT-53 i 54",
	/*Przepompownia*/
	"rp-51.1", "rp-51.1.1", "rp-51.3", "rp-51.3.1",
	/*Rozdrabialnia*/
	"rr-1", "rr-1.1", "rr-3", "rr-4", "rr-4.1", "rr-5", "rr-5.1", "rr-9", "rr-10", "rr-11", "rr-11.1", "rr-11.2", "rr-11.3", "rr-11.4", "rr-11.5", "rr-12", "rr-13", "rr-13.1", "rr-14", "rr-15", "rr-15.1", "rr-16", "rr-17", "rr-18",
	/*Suszarnia*/
	"rs-1", "rs-1.1", "rs-1.1.1", "rs-2", "rs-2.1", "rs-3", "rs-3.1", "rs-4", "rs-4.1", "rs-4.1.1", "rs-5", "rs-6", "rs-8", "rs-12", "rs-12.1", "rs-12.2", "rs-13", "rs-15", "rucs",
	/*Schematy 400V*/
	"rnn-3.2", "rnn-4.3", "rnn-10.3", "rnn-11.3", "rnn-14.3", "rnn-16.3", "rnn-18.3", "rob-1", "rop-41", "rpwg", "irnn-3.3", "iirnn-3.3",
	/*Schematy 230V*/
	/*Biurowiec*/
	"TG łącznik biurrowca", "ster. urzadzen palarni", "rki-1", "rki-2", "rki-3", "rob-1.1", "rob-1.2", "rob-1.3", "rob-1.4", "rob-1.5", "tk-1", "tk-2", "tk-3", "tk-4", "tk-5", "tk-6", "tk-7", "tk-8", "zasil. urzadzen palarni",
	/*Kwasy ROMF*/
	"rmo-p1.1(r-1)", "rmo-p1.2(r-2)", "rfo-of", "rmf-spo", "rmo-oh", "rmo-oh1", "rmo-oz", "rmo-p", "romk", "romk-1.1", "rs", "rw", "rwc",
	/*Magazyn odczynnków*/
	"rog-1", "rog-2", "rog-3", "rog-4", "rog-5", "rog-6", "szafa ca1", "szafa ca2", "szafa ca3", "szafa ca4", "szafa cap-1,2,3",
	/*RNN-4.3*/
	"rop-51", "rop-51.1", "rop-51.2", "rop-51.3", "rop-51.4", "rop-51.5", "rop-51.6", "row-2", "row-3.1",
	/*Flotacja*/
	"irof-1.1", "irof-1.2", "irof-1.3", "irof-1.4", "irof-1.5", "irof-2.1", "irof-2.2", "irof-2.3", "irof-2.5", "irof-3.1", "irof-3.1.1", "irof-3.1.3", "irof-3.1.4", "irof-9", "irof-10", "irosf ster. I etap poz. hydrocykl.", "ro-11.2", "ro-11.3", "ro-12.2", "ros-ster. ośw.", "so1-r11", "so1-r12", "so2-r11", "so2-r12", "iirof-1", "iirof-1.1", "iirof-1.2", "iirof-1.3", "iirof-1.4", "iirof-1.5", "iirof-2", "iirof-2.1", "iirof-2.2", "iirof-2.3", "iirof-2.4", "iirof-4", "iirof-5", "iirof-6", "irof-51", "irof-51.1", "irof-51.2", "irof-51.3", "irof-51.1", "r-400/230 rozdz. automatyków", "ro-13.2", "ro-13.2/I", "ro-13.2/II", "ro-14.2", "ro-14.2/II", "ro-14.3", "ro-64", "3fiiiza", "iiirof-1 oraz iiirof-2", "iiirof-1.1", "iiirof-1.2", "iiirof-1.3", "iiirof-1.4", "iiirof-2.1", "iiirof-2.2", "iiirof-2.3", "iiirof-2.4", "iiirof-4", "iiirof-7", "iiirof-8", "iiirof-11.1", "iiirof-11.2", "iiirof-13", "iiirof-51", "iiirof-51.1.1", "iiirof-51.1", "ro-16.2", "ro-16.2/i", "ro-16.2/ii", "ro-16.3", "ro-17.2/ii",
	/*Młynownia*/
	"irom-1.1", "irom-1.2", "irom-1.3", "irom-1.4", "irom-2.1", "irom-2.2", "irom-2.3", "irom-3", "irom-3.1", "irom-3.1.1", "irom-3.2", "irom-3.2.1", "irom-3.2.2", "irom-3.4", "irom-3.4.1", "irom-3.4", "irom-3.5", "irom-3.5.1", "irom-3.6", "irom-6", "irom-9", "irom-9.1.1", "irom-9.1", "irom-9.3", "irom-9.3.3", "irom-9.3.4", "irom-9.3.5", "irom-9.4", "irom-9.5", "irom-9.6", "irom-10", "irom-10.1.1", "irom-10.1", "irom-10.1.2", "irom-10.3", "irom-10.3.3", "irom-10.3.4", "irom-10.3.5", "irom-10.4", "irom-11", "irom-12", "irom-12.1", "irom-12.2", "irom-12.3", "irom-12.4", "irom-12.5", "irom-12.6", "irom-12.6.1", "irom-12.7", "irom-13", "iirom-1", "iirom-1.1", "iirom-1.2", "iirom-1.3", "iirom-2", "iirom-2.1", "iirom-2.2", "iirom-2.3", "iirom-2.4", "iirom-3", "iirom-4", "iirom-5", "iirom-7", "iirom-8", "iirom-9", "iirom-12", "iirom-12.1", "iirom-12.2", "iirom-12.3.1", "iirom-12.3.2", "iirom-12.3.3", "iirom-12.3.4", "iirom-12.3", "iirom-12.4", "iirom-12.4.1", "iirom-12.5", "iirom-12.5.3", "iirom-12.5.4", "iirom-12.5.5", "iirom-12.6", "iirom-12.7", "iirom-14", "iirom-14.1", "iirom-14.2", "iirom-14.2.1", "iirom-14.2.2", "iirom-14.3", "iirom-14.3.3", "iirom-14.3.4", "iirom-14.3.5", "iirom-14.4", "irom-51", "irom-51.1", "irom-51.1.3", "irom-51.1.4", "irom-51.1.5", "irom-51.2", "irom-51.2.1", "irom-51.2.3", "irom-51.2.4", "irom-51.2.5", "irom-51.2.6", "irom-51.2.7", "irom-51.3", "irom-51.3.1", "irom-51.3.2", "irom-51.3.3", "irom-51.4", "irom-51.5", "irom-52", "iiirom-1 i iiirom-2", "iiirom-1.1", "iiirom-1.2", "iiirom-1.3", "iiirom-1.4", "iiirom-2.1", "iiirom-2.2", "iiirom-2.3", "iiirom-8", "iiirom-8.1", "iiirom-8.2", "iiirom-9", "iiirom-9.1", "iiirom-9.2", "iiirom-9.3", "iiirom-9.3.1", "iiirom-9.3.4", "iiirom-9.3.5", "iiirom-9.3.6", "iiirom-9.3.7", "iiirom-9.4", "iiirom-9.5", "iiirom-11", "iiirom-11.1", "iiirom-11.2", "iiirom-11.2.3", "iiirom-11.2.4", "iiirom-11.2.5", "iiirom-12", "iiirom-12.1", "iiirom-12.2", "iiirom-13", "iiirom-13.2", "iiirom-14", "iiirom-15", "row-51", "tw-wartownia",
	/*Nowe CPO*/
	"rop-2", "rop-1.3", "rop-1.3.1", "rop-1.3.2", "rop-1.3.3", "rop-1.4", "rop-1.6", "rop-1.6.2", "rop-1.12", "rop-41.1", "rop-41.2", "rop-41.3", "rop-41.4", "zr-7",
	/*Rozdrabialnia*/
	"ror-1", "ror-1.1", "ror-1.2", "ror-1.1.1", "ror-1.1.4", "ror-1.1.5", "ror-1.1.6", "ror-1.1.7", "ror-1.1.8", "ror-1.1.9", "ror-1.2.1", "ror-1.2.3", "ror-1.2.5", "ror-1.2.6", "ror-1.2.8", "ror-1.2.9", "ror-1.3", "ror-1.3.1", "ror-1.3.2", "ror-1.3.3", "ror-1.3.4", "ror-1.4", "ror-1.4.1", "ror-1.4.2", "ror-1.4.3", "ror-1.4.4", "ror-1.4.5", "ror-1.5.1", "ror-1.5", "ror-1.6", "ror-2", "ror-9", "ror-9.1", "ror-9.4", "ror-2 skrzynka zasil. ośw. zewnętrzengo", "rk-rozdzielnia kontenera", "zor-17", "ror-18", "ror-18.4", "ror-18.4.1.2", "ror-18.3", "ror-18.3.1", "ror-17", "ror-16", "ror-16.1", "ror-16.1.3 sterownik t15 i t16", "ror-16.1.2", "ror-16.1.1", "ror-15", "ror-15.4", "ror-15.2", "ror-15.2.1", "ror-15.1", "ror-15.1.1", "ror-15.1.1.2",
	/*rozdz. team*/
	"team", "ro-1(team)", "rs-1(team)", //do poprawy TODO   
	/*WR warsztaaty główne*/
	"rog-wr", "tablica to", "tablica tr1", "tablica tr2",
	/*magazyny główne*/
	"ror-1.2.11", "ror-1.2.11.1", "ror-1.2.11.2", "ror-1.2.11.3", "ror-1.2.11.4", "ror-1.2.11.5", "ror-1.2.11.6",
	/*Suszarnia*/
	"ros-17.2", "ros-33.1", "ros-38.1", "ros-1", "ros-2", "ros-3", "ros-4", "ros-5", "ros-6", "ros-7", "ros-8", "ros-9", "ros-10", "ros-11", "ros-12", "ros-13", "ros-14", "ros-14.1", "ros-15", "ros-16", "ros-16.1", "ros-16.2", "ros-16.2.1", "ros-16.2.2", "ros-16.2.3", "ros-17", "ros-17.1", "ros-17.3", "ros-21", "ros-22", "ros-23", "ros-24", "ros-25", "ros-26", "ros-27", "ros-28", "ros-29", "ros-30", "ros-31", "ros-32", "ros-32.1", "ros-32.2", "ros-32.3", "ros-33", "ros-34", "ros-34.1", "ros-35", "ros-36", "ros-37", "ros-37.1", "ros-38", "ros-39",
	/*Szafy potrzeb własnych*/
	/*Flotacja*/
	"ispwf", "rmw-pw-flotacja", "fiza", "rpw-11.2", "rpw-11.3", "rpw-12.2", "rpw-12.2/i", "iispwf-ii", "fiiza", "rpw-13.2", "rpw-13.2/i", "rpw-13.2/ii", "rpw-14.2", "rpw-142./ii", "rpw-14.3", "rpw-64 ii etap", "sssp", "iiispwf", "fiiiza i 2fiiiza", "rpw-16.2", "rpw-16.2/ii", "rpw-16.3", "rpw-17.2", "rpw-17.2/ii",
	/*kwasy*/
	"rmf-pw", "rmk-pw",
	/*Młynownia*/
	"ispwm-1.1", "ispwm-1.1", "ispwm-11", "ispwm-12", "m1za", "rss-1", "2m2za", "iispwm-1.1", "iispwm-1.2", "iispwm-1", "m2za", "iiirgm", "iiispwm-1", "m3za", "rpw-16.1", "rpw-17.1",
	/*Przepompownia wód dołowych*/
	"rpw",
	/*Przepompownia*/
	"spwp-1", "spwp-1.1",
	/*Rozdrabialnia*/
	"spwr", "spwr-1.2", "rps-3.3/1 i 2", "convis cvp01-szr01.01", "convis cvp01-szr01.02", "convis cvp01-szr01.03", "convis cvp01-szr01.04", "convis cvp01-szr01.05", "convis cvp01-szr01", "mapa wysp convis",
	/*Suszarnia*/
	"spws-1", "spws-1.1", "spws-1.2",
	/*---!!! Urządzenia (tak jak w nowej książeczce)!!! ---*/
	/*Rozdrabialnia*/
	"T-2", "T-1", "T-5", "T-45", "T-51", "T-52", "T-4", "T-3", "T-44", "T-03", "T-41", "T-42", "T-43", "T-46", "T-47", "T-48", "T-31", "T-32", "T-33", "T-22", "T-21", "T-53", "T-54", "TC-1", "TZ-1", "KR-1", "VWR-1", "CR-1", "UR-1", "TC-2", "TZ-2", "KR-2", "VWR-2", "CR-2", "UR-2", "TC-3", "TZ-3", "KR-3", "VWR-3", "CR-3", "UR-3", "TC-4", "TZ-4", "KR-4", "VWR-4", "CR-4", "UR-4", "TC-5", "TZ-5", "KR-5", "VWR-5", "CR-5", "UR-5", "TC-6", "TZ-6", "KR-6", "VWR-6", "CR-6", "UR-6", "VWR-7", "CR-7", "UR-7", "TC-03B", "TZ-03B", "TC-03A", "TZ-03A", "SWR-2", "SWR-1", "SWR-3", "EM-2", "EM-1", "EM-53", "EM-54", "EM-03", "PWR-1", "PWR-2", "WR-6", "WR-5", "WR-4", "WR-3", "WR-2", "WR-1", "WT-4", "WT-3", "WT-44", "WT-48", "WT-32", "WT-53", "WT-54", "WIR-1A", "WIR-1B", "WIR-2A", "WIR-2B", "WIR-3A", "WIR-3B", "WIR-03A/1", "WIR-03A/2", "WIR-03B/1", "WIR-03B/2", "PU-3/1", "PU-3/2", "PU-3/3", "PU-3/4", "RZR-11", "WPR", "KOŁ-1", "KOŁ-2", "WIR-KR1", "WIR-KR2", "WIR-KR3", "WIR-KR4", "WIR-KR5", "WIR-KR6",
	/*Młynownia I etap*/
	"MK-131", "MK-132", "K-131", "K-132", "UK-131", "UK-132", "TM-131", "TM-132", "TM-133", "PM-131A", "PM-131B", "RZM-131", "HC-131A", "HC-131B", "WM-1/133", "WM-1/132", "WM-2/133", "WM-2/132", "WM-3/133", "WM-3/132", "MK-121", "MK-122", "K-121", "K-122", "UK-121", "UK-122", "TM-121", "TM-122", "TM-123", "PM-121A", "PM-121B", "RZM-121", "HC-121A/M", "HC-121B/M", "WM-1/123", "WM-1/122", "WM-2/123", "WM-2/122", "WM-3/123", "WM-3/122", "MK-111", "MK-112", "SWM-1", "TM-111A", "QM-111A", "K-111", "K-112", "UK-111", "UK-112", "TM-111", "TM-112", "TM-113", "PM-111A", "PM-111B", "RZM-111", "RZM-112", "PM-112", "HC-111A", "HC-111B", "WM-1/112", "WM-2/112", "WM-3/112", "WM-4/112", "WM-5/112", "WM-6/112", "WM-1/113", "WM-2/113", "WM-3/113", "WM-4/113", "WM-5/113", "WM-6/113", "RDM-113", "MD-143", "MD-133", "MD-123", "MD-113", "RZM-113", "PM-113B", "PM-113A", "PWM-11",
	/*Młynownia II etap*/
	"MK-211", "MK-212", "K-211", "K-212", "UK-211", "UK-212", "TM-211", "TM-212", "TM-213", "PM-211B", "PM-211A", "RZM-211", "HC-211B", "HC-211A", "WM-1/213", "WM-2/213", "WM-3/213", "WM-1/212", "WM-2/212", "WM-3/212", "WM-4/212", "WM-5/212", "WM-6/212", "WM-7/212", "MK-221", "MK-222", "K-221", "K-222", "UK-221", "UK-222", "TM-221", "TM-222", "EM-221", "PM-221B", "PM-221A", "RZM-221", "HC-221B/M", "HC-221A/M", "WM-1/222", "WM-2/222", "WM-3/222", "WM-4/222", "WM-5/222", "WM-6/222", "WM-7/222", "WM-8/222", "WM-9/222", "WM-10/222", "WM-11-222", "WM-12/222", "WM-13/222", "MK-231", "MK-232", "K-231", "K-232", "UK-231", "UK-232", "TM-231", "TM-232", "PM-231B", "PM-231A", "RZM-231", "HC-231B", "HC-231A", "WM-1/232", "WM-2/232", "WM-3/232", "WM-4/232", "WM-5/232", "WM-6/232", "WM-7/232", "WM-8/232", "WM-9/232", "MD-213", "MD-223", "MD-233", "MD-243", "PM-213A", "PM-213B", "PM-213C", "RZM-213", "RDM-213", "PM-21", "PW-41", "PWM-21", "PWM-31", "SM-1",
	/*Młynownia III etap*/
	"MK-311", "K-311", "K-312", "UK-311", "UK-312", "TM-311", "TM-312", "TM-313", "PM-311A", "PM-311B", "PM-311C", "RZM-311", "HC-311A", "HC-311", "HC-311B", "HC-311C", "WM-1/312", "WM-2/312", "WM-3/312", "WM-4/312", "WM-1/313", "WM-2/313", "WM-3/313", "WM-4/313", "MK-321", "K-321", "K-322", "UK-321", "UK-322", "TM-321", "TM-322", "TM-323", "WM-1/322", "WM-2/322", "WM-3/322", "WM-4/322", "WM-1/323", "WM-2/323", "WM-3/323", "WM-4/323", "MK-331", "K-331", "K-332", "UK-331", "UK-332", "TM-331", "TM-332", "TM-333", "PM-331C", "PM-331B", "PM-331A", "RZM-331", "HC-331C", "HC-331", "HC-331B", "HC-331A", "WM-1/332", "WM-2/332", "WM-3/332", "WM-4/332", "WM-1/333", "WM-2/333", "WM-3/333", "WM-4/333", "MK-341", "K-341", "K-342", "UK-341", "UK-342", "TM-341", "TM-342", "TM-343", "WM-1/342", "WM-2/342", "WM-3/342", "WM-4/342", "WM-1/343", "WM-2/343", "WM-3/343", "WM-4/343", "MD-313", "MD-323", "MD-333", "RDM-313", "PM-313A", "PM-313B", "PM-313C", "RZM-313", "WMD-341", "SM-2",
	/*Flotacja I etap*/
	"MF-111", "MF-112", "RDF-121", "MF-123", "MF-121", "MF-122", "RZF-121", "PF-121A", "PF-121B", "PF-121C", "PF-121D", "RZF-122", "PF-122A", "PF-122B", "DD-111", "DD-123", "DD-122", "DD-121", "DD-141", "DD-151", "DD-181", "HC-121A/F", "HC-121B/F", "HC-121C", "HC-121D", "HC-122A", "HC-122B", "RDF-141", "MF-141", "MF-142", "MF-143", "RZF-141", "PF-141A", "PF-141B", "RDF-151", "MF-151", "MF-152", "RZF-151", "PF-151A", "PF-151B",
	/*Flotacja II etap*/
	"DD-224", "DD-223", "DD-221", "DD-222", "DD-241", "DD-251", "DD-211", "SF-4", "SF-5", "ZOM-1", "ZOM-2", "RDF-211", "MF-212", "MF-211", "RDF-221", "MF-224", "MF-223", "MF-221", "MF-222", "RDF-241", "MF-241", "MF-242", "MF-243", "RDF-251", "MF-252", "MF-251", "RDF-261", "MF-261", "MF-262", "RZF-221", "PF-221D", "PF-221C", "PF-221B", "PF-221A", "HC-221D", "HC-221C", "HC-221B/F", "HC-221A/F", "RZF-222", "PF-222B", "PF-222A", "HC-222B", "HC-222A", "RZF-241", "PF-241B", "PF-241A", "RZF-251", "PF-251B", "PF-251A", "RZF-261", "PF-261B", "PF-261A", "RZF-290", "PF-290A", "PF-290B", "PWF-22A", "PWF-22B", "PF-21", "PF-22", "PF-23", "POC-1", "POC-2", "POC-3",
	/*Flotacja III etap*/
	"RDF-311", "MF-312", "MF-311", "RDF-321", "MF-321", "MF-322", "MF-323", "MF-324", "RDF-341", "MF-341", "MF-342", "RDF-351", "MF-351", "MF-352", "RDF-361", "MF-361", "MF-362", "RZF-321", "PF-321A", "PF-321B", "PF-321C", "PF-321D", "RZF-322", "PF-322A", "PF-322B", "HC-321B", "HC-321A", "HC-321C", "HC-321D", "HC-322A", "HC-322B", "RZF-341", "PF-341A", "PF-341B", "PF-341C", "RZF-351", "PF-351A", "PF-351B", "RZF-361", "PF-361A", "PF-361B", "RZF-390", "PF-390A", "PF-390B", "DD-311", "DD-321", "DD-322", "DD-323", "DD-324", "DD-341", "DD-351", "PWD-31A", "PWD-31B", "PWD-31C", "PWD-31D", "PF-31", "PF-32", "PF-33", "PF-34", "PF-35",
	/*Utylizacja kwasu siarkowego*/
	"PUK-1", "PKO-1", "PUK-2", "ZUK-1", "ZUK-2", "PUO-1B", "PUO-1A", "PUS-1", "PUS-2", "RN-1", "RN-2", "RN-3", "RUE", "PUR", "ZUW", "DW", "TUW", "PUW-1", "PUW-2", "MW-1", "MW-2",
	/*Magazyn odczynnkiów*/
	"PKR-21", "PKR-22", "PKR-11", "PKR-12", "PK-11", "PK-12", "PK-13", "PK-21", "PK-22", "PKD-11", "PKD-12", "PKD-13", "PKD-14", "PKD-21", "PKD-22", "PKO-4", "P-10", "ZK-1", "ZK-2", "ZK-3", "ZK-5.1", "ZK-5.2", "ZK-6", "ZK-4.1", "ZK-4.2", "ZK-7",
	/*Modyfikacja*/
	"WPC", "ZUK-3", "PUK-3", "ZUK-4", "PUK-4", "PUK-5", "PKO-2", "RDC", "RN-1.1", "RN-1.2", "RN-1.3", "ZKR-1/A", "RN-2.1", "RN-2.2", "RN-2.3", "ZKR-2/A", "RZD", "PZO-1", "PZO-2", "PKO-3", "VWC-1", "VWC-2", "SF-3", "ZVF-3", "ZVF-4", "OPF-2", "SF-3",
	/*Hala turbodmuchaw*/
	"TD-1", "TD-2", "TD-3", "TD-4", "CHF-1", "CHF-2", "PWCH-1", "PWCH-2", "PWCH-3", "POT-3", "POT-4", "POT-5", "POT-6", "SF-1", "SF-2", "OPF-1", "OPF-2", "ZVF-1", "ZVF-2",
	/*Suszarnia*/
	"Z-1", "Z-2", "Z-3", "Z-4", "F-4", "F-3", "F-2", "F-1", "TS-4A", "TS-4B", "TS-4C", "TS-3D", "TS-3A", "TS-3B", "TS-3C", "TS-2A", "TS-2B", "TS-2C", "TS-1A", "TS-1B", "TS-1C", "TS-1D", "TS-11", "TS-12", "TS-13", "TS-14", "QS-13", "S-4", "S-3", "S-2", "S-1", "US-4", "US-3", "US-2", "US-1", "CS-4", "CS-3", "CS-2", "CS-1", "VS-4", "VS-3", "VS-2", "VS-1", "PZ-1", "PZ-2", "PZ-4A", "PS-1D", "PS-1C", "PS-1B", "PS-1A", "PS-14A", "PS-14B", "PS-15A", "PS-15B", "PS-13", "PZ-12", "PZ-11", "PWS-11A", "PWS-11B", "PWS-12", "PKS-1", "PZP-1", "PZP-2", "PZP-3", "PZP-4", "PGS-2A", "PGS-2B", "CHS-1", "CHS-2", "QZ-1", "QZ-2", "QZP", "ZS-1", "ZHD-1", "ZVS-1", "ZVS-2", "ZVS-3", "SS-20", "SS-21", "SS-10", "SS-11", "MMS-1", "RDS-1", "ZF-1", "KOŁ-3", "KOŁ-4", "KPS-4", "KPS-3", "KPS-2", "KPS-1", "VPC-4", "VPS-4", "VPC-3", "VPS-3", "VPC-2", "VPS-2", "VPC-1", "VPS-1", "WPS-1", "WMD-1", "AH-41", "AH-42", "AH-31", "AH-32", "AH-21", "AH-22", "AH-11", "AH-12", "ZFP-4", "ZFP-3", "ZFP-2", "ZFP-1", "PU1-2/1", "PU1-2/2", "PU1-2/3", "PU1-2/4", "PU7-8/1", "PU7-8/2", "PU7-8/3", "PU7-8/4", "G-1", "G-2", "G-3", "G-4", "WIS-11", "WIS-12", "WIS-13", "WIS-14", "WIS-21", "WIS-22", "WIS-23", "WIS-24", "WIS-31", "WIS-32", "WIS-33", "WIS-34", "WIS-41", "WIS-42", "WIS-43", "WIS-44", "WIS-1A", "WIS-1B", "WIS-2A", "WIS-2B", "WIS-3A", "WIS-3B", "WIS-4A", "WIS-4B", "ks-101", "ks-102", "ks-301", "siec", "abcd"]
};

exports.default = variables;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getSchemat = undefined;

var _variables = __webpack_require__(0);

var _variables2 = _interopRequireDefault(_variables);

var _logicFun = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSchemat() {
	var word = searchEngine.value.toUpperCase();
	var v = _variables2.default;

	fetch('schematy.json').then(function (res) {
		return res.json();
	}).then(function (data) {
		//searching the json file
		data.wysoka.forEach(function (wysoka) {
			wysoka.tag.forEach(function (tag) {
				return word == tag ? (0, _logicFun.showLinks)(v.title6kV, wysoka, v.arr6kV) : null;
			});
		});
		data.silowe.forEach(function (silowe) {
			silowe.tag.forEach(function (tag) {
				return word == tag ? (0, _logicFun.showLinks)(v.title500V, silowe, v.arr500V) : null;
			});
		});
		data.schematy230V.forEach(function (schematy230V) {
			schematy230V.tag.forEach(function (tag) {
				return word == tag ? (0, _logicFun.showLinks)(v.title230V, schematy230V, v.arr230V) : null;
			});
		});
		data.sterowanie.forEach(function (sterowanie) {
			sterowanie.tag.forEach(function (tag) {
				return word == tag ? (0, _logicFun.showLinks)(v.titleSterowanie, sterowanie, v.arrSterowanie) : null;
			});
		});
		data.firmowe.forEach(function (firmowe) {
			firmowe.tag.forEach(function (tag) {
				return word == tag ? (0, _logicFun.showLinks)(v.titleFirmowe, firmowe, v.arrFirmowe) : null;
			});
		});
		//display the result
		document.getElementById('area-text-6kV').innerHTML = v.arr6kV.join(" ");
		document.getElementById('area-text-500V').innerHTML = v.arr500V.join(" ");
		document.getElementById('area-text-230V').innerHTML = v.arr230V.join(" ");
		document.getElementById('area-text-sterowanie').innerHTML = v.arrSterowanie.join(" ");
		document.getElementById('area-text-firmowe').innerHTML = v.arrFirmowe.join(" ");
	}).catch(function (err) {
		return console.log(err);
	});

	v.title6kV.style.display = v.title500V.style.display = v.title230V.style.display = v.titleSterowanie.style.display = v.titleFirmowe.style.display = 'none';
	v.arr6kV = [], v.arr500V = [], v.arr230V = [], v.arrSterowanie = [], v.arrFirmowe = [];
	document.getElementsByTagName('h1')[0].style.paddingTop = '4em';
}

exports.getSchemat = getSchemat;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(0);

var _variables2 = _interopRequireDefault(_variables);

var _logic = __webpack_require__(1);

var _autocomplete = __webpack_require__(4);

var _browserChecker = __webpack_require__(6);

var _missing = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataTitle = document.body.getAttribute('data-title');

console.log(_browserChecker.checker);

if (dataTitle == "index") {
	var start = function start() {
		return (0, _autocomplete.autocomplete)(searchEngine), (0, _logic.getSchemat)(), (0, _missing.getNameOfProject)();
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {

		for (var _iterator = _variables2.default.version[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var v = _step.value;

			v === _browserChecker.checker ? (0, _browserChecker.holdDown)() : null;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var searchEngine = document.querySelector('#searchEngine');
	searchEngine.addEventListener('input', start);
} else {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {

		for (var _iterator2 = _variables2.default.version[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _v = _step2.value;

			_v === _browserChecker.checker ? (0, _browserChecker.holdDownForMissing)() : null;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	(0, _missing.startMissing)();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
function addLink(path, title) {
		var p = document.createElement("p");
		p = '<a target="_blank" href="' + path + '">' + title + '</a><br>';
		return p;
}

function showLinks(title, dataType, arrType) {
		title.style.display = 'block';
		var a = addLink(dataType.path, dataType.title);
		arrType.push(a);
		document.getElementsByTagName('h1')[0].style.paddingTop = '1em';
}

exports.addLink = addLink;
exports.showLinks = showLinks;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.autocomplete = undefined;

var _variables = __webpack_require__(0);

var _variables2 = _interopRequireDefault(_variables);

var _logic = __webpack_require__(1);

var _autocompleteFun = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hock = document.querySelector('.autocomplete');

function autocomplete(variable) {
	createList(variable.value);
	searchEngine.addEventListener('keydown', _autocompleteFun.movingOnList);
	searchEngine.addEventListener('keydown', function (e) {
		return e.keyCode == 13 ? (0, _autocompleteFun.closeAllLists)() : null;
	});
};

function createList(val) {
	var a = void 0,
	    b = void 0,
	    i = void 0;

	(0, _autocompleteFun.closeAllLists)();
	if (!val) return false;

	a = document.createElement("DIV");
	a.setAttribute('class', 'autocomplete-list');
	hock.appendChild(a);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _variables2.default.machines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;

			if (value.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement("DIV");
				b.innerHTML = "" + value.substr(0, val.length).toUpperCase().bold() + value.substr(val.length).toUpperCase() + " <input type='hidden' class='autohelper' value='" + value + "'>";
				b.addEventListener("click", function (e) {
					var targetClick = e.target.querySelector('.autohelper').value.toUpperCase();
					searchEngine.value = targetClick;
					(0, _autocompleteFun.closeAllLists)();
					(0, _logic.getSchemat)();
				});
				a.appendChild(b);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

exports.autocomplete = autocomplete;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.closeActive = exports.addActive = exports.closeAllLists = exports.movingOnList = undefined;

var _variables = __webpack_require__(0);

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentFocus = -1;

function movingOnList(e) {
	var x = document.querySelector('.autocomplete-list');
	x ? x = x.getElementsByTagName('div') : null;
	if (e.keyCode == 40) {
		e.preventDefault();
		currentFocus++;
		addActive(x);
	} else if (e.keyCode == 38) {
		e.preventDefault();
		currentFocus--;
		addActive(x);
	} else if (e.keyCode == 13) {
		e.preventDefault();
		currentFocus > -1 ? x[currentFocus].click() : null;
	}
}

function closeAllLists(elem) {
	currentFocus = -1;
	var x = document.getElementsByClassName("autocomplete-list");
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;
			elem != value && elem != searchEngine ? value.parentNode.removeChild(value) : null;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

function addActive(x) {
	!x ? false : null;
	closeActive(x);
	currentFocus >= x.length ? currentFocus = 0 : null;
	currentFocus < 0 ? currentFocus = x.length - 1 : null;
	x[currentFocus].classList.add("autocomplete-active");
	x[currentFocus].scrollIntoView();
}

function closeActive(x) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = x[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var value = _step2.value;
			value.classList.remove('autocomplete-active');
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

document.addEventListener("click", function (e) {
	return closeAllLists(e.target);
});

exports.movingOnList = movingOnList;
exports.closeAllLists = closeAllLists;
exports.addActive = addActive;
exports.closeActive = closeActive;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var checker = navigator.sayswho = function () {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}();

function holdDown() {
    var target = document.querySelectorAll('#grid')[1];
    target.style.width = "800px";
    target.style.margin = "auto";
    return target;
}

function holdDownForMissing() {
    var target = document.querySelectorAll('#grid')[(0, 1, 2)];
    target.style.width = "800px";
    target.style.margin = "auto";
    return target;
}

exports.checker = checker;
exports.holdDown = holdDown;
exports.holdDownForMissing = holdDownForMissing;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getNameOfProject = exports.startMissing = undefined;

var _variables = __webpack_require__(0);

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startMissing() {

	if (typeof Storage !== "undefined") {
		var docHead = document.querySelector('.doc-head');
		docHead.innerHTML = "<h2>" + sessionStorage.missingName + "</h2>";

		console.log(sessionStorage.missingName);
	} else {
		console.log("No web storage support...");
	}
}

function getNameOfProject() {
	var missingParamNextSite = document.querySelector('#area-firmowe');
	missingParamNextSite.addEventListener('click', function (e) {
		return sessionStorage.missingName = e.target.textContent;
	});
}

exports.startMissing = startMissing;
exports.getNameOfProject = getNameOfProject;

/***/ })
/******/ ]);