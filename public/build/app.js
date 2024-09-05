(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/svelte/controllers sync recursive \\.svelte$":
/*!***************************************************!*\
  !*** ./assets/svelte/controllers/ sync \.svelte$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Edit.svelte": "./assets/svelte/controllers/Edit.svelte",
	"./Hello.svelte": "./assets/svelte/controllers/Hello.svelte",
	"./HomeAnimation.svelte": "./assets/svelte/controllers/HomeAnimation.svelte",
	"./New.svelte": "./assets/svelte/controllers/New.svelte",
	"./Side.svelte": "./assets/svelte/controllers/Side.svelte"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/svelte/controllers sync recursive \\.svelte$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_svelte_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-svelte/dist/render_controller.js */ "./vendor/symfony/ux-svelte/assets/dist/render_controller.js");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-svelte--svelte': _symfony_ux_svelte_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! swiper/css/bundle */ "./node_modules/swiper/swiper-bundle.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// core version + navigation, pagination modules:


// import Swiper and modules styles




/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {

      // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var button = document.querySelector(".show_side_bar");
      var button_exit = document.querySelector(".exit_side_bar");
      var left_navigation_bar = document.querySelector(".left_navigation_bar");
      var overlay = document.querySelector(".overlay");
      if (button) {
        button.addEventListener("click", function () {
          left_navigation_bar.classList.add("show");
          overlay.classList.add("active");
        });
      }
      if (button_exit) {
        button_exit.addEventListener("click", function () {
          left_navigation_bar.classList.remove("show");
          overlay.classList.remove("active");
        });
      }
      if (overlay) {
        overlay.addEventListener("click", function () {
          left_navigation_bar.classList.remove("show");
          overlay.classList.remove("active");
        });
      }
      var inputs = document.querySelectorAll("input");
      if (inputs) {
        inputs.forEach(function (element) {
          element.addEventListener("focus", function () {
            element.classList.add("active");
          });
          element.addEventListener("blur", function () {
            element.classList.remove("active");
          });
        });
      }
      var select = document.querySelectorAll("select");
      if (select) {
        select.forEach(function (element) {
          element.addEventListener("focus", function () {
            element.classList.add("active");
          });
          element.addEventListener("blur", function () {
            element.classList.remove("active");
          });
        });
      }
      var areas = document.querySelectorAll("textarea");
      if (areas) {
        areas.forEach(function (element) {
          element.addEventListener("focus", function () {
            element.classList.add("active");
          });
          element.addEventListener("blur", function () {
            element.classList.remove("active");
          });
        });
      }
      document.addEventListener('DOMContentLoaded', function () {
        var swiper_exploration = new swiper__WEBPACK_IMPORTED_MODULE_21__["default"]('.swiper', {
          // configure Swiper to use modules
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_22__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_22__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_22__.Autoplay],
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          disableOnInteraction: true,
          // autoplay: {
          //  delay: 2000, // Défilement automatique toutes les 1.5 secondes
          //  disableOnInteraction: true, // Continuer l'autoplay même si l'utilisateur interagit
          // },
          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 600px
            200: {
              slidesPerView: 2.5,
              spaceBetween: 10
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 3.5,
              spaceBetween: 10
            },
            // when window width is >= 850px
            850: {
              slidesPerView: 4.5,
              spaceBetween: 20
            },
            // when window width is >= 1000px
            1000: {
              slidesPerView: 5.5,
              spaceBetween: 20
            }
          }
        });
      });
      var bar_admin = document.querySelector(".bar_admin");
      var bar_admin_mobile = document.querySelector(".bar_admin_mobile");
      var overlay_app_mobile = document.querySelector(".overlay_app_mobile");
      var left_nav_bar_admin = document.querySelector(".left_nav_bar_admin");
      var top_nav_bar_admin = document.querySelector(".top_nav_bar_admin");
      var body = document.querySelector("body");
      if (bar_admin) {
        bar_admin.addEventListener("click", function () {
          left_nav_bar_admin.classList.toggle("hide");
          top_nav_bar_admin.classList.toggle("hide");
          body.classList.toggle("hide");
          body.classList.add("add_transition");
        });
      }
      if (bar_admin_mobile) {
        bar_admin_mobile.addEventListener("click", function () {
          left_nav_bar_admin.classList.toggle("show_bar");
          overlay_app_mobile.classList.toggle("active");
        });
      }
      if (overlay_app_mobile) {
        overlay_app_mobile.addEventListener("click", function () {
          left_nav_bar_admin.classList.toggle("show_bar");
          overlay_app_mobile.classList.toggle("active");
        });
      }
      var spinner = document.querySelector(".spinner");
      var product_category = document.querySelectorAll(".product_category button");
      if (product_category) {
        product_category.forEach(function (element) {
          element.addEventListener("click", function () {
            product_category.forEach(function (element) {
              element.classList.remove("active");
            });
            element.classList.add("active");
          });
        });
      }
      var factory_category = document.querySelectorAll(".factory_category button");
      if (factory_category) {
        factory_category.forEach(function (element) {
          element.addEventListener("click", function () {
            factory_category.forEach(function (element) {
              element.classList.remove("active");
            });
            element.classList.add("active");
          });
        });
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-svelte */ "./vendor/symfony/ux-svelte/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_3__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_3__["default"].start();
(0,_symfony_ux_svelte__WEBPACK_IMPORTED_MODULE_0__.registerSvelteControllerComponents)(__webpack_require__("./assets/svelte/controllers sync recursive \\.svelte$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




































































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(' ')));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, ' ').trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var componentMapByElement = new WeakMap();
var componentMapByComponent = new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
      return;
    }
    if (onlyMatchName && componentName !== onlyMatchName) {
      return;
    }
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) {
      return;
    }
    if (!currentComponent.element.contains(component.element)) {
      return;
    }
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) {
        return;
      }
      if (childComponent === component) {
        return;
      }
      if (childComponent.element.contains(component.element)) {
        foundChildComponent = true;
      }
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) {
      return component;
    }
    parentElement = parentElement.parentElement;
  }
  return null;
};
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        }
        if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
        }
      }
      if (element.hasAttribute('value')) {
        return element.checked ? element.getAttribute('value') : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value === value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val === element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        if (element.hasAttribute('value')) {
          element.checked = element.value === value;
        } else {
          element.checked = value;
        }
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return "".concat(value);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  findChildren(component).forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  return _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== undefined) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== undefined) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== undefined) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
}(); // base IIFE to define idiomorph
var Idiomorph = function () {
  //=============================================================================
  // AND NOW IT BEGINS...
  //=============================================================================
  var EMPTY_SET = new Set();

  // default configuration values, updatable by users now
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: 'merge',
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };

  //=============================================================================
  // Core Morphing Algorithm - morph, morphNormalizedContent, morphOldNodeTo, morphChildren
  //=============================================================================
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) {
      oldNode = oldNode.documentElement;
    }
    if (typeof newContent === 'string') {
      newContent = parseContent(newContent);
    }
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector('head');
      var newHead = normalizedNewContent.querySelector('head');
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        // when head promises resolve, call morph again, ignoring the head tag
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      // innerHTML, so we are only updating the children
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      // otherwise find the best element match in the new content, morph that, and merge its siblings
      // into either side of the best match
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);

      // stash the siblings that will need to be inserted on either side of the best match
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;

      // morph it
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) {
        // if there was a best match, merge the siblings in too and return the
        // whole bunch
        return insertSiblings(previousSibling, morphedNode, nextSibling);
      } else {
        // otherwise nothing was added to the DOM
        return [];
      }
    } else {
      throw "Do not understand how to morph style " + ctx.morphStyle;
    }
  }

  /**
   * @param possibleActiveElement
   * @param ctx
   * @returns {boolean}
   */
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }

  /**
   * @param oldNode root node to merge content into
   * @param newContent new content to merge
   * @param ctx the merge context
   * @returns {Element} the element that ended up in the DOM
   */
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) ;else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) ;else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
        handleHeadElement(newContent, oldNode, ctx);
      } else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) {
          morphChildren(newContent, oldNode, ctx);
        }
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }

  /**
   * This is the core algorithm for matching up children.  The idea is to use id sets to try to match up
   * nodes as faithfully as possible.  We greedily match, which allows us to keep the algorithm fast, but
   * by using id sets, we are able to better match up with content deeper in the DOM.
   *
   * Basic algorithm is, for each node in the new content:
   *
   * - if we have reached the end of the old parent, append the new content
   * - if the new content has an id set match with the current insertion point, morph
   * - search for an id set match
   * - if id set match found, morph
   * - otherwise search for a "soft" match
   * - if a soft match is found, morph
   * - otherwise, prepend the new node before the current insertion point
   *
   * The two search algorithms terminate if competing node matches appear to outweigh what can be achieved
   * with the current node.  See findIdSetMatch() and findSoftMatch() for details.
   *
   * @param {Element} newParent the parent element of the new content
   * @param {Element } oldParent the old content that we are merging the new content into
   * @param ctx the merge context
   */
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;

    // run through all the new content
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;

      // if we are at the end of the exiting parent's children, just append
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // if the current node has an id set match then morph
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // otherwise search forward in the existing old children for an id set match
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a potential match, remove the nodes until that point and morph
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // no id set match found, so scan forward for a soft match for the current node
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a soft match for the current node, morph
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // abandon all hope of morphing, just insert the new child before the insertion point
      // and move on
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }

    // remove any remaining old nodes that didn't match up with new content
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }

  //=============================================================================
  // Attribute Syncing Code
  //=============================================================================

  /**
   * @param attr {String} the attribute to be mutated
   * @param to {Element} the element that is going to be updated
   * @param updateType {("update"|"remove")}
   * @param ctx the merge context
   * @returns {boolean} true if the attribute should be ignored, false otherwise
   */
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === 'value' && ctx.ignoreActiveValue && to === document.activeElement) {
      return true;
    }
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }

  /**
   * syncs a given node with another node, copying over all attributes and
   * inner element state from the 'from' node to the 'to' node
   *
   * @param {Element} from the element to copy attributes & state from
   * @param {Element} to the element to copy attributes & state to
   * @param ctx the merge context
   */
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;

    // if is an element type, sync the attributes from the
    // new node into the new node
    if (type === 1 /* element type */) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator = _createForOfIteratorHelper(fromAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fromAttribute = _step.value;
          if (ignoreAttribute(fromAttribute.name, to, 'update', ctx)) {
            continue;
          }
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) {
            to.setAttribute(fromAttribute.name, fromAttribute.value);
          }
        }
        // iterate backwards to avoid skipping over items when a delete occurs
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, 'remove', ctx)) {
          continue;
        }
        if (!from.hasAttribute(toAttribute.name)) {
          to.removeAttribute(toAttribute.name);
        }
      }
    }

    // sync text nodes
    if (type === 8 /* comment */ || type === 3 /* text */) {
      if (to.nodeValue !== from.nodeValue) {
        to.nodeValue = from.nodeValue;
      }
    }
    if (!ignoreValueOfActiveElement(to, ctx)) {
      // sync input values
      syncInputValue(from, to, ctx);
    }
  }

  /**
   * @param from {Element} element to sync the value from
   * @param to {Element} element to sync the value to
   * @param attributeName {String} the attribute name
   * @param ctx the merge context
   */
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, 'update', ctx);
      if (!ignoreUpdate) {
        to[attributeName] = from[attributeName];
      }
      if (from[attributeName]) {
        if (!ignoreUpdate) {
          to.setAttribute(attributeName, from[attributeName]);
        }
      } else {
        if (!ignoreAttribute(attributeName, to, 'remove', ctx)) {
          to.removeAttribute(attributeName);
        }
      }
    }
  }

  /**
   * NB: many bothans died to bring us information:
   *
   *  https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
   *  https://github.com/choojs/nanomorph/blob/master/lib/morph.jsL113
   *
   * @param from {Element} the element to sync the input value from
   * @param to {Element} the element to sync the input value to
   * @param ctx the merge context
   */
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== 'file') {
      var fromValue = from.value;
      var toValue = to.value;

      // sync boolean attributes
      syncBooleanAttribute(from, to, 'checked', ctx);
      syncBooleanAttribute(from, to, 'disabled', ctx);
      if (!from.hasAttribute('value')) {
        if (!ignoreAttribute('value', to, 'remove', ctx)) {
          to.value = '';
          to.removeAttribute('value');
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute('value', to, 'update', ctx)) {
          to.setAttribute('value', fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) {
      syncBooleanAttribute(from, to, 'selected', ctx);
    } else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute('value', to, 'update', ctx)) {
        return;
      }
      if (_fromValue !== _toValue) {
        to.value = _fromValue;
      }
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) {
        to.firstChild.nodeValue = _fromValue;
      }
    }
  }

  //=============================================================================
  // the HEAD tag can be handled specially, either w/ a 'merge' or 'append' style
  //=============================================================================
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;

    // put all new head elements into a Map, by their outerHTML
    var srcToNewHeadNodes = new Map();
    var _iterator2 = _createForOfIteratorHelper(newHeadTag.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var newHeadChild = _step2.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }

      // for each elt in the current head
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(currentHead.children),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentHeadElt = _step3.value;
        // If the current head element is in the map
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            // remove the current version and let the new version replace it and re-execute
            removed.push(currentHeadElt);
          } else {
            // this element already exists and should not be re-appended, so remove it from
            // the new content map, preserving it in the DOM
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (headMergeStyle === "append") {
            // we are appending and this existing element is not new content
            // so if and only if it is marked for re-append do we do anything
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            // if this is a merge, we remove this content since it is not in the new head
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }

      // Push the remaining new head elements in the Map into the
      // nodes to append to the head tag
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i2];
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener('load', function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i2 = 0, _nodesToAppend = nodesToAppend; _i2 < _nodesToAppend.length; _i2++) {
      _loop();
    }

    // remove all removed elements, after we have appended the new elements to avoid
    // additional network requests for things like style sheets
    for (var _i3 = 0, _removed = removed; _i3 < _removed.length; _i3++) {
      var removedElement = _removed[_i3];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function noOp() {}

  /*
    Deep merges the config object and the Idiomoroph.defaults object to
    produce a final configuration object
   */
  function mergeDefaults(config) {
    var finalConfig = {};
    // copy top level stuff into final config
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);

    // copy callbacks into final config (do this to deep merge the callbacks)
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);

    // copy head config into final config  (do this to deep merge the head)
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) {
      if (node1.id !== "" && node1.id === node2.id) {
        return true;
      } else {
        return getIdIntersectionCount(ctx, node1, node2) > 0;
      }
    }
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) {
      return false;
    }
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential id match
  // for the newChild.  We stop if we find a potential id match for the new child OR
  // if the number of potential id matches we are discarding is greater than the
  // potential id matches for the new child
  //=============================================================================
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    // max id matches we are willing to discard in our search
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;

    // only search forward if there is a possibility of an id match
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      // if there is a possibility of an id match, scan forward
      // keep track of the potential id match count we are discarding (the
      // newChildPotentialIdCount must be greater than this to make it likely
      // worth it)
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        // If we have an id match, return the current potential match
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) {
          return _potentialMatch;
        }

        // computer the other potential matches of this new content
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) {
          // if we have more potential id matches in _other_ content, we
          // do not have a good candidate for an id match, so return null
          return null;
        }

        // advanced to the next old content child
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential soft match
  // for the newChild.  We stop if we find a potential soft match for the new child OR
  // if we find a potential id match in the old parents children OR if we find two
  // potential soft matches for the next two pieces of new content
  //=============================================================================
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) {
        // the current potential soft match has a potential id set match with the remaining new
        // content so bail out of looking
        return null;
      }

      // if we have a soft match with the current node, return it
      if (isSoftMatch(newChild, potentialSoftMatch)) {
        return potentialSoftMatch;
      }
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        // the next new node has a soft match with this node, so
        // increment the count of future soft matches
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;

        // If there are two future soft matches, bail to allow the siblings to soft match
        // so that we don't consume future soft matches for the sake of the current node
        if (siblingSoftMatchCount >= 2) {
          return null;
        }
      }

      // advanced to the next old content child
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();

    // remove svgs to avoid false-positive matches on head, etc.
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, '');

    // if the newContent contains a html, head or body tag, we can simply parse it w/o wrapping
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      // if it is a full HTML document, return the document itself as the parent container
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        // otherwise return the html element as the parent container
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else {
          return null;
        }
      }
    } else {
      // if it is partial HTML, wrap it in a template tag to provide a parent element and also to help
      // deal with touchy tags like tr, tbody, etc.
      var responseDoc = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html");
      var _content = responseDoc.body.querySelector('template').content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) {
      // noinspection UnnecessaryLocalVariableJS
      var dummyParent = document.createElement('div');
      return dummyParent;
    } else if (newContent.generatedByIdiomorph) {
      // the template tag created by idiomorph parsing can serve as a dummy parent
      return newContent;
    } else if (newContent instanceof Node) {
      // a single node is added as a child to a dummy parent
      var _dummyParent = document.createElement('div');
      _dummyParent.append(newContent);
      return _dummyParent;
    } else {
      // all nodes in the array or HTMLElement collection are consolidated under
      // a single dummy parent element
      var _dummyParent2 = document.createElement('div');
      for (var _i4 = 0, _arr = _toConsumableArray(newContent); _i4 < _arr.length; _i4++) {
        var elt = _arr[_i4];
        _dummyParent2.append(elt);
      }
      return _dummyParent2;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node); // push added preceding siblings on in order and insert
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling); // here we are going in order, so push on as we scan, rather than add
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) {
      morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    }
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) {
      return .5 + getIdIntersectionCount(ctx, node1, node2);
    }
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }

  //=============================================================================
  // ID Set Functions
  //=============================================================================

  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    var idSet = ctx.idMap.get(targetNode) || EMPTY_SET;
    return idSet.has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator4 = _createForOfIteratorHelper(idSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var id = _step4.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator5 = _createForOfIteratorHelper(sourceSet),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var id = _step5.value;
        // a potential match is an id in the source and potentialIdsSet, but
        // that has not already been merged into the DOM
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) {
          ++matchCount;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return matchCount;
  }

  /**
   * A bottom up algorithm that finds all elements with ids inside of the node
   * argument and populates id sets for those nodes and all their parents, generating
   * a set of ids contained within all nodes for the entire hierarchy in the DOM
   *
   * @param node {Element}
   * @param {Map<Node, Set<String>>} idMap
   */
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    // find all elements with an id property
    var idElements = node.querySelectorAll('[id]');
    var _iterator6 = _createForOfIteratorHelper(idElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elt = _step6.value;
        var current = elt;
        // walk up the parent hierarchy of that element, adding the id
        // of element to the parent's id set
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          // if the id set doesn't exist, create it and insert it in the  map
          if (idSet == null) {
            idSet = new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  /**
   * This function computes a map of nodes to all ids contained within that node (inclusive of the
   * node).  This map can be used to ask if two nodes have intersecting sets of ids, which allows
   * for a looser definition of "matching" than tradition id matching, and allows child nodes
   * to contribute to a parent nodes matching.
   *
   * @param {Element} oldContent  the old content that will be morphed
   * @param {Element} newContent  the new content to morph to
   * @returns {Map<Node, Set<String>>} a map of nodes to id sets for the
   */
  function createIdMap(oldContent, newContent) {
    var idMap = new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }

  //=============================================================================
  // This is what ends up becoming the Idiomorph global object
  //=============================================================================
  return {
    morph: morph,
    defaults: defaults
  };
}();
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("Original element with id ".concat(id, " not found"));
    }
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) {
      return null;
    }
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll('[data-live-preserve]').forEach(function (newElement) {
    var id = newElement.id;
    if (!id) {
      throw new Error('The data-live-preserve attribute requires an id attribute to be set on the element');
    }
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    }
    newElement.removeAttribute('data-live-preserve');
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) {
          return true;
        }
        if (fromEl === rootFromElement) {
          return true;
        }
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) {
            return false;
          }
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) {
            throw new Error('missing clone');
          }
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== 'undefined') {
            if (!window.Alpine) {
              throw new Error('Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.');
            }
            if (typeof window.Alpine.morph !== 'function') {
              throw new Error('Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.');
            }
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement('afterend', toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) {
            elementChanges.applyToElement(toEl);
          }
          if (fromEl.nodeName.toUpperCase() !== 'OPTION' && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) {
              return false;
            }
          }
        }
        if (fromEl.hasAttribute('data-skip-morph') || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute('data-skip-morph')) {
          return false;
        }
        return !fromEl.hasAttribute('data-live-ignore');
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) {
          return true;
        }
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) {
          return false;
        }
        return !node.hasAttribute('data-live-ignore');
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) {
      throw new Error('Missing elements.');
    }
    newElement.replaceWith(originalElement);
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  return _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  return _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  return _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        return callback.apply(void 0, args);
      });
    }
  }]);
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  return _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
}();
var ChangingItemsTracker = /*#__PURE__*/function () {
  function ChangingItemsTracker() {
    _classCallCheck(this, ChangingItemsTracker);
    this.changedItems = new Map();
    this.removedItems = new Map();
  }
  return _createClass(ChangingItemsTracker, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          value = _ref4[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = new Set();
    this.removedClasses = new Set();
    this.styleChanges = new ChangingItemsTracker();
    this.attributeChanges = new ChangingItemsTracker();
  }
  return _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) {
        this.addedClasses.add(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) {
        this.removedClasses.add(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
}();
var ExternalMutationTracker = /*#__PURE__*/function () {
  function ExternalMutationTracker(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker);
    this.changedElements = new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  return _createClass(ExternalMutationTracker, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = new WeakMap();
      var _iterator7 = _createForOfIteratorHelper(mutations),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var mutation = _step7.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator8 = _createForOfIteratorHelper(this.addedElements),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var addedElement = _step8.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case 'childList':
              this.handleChildListMutation(mutation);
              break;
            case 'attributes':
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this5 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.removedElements.includes(node)) {
          _this5.removedElements.splice(_this5.removedElements.indexOf(node), 1);
          return;
        }
        if (_this5.isElementAddedByTranslation(node)) {
          return;
        }
        _this5.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.addedElements.includes(node)) {
          _this5.addedElements.splice(_this5.addedElements.indexOf(node), 1);
          return;
        }
        _this5.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case 'class':
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case 'style':
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousValues = previousValue.match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute('style') || '';
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === undefined || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === undefined ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = '';
      }
      if (newValue === attributeName) {
        newValue = '';
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(';').forEach(function (style) {
        var parts = style.split(':');
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(':').trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === 'FONT' && element.getAttribute('style') === 'vertical-align: inherit;';
    }
  }]);
}();
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this6 = this;
    _classCallCheck(this, Component);
    this.fingerprint = '';
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = new Map();
    listeners.forEach(function (listener) {
      var _this6$listeners$get;
      if (!_this6.listeners.has(listener.event)) {
        _this6.listeners.set(listener.event, []);
      }
      (_this6$listeners$get = _this6.listeners.get(listener.event)) === null || _this6$listeners$get === void 0 || _this6$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this6);
    });
    this.externalMutationTracker.start();
  }
  return _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = findComponents(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this7 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this7.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== 'undefined' && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this8 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.pendingFiles); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook('request:started', requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i6, _Object$values, input, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                for (_i6 = 0, _Object$values = Object.values(_this8.pendingFiles); _i6 < _Object$values.length; _i6++) {
                  input = _Object$values[_i6];
                  input.value = '';
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get('Content-Type')) !== null && _headers$get !== void 0 && _headers$get.includes('application/vnd.live-component+html')) && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 14;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this8.valueStore.pushPendingPropsBackToDirty();
                _this8.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this8.renderError(html);
                }
                _this8.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 14:
                _this8.processRerender(html, backendResponse);
                _this8.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this8.isRequestPending) {
                  _this8.isRequestPending = false;
                  _this8.performRequest();
                }
                return _context2.abrupt("return", response);
              case 19:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this9 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this9.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this9.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this9.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === 'up') {
          _this9.emitUp(event, data, componentName);
          return;
        }
        if (target === 'self') {
          _this9.emitSelf(event, data);
          return;
        }
        _this9.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this9.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this10 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this10.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this11 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this11.nextRequestPromiseResolve = resolve;
      });
    }
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      if (isChanged) {
        this.render();
      }
    }
  }]);
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this12 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this12.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  return _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
}();
var RequestBuilder = /*#__PURE__*/function () {
  function RequestBuilder(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    var csrfToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, RequestBuilder);
    this.url = url;
    this.method = method;
    this.csrfToken = csrfToken;
  }
  return _createClass(RequestBuilder, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html',
        'X-Requested-With': 'XMLHttpRequest'
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === 'get' && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set('props', JSON.stringify(props));
        params.set('updated', JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set('propsFromParent', JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set('children', JSON.stringify(children));
        }
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (this.csrfToken && (actions.length || totalFiles)) {
          fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append('data', JSON.stringify(requestData));
        for (var _i7 = 0, _Object$entries3 = Object.entries(files); _i7 < _Object$entries3.length; _i7++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    var csrfToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Backend);
    this.requestBuilder = new RequestBuilder(url, method, csrfToken);
  }
  return _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
}();
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  return _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  return _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on('loading.state:started', function (element, request) {
        _this13.startLoading(component, element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this13.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this14 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) {
          _this14.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this14.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this14.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this15 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          var callable = (_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            return _this15.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this15.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this15.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this15.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this15.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this15.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = _toConsumableArray(Array.from(element.querySelectorAll('[data-loading]')));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute('data-loading')) {
        matchingElements = [element].concat(_toConsumableArray(matchingElements));
      }
      matchingElements.forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'revert';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        element.removeAttribute('class');
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  return _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this16 = this;
      component.on('model:set', function (modelName) {
        _this16.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  return _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this17 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this17.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this17.isConnected = true;
      });
      component.on('disconnect', function () {
        _this17.isConnected = false;
      });
    }
  }]);
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  return _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this18 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this18.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this19 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this19.component.render();
        };
      } else {
        callback = function callback() {
          _this19.component.action(actionName, {}, 0);
        };
      }
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  return _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this20.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this20.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this20.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this21 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = Number.parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this21.addPoll(directive.action, duration);
      });
    }
  }]);
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  return _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this22 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this22.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
function isValueEmpty(value) {
  if (null === value || value === '' || undefined === value || Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (_typeof(value) !== 'object') {
    return false;
  }
  for (var _i8 = 0, _Object$keys = Object.keys(value); _i8 < _Object$keys.length; _i8++) {
    var key = _Object$keys[_i8];
    if (!isValueEmpty(value[key])) {
      return false;
    }
  }
  return true;
}
function toQueryString(data) {
  var _buildQueryStringEntries = function buildQueryStringEntries(data) {
    var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var baseKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    Object.entries(data).forEach(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
        iKey = _ref11[0],
        iValue = _ref11[1];
      var key = baseKey === '' ? iKey : "".concat(baseKey, "[").concat(iKey, "]");
      if ('' === baseKey && isValueEmpty(iValue)) {
        entries[key] = '';
      } else if (null !== iValue) {
        if (_typeof(iValue) === 'object') {
          entries = _objectSpread(_objectSpread({}, entries), _buildQueryStringEntries(iValue, entries, key));
        } else {
          entries[key] = encodeURIComponent(iValue).replace(/%20/g, '+').replace(/%2C/g, ',');
        }
      }
    });
    return entries;
  };
  var entries = _buildQueryStringEntries(data);
  return Object.entries(entries).map(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
      key = _ref13[0],
      value = _ref13[1];
    return "".concat(key, "=").concat(value);
  }).join('&');
}
function fromQueryString(search) {
  search = search.replace('?', '');
  if (search === '') return {};
  var _insertDotNotatedValueIntoData = function insertDotNotatedValueIntoData(key, value, data) {
    var _key$split = key.split('.'),
      _key$split2 = _toArray(_key$split),
      first = _key$split2[0],
      second = _key$split2[1],
      rest = _key$split2.slice(2);
    if (!second) {
      data[key] = value;
      return value;
    }
    if (data[first] === undefined) {
      data[first] = Number.isNaN(Number.parseInt(second)) ? {} : [];
    }
    _insertDotNotatedValueIntoData([second].concat(_toConsumableArray(rest)).join('.'), value, data[first]);
  };
  var entries = search.split('&').map(function (i) {
    return i.split('=');
  });
  var data = {};
  entries.forEach(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      key = _ref15[0],
      value = _ref15[1];
    value = decodeURIComponent(value.replace(/\+/g, '%20'));
    if (!key.includes('[')) {
      data[key] = value;
    } else {
      if ('' === value) return;
      var dotNotatedKey = key.replace(/\[/g, '.').replace(/]/g, '');
      _insertDotNotatedValueIntoData(dotNotatedKey, value, data);
    }
  });
  return data;
}
var UrlUtils = /*#__PURE__*/function (_URL) {
  function UrlUtils() {
    _classCallCheck(this, UrlUtils);
    return _callSuper(this, UrlUtils, arguments);
  }
  _inherits(UrlUtils, _URL);
  return _createClass(UrlUtils, [{
    key: "has",
    value: function has(key) {
      var data = this.getData();
      return Object.keys(data).includes(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var data = this.getData();
      data[key] = value;
      this.setData(data);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.getData()[key];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var data = this.getData();
      delete data[key];
      this.setData(data);
    }
  }, {
    key: "getData",
    value: function getData() {
      if (!this.search) {
        return {};
      }
      return fromQueryString(this.search);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.search = toQueryString(data);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(URL));
var HistoryStrategy = /*#__PURE__*/function () {
  function HistoryStrategy() {
    _classCallCheck(this, HistoryStrategy);
  }
  return _createClass(HistoryStrategy, null, [{
    key: "replace",
    value: function replace(url) {
      history.replaceState(history.state, '', url);
    }
  }]);
}();
var QueryStringPlugin = /*#__PURE__*/function () {
  function QueryStringPlugin(mapping) {
    _classCallCheck(this, QueryStringPlugin);
    this.mapping = mapping;
  }
  return _createClass(QueryStringPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      component.on('render:finished', function (component) {
        var urlUtils = new UrlUtils(window.location.href);
        var currentUrl = urlUtils.toString();
        Object.entries(_this23.mapping).forEach(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
            prop = _ref17[0],
            mapping = _ref17[1];
          var value = component.valueStore.get(prop);
          urlUtils.set(mapping.name, value);
        });
        if (currentUrl !== urlUtils.toString()) {
          HistoryStrategy.replace(urlUtils);
        }
      });
    }
  }]);
}();
var ChildComponentPlugin = /*#__PURE__*/function () {
  function ChildComponentPlugin(component) {
    _classCallCheck(this, ChildComponentPlugin);
    this.parentModelBindings = [];
    this.component = component;
    var modelDirectives = getAllModelDirectiveFromElements(this.component.element);
    this.parentModelBindings = modelDirectives.map(getModelBinding);
  }
  return _createClass(ChildComponentPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this24 = this;
      component.on('request:started', function (requestData) {
        requestData.children = _this24.getChildrenFingerprints();
      });
      component.on('model:set', function (model, value) {
        _this24.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) {
        return;
      }
      this.parentModelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
}();
var LazyPlugin = /*#__PURE__*/function () {
  function LazyPlugin() {
    _classCallCheck(this, LazyPlugin);
    this.intersectionObserver = null;
  }
  return _createClass(LazyPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this25 = this;
      if ('lazy' !== ((_component$element$at = component.element.attributes.getNamedItem('loading')) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) {
        return;
      }
      component.on('connect', function () {
        _this25.getObserver().observe(component.element);
      });
      component.on('disconnect', function () {
        var _this25$intersectionO;
        (_this25$intersectionO = _this25.intersectionObserver) === null || _this25$intersectionO === void 0 || _this25$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) {
        this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.dispatchEvent(new CustomEvent('live:appear'));
              observer.unobserve(entry.target);
            }
          });
        });
      }
      return this.intersectionObserver;
    }
  }]);
}();
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  function LiveControllerDefault() {
    var _this26;
    _classCallCheck(this, LiveControllerDefault);
    _this26 = _callSuper(this, LiveControllerDefault, arguments);
    _this26.pendingActionTriggerModelElement = null;
    _this26.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this26.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this26.handleChangeEvent(event);
      }
    }];
    _this26.pendingFiles = {};
    return _this26;
  }
  _inherits(LiveControllerDefault, _Controller);
  return _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this27 = this;
      var params = event.params;
      if (!params.action) {
        throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      }
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = new Map();
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set('files', function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this27.pendingFiles;
          } else if (_this27.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this27.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            var callable = (_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        for (var _i9 = 0, _Object$entries4 = Object.entries(pendingFiles); _i9 < _Object$entries4.length; _i9++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i9], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this27.component.files(key, input);
          }
          delete _this27.pendingFiles[key];
        }
        _this27.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this27.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this28 = this;
      this.getEmitDirectives(event).forEach(function (_ref18) {
        var name = _ref18.name,
          data = _ref18.data,
          nameMatch = _ref18.nameMatch;
        _this28.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this29 = this;
      this.getEmitDirectives(event).forEach(function (_ref19) {
        var name = _ref19.name,
          data = _ref19.data,
          nameMatch = _ref19.nameMatch;
        _this29.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this30 = this;
      this.getEmitDirectives(event).forEach(function (_ref20) {
        var name = _ref20.name,
          data = _ref20.data;
        _this30.component.emitSelf(name, data);
      });
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) {
        throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      }
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'name':
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this31 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new LazyPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin(), new QueryStringPlugin(this.queryMappingValue), new ChildComponentPlugin(this.component)];
      plugins.forEach(function (plugin) {
        _this31.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this32 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref21) {
        var event = _ref21.event,
          callback = _ref21.callback;
        _this32.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this33 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref22) {
        var event = _ref22.event,
          callback = _ref22.callback;
        _this33.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      if (element instanceof HTMLInputElement && element.type === 'file') {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this34 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'id' && _this34.element.id !== _this34.component.id) {
          _this34.disconnectComponent();
          _this34.createComponent();
          _this34.connectComponent();
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_67__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  csrf: String,
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ''
  },
  requestMethod: {
    type: String,
    "default": 'post'
  },
  queryMapping: {
    type: Object,
    "default": {}
  }
};
LiveControllerDefault.backendFactory = function (controller) {
  return new Backend(controller.urlValue, controller.requestMethodValue, controller.csrfValue);
};


/***/ }),

/***/ "./vendor/symfony/ux-svelte/assets/dist/register_controller.js":
/*!*********************************************************************!*\
  !*** ./vendor/symfony/ux-svelte/assets/dist/register_controller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerSvelteControllerComponents: () => (/* binding */ registerSvelteControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);







function registerSvelteControllerComponents(context) {
  var svelteControllers = {};
  var importAllSvelteComponents = function importAllSvelteComponents(r) {
    r.keys().forEach(function (key) {
      svelteControllers[key] = r(key)["default"];
    });
  };
  importAllSvelteComponents(context);
  window.resolveSvelteComponent = function (name) {
    var component = svelteControllers["./".concat(name, ".svelte")];
    if (typeof component === 'undefined') {
      throw new Error("Svelte controller \"".concat(name, "\" does not exist"));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-svelte/assets/dist/render_controller.js":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-svelte/assets/dist/render_controller.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


























function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var _this$propsValue, _this$introValue;
      this.element.innerHTML = '';
      this.props = (_this$propsValue = this.propsValue) !== null && _this$propsValue !== void 0 ? _this$propsValue : undefined;
      this.intro = (_this$introValue = this.introValue) !== null && _this$introValue !== void 0 ? _this$introValue : undefined;
      this.dispatchEvent('connect');
      var Component = window.resolveSvelteComponent(this.componentValue);
      this._destroyIfExists();
      this.app = new Component({
        target: this.element,
        props: this.props,
        intro: this.intro
      });
      this.element.root = this.app;
      this.dispatchEvent('mount', {
        component: Component
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this._destroyIfExists();
      this.dispatchEvent('unmount');
    }
  }, {
    key: "_destroyIfExists",
    value: function _destroyIfExists() {
      if (this.element.root !== undefined) {
        this.element.root.$destroy();
        delete this.element.root;
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var detail = _objectSpread({
        componentName: this.componentValue,
        props: this.props,
        intro: this.intro
      }, payload);
      this.dispatch(name, {
        detail: detail,
        prefix: 'svelte'
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_26__.Controller);
default_1.values = {
  component: String,
  props: Object,
  intro: Boolean
};


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/svelte/controllers/Edit.svelte":
/*!***********************************************!*\
  !*** ./assets/svelte/controllers/Edit.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/svelte-filepond/src/index */ "./node_modules/svelte-filepond/src/index.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond-plugin-image-resize */ "./node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js");
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond-plugin-image-edit */ "./node_modules/filepond-plugin-image-edit/dist/filepond-plugin-image-edit.js");
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-image-transform */ "./node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js");
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* assets\svelte\controllers\Edit.svelte generated by Svelte v4.2.19 */













function create_fragment(ctx) {
	let div;
	let input;
	let t;
	let filepond;
	let current;
	let mounted;
	let dispose;

	let filepond_props = {
		name: /*name*/ ctx[1],
		server: "/filepond_edit",
		allowMultiple: true,
		oninit: handleInit,
		onaddfile: /*handleAddFile*/ ctx[4],
		maxFiles: 10,
		onremovefile: /*handleRemoveFile*/ ctx[5],
		labelIdle: "Glissez vos fichiers",
		labelProcessing: "Chargement...",
		files: JSON.parse(/*file*/ ctx[0]).map(func),
		plugins: [
			(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default()),
			(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3___default()),
			(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default())
		]
	};

	filepond = new _node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: filepond_props });
	/*filepond_binding*/ ctx[7](filepond);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(filepond.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(input, "display", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "file_update");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "id", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "input_choose_file");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "app");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, input);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*filename*/ ctx[3]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(filepond, div, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input", /*input_input_handler*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*filename*/ 8 && input.value !== /*filename*/ ctx[3]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*filename*/ ctx[3]);
			}

			const filepond_changes = {};
			if (dirty & /*name*/ 2) filepond_changes.name = /*name*/ ctx[1];
			if (dirty & /*file*/ 1) filepond_changes.files = JSON.parse(/*file*/ ctx[0]).map(func);
			filepond.$set(filepond_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(filepond.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(filepond.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			/*filepond_binding*/ ctx[7](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(filepond);
			mounted = false;
			dispose();
		}
	};
}

function handleInit() {
	console.log("File has initialised");
} // filename = JSON.parse(file);

const func = value => {
	return {
		source: value,
		options: {
			type: 'local',
			metadata: { poster: value }
		}
	};
};

function instance($$self, $$props, $$invalidate) {
	const dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_8__.createEventDispatcher)();
	(0,_node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)((filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3___default()), (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default()), (filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5___default()), (filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6___default()), (filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default()));
	let pond;
	let { file } = $$props;
	let filename;
	let tab = [];
	let { name = "filepond" } = $$props;

	function handleAddFile(error, files) {
		//    if(files.filename != JSON.parse(file)){
		//         filename = file.filename
		//    }
		//   JSON.parse(file).map((val) => {
		//         if(tab.indexOf(val) == -1){
		//             tab.push(val);
		//         }
		//   })
		//   console.log(files.filename)
		tab.push(files.filename);

		$$invalidate(3, filename = JSON.stringify(tab));
	}

	function handleRemoveFile(error, files) {
		console.log("File removed");
		tab = tab.filter(el => el != files.filename);
		console.log(tab);
		$$invalidate(3, filename = JSON.stringify(tab));
	}

	function input_input_handler() {
		filename = this.value;
		$$invalidate(3, filename);
	}

	function filepond_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			pond = $$value;
			$$invalidate(2, pond);
		});
	}

	$$self.$$set = $$props => {
		if ('file' in $$props) $$invalidate(0, file = $$props.file);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
	};

	return [
		file,
		name,
		pond,
		filename,
		handleAddFile,
		handleRemoveFile,
		input_input_handler,
		filepond_binding
	];
}

class Edit extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { file: 0, name: 1 });
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/svelte/controllers/Hello.svelte":
/*!************************************************!*\
  !*** ./assets/svelte/controllers/Hello.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _Side_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Side.svelte */ "./assets/svelte/controllers/Side.svelte");
/* assets\svelte\controllers\Hello.svelte generated by Svelte v4.2.19 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	return child_ctx;
}

// (104:28) {#each subItem.list as item (item.title)}
function create_each_block_1(key_1, ctx) {
	let li;
	let button;
	let span;
	let t1;
	let svg;
	let path;
	let t2;
	let mounted;
	let dispose;

	return {
		key: key_1,
		first: null,
		c() {
			li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = `${/*item*/ ctx[16].title}`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "stroke-linecap", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "stroke-linejoin", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "m8.25 4.5 7.5 7.5-7.5 7.5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", "20px");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", "20px");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "fill", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 24 24");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "stroke-width", "1.5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "stroke", "currentColor");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "size-6");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li, "class", "special_list");
			this.first = li;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, li, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t2);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*item*/ ctx[16].num);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(li);
			}

			mounted = false;
			dispose();
		}
	};
}

// (97:12) {#each specialListSubItems as subItem (subItem.header_title)}
function create_each_block(key_1, ctx) {
	let div2;
	let div0;
	let span;
	let t1;
	let div1;
	let ul;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t2;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[13].list);
	const get_key = ctx => /*item*/ ctx[16].title;

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	return {
		key: key_1,
		first: null,
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = `${/*subItem*/ ctx[13].header_title}`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "item_title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "container_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "sub_items");
			this.first = div2;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(ul, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t2);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*specialListSubItems*/ 8) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[13].list);
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, ul, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block_1, null, get_each_context_1);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

// (138:12) 
function create_item_title_slot(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = "Title sec";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "item_title");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			}
		}
	};
}

// (139:12) 
function create_list_link_slot(ctx) {
	let ul;

	return {
		c() {
			ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
			ul.innerHTML = `<a href="/"><li>Meilleures ventes</li></a> <a href="/"><li>Nouveautés</li></a> <a href="/"><li>Nouveautés</li></a> <a href="/"><li>Nouveautés</li></a>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "slot", "list_link");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, ul, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(ul);
			}
		}
	};
}

function create_fragment(ctx) {
	let div5;
	let div4;
	let div3;
	let div2;
	let t9;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t10;
	let side;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*specialListSubItems*/ ctx[3]);
	const get_key = ctx => /*subItem*/ ctx[13].header_title;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	side = new _Side_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				goSide: /*goLeft*/ ctx[2],
				currentTitle: /*currentTitle*/ ctx[0],
				arrayLinks: /*arrayLinks*/ ctx[1],
				$$slots: {
					list_link: [create_list_link_slot],
					item_title: [create_item_title_slot]
				},
				$$scope: { ctx }
			}
		});

	side.$on("update", /*update_handler*/ ctx[6]);

	return {
		c() {
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2.innerHTML = `<div class="item_title"><span>Accès rapides</span></div> <div class="container_items"><ul><a href="/"><li>Accueil</li></a> <a href="/"><li>A propos</li></a> <a href="/"><li>Services</li></a> <a href="/"><li>Contact</li></a></ul></div>`;
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(side.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "sub_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "container_sub_items container_sub_items_main");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goLeft", /*goLeft*/ ctx[2]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "container_all_sub_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "container_parent_all_sub_items");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div3, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(side, div4, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*specialListSubItems*/ 8) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*specialListSubItems*/ ctx[3]);
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div3, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block, null, get_each_context);
			}

			if (!current || dirty & /*goLeft*/ 4) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goLeft", /*goLeft*/ ctx[2]);
			}

			const side_changes = {};
			if (dirty & /*goLeft*/ 4) side_changes.goSide = /*goLeft*/ ctx[2];
			if (dirty & /*currentTitle*/ 1) side_changes.currentTitle = /*currentTitle*/ ctx[0];
			if (dirty & /*arrayLinks*/ 2) side_changes.arrayLinks = /*arrayLinks*/ ctx[1];

			if (dirty & /*$$scope*/ 524288) {
				side_changes.$$scope = { dirty, ctx };
			}

			side.$set(side_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(side.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(side.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div5);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(side);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let currentTitle;
	let arrayLinks = [];
	let goLeft = false;
	let { category } = $$props;

	let specialList2 = [
		{
			title: "Vitrines Portfolio",
			num: setSpecialInnovations1
		},
		{
			title: "Vitrines Landing Page",
			num: setSpecialInnovations2
		},
		{
			title: "Vitrines spécifiques",
			num: setSpecialInnovations3
		}
	];

	let list = [];

	category.forEach(element => {
		list.push({
			title: element.name,
			num: () => setCategory(element.name, element.items)
		});
	});

	function setCategory(name, items) {
		$$invalidate(2, goLeft = !goLeft);
		$$invalidate(0, currentTitle = name);
		$$invalidate(1, arrayLinks = []);

		items.forEach(element => {
			arrayLinks.push({ key: "/1", value: element.name });
		});
	}

	let specialListSubItems = [
		{ header_title: "Catégories", list },
		{
			header_title: "Vitrines",
			list: specialList2
		}
	];

	function setSpecialInnovations1() {
		$$invalidate(2, goLeft = !goLeft);
		$$invalidate(0, currentTitle = "Titre Innovation 1");
		$$invalidate(1, arrayLinks = []);

		$$invalidate(1, arrayLinks = [
			{ key: "/7", value: "Innovation 1 Titre 1" },
			{ key: "/8", value: "Innovation 2 Titre 1" },
			{ key: "/9", value: "Innovation 3 Titre 1" }
		]);
	}

	function setSpecialInnovations2() {
		$$invalidate(2, goLeft = !goLeft);
		$$invalidate(0, currentTitle = "Titre Innovation 2");
		$$invalidate(1, arrayLinks = []);

		$$invalidate(1, arrayLinks = [
			{ key: "/7", value: "Innovation 1 Titre 2" },
			{ key: "/8", value: "Innovation 2 Titre 2" },
			{ key: "/9", value: "Innovation 3 Titre 2" }
		]);
	}

	function setSpecialInnovations3() {
		$$invalidate(2, goLeft = !goLeft);
		$$invalidate(0, currentTitle = "Titre Innovation 3");
		$$invalidate(1, arrayLinks = []);

		$$invalidate(1, arrayLinks = [
			{ key: "/7", value: "Innovation 1 Titre 3" },
			{ key: "/8", value: "Innovation 2 Titre 3" },
			{ key: "/9", value: "Innovation 3 Titre 3" }
		]);
	}

	function updateGoLeft(params) {
		$$invalidate(2, goLeft = params);
	}

	const update_handler = event => updateGoLeft(event.detail);

	$$self.$$set = $$props => {
		if ('category' in $$props) $$invalidate(5, category = $$props.category);
	};

	return [
		currentTitle,
		arrayLinks,
		goLeft,
		specialListSubItems,
		updateGoLeft,
		category,
		update_handler
	];
}

class Hello extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { category: 5 });
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hello);

/***/ }),

/***/ "./assets/svelte/controllers/HomeAnimation.svelte":
/*!********************************************************!*\
  !*** ./assets/svelte/controllers/HomeAnimation.svelte ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* assets\svelte\controllers\HomeAnimation.svelte generated by Svelte v4.2.19 */





function create_fragment(ctx) {
	let h1;
	let t;

	return {
		c() {
			h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*displayedText*/ ctx[0]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, h1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*displayedText*/ 1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*displayedText*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(h1);
			}
		}
	};
}

let text = "Bienvenue à l'espace de gestion de votre vitrine";

function instance($$self, $$props, $$invalidate) {
	let displayedText = "";
	let index = 0;

	// Fonction pour ajouter une lettre à la fois
	function revealNextLetter() {
		if (index < text.length) {
			$$invalidate(0, displayedText += text[index]);
			index += 1;
			setTimeout(revealNextLetter, 100); // Délai entre chaque lettre (en millisecondes)
		}
	}

	// Déclenche l'affichage des lettres une par une au chargement du composant
	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(() => {
		revealNextLetter();
	});

	return [displayedText];
}

class HomeAnimation extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeAnimation);

/***/ }),

/***/ "./assets/svelte/controllers/New.svelte":
/*!**********************************************!*\
  !*** ./assets/svelte/controllers/New.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/svelte-filepond/src/index */ "./node_modules/svelte-filepond/src/index.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond-plugin-image-resize */ "./node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js");
/* harmony import */ var filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond-plugin-image-edit */ "./node_modules/filepond-plugin-image-edit/dist/filepond-plugin-image-edit.js");
/* harmony import */ var filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-image-transform */ "./node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js");
/* harmony import */ var filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* assets\svelte\controllers\New.svelte generated by Svelte v4.2.19 */













function create_fragment(ctx) {
	let div;
	let input;
	let t;
	let filepond;
	let current;
	let mounted;
	let dispose;

	let filepond_props = {
		name: /*name*/ ctx[0],
		server: "/filepond",
		allowMultiple: true,
		oninit: handleInit,
		onaddfile: /*handleAddFile*/ ctx[3],
		maxFiles: 10,
		onremovefile: /*handleRemoveFile*/ ctx[4],
		labelIdle: "Glissez vos fichiers",
		labelProcessing: "Chargement...",
		plugins: [(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default())]
	};

	filepond = new _node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: filepond_props });
	/*filepond_binding*/ ctx[6](filepond);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(filepond.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(input, "display", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "file_update");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "id", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "input_choose_file");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "app");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, input);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*filename*/ ctx[2]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(filepond, div, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input", /*input_input_handler*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*filename*/ 4 && input.value !== /*filename*/ ctx[2]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*filename*/ ctx[2]);
			}

			const filepond_changes = {};
			if (dirty & /*name*/ 1) filepond_changes.name = /*name*/ ctx[0];
			filepond.$set(filepond_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(filepond.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(filepond.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			/*filepond_binding*/ ctx[6](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(filepond);
			mounted = false;
			dispose();
		}
	};
}

function handleInit() {
	console.log("File has initialised");
} // pond.addFile(file)

function instance($$self, $$props, $$invalidate) {
	const dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_8__.createEventDispatcher)();
	(0,_node_modules_svelte_filepond_src_index__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)((filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_3___default()), (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_4___default()), (filepond_plugin_image_resize__WEBPACK_IMPORTED_MODULE_5___default()), (filepond_plugin_image_edit__WEBPACK_IMPORTED_MODULE_6___default()), (filepond_plugin_image_transform__WEBPACK_IMPORTED_MODULE_7___default()));
	let pond;
	let filename;
	let tab = [];
	let { name = "filepond" } = $$props;

	function handleAddFile(error, files) {
		//    if(files.filename != JSON.parse(file)){
		//         filename = file.filename
		//    }
		//   JSON.parse(file).map((val) => {
		//         if(tab.indexOf(val) == -1){
		//             tab.push(val);
		//         }
		//   })
		//   console.log(files.filename)
		tab.push(files.filename);

		$$invalidate(2, filename = JSON.stringify(tab));
	}

	function handleRemoveFile(error, files) {
		console.log("File removed");
		tab = tab.filter(el => el != files.filename);
		console.log(tab);
		$$invalidate(2, filename = JSON.stringify(tab));
	}

	function input_input_handler() {
		filename = this.value;
		$$invalidate(2, filename);
	}

	function filepond_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			pond = $$value;
			$$invalidate(1, pond);
		});
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
	};

	return [
		name,
		pond,
		filename,
		handleAddFile,
		handleRemoveFile,
		input_input_handler,
		filepond_binding
	];
}

class New extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { name: 0 });
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (New);

/***/ }),

/***/ "./assets/svelte/controllers/Side.svelte":
/*!***********************************************!*\
  !*** ./assets/svelte/controllers/Side.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* assets\svelte\controllers\Side.svelte generated by Svelte v4.2.19 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (48:16) {#if arrayLinks}
function create_if_block(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*arrayLinks*/ ctx[2]);
	const get_key = ctx => /*item*/ ctx[6].key;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*arrayLinks*/ 4) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*arrayLinks*/ ctx[2]);
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block, each_1_anchor, get_each_context);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}
		}
	};
}

// (49:20) {#each arrayLinks as item (item.key)}
function create_each_block(key_1, ctx) {
	let a;
	let li;
	let t0_value = /*item*/ ctx[6].value + "";
	let t0;
	let t1;
	let a_href_value;

	return {
		key: key_1,
		first: null,
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = /*item*/ ctx[6].key);
			this.first = a;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, li);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t1);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*arrayLinks*/ 4 && t0_value !== (t0_value = /*item*/ ctx[6].value + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

			if (dirty & /*arrayLinks*/ 4 && a_href_value !== (a_href_value = /*item*/ ctx[6].key)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let div2;
	let button;
	let t2;
	let div0;
	let span1;
	let t3;
	let t4;
	let div1;
	let ul;
	let mounted;
	let dispose;
	let if_block = /*arrayLinks*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.innerHTML = `<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg> <span>Menu principal</span>`;
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*currentTitle*/ ctx[1]);
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
			if (if_block) if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "item_title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "item_title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "container_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "sub_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "container_sub_items container_sub_items_secondary");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goSide", /*goSide*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "hideSide", /*hideSide*/ ctx[3]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, ul);
			if (if_block) if_block.m(ul, null);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*hideSideBar*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*currentTitle*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t3, /*currentTitle*/ ctx[1]);

			if (/*arrayLinks*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(ul, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*goSide*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goSide", /*goSide*/ ctx[0]);
			}

			if (dirty & /*hideSide*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "hideSide", /*hideSide*/ ctx[3]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
			}

			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { goSide = false } = $$props;
	let { currentTitle } = $$props;
	let { arrayLinks } = $$props;
	let hideSide = false;
	const dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_2__.createEventDispatcher)();

	function hideSideBar() {
		$$invalidate(3, hideSide = !hideSide);
		$$invalidate(0, goSide = false);
		dispatch("update", false);
	}

	$$self.$$set = $$props => {
		if ('goSide' in $$props) $$invalidate(0, goSide = $$props.goSide);
		if ('currentTitle' in $$props) $$invalidate(1, currentTitle = $$props.currentTitle);
		if ('arrayLinks' in $$props) $$invalidate(2, arrayLinks = $$props.arrayLinks);
	};

	return [goSide, currentTitle, arrayLinks, hideSide, hideSideBar];
}

class Side extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			goSide: 0,
			currentTitle: 1,
			arrayLinks: 2
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Side);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-031417"], () => (__webpack_exec__("./assets/app.js"), __webpack_exec__("./assets/styles/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFqQix1REFFSTtHQURBLHVEQUFxQjs7Ozs7O3FFQUFoQixHQUFJLElBQUMsS0FBSzs7NkVBRFYsR0FBSSxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRnBCLEdBQVU7Ozs7Ozs7Ozs7OytFQUpaLEdBQVk7Ozs7Ozs7Ozs7Ozs7O0dBMUIvQix1REF3Q007R0FuQ0YsdURBa0NNO0dBakNGLHVEQWtCUzs7R0FDVCx1REFFTTtHQURGLHVEQUEyQjs7O0dBRS9CLHVEQVVNO0dBVEYsdURBUUs7Ozs7dUdBL0I0QixHQUFXOzs7OztrSEFvQnJDLEdBQVk7O3NCQUlWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVDaEIsTUFBTSxHQUFHLEtBQUs7T0FDZCxZQUFZO09BQ1osVUFBVTtLQUVqQixRQUFRLEdBQUcsS0FBSztPQUNkLFFBQVEsR0FBRyw2REFBcUI7O1VBRTdCLFdBQVc7a0JBQ2hCLFFBQVEsSUFBSSxRQUFRO2tCQUNwQixNQUFNLEdBQUcsS0FBSztFQUNkLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvIHN5bmMgXFwuc3ZlbHRlJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmUubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy9FZGl0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vSGVsbG8uc3ZlbHRlIiwid2VicGFjazovLy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vTmV3LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vU2lkZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0VkaXQuc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL0VkaXQuc3ZlbHRlXCIsXG5cdFwiLi9IZWxsby5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvSGVsbG8uc3ZlbHRlXCIsXG5cdFwiLi9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiLFxuXHRcIi4vTmV3LnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9OZXcuc3ZlbHRlXCIsXG5cdFwiLi9TaWRlLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9TaWRlLnN2ZWx0ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmVsdGUkXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMiBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXN2ZWx0ZS0tc3ZlbHRlJzogY29udHJvbGxlcl8xLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzIsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBBdXRvcGxheSwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbi8vIGltcG9ydCBTd2lwZXIgYW5kIG1vZHVsZXMgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2J1bmRsZSc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29ubmVjdCgpIHtcblxuICAgIC8vIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfc2lkZV9iYXJcIik7XG4gICAgdmFyIGJ1dHRvbl9leGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0X3NpZGVfYmFyXCIpO1xuICAgIHZhciBsZWZ0X25hdmlnYXRpb25fYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0X25hdmlnYXRpb25fYmFyXCIpO1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIFxuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuICAgIGlmIChidXR0b25fZXhpdCkge1xuICAgICAgYnV0dG9uX2V4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZpZ2F0aW9uX2Jhci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSlcblxuICAgIH1cbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXRzKSB7XG4gICAgICBpbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cbiAgICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICBzZWxlY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cbiAgICB2YXIgYXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XG4gICAgaWYgKGFyZWFzKSB7XG4gICAgICBhcmVhcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgY29uc3Qgc3dpcGVyX2V4cGxvcmF0aW9uID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcbiAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheV0sXG5cbiAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICAgbG9vcDogdHJ1ZSxcbiAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICBcbiAgLy8gYXV0b3BsYXk6IHtcbiAgLy8gIGRlbGF5OiAyMDAwLCAvLyBEw6lmaWxlbWVudCBhdXRvbWF0aXF1ZSB0b3V0ZXMgbGVzIDEuNSBzZWNvbmRlc1xuICAvLyAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsIC8vIENvbnRpbnVlciBsJ2F1dG9wbGF5IG3Dqm1lIHNpIGwndXRpbGlzYXRldXIgaW50ZXJhZ2l0XG4gIC8vIH0sXG4gICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICBicmVha3BvaW50czoge1xuICAgICBcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjAwcHhcbiAgICAgMjAwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjAwcHhcbiAgICAgNjAwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gODUwcHhcbiAgICAgODUwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogNC41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAwMHB4XG4gICAgIDEwMDA6IHtcbiAgICAgICBzbGlkZXNQZXJWaWV3OiA1LjUsXG4gICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICB9LFxuICB9XG4gICB9KTtcblxuICAgIH0pXG5cblxuICAgIHZhciBiYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhcl9hZG1pblwiKTtcbiAgICB2YXIgYmFyX2FkbWluX21vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFyX2FkbWluX21vYmlsZVwiKTtcbiAgICB2YXIgb3ZlcmxheV9hcHBfbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2FwcF9tb2JpbGVcIik7XG5cblxuICAgIHZhciBsZWZ0X25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRfbmF2X2Jhcl9hZG1pblwiKTtcbiAgICB2YXIgdG9wX25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcF9uYXZfYmFyX2FkbWluXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBpZiAoYmFyX2FkbWluKSB7XG4gICAgICBiYXJfYWRtaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCAoKT0+e1xuICAgICAgICBsZWZ0X25hdl9iYXJfYWRtaW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAgICAgdG9wX25hdl9iYXJfYWRtaW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJhZGRfdHJhbnNpdGlvblwiKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoYmFyX2FkbWluX21vYmlsZSkge1xuICAgICAgYmFyX2FkbWluX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpPT57XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvdmVybGF5X2FwcF9tb2JpbGUpIHtcbiAgICAgIG92ZXJsYXlfYXBwX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpPT57XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIHZhciBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyXCIpO1xuXG5cbiAgICB2YXIgcHJvZHVjdF9jYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdF9jYXRlZ29yeSBidXR0b25cIik7XG5cblxuICAgIGlmIChwcm9kdWN0X2NhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpID0+IHtcbiAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcnkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIFxuICAgIHZhciBmYWN0b3J5X2NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWN0b3J5X2NhdGVnb3J5IGJ1dHRvblwiKTtcblxuXG4gICAgaWYgKGZhY3RvcnlfY2F0ZWdvcnkpIHtcbiAgICAgIGZhY3RvcnlfY2F0ZWdvcnkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCkgPT4ge1xuICAgICAgICAgICAgZmFjdG9yeV9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgXG5cblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclN2ZWx0ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlJztcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCJcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0IEFscGluZSBmcm9tICdhbHBpbmVqcydcbiBcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmVcbiBcbkFscGluZS5zdGFydCgpXG5cblxucmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vc3ZlbHRlL2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLnN2ZWx0ZSQvKSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuICAgICAgICAgICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGNsb3NpbmcgXCIpXCIgYWZ0ZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfVwiP2ApO1xuICAgIH1cbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVNwYWNlZEFycmF5KHBhcnRzKSB7XG4gICAgY29uc3QgZmluYWxQYXJ0cyA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgZmluYWxQYXJ0cy5wdXNoKC4uLnRyaW1BbGwocGFydCkuc3BsaXQoJyAnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcc10rL2csICcgJykudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcCgocykgPT4gcy5yZXBsYWNlKCddJywgJycpKVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpO1xubGV0IGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50ID0gbmV3IE1hcCgpO1xuY29uc3QgcmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG59O1xuY29uc3QgdW5yZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICBjb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICB9XG4gICAgfSwgNSk7XG59KTtcbmNvbnN0IGZpbmRDb21wb25lbnRzID0gKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59O1xuY29uc3QgZmluZENoaWxkcmVuID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZm9yRWFjaCgoY2hpbGRDb21wb25lbnROYW1lLCBjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG5jb25zdCBmaW5kUGFyZW50ID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWVGb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgZmluZENoaWxkcmVuKGNvbXBvbmVudCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5cbmNsYXNzIFZhbHVlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5nZXQobm9ybWFsaXplZE5hbWUpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICB9XG4gICAgZ2V0RGlydHlQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgfVxuICAgIGdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuICAgIH1cbiAgICBmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZUFsbFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0geyAuLi50aGlzLnBlbmRpbmdQcm9wcywgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSB7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbn1cblxuLy8gYmFzZSBJSUZFIHRvIGRlZmluZSBpZGlvbW9ycGhcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQU5EIE5PVyBJVCBCRUdJTlMuLi5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBsZXQgRU1QVFlfU0VUID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgY29uZmlndXJhdGlvbiB2YWx1ZXMsIHVwZGF0YWJsZSBieSB1c2VycyBub3dcbiAgICAgICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbW9ycGhTdHlsZTogXCJvdXRlckhUTUxcIixcbiAgICAgICAgICAgIGNhbGxiYWNrcyA6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlck5vZGVSZW1vdmVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3AsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdtZXJnZScsXG4gICAgICAgICAgICAgICAgc2hvdWxkUHJlc2VydmU6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1wcmVzZXJ2ZVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZUFwcGVuZDogZnVuY3Rpb24gKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXJlLWFwcGVuZFwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZW1vdmU6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJIZWFkTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIENvcmUgTW9ycGhpbmcgQWxnb3JpdGhtIC0gbW9ycGgsIG1vcnBoTm9ybWFsaXplZENvbnRlbnQsIG1vcnBoT2xkTm9kZVRvLCBtb3JwaENoaWxkcmVuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gbW9ycGgob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnID0ge30pIHtcblxuICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIG9sZE5vZGUgPSBvbGROb2RlLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBwYXJzZUNvbnRlbnQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkQ29udGVudCA9IG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCk7XG5cbiAgICAgICAgICAgIGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjdHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmhlYWQuYmxvY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFkID0gbm9ybWFsaXplZE5ld0NvbnRlbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRIZWFkICYmIG5ld0hlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2VzID0gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZCwgb2xkSGVhZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBoZWFkIHByb21pc2VzIHJlc29sdmUsIGNhbGwgbW9ycGggYWdhaW4sIGlnbm9yaW5nIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwiaW5uZXJIVE1MXCIpIHtcblxuICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCwgc28gd2UgYXJlIG9ubHkgdXBkYXRpbmcgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZpbmQgdGhlIGJlc3QgZWxlbWVudCBtYXRjaCBpbiB0aGUgbmV3IGNvbnRlbnQsIG1vcnBoIHRoYXQsIGFuZCBtZXJnZSBpdHMgc2libGluZ3NcbiAgICAgICAgICAgICAgICAvLyBpbnRvIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGJlc3RNYXRjaCA9IGZpbmRCZXN0Tm9kZU1hdGNoKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3Rhc2ggdGhlIHNpYmxpbmdzIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGluc2VydGVkIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzU2libGluZyA9IGJlc3RNYXRjaD8ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IGJlc3RNYXRjaD8ubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBtb3JwaCBpdFxuICAgICAgICAgICAgICAgIGxldCBtb3JwaGVkTm9kZSA9IG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIGJlc3RNYXRjaCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2FzIGEgYmVzdCBtYXRjaCwgbWVyZ2UgdGhlIHNpYmxpbmdzIGluIHRvbyBhbmQgcmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aG9sZSBidW5jaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBub3RoaW5nIHdhcyBhZGRlZCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJEbyBub3QgdW5kZXJzdGFuZCBob3cgdG8gbW9ycGggc3R5bGUgXCIgKyBjdHgubW9ycGhTdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBwb3NzaWJsZUFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIGN0eFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHBvc3NpYmxlQWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gb2xkTm9kZSByb290IG5vZGUgdG8gbWVyZ2UgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBuZXdDb250ZW50IG5ldyBjb250ZW50IHRvIG1lcmdlXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgZW5kZWQgdXAgaW4gdGhlIERPTVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4Lmlnbm9yZUFjdGl2ZSAmJiBvbGROb2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA7IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblxuICAgICAgICAgICAgICAgIG9sZE5vZGUucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3Q29udGVudCwgb2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5pZ25vcmUpIDsgZWxzZSBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5zdHlsZSAhPT0gXCJtb3JwaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBjb3JlIGFsZ29yaXRobSBmb3IgbWF0Y2hpbmcgdXAgY2hpbGRyZW4uICBUaGUgaWRlYSBpcyB0byB1c2UgaWQgc2V0cyB0byB0cnkgdG8gbWF0Y2ggdXBcbiAgICAgICAgICogbm9kZXMgYXMgZmFpdGhmdWxseSBhcyBwb3NzaWJsZS4gIFdlIGdyZWVkaWx5IG1hdGNoLCB3aGljaCBhbGxvd3MgdXMgdG8ga2VlcCB0aGUgYWxnb3JpdGhtIGZhc3QsIGJ1dFxuICAgICAgICAgKiBieSB1c2luZyBpZCBzZXRzLCB3ZSBhcmUgYWJsZSB0byBiZXR0ZXIgbWF0Y2ggdXAgd2l0aCBjb250ZW50IGRlZXBlciBpbiB0aGUgRE9NLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCYXNpYyBhbGdvcml0aG0gaXMsIGZvciBlYWNoIG5vZGUgaW4gdGhlIG5ldyBjb250ZW50OlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBvbGQgcGFyZW50LCBhcHBlbmQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAqIC0gaWYgdGhlIG5ldyBjb250ZW50IGhhcyBhbiBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnQsIG1vcnBoXG4gICAgICAgICAqIC0gc2VhcmNoIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICogLSBpZiBpZCBzZXQgbWF0Y2ggZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlIHNlYXJjaCBmb3IgYSBcInNvZnRcIiBtYXRjaFxuICAgICAgICAgKiAtIGlmIGEgc29mdCBtYXRjaCBpcyBmb3VuZCwgbW9ycGhcbiAgICAgICAgICogLSBvdGhlcndpc2UsIHByZXBlbmQgdGhlIG5ldyBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHR3byBzZWFyY2ggYWxnb3JpdGhtcyB0ZXJtaW5hdGUgaWYgY29tcGV0aW5nIG5vZGUgbWF0Y2hlcyBhcHBlYXIgdG8gb3V0d2VpZ2ggd2hhdCBjYW4gYmUgYWNoaWV2ZWRcbiAgICAgICAgICogd2l0aCB0aGUgY3VycmVudCBub2RlLiAgU2VlIGZpbmRJZFNldE1hdGNoKCkgYW5kIGZpbmRTb2Z0TWF0Y2goKSBmb3IgZGV0YWlscy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdQYXJlbnQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnQgfSBvbGRQYXJlbnQgdGhlIG9sZCBjb250ZW50IHRoYXQgd2UgYXJlIG1lcmdpbmcgdGhlIG5ldyBjb250ZW50IGludG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihuZXdQYXJlbnQsIG9sZFBhcmVudCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBpbnNlcnRpb25Qb2ludCA9IG9sZFBhcmVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgICAgICAgICAvLyBydW4gdGhyb3VnaCBhbGwgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAobmV4dE5ld0NoaWxkKSB7XG5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZCA9IG5leHROZXdDaGlsZDtcbiAgICAgICAgICAgICAgICBuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBleGl0aW5nIHBhcmVudCdzIGNoaWxkcmVuLCBqdXN0IGFwcGVuZFxuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBub2RlIGhhcyBhbiBpZCBzZXQgbWF0Y2ggdGhlbiBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKGluc2VydGlvblBvaW50LCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBzZWFyY2ggZm9yd2FyZCBpbiB0aGUgZXhpc3Rpbmcgb2xkIGNoaWxkcmVuIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICAgICAgICBsZXQgaWRTZXRNYXRjaCA9IGZpbmRJZFNldE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmb3VuZCBhIHBvdGVudGlhbCBtYXRjaCwgcmVtb3ZlIHRoZSBub2RlcyB1bnRpbCB0aGF0IHBvaW50IGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpZFNldE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vIGlkIHNldCBtYXRjaCBmb3VuZCwgc28gc2NhbiBmb3J3YXJkIGZvciBhIHNvZnQgbWF0Y2ggZm9yIHRoZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICAgICAgICBsZXQgc29mdE1hdGNoID0gZmluZFNvZnRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlLCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChzb2Z0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFiYW5kb24gYWxsIGhvcGUgb2YgbW9ycGhpbmcsIGp1c3QgaW5zZXJ0IHRoZSBuZXcgY2hpbGQgYmVmb3JlIHRoZSBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICAgICAgICAvLyBhbmQgbW92ZSBvblxuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbnkgcmVtYWluaW5nIG9sZCBub2RlcyB0aGF0IGRpZG4ndCBtYXRjaCB1cCB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAoaW5zZXJ0aW9uUG9pbnQgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQXR0cmlidXRlIFN5bmNpbmcgQ29kZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBhdHRyIHtTdHJpbmd9IHRoZSBhdHRyaWJ1dGUgdG8gYmUgbXV0YXRlZFxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgKiBAcGFyYW0gdXBkYXRlVHlwZSB7KFwidXBkYXRlXCJ8XCJyZW1vdmVcIil9XG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBzaG91bGQgYmUgaWdub3JlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUoYXR0ciwgdG8sIHVwZGF0ZVR5cGUsIGN0eCkge1xuICAgICAgICAgICAgaWYoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgdG8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHN5bmNzIGEgZ2l2ZW4gbm9kZSB3aXRoIGFub3RoZXIgbm9kZSwgY29weWluZyBvdmVyIGFsbCBhdHRyaWJ1dGVzIGFuZFxuICAgICAgICAgKiBpbm5lciBlbGVtZW50IHN0YXRlIGZyb20gdGhlICdmcm9tJyBub2RlIHRvIHRoZSAndG8nIG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBmcm9tIHRoZSBlbGVtZW50IHRvIGNvcHkgYXR0cmlidXRlcyAmIHN0YXRlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0byB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzeW5jTm9kZUZyb20oZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXG4gICAgICAgICAgICAvLyBpZiBpcyBhbiBlbGVtZW50IHR5cGUsIHN5bmMgdGhlIGF0dHJpYnV0ZXMgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIG5ldyBub2RlIGludG8gdGhlIG5ldyBub2RlXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMSAvKiBlbGVtZW50IHR5cGUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZXMgPSB0by5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZnJvbUF0dHJpYnV0ZSBvZiBmcm9tQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG8uZ2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSkgIT09IGZyb21BdHRyaWJ1dGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIGZyb21BdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgYmFja3dhcmRzIHRvIGF2b2lkIHNraXBwaW5nIG92ZXIgaXRlbXMgd2hlbiBhIGRlbGV0ZSBvY2N1cnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdG9BdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlID0gdG9BdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzeW5jIHRleHQgbm9kZXNcbiAgICAgICAgICAgIGlmICh0eXBlID09PSA4IC8qIGNvbW1lbnQgKi8gfHwgdHlwZSA9PT0gMyAvKiB0ZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvLm5vZGVWYWx1ZSAhPT0gZnJvbS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8ubm9kZVZhbHVlID0gZnJvbS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHRvLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgLy8gc3luYyBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBzeW5jSW5wdXRWYWx1ZShmcm9tLCB0bywgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0gIT09IHRvW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgJ3VwZGF0ZScsIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bYXR0cmlidXRlTmFtZV0gPSBmcm9tW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICdyZW1vdmUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTkI6IG1hbnkgYm90aGFucyBkaWVkIHRvIGJyaW5nIHVzIGluZm9ybWF0aW9uOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL3BhdHJpY2stc3RlZWxlLWlkZW0vbW9ycGhkb20vYmxvYi9tYXN0ZXIvc3JjL3NwZWNpYWxFbEhhbmRsZXJzLmpzXG4gICAgICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vY2hvb2pzL25hbm9tb3JwaC9ibG9iL21hc3Rlci9saWIvbW9ycGguanNMMTEzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmcm9tIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0byBzeW5jIHRoZSBpbnB1dCB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgZnJvbS50eXBlICE9PSAnZmlsZScpIHtcblxuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBzeW5jIGJvb2xlYW4gYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnY2hlY2tlZCcsIGN0eCk7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdkaXNhYmxlZCcsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyb20uaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdzZWxlY3RlZCcsIGN0eCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRvIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gdGhlIEhFQUQgdGFnIGNhbiBiZSBoYW5kbGVkIHNwZWNpYWxseSwgZWl0aGVyIHcvIGEgJ21lcmdlJyBvciAnYXBwZW5kJyBzdHlsZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWRUYWcsIGN1cnJlbnRIZWFkLCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHByZXNlcnZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IG5vZGVzVG9BcHBlbmQgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIHB1dCBhbGwgbmV3IGhlYWQgZWxlbWVudHMgaW50byBhIE1hcCwgYnkgdGhlaXIgb3V0ZXJIVE1MXG4gICAgICAgICAgICBsZXQgc3JjVG9OZXdIZWFkTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc3JjVG9OZXdIZWFkTm9kZXMuc2V0KG5ld0hlYWRDaGlsZC5vdXRlckhUTUwsIG5ld0hlYWRDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciBlYWNoIGVsdCBpbiB0aGUgY3VycmVudCBoZWFkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBoZWFkIGVsZW1lbnQgaXMgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIGxldCBpbk5ld0NvbnRlbnQgPSBzcmNUb05ld0hlYWROb2Rlcy5oYXMoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ByZXNlcnZlZCA9IGN0eC5oZWFkLnNob3VsZFByZXNlcnZlKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5OZXdDb250ZW50IHx8IGlzUHJlc2VydmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCB2ZXJzaW9uIGFuZCBsZXQgdGhlIG5ldyB2ZXJzaW9uIHJlcGxhY2UgaXQgYW5kIHJlLWV4ZWN1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgYW5kIHNob3VsZCBub3QgYmUgcmUtYXBwZW5kZWQsIHNvIHJlbW92ZSBpdCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV3IGNvbnRlbnQgbWFwLCBwcmVzZXJ2aW5nIGl0IGluIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLmRlbGV0ZShjdXJyZW50SGVhZEVsdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRNZXJnZVN0eWxlID09PSBcImFwcGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIGFuZCB0aGlzIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBpZiBhbmQgb25seSBpZiBpdCBpcyBtYXJrZWQgZm9yIHJlLWFwcGVuZCBkbyB3ZSBkbyBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVBcHBlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBtZXJnZSwgd2UgcmVtb3ZlIHRoaXMgY29udGVudCBzaW5jZSBpdCBpcyBub3QgaW4gdGhlIG5ldyBoZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmhlYWQuc2hvdWxkUmVtb3ZlKGN1cnJlbnRIZWFkRWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXNoIHRoZSByZW1haW5pbmcgbmV3IGhlYWQgZWxlbWVudHMgaW4gdGhlIE1hcCBpbnRvIHRoZVxuICAgICAgICAgICAgLy8gbm9kZXMgdG8gYXBwZW5kIHRvIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFbHQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChuZXdOb2RlLm91dGVySFRNTCkuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3RWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsdC5ocmVmIHx8IG5ld0VsdC5zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHJlbW92ZWQgZWxlbWVudHMsIGFmdGVyIHdlIGhhdmUgYXBwZW5kZWQgdGhlIG5ldyBlbGVtZW50cyB0byBhdm9pZFxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBuZXR3b3JrIHJlcXVlc3RzIGZvciB0aGluZ3MgbGlrZSBzdHlsZSBzaGVldHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge2FkZGVkOiBhZGRlZCwga2VwdDogcHJlc2VydmVkLCByZW1vdmVkOiByZW1vdmVkfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub09wKCkge1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICBEZWVwIG1lcmdlcyB0aGUgY29uZmlnIG9iamVjdCBhbmQgdGhlIElkaW9tb3JvcGguZGVmYXVsdHMgb2JqZWN0IHRvXG4gICAgICAgICAgcHJvZHVjZSBhIGZpbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuICAgICAgICAgICAgbGV0IGZpbmFsQ29uZmlnID0ge307XG4gICAgICAgICAgICAvLyBjb3B5IHRvcCBsZXZlbCBzdHVmZiBpbnRvIGZpbmFsIGNvbmZpZ1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgZGVmYXVsdHMpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgY29uZmlnKTtcblxuICAgICAgICAgICAgLy8gY29weSBjYWxsYmFja3MgaW50byBmaW5hbCBjb25maWcgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgY2FsbGJhY2tzKVxuICAgICAgICAgICAgZmluYWxDb25maWcuY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgZGVmYXVsdHMuY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblxuICAgICAgICAgICAgLy8gY29weSBoZWFkIGNvbmZpZyBpbnRvIGZpbmFsIGNvbmZpZyAgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgaGVhZClcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmhlYWQgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgZGVmYXVsdHMuaGVhZCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbENvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1vcnBoQ29udGV4dChvbGROb2RlLCBuZXdDb250ZW50LCBjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvbGROb2RlLFxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQ6IG5ld0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbW9ycGhTdHlsZTogY29uZmlnLm1vcnBoU3R5bGUsXG4gICAgICAgICAgICAgICAgaWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZVZhbHVlOiBjb25maWcuaWdub3JlQWN0aXZlVmFsdWUsXG4gICAgICAgICAgICAgICAgaWRNYXA6IGNyZWF0ZUlkTWFwKG9sZE5vZGUsIG5ld0NvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRlYWRJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG4gICAgICAgICAgICAgICAgaGVhZDogY29uZmlnLmhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRTZXRNYXRjaChub2RlMSwgbm9kZTIsIGN0eCkge1xuICAgICAgICAgICAgaWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlMS5pZCAhPT0gXCJcIiAmJiBub2RlMS5pZCA9PT0gbm9kZTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpID4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFydEluY2x1c2l2ZSAhPT0gZW5kRXhjbHVzaXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmNsdXNpdmUgPSBzdGFydEluY2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuICAgICAgICAgICAgcmV0dXJuIGVuZEV4Y2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gU2NhbnMgZm9yd2FyZCBmcm9tIHRoZSBpbnNlcnRpb25Qb2ludCBpbiB0aGUgb2xkIHBhcmVudCBsb29raW5nIGZvciBhIHBvdGVudGlhbCBpZCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIGlkIG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHRoZSBudW1iZXIgb2YgcG90ZW50aWFsIGlkIG1hdGNoZXMgd2UgYXJlIGRpc2NhcmRpbmcgaXMgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAgICAvLyBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBmb3IgdGhlIG5ldyBjaGlsZFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRJZFNldE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgLy8gbWF4IGlkIG1hdGNoZXMgd2UgYXJlIHdpbGxpbmcgdG8gZGlzY2FyZCBpbiBvdXIgc2VhcmNoXG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID0gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5ld0NoaWxkLCBvbGRQYXJlbnQpO1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsTWF0Y2ggPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBvbmx5IHNlYXJjaCBmb3J3YXJkIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2hcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBwb3NzaWJpbGl0eSBvZiBhbiBpZCBtYXRjaCwgc2NhbiBmb3J3YXJkXG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgcG90ZW50aWFsIGlkIG1hdGNoIGNvdW50IHdlIGFyZSBkaXNjYXJkaW5nICh0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhpcyB0byBtYWtlIGl0IGxpa2VseVxuICAgICAgICAgICAgICAgIC8vIHdvcnRoIGl0KVxuICAgICAgICAgICAgICAgIGxldCBvdGhlck1hdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBpZCBtYXRjaCwgcmV0dXJuIHRoZSBjdXJyZW50IHBvdGVudGlhbCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxNYXRjaCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZXIgdGhlIG90aGVyIHBvdGVudGlhbCBtYXRjaGVzIG9mIHRoaXMgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJNYXRjaENvdW50ICs9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxNYXRjaCwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlck1hdGNoQ291bnQgPiBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgbW9yZSBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBpbiBfb3RoZXJfIGNvbnRlbnQsIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgaGF2ZSBhIGdvb2QgY2FuZGlkYXRlIGZvciBhbiBpZCBtYXRjaCwgc28gcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgc29mdCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2ggZm9yIHRoZSBuZXcgY2hpbGQgT1JcbiAgICAgICAgLy8gaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBpbiB0aGUgb2xkIHBhcmVudHMgY2hpbGRyZW4gT1IgaWYgd2UgZmluZCB0d29cbiAgICAgICAgLy8gcG90ZW50aWFsIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIG5leHQgdHdvIHBpZWNlcyBvZiBuZXcgY29udGVudFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsU29mdE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGxldCBzaWJsaW5nU29mdE1hdGNoQ291bnQgPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgcG90ZW50aWFsIHNvZnQgbWF0Y2ggaGFzIGEgcG90ZW50aWFsIGlkIHNldCBtYXRjaCB3aXRoIHRoZSByZW1haW5pbmcgbmV3XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgc28gYmFpbCBvdXQgb2YgbG9va2luZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgc29mdCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IG5vZGUsIHJldHVybiBpdFxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXh0U2libGluZywgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBuZXcgbm9kZSBoYXMgYSBzb2Z0IG1hdGNoIHdpdGggdGhpcyBub2RlLCBzb1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50IG9mIGZ1dHVyZSBzb2Z0IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1NvZnRNYXRjaENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBmdXR1cmUgc29mdCBtYXRjaGVzLCBiYWlsIHRvIGFsbG93IHRoZSBzaWJsaW5ncyB0byBzb2Z0IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgY29uc3VtZSBmdXR1cmUgc29mdCBtYXRjaGVzIGZvciB0aGUgc2FrZSBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nU29mdE1hdGNoQ291bnQgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhZHZhbmNlZCB0byB0aGUgbmV4dCBvbGQgY29udGVudCBjaGlsZFxuICAgICAgICAgICAgICAgIHBvdGVudGlhbFNvZnRNYXRjaCA9IHBvdGVudGlhbFNvZnRNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgc3ZncyB0byBhdm9pZCBmYWxzZS1wb3NpdGl2ZSBtYXRjaGVzIG9uIGhlYWQsIGV0Yy5cbiAgICAgICAgICAgIGxldCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkID0gbmV3Q29udGVudC5yZXBsYWNlKC88c3ZnKFxcc1tePl0qPnw+KShbXFxzXFxTXSo/KTxcXC9zdmc+L2dpbSwgJycpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbmV3Q29udGVudCBjb250YWlucyBhIGh0bWwsIGhlYWQgb3IgYm9keSB0YWcsIHdlIGNhbiBzaW1wbHkgcGFyc2UgaXQgdy9vIHdyYXBwaW5nXG4gICAgICAgICAgICBpZiAoY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2h0bWw+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2hlYWQ+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2JvZHk+LykpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobmV3Q29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBmdWxsIEhUTUwgZG9jdW1lbnQsIHJldHVybiB0aGUgZG9jdW1lbnQgaXRzZWxmIGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcmV0dXJuIHRoZSBodG1sIGVsZW1lbnQgYXMgdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWxFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXJ0aWFsIEhUTUwsIHdyYXAgaXQgaW4gYSB0ZW1wbGF0ZSB0YWcgdG8gcHJvdmlkZSBhIHBhcmVudCBlbGVtZW50IGFuZCBhbHNvIHRvIGhlbHBcbiAgICAgICAgICAgICAgICAvLyBkZWFsIHdpdGggdG91Y2h5IHRhZ3MgbGlrZSB0ciwgdGJvZHksIGV0Yy5cbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFwiPGJvZHk+PHRlbXBsYXRlPlwiICsgbmV3Q29udGVudCArIFwiPC90ZW1wbGF0ZT48L2JvZHk+XCIsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2VEb2MuYm9keS5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBVbm5lY2Vzc2FyeUxvY2FsVmFyaWFibGVKU1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHRlbXBsYXRlIHRhZyBjcmVhdGVkIGJ5IGlkaW9tb3JwaCBwYXJzaW5nIGNhbiBzZXJ2ZSBhcyBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgc2luZ2xlIG5vZGUgaXMgYWRkZWQgYXMgYSBjaGlsZCB0byBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsIG5vZGVzIGluIHRoZSBhcnJheSBvciBIVE1MRWxlbWVudCBjb2xsZWN0aW9uIGFyZSBjb25zb2xpZGF0ZWQgdW5kZXJcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBkdW1teSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgWy4uLm5ld0NvbnRlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChlbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRTaWJsaW5ncyhwcmV2aW91c1NpYmxpbmcsIG1vcnBoZWROb2RlLCBuZXh0U2libGluZykge1xuICAgICAgICAgICAgbGV0IHN0YWNrID0gW107XG4gICAgICAgICAgICBsZXQgYWRkZWQgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChwcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobm9kZSk7IC8vIHB1c2ggYWRkZWQgcHJlY2VkaW5nIHNpYmxpbmdzIG9uIGluIG9yZGVyIGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRlZC5wdXNoKG1vcnBoZWROb2RlKTtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXh0U2libGluZyk7IC8vIGhlcmUgd2UgYXJlIGdvaW5nIGluIG9yZGVyLCBzbyBwdXNoIG9uIGFzIHdlIHNjYW4sIHJhdGhlciB0aGFuIGFkZFxuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdE5vZGVNYXRjaChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbmV3Q29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdTY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gbmV3U2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVzdEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCkge1xuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG4gICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZCh0ZW1wTm9kZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRlbXBOb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHRlbXBOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gSUQgU2V0IEZ1bmN0aW9uc1xuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gIWN0eC5kZWFkSWRzLmhhcyhpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KHRhcmdldE5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIHJldHVybiBpZFNldC5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBub2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIHtcbiAgICAgICAgICAgICAgICBjdHguZGVhZElkcy5hZGQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuICAgICAgICAgICAgbGV0IHNvdXJjZVNldCA9IGN0eC5pZE1hcC5nZXQobm9kZTEpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGxldCBtYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gYSBwb3RlbnRpYWwgbWF0Y2ggaXMgYW4gaWQgaW4gdGhlIHNvdXJjZSBhbmQgcG90ZW50aWFsSWRzU2V0LCBidXRcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGhhcyBub3QgYWxyZWFkeSBiZWVuIG1lcmdlZCBpbnRvIHRoZSBET01cbiAgICAgICAgICAgICAgICBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpIHtcbiAgICAgICAgICAgICAgICAgICAgKyttYXRjaENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRjaENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm90dG9tIHVwIGFsZ29yaXRobSB0aGF0IGZpbmRzIGFsbCBlbGVtZW50cyB3aXRoIGlkcyBpbnNpZGUgb2YgdGhlIG5vZGVcbiAgICAgICAgICogYXJndW1lbnQgYW5kIHBvcHVsYXRlcyBpZCBzZXRzIGZvciB0aG9zZSBub2RlcyBhbmQgYWxsIHRoZWlyIHBhcmVudHMsIGdlbmVyYXRpbmdcbiAgICAgICAgICogYSBzZXQgb2YgaWRzIGNvbnRhaW5lZCB3aXRoaW4gYWxsIG5vZGVzIGZvciB0aGUgZW50aXJlIGhpZXJhcmNoeSBpbiB0aGUgRE9NXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICAgICAgICAgKiBAcGFyYW0ge01hcDxOb2RlLCBTZXQ8U3RyaW5nPj59IGlkTWFwXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuICAgICAgICAgICAgbGV0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBmaW5kIGFsbCBlbGVtZW50cyB3aXRoIGFuIGlkIHByb3BlcnR5XG4gICAgICAgICAgICBsZXQgaWRFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgaWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWx0O1xuICAgICAgICAgICAgICAgIC8vIHdhbGsgdXAgdGhlIHBhcmVudCBoaWVyYXJjaHkgb2YgdGhhdCBlbGVtZW50LCBhZGRpbmcgdGhlIGlkXG4gICAgICAgICAgICAgICAgLy8gb2YgZWxlbWVudCB0byB0aGUgcGFyZW50J3MgaWQgc2V0XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG5vZGVQYXJlbnQgJiYgY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZFNldCA9IGlkTWFwLmdldChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGlkIHNldCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGluc2VydCBpdCBpbiB0aGUgIG1hcFxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRTZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcC5zZXQoY3VycmVudCwgaWRTZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlkU2V0LmFkZChlbHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvbXB1dGVzIGEgbWFwIG9mIG5vZGVzIHRvIGFsbCBpZHMgY29udGFpbmVkIHdpdGhpbiB0aGF0IG5vZGUgKGluY2x1c2l2ZSBvZiB0aGVcbiAgICAgICAgICogbm9kZSkuICBUaGlzIG1hcCBjYW4gYmUgdXNlZCB0byBhc2sgaWYgdHdvIG5vZGVzIGhhdmUgaW50ZXJzZWN0aW5nIHNldHMgb2YgaWRzLCB3aGljaCBhbGxvd3NcbiAgICAgICAgICogZm9yIGEgbG9vc2VyIGRlZmluaXRpb24gb2YgXCJtYXRjaGluZ1wiIHRoYW4gdHJhZGl0aW9uIGlkIG1hdGNoaW5nLCBhbmQgYWxsb3dzIGNoaWxkIG5vZGVzXG4gICAgICAgICAqIHRvIGNvbnRyaWJ1dGUgdG8gYSBwYXJlbnQgbm9kZXMgbWF0Y2hpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb2xkQ29udGVudCAgdGhlIG9sZCBjb250ZW50IHRoYXQgd2lsbCBiZSBtb3JwaGVkXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3Q29udGVudCAgdGhlIG5ldyBjb250ZW50IHRvIG1vcnBoIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBhIG1hcCBvZiBub2RlcyB0byBpZCBzZXRzIGZvciB0aGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGxldCBpZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5ld0NvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBpZE1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gVGhpcyBpcyB3aGF0IGVuZHMgdXAgYmVjb21pbmcgdGhlIElkaW9tb3JwaCBnbG9iYWwgb2JqZWN0XG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcnBoLFxuICAgICAgICAgICAgZGVmYXVsdHNcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgc3luY0F0dHJpYnV0ZXMgPSAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZnJvbUVsLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIHRvRWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBleHRlcm5hbE11dGF0aW9uVHJhY2tlcikge1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG4gICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9yaWdpbmFsIGVsZW1lbnQgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlci5wdXNoKGlkKTtcbiAgICAgICAgaWYgKCFyZXBsYWNlV2l0aENsb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcbiAgICAgICAgb2xkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRPbGRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZE9sZEVsZW1lbnQ7XG4gICAgfTtcbiAgICByb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxpdmUtcHJlc2VydmVdJykuZm9yRWFjaCgobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IG5ld0VsZW1lbnQuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEtbGl2ZS1wcmVzZXJ2ZSBhdHRyaWJ1dGUgcmVxdWlyZXMgYW4gaWQgYXR0cmlidXRlIHRvIGJlIHNldCBvbiB0aGUgZWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQgd2l0aCBpZCBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgb3JpZ2luYWwgSFRNTGApO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxpdmUtcHJlc2VydmUnKTtcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuc2V0KGlkLCBvbGRFbGVtZW50KTtcbiAgICAgICAgc3luY0F0dHJpYnV0ZXMobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgSWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMoZnJvbUVsLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmlkID09PSB0b0VsLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRnJvbUVsID0gbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKGZyb21FbC5pZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvbmVkRnJvbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBJZGlvbW9ycGgubW9ycGgoY2xvbmVkRnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5BbHBpbmUubW9ycGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIG1vcnBoIGZ1bmN0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBBbHBpbmUuanMgTW9ycGggcGx1Z2luIGlzIGluc3RhbGxlZCBhbmQgbG9hZGVkLCBzZWUgaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy9tb3JwaCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbCAhPT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDaGFuZ2VzID0gZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuZ2V0Q2hhbmdlZEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdPUFRJT04nICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FbCA9IGNsb25lSFRNTEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZFRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSB8fCAoZnJvbUVsLmlkICYmIGZyb21FbC5pZCAhPT0gdG9FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2tpcC1tb3JwaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhub2RlLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAobm9kZS5pZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKG9yaWdpbmFsRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnRzLicpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuY2xhc3MgVW5zeW5jZWRJbnB1dHNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBldmVudDogJ2lucHV0JywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlciA9IG1vZGVsRWxlbWVudFJlc29sdmVyO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzID0gbmV3IFVuc3luY2VkSW5wdXRDb250YWluZXIoKTtcbiAgICB9XG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQodGFyZ2V0KTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyLmdldE1vZGVsTmFtZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5hZGQoZWxlbWVudCwgbW9kZWxOYW1lKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzLmFsbFVuc3luY2VkSW5wdXRzKCk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgfVxufVxuY2xhc3MgVW5zeW5jZWRJbnB1dENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGFkZChlbGVtZW50LCBtb2RlbE5hbWUgPSBudWxsKSB7XG4gICAgICAgIGlmIChtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFsbFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5kZXhPZihtb2RlbE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzO1xuICAgIH1cbn1cblxuY2xhc3MgSG9va01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soLi4uYXJncykpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIGdldEJvZHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBhd2FpdCB0aGlzLnJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhbmdpbmdJdGVtc1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHNldEl0ZW0oaXRlbU5hbWUsIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogb3JpZ2luYWxSZWNvcmQub3JpZ2luYWwsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBwcmV2aW91c1ZhbHVlLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGl0ZW1OYW1lLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgbGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHRydWVPcmlnaW5hbFZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yZW1vdmVkSXRlbXMua2V5cygpKTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgYXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5yZW1vdmVkQ2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuaXNFbXB0eSgpICYmXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuaXNFbXB0eSgpKTtcbiAgICB9XG59XG5cbmNsYXNzIEV4dGVybmFsTXV0YXRpb25UcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSA/IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KSA6IG51bGw7XG4gICAgfVxuICAgIGdldEFkZGVkRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHM7XG4gICAgfVxuICAgIHdhc0VsZW1lbnRBZGRlZChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG4gICAgfVxuICAgIGhhbmRsZVBlbmRpbmdDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm9uTXV0YXRpb25zKHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNsYXNzTGlzdCk7XG4gICAgICAgIGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBhZGRlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiBwcmV2aW91c1N0eWxlc1trZXldID09PSB1bmRlZmluZWQgfHwgcHJldmlvdXNTdHlsZXNba2V5XSAhPT0gbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBhZGRlZE9yQ2hhbmdlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkU3R5bGUoc3R5bGUsIG5ld1N0eWxlc1tzdHlsZV0sIHByZXZpb3VzU3R5bGVzW3N0eWxlXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICB9XG4gICAgZXh0cmFjdFN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVzLnNwbGl0KCc7JykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuICAgIGlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09ICdGT05UJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJ3ZlcnRpY2FsLWFsaWduOiBpbmhlcml0Oyc7XG4gICAgfVxufVxuXG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHByb3BzLCBsaXN0ZW5lcnMsIGlkLCBiYWNrZW5kLCBlbGVtZW50RHJpdmVyKSB7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGxpc3RlbmVyLmV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lci5ldmVudCwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxpc3RlbmVyLmV2ZW50KT8ucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgYWRkUGx1Z2luKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdW5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRVcChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpbmRDb21wb25lbnRzKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUdXJib0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgVHVyYm8gIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICAgIH1cbiAgICB0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHBlcmZvcm1SZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG4gICAgICAgICAgICBjaGlsZHJlbjoge30sXG4gICAgICAgICAgICB1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuICAgICAgICAgICAgZmlsZXM6IGZpbGVzVG9TZW5kLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXF1ZXN0OnN0YXJ0ZWQnLCByZXF1ZXN0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdChyZXF1ZXN0Q29uZmlnLnByb3BzLCByZXF1ZXN0Q29uZmlnLmFjdGlvbnMsIHJlcXVlc3RDb25maWcudXBkYXRlZCwgcmVxdWVzdENvbmZpZy5jaGlsZHJlbiwgcmVxdWVzdENvbmZpZy51cGRhdGVkUHJvcHNGcm9tUGFyZW50LCByZXF1ZXN0Q29uZmlnLmZpbGVzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmICghaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpPy5pbmNsdWRlcygnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnKSAmJlxuICAgICAgICAgICAgICAgICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1cmJvRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RpZmllZE1vZGVsVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcbiAgICAgICAgICAgIGlmICghbmV3RWxlbWVudC5tYXRjaGVzKCdbZGF0YS1jb250cm9sbGVyfj1saXZlXScpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpdmUgY29tcG9uZW50IHRlbXBsYXRlIG11c3QgY29udGFpbiBhIHNpbmdsZSByb290IGNvbnRyb2xsZXIgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgJyR7dGhpcy5uYW1lfScgY29tcG9uZW50IEhUTUwgcmV0dXJuZWQ6YCwge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcygpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgICAgICBjb25zdCBldmVudHNUb0VtaXQgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0RXZlbnRzVG9FbWl0KCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKTtcbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID09PSAnZ2V0JyAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KHByb3BzKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzJywgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3VwZGF0ZWQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzRnJvbVBhcmVudCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbicsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHByb3BzLCB1cGRhdGVkIH07XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnByb3BzRnJvbVBhcmVudCA9IHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbiAmJiAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QnVpbGRlciA9IG5ldyBSZXF1ZXN0QnVpbGRlcih1cmwsIG1ldGhvZCwgY3NyZlRva2VuKTtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCBPYmplY3Qua2V5cyh1cGRhdGVkKSk7XG4gICAgfVxufVxuXG5jbGFzcyBTdGltdWx1c0VsZW1lbnREcml2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0Rpc3BhdGNoVmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgdHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpID8/ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJlxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHtmaW5hbEFjdGlvbn1cImApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICB9XG4gICAgZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGluZ0VsZW1lbnRzID0gWy4uLkFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpKV07XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gW2VsZW1lbnQsIC4uLm1hdGNoaW5nRWxlbWVudHNdO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuICAgIH1cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZXZlcnQnO1xuICAgIH1cbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnO1xuICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRBdHRyaWJ1dGUnIDogJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnYWRkQXR0cmlidXRlJztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFnZVVubG9hZGluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOnN0YXJ0ZWQnLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdEaXJlY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICckcmVuZGVyJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlRW1wdHkodmFsdWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09ICcnIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgIGlmICghaXNWYWx1ZUVtcHR5KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBjb25zdCBidWlsZFF1ZXJ5U3RyaW5nRW50cmllcyA9IChkYXRhLCBlbnRyaWVzID0ge30sIGJhc2VLZXkgPSAnJykgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaUtleSwgaVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYmFzZUtleSA9PT0gJycgPyBpS2V5IDogYCR7YmFzZUtleX1bJHtpS2V5fV1gO1xuICAgICAgICAgICAgaWYgKCcnID09PSBiYXNlS2V5ICYmIGlzVmFsdWVFbXB0eShpVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChudWxsICE9PSBpVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IHsgLi4uZW50cmllcywgLi4uYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoaVZhbHVlLCBlbnRyaWVzLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQoaVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJTJDL2csICcsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfTtcbiAgICBjb25zdCBlbnRyaWVzID0gYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoZGF0YSk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApXG4gICAgICAgIC5qb2luKCcmJyk7XG59XG5mdW5jdGlvbiBmcm9tUXVlcnlTdHJpbmcoc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nLCAnJyk7XG4gICAgaWYgKHNlYXJjaCA9PT0gJycpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCBpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSA9IChrZXksIHZhbHVlLCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCAuLi5yZXN0XSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbZmlyc3RdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGFbZmlyc3RdID0gTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChzZWNvbmQpKSA/IHt9IDogW107XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoW3NlY29uZCwgLi4ucmVzdF0uam9pbignLicpLCB2YWx1ZSwgZGF0YVtmaXJzdF0pO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IHNlYXJjaC5zcGxpdCgnJicpLm1hcCgoaSkgPT4gaS5zcGxpdCgnPScpKTtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCdbJykpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCcnID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBkb3ROb3RhdGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcWy9nLCAnLicpLnJlcGxhY2UoL10vZywgJycpO1xuICAgICAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoZG90Tm90YXRlZEtleSwgdmFsdWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5jbGFzcyBVcmxVdGlscyBleHRlbmRzIFVSTCB7XG4gICAgaGFzKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpW2tleV07XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVF1ZXJ5U3RyaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdG9RdWVyeVN0cmluZyhkYXRhKTtcbiAgICB9XG59XG5jbGFzcyBIaXN0b3J5U3RyYXRlZ3kge1xuICAgIHN0YXRpYyByZXBsYWNlKHVybCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5LnN0YXRlLCAnJywgdXJsKTtcbiAgICB9XG59XG5cbmNsYXNzIFF1ZXJ5U3RyaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBwaW5nKSB7XG4gICAgICAgIHRoaXMubWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsIChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybFV0aWxzID0gbmV3IFVybFV0aWxzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB1cmxVdGlscy50b1N0cmluZygpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tYXBwaW5nKS5mb3JFYWNoKChbcHJvcCwgbWFwcGluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChwcm9wKTtcbiAgICAgICAgICAgICAgICB1cmxVdGlscy5zZXQobWFwcGluZy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXJsICE9PSB1cmxVdGlscy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeVN0cmF0ZWd5LnJlcGxhY2UodXJsVXRpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyh0aGlzLmNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZXF1ZXN0OnN0YXJ0ZWQnLCAocmVxdWVzdERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICBub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAoIXBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBMYXp5UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoJ2xhenknICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnbG9hZGluZycpPy52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRPYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdmU6YXBwZWFyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIH1cbn1cblxuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aW9uIG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuICAgIH1cbiAgICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgZGVsZXRlIGV2ZW50QXJncy5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IExhenlQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUXVlcnlTdHJpbmdQbHVnaW4odGhpcy5xdWVyeU1hcHBpbmdWYWx1ZSksXG4gICAgICAgICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW4odGhpcy5jb21wb25lbnQpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZXZlbnRzVG9FbWl0OiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRGlzcGF0Y2g6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgcmVxdWVzdE1ldGhvZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdwb3N0JyB9LFxuICAgIHF1ZXJ5TWFwcGluZzogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IHt9IH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5ID0gKGNvbnRyb2xsZXIpID0+IG5ldyBCYWNrZW5kKGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlLCBjb250cm9sbGVyLmNzcmZWYWx1ZSk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ZlbHRlQ29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzdmVsdGVDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHN2ZWx0ZUNvbnRyb2xsZXJzW2AuLyR7bmFtZX0uc3ZlbHRlYF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdmVsdGUgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/PyB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW50cm8gPSB0aGlzLmludHJvVmFsdWUgPz8gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGludHJvOiB0aGlzLmludHJvLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QgPSB0aGlzLmFwcDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcpO1xuICAgIH1cbiAgICBfZGVzdHJveUlmRXhpc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQucm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbnRybzogdGhpcy5pbnRybyxcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ3N2ZWx0ZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGludHJvOiBCb29sZWFuLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICBsZXQgcG9uZCA7XHJcblxyXG4gICAgZXhwb3J0IGxldCBmaWxlO1xyXG5cclxuICAgIGxldCBmaWxlbmFtZTtcclxuXHJcbiAgICBsZXQgdGFiID0gW107XHJcblxyXG4gICAgZXhwb3J0IGxldCBuYW1lID0gXCJmaWxlcG9uZFwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGFzIGluaXRpYWxpc2VkXCIpXHJcbiAgICAgICAgLy8gZmlsZW5hbWUgPSBKU09OLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkRmlsZShlcnJvciAsIGZpbGVzKXtcclxuICAgIC8vICAgIGlmKGZpbGVzLmZpbGVuYW1lICE9IEpTT04ucGFyc2UoZmlsZSkpe1xyXG4gICAgLy8gICAgICAgICBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWVcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgSlNPTi5wYXJzZShmaWxlKS5tYXAoKHZhbCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZih0YWIuaW5kZXhPZih2YWwpID09IC0xKXtcclxuICAgIC8vICAgICAgICAgICAgIHRhYi5wdXNoKHZhbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgY29uc29sZS5sb2coZmlsZXMuZmlsZW5hbWUpXHJcbiAgICAgICAgdGFiLnB1c2goZmlsZXMuZmlsZW5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHJlbW92ZWRcIilcclxuXHJcbiAgICAgICAgdGFiID0gdGFiLmZpbHRlcihlbCA9PiBlbCAhPSBmaWxlcy5maWxlbmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiKVxyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImFwcFwiPlxyXG5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIG5hbWU9XCJmaWxlX3VwZGF0ZVwiIGlkPVwiXCIgYmluZDp2YWx1ZT17ZmlsZW5hbWV9IGNsYXNzPVwiaW5wdXRfY2hvb3NlX2ZpbGVcIj5cclxuICAgIDxGaWxlUG9uZCBiaW5kOnRoaXM9e3BvbmR9IHtuYW1lfVxyXG4gICAgc2VydmVyPVwiL2ZpbGVwb25kX2VkaXRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgIG1heEZpbGVzPXsxMH1cclxuICAgIG9ucmVtb3ZlZmlsZT17aGFuZGxlUmVtb3ZlRmlsZX1cclxuICAgIGxhYmVsSWRsZT1cIkdsaXNzZXogdm9zIGZpY2hpZXJzXCJcclxuICAgIGxhYmVsUHJvY2Vzc2luZz1cIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgZmlsZXM9e1xyXG4gICAgICAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsb2NhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsdWdpbnM9e1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBcclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XG4gICAgbGV0IGN1cnJlbnRUaXRsZTtcbiAgICBsZXQgYXJyYXlMaW5rcyA9IFtdO1xuICAgIGxldCBnb0xlZnQgPSBmYWxzZTtcbiAgICBleHBvcnQgbGV0IGNhdGVnb3J5O1xuXG4gICAgbGV0IHNwZWNpYWxMaXN0MiA9IFtcbiAgICAgICAgeyB0aXRsZTogXCJWaXRyaW5lcyBQb3J0Zm9saW9cIiwgbnVtOiBzZXRTcGVjaWFsSW5ub3ZhdGlvbnMxIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiVml0cmluZXMgTGFuZGluZyBQYWdlXCIsIG51bTogc2V0U3BlY2lhbElubm92YXRpb25zMiB9LFxuICAgICAgICB7IHRpdGxlOiBcIlZpdHJpbmVzIHNww6ljaWZpcXVlc1wiLCBudW06IHNldFNwZWNpYWxJbm5vdmF0aW9uczMgfSxcbiAgICBdO1xuXG4gICAgbGV0IGxpc3QgPSBbXTtcblxuICAgIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHsgdGl0bGU6IGVsZW1lbnQubmFtZSwgbnVtOiAoKSA9PiBzZXRDYXRlZ29yeShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaXRlbXMpIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2V0Q2F0ZWdvcnkobmFtZSwgaXRlbXMpIHtcbiAgICAgICAgZ29MZWZ0ID0gIWdvTGVmdDtcbiAgICAgICAgY3VycmVudFRpdGxlID0gbmFtZTtcbiAgICAgICAgYXJyYXlMaW5rcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGFycmF5TGlua3MucHVzaCh7IGtleTogXCIvMVwiLCB2YWx1ZTogZWxlbWVudC5uYW1lIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBsZXQgc3BlY2lhbExpc3RTdWJJdGVtcyA9IFtcbiAgICAgICAgeyBoZWFkZXJfdGl0bGU6IFwiQ2F0w6lnb3JpZXNcIiwgbGlzdDogbGlzdCB9LFxuICAgICAgICB7IGhlYWRlcl90aXRsZTogXCJWaXRyaW5lc1wiLCBsaXN0OiBzcGVjaWFsTGlzdDIgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gc2V0U3BlY2lhbElubm92YXRpb25zMSgpIHtcbiAgICAgICAgZ29MZWZ0ID0gIWdvTGVmdDtcbiAgICAgICAgY3VycmVudFRpdGxlID0gXCJUaXRyZSBJbm5vdmF0aW9uIDFcIjtcbiAgICAgICAgYXJyYXlMaW5rcyA9IFtdO1xuICAgICAgICBhcnJheUxpbmtzID0gW1xuICAgICAgICAgICAgeyBrZXk6IFwiLzdcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAxIFRpdHJlIDFcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiLzhcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAyIFRpdHJlIDFcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiLzlcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAzIFRpdHJlIDFcIiB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTcGVjaWFsSW5ub3ZhdGlvbnMyKCkge1xuICAgICAgICBnb0xlZnQgPSAhZ29MZWZ0O1xuICAgICAgICBjdXJyZW50VGl0bGUgPSBcIlRpdHJlIElubm92YXRpb24gMlwiO1xuICAgICAgICBhcnJheUxpbmtzID0gW107XG4gICAgICAgIGFycmF5TGlua3MgPSBbXG4gICAgICAgICAgICB7IGtleTogXCIvN1wiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDEgVGl0cmUgMlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCIvOFwiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDIgVGl0cmUgMlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCIvOVwiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDMgVGl0cmUgMlwiIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNwZWNpYWxJbm5vdmF0aW9uczMoKSB7XG4gICAgICAgIGdvTGVmdCA9ICFnb0xlZnQ7XG4gICAgICAgIGN1cnJlbnRUaXRsZSA9IFwiVGl0cmUgSW5ub3ZhdGlvbiAzXCI7XG4gICAgICAgIGFycmF5TGlua3MgPSBbXTtcbiAgICAgICAgYXJyYXlMaW5rcyA9IFtcbiAgICAgICAgICAgIHsga2V5OiBcIi83XCIsIHZhbHVlOiBcIklubm92YXRpb24gMSBUaXRyZSAzXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIi84XCIsIHZhbHVlOiBcIklubm92YXRpb24gMiBUaXRyZSAzXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIi85XCIsIHZhbHVlOiBcIklubm92YXRpb24gMyBUaXRyZSAzXCIgfSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVHb0xlZnQocGFyYW1zKSB7XG4gICAgICAgIGdvTGVmdCA9IHBhcmFtcztcbiAgICB9XG5cbiAgICBpbXBvcnQgU2lkZSBmcm9tIFwiLi9TaWRlLnN2ZWx0ZVwiO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJfcGFyZW50X2FsbF9zdWJfaXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2FsbF9zdWJfaXRlbXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9zdWJfaXRlbXMgY29udGFpbmVyX3N1Yl9pdGVtc19tYWluXCIgY2xhc3M6Z29MZWZ0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjY8OocyByYXBpZGVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjdWVpbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BIHByb3BvczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZXJ2aWNlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7I2VhY2ggc3BlY2lhbExpc3RTdWJJdGVtcyBhcyBzdWJJdGVtIChzdWJJdGVtLmhlYWRlcl90aXRsZSl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Ykl0ZW0uaGVhZGVyX3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggc3ViSXRlbS5saXN0IGFzIGl0ZW0gKGl0ZW0udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzcGVjaWFsX2xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb246Y2xpY2s9e2l0ZW0ubnVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2l6ZS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtOC4yNSA0LjUgNy41IDcuNS03LjUgNy41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNpZGVcbiAgICAgICAgICAgIGdvU2lkZT17Z29MZWZ0fVxuICAgICAgICAgICAgb246dXBkYXRlPXsoZXZlbnQpID0+IHVwZGF0ZUdvTGVmdChldmVudC5kZXRhaWwpfVxuICAgICAgICAgICAge2N1cnJlbnRUaXRsZX1cbiAgICAgICAgICAgIHthcnJheUxpbmtzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaXRlbV90aXRsZVwiPlRpdGxlIHNlYzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBzbG90PVwibGlzdF9saW5rXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk1laWxsZXVyZXMgdmVudGVzPC9saT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk5vdXZlYXV0w6lzPC9saT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk5vdXZlYXV0w6lzPC9saT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk5vdXZlYXV0w6lzPC9saT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1NpZGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG5cclxuICAgIGxldCBkaXNwbGF5ZWRUZXh0ID0gXCJcIjtcclxuICAgIGxldCB0ZXh0ID0gXCJCaWVudmVudWUgw6AgbCdlc3BhY2UgZGUgZ2VzdGlvbiBkZSB2b3RyZSB2aXRyaW5lXCI7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgYWpvdXRlciB1bmUgbGV0dHJlIMOgIGxhIGZvaXNcclxuICAgIGZ1bmN0aW9uIHJldmVhbE5leHRMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGlzcGxheWVkVGV4dCArPSB0ZXh0W2luZGV4XTtcclxuICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXZlYWxOZXh0TGV0dGVyLCAxMDApOyAvLyBEw6lsYWkgZW50cmUgY2hhcXVlIGxldHRyZSAoZW4gbWlsbGlzZWNvbmRlcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpY2xlbmNoZSBsJ2FmZmljaGFnZSBkZXMgbGV0dHJlcyB1bmUgcGFyIHVuZSBhdSBjaGFyZ2VtZW50IGR1IGNvbXBvc2FudFxyXG4gICAgb25Nb3VudCgoKSA9PiB7XHJcbiAgICAgICAgcmV2ZWFsTmV4dExldHRlcigpO1xyXG4gICAgfSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPGgxPntkaXNwbGF5ZWRUZXh0fTwvaDE+XHJcblxyXG4iLCI8c3R5bGUgZ2xvYmFsPlxyXG4gICAgLyogQGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQuY3NzJzsgKi9cclxuICAgIC8qIEBpbXBvcnQgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcuY3NzJzsgKi9cclxuXHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgRmlsZVBvbmQgLCB7cmVnaXN0ZXJQbHVnaW4gLCBzdXBwb3J0ZWR9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlLWZpbGVwb25kL3NyYy9pbmRleFwiO1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJ1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldydcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcmVzaXplJ1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlRWRpdCBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZWRpdCdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtdHJhbnNmb3JtJ1xyXG5cclxuICAgIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnc3ZlbHRlJ1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcbiAgIFxyXG5cclxuICAgIHJlZ2lzdGVyUGx1Z2luKEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24gLEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3LCBGaWxlUG9uZFBsdWdpbkltYWdlUmVzaXplICwgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgLCBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtKVxyXG5cclxuICAgICBsZXQgcG9uZDtcclxuXHJcbiAgICAgbGV0IGZpbGVuYW1lIDtcclxuXHJcbiAgICAgbGV0IHRhYiA9IFtdO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgbmFtZSA9IFwiZmlsZXBvbmRcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhhcyBpbml0aWFsaXNlZFwiKVxyXG4gICAgICAgIC8vIHBvbmQuYWRkRmlsZShmaWxlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkRmlsZShlcnJvciAsIGZpbGVzKXtcclxuICAgIC8vICAgIGlmKGZpbGVzLmZpbGVuYW1lICE9IEpTT04ucGFyc2UoZmlsZSkpe1xyXG4gICAgLy8gICAgICAgICBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWVcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgSlNPTi5wYXJzZShmaWxlKS5tYXAoKHZhbCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZih0YWIuaW5kZXhPZih2YWwpID09IC0xKXtcclxuICAgIC8vICAgICAgICAgICAgIHRhYi5wdXNoKHZhbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgY29uc29sZS5sb2coZmlsZXMuZmlsZW5hbWUpXHJcbiAgICAgICAgdGFiLnB1c2goZmlsZXMuZmlsZW5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHJlbW92ZWRcIilcclxuXHJcbiAgICAgICAgdGFiID0gdGFiLmZpbHRlcihlbCA9PiBlbCAhPSBmaWxlcy5maWxlbmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiKVxyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuICAgIH1cclxuICAgIFxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJhcHBcIj5cclxuICAgIDxpbnB1dCBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaWxlX3VwZGF0ZVwiIGlkPVwiXCIgYmluZDp2YWx1ZT17ZmlsZW5hbWV9IGNsYXNzPVwiaW5wdXRfY2hvb3NlX2ZpbGVcIj5cclxuXHJcbiAgICA8RmlsZVBvbmQgYmluZDp0aGlzPXtwb25kfSB7bmFtZX1cclxuICAgIHNlcnZlcj1cIi9maWxlcG9uZFwiXHJcbiAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgb25pbml0PXtoYW5kbGVJbml0fVxyXG4gICAgb25hZGRmaWxlPXtoYW5kbGVBZGRGaWxlfVxyXG4gICAgIG1heEZpbGVzPXsxMH1cclxuICAgIG9ucmVtb3ZlZmlsZT17aGFuZGxlUmVtb3ZlRmlsZX1cclxuICAgIGxhYmVsSWRsZT1cIkdsaXNzZXogdm9zIGZpY2hpZXJzXCJcclxuICAgIGxhYmVsUHJvY2Vzc2luZz1cIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgXHJcbiAgICBwbHVnaW5zPXtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgPlxyXG4gICAgPC9GaWxlUG9uZD5cclxuXHJcblxyXG48L2Rpdj5cclxuIiwiPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gXCJzdmVsdGVcIjtcclxuXHJcbiAgICBleHBvcnQgbGV0IGdvU2lkZSA9IGZhbHNlO1xyXG4gICAgZXhwb3J0IGxldCBjdXJyZW50VGl0bGU7XHJcbiAgICBleHBvcnQgbGV0IGFycmF5TGlua3M7XHJcblxyXG4gICAgbGV0IGhpZGVTaWRlID0gZmFsc2U7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVTaWRlQmFyKCkge1xyXG4gICAgICAgIGhpZGVTaWRlID0gIWhpZGVTaWRlO1xyXG4gICAgICAgIGdvU2lkZSA9IGZhbHNlO1xyXG4gICAgICAgIGRpc3BhdGNoKFwidXBkYXRlXCIsIGZhbHNlKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2XHJcbiAgICBjbGFzcz1cImNvbnRhaW5lcl9zdWJfaXRlbXMgY29udGFpbmVyX3N1Yl9pdGVtc19zZWNvbmRhcnlcIlxyXG4gICAgY2xhc3M6Z29TaWRlXHJcbiAgICBjbGFzczpoaWRlU2lkZVxyXG4+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3ViX2l0ZW1zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIml0ZW1fdGl0bGVcIiBvbjpjbGljaz17aGlkZVNpZGVCYXJ9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdib3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNpemUtNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNSAxOS41IDMgMTJtMCAwIDcuNS03LjVNMyAxMmgxOFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4+TWVudSBwcmluY2lwYWw8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9pdGVtc1wiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7I2lmIGFycmF5TGlua3N9XHJcbiAgICAgICAgICAgICAgICAgICAgeyNlYWNoIGFycmF5TGlua3MgYXMgaXRlbSAoaXRlbS5rZXkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmtleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW0udmFsdWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cclxuICAgICAgICAgICAgICAgIHsvaWZ9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiU3dpcGVyIiwiQXV0b3BsYXkiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiaW5pdGlhbGl6ZSIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbl9leGl0IiwibGVmdF9uYXZpZ2F0aW9uX2JhciIsIm92ZXJsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50Iiwic2VsZWN0IiwiYXJlYXMiLCJzd2lwZXJfZXhwbG9yYXRpb24iLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJsb29wIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsImJhcl9hZG1pbiIsImJhcl9hZG1pbl9tb2JpbGUiLCJvdmVybGF5X2FwcF9tb2JpbGUiLCJsZWZ0X25hdl9iYXJfYWRtaW4iLCJ0b3BfbmF2X2Jhcl9hZG1pbiIsImJvZHkiLCJ0b2dnbGUiLCJzcGlubmVyIiwicHJvZHVjdF9jYXRlZ29yeSIsImZhY3RvcnlfY2F0ZWdvcnkiLCJkZWZhdWx0IiwicmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyIsIkFscGluZSIsIndpbmRvdyIsInN0YXJ0IiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJhcmdzIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNvbmNhdCIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwidHJpbUFsbCIsInNwbGl0Iiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwibWFwIiwiam9pbiIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiV2Vha01hcCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwiTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJzZXQiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXQiLCJjbGVhckludGVydmFsIiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiY29tcG9uZW50cyIsImNvbXBvbmVudE5hbWUiLCJjb250YWlucyIsImZpbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiVmFsdWVTdG9yZSIsInByb3BzIiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJub3JtYWxpemVkTmFtZSIsImhhcyIsImdldE9yaWdpbmFsUHJvcHMiLCJnZXREaXJ0eVByb3BzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5Iiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJjaGFuZ2VkIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiY3VycmVudFZhbHVlIiwiSWRpb21vcnBoIiwiRU1QVFlfU0VUIiwiU2V0IiwiZGVmYXVsdHMiLCJtb3JwaFN0eWxlIiwiY2FsbGJhY2tzIiwiYmVmb3JlTm9kZUFkZGVkIiwibm9PcCIsImFmdGVyTm9kZUFkZGVkIiwiYmVmb3JlTm9kZU1vcnBoZWQiLCJhZnRlck5vZGVNb3JwaGVkIiwiYmVmb3JlTm9kZVJlbW92ZWQiLCJhZnRlck5vZGVSZW1vdmVkIiwiYmVmb3JlQXR0cmlidXRlVXBkYXRlZCIsImhlYWQiLCJzdHlsZSIsInNob3VsZFByZXNlcnZlIiwiZWx0Iiwic2hvdWxkUmVBcHBlbmQiLCJzaG91bGRSZW1vdmUiLCJhZnRlckhlYWRNb3JwaGVkIiwibW9ycGgiLCJvbGROb2RlIiwibmV3Q29udGVudCIsImNvbmZpZyIsIkRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyc2VDb250ZW50Iiwibm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVDb250ZW50IiwiY3R4IiwiY3JlYXRlTW9ycGhDb250ZXh0IiwibW9ycGhOb3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZWROZXdDb250ZW50IiwiYmxvY2siLCJvbGRIZWFkIiwibmV3SGVhZCIsInByb21pc2VzIiwiaGFuZGxlSGVhZEVsZW1lbnQiLCJhbGwiLCJhc3NpZ24iLCJpZ25vcmUiLCJtb3JwaENoaWxkcmVuIiwiYmVzdE1hdGNoIiwiZmluZEJlc3ROb2RlTWF0Y2giLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsIm1vcnBoZWROb2RlIiwibW9ycGhPbGROb2RlVG8iLCJpbnNlcnRTaWJsaW5ncyIsImlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50IiwicG9zc2libGVBY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlVmFsdWUiLCJhY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlIiwiaXNTb2Z0TWF0Y2giLCJyZXBsYWNlQ2hpbGQiLCJIVE1MSGVhZEVsZW1lbnQiLCJzeW5jTm9kZUZyb20iLCJuZXdQYXJlbnQiLCJvbGRQYXJlbnQiLCJuZXh0TmV3Q2hpbGQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0aW9uUG9pbnQiLCJuZXdDaGlsZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24iLCJpc0lkU2V0TWF0Y2giLCJpZFNldE1hdGNoIiwiZmluZElkU2V0TWF0Y2giLCJyZW1vdmVOb2Rlc0JldHdlZW4iLCJzb2Z0TWF0Y2giLCJmaW5kU29mdE1hdGNoIiwiaW5zZXJ0QmVmb3JlIiwidGVtcE5vZGUiLCJyZW1vdmVOb2RlIiwiaWdub3JlQXR0cmlidXRlIiwiYXR0ciIsInRvIiwidXBkYXRlVHlwZSIsIm5vZGVUeXBlIiwiZnJvbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVzIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXJyIiwidG9BdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImlnbm9yZVVwZGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJuZXdIZWFkVGFnIiwiY3VycmVudEhlYWQiLCJhZGRlZCIsInJlbW92ZWQiLCJwcmVzZXJ2ZWQiLCJub2Rlc1RvQXBwZW5kIiwiaGVhZE1lcmdlU3R5bGUiLCJzcmNUb05ld0hlYWROb2RlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJuZXdIZWFkQ2hpbGQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiY3VycmVudEhlYWRFbHQiLCJpbk5ld0NvbnRlbnQiLCJpc1JlQXBwZW5kZWQiLCJpc1ByZXNlcnZlZCIsIl9sb29wIiwibmV3Tm9kZSIsIl9ub2Rlc1RvQXBwZW5kIiwiX2kyIiwibmV3RWx0IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJocmVmIiwic3JjIiwicHJvbWlzZSIsIl9yZXNvbHZlIiwiX2kzIiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsInRhcmdldCIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJpZCIsImdldElkSW50ZXJzZWN0aW9uQ291bnQiLCJzdGFydEluY2x1c2l2ZSIsImVuZEV4Y2x1c2l2ZSIsIm5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCIsInBvdGVudGlhbE1hdGNoIiwib3RoZXJNYXRjaENvdW50IiwicG90ZW50aWFsU29mdE1hdGNoIiwic2libGluZ1NvZnRNYXRjaENvdW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiY29udGVudFdpdGhTdmdzUmVtb3ZlZCIsIm1hdGNoIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsInJlc3BvbnNlRG9jIiwiZHVtbXlQYXJlbnQiLCJOb2RlIiwiYXBwZW5kIiwiX2k0IiwiX2FyciIsInN0YWNrIiwibm9kZSIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJjdXJyZW50Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194Iiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwic2V0SXRlbSIsIml0ZW1OYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJyZW1vdmVJdGVtIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJfcmVmMyIsIl9yZWY0IiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXM1IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJvbGRWYWx1ZSIsInByZXZpb3VzVmFsdWVzIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIkNvbXBvbmVudCIsImxpc3RlbmVycyIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiX3RoaXM2IiwiZmluZ2VycHJpbnQiLCJkZWZhdWx0RGVib3VuY2UiLCJiYWNrZW5kUmVxdWVzdCIsInBlbmRpbmdBY3Rpb25zIiwicGVuZGluZ0ZpbGVzIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJsaXN0ZW5lciIsIl90aGlzNiRsaXN0ZW5lcnMkZ2V0IiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwiZmlsZXMiLCJpbnB1dCIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImVtaXQiLCJvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQiLCJwZXJmb3JtRW1pdCIsImVtaXRVcCIsImVtaXRTZWxmIiwiZG9FbWl0IiwibWF0Y2hpbmdOYW1lIiwiX3RoaXM3IiwiYWN0aW9ucyIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOCIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwicmVxdWVzdENvbmZpZyIsInVwZGF0ZWQiLCJtYWtlUmVxdWVzdCIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTYiLCJfT2JqZWN0JHZhbHVlcyIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3giLCJfdGhpczkiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsImxvY2F0aW9uIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJuZXdQcm9wcyIsImdldENvbXBvbmVudFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsIl9yZWY2IiwiX3JlZjciLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXMxMCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsIl90aGlzMTEiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTIiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJidWlsZFJlcXVlc3QiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJfaTciLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIkJhY2tlbmQiLCJyZXF1ZXN0QnVpbGRlciIsIl90aGlzJHJlcXVlc3RCdWlsZGVyJCIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczEzIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTQiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjgiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxNSIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJfdmFsaWRNb2RpZmllcnMkZ2V0IiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIm1hdGNoaW5nRWxlbWVudHMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QzIiwiX2VsZW1lbnQkY2xhc3NMaXN0NCIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTYiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTciLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxOCIsIl9yZWY5Iiwic3RvcEFsbFBvbGxpbmciLCJjbGVhclBvbGxpbmciLCJfdGhpczE5IiwidGltZXIiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMyMCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiaXNWYWx1ZUVtcHR5IiwiX2k4IiwiX09iamVjdCRrZXlzIiwidG9RdWVyeVN0cmluZyIsImJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzIiwiYmFzZUtleSIsIl9yZWYxMCIsIl9yZWYxMSIsImlLZXkiLCJpVmFsdWUiLCJfcmVmMTIiLCJfcmVmMTMiLCJmcm9tUXVlcnlTdHJpbmciLCJzZWFyY2giLCJpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSIsIl9rZXkkc3BsaXQiLCJfa2V5JHNwbGl0MiIsIl90b0FycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJyZXN0IiwiX3JlZjE0IiwiX3JlZjE1IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG90Tm90YXRlZEtleSIsIlVybFV0aWxzIiwiX1VSTCIsInNldERhdGEiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiVVJMIiwiSGlzdG9yeVN0cmF0ZWd5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlF1ZXJ5U3RyaW5nUGx1Z2luIiwibWFwcGluZyIsIl90aGlzMjMiLCJ1cmxVdGlscyIsImN1cnJlbnRVcmwiLCJfcmVmMTYiLCJfcmVmMTciLCJDaGlsZENvbXBvbmVudFBsdWdpbiIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJtb2RlbERpcmVjdGl2ZXMiLCJfdGhpczI0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsIkxhenlQbHVnaW4iLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMjUiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMjUkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiX3RoaXMyNiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI3IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyOCIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjE4IiwibmFtZU1hdGNoIiwiX3RoaXMyOSIsIl9yZWYxOSIsIl90aGlzMzAiLCJfcmVmMjAiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMxIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsInF1ZXJ5TWFwcGluZ1ZhbHVlIiwiX3RoaXMzMiIsIl9yZWYyMSIsIl90aGlzMzMiLCJfcmVmMjIiLCJldmVudE5hbWUiLCJfZWxlbWVudCRmaWxlcyIsImZpbmFsVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczM0IiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImNzcmYiLCJldmVudHNUb0Rpc3BhdGNoIiwicmVxdWVzdE1ldGhvZCIsInF1ZXJ5TWFwcGluZyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiY3NyZlZhbHVlIiwic3ZlbHRlQ29udHJvbGxlcnMiLCJpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzIiwicmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCIsImRlZmF1bHRfMSIsIl90aGlzJHByb3BzVmFsdWUiLCJfdGhpcyRpbnRyb1ZhbHVlIiwiaW50cm8iLCJpbnRyb1ZhbHVlIiwiY29tcG9uZW50VmFsdWUiLCJfZGVzdHJveUlmRXhpc3RzIiwicm9vdCIsIiRkZXN0cm95IiwiQm9vbGVhbiIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9