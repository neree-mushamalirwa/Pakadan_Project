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
      var fav = document.querySelectorAll(".favorite_btn");
      var favAll = document.querySelectorAll(".favorite_btn");
      if (fav) {
        fav.forEach(function (element) {
          element.addEventListener("click", function () {
            favAll.forEach(function (el) {
              el.classList.remove("active");
            });
            element.classList.add("active");
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
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

// (66:28) {#each subItem.list as item (item.title)}
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
			span.textContent = `${/*item*/ ctx[12].title}`;
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
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*item*/ ctx[12].num);
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

// (59:12) {#each specialListSubItems as subItem (subItem.header_title)}
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
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[9].list);
	const get_key = ctx => /*item*/ ctx[12].title;

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
			span.textContent = `${/*subItem*/ ctx[9].header_title}`;
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
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[9].list);
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

// (100:12) 
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

// (101:12) 
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
	let t7;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t8;
	let side;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*specialListSubItems*/ ctx[3]);
	const get_key = ctx => /*subItem*/ ctx[9].header_title;

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
			div2.innerHTML = `<div class="item_title"><span>Accès rapides</span></div> <div class="container_items"><ul><a href="/"><li>Accueil</li></a> <a href="/"><li>A propos</li></a> <a href="/"><li>Contact</li></a></ul></div>`;
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t7);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div3, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t8);
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

			if (dirty & /*$$scope*/ 32768) {
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
	let list = [];

	category.forEach(element => {
		list.push({
			title: element.name,
			num: () => setCategory(element.name, element.items)
		});
	});

	console.log(category);

	function setCategory(name, items) {
		$$invalidate(2, goLeft = !goLeft);
		$$invalidate(0, currentTitle = name);
		$$invalidate(1, arrayLinks = []);

		items.forEach(element => {
			arrayLinks.push({ key: element.key, value: element.name });
		});
	}

	let specialListSubItems = [{ header_title: "Catégories", list }];

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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = "/category/categoryItem/" + /*item*/ ctx[6].key);
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

			if (dirty & /*arrayLinks*/ 4 && a_href_value !== (a_href_value = "/category/categoryItem/" + /*item*/ ctx[6].key)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxHQUFHLDZEQUFxQjs7VUFFN0IsV0FBVztrQkFDaEIsUUFBUSxJQUFJLFFBQVE7a0JBQ3BCLE1BQU0sR0FBRyxLQUFLO0VBQ2QsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy8gc3luYyBcXC5zdmVsdGUkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3ZlbHRlL2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3ZlbHRlL2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vL0VkaXQuc3ZlbHRlIiwid2VicGFjazovLy9IZWxsby5zdmVsdGUiLCJ3ZWJwYWNrOi8vL0hvbWVBbmltYXRpb24uc3ZlbHRlIiwid2VicGFjazovLy9OZXcuc3ZlbHRlIiwid2VicGFjazovLy9TaWRlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vRWRpdC5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvRWRpdC5zdmVsdGVcIixcblx0XCIuL0hlbGxvLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9IZWxsby5zdmVsdGVcIixcblx0XCIuL0hvbWVBbmltYXRpb24uc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL0hvbWVBbmltYXRpb24uc3ZlbHRlXCIsXG5cdFwiLi9OZXcuc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL05ldy5zdmVsdGVcIixcblx0XCIuL1NpZGUuc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL1NpZGUuc3ZlbHRlXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnN2ZWx0ZSRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlLm1pbi5jc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC1zdmVsdGUvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8yIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdsaXZlJzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtc3ZlbHRlLS1zdmVsdGUnOiBjb250cm9sbGVyXzEsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMixcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8vIGNvcmUgdmVyc2lvbiArIG5hdmlnYXRpb24sIHBhZ2luYXRpb24gbW9kdWxlczpcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IEF1dG9wbGF5LCBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuLy8gaW1wb3J0IFN3aXBlciBhbmQgbW9kdWxlcyBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvYnVuZGxlJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBjb25uZWN0KCkge1xuXG4gICAgLy8gdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd19zaWRlX2JhclwiKTtcbiAgICB2YXIgYnV0dG9uX2V4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRfc2lkZV9iYXJcIik7XG4gICAgdmFyIGxlZnRfbmF2aWdhdGlvbl9iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRfbmF2aWdhdGlvbl9iYXJcIik7XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgXG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2aWdhdGlvbl9iYXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgaWYgKGJ1dHRvbl9leGl0KSB7XG4gICAgICBidXR0b25fZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2aWdhdGlvbl9iYXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgIGlmIChpbnB1dHMpIHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xuICAgIGlmIChzZWxlY3QpIHtcbiAgICAgIHNlbGVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuICAgIHZhciBhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcbiAgICBpZiAoYXJlYXMpIHtcbiAgICAgIGFyZWFzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgdmFyIGZhdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmF2b3JpdGVfYnRuXCIpO1xuICAgIHZhciBmYXZBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhdm9yaXRlX2J0blwiKTtcbiAgICBpZiAoZmF2KSB7XG4gICAgIFxuICAgICAgZmF2LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBmYXZBbGwuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICBjb25zdCBzd2lwZXJfZXhwbG9yYXRpb24gPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICAgICAgLy8gY29uZmlndXJlIFN3aXBlciB0byB1c2UgbW9kdWxlc1xuICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5XSxcblxuICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gICBsb29wOiB0cnVlLFxuICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gIFxuICAvLyBhdXRvcGxheToge1xuICAvLyAgZGVsYXk6IDIwMDAsIC8vIETDqWZpbGVtZW50IGF1dG9tYXRpcXVlIHRvdXRlcyBsZXMgMS41IHNlY29uZGVzXG4gIC8vICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSwgLy8gQ29udGludWVyIGwnYXV0b3BsYXkgbcOqbWUgc2kgbCd1dGlsaXNhdGV1ciBpbnRlcmFnaXRcbiAgLy8gfSxcbiAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgIGJyZWFrcG9pbnRzOiB7XG4gICAgIFxuICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2MDBweFxuICAgICAyMDA6IHtcbiAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjUsXG4gICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxuICAgICB9LFxuICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2MDBweFxuICAgICA2MDA6IHtcbiAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjUsXG4gICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxuICAgICB9LFxuICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA4NTBweFxuICAgICA4NTA6IHtcbiAgICAgICBzbGlkZXNQZXJWaWV3OiA0LjUsXG4gICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICB9LFxuICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDAwcHhcbiAgICAgMTAwMDoge1xuICAgICAgIHNsaWRlc1BlclZpZXc6IDUuNSxcbiAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgIH0sXG4gIH1cbiAgIH0pO1xuXG4gICAgfSlcblxuXG4gICAgdmFyIGJhcl9hZG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFyX2FkbWluXCIpO1xuICAgIHZhciBiYXJfYWRtaW5fbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXJfYWRtaW5fbW9iaWxlXCIpO1xuICAgIHZhciBvdmVybGF5X2FwcF9tb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfYXBwX21vYmlsZVwiKTtcblxuXG4gICAgdmFyIGxlZnRfbmF2X2Jhcl9hZG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdF9uYXZfYmFyX2FkbWluXCIpO1xuICAgIHZhciB0b3BfbmF2X2Jhcl9hZG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wX25hdl9iYXJfYWRtaW5cIik7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGlmIChiYXJfYWRtaW4pIHtcbiAgICAgIGJhcl9hZG1pbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpPT57XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICB0b3BfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImFkZF90cmFuc2l0aW9uXCIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChiYXJfYWRtaW5fbW9iaWxlKSB7XG4gICAgICBiYXJfYWRtaW5fbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCk9PntcbiAgICAgICAgbGVmdF9uYXZfYmFyX2FkbWluLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93X2JhclwiKVxuICAgICAgICBvdmVybGF5X2FwcF9tb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG92ZXJsYXlfYXBwX21vYmlsZSkge1xuICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCk9PntcbiAgICAgICAgbGVmdF9uYXZfYmFyX2FkbWluLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93X2JhclwiKVxuICAgICAgICBvdmVybGF5X2FwcF9tb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgdmFyIHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXJcIik7XG5cblxuICAgIHZhciBwcm9kdWN0X2NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0X2NhdGVnb3J5IGJ1dHRvblwiKTtcblxuXG4gICAgaWYgKHByb2R1Y3RfY2F0ZWdvcnkpIHtcbiAgICAgIHByb2R1Y3RfY2F0ZWdvcnkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgXG4gICAgdmFyIGZhY3RvcnlfY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhY3RvcnlfY2F0ZWdvcnkgYnV0dG9uXCIpO1xuXG5cbiAgICBpZiAoZmFjdG9yeV9jYXRlZ29yeSkge1xuICAgICAgZmFjdG9yeV9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCAoKSA9PiB7XG4gICAgICAgICAgICBmYWN0b3J5X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgXG5cblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclN2ZWx0ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlJztcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCJcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0IEFscGluZSBmcm9tICdhbHBpbmVqcydcbiBcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmVcbiBcbkFscGluZS5zdGFydCgpXG5cblxucmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vc3ZlbHRlL2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLnN2ZWx0ZSQvKSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuICAgICAgICAgICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGNsb3NpbmcgXCIpXCIgYWZ0ZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfVwiP2ApO1xuICAgIH1cbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVNwYWNlZEFycmF5KHBhcnRzKSB7XG4gICAgY29uc3QgZmluYWxQYXJ0cyA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgZmluYWxQYXJ0cy5wdXNoKC4uLnRyaW1BbGwocGFydCkuc3BsaXQoJyAnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcc10rL2csICcgJykudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcCgocykgPT4gcy5yZXBsYWNlKCddJywgJycpKVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpO1xubGV0IGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50ID0gbmV3IE1hcCgpO1xuY29uc3QgcmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG59O1xuY29uc3QgdW5yZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICBjb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICB9XG4gICAgfSwgNSk7XG59KTtcbmNvbnN0IGZpbmRDb21wb25lbnRzID0gKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59O1xuY29uc3QgZmluZENoaWxkcmVuID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZm9yRWFjaCgoY2hpbGRDb21wb25lbnROYW1lLCBjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG5jb25zdCBmaW5kUGFyZW50ID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWVGb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgZmluZENoaWxkcmVuKGNvbXBvbmVudCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5cbmNsYXNzIFZhbHVlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5nZXQobm9ybWFsaXplZE5hbWUpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICB9XG4gICAgZ2V0RGlydHlQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgfVxuICAgIGdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuICAgIH1cbiAgICBmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZUFsbFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0geyAuLi50aGlzLnBlbmRpbmdQcm9wcywgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSB7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbn1cblxuLy8gYmFzZSBJSUZFIHRvIGRlZmluZSBpZGlvbW9ycGhcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQU5EIE5PVyBJVCBCRUdJTlMuLi5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBsZXQgRU1QVFlfU0VUID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgY29uZmlndXJhdGlvbiB2YWx1ZXMsIHVwZGF0YWJsZSBieSB1c2VycyBub3dcbiAgICAgICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbW9ycGhTdHlsZTogXCJvdXRlckhUTUxcIixcbiAgICAgICAgICAgIGNhbGxiYWNrcyA6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlck5vZGVSZW1vdmVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3AsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdtZXJnZScsXG4gICAgICAgICAgICAgICAgc2hvdWxkUHJlc2VydmU6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1wcmVzZXJ2ZVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZUFwcGVuZDogZnVuY3Rpb24gKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXJlLWFwcGVuZFwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZW1vdmU6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJIZWFkTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIENvcmUgTW9ycGhpbmcgQWxnb3JpdGhtIC0gbW9ycGgsIG1vcnBoTm9ybWFsaXplZENvbnRlbnQsIG1vcnBoT2xkTm9kZVRvLCBtb3JwaENoaWxkcmVuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gbW9ycGgob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnID0ge30pIHtcblxuICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIG9sZE5vZGUgPSBvbGROb2RlLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBwYXJzZUNvbnRlbnQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkQ29udGVudCA9IG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCk7XG5cbiAgICAgICAgICAgIGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjdHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmhlYWQuYmxvY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFkID0gbm9ybWFsaXplZE5ld0NvbnRlbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRIZWFkICYmIG5ld0hlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2VzID0gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZCwgb2xkSGVhZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBoZWFkIHByb21pc2VzIHJlc29sdmUsIGNhbGwgbW9ycGggYWdhaW4sIGlnbm9yaW5nIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwiaW5uZXJIVE1MXCIpIHtcblxuICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCwgc28gd2UgYXJlIG9ubHkgdXBkYXRpbmcgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZpbmQgdGhlIGJlc3QgZWxlbWVudCBtYXRjaCBpbiB0aGUgbmV3IGNvbnRlbnQsIG1vcnBoIHRoYXQsIGFuZCBtZXJnZSBpdHMgc2libGluZ3NcbiAgICAgICAgICAgICAgICAvLyBpbnRvIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGJlc3RNYXRjaCA9IGZpbmRCZXN0Tm9kZU1hdGNoKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3Rhc2ggdGhlIHNpYmxpbmdzIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGluc2VydGVkIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzU2libGluZyA9IGJlc3RNYXRjaD8ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IGJlc3RNYXRjaD8ubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBtb3JwaCBpdFxuICAgICAgICAgICAgICAgIGxldCBtb3JwaGVkTm9kZSA9IG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIGJlc3RNYXRjaCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2FzIGEgYmVzdCBtYXRjaCwgbWVyZ2UgdGhlIHNpYmxpbmdzIGluIHRvbyBhbmQgcmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aG9sZSBidW5jaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBub3RoaW5nIHdhcyBhZGRlZCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJEbyBub3QgdW5kZXJzdGFuZCBob3cgdG8gbW9ycGggc3R5bGUgXCIgKyBjdHgubW9ycGhTdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBwb3NzaWJsZUFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIGN0eFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHBvc3NpYmxlQWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gb2xkTm9kZSByb290IG5vZGUgdG8gbWVyZ2UgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBuZXdDb250ZW50IG5ldyBjb250ZW50IHRvIG1lcmdlXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgZW5kZWQgdXAgaW4gdGhlIERPTVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4Lmlnbm9yZUFjdGl2ZSAmJiBvbGROb2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA7IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblxuICAgICAgICAgICAgICAgIG9sZE5vZGUucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3Q29udGVudCwgb2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5pZ25vcmUpIDsgZWxzZSBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5zdHlsZSAhPT0gXCJtb3JwaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBjb3JlIGFsZ29yaXRobSBmb3IgbWF0Y2hpbmcgdXAgY2hpbGRyZW4uICBUaGUgaWRlYSBpcyB0byB1c2UgaWQgc2V0cyB0byB0cnkgdG8gbWF0Y2ggdXBcbiAgICAgICAgICogbm9kZXMgYXMgZmFpdGhmdWxseSBhcyBwb3NzaWJsZS4gIFdlIGdyZWVkaWx5IG1hdGNoLCB3aGljaCBhbGxvd3MgdXMgdG8ga2VlcCB0aGUgYWxnb3JpdGhtIGZhc3QsIGJ1dFxuICAgICAgICAgKiBieSB1c2luZyBpZCBzZXRzLCB3ZSBhcmUgYWJsZSB0byBiZXR0ZXIgbWF0Y2ggdXAgd2l0aCBjb250ZW50IGRlZXBlciBpbiB0aGUgRE9NLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCYXNpYyBhbGdvcml0aG0gaXMsIGZvciBlYWNoIG5vZGUgaW4gdGhlIG5ldyBjb250ZW50OlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBvbGQgcGFyZW50LCBhcHBlbmQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAqIC0gaWYgdGhlIG5ldyBjb250ZW50IGhhcyBhbiBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnQsIG1vcnBoXG4gICAgICAgICAqIC0gc2VhcmNoIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICogLSBpZiBpZCBzZXQgbWF0Y2ggZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlIHNlYXJjaCBmb3IgYSBcInNvZnRcIiBtYXRjaFxuICAgICAgICAgKiAtIGlmIGEgc29mdCBtYXRjaCBpcyBmb3VuZCwgbW9ycGhcbiAgICAgICAgICogLSBvdGhlcndpc2UsIHByZXBlbmQgdGhlIG5ldyBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHR3byBzZWFyY2ggYWxnb3JpdGhtcyB0ZXJtaW5hdGUgaWYgY29tcGV0aW5nIG5vZGUgbWF0Y2hlcyBhcHBlYXIgdG8gb3V0d2VpZ2ggd2hhdCBjYW4gYmUgYWNoaWV2ZWRcbiAgICAgICAgICogd2l0aCB0aGUgY3VycmVudCBub2RlLiAgU2VlIGZpbmRJZFNldE1hdGNoKCkgYW5kIGZpbmRTb2Z0TWF0Y2goKSBmb3IgZGV0YWlscy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdQYXJlbnQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnQgfSBvbGRQYXJlbnQgdGhlIG9sZCBjb250ZW50IHRoYXQgd2UgYXJlIG1lcmdpbmcgdGhlIG5ldyBjb250ZW50IGludG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihuZXdQYXJlbnQsIG9sZFBhcmVudCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBpbnNlcnRpb25Qb2ludCA9IG9sZFBhcmVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgICAgICAgICAvLyBydW4gdGhyb3VnaCBhbGwgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAobmV4dE5ld0NoaWxkKSB7XG5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZCA9IG5leHROZXdDaGlsZDtcbiAgICAgICAgICAgICAgICBuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBleGl0aW5nIHBhcmVudCdzIGNoaWxkcmVuLCBqdXN0IGFwcGVuZFxuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBub2RlIGhhcyBhbiBpZCBzZXQgbWF0Y2ggdGhlbiBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKGluc2VydGlvblBvaW50LCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBzZWFyY2ggZm9yd2FyZCBpbiB0aGUgZXhpc3Rpbmcgb2xkIGNoaWxkcmVuIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICAgICAgICBsZXQgaWRTZXRNYXRjaCA9IGZpbmRJZFNldE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmb3VuZCBhIHBvdGVudGlhbCBtYXRjaCwgcmVtb3ZlIHRoZSBub2RlcyB1bnRpbCB0aGF0IHBvaW50IGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpZFNldE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vIGlkIHNldCBtYXRjaCBmb3VuZCwgc28gc2NhbiBmb3J3YXJkIGZvciBhIHNvZnQgbWF0Y2ggZm9yIHRoZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICAgICAgICBsZXQgc29mdE1hdGNoID0gZmluZFNvZnRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlLCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChzb2Z0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFiYW5kb24gYWxsIGhvcGUgb2YgbW9ycGhpbmcsIGp1c3QgaW5zZXJ0IHRoZSBuZXcgY2hpbGQgYmVmb3JlIHRoZSBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICAgICAgICAvLyBhbmQgbW92ZSBvblxuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbnkgcmVtYWluaW5nIG9sZCBub2RlcyB0aGF0IGRpZG4ndCBtYXRjaCB1cCB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAoaW5zZXJ0aW9uUG9pbnQgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQXR0cmlidXRlIFN5bmNpbmcgQ29kZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBhdHRyIHtTdHJpbmd9IHRoZSBhdHRyaWJ1dGUgdG8gYmUgbXV0YXRlZFxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgKiBAcGFyYW0gdXBkYXRlVHlwZSB7KFwidXBkYXRlXCJ8XCJyZW1vdmVcIil9XG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBzaG91bGQgYmUgaWdub3JlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUoYXR0ciwgdG8sIHVwZGF0ZVR5cGUsIGN0eCkge1xuICAgICAgICAgICAgaWYoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgdG8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHN5bmNzIGEgZ2l2ZW4gbm9kZSB3aXRoIGFub3RoZXIgbm9kZSwgY29weWluZyBvdmVyIGFsbCBhdHRyaWJ1dGVzIGFuZFxuICAgICAgICAgKiBpbm5lciBlbGVtZW50IHN0YXRlIGZyb20gdGhlICdmcm9tJyBub2RlIHRvIHRoZSAndG8nIG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBmcm9tIHRoZSBlbGVtZW50IHRvIGNvcHkgYXR0cmlidXRlcyAmIHN0YXRlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0byB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzeW5jTm9kZUZyb20oZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXG4gICAgICAgICAgICAvLyBpZiBpcyBhbiBlbGVtZW50IHR5cGUsIHN5bmMgdGhlIGF0dHJpYnV0ZXMgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIG5ldyBub2RlIGludG8gdGhlIG5ldyBub2RlXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMSAvKiBlbGVtZW50IHR5cGUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZXMgPSB0by5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZnJvbUF0dHJpYnV0ZSBvZiBmcm9tQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG8uZ2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSkgIT09IGZyb21BdHRyaWJ1dGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIGZyb21BdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgYmFja3dhcmRzIHRvIGF2b2lkIHNraXBwaW5nIG92ZXIgaXRlbXMgd2hlbiBhIGRlbGV0ZSBvY2N1cnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdG9BdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlID0gdG9BdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzeW5jIHRleHQgbm9kZXNcbiAgICAgICAgICAgIGlmICh0eXBlID09PSA4IC8qIGNvbW1lbnQgKi8gfHwgdHlwZSA9PT0gMyAvKiB0ZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvLm5vZGVWYWx1ZSAhPT0gZnJvbS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8ubm9kZVZhbHVlID0gZnJvbS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHRvLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgLy8gc3luYyBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBzeW5jSW5wdXRWYWx1ZShmcm9tLCB0bywgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0gIT09IHRvW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgJ3VwZGF0ZScsIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bYXR0cmlidXRlTmFtZV0gPSBmcm9tW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICdyZW1vdmUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTkI6IG1hbnkgYm90aGFucyBkaWVkIHRvIGJyaW5nIHVzIGluZm9ybWF0aW9uOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL3BhdHJpY2stc3RlZWxlLWlkZW0vbW9ycGhkb20vYmxvYi9tYXN0ZXIvc3JjL3NwZWNpYWxFbEhhbmRsZXJzLmpzXG4gICAgICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vY2hvb2pzL25hbm9tb3JwaC9ibG9iL21hc3Rlci9saWIvbW9ycGguanNMMTEzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmcm9tIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0byBzeW5jIHRoZSBpbnB1dCB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgZnJvbS50eXBlICE9PSAnZmlsZScpIHtcblxuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBzeW5jIGJvb2xlYW4gYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnY2hlY2tlZCcsIGN0eCk7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdkaXNhYmxlZCcsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyb20uaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdzZWxlY3RlZCcsIGN0eCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRvIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gdGhlIEhFQUQgdGFnIGNhbiBiZSBoYW5kbGVkIHNwZWNpYWxseSwgZWl0aGVyIHcvIGEgJ21lcmdlJyBvciAnYXBwZW5kJyBzdHlsZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWRUYWcsIGN1cnJlbnRIZWFkLCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHByZXNlcnZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IG5vZGVzVG9BcHBlbmQgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIHB1dCBhbGwgbmV3IGhlYWQgZWxlbWVudHMgaW50byBhIE1hcCwgYnkgdGhlaXIgb3V0ZXJIVE1MXG4gICAgICAgICAgICBsZXQgc3JjVG9OZXdIZWFkTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc3JjVG9OZXdIZWFkTm9kZXMuc2V0KG5ld0hlYWRDaGlsZC5vdXRlckhUTUwsIG5ld0hlYWRDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciBlYWNoIGVsdCBpbiB0aGUgY3VycmVudCBoZWFkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBoZWFkIGVsZW1lbnQgaXMgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIGxldCBpbk5ld0NvbnRlbnQgPSBzcmNUb05ld0hlYWROb2Rlcy5oYXMoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ByZXNlcnZlZCA9IGN0eC5oZWFkLnNob3VsZFByZXNlcnZlKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5OZXdDb250ZW50IHx8IGlzUHJlc2VydmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCB2ZXJzaW9uIGFuZCBsZXQgdGhlIG5ldyB2ZXJzaW9uIHJlcGxhY2UgaXQgYW5kIHJlLWV4ZWN1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgYW5kIHNob3VsZCBub3QgYmUgcmUtYXBwZW5kZWQsIHNvIHJlbW92ZSBpdCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV3IGNvbnRlbnQgbWFwLCBwcmVzZXJ2aW5nIGl0IGluIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLmRlbGV0ZShjdXJyZW50SGVhZEVsdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRNZXJnZVN0eWxlID09PSBcImFwcGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIGFuZCB0aGlzIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBpZiBhbmQgb25seSBpZiBpdCBpcyBtYXJrZWQgZm9yIHJlLWFwcGVuZCBkbyB3ZSBkbyBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVBcHBlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBtZXJnZSwgd2UgcmVtb3ZlIHRoaXMgY29udGVudCBzaW5jZSBpdCBpcyBub3QgaW4gdGhlIG5ldyBoZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmhlYWQuc2hvdWxkUmVtb3ZlKGN1cnJlbnRIZWFkRWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXNoIHRoZSByZW1haW5pbmcgbmV3IGhlYWQgZWxlbWVudHMgaW4gdGhlIE1hcCBpbnRvIHRoZVxuICAgICAgICAgICAgLy8gbm9kZXMgdG8gYXBwZW5kIHRvIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFbHQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChuZXdOb2RlLm91dGVySFRNTCkuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3RWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsdC5ocmVmIHx8IG5ld0VsdC5zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHJlbW92ZWQgZWxlbWVudHMsIGFmdGVyIHdlIGhhdmUgYXBwZW5kZWQgdGhlIG5ldyBlbGVtZW50cyB0byBhdm9pZFxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBuZXR3b3JrIHJlcXVlc3RzIGZvciB0aGluZ3MgbGlrZSBzdHlsZSBzaGVldHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge2FkZGVkOiBhZGRlZCwga2VwdDogcHJlc2VydmVkLCByZW1vdmVkOiByZW1vdmVkfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub09wKCkge1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICBEZWVwIG1lcmdlcyB0aGUgY29uZmlnIG9iamVjdCBhbmQgdGhlIElkaW9tb3JvcGguZGVmYXVsdHMgb2JqZWN0IHRvXG4gICAgICAgICAgcHJvZHVjZSBhIGZpbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuICAgICAgICAgICAgbGV0IGZpbmFsQ29uZmlnID0ge307XG4gICAgICAgICAgICAvLyBjb3B5IHRvcCBsZXZlbCBzdHVmZiBpbnRvIGZpbmFsIGNvbmZpZ1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgZGVmYXVsdHMpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgY29uZmlnKTtcblxuICAgICAgICAgICAgLy8gY29weSBjYWxsYmFja3MgaW50byBmaW5hbCBjb25maWcgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgY2FsbGJhY2tzKVxuICAgICAgICAgICAgZmluYWxDb25maWcuY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgZGVmYXVsdHMuY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblxuICAgICAgICAgICAgLy8gY29weSBoZWFkIGNvbmZpZyBpbnRvIGZpbmFsIGNvbmZpZyAgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgaGVhZClcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmhlYWQgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgZGVmYXVsdHMuaGVhZCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbENvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1vcnBoQ29udGV4dChvbGROb2RlLCBuZXdDb250ZW50LCBjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvbGROb2RlLFxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQ6IG5ld0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbW9ycGhTdHlsZTogY29uZmlnLm1vcnBoU3R5bGUsXG4gICAgICAgICAgICAgICAgaWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZVZhbHVlOiBjb25maWcuaWdub3JlQWN0aXZlVmFsdWUsXG4gICAgICAgICAgICAgICAgaWRNYXA6IGNyZWF0ZUlkTWFwKG9sZE5vZGUsIG5ld0NvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRlYWRJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG4gICAgICAgICAgICAgICAgaGVhZDogY29uZmlnLmhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRTZXRNYXRjaChub2RlMSwgbm9kZTIsIGN0eCkge1xuICAgICAgICAgICAgaWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlMS5pZCAhPT0gXCJcIiAmJiBub2RlMS5pZCA9PT0gbm9kZTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpID4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFydEluY2x1c2l2ZSAhPT0gZW5kRXhjbHVzaXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmNsdXNpdmUgPSBzdGFydEluY2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuICAgICAgICAgICAgcmV0dXJuIGVuZEV4Y2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gU2NhbnMgZm9yd2FyZCBmcm9tIHRoZSBpbnNlcnRpb25Qb2ludCBpbiB0aGUgb2xkIHBhcmVudCBsb29raW5nIGZvciBhIHBvdGVudGlhbCBpZCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIGlkIG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHRoZSBudW1iZXIgb2YgcG90ZW50aWFsIGlkIG1hdGNoZXMgd2UgYXJlIGRpc2NhcmRpbmcgaXMgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAgICAvLyBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBmb3IgdGhlIG5ldyBjaGlsZFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRJZFNldE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgLy8gbWF4IGlkIG1hdGNoZXMgd2UgYXJlIHdpbGxpbmcgdG8gZGlzY2FyZCBpbiBvdXIgc2VhcmNoXG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID0gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5ld0NoaWxkLCBvbGRQYXJlbnQpO1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsTWF0Y2ggPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBvbmx5IHNlYXJjaCBmb3J3YXJkIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2hcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBwb3NzaWJpbGl0eSBvZiBhbiBpZCBtYXRjaCwgc2NhbiBmb3J3YXJkXG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgcG90ZW50aWFsIGlkIG1hdGNoIGNvdW50IHdlIGFyZSBkaXNjYXJkaW5nICh0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhpcyB0byBtYWtlIGl0IGxpa2VseVxuICAgICAgICAgICAgICAgIC8vIHdvcnRoIGl0KVxuICAgICAgICAgICAgICAgIGxldCBvdGhlck1hdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBpZCBtYXRjaCwgcmV0dXJuIHRoZSBjdXJyZW50IHBvdGVudGlhbCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxNYXRjaCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZXIgdGhlIG90aGVyIHBvdGVudGlhbCBtYXRjaGVzIG9mIHRoaXMgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJNYXRjaENvdW50ICs9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxNYXRjaCwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlck1hdGNoQ291bnQgPiBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgbW9yZSBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBpbiBfb3RoZXJfIGNvbnRlbnQsIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgaGF2ZSBhIGdvb2QgY2FuZGlkYXRlIGZvciBhbiBpZCBtYXRjaCwgc28gcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgc29mdCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2ggZm9yIHRoZSBuZXcgY2hpbGQgT1JcbiAgICAgICAgLy8gaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBpbiB0aGUgb2xkIHBhcmVudHMgY2hpbGRyZW4gT1IgaWYgd2UgZmluZCB0d29cbiAgICAgICAgLy8gcG90ZW50aWFsIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIG5leHQgdHdvIHBpZWNlcyBvZiBuZXcgY29udGVudFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsU29mdE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGxldCBzaWJsaW5nU29mdE1hdGNoQ291bnQgPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgcG90ZW50aWFsIHNvZnQgbWF0Y2ggaGFzIGEgcG90ZW50aWFsIGlkIHNldCBtYXRjaCB3aXRoIHRoZSByZW1haW5pbmcgbmV3XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgc28gYmFpbCBvdXQgb2YgbG9va2luZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgc29mdCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IG5vZGUsIHJldHVybiBpdFxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXh0U2libGluZywgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBuZXcgbm9kZSBoYXMgYSBzb2Z0IG1hdGNoIHdpdGggdGhpcyBub2RlLCBzb1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50IG9mIGZ1dHVyZSBzb2Z0IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1NvZnRNYXRjaENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBmdXR1cmUgc29mdCBtYXRjaGVzLCBiYWlsIHRvIGFsbG93IHRoZSBzaWJsaW5ncyB0byBzb2Z0IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgY29uc3VtZSBmdXR1cmUgc29mdCBtYXRjaGVzIGZvciB0aGUgc2FrZSBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nU29mdE1hdGNoQ291bnQgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhZHZhbmNlZCB0byB0aGUgbmV4dCBvbGQgY29udGVudCBjaGlsZFxuICAgICAgICAgICAgICAgIHBvdGVudGlhbFNvZnRNYXRjaCA9IHBvdGVudGlhbFNvZnRNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgc3ZncyB0byBhdm9pZCBmYWxzZS1wb3NpdGl2ZSBtYXRjaGVzIG9uIGhlYWQsIGV0Yy5cbiAgICAgICAgICAgIGxldCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkID0gbmV3Q29udGVudC5yZXBsYWNlKC88c3ZnKFxcc1tePl0qPnw+KShbXFxzXFxTXSo/KTxcXC9zdmc+L2dpbSwgJycpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbmV3Q29udGVudCBjb250YWlucyBhIGh0bWwsIGhlYWQgb3IgYm9keSB0YWcsIHdlIGNhbiBzaW1wbHkgcGFyc2UgaXQgdy9vIHdyYXBwaW5nXG4gICAgICAgICAgICBpZiAoY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2h0bWw+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2hlYWQ+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2JvZHk+LykpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobmV3Q29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBmdWxsIEhUTUwgZG9jdW1lbnQsIHJldHVybiB0aGUgZG9jdW1lbnQgaXRzZWxmIGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcmV0dXJuIHRoZSBodG1sIGVsZW1lbnQgYXMgdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWxFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXJ0aWFsIEhUTUwsIHdyYXAgaXQgaW4gYSB0ZW1wbGF0ZSB0YWcgdG8gcHJvdmlkZSBhIHBhcmVudCBlbGVtZW50IGFuZCBhbHNvIHRvIGhlbHBcbiAgICAgICAgICAgICAgICAvLyBkZWFsIHdpdGggdG91Y2h5IHRhZ3MgbGlrZSB0ciwgdGJvZHksIGV0Yy5cbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFwiPGJvZHk+PHRlbXBsYXRlPlwiICsgbmV3Q29udGVudCArIFwiPC90ZW1wbGF0ZT48L2JvZHk+XCIsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2VEb2MuYm9keS5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBVbm5lY2Vzc2FyeUxvY2FsVmFyaWFibGVKU1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHRlbXBsYXRlIHRhZyBjcmVhdGVkIGJ5IGlkaW9tb3JwaCBwYXJzaW5nIGNhbiBzZXJ2ZSBhcyBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgc2luZ2xlIG5vZGUgaXMgYWRkZWQgYXMgYSBjaGlsZCB0byBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsIG5vZGVzIGluIHRoZSBhcnJheSBvciBIVE1MRWxlbWVudCBjb2xsZWN0aW9uIGFyZSBjb25zb2xpZGF0ZWQgdW5kZXJcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBkdW1teSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgWy4uLm5ld0NvbnRlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChlbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRTaWJsaW5ncyhwcmV2aW91c1NpYmxpbmcsIG1vcnBoZWROb2RlLCBuZXh0U2libGluZykge1xuICAgICAgICAgICAgbGV0IHN0YWNrID0gW107XG4gICAgICAgICAgICBsZXQgYWRkZWQgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChwcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobm9kZSk7IC8vIHB1c2ggYWRkZWQgcHJlY2VkaW5nIHNpYmxpbmdzIG9uIGluIG9yZGVyIGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRlZC5wdXNoKG1vcnBoZWROb2RlKTtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXh0U2libGluZyk7IC8vIGhlcmUgd2UgYXJlIGdvaW5nIGluIG9yZGVyLCBzbyBwdXNoIG9uIGFzIHdlIHNjYW4sIHJhdGhlciB0aGFuIGFkZFxuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdE5vZGVNYXRjaChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbmV3Q29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdTY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gbmV3U2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVzdEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCkge1xuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG4gICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZCh0ZW1wTm9kZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRlbXBOb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHRlbXBOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gSUQgU2V0IEZ1bmN0aW9uc1xuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gIWN0eC5kZWFkSWRzLmhhcyhpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KHRhcmdldE5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIHJldHVybiBpZFNldC5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBub2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIHtcbiAgICAgICAgICAgICAgICBjdHguZGVhZElkcy5hZGQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuICAgICAgICAgICAgbGV0IHNvdXJjZVNldCA9IGN0eC5pZE1hcC5nZXQobm9kZTEpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGxldCBtYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gYSBwb3RlbnRpYWwgbWF0Y2ggaXMgYW4gaWQgaW4gdGhlIHNvdXJjZSBhbmQgcG90ZW50aWFsSWRzU2V0LCBidXRcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGhhcyBub3QgYWxyZWFkeSBiZWVuIG1lcmdlZCBpbnRvIHRoZSBET01cbiAgICAgICAgICAgICAgICBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpIHtcbiAgICAgICAgICAgICAgICAgICAgKyttYXRjaENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRjaENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm90dG9tIHVwIGFsZ29yaXRobSB0aGF0IGZpbmRzIGFsbCBlbGVtZW50cyB3aXRoIGlkcyBpbnNpZGUgb2YgdGhlIG5vZGVcbiAgICAgICAgICogYXJndW1lbnQgYW5kIHBvcHVsYXRlcyBpZCBzZXRzIGZvciB0aG9zZSBub2RlcyBhbmQgYWxsIHRoZWlyIHBhcmVudHMsIGdlbmVyYXRpbmdcbiAgICAgICAgICogYSBzZXQgb2YgaWRzIGNvbnRhaW5lZCB3aXRoaW4gYWxsIG5vZGVzIGZvciB0aGUgZW50aXJlIGhpZXJhcmNoeSBpbiB0aGUgRE9NXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICAgICAgICAgKiBAcGFyYW0ge01hcDxOb2RlLCBTZXQ8U3RyaW5nPj59IGlkTWFwXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuICAgICAgICAgICAgbGV0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBmaW5kIGFsbCBlbGVtZW50cyB3aXRoIGFuIGlkIHByb3BlcnR5XG4gICAgICAgICAgICBsZXQgaWRFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgaWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWx0O1xuICAgICAgICAgICAgICAgIC8vIHdhbGsgdXAgdGhlIHBhcmVudCBoaWVyYXJjaHkgb2YgdGhhdCBlbGVtZW50LCBhZGRpbmcgdGhlIGlkXG4gICAgICAgICAgICAgICAgLy8gb2YgZWxlbWVudCB0byB0aGUgcGFyZW50J3MgaWQgc2V0XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG5vZGVQYXJlbnQgJiYgY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZFNldCA9IGlkTWFwLmdldChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGlkIHNldCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGluc2VydCBpdCBpbiB0aGUgIG1hcFxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRTZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcC5zZXQoY3VycmVudCwgaWRTZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlkU2V0LmFkZChlbHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvbXB1dGVzIGEgbWFwIG9mIG5vZGVzIHRvIGFsbCBpZHMgY29udGFpbmVkIHdpdGhpbiB0aGF0IG5vZGUgKGluY2x1c2l2ZSBvZiB0aGVcbiAgICAgICAgICogbm9kZSkuICBUaGlzIG1hcCBjYW4gYmUgdXNlZCB0byBhc2sgaWYgdHdvIG5vZGVzIGhhdmUgaW50ZXJzZWN0aW5nIHNldHMgb2YgaWRzLCB3aGljaCBhbGxvd3NcbiAgICAgICAgICogZm9yIGEgbG9vc2VyIGRlZmluaXRpb24gb2YgXCJtYXRjaGluZ1wiIHRoYW4gdHJhZGl0aW9uIGlkIG1hdGNoaW5nLCBhbmQgYWxsb3dzIGNoaWxkIG5vZGVzXG4gICAgICAgICAqIHRvIGNvbnRyaWJ1dGUgdG8gYSBwYXJlbnQgbm9kZXMgbWF0Y2hpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb2xkQ29udGVudCAgdGhlIG9sZCBjb250ZW50IHRoYXQgd2lsbCBiZSBtb3JwaGVkXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3Q29udGVudCAgdGhlIG5ldyBjb250ZW50IHRvIG1vcnBoIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBhIG1hcCBvZiBub2RlcyB0byBpZCBzZXRzIGZvciB0aGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGxldCBpZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5ld0NvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBpZE1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gVGhpcyBpcyB3aGF0IGVuZHMgdXAgYmVjb21pbmcgdGhlIElkaW9tb3JwaCBnbG9iYWwgb2JqZWN0XG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcnBoLFxuICAgICAgICAgICAgZGVmYXVsdHNcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgc3luY0F0dHJpYnV0ZXMgPSAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZnJvbUVsLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIHRvRWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBleHRlcm5hbE11dGF0aW9uVHJhY2tlcikge1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG4gICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9yaWdpbmFsIGVsZW1lbnQgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlci5wdXNoKGlkKTtcbiAgICAgICAgaWYgKCFyZXBsYWNlV2l0aENsb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcbiAgICAgICAgb2xkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRPbGRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZE9sZEVsZW1lbnQ7XG4gICAgfTtcbiAgICByb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxpdmUtcHJlc2VydmVdJykuZm9yRWFjaCgobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IG5ld0VsZW1lbnQuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEtbGl2ZS1wcmVzZXJ2ZSBhdHRyaWJ1dGUgcmVxdWlyZXMgYW4gaWQgYXR0cmlidXRlIHRvIGJlIHNldCBvbiB0aGUgZWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQgd2l0aCBpZCBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgb3JpZ2luYWwgSFRNTGApO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxpdmUtcHJlc2VydmUnKTtcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuc2V0KGlkLCBvbGRFbGVtZW50KTtcbiAgICAgICAgc3luY0F0dHJpYnV0ZXMobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgSWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMoZnJvbUVsLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmlkID09PSB0b0VsLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRnJvbUVsID0gbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKGZyb21FbC5pZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvbmVkRnJvbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBJZGlvbW9ycGgubW9ycGgoY2xvbmVkRnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5BbHBpbmUubW9ycGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIG1vcnBoIGZ1bmN0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBBbHBpbmUuanMgTW9ycGggcGx1Z2luIGlzIGluc3RhbGxlZCBhbmQgbG9hZGVkLCBzZWUgaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy9tb3JwaCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbCAhPT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDaGFuZ2VzID0gZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuZ2V0Q2hhbmdlZEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdPUFRJT04nICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FbCA9IGNsb25lSFRNTEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZFRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSB8fCAoZnJvbUVsLmlkICYmIGZyb21FbC5pZCAhPT0gdG9FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2tpcC1tb3JwaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhub2RlLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAobm9kZS5pZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKG9yaWdpbmFsRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnRzLicpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuY2xhc3MgVW5zeW5jZWRJbnB1dHNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBldmVudDogJ2lucHV0JywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlciA9IG1vZGVsRWxlbWVudFJlc29sdmVyO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzID0gbmV3IFVuc3luY2VkSW5wdXRDb250YWluZXIoKTtcbiAgICB9XG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQodGFyZ2V0KTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyLmdldE1vZGVsTmFtZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5hZGQoZWxlbWVudCwgbW9kZWxOYW1lKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzLmFsbFVuc3luY2VkSW5wdXRzKCk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgfVxufVxuY2xhc3MgVW5zeW5jZWRJbnB1dENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGFkZChlbGVtZW50LCBtb2RlbE5hbWUgPSBudWxsKSB7XG4gICAgICAgIGlmIChtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFsbFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5kZXhPZihtb2RlbE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzO1xuICAgIH1cbn1cblxuY2xhc3MgSG9va01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soLi4uYXJncykpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIGdldEJvZHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBhd2FpdCB0aGlzLnJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhbmdpbmdJdGVtc1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHNldEl0ZW0oaXRlbU5hbWUsIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogb3JpZ2luYWxSZWNvcmQub3JpZ2luYWwsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBwcmV2aW91c1ZhbHVlLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGl0ZW1OYW1lLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgbGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHRydWVPcmlnaW5hbFZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yZW1vdmVkSXRlbXMua2V5cygpKTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgYXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5yZW1vdmVkQ2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuaXNFbXB0eSgpICYmXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuaXNFbXB0eSgpKTtcbiAgICB9XG59XG5cbmNsYXNzIEV4dGVybmFsTXV0YXRpb25UcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSA/IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KSA6IG51bGw7XG4gICAgfVxuICAgIGdldEFkZGVkRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHM7XG4gICAgfVxuICAgIHdhc0VsZW1lbnRBZGRlZChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG4gICAgfVxuICAgIGhhbmRsZVBlbmRpbmdDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm9uTXV0YXRpb25zKHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNsYXNzTGlzdCk7XG4gICAgICAgIGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBhZGRlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiBwcmV2aW91c1N0eWxlc1trZXldID09PSB1bmRlZmluZWQgfHwgcHJldmlvdXNTdHlsZXNba2V5XSAhPT0gbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBhZGRlZE9yQ2hhbmdlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkU3R5bGUoc3R5bGUsIG5ld1N0eWxlc1tzdHlsZV0sIHByZXZpb3VzU3R5bGVzW3N0eWxlXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICB9XG4gICAgZXh0cmFjdFN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVzLnNwbGl0KCc7JykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuICAgIGlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09ICdGT05UJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJ3ZlcnRpY2FsLWFsaWduOiBpbmhlcml0Oyc7XG4gICAgfVxufVxuXG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHByb3BzLCBsaXN0ZW5lcnMsIGlkLCBiYWNrZW5kLCBlbGVtZW50RHJpdmVyKSB7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGxpc3RlbmVyLmV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lci5ldmVudCwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxpc3RlbmVyLmV2ZW50KT8ucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgYWRkUGx1Z2luKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdW5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRVcChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpbmRDb21wb25lbnRzKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUdXJib0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgVHVyYm8gIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICAgIH1cbiAgICB0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHBlcmZvcm1SZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG4gICAgICAgICAgICBjaGlsZHJlbjoge30sXG4gICAgICAgICAgICB1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuICAgICAgICAgICAgZmlsZXM6IGZpbGVzVG9TZW5kLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXF1ZXN0OnN0YXJ0ZWQnLCByZXF1ZXN0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdChyZXF1ZXN0Q29uZmlnLnByb3BzLCByZXF1ZXN0Q29uZmlnLmFjdGlvbnMsIHJlcXVlc3RDb25maWcudXBkYXRlZCwgcmVxdWVzdENvbmZpZy5jaGlsZHJlbiwgcmVxdWVzdENvbmZpZy51cGRhdGVkUHJvcHNGcm9tUGFyZW50LCByZXF1ZXN0Q29uZmlnLmZpbGVzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmICghaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpPy5pbmNsdWRlcygnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnKSAmJlxuICAgICAgICAgICAgICAgICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1cmJvRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RpZmllZE1vZGVsVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcbiAgICAgICAgICAgIGlmICghbmV3RWxlbWVudC5tYXRjaGVzKCdbZGF0YS1jb250cm9sbGVyfj1saXZlXScpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpdmUgY29tcG9uZW50IHRlbXBsYXRlIG11c3QgY29udGFpbiBhIHNpbmdsZSByb290IGNvbnRyb2xsZXIgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgJyR7dGhpcy5uYW1lfScgY29tcG9uZW50IEhUTUwgcmV0dXJuZWQ6YCwge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcygpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgICAgICBjb25zdCBldmVudHNUb0VtaXQgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0RXZlbnRzVG9FbWl0KCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKTtcbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID09PSAnZ2V0JyAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KHByb3BzKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzJywgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3VwZGF0ZWQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzRnJvbVBhcmVudCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbicsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHByb3BzLCB1cGRhdGVkIH07XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnByb3BzRnJvbVBhcmVudCA9IHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbiAmJiAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QnVpbGRlciA9IG5ldyBSZXF1ZXN0QnVpbGRlcih1cmwsIG1ldGhvZCwgY3NyZlRva2VuKTtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCBPYmplY3Qua2V5cyh1cGRhdGVkKSk7XG4gICAgfVxufVxuXG5jbGFzcyBTdGltdWx1c0VsZW1lbnREcml2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0Rpc3BhdGNoVmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgdHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpID8/ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJlxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHtmaW5hbEFjdGlvbn1cImApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICB9XG4gICAgZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGluZ0VsZW1lbnRzID0gWy4uLkFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpKV07XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gW2VsZW1lbnQsIC4uLm1hdGNoaW5nRWxlbWVudHNdO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuICAgIH1cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZXZlcnQnO1xuICAgIH1cbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnO1xuICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRBdHRyaWJ1dGUnIDogJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnYWRkQXR0cmlidXRlJztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFnZVVubG9hZGluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOnN0YXJ0ZWQnLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdEaXJlY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICckcmVuZGVyJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlRW1wdHkodmFsdWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09ICcnIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgIGlmICghaXNWYWx1ZUVtcHR5KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBjb25zdCBidWlsZFF1ZXJ5U3RyaW5nRW50cmllcyA9IChkYXRhLCBlbnRyaWVzID0ge30sIGJhc2VLZXkgPSAnJykgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaUtleSwgaVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYmFzZUtleSA9PT0gJycgPyBpS2V5IDogYCR7YmFzZUtleX1bJHtpS2V5fV1gO1xuICAgICAgICAgICAgaWYgKCcnID09PSBiYXNlS2V5ICYmIGlzVmFsdWVFbXB0eShpVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChudWxsICE9PSBpVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IHsgLi4uZW50cmllcywgLi4uYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoaVZhbHVlLCBlbnRyaWVzLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQoaVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJTJDL2csICcsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfTtcbiAgICBjb25zdCBlbnRyaWVzID0gYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoZGF0YSk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApXG4gICAgICAgIC5qb2luKCcmJyk7XG59XG5mdW5jdGlvbiBmcm9tUXVlcnlTdHJpbmcoc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nLCAnJyk7XG4gICAgaWYgKHNlYXJjaCA9PT0gJycpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCBpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSA9IChrZXksIHZhbHVlLCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCAuLi5yZXN0XSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbZmlyc3RdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGFbZmlyc3RdID0gTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChzZWNvbmQpKSA/IHt9IDogW107XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoW3NlY29uZCwgLi4ucmVzdF0uam9pbignLicpLCB2YWx1ZSwgZGF0YVtmaXJzdF0pO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IHNlYXJjaC5zcGxpdCgnJicpLm1hcCgoaSkgPT4gaS5zcGxpdCgnPScpKTtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCdbJykpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCcnID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBkb3ROb3RhdGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcWy9nLCAnLicpLnJlcGxhY2UoL10vZywgJycpO1xuICAgICAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoZG90Tm90YXRlZEtleSwgdmFsdWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5jbGFzcyBVcmxVdGlscyBleHRlbmRzIFVSTCB7XG4gICAgaGFzKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpW2tleV07XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVF1ZXJ5U3RyaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdG9RdWVyeVN0cmluZyhkYXRhKTtcbiAgICB9XG59XG5jbGFzcyBIaXN0b3J5U3RyYXRlZ3kge1xuICAgIHN0YXRpYyByZXBsYWNlKHVybCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5LnN0YXRlLCAnJywgdXJsKTtcbiAgICB9XG59XG5cbmNsYXNzIFF1ZXJ5U3RyaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBwaW5nKSB7XG4gICAgICAgIHRoaXMubWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsIChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybFV0aWxzID0gbmV3IFVybFV0aWxzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB1cmxVdGlscy50b1N0cmluZygpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tYXBwaW5nKS5mb3JFYWNoKChbcHJvcCwgbWFwcGluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChwcm9wKTtcbiAgICAgICAgICAgICAgICB1cmxVdGlscy5zZXQobWFwcGluZy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXJsICE9PSB1cmxVdGlscy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeVN0cmF0ZWd5LnJlcGxhY2UodXJsVXRpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyh0aGlzLmNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZXF1ZXN0OnN0YXJ0ZWQnLCAocmVxdWVzdERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICBub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAoIXBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBMYXp5UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoJ2xhenknICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnbG9hZGluZycpPy52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRPYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdmU6YXBwZWFyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIH1cbn1cblxuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aW9uIG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuICAgIH1cbiAgICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgZGVsZXRlIGV2ZW50QXJncy5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IExhenlQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUXVlcnlTdHJpbmdQbHVnaW4odGhpcy5xdWVyeU1hcHBpbmdWYWx1ZSksXG4gICAgICAgICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW4odGhpcy5jb21wb25lbnQpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZXZlbnRzVG9FbWl0OiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRGlzcGF0Y2g6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgcmVxdWVzdE1ldGhvZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdwb3N0JyB9LFxuICAgIHF1ZXJ5TWFwcGluZzogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IHt9IH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5ID0gKGNvbnRyb2xsZXIpID0+IG5ldyBCYWNrZW5kKGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlLCBjb250cm9sbGVyLmNzcmZWYWx1ZSk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ZlbHRlQ29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzdmVsdGVDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHN2ZWx0ZUNvbnRyb2xsZXJzW2AuLyR7bmFtZX0uc3ZlbHRlYF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdmVsdGUgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/PyB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW50cm8gPSB0aGlzLmludHJvVmFsdWUgPz8gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGludHJvOiB0aGlzLmludHJvLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QgPSB0aGlzLmFwcDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcpO1xuICAgIH1cbiAgICBfZGVzdHJveUlmRXhpc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQucm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbnRybzogdGhpcy5pbnRybyxcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ3N2ZWx0ZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGludHJvOiBCb29sZWFuLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICBsZXQgcG9uZCA7XHJcblxyXG4gICAgZXhwb3J0IGxldCBmaWxlO1xyXG5cclxuICAgIGxldCBmaWxlbmFtZTtcclxuXHJcbiAgICBsZXQgdGFiID0gW107XHJcblxyXG4gICAgZXhwb3J0IGxldCBuYW1lID0gXCJmaWxlcG9uZFwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGFzIGluaXRpYWxpc2VkXCIpXHJcbiAgICAgICAgLy8gZmlsZW5hbWUgPSBKU09OLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkRmlsZShlcnJvciAsIGZpbGVzKXtcclxuICAgIC8vICAgIGlmKGZpbGVzLmZpbGVuYW1lICE9IEpTT04ucGFyc2UoZmlsZSkpe1xyXG4gICAgLy8gICAgICAgICBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWVcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgSlNPTi5wYXJzZShmaWxlKS5tYXAoKHZhbCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZih0YWIuaW5kZXhPZih2YWwpID09IC0xKXtcclxuICAgIC8vICAgICAgICAgICAgIHRhYi5wdXNoKHZhbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgY29uc29sZS5sb2coZmlsZXMuZmlsZW5hbWUpXHJcbiAgICAgICAgdGFiLnB1c2goZmlsZXMuZmlsZW5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHJlbW92ZWRcIilcclxuXHJcbiAgICAgICAgdGFiID0gdGFiLmZpbHRlcihlbCA9PiBlbCAhPSBmaWxlcy5maWxlbmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiKVxyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImFwcFwiPlxyXG5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIG5hbWU9XCJmaWxlX3VwZGF0ZVwiIGlkPVwiXCIgYmluZDp2YWx1ZT17ZmlsZW5hbWV9IGNsYXNzPVwiaW5wdXRfY2hvb3NlX2ZpbGVcIj5cclxuICAgIDxGaWxlUG9uZCBiaW5kOnRoaXM9e3BvbmR9IHtuYW1lfVxyXG4gICAgc2VydmVyPVwiL2ZpbGVwb25kX2VkaXRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgIG1heEZpbGVzPXsxMH1cclxuICAgIG9ucmVtb3ZlZmlsZT17aGFuZGxlUmVtb3ZlRmlsZX1cclxuICAgIGxhYmVsSWRsZT1cIkdsaXNzZXogdm9zIGZpY2hpZXJzXCJcclxuICAgIGxhYmVsUHJvY2Vzc2luZz1cIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgZmlsZXM9e1xyXG4gICAgICAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsb2NhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsdWdpbnM9e1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBcclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XG4gICAgbGV0IGN1cnJlbnRUaXRsZTtcbiAgICBsZXQgYXJyYXlMaW5rcyA9IFtdO1xuICAgIGxldCBnb0xlZnQgPSBmYWxzZTtcbiAgICBleHBvcnQgbGV0IGNhdGVnb3J5O1xuXG4gICAgbGV0IGxpc3QgPSBbXTtcblxuICAgIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHsgdGl0bGU6IGVsZW1lbnQubmFtZSwgbnVtOiAoKSA9PiBzZXRDYXRlZ29yeShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaXRlbXMpIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRDYXRlZ29yeShuYW1lLCBpdGVtcykge1xuICAgICAgICBnb0xlZnQgPSAhZ29MZWZ0O1xuICAgICAgICBjdXJyZW50VGl0bGUgPSBuYW1lO1xuICAgICAgICBhcnJheUxpbmtzID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgYXJyYXlMaW5rcy5wdXNoKHsga2V5OiBlbGVtZW50LmtleSwgdmFsdWU6IGVsZW1lbnQubmFtZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgbGV0IHNwZWNpYWxMaXN0U3ViSXRlbXMgPSBbXG4gICAgICAgIHsgaGVhZGVyX3RpdGxlOiBcIkNhdMOpZ29yaWVzXCIsIGxpc3Q6IGxpc3QgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlR29MZWZ0KHBhcmFtcykge1xuICAgICAgICBnb0xlZnQgPSBwYXJhbXM7XG4gICAgfVxuXG4gICAgaW1wb3J0IFNpZGUgZnJvbSBcIi4vU2lkZS5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyX3BhcmVudF9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfbWFpblwiIGNsYXNzOmdvTGVmdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY2PDqHMgcmFwaWRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY3VlaWw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBwcm9wb3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyNlYWNoIHNwZWNpYWxMaXN0U3ViSXRlbXMgYXMgc3ViSXRlbSAoc3ViSXRlbS5oZWFkZXJfdGl0bGUpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWJJdGVtLmhlYWRlcl90aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHN1Ykl0ZW0ubGlzdCBhcyBpdGVtIChpdGVtLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3BlY2lhbF9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtpdGVtLm51bX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdib3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNpemUtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTguMjUgNC41IDcuNSA3LjUtNy41IDcuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaWRlXG4gICAgICAgICAgICBnb1NpZGU9e2dvTGVmdH1cbiAgICAgICAgICAgIG9uOnVwZGF0ZT17KGV2ZW50KSA9PiB1cGRhdGVHb0xlZnQoZXZlbnQuZGV0YWlsKX1cbiAgICAgICAgICAgIHtjdXJyZW50VGl0bGV9XG4gICAgICAgICAgICB7YXJyYXlMaW5rc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIml0ZW1fdGl0bGVcIj5UaXRsZSBzZWM8L3NwYW4+XG4gICAgICAgICAgICA8dWwgc2xvdD1cImxpc3RfbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NZWlsbGV1cmVzIHZlbnRlczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TaWRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuXHJcbiAgICBsZXQgZGlzcGxheWVkVGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgdGV4dCA9IFwiQmllbnZlbnVlIMOgIGwnZXNwYWNlIGRlIGdlc3Rpb24gZGUgdm90cmUgdml0cmluZVwiO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGFqb3V0ZXIgdW5lIGxldHRyZSDDoCBsYSBmb2lzXHJcbiAgICBmdW5jdGlvbiByZXZlYWxOZXh0TGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXllZFRleHQgKz0gdGV4dFtpbmRleF07XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmV2ZWFsTmV4dExldHRlciwgMTAwKTsgLy8gRMOpbGFpIGVudHJlIGNoYXF1ZSBsZXR0cmUgKGVuIG1pbGxpc2Vjb25kZXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIETDqWNsZW5jaGUgbCdhZmZpY2hhZ2UgZGVzIGxldHRyZXMgdW5lIHBhciB1bmUgYXUgY2hhcmdlbWVudCBkdSBjb21wb3NhbnRcclxuICAgIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHJldmVhbE5leHRMZXR0ZXIoKTtcclxuICAgIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxoMT57ZGlzcGxheWVkVGV4dH08L2gxPlxyXG5cclxuIiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICAgbGV0IHBvbmQ7XHJcblxyXG4gICAgIGxldCBmaWxlbmFtZSA7XHJcblxyXG4gICAgIGxldCB0YWIgPSBbXTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG5hbWUgPSBcImZpbGVwb25kXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoYXMgaW5pdGlhbGlzZWRcIilcclxuICAgICAgICAvLyBwb25kLmFkZEZpbGUoZmlsZSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAvLyAgICBpZihmaWxlcy5maWxlbmFtZSAhPSBKU09OLnBhcnNlKGZpbGUpKXtcclxuICAgIC8vICAgICAgICAgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lXHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWwpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYodGFiLmluZGV4T2YodmFsKSA9PSAtMSl7XHJcbiAgICAvLyAgICAgICAgICAgICB0YWIucHVzaCh2YWwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVuYW1lKVxyXG4gICAgICAgIHRhYi5wdXNoKGZpbGVzLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSByZW1vdmVkXCIpXHJcblxyXG4gICAgICAgIHRhYiA9IHRhYi5maWx0ZXIoZWwgPT4gZWwgIT0gZmlsZXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYilcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcbiAgICB9XHJcbiAgICBcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYXBwXCI+XHJcbiAgICA8aW5wdXQgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlsZV91cGRhdGVcIiBpZD1cIlwiIGJpbmQ6dmFsdWU9e2ZpbGVuYW1lfSBjbGFzcz1cImlucHV0X2Nob29zZV9maWxlXCI+XHJcblxyXG4gICAgPEZpbGVQb25kIGJpbmQ6dGhpcz17cG9uZH0ge25hbWV9XHJcbiAgICBzZXJ2ZXI9XCIvZmlsZXBvbmRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgICBtYXhGaWxlcz17MTB9XHJcbiAgICBvbnJlbW92ZWZpbGU9e2hhbmRsZVJlbW92ZUZpbGV9XHJcbiAgICBsYWJlbElkbGU9XCJHbGlzc2V6IHZvcyBmaWNoaWVyc1wiXHJcbiAgICBsYWJlbFByb2Nlc3Npbmc9XCJDaGFyZ2VtZW50Li4uXCJcclxuICAgIFxyXG4gICAgcGx1Z2lucz17XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlld1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwic3ZlbHRlXCI7XHJcblxyXG4gICAgZXhwb3J0IGxldCBnb1NpZGUgPSBmYWxzZTtcclxuICAgIGV4cG9ydCBsZXQgY3VycmVudFRpdGxlO1xyXG4gICAgZXhwb3J0IGxldCBhcnJheUxpbmtzO1xyXG5cclxuICAgIGxldCBoaWRlU2lkZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2lkZUJhcigpIHtcclxuICAgICAgICBoaWRlU2lkZSA9ICFoaWRlU2lkZTtcclxuICAgICAgICBnb1NpZGUgPSBmYWxzZTtcclxuICAgICAgICBkaXNwYXRjaChcInVwZGF0ZVwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdlxyXG4gICAgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfc2Vjb25kYXJ5XCJcclxuICAgIGNsYXNzOmdvU2lkZVxyXG4gICAgY2xhc3M6aGlkZVNpZGVcclxuPlxyXG4gICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpdGVtX3RpdGxlXCIgb246Y2xpY2s9e2hpZGVTaWRlQmFyfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Ym94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzaXplLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjUgMTkuNSAzIDEybTAgMCA3LjUtNy41TTMgMTJoMThcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuPk1lbnUgcHJpbmNpcGFsPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgeyNpZiBhcnJheUxpbmtzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsjZWFjaCBhcnJheUxpbmtzIGFzIGl0ZW0gKGl0ZW0ua2V5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYXRlZ29yeS9jYXRlZ29yeUl0ZW0ve2l0ZW0ua2V5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlN3aXBlciIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImluaXRpYWxpemUiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25fZXhpdCIsImxlZnRfbmF2aWdhdGlvbl9iYXIiLCJvdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNlbGVjdCIsImFyZWFzIiwiZmF2IiwiZmF2QWxsIiwiZWwiLCJzd2lwZXJfZXhwbG9yYXRpb24iLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJsb29wIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsImJhcl9hZG1pbiIsImJhcl9hZG1pbl9tb2JpbGUiLCJvdmVybGF5X2FwcF9tb2JpbGUiLCJsZWZ0X25hdl9iYXJfYWRtaW4iLCJ0b3BfbmF2X2Jhcl9hZG1pbiIsImJvZHkiLCJ0b2dnbGUiLCJzcGlubmVyIiwicHJvZHVjdF9jYXRlZ29yeSIsImZhY3RvcnlfY2F0ZWdvcnkiLCJkZWZhdWx0IiwicmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyIsIkFscGluZSIsIndpbmRvdyIsInN0YXJ0IiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJhcmdzIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNvbmNhdCIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwidHJpbUFsbCIsInNwbGl0Iiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwibWFwIiwiam9pbiIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiV2Vha01hcCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwiTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJzZXQiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXQiLCJjbGVhckludGVydmFsIiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiY29tcG9uZW50cyIsImNvbXBvbmVudE5hbWUiLCJjb250YWlucyIsImZpbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJkYXRhc2V0Iiwic2V0VmFsdWVPbkVsZW1lbnQiLCJ2YWx1ZUZvdW5kIiwidmFsIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzIiwiZGlyZWN0aXZlIiwidGhyb3dPbk1pc3NpbmciLCJkYXRhTW9kZWxEaXJlY3RpdmVzIiwiZm9ybUVsZW1lbnQiLCJjbG9zZXN0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjbG9uZUhUTUxFbGVtZW50IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsIkhUTUxFbGVtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjdXJyZW50VmFsdWVzIiwiZmluYWxWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImdldERlZXBEYXRhIiwiZGF0YSIsInByb3BlcnR5UGF0aCIsIl9wYXJzZURlZXBEYXRhIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIlZhbHVlU3RvcmUiLCJwcm9wcyIsImRpcnR5UHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50Iiwibm9ybWFsaXplZE5hbWUiLCJoYXMiLCJnZXRPcmlnaW5hbFByb3BzIiwiZ2V0RGlydHlQcm9wcyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwiY2hhbmdlZCIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsImN1cnJlbnRWYWx1ZSIsIklkaW9tb3JwaCIsIkVNUFRZX1NFVCIsIlNldCIsImRlZmF1bHRzIiwibW9ycGhTdHlsZSIsImNhbGxiYWNrcyIsImJlZm9yZU5vZGVBZGRlZCIsIm5vT3AiLCJhZnRlck5vZGVBZGRlZCIsImJlZm9yZU5vZGVNb3JwaGVkIiwiYWZ0ZXJOb2RlTW9ycGhlZCIsImJlZm9yZU5vZGVSZW1vdmVkIiwiYWZ0ZXJOb2RlUmVtb3ZlZCIsImJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQiLCJoZWFkIiwic3R5bGUiLCJzaG91bGRQcmVzZXJ2ZSIsImVsdCIsInNob3VsZFJlQXBwZW5kIiwic2hvdWxkUmVtb3ZlIiwiYWZ0ZXJIZWFkTW9ycGhlZCIsIm1vcnBoIiwib2xkTm9kZSIsIm5ld0NvbnRlbnQiLCJjb25maWciLCJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInBhcnNlQ29udGVudCIsIm5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplQ29udGVudCIsImN0eCIsImNyZWF0ZU1vcnBoQ29udGV4dCIsIm1vcnBoTm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVkTmV3Q29udGVudCIsImJsb2NrIiwib2xkSGVhZCIsIm5ld0hlYWQiLCJwcm9taXNlcyIsImhhbmRsZUhlYWRFbGVtZW50IiwiYWxsIiwiYXNzaWduIiwiaWdub3JlIiwibW9ycGhDaGlsZHJlbiIsImJlc3RNYXRjaCIsImZpbmRCZXN0Tm9kZU1hdGNoIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJtb3JwaGVkTm9kZSIsIm1vcnBoT2xkTm9kZVRvIiwiaW5zZXJ0U2libGluZ3MiLCJpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCIsInBvc3NpYmxlQWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZVZhbHVlIiwiYWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZSIsImlzU29mdE1hdGNoIiwicmVwbGFjZUNoaWxkIiwiSFRNTEhlYWRFbGVtZW50Iiwic3luY05vZGVGcm9tIiwibmV3UGFyZW50Iiwib2xkUGFyZW50IiwibmV4dE5ld0NoaWxkIiwiZmlyc3RDaGlsZCIsImluc2VydGlvblBvaW50IiwibmV3Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uIiwiaXNJZFNldE1hdGNoIiwiaWRTZXRNYXRjaCIsImZpbmRJZFNldE1hdGNoIiwicmVtb3ZlTm9kZXNCZXR3ZWVuIiwic29mdE1hdGNoIiwiZmluZFNvZnRNYXRjaCIsImluc2VydEJlZm9yZSIsInRlbXBOb2RlIiwicmVtb3ZlTm9kZSIsImlnbm9yZUF0dHJpYnV0ZSIsImF0dHIiLCJ0byIsInVwZGF0ZVR5cGUiLCJub2RlVHlwZSIsImZyb21BdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInRvQXR0cmlidXRlcyIsIl9pdGVyYXRvciIsIl9zdGVwIiwiZnJvbUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImVyciIsInRvQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwibm9kZVZhbHVlIiwic3luY0lucHV0VmFsdWUiLCJzeW5jQm9vbGVhbkF0dHJpYnV0ZSIsImF0dHJpYnV0ZU5hbWUiLCJpZ25vcmVVcGRhdGUiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwiSFRNTE9wdGlvbkVsZW1lbnQiLCJIVE1MVGV4dEFyZWFFbGVtZW50IiwibmV3SGVhZFRhZyIsImN1cnJlbnRIZWFkIiwiYWRkZWQiLCJyZW1vdmVkIiwicHJlc2VydmVkIiwibm9kZXNUb0FwcGVuZCIsImhlYWRNZXJnZVN0eWxlIiwic3JjVG9OZXdIZWFkTm9kZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3SGVhZENoaWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImN1cnJlbnRIZWFkRWx0IiwiaW5OZXdDb250ZW50IiwiaXNSZUFwcGVuZGVkIiwiaXNQcmVzZXJ2ZWQiLCJfbG9vcCIsIm5ld05vZGUiLCJfbm9kZXNUb0FwcGVuZCIsIl9pMiIsIm5ld0VsdCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiaHJlZiIsInNyYyIsInByb21pc2UiLCJfcmVzb2x2ZSIsIl9pMyIsIl9yZW1vdmVkIiwicmVtb3ZlZEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImtlcHQiLCJtZXJnZURlZmF1bHRzIiwiZmluYWxDb25maWciLCJ0YXJnZXQiLCJpZE1hcCIsImNyZWF0ZUlkTWFwIiwiZGVhZElkcyIsIm5vZGUxIiwibm9kZTIiLCJ0YWdOYW1lIiwiaWQiLCJnZXRJZEludGVyc2VjdGlvbkNvdW50Iiwic3RhcnRJbmNsdXNpdmUiLCJlbmRFeGNsdXNpdmUiLCJuZXdDaGlsZFBvdGVudGlhbElkQ291bnQiLCJwb3RlbnRpYWxNYXRjaCIsIm90aGVyTWF0Y2hDb3VudCIsInBvdGVudGlhbFNvZnRNYXRjaCIsInNpYmxpbmdTb2Z0TWF0Y2hDb3VudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImNvbnRlbnRXaXRoU3Znc1JlbW92ZWQiLCJtYXRjaCIsInBhcnNlRnJvbVN0cmluZyIsImdlbmVyYXRlZEJ5SWRpb21vcnBoIiwiaHRtbEVsZW1lbnQiLCJyZXNwb25zZURvYyIsImR1bW15UGFyZW50IiwiTm9kZSIsImFwcGVuZCIsIl9pNCIsIl9hcnIiLCJzdGFjayIsIm5vZGUiLCJjdXJyZW50RWxlbWVudCIsImJlc3RFbGVtZW50Iiwic2NvcmUiLCJuZXdTY29yZSIsInNjb3JlRWxlbWVudCIsImlzSWRJbkNvbnNpZGVyYXRpb24iLCJpZElzV2l0aGluTm9kZSIsInRhcmdldE5vZGUiLCJpZFNldCIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJzb3VyY2VTZXQiLCJtYXRjaENvdW50IiwiX2l0ZXJhdG9yNSIsIl9zdGVwNSIsInBvcHVsYXRlSWRNYXBGb3JOb2RlIiwibm9kZVBhcmVudCIsImlkRWxlbWVudHMiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiY3VycmVudCIsIm9sZENvbnRlbnQiLCJub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbiIsImlzRmlsZUlucHV0Iiwic3luY0F0dHJpYnV0ZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwib3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIiLCJvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZSIsIm1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCIsInJlcGxhY2VXaXRoQ2xvbmUiLCJvbGRFbGVtZW50IiwiY2xvbmVkT2xkRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiX2Zyb21FbCRwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsImNsb25lZEZyb21FbCIsIl9feCIsIndhc0VsZW1lbnRBZGRlZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImVsZW1lbnRDaGFuZ2VzIiwiZ2V0Q2hhbmdlZEVsZW1lbnQiLCJhcHBseVRvRWxlbWVudCIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIm9yaWdpbmFsRWxlbWVudCIsIlVuc3luY2VkSW5wdXRzVHJhY2tlciIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiX3RoaXMiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsImNhbGxiYWNrIiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsImFjdGl2YXRlIiwiX3RoaXMyIiwiX3JlZiIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJfcmVmMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczQiLCJIb29rTWFuYWdlciIsImhvb2tzIiwicmVnaXN0ZXIiLCJob29rTmFtZSIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiQmFja2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJfZ2V0Qm9keSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidGV4dCIsImdldEJvZHkiLCJDaGFuZ2luZ0l0ZW1zVHJhY2tlciIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwicmVtb3ZlSXRlbSIsInRydWVPcmlnaW5hbFZhbHVlIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiX3JlZjMiLCJfcmVmNCIsImdldFJlbW92ZWRJdGVtcyIsImlzRW1wdHkiLCJzaXplIiwiRWxlbWVudENoYW5nZXMiLCJhZGRlZENsYXNzZXMiLCJyZW1vdmVkQ2xhc3NlcyIsInN0eWxlQ2hhbmdlcyIsImF0dHJpYnV0ZUNoYW5nZXMiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsInJlbW92ZUNsYXNzIiwiYWRkU3R5bGUiLCJzdHlsZU5hbWUiLCJvcmlnaW5hbFZhbHVlIiwicmVtb3ZlU3R5bGUiLCJhZGRBdHRyaWJ1dGUiLCJnZXRBZGRlZENsYXNzZXMiLCJnZXRSZW1vdmVkQ2xhc3NlcyIsImdldENoYW5nZWRTdHlsZXMiLCJnZXRSZW1vdmVkU3R5bGVzIiwiZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMiLCJnZXRSZW1vdmVkQXR0cmlidXRlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJjaGFuZ2UiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrIiwiY2hhbmdlZEVsZW1lbnRzIiwiY2hhbmdlZEVsZW1lbnRzQ291bnQiLCJhZGRlZEVsZW1lbnRzIiwicmVtb3ZlZEVsZW1lbnRzIiwiaXNTdGFydGVkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbk11dGF0aW9ucyIsImJpbmQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiZGlzY29ubmVjdCIsImdldEFkZGVkRWxlbWVudHMiLCJoYW5kbGVQZW5kaW5nQ2hhbmdlcyIsInRha2VSZWNvcmRzIiwibXV0YXRpb25zIiwiaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJtdXRhdGlvbiIsImlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbiIsImlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQiLCJfaXRlcmF0b3I4IiwiX3N0ZXA4IiwiYWRkZWRFbGVtZW50IiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsIl90aGlzNSIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJjaGFuZ2VkRWxlbWVudCIsImhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uIiwib2xkVmFsdWUiLCJwcmV2aW91c1ZhbHVlcyIsIm5ld1ZhbHVlcyIsImFkZGVkVmFsdWVzIiwicmVtb3ZlZFZhbHVlcyIsInByZXZpb3VzU3R5bGVzIiwiZXh0cmFjdFN0eWxlcyIsIm5ld1N0eWxlcyIsImFkZGVkT3JDaGFuZ2VkU3R5bGVzIiwicmVtb3ZlZFN0eWxlcyIsInN0eWxlcyIsInN0eWxlT2JqZWN0IiwicHJvcGVydHkiLCJDb21wb25lbnQiLCJsaXN0ZW5lcnMiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsIl90aGlzNiIsImZpbmdlcnByaW50IiwiZGVmYXVsdERlYm91bmNlIiwiYmFja2VuZFJlcXVlc3QiLCJwZW5kaW5nQWN0aW9ucyIsInBlbmRpbmdGaWxlcyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwibGlzdGVuZXIiLCJfdGhpczYkbGlzdGVuZXJzJGdldCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsImFkZFBsdWdpbiIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwiY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0Iiwib24iLCJvZmYiLCJyZVJlbmRlciIsImRlYm91bmNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsImZpbGVzIiwiaW5wdXQiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsIl90aGlzNyIsImFjdGlvbnMiLCJpc1R1cmJvRW5hYmxlZCIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJfdGhpczgiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJfaTUiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsInJlcXVlc3RDb25maWciLCJ1cGRhdGVkIiwibWFrZVJlcXVlc3QiLCJfcmVmNSIsIl9jYWxsZWUyIiwiX2hlYWRlcnMkZ2V0IiwiYmFja2VuZFJlc3BvbnNlIiwiX2k2IiwiX09iamVjdCR2YWx1ZXMiLCJoZWFkZXJzIiwiY29udHJvbHMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJkaXNwbGF5RXJyb3IiLCJyZW5kZXJFcnJvciIsInByb2Nlc3NSZXJlbmRlciIsIl94IiwiX3RoaXM5Iiwic2hvdWxkUmVuZGVyIiwidmlzaXQiLCJsb2NhdGlvbiIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwiZXJyb3IiLCJjb25zb2xlIiwibmV3UHJvcHMiLCJnZXRDb21wb25lbnRQcm9wcyIsImV2ZW50c1RvRW1pdCIsImdldEV2ZW50c1RvRW1pdCIsImJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJfcmVmNiIsIl9yZWY3IiwicGF5bG9hZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzMTAiLCJzZXRUaW1lb3V0IiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZm9jdXMiLCJfdGhpczExIiwiX3VwZGF0ZUZyb21QYXJlbnRQcm9wcyIsInByb3hpZnlDb21wb25lbnQiLCJQcm94eSIsInByb3AiLCJjYWxsYWJsZSIsIl9sZW4yIiwiX2tleTIiLCJSZWZsZWN0IiwiQmFja2VuZFJlcXVlc3QiLCJ1cGRhdGVNb2RlbHMiLCJfdGhpczEyIiwiaXNSZXNvbHZlZCIsInVwZGF0ZWRNb2RlbHMiLCJjb250YWluc09uZU9mQWN0aW9ucyIsInRhcmdldGVkQWN0aW9ucyIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJ0YXJnZXRlZE1vZGVscyIsIlJlcXVlc3RCdWlsZGVyIiwidXJsIiwiY3NyZlRva2VuIiwiYnVpbGRSZXF1ZXN0Iiwic3BsaXRVcmwiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJ0b3RhbEZpbGVzIiwicmVkdWNlIiwidG90YWwiLCJoYXNGaW5nZXJwcmludHMiLCJ3aWxsRGF0YUZpdEluVXJsIiwicmVxdWVzdERhdGEiLCJwcm9wc0Zyb21QYXJlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiX2k3IiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiLCJwYXJhbXNTdHJpbmciLCJwcm9wc0pzb24iLCJ1cGRhdGVkSnNvbiIsImNoaWxkcmVuSnNvbiIsInByb3BzRnJvbVBhcmVudEpzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJCYWNrZW5kIiwicmVxdWVzdEJ1aWxkZXIiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJmZXRjaCIsImJhY2tlbmRBY3Rpb24iLCJTdGltdWx1c0VsZW1lbnREcml2ZXIiLCJjb250cm9sbGVyIiwibW9kZWxEaXJlY3RpdmUiLCJwcm9wc1ZhbHVlIiwiZXZlbnRzVG9FbWl0VmFsdWUiLCJldmVudHNUb0Rpc3BhdGNoVmFsdWUiLCJMb2FkaW5nUGx1Z2luIiwiX3RoaXMxMyIsInJlcXVlc3QiLCJzdGFydExvYWRpbmciLCJmaW5pc2hMb2FkaW5nIiwidGFyZ2V0RWxlbWVudCIsImhhbmRsZUxvYWRpbmdUb2dnbGUiLCJpc0xvYWRpbmciLCJfdGhpczE0IiwiYWRkQXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZXMiLCJnZXRMb2FkaW5nRGlyZWN0aXZlcyIsIl9yZWY4IiwiaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZSIsIl90aGlzMTUiLCJmaW5hbEFjdGlvbiIsInBhcnNlTG9hZGluZ0FjdGlvbiIsImRlbGF5IiwidmFsaWRNb2RpZmllcnMiLCJtb2RpZmllciIsInBhcnNlSW50IiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJfdGhpczE2IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJfdGhpczE3IiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTgiLCJfcmVmOSIsInN0b3BBbGxQb2xsaW5nIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMxOSIsInRpbWVyIiwiUG9sbGluZ1BsdWdpbiIsIl90aGlzMjAiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjEiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiIsIl90aGlzMjIiLCJzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyIsIkhUTUxGb3JtRWxlbWVudCIsImdldE1vZGVsQmluZGluZyIsInRhcmdldEV2ZW50TmFtZSIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbyIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbzIiLCJpbm5lck1vZGVsTmFtZSIsImlzVmFsdWVFbXB0eSIsIl9pOCIsIl9PYmplY3Qka2V5cyIsInRvUXVlcnlTdHJpbmciLCJidWlsZFF1ZXJ5U3RyaW5nRW50cmllcyIsImJhc2VLZXkiLCJfcmVmMTAiLCJfcmVmMTEiLCJpS2V5IiwiaVZhbHVlIiwiX3JlZjEyIiwiX3JlZjEzIiwiZnJvbVF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwiaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEiLCJfa2V5JHNwbGl0IiwiX2tleSRzcGxpdDIiLCJfdG9BcnJheSIsImZpcnN0Iiwic2Vjb25kIiwicmVzdCIsIl9yZWYxNCIsIl9yZWYxNSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvdE5vdGF0ZWRLZXkiLCJVcmxVdGlscyIsIl9VUkwiLCJzZXREYXRhIiwiX3dyYXBOYXRpdmVTdXBlciIsIlVSTCIsIkhpc3RvcnlTdHJhdGVneSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJRdWVyeVN0cmluZ1BsdWdpbiIsIm1hcHBpbmciLCJfdGhpczIzIiwidXJsVXRpbHMiLCJjdXJyZW50VXJsIiwiX3JlZjE2IiwiX3JlZjE3IiwiQ2hpbGRDb21wb25lbnRQbHVnaW4iLCJwYXJlbnRNb2RlbEJpbmRpbmdzIiwibW9kZWxEaXJlY3RpdmVzIiwiX3RoaXMyNCIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwibm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UiLCJmaW5nZXJwcmludHMiLCJnZXRDaGlsZHJlbiIsInRhZyIsInRvTG93ZXJDYXNlIiwicGFyZW50Q29tcG9uZW50IiwibW9kZWxCaW5kaW5nIiwiY2hpbGRNb2RlbE5hbWUiLCJMYXp5UGx1Z2luIiwiaW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfY29tcG9uZW50JGVsZW1lbnQkYXQiLCJfdGhpczI1IiwiZ2V0TmFtZWRJdGVtIiwiZ2V0T2JzZXJ2ZXIiLCJfdGhpczI1JGludGVyc2VjdGlvbk8iLCJ1bm9ic2VydmUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkxpdmVDb250cm9sbGVyRGVmYXVsdCIsIl90aGlzMjYiLCJwZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiY29ubmVjdENvbXBvbmVudCIsImRpc2Nvbm5lY3RDb21wb25lbnQiLCJ1cGRhdGUiLCJjdXJyZW50VGFyZ2V0IiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50IiwiX3RoaXMyNyIsInJhd0FjdGlvbiIsImFjdGlvbkFyZ3MiLCJzdG9wUHJvcGFnYXRpb24iLCJfdmFsaWRNb2RpZmllcnMkZ2V0MiIsIl9pOSIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwiJHJlbmRlciIsIl90aGlzMjgiLCJnZXRFbWl0RGlyZWN0aXZlcyIsIl9yZWYxOCIsIm5hbWVNYXRjaCIsIl90aGlzMjkiLCJfcmVmMTkiLCJfdGhpczMwIiwiX3JlZjIwIiwiJHVwZGF0ZU1vZGVsIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlQ2hhbmdlZCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZSIsImZpbmdlcnByaW50VmFsdWVDaGFuZ2VkIiwiZmluZ2VycHJpbnRWYWx1ZSIsImV2ZW50SW5mbyIsImV2ZW50QXJncyIsImVtaXRzIiwiX3RoaXMzMSIsIm5hbWVWYWx1ZSIsImxpc3RlbmVyc1ZhbHVlIiwiYmFja2VuZEZhY3RvcnkiLCJwcm94aWVkQ29tcG9uZW50IiwiX19jb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsInBsdWdpbnMiLCJxdWVyeU1hcHBpbmdWYWx1ZSIsIl90aGlzMzIiLCJfcmVmMjEiLCJfdGhpczMzIiwiX3JlZjIyIiwiZXZlbnROYW1lIiwiX2VsZW1lbnQkZmlsZXMiLCJmaW5hbFZhbHVlIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoIiwicHJlZml4IiwiX3RoaXMzNCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnQiLCJjc3JmIiwiZXZlbnRzVG9EaXNwYXRjaCIsInJlcXVlc3RNZXRob2QiLCJxdWVyeU1hcHBpbmciLCJ1cmxWYWx1ZSIsInJlcXVlc3RNZXRob2RWYWx1ZSIsImNzcmZWYWx1ZSIsInN2ZWx0ZUNvbnRyb2xsZXJzIiwiaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyIsInJlc29sdmVTdmVsdGVDb21wb25lbnQiLCJkZWZhdWx0XzEiLCJfdGhpcyRwcm9wc1ZhbHVlIiwiX3RoaXMkaW50cm9WYWx1ZSIsImludHJvIiwiaW50cm9WYWx1ZSIsImNvbXBvbmVudFZhbHVlIiwiX2Rlc3Ryb3lJZkV4aXN0cyIsInJvb3QiLCIkZGVzdHJveSIsIkJvb2xlYW4iLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==