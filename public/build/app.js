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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


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

      // var searchBar = document.getElementById("searchBar");
      // var overlaySearchBar = document.getElementById("overlaySearchBar");
      // if (searchBar) {
      //   searchBar.addEventListener("focus", () => {
      //     console.log(searchBar)
      //     overlaySearchBar.classList.add("active");
      //   })
      // }

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
  }, {
    key: "showCardSearch",
    value: function showCardSearch() {
      this.popupTarget.classList.remove('hidden');
      this.overlaySearchBarTarget.classList.add('active');
    }
  }, {
    key: "hideCardSearch",
    value: function hideCardSearch() {
      this.popupTarget.classList.add('hidden');
      this.overlaySearchBarTarget.classList.remove('active');
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ["overlaySearchBar", "popup", "Exit"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O21HQUFDLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUVKLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7O3dIQURjLEdBQUksSUFBQyxHQUFHOzs7O0dBQXpDLHVEQUVJO0dBREEsdURBQXFCOzs7Ozs7cUVBQWhCLEdBQUksSUFBQyxLQUFLOzt5R0FEYyxHQUFJLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFGNUMsR0FBVTs7Ozs7Ozs7Ozs7K0VBSlosR0FBWTs7Ozs7Ozs7Ozs7Ozs7R0ExQi9CLHVEQXdDTTtHQW5DRix1REFrQ007R0FqQ0YsdURBa0JTOztHQUNULHVEQUVNO0dBREYsdURBQTJCOzs7R0FFL0IsdURBVU07R0FURix1REFRSzs7Ozt1R0EvQjRCLEdBQVc7Ozs7O2tIQW9CckMsR0FBWTs7c0JBSVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNUNoQixNQUFNLEdBQUcsS0FBSztPQUNkLFlBQVk7T0FDWixVQUFVO0tBRWpCLFFBQVEsR0FBRyxLQUFLO09BQ2QsUUFBUSxHQUFHLDZEQUFxQjs7VUFFN0IsV0FBVztrQkFDaEIsUUFBUSxJQUFJLFFBQVE7a0JBQ3BCLE1BQU0sR0FBRyxLQUFLO0VBQ2QsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy8gc3luYyBcXC5zdmVsdGUkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3ZlbHRlL2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3ZlbHRlL2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzPzk2YzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Iiwid2VicGFjazovLy9FZGl0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vSGVsbG8uc3ZlbHRlIiwid2VicGFjazovLy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vTmV3LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vU2lkZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0VkaXQuc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL0VkaXQuc3ZlbHRlXCIsXG5cdFwiLi9IZWxsby5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvSGVsbG8uc3ZlbHRlXCIsXG5cdFwiLi9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9Ib21lQW5pbWF0aW9uLnN2ZWx0ZVwiLFxuXHRcIi4vTmV3LnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9OZXcuc3ZlbHRlXCIsXG5cdFwiLi9TaWRlLnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9TaWRlLnN2ZWx0ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmVsdGUkXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMiBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXN2ZWx0ZS0tc3ZlbHRlJzogY29udHJvbGxlcl8xLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzIsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBBdXRvcGxheSwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbi8vIGltcG9ydCBTd2lwZXIgYW5kIG1vZHVsZXMgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2J1bmRsZSc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbXCJvdmVybGF5U2VhcmNoQmFyXCIgLCBcInBvcHVwXCIgLCBcIkV4aXRcIl1cblxuICBjb25uZWN0KCkge1xuXG4gICAgLy8gdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd19zaWRlX2JhclwiKTtcbiAgICB2YXIgYnV0dG9uX2V4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRfc2lkZV9iYXJcIik7XG4gICAgdmFyIGxlZnRfbmF2aWdhdGlvbl9iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRfbmF2aWdhdGlvbl9iYXJcIik7XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZpZ2F0aW9uX2Jhci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSlcblxuICAgIH1cbiAgICBpZiAoYnV0dG9uX2V4aXQpIHtcbiAgICAgIGJ1dHRvbl9leGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2aWdhdGlvbl9iYXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZpZ2F0aW9uX2Jhci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSlcblxuICAgIH1cblxuICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaWYgKGlucHV0cykge1xuICAgICAgaW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIik7XG4gICAgaWYgKHNlbGVjdCkge1xuICAgICAgc2VsZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgdmFyIGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuICAgIGlmIChhcmVhcykge1xuICAgICAgYXJlYXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cbiAgICB2YXIgZmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXZvcml0ZV9idG5cIik7XG4gICAgdmFyIGZhdkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmF2b3JpdGVfYnRuXCIpO1xuICAgIGlmIChmYXYpIHtcblxuICAgICAgZmF2LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBmYXZBbGwuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuXG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdmFyIHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpO1xuICAgIC8vIHZhciBvdmVybGF5U2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5U2VhcmNoQmFyXCIpO1xuICAgIC8vIGlmIChzZWFyY2hCYXIpIHtcbiAgICAvLyAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhzZWFyY2hCYXIpXG4gICAgLy8gICAgIG92ZXJsYXlTZWFyY2hCYXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuXG5cblxuXG5cblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgY29uc3Qgc3dpcGVyX2V4cGxvcmF0aW9uID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgICAgICAgLy8gY29uZmlndXJlIFN3aXBlciB0byB1c2UgbW9kdWxlc1xuICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXldLFxuXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG5cbiAgICAgICAgLy8gYXV0b3BsYXk6IHtcbiAgICAgICAgLy8gIGRlbGF5OiAyMDAwLCAvLyBEw6lmaWxlbWVudCBhdXRvbWF0aXF1ZSB0b3V0ZXMgbGVzIDEuNSBzZWNvbmRlc1xuICAgICAgICAvLyAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsIC8vIENvbnRpbnVlciBsJ2F1dG9wbGF5IG3Dqm1lIHNpIGwndXRpbGlzYXRldXIgaW50ZXJhZ2l0XG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcblxuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDYwMHB4XG4gICAgICAgICAgMjAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjUsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2MDBweFxuICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gODUwcHhcbiAgICAgICAgICA4NTA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDEwMDBweFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0pXG5cblxuICAgIHZhciBiYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhcl9hZG1pblwiKTtcbiAgICB2YXIgYmFyX2FkbWluX21vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFyX2FkbWluX21vYmlsZVwiKTtcbiAgICB2YXIgb3ZlcmxheV9hcHBfbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2FwcF9tb2JpbGVcIik7XG5cblxuICAgIHZhciBsZWZ0X25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRfbmF2X2Jhcl9hZG1pblwiKTtcbiAgICB2YXIgdG9wX25hdl9iYXJfYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcF9uYXZfYmFyX2FkbWluXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBpZiAoYmFyX2FkbWluKSB7XG4gICAgICBiYXJfYWRtaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZfYmFyX2FkbWluLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgICAgIHRvcF9uYXZfYmFyX2FkbWluLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYWRkX3RyYW5zaXRpb25cIilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGJhcl9hZG1pbl9tb2JpbGUpIHtcbiAgICAgIGJhcl9hZG1pbl9tb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGVmdF9uYXZfYmFyX2FkbWluLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93X2JhclwiKVxuICAgICAgICBvdmVybGF5X2FwcF9tb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG92ZXJsYXlfYXBwX21vYmlsZSkge1xuICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIHZhciBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyXCIpO1xuXG5cbiAgICB2YXIgcHJvZHVjdF9jYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdF9jYXRlZ29yeSBidXR0b25cIik7XG5cblxuICAgIGlmIChwcm9kdWN0X2NhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBwcm9kdWN0X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICB2YXIgZmFjdG9yeV9jYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFjdG9yeV9jYXRlZ29yeSBidXR0b25cIik7XG5cblxuICAgIGlmIChmYWN0b3J5X2NhdGVnb3J5KSB7XG4gICAgICBmYWN0b3J5X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBmYWN0b3J5X2NhdGVnb3J5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG5cblxuICB9XG5cbiAgc2hvd0NhcmRTZWFyY2goKXtcbiAgICB0aGlzLnBvcHVwVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRoaXMub3ZlcmxheVNlYXJjaEJhclRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICBoaWRlQ2FyZFNlYXJjaCgpe1xuICAgIHRoaXMucG9wdXBUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy5vdmVybGF5U2VhcmNoQmFyVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclN2ZWx0ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtc3ZlbHRlJztcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCJcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0IEFscGluZSBmcm9tICdhbHBpbmVqcydcbiBcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmVcbiBcbkFscGluZS5zdGFydCgpXG5cblxucmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vc3ZlbHRlL2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLnN2ZWx0ZSQvKSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuICAgICAgICAgICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGNsb3NpbmcgXCIpXCIgYWZ0ZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfVwiP2ApO1xuICAgIH1cbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVNwYWNlZEFycmF5KHBhcnRzKSB7XG4gICAgY29uc3QgZmluYWxQYXJ0cyA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgZmluYWxQYXJ0cy5wdXNoKC4uLnRyaW1BbGwocGFydCkuc3BsaXQoJyAnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcc10rL2csICcgJykudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcCgocykgPT4gcy5yZXBsYWNlKCddJywgJycpKVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpO1xubGV0IGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50ID0gbmV3IE1hcCgpO1xuY29uc3QgcmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG59O1xuY29uc3QgdW5yZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICBjb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICB9XG4gICAgfSwgNSk7XG59KTtcbmNvbnN0IGZpbmRDb21wb25lbnRzID0gKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59O1xuY29uc3QgZmluZENoaWxkcmVuID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZm9yRWFjaCgoY2hpbGRDb21wb25lbnROYW1lLCBjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG5jb25zdCBmaW5kUGFyZW50ID0gKGN1cnJlbnRDb21wb25lbnQpID0+IHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWVGb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgZmluZENoaWxkcmVuKGNvbXBvbmVudCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5cbmNsYXNzIFZhbHVlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5nZXQobm9ybWFsaXplZE5hbWUpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICB9XG4gICAgZ2V0RGlydHlQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgfVxuICAgIGdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuICAgIH1cbiAgICBmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZUFsbFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0geyAuLi50aGlzLnBlbmRpbmdQcm9wcywgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSB7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbn1cblxuLy8gYmFzZSBJSUZFIHRvIGRlZmluZSBpZGlvbW9ycGhcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQU5EIE5PVyBJVCBCRUdJTlMuLi5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBsZXQgRU1QVFlfU0VUID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgY29uZmlndXJhdGlvbiB2YWx1ZXMsIHVwZGF0YWJsZSBieSB1c2VycyBub3dcbiAgICAgICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbW9ycGhTdHlsZTogXCJvdXRlckhUTUxcIixcbiAgICAgICAgICAgIGNhbGxiYWNrcyA6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlck5vZGVSZW1vdmVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3AsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdtZXJnZScsXG4gICAgICAgICAgICAgICAgc2hvdWxkUHJlc2VydmU6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1wcmVzZXJ2ZVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZUFwcGVuZDogZnVuY3Rpb24gKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXJlLWFwcGVuZFwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZW1vdmU6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJIZWFkTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIENvcmUgTW9ycGhpbmcgQWxnb3JpdGhtIC0gbW9ycGgsIG1vcnBoTm9ybWFsaXplZENvbnRlbnQsIG1vcnBoT2xkTm9kZVRvLCBtb3JwaENoaWxkcmVuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gbW9ycGgob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnID0ge30pIHtcblxuICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIG9sZE5vZGUgPSBvbGROb2RlLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBwYXJzZUNvbnRlbnQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkQ29udGVudCA9IG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCk7XG5cbiAgICAgICAgICAgIGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjdHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmhlYWQuYmxvY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFkID0gbm9ybWFsaXplZE5ld0NvbnRlbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRIZWFkICYmIG5ld0hlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2VzID0gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZCwgb2xkSGVhZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBoZWFkIHByb21pc2VzIHJlc29sdmUsIGNhbGwgbW9ycGggYWdhaW4sIGlnbm9yaW5nIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwiaW5uZXJIVE1MXCIpIHtcblxuICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCwgc28gd2UgYXJlIG9ubHkgdXBkYXRpbmcgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZpbmQgdGhlIGJlc3QgZWxlbWVudCBtYXRjaCBpbiB0aGUgbmV3IGNvbnRlbnQsIG1vcnBoIHRoYXQsIGFuZCBtZXJnZSBpdHMgc2libGluZ3NcbiAgICAgICAgICAgICAgICAvLyBpbnRvIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGJlc3RNYXRjaCA9IGZpbmRCZXN0Tm9kZU1hdGNoKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3Rhc2ggdGhlIHNpYmxpbmdzIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGluc2VydGVkIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBiZXN0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzU2libGluZyA9IGJlc3RNYXRjaD8ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IGJlc3RNYXRjaD8ubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBtb3JwaCBpdFxuICAgICAgICAgICAgICAgIGxldCBtb3JwaGVkTm9kZSA9IG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIGJlc3RNYXRjaCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2FzIGEgYmVzdCBtYXRjaCwgbWVyZ2UgdGhlIHNpYmxpbmdzIGluIHRvbyBhbmQgcmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aG9sZSBidW5jaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBub3RoaW5nIHdhcyBhZGRlZCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJEbyBub3QgdW5kZXJzdGFuZCBob3cgdG8gbW9ycGggc3R5bGUgXCIgKyBjdHgubW9ycGhTdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBwb3NzaWJsZUFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIGN0eFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHBvc3NpYmxlQWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gb2xkTm9kZSByb290IG5vZGUgdG8gbWVyZ2UgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBuZXdDb250ZW50IG5ldyBjb250ZW50IHRvIG1lcmdlXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgZW5kZWQgdXAgaW4gdGhlIERPTVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4Lmlnbm9yZUFjdGl2ZSAmJiBvbGROb2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA7IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblxuICAgICAgICAgICAgICAgIG9sZE5vZGUucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3Q29udGVudCwgb2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5pZ25vcmUpIDsgZWxzZSBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5zdHlsZSAhPT0gXCJtb3JwaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBjb3JlIGFsZ29yaXRobSBmb3IgbWF0Y2hpbmcgdXAgY2hpbGRyZW4uICBUaGUgaWRlYSBpcyB0byB1c2UgaWQgc2V0cyB0byB0cnkgdG8gbWF0Y2ggdXBcbiAgICAgICAgICogbm9kZXMgYXMgZmFpdGhmdWxseSBhcyBwb3NzaWJsZS4gIFdlIGdyZWVkaWx5IG1hdGNoLCB3aGljaCBhbGxvd3MgdXMgdG8ga2VlcCB0aGUgYWxnb3JpdGhtIGZhc3QsIGJ1dFxuICAgICAgICAgKiBieSB1c2luZyBpZCBzZXRzLCB3ZSBhcmUgYWJsZSB0byBiZXR0ZXIgbWF0Y2ggdXAgd2l0aCBjb250ZW50IGRlZXBlciBpbiB0aGUgRE9NLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCYXNpYyBhbGdvcml0aG0gaXMsIGZvciBlYWNoIG5vZGUgaW4gdGhlIG5ldyBjb250ZW50OlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBvbGQgcGFyZW50LCBhcHBlbmQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAqIC0gaWYgdGhlIG5ldyBjb250ZW50IGhhcyBhbiBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnQsIG1vcnBoXG4gICAgICAgICAqIC0gc2VhcmNoIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICogLSBpZiBpZCBzZXQgbWF0Y2ggZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlIHNlYXJjaCBmb3IgYSBcInNvZnRcIiBtYXRjaFxuICAgICAgICAgKiAtIGlmIGEgc29mdCBtYXRjaCBpcyBmb3VuZCwgbW9ycGhcbiAgICAgICAgICogLSBvdGhlcndpc2UsIHByZXBlbmQgdGhlIG5ldyBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHR3byBzZWFyY2ggYWxnb3JpdGhtcyB0ZXJtaW5hdGUgaWYgY29tcGV0aW5nIG5vZGUgbWF0Y2hlcyBhcHBlYXIgdG8gb3V0d2VpZ2ggd2hhdCBjYW4gYmUgYWNoaWV2ZWRcbiAgICAgICAgICogd2l0aCB0aGUgY3VycmVudCBub2RlLiAgU2VlIGZpbmRJZFNldE1hdGNoKCkgYW5kIGZpbmRTb2Z0TWF0Y2goKSBmb3IgZGV0YWlscy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdQYXJlbnQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnQgfSBvbGRQYXJlbnQgdGhlIG9sZCBjb250ZW50IHRoYXQgd2UgYXJlIG1lcmdpbmcgdGhlIG5ldyBjb250ZW50IGludG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihuZXdQYXJlbnQsIG9sZFBhcmVudCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBpbnNlcnRpb25Qb2ludCA9IG9sZFBhcmVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgICAgICAgICAvLyBydW4gdGhyb3VnaCBhbGwgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAobmV4dE5ld0NoaWxkKSB7XG5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZCA9IG5leHROZXdDaGlsZDtcbiAgICAgICAgICAgICAgICBuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBleGl0aW5nIHBhcmVudCdzIGNoaWxkcmVuLCBqdXN0IGFwcGVuZFxuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBub2RlIGhhcyBhbiBpZCBzZXQgbWF0Y2ggdGhlbiBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKGluc2VydGlvblBvaW50LCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBzZWFyY2ggZm9yd2FyZCBpbiB0aGUgZXhpc3Rpbmcgb2xkIGNoaWxkcmVuIGZvciBhbiBpZCBzZXQgbWF0Y2hcbiAgICAgICAgICAgICAgICBsZXQgaWRTZXRNYXRjaCA9IGZpbmRJZFNldE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmb3VuZCBhIHBvdGVudGlhbCBtYXRjaCwgcmVtb3ZlIHRoZSBub2RlcyB1bnRpbCB0aGF0IHBvaW50IGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChpZFNldE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vIGlkIHNldCBtYXRjaCBmb3VuZCwgc28gc2NhbiBmb3J3YXJkIGZvciBhIHNvZnQgbWF0Y2ggZm9yIHRoZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICAgICAgICBsZXQgc29mdE1hdGNoID0gZmluZFNvZnRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlLCBtb3JwaFxuICAgICAgICAgICAgICAgIGlmIChzb2Z0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFiYW5kb24gYWxsIGhvcGUgb2YgbW9ycGhpbmcsIGp1c3QgaW5zZXJ0IHRoZSBuZXcgY2hpbGQgYmVmb3JlIHRoZSBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICAgICAgICAvLyBhbmQgbW92ZSBvblxuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbnkgcmVtYWluaW5nIG9sZCBub2RlcyB0aGF0IGRpZG4ndCBtYXRjaCB1cCB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB3aGlsZSAoaW5zZXJ0aW9uUG9pbnQgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQXR0cmlidXRlIFN5bmNpbmcgQ29kZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBhdHRyIHtTdHJpbmd9IHRoZSBhdHRyaWJ1dGUgdG8gYmUgbXV0YXRlZFxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgKiBAcGFyYW0gdXBkYXRlVHlwZSB7KFwidXBkYXRlXCJ8XCJyZW1vdmVcIil9XG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBzaG91bGQgYmUgaWdub3JlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUoYXR0ciwgdG8sIHVwZGF0ZVR5cGUsIGN0eCkge1xuICAgICAgICAgICAgaWYoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgdG8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHN5bmNzIGEgZ2l2ZW4gbm9kZSB3aXRoIGFub3RoZXIgbm9kZSwgY29weWluZyBvdmVyIGFsbCBhdHRyaWJ1dGVzIGFuZFxuICAgICAgICAgKiBpbm5lciBlbGVtZW50IHN0YXRlIGZyb20gdGhlICdmcm9tJyBub2RlIHRvIHRoZSAndG8nIG5vZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBmcm9tIHRoZSBlbGVtZW50IHRvIGNvcHkgYXR0cmlidXRlcyAmIHN0YXRlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0byB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzeW5jTm9kZUZyb20oZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXG4gICAgICAgICAgICAvLyBpZiBpcyBhbiBlbGVtZW50IHR5cGUsIHN5bmMgdGhlIGF0dHJpYnV0ZXMgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIG5ldyBub2RlIGludG8gdGhlIG5ldyBub2RlXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMSAvKiBlbGVtZW50IHR5cGUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZXMgPSB0by5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZnJvbUF0dHJpYnV0ZSBvZiBmcm9tQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG8uZ2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSkgIT09IGZyb21BdHRyaWJ1dGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIGZyb21BdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgYmFja3dhcmRzIHRvIGF2b2lkIHNraXBwaW5nIG92ZXIgaXRlbXMgd2hlbiBhIGRlbGV0ZSBvY2N1cnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdG9BdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlID0gdG9BdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzeW5jIHRleHQgbm9kZXNcbiAgICAgICAgICAgIGlmICh0eXBlID09PSA4IC8qIGNvbW1lbnQgKi8gfHwgdHlwZSA9PT0gMyAvKiB0ZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvLm5vZGVWYWx1ZSAhPT0gZnJvbS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8ubm9kZVZhbHVlID0gZnJvbS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHRvLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgLy8gc3luYyBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBzeW5jSW5wdXRWYWx1ZShmcm9tLCB0bywgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gZWxlbWVudCB0byBzeW5jIHRoZSB2YWx1ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0gIT09IHRvW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgJ3VwZGF0ZScsIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bYXR0cmlidXRlTmFtZV0gPSBmcm9tW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICdyZW1vdmUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTkI6IG1hbnkgYm90aGFucyBkaWVkIHRvIGJyaW5nIHVzIGluZm9ybWF0aW9uOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL3BhdHJpY2stc3RlZWxlLWlkZW0vbW9ycGhkb20vYmxvYi9tYXN0ZXIvc3JjL3NwZWNpYWxFbEhhbmRsZXJzLmpzXG4gICAgICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vY2hvb2pzL25hbm9tb3JwaC9ibG9iL21hc3Rlci9saWIvbW9ycGguanNMMTEzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmcm9tIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0byBzeW5jIHRoZSBpbnB1dCB2YWx1ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCkge1xuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgZnJvbS50eXBlICE9PSAnZmlsZScpIHtcblxuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBzeW5jIGJvb2xlYW4gYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnY2hlY2tlZCcsIGN0eCk7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdkaXNhYmxlZCcsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyb20uaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdzZWxlY3RlZCcsIGN0eCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRvIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gdG8udmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gdGhlIEhFQUQgdGFnIGNhbiBiZSBoYW5kbGVkIHNwZWNpYWxseSwgZWl0aGVyIHcvIGEgJ21lcmdlJyBvciAnYXBwZW5kJyBzdHlsZVxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWRUYWcsIGN1cnJlbnRIZWFkLCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHByZXNlcnZlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IG5vZGVzVG9BcHBlbmQgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIHB1dCBhbGwgbmV3IGhlYWQgZWxlbWVudHMgaW50byBhIE1hcCwgYnkgdGhlaXIgb3V0ZXJIVE1MXG4gICAgICAgICAgICBsZXQgc3JjVG9OZXdIZWFkTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc3JjVG9OZXdIZWFkTm9kZXMuc2V0KG5ld0hlYWRDaGlsZC5vdXRlckhUTUwsIG5ld0hlYWRDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciBlYWNoIGVsdCBpbiB0aGUgY3VycmVudCBoZWFkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBoZWFkIGVsZW1lbnQgaXMgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIGxldCBpbk5ld0NvbnRlbnQgPSBzcmNUb05ld0hlYWROb2Rlcy5oYXMoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ByZXNlcnZlZCA9IGN0eC5oZWFkLnNob3VsZFByZXNlcnZlKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5OZXdDb250ZW50IHx8IGlzUHJlc2VydmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCB2ZXJzaW9uIGFuZCBsZXQgdGhlIG5ldyB2ZXJzaW9uIHJlcGxhY2UgaXQgYW5kIHJlLWV4ZWN1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgYW5kIHNob3VsZCBub3QgYmUgcmUtYXBwZW5kZWQsIHNvIHJlbW92ZSBpdCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV3IGNvbnRlbnQgbWFwLCBwcmVzZXJ2aW5nIGl0IGluIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLmRlbGV0ZShjdXJyZW50SGVhZEVsdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRNZXJnZVN0eWxlID09PSBcImFwcGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIGFuZCB0aGlzIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBpZiBhbmQgb25seSBpZiBpdCBpcyBtYXJrZWQgZm9yIHJlLWFwcGVuZCBkbyB3ZSBkbyBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVBcHBlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBtZXJnZSwgd2UgcmVtb3ZlIHRoaXMgY29udGVudCBzaW5jZSBpdCBpcyBub3QgaW4gdGhlIG5ldyBoZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmhlYWQuc2hvdWxkUmVtb3ZlKGN1cnJlbnRIZWFkRWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXNoIHRoZSByZW1haW5pbmcgbmV3IGhlYWQgZWxlbWVudHMgaW4gdGhlIE1hcCBpbnRvIHRoZVxuICAgICAgICAgICAgLy8gbm9kZXMgdG8gYXBwZW5kIHRvIHRoZSBoZWFkIHRhZ1xuICAgICAgICAgICAgbm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFbHQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChuZXdOb2RlLm91dGVySFRNTCkuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3RWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsdC5ocmVmIHx8IG5ld0VsdC5zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHJlbW92ZWQgZWxlbWVudHMsIGFmdGVyIHdlIGhhdmUgYXBwZW5kZWQgdGhlIG5ldyBlbGVtZW50cyB0byBhdm9pZFxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBuZXR3b3JrIHJlcXVlc3RzIGZvciB0aGluZ3MgbGlrZSBzdHlsZSBzaGVldHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge2FkZGVkOiBhZGRlZCwga2VwdDogcHJlc2VydmVkLCByZW1vdmVkOiByZW1vdmVkfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub09wKCkge1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICBEZWVwIG1lcmdlcyB0aGUgY29uZmlnIG9iamVjdCBhbmQgdGhlIElkaW9tb3JvcGguZGVmYXVsdHMgb2JqZWN0IHRvXG4gICAgICAgICAgcHJvZHVjZSBhIGZpbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuICAgICAgICAgICAgbGV0IGZpbmFsQ29uZmlnID0ge307XG4gICAgICAgICAgICAvLyBjb3B5IHRvcCBsZXZlbCBzdHVmZiBpbnRvIGZpbmFsIGNvbmZpZ1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgZGVmYXVsdHMpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgY29uZmlnKTtcblxuICAgICAgICAgICAgLy8gY29weSBjYWxsYmFja3MgaW50byBmaW5hbCBjb25maWcgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgY2FsbGJhY2tzKVxuICAgICAgICAgICAgZmluYWxDb25maWcuY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgZGVmYXVsdHMuY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblxuICAgICAgICAgICAgLy8gY29weSBoZWFkIGNvbmZpZyBpbnRvIGZpbmFsIGNvbmZpZyAgKGRvIHRoaXMgdG8gZGVlcCBtZXJnZSB0aGUgaGVhZClcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmhlYWQgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgZGVmYXVsdHMuaGVhZCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbENvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1vcnBoQ29udGV4dChvbGROb2RlLCBuZXdDb250ZW50LCBjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvbGROb2RlLFxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQ6IG5ld0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbW9ycGhTdHlsZTogY29uZmlnLm1vcnBoU3R5bGUsXG4gICAgICAgICAgICAgICAgaWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZVZhbHVlOiBjb25maWcuaWdub3JlQWN0aXZlVmFsdWUsXG4gICAgICAgICAgICAgICAgaWRNYXA6IGNyZWF0ZUlkTWFwKG9sZE5vZGUsIG5ld0NvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRlYWRJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG4gICAgICAgICAgICAgICAgaGVhZDogY29uZmlnLmhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRTZXRNYXRjaChub2RlMSwgbm9kZTIsIGN0eCkge1xuICAgICAgICAgICAgaWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlMS5pZCAhPT0gXCJcIiAmJiBub2RlMS5pZCA9PT0gbm9kZTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpID4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFydEluY2x1c2l2ZSAhPT0gZW5kRXhjbHVzaXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmNsdXNpdmUgPSBzdGFydEluY2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuICAgICAgICAgICAgcmV0dXJuIGVuZEV4Y2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gU2NhbnMgZm9yd2FyZCBmcm9tIHRoZSBpbnNlcnRpb25Qb2ludCBpbiB0aGUgb2xkIHBhcmVudCBsb29raW5nIGZvciBhIHBvdGVudGlhbCBpZCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIGlkIG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHRoZSBudW1iZXIgb2YgcG90ZW50aWFsIGlkIG1hdGNoZXMgd2UgYXJlIGRpc2NhcmRpbmcgaXMgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAgICAvLyBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBmb3IgdGhlIG5ldyBjaGlsZFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRJZFNldE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgLy8gbWF4IGlkIG1hdGNoZXMgd2UgYXJlIHdpbGxpbmcgdG8gZGlzY2FyZCBpbiBvdXIgc2VhcmNoXG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID0gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5ld0NoaWxkLCBvbGRQYXJlbnQpO1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsTWF0Y2ggPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBvbmx5IHNlYXJjaCBmb3J3YXJkIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2hcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBwb3NzaWJpbGl0eSBvZiBhbiBpZCBtYXRjaCwgc2NhbiBmb3J3YXJkXG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgcG90ZW50aWFsIGlkIG1hdGNoIGNvdW50IHdlIGFyZSBkaXNjYXJkaW5nICh0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhpcyB0byBtYWtlIGl0IGxpa2VseVxuICAgICAgICAgICAgICAgIC8vIHdvcnRoIGl0KVxuICAgICAgICAgICAgICAgIGxldCBvdGhlck1hdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBpZCBtYXRjaCwgcmV0dXJuIHRoZSBjdXJyZW50IHBvdGVudGlhbCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxNYXRjaCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZXIgdGhlIG90aGVyIHBvdGVudGlhbCBtYXRjaGVzIG9mIHRoaXMgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJNYXRjaENvdW50ICs9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxNYXRjaCwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlck1hdGNoQ291bnQgPiBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgbW9yZSBwb3RlbnRpYWwgaWQgbWF0Y2hlcyBpbiBfb3RoZXJfIGNvbnRlbnQsIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgaGF2ZSBhIGdvb2QgY2FuZGlkYXRlIGZvciBhbiBpZCBtYXRjaCwgc28gcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgc29mdCBtYXRjaFxuICAgICAgICAvLyBmb3IgdGhlIG5ld0NoaWxkLiAgV2Ugc3RvcCBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2ggZm9yIHRoZSBuZXcgY2hpbGQgT1JcbiAgICAgICAgLy8gaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBpbiB0aGUgb2xkIHBhcmVudHMgY2hpbGRyZW4gT1IgaWYgd2UgZmluZCB0d29cbiAgICAgICAgLy8gcG90ZW50aWFsIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIG5leHQgdHdvIHBpZWNlcyBvZiBuZXcgY29udGVudFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsU29mdE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGxldCBzaWJsaW5nU29mdE1hdGNoQ291bnQgPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgcG90ZW50aWFsIHNvZnQgbWF0Y2ggaGFzIGEgcG90ZW50aWFsIGlkIHNldCBtYXRjaCB3aXRoIHRoZSByZW1haW5pbmcgbmV3XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgc28gYmFpbCBvdXQgb2YgbG9va2luZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgc29mdCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IG5vZGUsIHJldHVybiBpdFxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChuZXh0U2libGluZywgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBuZXcgbm9kZSBoYXMgYSBzb2Z0IG1hdGNoIHdpdGggdGhpcyBub2RlLCBzb1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50IG9mIGZ1dHVyZSBzb2Z0IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1NvZnRNYXRjaENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBmdXR1cmUgc29mdCBtYXRjaGVzLCBiYWlsIHRvIGFsbG93IHRoZSBzaWJsaW5ncyB0byBzb2Z0IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgY29uc3VtZSBmdXR1cmUgc29mdCBtYXRjaGVzIGZvciB0aGUgc2FrZSBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nU29mdE1hdGNoQ291bnQgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhZHZhbmNlZCB0byB0aGUgbmV4dCBvbGQgY29udGVudCBjaGlsZFxuICAgICAgICAgICAgICAgIHBvdGVudGlhbFNvZnRNYXRjaCA9IHBvdGVudGlhbFNvZnRNYXRjaC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgc3ZncyB0byBhdm9pZCBmYWxzZS1wb3NpdGl2ZSBtYXRjaGVzIG9uIGhlYWQsIGV0Yy5cbiAgICAgICAgICAgIGxldCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkID0gbmV3Q29udGVudC5yZXBsYWNlKC88c3ZnKFxcc1tePl0qPnw+KShbXFxzXFxTXSo/KTxcXC9zdmc+L2dpbSwgJycpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbmV3Q29udGVudCBjb250YWlucyBhIGh0bWwsIGhlYWQgb3IgYm9keSB0YWcsIHdlIGNhbiBzaW1wbHkgcGFyc2UgaXQgdy9vIHdyYXBwaW5nXG4gICAgICAgICAgICBpZiAoY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2h0bWw+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2hlYWQ+LykgfHwgY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2JvZHk+LykpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobmV3Q29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBmdWxsIEhUTUwgZG9jdW1lbnQsIHJldHVybiB0aGUgZG9jdW1lbnQgaXRzZWxmIGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcmV0dXJuIHRoZSBodG1sIGVsZW1lbnQgYXMgdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWxFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXJ0aWFsIEhUTUwsIHdyYXAgaXQgaW4gYSB0ZW1wbGF0ZSB0YWcgdG8gcHJvdmlkZSBhIHBhcmVudCBlbGVtZW50IGFuZCBhbHNvIHRvIGhlbHBcbiAgICAgICAgICAgICAgICAvLyBkZWFsIHdpdGggdG91Y2h5IHRhZ3MgbGlrZSB0ciwgdGJvZHksIGV0Yy5cbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFwiPGJvZHk+PHRlbXBsYXRlPlwiICsgbmV3Q29udGVudCArIFwiPC90ZW1wbGF0ZT48L2JvZHk+XCIsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2VEb2MuYm9keS5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBVbm5lY2Vzc2FyeUxvY2FsVmFyaWFibGVKU1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHRlbXBsYXRlIHRhZyBjcmVhdGVkIGJ5IGlkaW9tb3JwaCBwYXJzaW5nIGNhbiBzZXJ2ZSBhcyBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgc2luZ2xlIG5vZGUgaXMgYWRkZWQgYXMgYSBjaGlsZCB0byBhIGR1bW15IHBhcmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsIG5vZGVzIGluIHRoZSBhcnJheSBvciBIVE1MRWxlbWVudCBjb2xsZWN0aW9uIGFyZSBjb25zb2xpZGF0ZWQgdW5kZXJcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBkdW1teSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgWy4uLm5ld0NvbnRlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChlbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRTaWJsaW5ncyhwcmV2aW91c1NpYmxpbmcsIG1vcnBoZWROb2RlLCBuZXh0U2libGluZykge1xuICAgICAgICAgICAgbGV0IHN0YWNrID0gW107XG4gICAgICAgICAgICBsZXQgYWRkZWQgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChwcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobm9kZSk7IC8vIHB1c2ggYWRkZWQgcHJlY2VkaW5nIHNpYmxpbmdzIG9uIGluIG9yZGVyIGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRlZC5wdXNoKG1vcnBoZWROb2RlKTtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXh0U2libGluZyk7IC8vIGhlcmUgd2UgYXJlIGdvaW5nIGluIG9yZGVyLCBzbyBwdXNoIG9uIGFzIHdlIHNjYW4sIHJhdGhlciB0aGFuIGFkZFxuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdE5vZGVNYXRjaChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbmV3Q29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdTY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gbmV3U2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVzdEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCkge1xuICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG4gICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZCh0ZW1wTm9kZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRlbXBOb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHRlbXBOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gSUQgU2V0IEZ1bmN0aW9uc1xuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gIWN0eC5kZWFkSWRzLmhhcyhpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KHRhcmdldE5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIHJldHVybiBpZFNldC5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBub2RlKSB7XG4gICAgICAgICAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIHtcbiAgICAgICAgICAgICAgICBjdHguZGVhZElkcy5hZGQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuICAgICAgICAgICAgbGV0IHNvdXJjZVNldCA9IGN0eC5pZE1hcC5nZXQobm9kZTEpIHx8IEVNUFRZX1NFVDtcbiAgICAgICAgICAgIGxldCBtYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gYSBwb3RlbnRpYWwgbWF0Y2ggaXMgYW4gaWQgaW4gdGhlIHNvdXJjZSBhbmQgcG90ZW50aWFsSWRzU2V0LCBidXRcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGhhcyBub3QgYWxyZWFkeSBiZWVuIG1lcmdlZCBpbnRvIHRoZSBET01cbiAgICAgICAgICAgICAgICBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpIHtcbiAgICAgICAgICAgICAgICAgICAgKyttYXRjaENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRjaENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm90dG9tIHVwIGFsZ29yaXRobSB0aGF0IGZpbmRzIGFsbCBlbGVtZW50cyB3aXRoIGlkcyBpbnNpZGUgb2YgdGhlIG5vZGVcbiAgICAgICAgICogYXJndW1lbnQgYW5kIHBvcHVsYXRlcyBpZCBzZXRzIGZvciB0aG9zZSBub2RlcyBhbmQgYWxsIHRoZWlyIHBhcmVudHMsIGdlbmVyYXRpbmdcbiAgICAgICAgICogYSBzZXQgb2YgaWRzIGNvbnRhaW5lZCB3aXRoaW4gYWxsIG5vZGVzIGZvciB0aGUgZW50aXJlIGhpZXJhcmNoeSBpbiB0aGUgRE9NXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICAgICAgICAgKiBAcGFyYW0ge01hcDxOb2RlLCBTZXQ8U3RyaW5nPj59IGlkTWFwXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuICAgICAgICAgICAgbGV0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBmaW5kIGFsbCBlbGVtZW50cyB3aXRoIGFuIGlkIHByb3BlcnR5XG4gICAgICAgICAgICBsZXQgaWRFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbHQgb2YgaWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWx0O1xuICAgICAgICAgICAgICAgIC8vIHdhbGsgdXAgdGhlIHBhcmVudCBoaWVyYXJjaHkgb2YgdGhhdCBlbGVtZW50LCBhZGRpbmcgdGhlIGlkXG4gICAgICAgICAgICAgICAgLy8gb2YgZWxlbWVudCB0byB0aGUgcGFyZW50J3MgaWQgc2V0XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG5vZGVQYXJlbnQgJiYgY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZFNldCA9IGlkTWFwLmdldChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGlkIHNldCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGluc2VydCBpdCBpbiB0aGUgIG1hcFxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRTZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcC5zZXQoY3VycmVudCwgaWRTZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlkU2V0LmFkZChlbHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvbXB1dGVzIGEgbWFwIG9mIG5vZGVzIHRvIGFsbCBpZHMgY29udGFpbmVkIHdpdGhpbiB0aGF0IG5vZGUgKGluY2x1c2l2ZSBvZiB0aGVcbiAgICAgICAgICogbm9kZSkuICBUaGlzIG1hcCBjYW4gYmUgdXNlZCB0byBhc2sgaWYgdHdvIG5vZGVzIGhhdmUgaW50ZXJzZWN0aW5nIHNldHMgb2YgaWRzLCB3aGljaCBhbGxvd3NcbiAgICAgICAgICogZm9yIGEgbG9vc2VyIGRlZmluaXRpb24gb2YgXCJtYXRjaGluZ1wiIHRoYW4gdHJhZGl0aW9uIGlkIG1hdGNoaW5nLCBhbmQgYWxsb3dzIGNoaWxkIG5vZGVzXG4gICAgICAgICAqIHRvIGNvbnRyaWJ1dGUgdG8gYSBwYXJlbnQgbm9kZXMgbWF0Y2hpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb2xkQ29udGVudCAgdGhlIG9sZCBjb250ZW50IHRoYXQgd2lsbCBiZSBtb3JwaGVkXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3Q29udGVudCAgdGhlIG5ldyBjb250ZW50IHRvIG1vcnBoIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBhIG1hcCBvZiBub2RlcyB0byBpZCBzZXRzIGZvciB0aGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGxldCBpZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5ld0NvbnRlbnQsIGlkTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBpZE1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gVGhpcyBpcyB3aGF0IGVuZHMgdXAgYmVjb21pbmcgdGhlIElkaW9tb3JwaCBnbG9iYWwgb2JqZWN0XG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcnBoLFxuICAgICAgICAgICAgZGVmYXVsdHNcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgc3luY0F0dHJpYnV0ZXMgPSAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZnJvbUVsLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIHRvRWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBleHRlcm5hbE11dGF0aW9uVHJhY2tlcikge1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG4gICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9yaWdpbmFsIGVsZW1lbnQgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlci5wdXNoKGlkKTtcbiAgICAgICAgaWYgKCFyZXBsYWNlV2l0aENsb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcbiAgICAgICAgb2xkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRPbGRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZE9sZEVsZW1lbnQ7XG4gICAgfTtcbiAgICByb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxpdmUtcHJlc2VydmVdJykuZm9yRWFjaCgobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IG5ld0VsZW1lbnQuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEtbGl2ZS1wcmVzZXJ2ZSBhdHRyaWJ1dGUgcmVxdWlyZXMgYW4gaWQgYXR0cmlidXRlIHRvIGJlIHNldCBvbiB0aGUgZWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZEVsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQgd2l0aCBpZCBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgb3JpZ2luYWwgSFRNTGApO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxpdmUtcHJlc2VydmUnKTtcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuc2V0KGlkLCBvbGRFbGVtZW50KTtcbiAgICAgICAgc3luY0F0dHJpYnV0ZXMobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgSWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMoZnJvbUVsLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmlkID09PSB0b0VsLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRnJvbUVsID0gbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKGZyb21FbC5pZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvbmVkRnJvbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBJZGlvbW9ycGgubW9ycGgoY2xvbmVkRnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5BbHBpbmUubW9ycGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIG1vcnBoIGZ1bmN0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBBbHBpbmUuanMgTW9ycGggcGx1Z2luIGlzIGluc3RhbGxlZCBhbmQgbG9hZGVkLCBzZWUgaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy9tb3JwaCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbCAhPT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDaGFuZ2VzID0gZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuZ2V0Q2hhbmdlZEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdPUFRJT04nICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FbCA9IGNsb25lSFRNTEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZFRvRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSB8fCAoZnJvbUVsLmlkICYmIGZyb21FbC5pZCAhPT0gdG9FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2tpcC1tb3JwaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhub2RlLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAobm9kZS5pZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKG9yaWdpbmFsRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnRzLicpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuY2xhc3MgVW5zeW5jZWRJbnB1dHNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBldmVudDogJ2lucHV0JywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlciA9IG1vZGVsRWxlbWVudFJlc29sdmVyO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzID0gbmV3IFVuc3luY2VkSW5wdXRDb250YWluZXIoKTtcbiAgICB9XG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQodGFyZ2V0KTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyLmdldE1vZGVsTmFtZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5hZGQoZWxlbWVudCwgbW9kZWxOYW1lKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzLmFsbFVuc3luY2VkSW5wdXRzKCk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cy5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgfVxufVxuY2xhc3MgVW5zeW5jZWRJbnB1dENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGFkZChlbGVtZW50LCBtb2RlbE5hbWUgPSBudWxsKSB7XG4gICAgICAgIGlmIChtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmVzZXRVbnN5bmNlZEZpZWxkcygpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFsbFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5kZXhPZihtb2RlbE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzO1xuICAgIH1cbn1cblxuY2xhc3MgSG9va01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soLi4uYXJncykpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIGdldEJvZHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBhd2FpdCB0aGlzLnJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhbmdpbmdJdGVtc1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHNldEl0ZW0oaXRlbU5hbWUsIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogb3JpZ2luYWxSZWNvcmQub3JpZ2luYWwsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBwcmV2aW91c1ZhbHVlLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGl0ZW1OYW1lLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgbGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHRydWVPcmlnaW5hbFZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yZW1vdmVkSXRlbXMua2V5cygpKTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgYXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5yZW1vdmVkQ2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuaXNFbXB0eSgpICYmXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuaXNFbXB0eSgpKTtcbiAgICB9XG59XG5cbmNsYXNzIEV4dGVybmFsTXV0YXRpb25UcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSA/IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KSA6IG51bGw7XG4gICAgfVxuICAgIGdldEFkZGVkRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHM7XG4gICAgfVxuICAgIHdhc0VsZW1lbnRBZGRlZChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG4gICAgfVxuICAgIGhhbmRsZVBlbmRpbmdDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm9uTXV0YXRpb25zKHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNsYXNzTGlzdCk7XG4gICAgICAgIGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBhZGRlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiBwcmV2aW91c1N0eWxlc1trZXldID09PSB1bmRlZmluZWQgfHwgcHJldmlvdXNTdHlsZXNba2V5XSAhPT0gbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBhZGRlZE9yQ2hhbmdlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkU3R5bGUoc3R5bGUsIG5ld1N0eWxlc1tzdHlsZV0sIHByZXZpb3VzU3R5bGVzW3N0eWxlXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICB9XG4gICAgZXh0cmFjdFN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVzLnNwbGl0KCc7JykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuICAgIGlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09ICdGT05UJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJ3ZlcnRpY2FsLWFsaWduOiBpbmhlcml0Oyc7XG4gICAgfVxufVxuXG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHByb3BzLCBsaXN0ZW5lcnMsIGlkLCBiYWNrZW5kLCBlbGVtZW50RHJpdmVyKSB7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGxpc3RlbmVyLmV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lci5ldmVudCwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxpc3RlbmVyLmV2ZW50KT8ucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgYWRkUGx1Z2luKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdW5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRVcChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpbmRDb21wb25lbnRzKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUdXJib0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgVHVyYm8gIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICAgIH1cbiAgICB0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHBlcmZvcm1SZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG4gICAgICAgICAgICBjaGlsZHJlbjoge30sXG4gICAgICAgICAgICB1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuICAgICAgICAgICAgZmlsZXM6IGZpbGVzVG9TZW5kLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXF1ZXN0OnN0YXJ0ZWQnLCByZXF1ZXN0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdChyZXF1ZXN0Q29uZmlnLnByb3BzLCByZXF1ZXN0Q29uZmlnLmFjdGlvbnMsIHJlcXVlc3RDb25maWcudXBkYXRlZCwgcmVxdWVzdENvbmZpZy5jaGlsZHJlbiwgcmVxdWVzdENvbmZpZy51cGRhdGVkUHJvcHNGcm9tUGFyZW50LCByZXF1ZXN0Q29uZmlnLmZpbGVzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmICghaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpPy5pbmNsdWRlcygnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnKSAmJlxuICAgICAgICAgICAgICAgICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1cmJvRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RpZmllZE1vZGVsVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcbiAgICAgICAgICAgIGlmICghbmV3RWxlbWVudC5tYXRjaGVzKCdbZGF0YS1jb250cm9sbGVyfj1saXZlXScpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpdmUgY29tcG9uZW50IHRlbXBsYXRlIG11c3QgY29udGFpbiBhIHNpbmdsZSByb290IGNvbnRyb2xsZXIgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgJyR7dGhpcy5uYW1lfScgY29tcG9uZW50IEhUTUwgcmV0dXJuZWQ6YCwge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcygpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgICAgICBjb25zdCBldmVudHNUb0VtaXQgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0RXZlbnRzVG9FbWl0KCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKTtcbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID09PSAnZ2V0JyAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KHByb3BzKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzJywgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3VwZGF0ZWQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzRnJvbVBhcmVudCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbicsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHByb3BzLCB1cGRhdGVkIH07XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnByb3BzRnJvbVBhcmVudCA9IHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbiAmJiAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSAncG9zdCcsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QnVpbGRlciA9IG5ldyBSZXF1ZXN0QnVpbGRlcih1cmwsIG1ldGhvZCwgY3NyZlRva2VuKTtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCBPYmplY3Qua2V5cyh1cGRhdGVkKSk7XG4gICAgfVxufVxuXG5jbGFzcyBTdGltdWx1c0VsZW1lbnREcml2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0Rpc3BhdGNoVmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgdHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpID8/ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJlxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHtmaW5hbEFjdGlvbn1cImApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICB9XG4gICAgZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGluZ0VsZW1lbnRzID0gWy4uLkFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpKV07XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gW2VsZW1lbnQsIC4uLm1hdGNoaW5nRWxlbWVudHNdO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuICAgIH1cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZXZlcnQnO1xuICAgIH1cbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnO1xuICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRBdHRyaWJ1dGUnIDogJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnYWRkQXR0cmlidXRlJztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFnZVVubG9hZGluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOnN0YXJ0ZWQnLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdEaXJlY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICckcmVuZGVyJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlRW1wdHkodmFsdWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09ICcnIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgIGlmICghaXNWYWx1ZUVtcHR5KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBjb25zdCBidWlsZFF1ZXJ5U3RyaW5nRW50cmllcyA9IChkYXRhLCBlbnRyaWVzID0ge30sIGJhc2VLZXkgPSAnJykgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaUtleSwgaVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYmFzZUtleSA9PT0gJycgPyBpS2V5IDogYCR7YmFzZUtleX1bJHtpS2V5fV1gO1xuICAgICAgICAgICAgaWYgKCcnID09PSBiYXNlS2V5ICYmIGlzVmFsdWVFbXB0eShpVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChudWxsICE9PSBpVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IHsgLi4uZW50cmllcywgLi4uYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoaVZhbHVlLCBlbnRyaWVzLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQoaVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJTJDL2csICcsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfTtcbiAgICBjb25zdCBlbnRyaWVzID0gYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoZGF0YSk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApXG4gICAgICAgIC5qb2luKCcmJyk7XG59XG5mdW5jdGlvbiBmcm9tUXVlcnlTdHJpbmcoc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nLCAnJyk7XG4gICAgaWYgKHNlYXJjaCA9PT0gJycpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCBpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSA9IChrZXksIHZhbHVlLCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCAuLi5yZXN0XSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbZmlyc3RdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGFbZmlyc3RdID0gTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChzZWNvbmQpKSA/IHt9IDogW107XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoW3NlY29uZCwgLi4ucmVzdF0uam9pbignLicpLCB2YWx1ZSwgZGF0YVtmaXJzdF0pO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IHNlYXJjaC5zcGxpdCgnJicpLm1hcCgoaSkgPT4gaS5zcGxpdCgnPScpKTtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCdbJykpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCcnID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBkb3ROb3RhdGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcWy9nLCAnLicpLnJlcGxhY2UoL10vZywgJycpO1xuICAgICAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoZG90Tm90YXRlZEtleSwgdmFsdWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5jbGFzcyBVcmxVdGlscyBleHRlbmRzIFVSTCB7XG4gICAgaGFzKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpW2tleV07XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVF1ZXJ5U3RyaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdG9RdWVyeVN0cmluZyhkYXRhKTtcbiAgICB9XG59XG5jbGFzcyBIaXN0b3J5U3RyYXRlZ3kge1xuICAgIHN0YXRpYyByZXBsYWNlKHVybCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5LnN0YXRlLCAnJywgdXJsKTtcbiAgICB9XG59XG5cbmNsYXNzIFF1ZXJ5U3RyaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBwaW5nKSB7XG4gICAgICAgIHRoaXMubWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsIChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybFV0aWxzID0gbmV3IFVybFV0aWxzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB1cmxVdGlscy50b1N0cmluZygpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tYXBwaW5nKS5mb3JFYWNoKChbcHJvcCwgbWFwcGluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChwcm9wKTtcbiAgICAgICAgICAgICAgICB1cmxVdGlscy5zZXQobWFwcGluZy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXJsICE9PSB1cmxVdGlscy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeVN0cmF0ZWd5LnJlcGxhY2UodXJsVXRpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyh0aGlzLmNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZXF1ZXN0OnN0YXJ0ZWQnLCAocmVxdWVzdERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICBub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAoIXBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBMYXp5UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoJ2xhenknICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnbG9hZGluZycpPy52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRPYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdmU6YXBwZWFyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIH1cbn1cblxuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aW9uIG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuICAgIH1cbiAgICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgZGVsZXRlIGV2ZW50QXJncy5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IExhenlQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUXVlcnlTdHJpbmdQbHVnaW4odGhpcy5xdWVyeU1hcHBpbmdWYWx1ZSksXG4gICAgICAgICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW4odGhpcy5jb21wb25lbnQpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZXZlbnRzVG9FbWl0OiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRGlzcGF0Y2g6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgcmVxdWVzdE1ldGhvZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdwb3N0JyB9LFxuICAgIHF1ZXJ5TWFwcGluZzogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IHt9IH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5ID0gKGNvbnRyb2xsZXIpID0+IG5ldyBCYWNrZW5kKGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlLCBjb250cm9sbGVyLmNzcmZWYWx1ZSk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ZlbHRlQ29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzdmVsdGVDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHN2ZWx0ZUNvbnRyb2xsZXJzW2AuLyR7bmFtZX0uc3ZlbHRlYF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdmVsdGUgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/PyB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW50cm8gPSB0aGlzLmludHJvVmFsdWUgPz8gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGludHJvOiB0aGlzLmludHJvLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QgPSB0aGlzLmFwcDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcpO1xuICAgIH1cbiAgICBfZGVzdHJveUlmRXhpc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQucm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbnRybzogdGhpcy5pbnRybyxcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ3N2ZWx0ZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGludHJvOiBCb29sZWFuLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICBsZXQgcG9uZCA7XHJcblxyXG4gICAgZXhwb3J0IGxldCBmaWxlO1xyXG5cclxuICAgIGxldCBmaWxlbmFtZTtcclxuXHJcbiAgICBsZXQgdGFiID0gW107XHJcblxyXG4gICAgZXhwb3J0IGxldCBuYW1lID0gXCJmaWxlcG9uZFwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGFzIGluaXRpYWxpc2VkXCIpXHJcbiAgICAgICAgLy8gZmlsZW5hbWUgPSBKU09OLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkRmlsZShlcnJvciAsIGZpbGVzKXtcclxuICAgIC8vICAgIGlmKGZpbGVzLmZpbGVuYW1lICE9IEpTT04ucGFyc2UoZmlsZSkpe1xyXG4gICAgLy8gICAgICAgICBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWVcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgSlNPTi5wYXJzZShmaWxlKS5tYXAoKHZhbCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZih0YWIuaW5kZXhPZih2YWwpID09IC0xKXtcclxuICAgIC8vICAgICAgICAgICAgIHRhYi5wdXNoKHZhbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgY29uc29sZS5sb2coZmlsZXMuZmlsZW5hbWUpXHJcbiAgICAgICAgdGFiLnB1c2goZmlsZXMuZmlsZW5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHJlbW92ZWRcIilcclxuXHJcbiAgICAgICAgdGFiID0gdGFiLmZpbHRlcihlbCA9PiBlbCAhPSBmaWxlcy5maWxlbmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiKVxyXG5cclxuICAgICAgICBmaWxlbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRhYilcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImFwcFwiPlxyXG5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIG5hbWU9XCJmaWxlX3VwZGF0ZVwiIGlkPVwiXCIgYmluZDp2YWx1ZT17ZmlsZW5hbWV9IGNsYXNzPVwiaW5wdXRfY2hvb3NlX2ZpbGVcIj5cclxuICAgIDxGaWxlUG9uZCBiaW5kOnRoaXM9e3BvbmR9IHtuYW1lfVxyXG4gICAgc2VydmVyPVwiL2ZpbGVwb25kX2VkaXRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgIG1heEZpbGVzPXsxMH1cclxuICAgIG9ucmVtb3ZlZmlsZT17aGFuZGxlUmVtb3ZlRmlsZX1cclxuICAgIGxhYmVsSWRsZT1cIkdsaXNzZXogdm9zIGZpY2hpZXJzXCJcclxuICAgIGxhYmVsUHJvY2Vzc2luZz1cIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgZmlsZXM9e1xyXG4gICAgICAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsb2NhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsdWdpbnM9e1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBcclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XG4gICAgbGV0IGN1cnJlbnRUaXRsZTtcbiAgICBsZXQgYXJyYXlMaW5rcyA9IFtdO1xuICAgIGxldCBnb0xlZnQgPSBmYWxzZTtcbiAgICBleHBvcnQgbGV0IGNhdGVnb3J5O1xuXG4gICAgbGV0IGxpc3QgPSBbXTtcblxuICAgIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHsgdGl0bGU6IGVsZW1lbnQubmFtZSwgbnVtOiAoKSA9PiBzZXRDYXRlZ29yeShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaXRlbXMpIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRDYXRlZ29yeShuYW1lLCBpdGVtcykge1xuICAgICAgICBnb0xlZnQgPSAhZ29MZWZ0O1xuICAgICAgICBjdXJyZW50VGl0bGUgPSBuYW1lO1xuICAgICAgICBhcnJheUxpbmtzID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgYXJyYXlMaW5rcy5wdXNoKHsga2V5OiBlbGVtZW50LmtleSwgdmFsdWU6IGVsZW1lbnQubmFtZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgbGV0IHNwZWNpYWxMaXN0U3ViSXRlbXMgPSBbXG4gICAgICAgIHsgaGVhZGVyX3RpdGxlOiBcIkNhdMOpZ29yaWVzXCIsIGxpc3Q6IGxpc3QgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlR29MZWZ0KHBhcmFtcykge1xuICAgICAgICBnb0xlZnQgPSBwYXJhbXM7XG4gICAgfVxuXG4gICAgaW1wb3J0IFNpZGUgZnJvbSBcIi4vU2lkZS5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyX3BhcmVudF9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9hbGxfc3ViX2l0ZW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfbWFpblwiIGNsYXNzOmdvTGVmdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY2PDqHMgcmFwaWRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY3VlaWw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBwcm9wb3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyNlYWNoIHNwZWNpYWxMaXN0U3ViSXRlbXMgYXMgc3ViSXRlbSAoc3ViSXRlbS5oZWFkZXJfdGl0bGUpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWJJdGVtLmhlYWRlcl90aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHN1Ykl0ZW0ubGlzdCBhcyBpdGVtIChpdGVtLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3BlY2lhbF9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtpdGVtLm51bX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdib3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNpemUtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTguMjUgNC41IDcuNSA3LjUtNy41IDcuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaWRlXG4gICAgICAgICAgICBnb1NpZGU9e2dvTGVmdH1cbiAgICAgICAgICAgIG9uOnVwZGF0ZT17KGV2ZW50KSA9PiB1cGRhdGVHb0xlZnQoZXZlbnQuZGV0YWlsKX1cbiAgICAgICAgICAgIHtjdXJyZW50VGl0bGV9XG4gICAgICAgICAgICB7YXJyYXlMaW5rc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIml0ZW1fdGl0bGVcIj5UaXRsZSBzZWM8L3NwYW4+XG4gICAgICAgICAgICA8dWwgc2xvdD1cImxpc3RfbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NZWlsbGV1cmVzIHZlbnRlczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Ob3V2ZWF1dMOpczwvbGk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TaWRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuXHJcbiAgICBsZXQgZGlzcGxheWVkVGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgdGV4dCA9IFwiQmllbnZlbnVlIMOgIGwnZXNwYWNlIGRlIGdlc3Rpb24gZGUgdm90cmUgdml0cmluZVwiO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGFqb3V0ZXIgdW5lIGxldHRyZSDDoCBsYSBmb2lzXHJcbiAgICBmdW5jdGlvbiByZXZlYWxOZXh0TGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXllZFRleHQgKz0gdGV4dFtpbmRleF07XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmV2ZWFsTmV4dExldHRlciwgMTAwKTsgLy8gRMOpbGFpIGVudHJlIGNoYXF1ZSBsZXR0cmUgKGVuIG1pbGxpc2Vjb25kZXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIETDqWNsZW5jaGUgbCdhZmZpY2hhZ2UgZGVzIGxldHRyZXMgdW5lIHBhciB1bmUgYXUgY2hhcmdlbWVudCBkdSBjb21wb3NhbnRcclxuICAgIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHJldmVhbE5leHRMZXR0ZXIoKTtcclxuICAgIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxoMT57ZGlzcGxheWVkVGV4dH08L2gxPlxyXG5cclxuIiwiPHN0eWxlIGdsb2JhbD5cclxuICAgIC8qIEBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmNzcyc7ICovXHJcbiAgICAvKiBAaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyc7ICovXHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEZpbGVQb25kICwge3JlZ2lzdGVyUGx1Z2luICwgc3VwcG9ydGVkfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1maWxlcG9uZC9zcmMvaW5kZXhcIjtcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtZXhpZi1vcmllbnRhdGlvbidcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXJlc2l6ZSdcclxuXHJcbiAgICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZUVkaXQgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybSdcclxuXHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSdcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICBcclxuXHJcbiAgICByZWdpc3RlclBsdWdpbihGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uICxGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldywgRmlsZVBvbmRQbHVnaW5JbWFnZVJlc2l6ZSAsIEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0ICwgRmlsZVBvbmRQbHVnaW5JbWFnZVRyYW5zZm9ybSlcclxuXHJcbiAgICAgbGV0IHBvbmQ7XHJcblxyXG4gICAgIGxldCBmaWxlbmFtZSA7XHJcblxyXG4gICAgIGxldCB0YWIgPSBbXTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG5hbWUgPSBcImZpbGVwb25kXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoYXMgaW5pdGlhbGlzZWRcIilcclxuICAgICAgICAvLyBwb25kLmFkZEZpbGUoZmlsZSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAvLyAgICBpZihmaWxlcy5maWxlbmFtZSAhPSBKU09OLnBhcnNlKGZpbGUpKXtcclxuICAgIC8vICAgICAgICAgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lXHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWwpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYodGFiLmluZGV4T2YodmFsKSA9PSAtMSl7XHJcbiAgICAvLyAgICAgICAgICAgICB0YWIucHVzaCh2YWwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVuYW1lKVxyXG4gICAgICAgIHRhYi5wdXNoKGZpbGVzLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSByZW1vdmVkXCIpXHJcblxyXG4gICAgICAgIHRhYiA9IHRhYi5maWx0ZXIoZWwgPT4gZWwgIT0gZmlsZXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYilcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcbiAgICB9XHJcbiAgICBcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYXBwXCI+XHJcbiAgICA8aW5wdXQgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlsZV91cGRhdGVcIiBpZD1cIlwiIGJpbmQ6dmFsdWU9e2ZpbGVuYW1lfSBjbGFzcz1cImlucHV0X2Nob29zZV9maWxlXCI+XHJcblxyXG4gICAgPEZpbGVQb25kIGJpbmQ6dGhpcz17cG9uZH0ge25hbWV9XHJcbiAgICBzZXJ2ZXI9XCIvZmlsZXBvbmRcIlxyXG4gICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgIG9uaW5pdD17aGFuZGxlSW5pdH1cclxuICAgIG9uYWRkZmlsZT17aGFuZGxlQWRkRmlsZX1cclxuICAgICBtYXhGaWxlcz17MTB9XHJcbiAgICBvbnJlbW92ZWZpbGU9e2hhbmRsZVJlbW92ZUZpbGV9XHJcbiAgICBsYWJlbElkbGU9XCJHbGlzc2V6IHZvcyBmaWNoaWVyc1wiXHJcbiAgICBsYWJlbFByb2Nlc3Npbmc9XCJDaGFyZ2VtZW50Li4uXCJcclxuICAgIFxyXG4gICAgcGx1Z2lucz17XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlld1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgID5cclxuICAgIDwvRmlsZVBvbmQ+XHJcblxyXG5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwic3ZlbHRlXCI7XHJcblxyXG4gICAgZXhwb3J0IGxldCBnb1NpZGUgPSBmYWxzZTtcclxuICAgIGV4cG9ydCBsZXQgY3VycmVudFRpdGxlO1xyXG4gICAgZXhwb3J0IGxldCBhcnJheUxpbmtzO1xyXG5cclxuICAgIGxldCBoaWRlU2lkZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2lkZUJhcigpIHtcclxuICAgICAgICBoaWRlU2lkZSA9ICFoaWRlU2lkZTtcclxuICAgICAgICBnb1NpZGUgPSBmYWxzZTtcclxuICAgICAgICBkaXNwYXRjaChcInVwZGF0ZVwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdlxyXG4gICAgY2xhc3M9XCJjb250YWluZXJfc3ViX2l0ZW1zIGNvbnRhaW5lcl9zdWJfaXRlbXNfc2Vjb25kYXJ5XCJcclxuICAgIGNsYXNzOmdvU2lkZVxyXG4gICAgY2xhc3M6aGlkZVNpZGVcclxuPlxyXG4gICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpdGVtX3RpdGxlXCIgb246Y2xpY2s9e2hpZGVTaWRlQmFyfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Ym94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzaXplLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjUgMTkuNSAzIDEybTAgMCA3LjUtNy41TTMgMTJoMThcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuPk1lbnUgcHJpbmNpcGFsPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgeyNpZiBhcnJheUxpbmtzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsjZWFjaCBhcnJheUxpbmtzIGFzIGl0ZW0gKGl0ZW0ua2V5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYXRlZ29yeS9jYXRlZ29yeUl0ZW0ve2l0ZW0ua2V5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlN3aXBlciIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImluaXRpYWxpemUiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25fZXhpdCIsImxlZnRfbmF2aWdhdGlvbl9iYXIiLCJvdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNlbGVjdCIsImFyZWFzIiwiZmF2IiwiZmF2QWxsIiwiZWwiLCJzd2lwZXJfZXhwbG9yYXRpb24iLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJsb29wIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsImJhcl9hZG1pbiIsImJhcl9hZG1pbl9tb2JpbGUiLCJvdmVybGF5X2FwcF9tb2JpbGUiLCJsZWZ0X25hdl9iYXJfYWRtaW4iLCJ0b3BfbmF2X2Jhcl9hZG1pbiIsImJvZHkiLCJ0b2dnbGUiLCJzcGlubmVyIiwicHJvZHVjdF9jYXRlZ29yeSIsImZhY3RvcnlfY2F0ZWdvcnkiLCJzaG93Q2FyZFNlYXJjaCIsInBvcHVwVGFyZ2V0Iiwib3ZlcmxheVNlYXJjaEJhclRhcmdldCIsImhpZGVDYXJkU2VhcmNoIiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCIsInJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMiLCJBbHBpbmUiLCJ3aW5kb3ciLCJzdGFydCIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwicGFyc2VEaXJlY3RpdmVzIiwiY29udGVudCIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJzdGF0ZSIsImdldExhc3RBY3Rpb25OYW1lIiwiYWN0aW9uIiwicHVzaEluc3RydWN0aW9uIiwiYXJncyIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsInRyaW0iLCJwdXNoTW9kaWZpZXIiLCJjb25jYXQiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwicGFydCIsInRyaW1BbGwiLCJzcGxpdCIsInN0ciIsInJlcGxhY2UiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJtb2RlbCIsIm1hcCIsImpvaW4iLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwiaW5kZXhPZiIsImNvbXBvbmVudE1hcEJ5RWxlbWVudCIsIldlYWtNYXAiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsIk1hcCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic2V0IiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsInJlamVjdCIsImNvdW50IiwibWF4Q291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZ2V0IiwiY2xlYXJJbnRlcnZhbCIsImZpbmRDb21wb25lbnRzIiwiY3VycmVudENvbXBvbmVudCIsIm9ubHlQYXJlbnRzIiwib25seU1hdGNoTmFtZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnROYW1lIiwiY29udGFpbnMiLCJmaW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJjaGlsZENvbXBvbmVudE5hbWUiLCJjaGlsZENvbXBvbmVudCIsImZpbmRQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0VmFsdWVGcm9tRWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiY2hlY2tlZCIsImdldEF0dHJpYnV0ZSIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwiZGF0YXNldCIsInNldFZhbHVlT25FbGVtZW50IiwidmFsdWVGb3VuZCIsInZhbCIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdGVkIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImZvcm1FbGVtZW50IiwiY2xvc2VzdCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXREZWVwRGF0YSIsImRhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJWYWx1ZVN0b3JlIiwicHJvcHMiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwidXBkYXRlZFByb3BzRnJvbVBhcmVudCIsIm5vcm1hbGl6ZWROYW1lIiwiaGFzIiwiZ2V0T3JpZ2luYWxQcm9wcyIsImdldERpcnR5UHJvcHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImNoYW5nZWQiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJjdXJyZW50VmFsdWUiLCJJZGlvbW9ycGgiLCJFTVBUWV9TRVQiLCJTZXQiLCJkZWZhdWx0cyIsIm1vcnBoU3R5bGUiLCJjYWxsYmFja3MiLCJiZWZvcmVOb2RlQWRkZWQiLCJub09wIiwiYWZ0ZXJOb2RlQWRkZWQiLCJiZWZvcmVOb2RlTW9ycGhlZCIsImFmdGVyTm9kZU1vcnBoZWQiLCJiZWZvcmVOb2RlUmVtb3ZlZCIsImFmdGVyTm9kZVJlbW92ZWQiLCJiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkIiwiaGVhZCIsInN0eWxlIiwic2hvdWxkUHJlc2VydmUiLCJlbHQiLCJzaG91bGRSZUFwcGVuZCIsInNob3VsZFJlbW92ZSIsImFmdGVySGVhZE1vcnBoZWQiLCJtb3JwaCIsIm9sZE5vZGUiLCJuZXdDb250ZW50IiwiY29uZmlnIiwiRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJzZUNvbnRlbnQiLCJub3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJjdHgiLCJjcmVhdGVNb3JwaENvbnRleHQiLCJtb3JwaE5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplZE5ld0NvbnRlbnQiLCJibG9jayIsIm9sZEhlYWQiLCJuZXdIZWFkIiwicHJvbWlzZXMiLCJoYW5kbGVIZWFkRWxlbWVudCIsImFsbCIsImFzc2lnbiIsImlnbm9yZSIsIm1vcnBoQ2hpbGRyZW4iLCJiZXN0TWF0Y2giLCJmaW5kQmVzdE5vZGVNYXRjaCIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwibW9ycGhlZE5vZGUiLCJtb3JwaE9sZE5vZGVUbyIsImluc2VydFNpYmxpbmdzIiwiaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQiLCJwb3NzaWJsZUFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmVWYWx1ZSIsImFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmUiLCJpc1NvZnRNYXRjaCIsInJlcGxhY2VDaGlsZCIsIkhUTUxIZWFkRWxlbWVudCIsInN5bmNOb2RlRnJvbSIsIm5ld1BhcmVudCIsIm9sZFBhcmVudCIsIm5leHROZXdDaGlsZCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRpb25Qb2ludCIsIm5ld0NoaWxkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbiIsImlzSWRTZXRNYXRjaCIsImlkU2V0TWF0Y2giLCJmaW5kSWRTZXRNYXRjaCIsInJlbW92ZU5vZGVzQmV0d2VlbiIsInNvZnRNYXRjaCIsImZpbmRTb2Z0TWF0Y2giLCJpbnNlcnRCZWZvcmUiLCJ0ZW1wTm9kZSIsInJlbW92ZU5vZGUiLCJpZ25vcmVBdHRyaWJ1dGUiLCJhdHRyIiwidG8iLCJ1cGRhdGVUeXBlIiwibm9kZVR5cGUiLCJmcm9tQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJ0b0F0dHJpYnV0ZXMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsImZyb21BdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJlcnIiLCJ0b0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGVWYWx1ZSIsInN5bmNJbnB1dFZhbHVlIiwic3luY0Jvb2xlYW5BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwiSFRNTFRleHRBcmVhRWxlbWVudCIsIm5ld0hlYWRUYWciLCJjdXJyZW50SGVhZCIsImFkZGVkIiwicmVtb3ZlZCIsInByZXNlcnZlZCIsIm5vZGVzVG9BcHBlbmQiLCJoZWFkTWVyZ2VTdHlsZSIsInNyY1RvTmV3SGVhZE5vZGVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm5ld0hlYWRDaGlsZCIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJjdXJyZW50SGVhZEVsdCIsImluTmV3Q29udGVudCIsImlzUmVBcHBlbmRlZCIsImlzUHJlc2VydmVkIiwiX2xvb3AiLCJuZXdOb2RlIiwiX25vZGVzVG9BcHBlbmQiLCJfaTIiLCJuZXdFbHQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImhyZWYiLCJzcmMiLCJwcm9taXNlIiwiX3Jlc29sdmUiLCJfaTMiLCJfcmVtb3ZlZCIsInJlbW92ZWRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJrZXB0IiwibWVyZ2VEZWZhdWx0cyIsImZpbmFsQ29uZmlnIiwidGFyZ2V0IiwiaWRNYXAiLCJjcmVhdGVJZE1hcCIsImRlYWRJZHMiLCJub2RlMSIsIm5vZGUyIiwidGFnTmFtZSIsImlkIiwiZ2V0SWRJbnRlcnNlY3Rpb25Db3VudCIsInN0YXJ0SW5jbHVzaXZlIiwiZW5kRXhjbHVzaXZlIiwibmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50IiwicG90ZW50aWFsTWF0Y2giLCJvdGhlck1hdGNoQ291bnQiLCJwb3RlbnRpYWxTb2Z0TWF0Y2giLCJzaWJsaW5nU29mdE1hdGNoQ291bnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJjb250ZW50V2l0aFN2Z3NSZW1vdmVkIiwibWF0Y2giLCJwYXJzZUZyb21TdHJpbmciLCJnZW5lcmF0ZWRCeUlkaW9tb3JwaCIsImh0bWxFbGVtZW50IiwicmVzcG9uc2VEb2MiLCJkdW1teVBhcmVudCIsIk5vZGUiLCJhcHBlbmQiLCJfaTQiLCJfYXJyIiwic3RhY2siLCJub2RlIiwiY3VycmVudEVsZW1lbnQiLCJiZXN0RWxlbWVudCIsInNjb3JlIiwibmV3U2NvcmUiLCJzY29yZUVsZW1lbnQiLCJpc0lkSW5Db25zaWRlcmF0aW9uIiwiaWRJc1dpdGhpbk5vZGUiLCJ0YXJnZXROb2RlIiwiaWRTZXQiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0Iiwic291cmNlU2V0IiwibWF0Y2hDb3VudCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJwb3B1bGF0ZUlkTWFwRm9yTm9kZSIsIm5vZGVQYXJlbnQiLCJpZEVsZW1lbnRzIiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsImN1cnJlbnQiLCJvbGRDb250ZW50Iiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsInN5bmNBdHRyaWJ1dGVzIiwiZnJvbUVsIiwidG9FbCIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJleHRlcm5hbE11dGF0aW9uVHJhY2tlciIsIm9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyIiwib3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUiLCJtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAiLCJyZXBsYWNlV2l0aENsb25lIiwib2xkRWxlbWVudCIsImNsb25lZE9sZEVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsIl9mcm9tRWwkcGFyZW50RWxlbWVudCIsIkVsZW1lbnQiLCJjbG9uZWRGcm9tRWwiLCJfX3giLCJ3YXNFbGVtZW50QWRkZWQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJlbGVtZW50Q2hhbmdlcyIsImdldENoYW5nZWRFbGVtZW50IiwiYXBwbHlUb0VsZW1lbnQiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwiaXNFcXVhbE5vZGUiLCJub3JtYWxpemVkRnJvbUVsIiwibm9ybWFsaXplZFRvRWwiLCJvcmlnaW5hbEVsZW1lbnQiLCJVbnN5bmNlZElucHV0c1RyYWNrZXIiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsIl90aGlzIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJjYWxsYmFjayIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJhY3RpdmF0ZSIsIl90aGlzMiIsIl9yZWYiLCJkZWFjdGl2YXRlIiwiX3RoaXMzIiwiX3JlZjIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFya01vZGVsQXNTeW5jZWQiLCJtb2RlbE5hbWUiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50IiwiZ2V0TW9kZWxOYW1lIiwiZ2V0VW5zeW5jZWRJbnB1dHMiLCJhbGxVbnN5bmNlZElucHV0cyIsImdldFVuc3luY2VkTW9kZWxzIiwiZ2V0VW5zeW5jZWRNb2RlbE5hbWVzIiwicmVzZXRVbnN5bmNlZEZpZWxkcyIsInVuc3luY2VkTm9uTW9kZWxGaWVsZHMiLCJ1bnN5bmNlZE1vZGVsTmFtZXMiLCJ1bnN5bmNlZE1vZGVsRmllbGRzIiwiX3RoaXM0IiwiSG9va01hbmFnZXIiLCJob29rcyIsInJlZ2lzdGVyIiwiaG9va05hbWUiLCJ1bnJlZ2lzdGVyIiwidHJpZ2dlckhvb2siLCJfbGVuIiwiX2tleSIsIkJhY2tlbmRSZXNwb25zZSIsInJlc3BvbnNlIiwiX2dldEJvZHkiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInRleHQiLCJnZXRCb2R5IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXIiLCJjaGFuZ2VkSXRlbXMiLCJyZW1vdmVkSXRlbXMiLCJzZXRJdGVtIiwiaXRlbU5hbWUiLCJuZXdWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVkUmVjb3JkIiwib3JpZ2luYWwiLCJvcmlnaW5hbFJlY29yZCIsInJlbW92ZUl0ZW0iLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsImdldENoYW5nZWRJdGVtcyIsIl9yZWYzIiwiX3JlZjQiLCJnZXRSZW1vdmVkSXRlbXMiLCJpc0VtcHR5Iiwic2l6ZSIsIkVsZW1lbnRDaGFuZ2VzIiwiYWRkZWRDbGFzc2VzIiwicmVtb3ZlZENsYXNzZXMiLCJzdHlsZUNoYW5nZXMiLCJhdHRyaWJ1dGVDaGFuZ2VzIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsImFkZFN0eWxlIiwic3R5bGVOYW1lIiwib3JpZ2luYWxWYWx1ZSIsInJlbW92ZVN0eWxlIiwiYWRkQXR0cmlidXRlIiwiZ2V0QWRkZWRDbGFzc2VzIiwiZ2V0UmVtb3ZlZENsYXNzZXMiLCJnZXRDaGFuZ2VkU3R5bGVzIiwiZ2V0UmVtb3ZlZFN0eWxlcyIsImdldENoYW5nZWRBdHRyaWJ1dGVzIiwiZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QiLCJfZWxlbWVudCRjbGFzc0xpc3QyIiwiY2hhbmdlIiwic2V0UHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsIkV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJiaW5kIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImRpc2Nvbm5lY3QiLCJnZXRBZGRlZEVsZW1lbnRzIiwiaGFuZGxlUGVuZGluZ0NoYW5nZXMiLCJ0YWtlUmVjb3JkcyIsIm11dGF0aW9ucyIsImhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwibXV0YXRpb24iLCJpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24iLCJpc0NoYW5nZUluQWRkZWRFbGVtZW50IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsImFkZGVkRWxlbWVudCIsImhhbmRsZUNoaWxkTGlzdE11dGF0aW9uIiwiaGFuZGxlQXR0cmlidXRlTXV0YXRpb24iLCJfdGhpczUiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsIm9sZFZhbHVlIiwicHJldmlvdXNWYWx1ZXMiLCJuZXdWYWx1ZXMiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInByb3BlcnR5IiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJfdGhpczYiLCJmaW5nZXJwcmludCIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX3RoaXM2JGxpc3RlbmVycyRnZXQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJmaWxlcyIsImlucHV0IiwicmVuZGVyIiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZW1pdCIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZW1pdFVwIiwiZW1pdFNlbGYiLCJkb0VtaXQiLCJtYXRjaGluZ05hbWUiLCJfdGhpczciLCJhY3Rpb25zIiwiaXNUdXJib0VuYWJsZWQiLCJUdXJibyIsInBlcmZvcm1SZXF1ZXN0IiwiX3RoaXM4IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsImZpbGVzVG9TZW5kIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJyZXF1ZXN0Q29uZmlnIiwidXBkYXRlZCIsIm1ha2VSZXF1ZXN0IiwiX3JlZjUiLCJfY2FsbGVlMiIsIl9oZWFkZXJzJGdldCIsImJhY2tlbmRSZXNwb25zZSIsIl9pNiIsIl9PYmplY3QkdmFsdWVzIiwiaGVhZGVycyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJfeCIsIl90aGlzOSIsInNob3VsZFJlbmRlciIsInZpc2l0IiwibG9jYXRpb24iLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsImVycm9yIiwiY29uc29sZSIsIm5ld1Byb3BzIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiX3JlZjYiLCJfcmVmNyIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FsY3VsYXRlRGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJfdGhpczEwIiwic2V0VGltZW91dCIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiX3RoaXMxMSIsIl91cGRhdGVGcm9tUGFyZW50UHJvcHMiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiUmVmbGVjdCIsIkJhY2tlbmRSZXF1ZXN0IiwidXBkYXRlTW9kZWxzIiwiX3RoaXMxMiIsImlzUmVzb2x2ZWQiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJSZXF1ZXN0QnVpbGRlciIsInVybCIsImNzcmZUb2tlbiIsImJ1aWxkUmVxdWVzdCIsInNwbGl0VXJsIiwiX3NwbGl0VXJsIiwiX3NwbGl0VXJsMiIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiQWNjZXB0IiwidG90YWxGaWxlcyIsInJlZHVjZSIsInRvdGFsIiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsInJlcXVlc3REYXRhIiwicHJvcHNGcm9tUGFyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIl9pNyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwicGFyYW1zU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiQmFja2VuZCIsInJlcXVlc3RCdWlsZGVyIiwiX3RoaXMkcmVxdWVzdEJ1aWxkZXIkIiwiZmV0Y2giLCJiYWNrZW5kQWN0aW9uIiwiU3RpbXVsdXNFbGVtZW50RHJpdmVyIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlIiwicHJvcHNWYWx1ZSIsImV2ZW50c1RvRW1pdFZhbHVlIiwiZXZlbnRzVG9EaXNwYXRjaFZhbHVlIiwiTG9hZGluZ1BsdWdpbiIsIl90aGlzMTMiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNCIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE1IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsIl92YWxpZE1vZGlmaWVycyRnZXQiLCJsb2FkaW5nRGlyZWN0aXZlIiwic2hvd0VsZW1lbnQiLCJoaWRlRWxlbWVudCIsImxvYWRpbmdEaXJlY3RpdmVzIiwibWF0Y2hpbmdFbGVtZW50cyIsIlNWR0VsZW1lbnQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsIl9lbGVtZW50JGNsYXNzTGlzdDMiLCJfZWxlbWVudCRjbGFzc0xpc3Q0IiwiYXR0cmlidXRlIiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luIiwiX3RoaXMxNiIsImhhbmRsZU1vZGVsU2V0IiwidmFsaWRhdGVkRmllbGRzIiwiUGFnZVVubG9hZGluZ1BsdWdpbiIsImlzQ29ubmVjdGVkIiwiX3RoaXMxNyIsIlBvbGxpbmdEaXJlY3RvciIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE4IiwiX3JlZjkiLCJzdG9wQWxsUG9sbGluZyIsImNsZWFyUG9sbGluZyIsIl90aGlzMTkiLCJ0aW1lciIsIlBvbGxpbmdQbHVnaW4iLCJfdGhpczIwIiwicG9sbGluZ0RpcmVjdG9yIiwiaW5pdGlhbGl6ZVBvbGxpbmciLCJfdGhpczIxIiwicG9sbCIsInJhd1BvbGxDb25maWciLCJ3YXJuIiwiU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4iLCJfdGhpczIyIiwic3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMiLCJIVE1MRm9ybUVsZW1lbnQiLCJnZXRNb2RlbEJpbmRpbmciLCJ0YXJnZXRFdmVudE5hbWUiLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8iLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8yIiwiaW5uZXJNb2RlbE5hbWUiLCJpc1ZhbHVlRW1wdHkiLCJfaTgiLCJfT2JqZWN0JGtleXMiLCJ0b1F1ZXJ5U3RyaW5nIiwiYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMiLCJiYXNlS2V5IiwiX3JlZjEwIiwiX3JlZjExIiwiaUtleSIsImlWYWx1ZSIsIl9yZWYxMiIsIl9yZWYxMyIsImZyb21RdWVyeVN0cmluZyIsInNlYXJjaCIsImluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhIiwiX2tleSRzcGxpdCIsIl9rZXkkc3BsaXQyIiwiX3RvQXJyYXkiLCJmaXJzdCIsInNlY29uZCIsInJlc3QiLCJfcmVmMTQiLCJfcmVmMTUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkb3ROb3RhdGVkS2V5IiwiVXJsVXRpbHMiLCJfVVJMIiwic2V0RGF0YSIsIl93cmFwTmF0aXZlU3VwZXIiLCJVUkwiLCJIaXN0b3J5U3RyYXRlZ3kiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiUXVlcnlTdHJpbmdQbHVnaW4iLCJtYXBwaW5nIiwiX3RoaXMyMyIsInVybFV0aWxzIiwiY3VycmVudFVybCIsIl9yZWYxNiIsIl9yZWYxNyIsIkNoaWxkQ29tcG9uZW50UGx1Z2luIiwicGFyZW50TW9kZWxCaW5kaW5ncyIsIm1vZGVsRGlyZWN0aXZlcyIsIl90aGlzMjQiLCJnZXRDaGlsZHJlbkZpbmdlcnByaW50cyIsIm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlIiwiZmluZ2VycHJpbnRzIiwiZ2V0Q2hpbGRyZW4iLCJ0YWciLCJ0b0xvd2VyQ2FzZSIsInBhcmVudENvbXBvbmVudCIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiTGF6eVBsdWdpbiIsImludGVyc2VjdGlvbk9ic2VydmVyIiwiX2NvbXBvbmVudCRlbGVtZW50JGF0IiwiX3RoaXMyNSIsImdldE5hbWVkSXRlbSIsImdldE9ic2VydmVyIiwiX3RoaXMyNSRpbnRlcnNlY3Rpb25PIiwidW5vYnNlcnZlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczI2IiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImNyZWF0ZUNvbXBvbmVudCIsImNvbm5lY3RDb21wb25lbnQiLCJkaXNjb25uZWN0Q29tcG9uZW50IiwidXBkYXRlIiwiY3VycmVudFRhcmdldCIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjciLCJyYXdBY3Rpb24iLCJhY3Rpb25BcmdzIiwic3RvcFByb3BhZ2F0aW9uIiwiX3ZhbGlkTW9kaWZpZXJzJGdldDIiLCJfaTkiLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsIiRyZW5kZXIiLCJfdGhpczI4IiwiZ2V0RW1pdERpcmVjdGl2ZXMiLCJfcmVmMTgiLCJuYW1lTWF0Y2giLCJfdGhpczI5IiwiX3JlZjE5IiwiX3RoaXMzMCIsIl9yZWYyMCIsIiR1cGRhdGVNb2RlbCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUiLCJmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCIsImZpbmdlcnByaW50VmFsdWUiLCJldmVudEluZm8iLCJldmVudEFyZ3MiLCJlbWl0cyIsIl90aGlzMzEiLCJuYW1lVmFsdWUiLCJsaXN0ZW5lcnNWYWx1ZSIsImJhY2tlbmRGYWN0b3J5IiwicHJveGllZENvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJwbHVnaW5zIiwicXVlcnlNYXBwaW5nVmFsdWUiLCJfdGhpczMyIiwiX3JlZjIxIiwiX3RoaXMzMyIsIl9yZWYyMiIsImV2ZW50TmFtZSIsIl9lbGVtZW50JGZpbGVzIiwiZmluYWxWYWx1ZSIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJkaXNwYXRjaCIsInByZWZpeCIsIl90aGlzMzQiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50IiwiY3NyZiIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwicXVlcnlNYXBwaW5nIiwidXJsVmFsdWUiLCJyZXF1ZXN0TWV0aG9kVmFsdWUiLCJjc3JmVmFsdWUiLCJzdmVsdGVDb250cm9sbGVycyIsImltcG9ydEFsbFN2ZWx0ZUNvbXBvbmVudHMiLCJyZXNvbHZlU3ZlbHRlQ29tcG9uZW50IiwiZGVmYXVsdF8xIiwiX3RoaXMkcHJvcHNWYWx1ZSIsIl90aGlzJGludHJvVmFsdWUiLCJpbnRybyIsImludHJvVmFsdWUiLCJjb21wb25lbnRWYWx1ZSIsIl9kZXN0cm95SWZFeGlzdHMiLCJyb290IiwiJGRlc3Ryb3kiLCJCb29sZWFuIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=