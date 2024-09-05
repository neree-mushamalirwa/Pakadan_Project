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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkLFFBQVEsR0FBRyw2REFBcUI7O1VBRTdCLFdBQVc7a0JBQ2hCLFFBQVEsSUFBSSxRQUFRO2tCQUNwQixNQUFNLEdBQUcsS0FBSztFQUNkLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvIHN5bmMgXFwuc3ZlbHRlJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmUubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy9FZGl0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vSGVsbG8uc3ZlbHRlIiwid2VicGFjazovLy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vTmV3LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vU2lkZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0VkaXQuc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL0VkaXQuc3ZlbHRlXCIsXG5cdFwiLi9IZWxsby5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvSGVsbG8uc3ZlbHRlXCIsXG5cdFwiLi9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiLFxuXHRcIi4vTmV3LnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9OZXcuc3ZlbHRlXCIsXG5cdFwiLi9TaWRlLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9TaWRlLnN2ZWx0ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmVsdGUkXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMiBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXN2ZWx0ZS0tc3ZlbHRlJzogY29udHJvbGxlcl8xLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzIsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBBdXRvcGxheSwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbi8vIGltcG9ydCBTd2lwZXIgYW5kIG1vZHVsZXMgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2J1bmRsZSc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29ubmVjdCgpIHtcblxuICAgIC8vIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfc2lkZV9iYXJcIik7XG4gICAgdmFyIGJ1dHRvbl9leGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0X3NpZGVfYmFyXCIpO1xuICAgIHZhciBsZWZ0X25hdmlnYXRpb25fYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0X25hdmlnYXRpb25fYmFyXCIpO1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIFxuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuICAgIGlmIChidXR0b25fZXhpdCkge1xuICAgICAgYnV0dG9uX2V4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZpZ2F0aW9uX2Jhci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSlcblxuICAgIH1cbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXRzKSB7XG4gICAgICBpbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cbiAgICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICBzZWxlY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cbiAgICB2YXIgYXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XG4gICAgaWYgKGFyZWFzKSB7XG4gICAgICBhcmVhcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgY29uc3Qgc3dpcGVyX2V4cGxvcmF0aW9uID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcbiAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheV0sXG5cbiAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICAgbG9vcDogdHJ1ZSxcbiAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICBcbiAgLy8gYXV0b3BsYXk6IHtcbiAgLy8gIGRlbGF5OiAyMDAwLCAvLyBEw6lmaWxlbWVudCBhdXRvbWF0aXF1ZSB0b3V0ZXMgbGVzIDEuNSBzZWNvbmRlc1xuICAvLyAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsIC8vIENvbnRpbnVlciBsJ2F1dG9wbGF5IG3Dqm1lIHNpIGwndXRpbGlzYXRldXIgaW50ZXJhZ2l0XG4gIC8vIH0sXG4gICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICBicmVha3BvaW50czoge1xuICAgICBcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjAwcHhcbiAgICAgMjAwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjAwcHhcbiAgICAgNjAwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gODUwcHhcbiAgICAgODUwOiB7XG4gICAgICAgc2xpZGVzUGVyVmlldzogNC41LFxuICAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICAgfSxcbiAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAwMHB4XG4gICAgIDEwMDA6IHtcbiAgICAgICBzbGlkZXNQZXJWaWV3OiA1LjUsXG4gICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICB9LFxuICB9XG4gICB9KTtcblxuICAgIH0pXG5cblxuICAgIHZhciBiYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhcl9hZG1pblwiKTtcbiAgICB2YXIgYmFyX2FkbWluX21vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFyX2FkbWluX21vYmlsZVwiKTtcbiAgICB2YXIgb3ZlcmxheV9hcHBfbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2FwcF9tb2JpbGVcIik7XG5cblxuICAgIHZhciBsZWZ0X25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRfbmF2X2Jhcl9hZG1pblwiKTtcbiAgICB2YXIgdG9wX25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcF9uYXZfYmFyX2FkbWluXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBpZiAoYmFyX2FkbWluKSB7XG4gICAgICBiYXJfYWRtaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCAoKT0+e1xuICAgICAgICBsZWZ0X25hdl9iYXJfYWRtaW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAgICAgdG9wX25hdl9iYXJfYWRtaW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJhZGRfdHJhbnNpdGlvblwiKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoYmFyX2FkbWluX21vYmlsZSkge1xuICAgICAgYmFyX2FkbWluX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpPT57XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvdmVybGF5X2FwcF9tb2JpbGUpIHtcbiAgICAgIG92ZXJsYXlfYXBwX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpPT57XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIHZhciBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyXCIpO1xuXG5cbiAgICB2YXIgcHJvZHVjdF9jYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdF9jYXRlZ29yeSBidXR0b25cIik7XG5cblxuICAgIGlmIChwcm9kdWN0X2NhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpID0+IHtcbiAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcnkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIFxuXG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXN2ZWx0ZSc7XG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCBBbHBpbmUgZnJvbSAnYWxwaW5lanMnXG4gXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lXG4gXG5BbHBpbmUuc3RhcnQoKVxuXG5cbnJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3N2ZWx0ZS9jb250cm9sbGVycycsIHRydWUsIC9cXC5zdmVsdGUkLykpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FmdGVyX2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi50cmltQWxsKHBhcnQpLnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gdHJpbUFsbChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCAnICcpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZSgnXScsICcnKSlcbiAgICAgICAgLmpvaW4oJy4nKSk7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuXG5sZXQgY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoY29tcG9uZW50LmVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG59O1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG1heENvdW50ID0gMTA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgfVxuICAgIH0sIDUpO1xufSk7XG5jb25zdCBmaW5kQ29tcG9uZW50cyA9IChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjb21wb25lbnQuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgZmluZFBhcmVudCA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbE5hbWVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KG1vZGVsVmFsdWUpID09PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5tb2RlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgICBjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG4gICAgaWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZGF0YU1vZGVsRGlyZWN0aXZlc1swXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50ICYmICdtb2RlbCcgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsIHx8ICcqJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghdGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGZpbmRDaGlsZHJlbihjb21wb25lbnQpLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gIWZvdW5kQ2hpbGRDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZmluYWxWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmaW5hbFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xuY29uc3QgaW5wdXRWYWx1ZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xuXG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudExldmVsRGF0YVtmaW5hbEtleV07XG59XG5jb25zdCBwYXJzZURlZXBEYXRhID0gKGRhdGEsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuICAgIGNvbnN0IHBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgICAgIGZpbmFsRGF0YSxcbiAgICAgICAgZmluYWxLZXksXG4gICAgICAgIHBhcnRzLFxuICAgIH07XG59O1xuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgfTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHsgLi4udGhpcy5wZW5kaW5nUHJvcHMsIC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbi8vIGJhc2UgSUlGRSB0byBkZWZpbmUgaWRpb21vcnBoXG52YXIgSWRpb21vcnBoID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEFORCBOT1cgSVQgQkVHSU5TLi4uXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgbGV0IEVNUFRZX1NFVCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzLCB1cGRhdGFibGUgYnkgdXNlcnMgbm93XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG4gICAgICAgICAgICBjYWxsYmFja3MgOiB7XG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkOiBub09wLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnbWVyZ2UnLFxuICAgICAgICAgICAgICAgIHNob3VsZFByZXNlcnZlOiBmdW5jdGlvbiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVBcHBlbmQ6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVtb3ZlOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVySGVhZE1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBDb3JlIE1vcnBoaW5nIEFsZ29yaXRobSAtIG1vcnBoLCBtb3JwaE5vcm1hbGl6ZWRDb250ZW50LCBtb3JwaE9sZE5vZGVUbywgbW9ycGhDaGlsZHJlblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cbiAgICAgICAgICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvbGROb2RlID0gb2xkTm9kZS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50ID0gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY3R4ID0gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZE5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5oZWFkLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSBvbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkSGVhZCAmJiBuZXdIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWQsIG9sZEhlYWQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gaGVhZCBwcm9taXNlcyByZXNvbHZlLCBjYWxsIG1vcnBoIGFnYWluLCBpZ25vcmluZyB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgT2JqZWN0LmFzc2lnbihjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwsIHNvIHdlIGFyZSBvbmx5IHVwZGF0aW5nIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwib3V0ZXJIVE1MXCIgfHwgY3R4Lm1vcnBoU3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmaW5kIHRoZSBiZXN0IGVsZW1lbnQgbWF0Y2ggaW4gdGhlIG5ldyBjb250ZW50LCBtb3JwaCB0aGF0LCBhbmQgbWVyZ2UgaXRzIHNpYmxpbmdzXG4gICAgICAgICAgICAgICAgLy8gaW50byBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBiZXN0TWF0Y2ggPSBmaW5kQmVzdE5vZGVNYXRjaChub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0YXNoIHRoZSBzaWJsaW5ncyB0aGF0IHdpbGwgbmVlZCB0byBiZSBpbnNlcnRlZCBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSBiZXN0TWF0Y2g/LnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgLy8gbW9ycGggaXRcbiAgICAgICAgICAgICAgICBsZXQgbW9ycGhlZE5vZGUgPSBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBiZXN0TWF0Y2gsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdhcyBhIGJlc3QgbWF0Y2gsIG1lcmdlIHRoZSBzaWJsaW5ncyBpbiB0b28gYW5kIHJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hvbGUgYnVuY2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugbm90aGluZyB3YXMgYWRkZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwiRG8gbm90IHVuZGVyc3RhbmQgaG93IHRvIG1vcnBoIHN0eWxlIFwiICsgY3R4Lm1vcnBoU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gcG9zc2libGVBY3RpdmVFbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSBjdHhcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChwb3NzaWJsZUFjdGl2ZUVsZW1lbnQsIGN0eCkge1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG9sZE5vZGUgcm9vdCBub2RlIHRvIG1lcmdlIGNvbnRlbnQgaW50b1xuICAgICAgICAgKiBAcGFyYW0gbmV3Q29udGVudCBuZXcgY29udGVudCB0byBtZXJnZVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGVuZGVkIHVwIGluIHRoZSBET01cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgOyBlbHNlIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgb2xkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NvZnRNYXRjaChvbGROb2RlLCBuZXdDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSA7IGVsc2UgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuc3R5bGUgIT09IFwibW9ycGhcIikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVIZWFkRWxlbWVudChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNOb2RlRnJvbShuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KG9sZE5vZGUsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB0aGUgY29yZSBhbGdvcml0aG0gZm9yIG1hdGNoaW5nIHVwIGNoaWxkcmVuLiAgVGhlIGlkZWEgaXMgdG8gdXNlIGlkIHNldHMgdG8gdHJ5IHRvIG1hdGNoIHVwXG4gICAgICAgICAqIG5vZGVzIGFzIGZhaXRoZnVsbHkgYXMgcG9zc2libGUuICBXZSBncmVlZGlseSBtYXRjaCwgd2hpY2ggYWxsb3dzIHVzIHRvIGtlZXAgdGhlIGFsZ29yaXRobSBmYXN0LCBidXRcbiAgICAgICAgICogYnkgdXNpbmcgaWQgc2V0cywgd2UgYXJlIGFibGUgdG8gYmV0dGVyIG1hdGNoIHVwIHdpdGggY29udGVudCBkZWVwZXIgaW4gdGhlIERPTS5cbiAgICAgICAgICpcbiAgICAgICAgICogQmFzaWMgYWxnb3JpdGhtIGlzLCBmb3IgZWFjaCBub2RlIGluIHRoZSBuZXcgY29udGVudDpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgb2xkIHBhcmVudCwgYXBwZW5kIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiAtIGlmIHRoZSBuZXcgY29udGVudCBoYXMgYW4gaWQgc2V0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50LCBtb3JwaFxuICAgICAgICAgKiAtIHNlYXJjaCBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAqIC0gaWYgaWQgc2V0IG1hdGNoIGZvdW5kLCBtb3JwaFxuICAgICAgICAgKiAtIG90aGVyd2lzZSBzZWFyY2ggZm9yIGEgXCJzb2Z0XCIgbWF0Y2hcbiAgICAgICAgICogLSBpZiBhIHNvZnQgbWF0Y2ggaXMgZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlLCBwcmVwZW5kIHRoZSBuZXcgbm9kZSBiZWZvcmUgdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB0d28gc2VhcmNoIGFsZ29yaXRobXMgdGVybWluYXRlIGlmIGNvbXBldGluZyBub2RlIG1hdGNoZXMgYXBwZWFyIHRvIG91dHdlaWdoIHdoYXQgY2FuIGJlIGFjaGlldmVkXG4gICAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgbm9kZS4gIFNlZSBmaW5kSWRTZXRNYXRjaCgpIGFuZCBmaW5kU29mdE1hdGNoKCkgZm9yIGRldGFpbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3UGFyZW50IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50IH0gb2xkUGFyZW50IHRoZSBvbGQgY29udGVudCB0aGF0IHdlIGFyZSBtZXJnaW5nIHRoZSBuZXcgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgbmV4dE5ld0NoaWxkID0gbmV3UGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZDtcblxuICAgICAgICAgICAgLy8gcnVuIHRocm91Z2ggYWxsIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKG5leHROZXdDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgbmV4dE5ld0NoaWxkID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgZXhpdGluZyBwYXJlbnQncyBjaGlsZHJlbiwganVzdCBhcHBlbmRcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0aW9uUG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgbm9kZSBoYXMgYW4gaWQgc2V0IG1hdGNoIHRoZW4gbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugc2VhcmNoIGZvcndhcmQgaW4gdGhlIGV4aXN0aW5nIG9sZCBjaGlsZHJlbiBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGlkU2V0TWF0Y2ggPSBmaW5kSWRTZXRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBwb3RlbnRpYWwgbWF0Y2gsIHJlbW92ZSB0aGUgbm9kZXMgdW50aWwgdGhhdCBwb2ludCBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaWRTZXRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgaWRTZXRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oaWRTZXRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBubyBpZCBzZXQgbWF0Y2ggZm91bmQsIHNvIHNjYW4gZm9yd2FyZCBmb3IgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgbGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZvdW5kIGEgc29mdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgbm9kZSwgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoc29mdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBzb2Z0TWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKHNvZnRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhYmFuZG9uIGFsbCBob3BlIG9mIG1vcnBoaW5nLCBqdXN0IGluc2VydCB0aGUgbmV3IGNoaWxkIGJlZm9yZSB0aGUgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG1vdmUgb25cbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYW55IHJlbWFpbmluZyBvbGQgbm9kZXMgdGhhdCBkaWRuJ3QgbWF0Y2ggdXAgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKGluc2VydGlvblBvaW50ICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEF0dHJpYnV0ZSBTeW5jaW5nIENvZGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gYXR0ciB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIHRvIGJlIG11dGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHRvIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHVwZGF0ZVR5cGUgeyhcInVwZGF0ZVwifFwicmVtb3ZlXCIpfVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgc2hvdWxkIGJlIGlnbm9yZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcbiAgICAgICAgICAgIGlmKGF0dHIgPT09ICd2YWx1ZScgJiYgY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHRvID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdHguY2FsbGJhY2tzLmJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQoYXR0ciwgdG8sIHVwZGF0ZVR5cGUpID09PSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzeW5jcyBhIGdpdmVuIG5vZGUgd2l0aCBhbm90aGVyIG5vZGUsIGNvcHlpbmcgb3ZlciBhbGwgYXR0cmlidXRlcyBhbmRcbiAgICAgICAgICogaW5uZXIgZWxlbWVudCBzdGF0ZSBmcm9tIHRoZSAnZnJvbScgbm9kZSB0byB0aGUgJ3RvJyBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZnJvbSB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdG8gdGhlIGVsZW1lbnQgdG8gY29weSBhdHRyaWJ1dGVzICYgc3RhdGUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY05vZGVGcm9tKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gZnJvbS5ub2RlVHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgaXMgYW4gZWxlbWVudCB0eXBlLCBzeW5jIHRoZSBhdHRyaWJ1dGVzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBuZXcgbm9kZSBpbnRvIHRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEgLyogZWxlbWVudCB0eXBlICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZXMgPSBmcm9tLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGVzID0gdG8uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIGJhY2t3YXJkcyB0byBhdm9pZCBza2lwcGluZyBvdmVyIGl0ZW1zIHdoZW4gYSBkZWxldGUgb2NjdXJzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRvQXR0cmlidXRlcy5sZW5ndGggLSAxOyAwIDw9IGk7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IHRvQXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJvbS5oYXNBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3luYyB0ZXh0IG5vZGVzXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gOCAvKiBjb21tZW50ICovIHx8IHR5cGUgPT09IDMgLyogdGV4dCAqLykge1xuICAgICAgICAgICAgICAgIGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLm5vZGVWYWx1ZSA9IGZyb20ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkge1xuICAgICAgICAgICAgICAgIC8vIHN5bmMgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGZyb20ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUge1N0cmluZ30gdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBhdHRyaWJ1dGVOYW1lLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIGxldCBpZ25vcmVVcGRhdGUgPSBpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmICghaWdub3JlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW2F0dHJpYnV0ZU5hbWVdID0gZnJvbVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBmcm9tW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5COiBtYW55IGJvdGhhbnMgZGllZCB0byBicmluZyB1cyBpbmZvcm1hdGlvbjpcbiAgICAgICAgICpcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRyaWNrLXN0ZWVsZS1pZGVtL21vcnBoZG9tL2Jsb2IvbWFzdGVyL3NyYy9zcGVjaWFsRWxIYW5kbGVycy5qc1xuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL2Nob29qcy9uYW5vbW9ycGgvYmxvYi9tYXN0ZXIvbGliL21vcnBoLmpzTDExM1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRvIHN5bmMgdGhlIGlucHV0IHZhbHVlIHRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRvIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGZyb20udHlwZSAhPT0gJ2ZpbGUnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gc3luYyBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgJ2NoZWNrZWQnLCBjdHgpO1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnZGlzYWJsZWQnLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnc2VsZWN0ZWQnLCBjdHgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBdHRyaWJ1dGUoJ3ZhbHVlJywgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvLmZpcnN0Q2hpbGQgJiYgdG8uZmlyc3RDaGlsZC5ub2RlVmFsdWUgIT09IGZyb21WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIHRoZSBIRUFEIHRhZyBjYW4gYmUgaGFuZGxlZCBzcGVjaWFsbHksIGVpdGhlciB3LyBhICdtZXJnZScgb3IgJ2FwcGVuZCcgc3R5bGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkVGFnLCBjdXJyZW50SGVhZCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBhZGRlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBwcmVzZXJ2ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cbiAgICAgICAgICAgIGxldCBoZWFkTWVyZ2VTdHlsZSA9IGN0eC5oZWFkLnN0eWxlO1xuXG4gICAgICAgICAgICAvLyBwdXQgYWxsIG5ldyBoZWFkIGVsZW1lbnRzIGludG8gYSBNYXAsIGJ5IHRoZWlyIG91dGVySFRNTFxuICAgICAgICAgICAgbGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdIZWFkQ2hpbGQgb2YgbmV3SGVhZFRhZy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLnNldChuZXdIZWFkQ2hpbGQub3V0ZXJIVE1MLCBuZXdIZWFkQ2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBlbHQgaW4gdGhlIGN1cnJlbnQgaGVhZFxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50SGVhZEVsdCBvZiBjdXJyZW50SGVhZC5jaGlsZHJlbikge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaGVhZCBlbGVtZW50IGlzIGluIHRoZSBtYXBcbiAgICAgICAgICAgICAgICBsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzUmVBcHBlbmRlZCA9IGN0eC5oZWFkLnNob3VsZFJlQXBwZW5kKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBsZXQgaXNQcmVzZXJ2ZWQgPSBjdHguaGVhZC5zaG91bGRQcmVzZXJ2ZShjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZUFwcGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgdmVyc2lvbiBhbmQgbGV0IHRoZSBuZXcgdmVyc2lvbiByZXBsYWNlIGl0IGFuZCByZS1leGVjdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGFuZCBzaG91bGQgbm90IGJlIHJlLWFwcGVuZGVkLCBzbyByZW1vdmUgaXQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5ldyBjb250ZW50IG1hcCwgcHJlc2VydmluZyBpdCBpbiB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkTWVyZ2VTdHlsZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBhbmQgdGhpcyBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gaWYgYW5kIG9ubHkgaWYgaXQgaXMgbWFya2VkIGZvciByZS1hcHBlbmQgZG8gd2UgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbWVyZ2UsIHdlIHJlbW92ZSB0aGlzIGNvbnRlbnQgc2luY2UgaXQgaXMgbm90IGluIHRoZSBuZXcgaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eC5oZWFkLnNob3VsZFJlbW92ZShjdXJyZW50SGVhZEVsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVzaCB0aGUgcmVtYWluaW5nIG5ldyBoZWFkIGVsZW1lbnRzIGluIHRoZSBNYXAgaW50byB0aGVcbiAgICAgICAgICAgIC8vIG5vZGVzIHRvIGFwcGVuZCB0byB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaCguLi5zcmNUb05ld0hlYWROb2Rlcy52YWx1ZXMoKSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdOb2RlIG9mIG5vZGVzVG9BcHBlbmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0VsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdFbHQuaHJlZiB8fCBuZXdFbHQuc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmFwcGVuZENoaWxkKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXdFbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCByZW1vdmVkIGVsZW1lbnRzLCBhZnRlciB3ZSBoYXZlIGFwcGVuZGVkIHRoZSBuZXcgZWxlbWVudHMgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgbmV0d29yayByZXF1ZXN0cyBmb3IgdGhpbmdzIGxpa2Ugc3R5bGUgc2hlZXRzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWRFbGVtZW50IG9mIHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChyZW1vdmVkRWxlbWVudCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLnJlbW92ZUNoaWxkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5oZWFkLmFmdGVySGVhZE1vcnBoZWQoY3VycmVudEhlYWQsIHthZGRlZDogYWRkZWQsIGtlcHQ6IHByZXNlcnZlZCwgcmVtb3ZlZDogcmVtb3ZlZH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbm9PcCgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgRGVlcCBtZXJnZXMgdGhlIGNvbmZpZyBvYmplY3QgYW5kIHRoZSBJZGlvbW9yb3BoLmRlZmF1bHRzIG9iamVjdCB0b1xuICAgICAgICAgIHByb2R1Y2UgYSBmaW5hbCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VEZWZhdWx0cyhjb25maWcpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbENvbmZpZyA9IHt9O1xuICAgICAgICAgICAgLy8gY29weSB0b3AgbGV2ZWwgc3R1ZmYgaW50byBmaW5hbCBjb25maWdcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgY2FsbGJhY2tzIGludG8gZmluYWwgY29uZmlnIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGNhbGxiYWNrcylcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGRlZmF1bHRzLmNhbGxiYWNrcyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgY29uZmlnLmNhbGxiYWNrcyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgaGVhZCBjb25maWcgaW50byBmaW5hbCBjb25maWcgIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGhlYWQpXG4gICAgICAgICAgICBmaW5hbENvbmZpZy5oZWFkID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGRlZmF1bHRzLmhlYWQpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBjb25maWcuaGVhZCk7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBtZXJnZURlZmF1bHRzKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhcmdldDogb2xkTm9kZSxcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50OiBuZXdDb250ZW50LFxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZTogY29uZmlnLmlnbm9yZUFjdGl2ZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVBY3RpdmVWYWx1ZTogY29uZmlnLmlnbm9yZUFjdGl2ZVZhbHVlLFxuICAgICAgICAgICAgICAgIGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcbiAgICAgICAgICAgICAgICBkZWFkSWRzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiBjb25maWcuY2FsbGJhY2tzLFxuICAgICAgICAgICAgICAgIGhlYWQ6IGNvbmZpZy5oZWFkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0lkU2V0TWF0Y2gobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZTEuaWQgIT09IFwiXCIgJiYgbm9kZTEuaWQgPT09IG5vZGUyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSA+IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSB7XG4gICAgICAgICAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2Rlc0JldHdlZW4oc3RhcnRJbmNsdXNpdmUsIGVuZEV4Y2x1c2l2ZSwgY3R4KSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IHN0YXJ0SW5jbHVzaXZlO1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5jbHVzaXZlID0gc3RhcnRJbmNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgZW5kRXhjbHVzaXZlKTtcbiAgICAgICAgICAgIHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgaWQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBmb3IgdGhlIG5ldyBjaGlsZCBPUlxuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIHBvdGVudGlhbCBpZCBtYXRjaGVzIHdlIGFyZSBkaXNjYXJkaW5nIGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgICAgLy8gcG90ZW50aWFsIGlkIG1hdGNoZXMgZm9yIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kSWRTZXRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cbiAgICAgICAgICAgIC8vIG1heCBpZCBtYXRjaGVzIHdlIGFyZSB3aWxsaW5nIHRvIGRpc2NhcmQgaW4gb3VyIHNlYXJjaFxuICAgICAgICAgICAgbGV0IG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBuZXdDaGlsZCwgb2xkUGFyZW50KTtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gb25seSBzZWFyY2ggZm9yd2FyZCBpZiB0aGVyZSBpcyBhIHBvc3NpYmlsaXR5IG9mIGFuIGlkIG1hdGNoXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwb3RlbnRpYWxNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2gsIHNjYW4gZm9yd2FyZFxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIHBvdGVudGlhbCBpZCBtYXRjaCBjb3VudCB3ZSBhcmUgZGlzY2FyZGluZyAodGhlXG4gICAgICAgICAgICAgICAgLy8gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoaXMgdG8gbWFrZSBpdCBsaWtlbHlcbiAgICAgICAgICAgICAgICAvLyB3b3J0aCBpdClcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsTWF0Y2ggIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYW4gaWQgbWF0Y2gsIHJldHVybiB0aGUgY3VycmVudCBwb3RlbnRpYWwgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsTWF0Y2gsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVyIHRoZSBvdGhlciBwb3RlbnRpYWwgbWF0Y2hlcyBvZiB0aGlzIG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIG1vcmUgcG90ZW50aWFsIGlkIG1hdGNoZXMgaW4gX290aGVyXyBjb250ZW50LCB3ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGhhdmUgYSBnb29kIGNhbmRpZGF0ZSBmb3IgYW4gaWQgbWF0Y2gsIHNvIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkdmFuY2VkIHRvIHRoZSBuZXh0IG9sZCBjb250ZW50IGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE1hdGNoID0gcG90ZW50aWFsTWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBTY2FucyBmb3J3YXJkIGZyb20gdGhlIGluc2VydGlvblBvaW50IGluIHRoZSBvbGQgcGFyZW50IGxvb2tpbmcgZm9yIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBzb2Z0IG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHdlIGZpbmQgYSBwb3RlbnRpYWwgaWQgbWF0Y2ggaW4gdGhlIG9sZCBwYXJlbnRzIGNoaWxkcmVuIE9SIGlmIHdlIGZpbmQgdHdvXG4gICAgICAgIC8vIHBvdGVudGlhbCBzb2Z0IG1hdGNoZXMgZm9yIHRoZSBuZXh0IHR3byBwaWVjZXMgb2YgbmV3IGNvbnRlbnRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kU29mdE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFNvZnRNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKHBvdGVudGlhbFNvZnRNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIHBvdGVudGlhbFNvZnRNYXRjaCwgbmV3Q29udGVudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHBvdGVudGlhbCBzb2Z0IG1hdGNoIGhhcyBhIHBvdGVudGlhbCBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgcmVtYWluaW5nIG5ld1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IHNvIGJhaWwgb3V0IG9mIGxvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNvZnQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBub2RlLCByZXR1cm4gaXRcbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV4dFNpYmxpbmcsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgbmV3IG5vZGUgaGFzIGEgc29mdCBtYXRjaCB3aXRoIHRoaXMgbm9kZSwgc29cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudCBvZiBmdXR1cmUgc29mdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB0d28gZnV0dXJlIHNvZnQgbWF0Y2hlcywgYmFpbCB0byBhbGxvdyB0aGUgc2libGluZ3MgdG8gc29mdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGNvbnN1bWUgZnV0dXJlIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIHNha2Ugb2YgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBwb3RlbnRpYWxTb2Z0TWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHN2Z3MgdG8gYXZvaWQgZmFsc2UtcG9zaXRpdmUgbWF0Y2hlcyBvbiBoZWFkLCBldGMuXG4gICAgICAgICAgICBsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sICcnKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIG5ld0NvbnRlbnQgY29udGFpbnMgYSBodG1sLCBoZWFkIG9yIGJvZHkgdGFnLCB3ZSBjYW4gc2ltcGx5IHBhcnNlIGl0IHcvbyB3cmFwcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9oZWFkPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9ib2R5Pi8pKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgZnVsbCBIVE1MIGRvY3VtZW50LCByZXR1cm4gdGhlIGRvY3VtZW50IGl0c2VsZiBhcyB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHJldHVybiB0aGUgaHRtbCBlbGVtZW50IGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgcGFydGlhbCBIVE1MLCB3cmFwIGl0IGluIGEgdGVtcGxhdGUgdGFnIHRvIHByb3ZpZGUgYSBwYXJlbnQgZWxlbWVudCBhbmQgYWxzbyB0byBoZWxwXG4gICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIHRvdWNoeSB0YWdzIGxpa2UgdHIsIHRib2R5LCBldGMuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcIjxib2R5Pjx0ZW1wbGF0ZT5cIiArIG5ld0NvbnRlbnQgKyBcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLCBcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlRG9jLmJvZHkucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVW5uZWNlc3NhcnlMb2NhbFZhcmlhYmxlSlNcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSB0YWcgY3JlYXRlZCBieSBpZGlvbW9ycGggcGFyc2luZyBjYW4gc2VydmUgYXMgYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBub2RlIGlzIGFkZGVkIGFzIGEgY2hpbGQgdG8gYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBub2RlcyBpbiB0aGUgYXJyYXkgb3IgSFRNTEVsZW1lbnQgY29sbGVjdGlvbiBhcmUgY29uc29saWRhdGVkIHVuZGVyXG4gICAgICAgICAgICAgICAgLy8gYSBzaW5nbGUgZHVtbXkgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBkdW1teVBhcmVudC5hcHBlbmQoZWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICB3aGlsZSAocHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5vZGUpOyAvLyBwdXNoIGFkZGVkIHByZWNlZGluZyBzaWJsaW5ncyBvbiBpbiBvcmRlciBhbmQgaW5zZXJ0XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgbW9ycGhlZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkZWQucHVzaChtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB3aGlsZSAobmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpOyAvLyBoZXJlIHdlIGFyZSBnb2luZyBpbiBvcmRlciwgc28gcHVzaCBvbiBhcyB3ZSBzY2FuLCByYXRoZXIgdGhhbiBhZGRcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdGFjay5wb3AoKSwgbW9ycGhlZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZEJlc3ROb2RlTWF0Y2gobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTY29yZSA9IHNjb3JlRWxlbWVudChjdXJyZW50RWxlbWVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3U2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IG5ld1Njb3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlc3RFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2NvcmVFbGVtZW50KG5vZGUxLCBub2RlMiwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAuNSArIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgdGVtcE5vZGUpO1xuICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0ZW1wTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIElEIFNldCBGdW5jdGlvbnNcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkge1xuICAgICAgICAgICAgcmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldCh0YXJnZXROb2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICByZXR1cm4gaWRTZXQuaGFzKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldChub2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkU2V0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmRlYWRJZHMuYWRkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHNvdXJjZVNldCkge1xuICAgICAgICAgICAgICAgIC8vIGEgcG90ZW50aWFsIG1hdGNoIGlzIGFuIGlkIGluIHRoZSBzb3VyY2UgYW5kIHBvdGVudGlhbElkc1NldCwgYnV0XG4gICAgICAgICAgICAgICAgLy8gdGhhdCBoYXMgbm90IGFscmVhZHkgYmVlbiBtZXJnZWQgaW50byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkgJiYgaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrbWF0Y2hDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvdHRvbSB1cCBhbGdvcml0aG0gdGhhdCBmaW5kcyBhbGwgZWxlbWVudHMgd2l0aCBpZHMgaW5zaWRlIG9mIHRoZSBub2RlXG4gICAgICAgICAqIGFyZ3VtZW50IGFuZCBwb3B1bGF0ZXMgaWQgc2V0cyBmb3IgdGhvc2Ugbm9kZXMgYW5kIGFsbCB0aGVpciBwYXJlbnRzLCBnZW5lcmF0aW5nXG4gICAgICAgICAqIGEgc2V0IG9mIGlkcyBjb250YWluZWQgd2l0aGluIGFsbCBub2RlcyBmb3IgdGhlIGVudGlyZSBoaWVyYXJjaHkgaW4gdGhlIERPTVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAgICAgICAgICogQHBhcmFtIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBpZE1hcFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVJZE1hcEZvck5vZGUobm9kZSwgaWRNYXApIHtcbiAgICAgICAgICAgIGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZWxlbWVudHMgd2l0aCBhbiBpZCBwcm9wZXJ0eVxuICAgICAgICAgICAgbGV0IGlkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIGlkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsdDtcbiAgICAgICAgICAgICAgICAvLyB3YWxrIHVwIHRoZSBwYXJlbnQgaGllcmFyY2h5IG9mIHRoYXQgZWxlbWVudCwgYWRkaW5nIHRoZSBpZFxuICAgICAgICAgICAgICAgIC8vIG9mIGVsZW1lbnQgdG8gdGhlIHBhcmVudCdzIGlkIHNldFxuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBpZCBzZXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBpbnNlcnQgaXQgaW4gdGhlICBtYXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkU2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuc2V0KGN1cnJlbnQsIGlkU2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZFNldC5hZGQoZWx0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBjb21wdXRlcyBhIG1hcCBvZiBub2RlcyB0byBhbGwgaWRzIGNvbnRhaW5lZCB3aXRoaW4gdGhhdCBub2RlIChpbmNsdXNpdmUgb2YgdGhlXG4gICAgICAgICAqIG5vZGUpLiAgVGhpcyBtYXAgY2FuIGJlIHVzZWQgdG8gYXNrIGlmIHR3byBub2RlcyBoYXZlIGludGVyc2VjdGluZyBzZXRzIG9mIGlkcywgd2hpY2ggYWxsb3dzXG4gICAgICAgICAqIGZvciBhIGxvb3NlciBkZWZpbml0aW9uIG9mIFwibWF0Y2hpbmdcIiB0aGFuIHRyYWRpdGlvbiBpZCBtYXRjaGluZywgYW5kIGFsbG93cyBjaGlsZCBub2Rlc1xuICAgICAgICAgKiB0byBjb250cmlidXRlIHRvIGEgcGFyZW50IG5vZGVzIG1hdGNoaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9sZENvbnRlbnQgIHRoZSBvbGQgY29udGVudCB0aGF0IHdpbGwgYmUgbW9ycGhlZFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld0NvbnRlbnQgIHRoZSBuZXcgY29udGVudCB0byBtb3JwaCB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7TWFwPE5vZGUsIFNldDxTdHJpbmc+Pn0gYSBtYXAgb2Ygbm9kZXMgdG8gaWQgc2V0cyBmb3IgdGhlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJZE1hcChvbGRDb250ZW50LCBuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShvbGRDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICByZXR1cm4gaWRNYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFRoaXMgaXMgd2hhdCBlbmRzIHVwIGJlY29taW5nIHRoZSBJZGlvbW9ycGggZ2xvYmFsIG9iamVjdFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3JwaCxcbiAgICAgICAgICAgIGRlZmF1bHRzXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHN5bmNBdHRyaWJ1dGVzID0gKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbUVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGZyb21FbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICB0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcbiAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciA9IFtdO1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCA9IChpZCwgcmVwbGFjZVdpdGhDbG9uZSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG4gICAgICAgIGlmICghcmVwbGFjZVdpdGhDbG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvbmVkT2xkRWxlbWVudCA9IGNsb25lSFRNTEVsZW1lbnQob2xkRWxlbWVudCk7XG4gICAgICAgIG9sZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkT2xkRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuICAgIH07XG4gICAgcm9vdFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXZlLXByZXNlcnZlXScpLmZvckVhY2goKG5ld0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXZlLXByZXNlcnZlJyk7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLnNldChpZCwgb2xkRWxlbWVudCk7XG4gICAgICAgIHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIElkaW9tb3JwaC5tb3JwaChyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGZyb21FbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHx8ICEodG9FbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEZyb21FbCA9IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcChmcm9tRWwuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb25lZEZyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgSWRpb21vcnBoLm1vcnBoKGNsb25lZEZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5BbHBpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQWxwaW5lLm1vcnBoKGZyb21FbC5fX3gsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZnJvbUVsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnT1BUSU9OJyAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJykgfHwgKGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbm5lckhUTUwgPSB0b0VsLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZU5vZGVSZW1vdmVkKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG4gICAgICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50cy4nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlcGxhY2VXaXRoKG9yaWdpbmFsRWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKC4uLmFyZ3MpKTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoYW5naW5nSXRlbXNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRydWVPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxSZWNvcmQub3JpZ2luYWw7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbmdlZEl0ZW1zLCAoW25hbWUsIHsgbmV3OiB2YWx1ZSB9XSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVtb3ZlZEl0ZW1zLmtleXMoKSk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRJdGVtcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZEl0ZW1zLnNpemUgPT09IDA7XG4gICAgfVxufVxuXG5jbGFzcyBFbGVtZW50Q2hhbmdlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuZGVsZXRlKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkU3R5bGUoc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5zZXRJdGVtKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMucmVtb3ZlSXRlbShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMucmVtb3ZlSXRlbShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgZ2V0QWRkZWRDbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuYWRkZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG4gICAgfVxuICAgIGdldENoYW5nZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuYWRkZWRDbGFzc2VzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMucmVtb3ZlZENsYXNzZXMpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJlxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKSk7XG4gICAgfVxufVxuXG5jbGFzcyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrID0gc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuICAgIH1cbiAgICB3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICAgIH1cbiAgICBoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZEVsZW1lbnQgb2YgdGhpcy5hZGRlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUubWF0Y2goLyhcXFMrKS9ndSkgfHwgW107XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICBjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlcyA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFuZXdWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMocHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgYWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgfVxuICAgIGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eV0gPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSAnRk9OVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09ICd2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsnO1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gJyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICAgICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlKHByb3BzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIgPSBuZXcgVW5zeW5jZWRJbnB1dHNUcmFja2VyKHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIodGhpcy5lbGVtZW50LCAoZWxlbWVudCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcykpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRTZWxmKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBmaW5kQ29tcG9uZW50cyh0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9FbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdO1xuICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVHVyYm9FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXR1cmJvPVwiZmFsc2VcIl0nKTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9TZW5kID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNUb1NlbmRba2V5XSA9IHZhbHVlLmZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3RDb25maWcgPSB7XG4gICAgICAgICAgICBwcm9wczogdGhpcy52YWx1ZVN0b3JlLmdldE9yaWdpbmFsUHJvcHMoKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMucGVuZGluZ0FjdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHt9LFxuICAgICAgICAgICAgdXBkYXRlZFByb3BzRnJvbVBhcmVudDogdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSxcbiAgICAgICAgICAgIGZpbGVzOiBmaWxlc1RvU2VuZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVxdWVzdDpzdGFydGVkJywgcmVxdWVzdENvbmZpZyk7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLmZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoIWhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKT8uaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJykgJiZcbiAgICAgICAgICAgICAgICAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlICcke3RoaXMubmFtZX0nIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOmAsIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICAgICAgZXhlY3V0ZU1vcnBoZG9tKHRoaXMuZWxlbWVudCwgbmV3RWxlbWVudCwgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSwgKGVsZW1lbnQpID0+IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy52YWx1ZVN0b3JlKSwgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlcik7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZUFsbFByb3BzKG5ld1Byb3BzKTtcbiAgICAgICAgY29uc3QgZXZlbnRzVG9FbWl0ID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEV2ZW50c1RvRW1pdCgpO1xuICAgICAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdXBkYXRlRnJvbVBhcmVudFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9PT0gJ2dldCcgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiYgKGFjdGlvbnMubGVuZ3RoIHx8IHRvdGFsRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBtZXRob2QsIGNzcmZUb2tlbik7XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgT2JqZWN0LmtleXModXBkYXRlZCkpO1xuICAgIH1cbn1cblxuY2xhc3MgU3RpbXVsdXNFbGVtZW50RHJpdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgfVxuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLnByb3BzVmFsdWU7XG4gICAgfVxuICAgIGdldEV2ZW50c1RvRW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcbiAgICB9XG4gICAgZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuZXZlbnRzVG9EaXNwYXRjaFZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIHRydWUsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICB9XG4gICAgZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgaXNMb2FkaW5nLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogMjAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdhY3Rpb24nLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnbW9kZWwnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm1vZGVsXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gbW9kZWwoZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZE1vZGVscy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBiYWNrZW5kUmVxdWVzdCAmJlxuICAgICAgICAgICAgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmXG4gICAgICAgICAgICB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBiYWNrZW5kUmVxdWVzdCAmJlxuICAgICAgICAgICAgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nRGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICBsZXQgbWF0Y2hpbmdFbGVtZW50cyA9IFsuLi5BcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKSldO1xuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gbWF0Y2hpbmdFbGVtZW50cy5maWx0ZXIoKGVsdCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWx0LCBjb21wb25lbnQpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgbWF0Y2hpbmdFbGVtZW50cyA9IFtlbGVtZW50LCAuLi5tYXRjaGluZ0VsZW1lbnRzXTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAncmV2ZXJ0JztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IChhY3Rpb24sIGlzTG9hZGluZykgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1wb2xsIFwiJHtyYXdQb2xsQ29uZmlnfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRQb2xsKGRpcmVjdGl2ZS5hY3Rpb24sIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kZWxdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmdldFVuc3luY2VkTW9kZWxzKCkuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgIWVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kZWxCaW5kaW5nIChtb2RlbERpcmVjdGl2ZSkge1xuICAgIGxldCBzaG91bGRSZW5kZXIgPSB0cnVlO1xuICAgIGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgIG1vZGVsRGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSByZXF1aXJlcyBhIHZhbHVlIC0gZS5nLiBvbihjaGFuZ2UpLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIVsnaW5wdXQnLCAnY2hhbmdlJ10uaW5jbHVkZXMobW9kaWZpZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdub3JlbmRlcic6XG4gICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWJvdW5jZSc6XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWUsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUVtcHR5KHZhbHVlKSB7XG4gICAgaWYgKG51bGwgPT09IHZhbHVlIHx8IHZhbHVlID09PSAnJyB8fCB1bmRlZmluZWQgPT09IHZhbHVlIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICBpZiAoIWlzVmFsdWVFbXB0eSh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgY29uc3QgYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMgPSAoZGF0YSwgZW50cmllcyA9IHt9LCBiYXNlS2V5ID0gJycpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2lLZXksIGlWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGJhc2VLZXkgPT09ICcnID8gaUtleSA6IGAke2Jhc2VLZXl9WyR7aUtleX1dYDtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gYmFzZUtleSAmJiBpc1ZhbHVlRW1wdHkoaVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGVudHJpZXNba2V5XSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVsbCAhPT0gaVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSB7IC4uLmVudHJpZXMsIC4uLmJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGlWYWx1ZSwgZW50cmllcywga2V5KSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KGlWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyQy9nLCAnLCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IGJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGRhdGEpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhlbnRyaWVzKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHt2YWx1ZX1gKVxuICAgICAgICAuam9pbignJicpO1xufVxuZnVuY3Rpb24gZnJvbVF1ZXJ5U3RyaW5nKHNlYXJjaCkge1xuICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCc/JywgJycpO1xuICAgIGlmIChzZWFyY2ggPT09ICcnKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEgPSAoa2V5LCB2YWx1ZSwgZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3QsIHNlY29uZCwgLi4ucmVzdF0gPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2ZpcnN0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhW2ZpcnN0XSA9IE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoc2Vjb25kKSkgPyB7fSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKFtzZWNvbmQsIC4uLnJlc3RdLmpvaW4oJy4nKSwgdmFsdWUsIGRhdGFbZmlyc3RdKTtcbiAgICB9O1xuICAgIGNvbnN0IGVudHJpZXMgPSBzZWFyY2guc3BsaXQoJyYnKS5tYXAoKGkpID0+IGkuc3BsaXQoJz0nKSk7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgZG90Tm90YXRlZEtleSA9IGtleS5yZXBsYWNlKC9cXFsvZywgJy4nKS5yZXBsYWNlKC9dL2csICcnKTtcbiAgICAgICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKGRvdE5vdGF0ZWRLZXksIHZhbHVlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufVxuY2xhc3MgVXJsVXRpbHMgZXh0ZW5kcyBVUkwge1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKVtrZXldO1xuICAgIH1cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb21RdWVyeVN0cmluZyh0aGlzLnNlYXJjaCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRvUXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgfVxufVxuY2xhc3MgSGlzdG9yeVN0cmF0ZWd5IHtcbiAgICBzdGF0aWMgcmVwbGFjZSh1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgJycsIHVybCk7XG4gICAgfVxufVxuXG5jbGFzcyBRdWVyeVN0cmluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IobWFwcGluZykge1xuICAgICAgICB0aGlzLm1hcHBpbmcgPSBtYXBwaW5nO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxVdGlscyA9IG5ldyBVcmxVdGlscyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdXJsVXRpbHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubWFwcGluZykuZm9yRWFjaCgoW3Byb3AsIG1hcHBpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQocHJvcCk7XG4gICAgICAgICAgICAgICAgdXJsVXRpbHMuc2V0KG1hcHBpbmcubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdXJsVXRpbHMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlTdHJhdGVneS5yZXBsYWNlKHVybFV0aWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVxdWVzdDpzdGFydGVkJywgKHJlcXVlc3REYXRhKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgbm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBwYXJlbnRDb21wb25lbnQgPSBmaW5kUGFyZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuICAgIH1cbn1cblxuY2xhc3MgTGF6eVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCdsYXp5JyAhPT0gY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2xvYWRpbmcnKT8udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXZlOmFwcGVhcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICB9XG59XG5cbmNsYXNzIExpdmVDb250cm9sbGVyRGVmYXVsdCBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGFjdGlvbiBuYW1lIHByb3ZpZGVkIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX0uIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCB0aGUgXCJkYXRhLWxpdmUtYWN0aW9uLXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IHBhcmFtcy5hY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGlvbkFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuICAgICAgICBkZWxldGUgYWN0aW9uQXJncy5hY3Rpb247XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc3RvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzZWxmJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWJvdW5jZScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdmaWxlcycsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzID0gdGhpcy5wZW5kaW5nRmlsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdID0gdGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBhY3Rpb25BcmdzLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICB9XG4gICAgZW1pdChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0KG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFVwKG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0U2VsZihldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFNlbGYobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuICAgIH1cbiAgICBwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5fdXBkYXRlRnJvbVBhcmVudFByb3BzKHRoaXMucHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlKTtcbiAgICB9XG4gICAgZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmZpbmdlcnByaW50ID0gdGhpcy5maW5nZXJwcmludFZhbHVlO1xuICAgIH1cbiAgICBnZXRFbWl0RGlyZWN0aXZlcyhldmVudCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBldmVudC5wYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBldmVudEFyZ3MuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcbiAgICAgICAgY29uc3QgZW1pdHMgPSBbXTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lTWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBldmVudCBcIiR7ZXZlbnRJbmZvfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW1pdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGlyZWN0aXZlLmFjdGlvbixcbiAgICAgICAgICAgICAgICBkYXRhOiBldmVudEFyZ3MsXG4gICAgICAgICAgICAgICAgbmFtZU1hdGNoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHM7XG4gICAgfVxuICAgIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuaWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lVmFsdWUsIHRoaXMucHJvcHNWYWx1ZSwgdGhpcy5saXN0ZW5lcnNWYWx1ZSwgaWQsIExpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSh0aGlzKSwgbmV3IFN0aW11bHVzRWxlbWVudERyaXZlcih0aGlzKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBMYXp5UGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUGFnZVVubG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBvbGxpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFF1ZXJ5U3RyaW5nUGx1Z2luKHRoaXMucXVlcnlNYXBwaW5nVmFsdWUpLFxuICAgICAgICAgICAgbmV3IENoaWxkQ29tcG9uZW50UGx1Z2luKHRoaXMuY29tcG9uZW50KSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5maWxlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuICAgICAgICBkZXRhaWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ2xpdmUnLCBjYW5jZWxhYmxlLCBidWJibGVzOiBjYW5CdWJibGUgfSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiZcbiAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnaWQnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlkICE9PSB0aGlzLmNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkxpdmVDb250cm9sbGVyRGVmYXVsdC52YWx1ZXMgPSB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHVybDogU3RyaW5nLFxuICAgIHByb3BzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDoge30gfSxcbiAgICBwcm9wc1VwZGF0ZWRGcm9tUGFyZW50OiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDoge30gfSxcbiAgICBjc3JmOiBTdHJpbmcsXG4gICAgbGlzdGVuZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRW1pdDogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBldmVudHNUb0Rpc3BhdGNoOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgZmluZ2VycHJpbnQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICAgIHJlcXVlc3RNZXRob2Q6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncG9zdCcgfSxcbiAgICBxdWVyeU1hcHBpbmc6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSA9IChjb250cm9sbGVyKSA9PiBuZXcgQmFja2VuZChjb250cm9sbGVyLnVybFZhbHVlLCBjb250cm9sbGVyLnJlcXVlc3RNZXRob2RWYWx1ZSwgY29udHJvbGxlci5jc3JmVmFsdWUpO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiIsImZ1bmN0aW9uIHJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHN2ZWx0ZUNvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3ZlbHRlQ29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFN2ZWx0ZUNvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBzdmVsdGVDb250cm9sbGVyc1tgLi8ke25hbWV9LnN2ZWx0ZWBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3ZlbHRlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPz8gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmludHJvID0gdGhpcy5pbnRyb1ZhbHVlID8/IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlU3ZlbHRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9kZXN0cm95SWZFeGlzdHMoKTtcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbnRybzogdGhpcy5pbnRybyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290ID0gdGhpcy5hcHA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnKTtcbiAgICB9XG4gICAgX2Rlc3Ryb3lJZkV4aXN0cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5yb290ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yb290LiRkZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lbGVtZW50LnJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkID0ge30pIHtcbiAgICAgICAgY29uc3QgZGV0YWlsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW50cm86IHRoaXMuaW50cm8sXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdzdmVsdGUnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBpbnRybzogQm9vbGVhbixcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIjxzdHlsZSBnbG9iYWw+XHJcbiAgICAvKiBAaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5jc3MnOyAqL1xyXG4gICAgLyogQGltcG9ydCAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5jc3MnOyAqL1xyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBGaWxlUG9uZCAsIHtyZWdpc3RlclBsdWdpbiAsIHN1cHBvcnRlZH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtZmlsZXBvbmQvc3JjL2luZGV4XCI7XHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWV4aWYtb3JpZW50YXRpb24nXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUmVzaXplIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1yZXNpemUnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1lZGl0J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS10cmFuc2Zvcm0nXHJcblxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyfSBmcm9tICdzdmVsdGUnXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuICAgXHJcblxyXG4gICAgcmVnaXN0ZXJQbHVnaW4oRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiAsRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsIEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgLCBGaWxlUG9uZFBsdWdpbkltYWdlRWRpdCAsIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0pXHJcblxyXG4gICAgbGV0IHBvbmQgO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgZmlsZTtcclxuXHJcbiAgICBsZXQgZmlsZW5hbWU7XHJcblxyXG4gICAgbGV0IHRhYiA9IFtdO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgbmFtZSA9IFwiZmlsZXBvbmRcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhhcyBpbml0aWFsaXNlZFwiKVxyXG4gICAgICAgIC8vIGZpbGVuYW1lID0gSlNPTi5wYXJzZShmaWxlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAvLyAgICBpZihmaWxlcy5maWxlbmFtZSAhPSBKU09OLnBhcnNlKGZpbGUpKXtcclxuICAgIC8vICAgICAgICAgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lXHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWwpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYodGFiLmluZGV4T2YodmFsKSA9PSAtMSl7XHJcbiAgICAvLyAgICAgICAgICAgICB0YWIucHVzaCh2YWwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVuYW1lKVxyXG4gICAgICAgIHRhYi5wdXNoKGZpbGVzLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSByZW1vdmVkXCIpXHJcblxyXG4gICAgICAgIHRhYiA9IHRhYi5maWx0ZXIoZWwgPT4gZWwgIT0gZmlsZXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYilcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJhcHBcIj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiBuYW1lPVwiZmlsZV91cGRhdGVcIiBpZD1cIlwiIGJpbmQ6dmFsdWU9e2ZpbGVuYW1lfSBjbGFzcz1cImlucHV0X2Nob29zZV9maWxlXCI+XHJcbiAgICA8RmlsZVBvbmQgYmluZDp0aGlzPXtwb25kfSB7bmFtZX1cclxuICAgIHNlcnZlcj1cIi9maWxlcG9uZF9lZGl0XCJcclxuICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICBvbmluaXQ9e2hhbmRsZUluaXR9XHJcbiAgICBvbmFkZGZpbGU9e2hhbmRsZUFkZEZpbGV9XHJcbiAgICBtYXhGaWxlcz17MTB9XHJcbiAgICBvbnJlbW92ZWZpbGU9e2hhbmRsZVJlbW92ZUZpbGV9XHJcbiAgICBsYWJlbElkbGU9XCJHbGlzc2V6IHZvcyBmaWNoaWVyc1wiXHJcbiAgICBsYWJlbFByb2Nlc3Npbmc9XCJDaGFyZ2VtZW50Li4uXCJcclxuICAgIGZpbGVzPXtcclxuICAgICAgICBKU09OLnBhcnNlKGZpbGUpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbG9jYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlcjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbHVnaW5zPXtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3LFxyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICA+XHJcbiAgICA8L0ZpbGVQb25kPlxyXG5cclxuXHJcbjwvZGl2PlxyXG4iLCI8c2NyaXB0PlxuICAgIGxldCBjdXJyZW50VGl0bGU7XG4gICAgbGV0IGFycmF5TGlua3MgPSBbXTtcbiAgICBsZXQgZ29MZWZ0ID0gZmFsc2U7XG4gICAgZXhwb3J0IGxldCBjYXRlZ29yeTtcblxuICAgIGxldCBzcGVjaWFsTGlzdDIgPSBbXG4gICAgICAgIHsgdGl0bGU6IFwiVml0cmluZXMgUG9ydGZvbGlvXCIsIG51bTogc2V0U3BlY2lhbElubm92YXRpb25zMSB9LFxuICAgICAgICB7IHRpdGxlOiBcIlZpdHJpbmVzIExhbmRpbmcgUGFnZVwiLCBudW06IHNldFNwZWNpYWxJbm5vdmF0aW9uczIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJWaXRyaW5lcyBzcMOpY2lmaXF1ZXNcIiwgbnVtOiBzZXRTcGVjaWFsSW5ub3ZhdGlvbnMzIH0sXG4gICAgXTtcblxuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBjYXRlZ29yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxpc3QucHVzaCh7IHRpdGxlOiBlbGVtZW50Lm5hbWUsIG51bTogKCkgPT4gc2V0Q2F0ZWdvcnkoZWxlbWVudC5uYW1lLCBlbGVtZW50Lml0ZW1zKSB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldENhdGVnb3J5KG5hbWUsIGl0ZW1zKSB7XG4gICAgICAgIGdvTGVmdCA9ICFnb0xlZnQ7XG4gICAgICAgIGN1cnJlbnRUaXRsZSA9IG5hbWU7XG4gICAgICAgIGFycmF5TGlua3MgPSBbXTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBhcnJheUxpbmtzLnB1c2goeyBrZXk6IFwiLzFcIiwgdmFsdWU6IGVsZW1lbnQubmFtZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgbGV0IHNwZWNpYWxMaXN0U3ViSXRlbXMgPSBbXG4gICAgICAgIHsgaGVhZGVyX3RpdGxlOiBcIkNhdMOpZ29yaWVzXCIsIGxpc3Q6IGxpc3QgfSxcbiAgICAgICAgeyBoZWFkZXJfdGl0bGU6IFwiVml0cmluZXNcIiwgbGlzdDogc3BlY2lhbExpc3QyIH0sXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIHNldFNwZWNpYWxJbm5vdmF0aW9uczEoKSB7XG4gICAgICAgIGdvTGVmdCA9ICFnb0xlZnQ7XG4gICAgICAgIGN1cnJlbnRUaXRsZSA9IFwiVGl0cmUgSW5ub3ZhdGlvbiAxXCI7XG4gICAgICAgIGFycmF5TGlua3MgPSBbXTtcbiAgICAgICAgYXJyYXlMaW5rcyA9IFtcbiAgICAgICAgICAgIHsga2V5OiBcIi83XCIsIHZhbHVlOiBcIklubm92YXRpb24gMSBUaXRyZSAxXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIi84XCIsIHZhbHVlOiBcIklubm92YXRpb24gMiBUaXRyZSAxXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIi85XCIsIHZhbHVlOiBcIklubm92YXRpb24gMyBUaXRyZSAxXCIgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0U3BlY2lhbElubm92YXRpb25zMigpIHtcbiAgICAgICAgZ29MZWZ0ID0gIWdvTGVmdDtcbiAgICAgICAgY3VycmVudFRpdGxlID0gXCJUaXRyZSBJbm5vdmF0aW9uIDJcIjtcbiAgICAgICAgYXJyYXlMaW5rcyA9IFtdO1xuICAgICAgICBhcnJheUxpbmtzID0gW1xuICAgICAgICAgICAgeyBrZXk6IFwiLzdcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAxIFRpdHJlIDJcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiLzhcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAyIFRpdHJlIDJcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiLzlcIiwgdmFsdWU6IFwiSW5ub3ZhdGlvbiAzIFRpdHJlIDJcIiB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTcGVjaWFsSW5ub3ZhdGlvbnMzKCkge1xuICAgICAgICBnb0xlZnQgPSAhZ29MZWZ0O1xuICAgICAgICBjdXJyZW50VGl0bGUgPSBcIlRpdHJlIElubm92YXRpb24gM1wiO1xuICAgICAgICBhcnJheUxpbmtzID0gW107XG4gICAgICAgIGFycmF5TGlua3MgPSBbXG4gICAgICAgICAgICB7IGtleTogXCIvN1wiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDEgVGl0cmUgM1wiIH0sXG4gICAgICAgICAgICB7IGtleTogXCIvOFwiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDIgVGl0cmUgM1wiIH0sXG4gICAgICAgICAgICB7IGtleTogXCIvOVwiLCB2YWx1ZTogXCJJbm5vdmF0aW9uIDMgVGl0cmUgM1wiIH0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlR29MZWZ0KHBhcmFtcykge1xuICAgICAgICBnb0xlZnQgPSBwYXJhbXM7XG4gICAgfVxuXG4gICAgaW1wb3J0IFNpZGUgZnJvbSBcIi4vU2lkZS5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyX3BhcmVudF9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfbWFpblwiIGNsYXNzOmdvTGVmdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY2PDqHMgcmFwaWRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY3VlaWw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBwcm9wb3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VydmljZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyNlYWNoIHNwZWNpYWxMaXN0U3ViSXRlbXMgYXMgc3ViSXRlbSAoc3ViSXRlbS5oZWFkZXJfdGl0bGUpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWJJdGVtLmhlYWRlcl90aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHN1Ykl0ZW0ubGlzdCBhcyBpdGVtIChpdGVtLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3BlY2lhbF9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtpdGVtLm51bX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdib3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNpemUtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTguMjUgNC41IDcuNSA3LjUtNy41IDcuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaWRlXG4gICAgICAgICAgICBnb1NpZGU9e2dvTGVmdH1cbiAgICAgICAgICAgIG9uOnVwZGF0ZT17KGV2ZW50KSA9PiB1cGRhdGVHb0xlZnQoZXZlbnQuZGV0YWlsKX1cbiAgICAgICAgICAgIHtjdXJyZW50VGl0bGV9XG4gICAgICAgICAgICB7YXJyYXlMaW5rc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIml0ZW1fdGl0bGVcIj5UaXRsZSBzZWM8L3NwYW4+XG4gICAgICAgICAgICA8dWwgc2xvdD1cImxpc3RfbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NZWlsbGV1cmVzIHZlbnRlczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TaWRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuXHJcbiAgICBsZXQgZGlzcGxheWVkVGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgdGV4dCA9IFwiQmllbnZlbnVlIMOgIGwnZXNwYWNlIGRlIGdlc3Rpb24gZGUgdm90cmUgdml0cmluZVwiO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGFqb3V0ZXIgdW5lIGxldHRyZSDDoCBsYSBmb2lzXHJcbiAgICBmdW5jdGlvbiByZXZlYWxOZXh0TGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXllZFRleHQgKz0gdGV4dFtpbmRleF07XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmV2ZWFsTmV4dExldHRlciwgMTAwKTsgLy8gRMOpbGFpIGVudHJlIGNoYXF1ZSBsZXR0cmUgKGVuIG1pbGxpc2Vjb25kZXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIETDqWNsZW5jaGUgbCdhZmZpY2hhZ2UgZGVzIGxldHRyZXMgdW5lIHBhciB1bmUgYXUgY2hhcmdlbWVudCBkdSBjb21wb3NhbnRcclxuICAgIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHJldmVhbE5leHRMZXR0ZXIoKTtcclxuICAgIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxoMT57ZGlzcGxheWVkVGV4dH08L2gxPlxyXG5cclxuIiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICAgbGV0IHBvbmQ7XHJcblxyXG4gICAgIGxldCBmaWxlbmFtZSA7XHJcblxyXG4gICAgIGxldCB0YWIgPSBbXTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG5hbWUgPSBcImZpbGVwb25kXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoYXMgaW5pdGlhbGlzZWRcIilcclxuICAgICAgICAvLyBwb25kLmFkZEZpbGUoZmlsZSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAvLyAgICBpZihmaWxlcy5maWxlbmFtZSAhPSBKU09OLnBhcnNlKGZpbGUpKXtcclxuICAgIC8vICAgICAgICAgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lXHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWwpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYodGFiLmluZGV4T2YodmFsKSA9PSAtMSl7XHJcbiAgICAvLyAgICAgICAgICAgICB0YWIucHVzaCh2YWwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVuYW1lKVxyXG4gICAgICAgIHRhYi5wdXNoKGZpbGVzLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSByZW1vdmVkXCIpXHJcblxyXG4gICAgICAgIHRhYiA9IHRhYi5maWx0ZXIoZWwgPT4gZWwgIT0gZmlsZXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYilcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcbiAgICB9XHJcbiAgICBcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYXBwXCI+XHJcbiAgICA8aW5wdXQgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlsZV91cGRhdGVcIiBpZD1cIlwiIGJpbmQ6dmFsdWU9e2ZpbGVuYW1lfSBjbGFzcz1cImlucHV0X2Nob29zZV9maWxlXCI+XHJcblxyXG4gICAgPEZpbGVQb25kIGJpbmQ6dGhpcz17cG9uZH0ge25hbWV9XHJcbiAgICBzZXJ2ZXI9XCIvZmlsZXBvbmRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgICBtYXhGaWxlcz17MTB9XHJcbiAgICBvbnJlbW92ZWZpbGU9e2hhbmRsZVJlbW92ZUZpbGV9XHJcbiAgICBsYWJlbElkbGU9XCJHbGlzc2V6IHZvcyBmaWNoaWVyc1wiXHJcbiAgICBsYWJlbFByb2Nlc3Npbmc9XCJDaGFyZ2VtZW50Li4uXCJcclxuICAgIFxyXG4gICAgcGx1Z2lucz17XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlld1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwic3ZlbHRlXCI7XHJcblxyXG4gICAgZXhwb3J0IGxldCBnb1NpZGUgPSBmYWxzZTtcclxuICAgIGV4cG9ydCBsZXQgY3VycmVudFRpdGxlO1xyXG4gICAgZXhwb3J0IGxldCBhcnJheUxpbmtzO1xyXG5cclxuICAgIGxldCBoaWRlU2lkZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2lkZUJhcigpIHtcclxuICAgICAgICBoaWRlU2lkZSA9ICFoaWRlU2lkZTtcclxuICAgICAgICBnb1NpZGUgPSBmYWxzZTtcclxuICAgICAgICBkaXNwYXRjaChcInVwZGF0ZVwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdlxyXG4gICAgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfc2Vjb25kYXJ5XCJcclxuICAgIGNsYXNzOmdvU2lkZVxyXG4gICAgY2xhc3M6aGlkZVNpZGVcclxuPlxyXG4gICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpdGVtX3RpdGxlXCIgb246Y2xpY2s9e2hpZGVTaWRlQmFyfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Ym94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzaXplLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjUgMTkuNSAzIDEybTAgMCA3LjUtNy41TTMgMTJoMThcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuPk1lbnUgcHJpbmNpcGFsPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgeyNpZiBhcnJheUxpbmtzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsjZWFjaCBhcnJheUxpbmtzIGFzIGl0ZW0gKGl0ZW0ua2V5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlN3aXBlciIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImluaXRpYWxpemUiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25fZXhpdCIsImxlZnRfbmF2aWdhdGlvbl9iYXIiLCJvdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNlbGVjdCIsImFyZWFzIiwic3dpcGVyX2V4cGxvcmF0aW9uIiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibG9vcCIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiYnJlYWtwb2ludHMiLCJiYXJfYWRtaW4iLCJiYXJfYWRtaW5fbW9iaWxlIiwib3ZlcmxheV9hcHBfbW9iaWxlIiwibGVmdF9uYXZfYmFyX2FkbWluIiwidG9wX25hdl9iYXJfYWRtaW4iLCJib2R5IiwidG9nZ2xlIiwic3Bpbm5lciIsInByb2R1Y3RfY2F0ZWdvcnkiLCJkZWZhdWx0IiwicmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyIsIkFscGluZSIsIndpbmRvdyIsInN0YXJ0IiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJhcmdzIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNvbmNhdCIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwidHJpbUFsbCIsInNwbGl0Iiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwibWFwIiwiam9pbiIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiV2Vha01hcCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwiTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJzZXQiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXQiLCJjbGVhckludGVydmFsIiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiY29tcG9uZW50cyIsImNvbXBvbmVudE5hbWUiLCJjb250YWlucyIsImZpbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiVmFsdWVTdG9yZSIsInByb3BzIiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJub3JtYWxpemVkTmFtZSIsImhhcyIsImdldE9yaWdpbmFsUHJvcHMiLCJnZXREaXJ0eVByb3BzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5Iiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJjaGFuZ2VkIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiY3VycmVudFZhbHVlIiwiSWRpb21vcnBoIiwiRU1QVFlfU0VUIiwiU2V0IiwiZGVmYXVsdHMiLCJtb3JwaFN0eWxlIiwiY2FsbGJhY2tzIiwiYmVmb3JlTm9kZUFkZGVkIiwibm9PcCIsImFmdGVyTm9kZUFkZGVkIiwiYmVmb3JlTm9kZU1vcnBoZWQiLCJhZnRlck5vZGVNb3JwaGVkIiwiYmVmb3JlTm9kZVJlbW92ZWQiLCJhZnRlck5vZGVSZW1vdmVkIiwiYmVmb3JlQXR0cmlidXRlVXBkYXRlZCIsImhlYWQiLCJzdHlsZSIsInNob3VsZFByZXNlcnZlIiwiZWx0Iiwic2hvdWxkUmVBcHBlbmQiLCJzaG91bGRSZW1vdmUiLCJhZnRlckhlYWRNb3JwaGVkIiwibW9ycGgiLCJvbGROb2RlIiwibmV3Q29udGVudCIsImNvbmZpZyIsIkRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyc2VDb250ZW50Iiwibm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVDb250ZW50IiwiY3R4IiwiY3JlYXRlTW9ycGhDb250ZXh0IiwibW9ycGhOb3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZWROZXdDb250ZW50IiwiYmxvY2siLCJvbGRIZWFkIiwibmV3SGVhZCIsInByb21pc2VzIiwiaGFuZGxlSGVhZEVsZW1lbnQiLCJhbGwiLCJhc3NpZ24iLCJpZ25vcmUiLCJtb3JwaENoaWxkcmVuIiwiYmVzdE1hdGNoIiwiZmluZEJlc3ROb2RlTWF0Y2giLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsIm1vcnBoZWROb2RlIiwibW9ycGhPbGROb2RlVG8iLCJpbnNlcnRTaWJsaW5ncyIsImlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50IiwicG9zc2libGVBY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlVmFsdWUiLCJhY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlIiwiaXNTb2Z0TWF0Y2giLCJyZXBsYWNlQ2hpbGQiLCJIVE1MSGVhZEVsZW1lbnQiLCJzeW5jTm9kZUZyb20iLCJuZXdQYXJlbnQiLCJvbGRQYXJlbnQiLCJuZXh0TmV3Q2hpbGQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0aW9uUG9pbnQiLCJuZXdDaGlsZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24iLCJpc0lkU2V0TWF0Y2giLCJpZFNldE1hdGNoIiwiZmluZElkU2V0TWF0Y2giLCJyZW1vdmVOb2Rlc0JldHdlZW4iLCJzb2Z0TWF0Y2giLCJmaW5kU29mdE1hdGNoIiwiaW5zZXJ0QmVmb3JlIiwidGVtcE5vZGUiLCJyZW1vdmVOb2RlIiwiaWdub3JlQXR0cmlidXRlIiwiYXR0ciIsInRvIiwidXBkYXRlVHlwZSIsIm5vZGVUeXBlIiwiZnJvbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVzIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXJyIiwidG9BdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImlnbm9yZVVwZGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJuZXdIZWFkVGFnIiwiY3VycmVudEhlYWQiLCJhZGRlZCIsInJlbW92ZWQiLCJwcmVzZXJ2ZWQiLCJub2Rlc1RvQXBwZW5kIiwiaGVhZE1lcmdlU3R5bGUiLCJzcmNUb05ld0hlYWROb2RlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJuZXdIZWFkQ2hpbGQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiY3VycmVudEhlYWRFbHQiLCJpbk5ld0NvbnRlbnQiLCJpc1JlQXBwZW5kZWQiLCJpc1ByZXNlcnZlZCIsIl9sb29wIiwibmV3Tm9kZSIsIl9ub2Rlc1RvQXBwZW5kIiwiX2kyIiwibmV3RWx0IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJocmVmIiwic3JjIiwicHJvbWlzZSIsIl9yZXNvbHZlIiwiX2kzIiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsInRhcmdldCIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJpZCIsImdldElkSW50ZXJzZWN0aW9uQ291bnQiLCJzdGFydEluY2x1c2l2ZSIsImVuZEV4Y2x1c2l2ZSIsIm5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCIsInBvdGVudGlhbE1hdGNoIiwib3RoZXJNYXRjaENvdW50IiwicG90ZW50aWFsU29mdE1hdGNoIiwic2libGluZ1NvZnRNYXRjaENvdW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiY29udGVudFdpdGhTdmdzUmVtb3ZlZCIsIm1hdGNoIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsInJlc3BvbnNlRG9jIiwiZHVtbXlQYXJlbnQiLCJOb2RlIiwiYXBwZW5kIiwiX2k0IiwiX2FyciIsInN0YWNrIiwibm9kZSIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJjdXJyZW50Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194Iiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwic2V0SXRlbSIsIml0ZW1OYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJyZW1vdmVJdGVtIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJfcmVmMyIsIl9yZWY0IiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXM1IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJvbGRWYWx1ZSIsInByZXZpb3VzVmFsdWVzIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIkNvbXBvbmVudCIsImxpc3RlbmVycyIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiX3RoaXM2IiwiZmluZ2VycHJpbnQiLCJkZWZhdWx0RGVib3VuY2UiLCJiYWNrZW5kUmVxdWVzdCIsInBlbmRpbmdBY3Rpb25zIiwicGVuZGluZ0ZpbGVzIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJsaXN0ZW5lciIsIl90aGlzNiRsaXN0ZW5lcnMkZ2V0IiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwiZmlsZXMiLCJpbnB1dCIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImVtaXQiLCJvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQiLCJwZXJmb3JtRW1pdCIsImVtaXRVcCIsImVtaXRTZWxmIiwiZG9FbWl0IiwibWF0Y2hpbmdOYW1lIiwiX3RoaXM3IiwiYWN0aW9ucyIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOCIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwicmVxdWVzdENvbmZpZyIsInVwZGF0ZWQiLCJtYWtlUmVxdWVzdCIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTYiLCJfT2JqZWN0JHZhbHVlcyIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3giLCJfdGhpczkiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsImxvY2F0aW9uIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJuZXdQcm9wcyIsImdldENvbXBvbmVudFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsIl9yZWY2IiwiX3JlZjciLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXMxMCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsIl90aGlzMTEiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTIiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJidWlsZFJlcXVlc3QiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJfaTciLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIkJhY2tlbmQiLCJyZXF1ZXN0QnVpbGRlciIsIl90aGlzJHJlcXVlc3RCdWlsZGVyJCIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczEzIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTQiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjgiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxNSIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJfdmFsaWRNb2RpZmllcnMkZ2V0IiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIm1hdGNoaW5nRWxlbWVudHMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QzIiwiX2VsZW1lbnQkY2xhc3NMaXN0NCIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTYiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTciLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxOCIsIl9yZWY5Iiwic3RvcEFsbFBvbGxpbmciLCJjbGVhclBvbGxpbmciLCJfdGhpczE5IiwidGltZXIiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMyMCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiaXNWYWx1ZUVtcHR5IiwiX2k4IiwiX09iamVjdCRrZXlzIiwidG9RdWVyeVN0cmluZyIsImJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzIiwiYmFzZUtleSIsIl9yZWYxMCIsIl9yZWYxMSIsImlLZXkiLCJpVmFsdWUiLCJfcmVmMTIiLCJfcmVmMTMiLCJmcm9tUXVlcnlTdHJpbmciLCJzZWFyY2giLCJpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSIsIl9rZXkkc3BsaXQiLCJfa2V5JHNwbGl0MiIsIl90b0FycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJyZXN0IiwiX3JlZjE0IiwiX3JlZjE1IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG90Tm90YXRlZEtleSIsIlVybFV0aWxzIiwiX1VSTCIsInNldERhdGEiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiVVJMIiwiSGlzdG9yeVN0cmF0ZWd5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlF1ZXJ5U3RyaW5nUGx1Z2luIiwibWFwcGluZyIsIl90aGlzMjMiLCJ1cmxVdGlscyIsImN1cnJlbnRVcmwiLCJfcmVmMTYiLCJfcmVmMTciLCJDaGlsZENvbXBvbmVudFBsdWdpbiIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJtb2RlbERpcmVjdGl2ZXMiLCJfdGhpczI0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsIkxhenlQbHVnaW4iLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMjUiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMjUkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiX3RoaXMyNiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI3IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyOCIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjE4IiwibmFtZU1hdGNoIiwiX3RoaXMyOSIsIl9yZWYxOSIsIl90aGlzMzAiLCJfcmVmMjAiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMxIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsInF1ZXJ5TWFwcGluZ1ZhbHVlIiwiX3RoaXMzMiIsIl9yZWYyMSIsIl90aGlzMzMiLCJfcmVmMjIiLCJldmVudE5hbWUiLCJfZWxlbWVudCRmaWxlcyIsImZpbmFsVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczM0IiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImNzcmYiLCJldmVudHNUb0Rpc3BhdGNoIiwicmVxdWVzdE1ldGhvZCIsInF1ZXJ5TWFwcGluZyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiY3NyZlZhbHVlIiwic3ZlbHRlQ29udHJvbGxlcnMiLCJpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzIiwicmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCIsImRlZmF1bHRfMSIsIl90aGlzJHByb3BzVmFsdWUiLCJfdGhpcyRpbnRyb1ZhbHVlIiwiaW50cm8iLCJpbnRyb1ZhbHVlIiwiY29tcG9uZW50VmFsdWUiLCJfZGVzdHJveUlmRXhpc3RzIiwicm9vdCIsIiRkZXN0cm95IiwiQm9vbGVhbiIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9