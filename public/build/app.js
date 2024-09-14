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
	child_ctx[11] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

// (51:23) {#each links as item}
function create_each_block_3(ctx) {
	let a;
	let li;
	let t_value = /*item*/ ctx[14].key + "";
	let t;
	let a_href_value;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = /*item*/ ctx[14].value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, li);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t);
		},
		p(ctx, dirty) {
			if (dirty & /*links*/ 1 && t_value !== (t_value = /*item*/ ctx[14].key + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*links*/ 1 && a_href_value !== (a_href_value = /*item*/ ctx[14].value)) {
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

// (56:23) {#each linksCategories as item}
function create_each_block_2(ctx) {
	let a;
	let li;
	let t0_value = /*item*/ ctx[14].value + "";
	let t0;
	let t1;
	let a_href_value;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = "/category/" + /*item*/ ctx[14].key);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, li);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*linksCategories*/ 2 && t0_value !== (t0_value = /*item*/ ctx[14].value + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

			if (dirty & /*linksCategories*/ 2 && a_href_value !== (a_href_value = "/category/" + /*item*/ ctx[14].key)) {
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

// (73:28) {#each subItem.list as item (item.title)}
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
			span.textContent = `${/*item*/ ctx[14].title}`;
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
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*item*/ ctx[14].num);
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

// (66:12) {#each specialListSubItems as subItem (subItem.header_title)}
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
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[11].list);
	const get_key = ctx => /*item*/ ctx[14].title;

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
			span.textContent = `${/*subItem*/ ctx[11].header_title}`;
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

			if (dirty & /*specialListSubItems*/ 32) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*subItem*/ ctx[11].list);
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

// (107:12) 
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

// (108:12) 
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
	let div0;
	let t1;
	let div1;
	let ul;
	let t2;
	let t3;
	let each_blocks = [];
	let each2_lookup = new Map();
	let t4;
	let side;
	let current;
	let each_value_3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*links*/ ctx[0]);
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*linksCategories*/ ctx[1]);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*specialListSubItems*/ ctx[5]);
	const get_key = ctx => /*subItem*/ ctx[11].header_title;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each2_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	side = new _Side_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				goSide: /*goLeft*/ ctx[4],
				currentTitle: /*currentTitle*/ ctx[2],
				arrayLinks: /*arrayLinks*/ ctx[3],
				$$slots: {
					list_link: [create_list_link_slot],
					item_title: [create_item_title_slot]
				},
				$$scope: { ctx }
			}
		});

	side.$on("update", /*update_handler*/ ctx[8]);

	return {
		c() {
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0.innerHTML = `<span>Accès rapides</span>`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(side.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "item_title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "container_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "sub_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "container_sub_items container_sub_items_main");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goLeft", /*goLeft*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "container_all_sub_items");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "container_parent_all_sub_items");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, ul);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				if (each_blocks_2[i]) {
					each_blocks_2[i].m(ul, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				if (each_blocks_1[i]) {
					each_blocks_1[i].m(ul, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div3, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(side, div4, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*links*/ 1) {
				each_value_3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*links*/ ctx[0]);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_3(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(ul, t2);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_3.length;
			}

			if (dirty & /*linksCategories*/ 2) {
				each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*linksCategories*/ ctx[1]);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(ul, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty & /*specialListSubItems*/ 32) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*specialListSubItems*/ ctx[5]);
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each2_lookup, div3, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block, null, get_each_context);
			}

			if (!current || dirty & /*goLeft*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div3, "goLeft", /*goLeft*/ ctx[4]);
			}

			const side_changes = {};
			if (dirty & /*goLeft*/ 16) side_changes.goSide = /*goLeft*/ ctx[4];
			if (dirty & /*currentTitle*/ 4) side_changes.currentTitle = /*currentTitle*/ ctx[2];
			if (dirty & /*arrayLinks*/ 8) side_changes.arrayLinks = /*arrayLinks*/ ctx[3];

			if (dirty & /*$$scope*/ 2097152) {
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

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_2, detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);

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
	let { links } = $$props;
	let { linksCategories } = $$props;
	let list = [];

	category.forEach(element => {
		list.push({
			title: element.name,
			num: () => setCategory(element.name, element.items)
		});
	});

	function setCategory(name, items) {
		$$invalidate(4, goLeft = !goLeft);
		$$invalidate(2, currentTitle = name);
		$$invalidate(3, arrayLinks = []);

		items.forEach(element => {
			arrayLinks.push({ key: element.key, value: element.name });
		});
	}

	let specialListSubItems = [{ header_title: "Catégories", list }];

	function updateGoLeft(params) {
		$$invalidate(4, goLeft = params);
	}

	const update_handler = event => updateGoLeft(event.detail);

	$$self.$$set = $$props => {
		if ('category' in $$props) $$invalidate(7, category = $$props.category);
		if ('links' in $$props) $$invalidate(0, links = $$props.links);
		if ('linksCategories' in $$props) $$invalidate(1, linksCategories = $$props.linksCategories);
	};

	return [
		links,
		linksCategories,
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

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			category: 7,
			links: 0,
			linksCategories: 1
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVDaEIsTUFBTSxHQUFHLEtBQUs7T0FDZCxZQUFZO09BQ1osVUFBVTtLQUVqQixRQUFRLEdBQUcsS0FBSztPQUNkLFFBQVEsR0FBRyw2REFBcUI7O1VBRTdCLFdBQVc7a0JBQ2hCLFFBQVEsSUFBSSxRQUFRO2tCQUNwQixNQUFNLEdBQUcsS0FBSztFQUNkLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvIHN5bmMgXFwuc3ZlbHRlJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmUubWluLmNzcz85NmMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSIsIndlYnBhY2s6Ly8vRWRpdC5zdmVsdGUiLCJ3ZWJwYWNrOi8vL0hlbGxvLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vSG9tZUFuaW1hdGlvbi5zdmVsdGUiLCJ3ZWJwYWNrOi8vL05ldy5zdmVsdGUiLCJ3ZWJwYWNrOi8vL1NpZGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9FZGl0LnN2ZWx0ZVwiOiBcIi4vYXNzZXRzL3N2ZWx0ZS9jb250cm9sbGVycy9FZGl0LnN2ZWx0ZVwiLFxuXHRcIi4vSGVsbG8uc3ZlbHRlXCI6IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzL0hlbGxvLnN2ZWx0ZVwiLFxuXHRcIi4vSG9tZUFuaW1hdGlvbi5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvSG9tZUFuaW1hdGlvbi5zdmVsdGVcIixcblx0XCIuL05ldy5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvTmV3LnN2ZWx0ZVwiLFxuXHRcIi4vU2lkZS5zdmVsdGVcIjogXCIuL2Fzc2V0cy9zdmVsdGUvY29udHJvbGxlcnMvU2lkZS5zdmVsdGVcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvc3ZlbHRlL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZlbHRlJFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmUubWluLmNzcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXN2ZWx0ZS9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzIgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC1zdmVsdGUtLXN2ZWx0ZSc6IGNvbnRyb2xsZXJfMSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8yLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLy8gY29yZSB2ZXJzaW9uICsgbmF2aWdhdGlvbiwgcGFnaW5hdGlvbiBtb2R1bGVzOlxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgQXV0b3BsYXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG4vLyBpbXBvcnQgU3dpcGVyIGFuZCBtb2R1bGVzIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9idW5kbGUnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gW1wib3ZlcmxheVNlYXJjaEJhclwiICwgXCJwb3B1cFwiICwgXCJFeGl0XCJdXG5cbiAgY29ubmVjdCgpIHtcblxuICAgIC8vIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfc2lkZV9iYXJcIik7XG4gICAgdmFyIGJ1dHRvbl9leGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0X3NpZGVfYmFyXCIpO1xuICAgIHZhciBsZWZ0X25hdmlnYXRpb25fYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0X25hdmlnYXRpb25fYmFyXCIpO1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2aWdhdGlvbl9iYXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgaWYgKGJ1dHRvbl9leGl0KSB7XG4gICAgICBidXR0b25fZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdmlnYXRpb25fYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KVxuXG4gICAgfVxuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2aWdhdGlvbl9iYXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgIGlmIChpbnB1dHMpIHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xuICAgIGlmIChzZWxlY3QpIHtcbiAgICAgIHNlbGVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuICAgIHZhciBhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcbiAgICBpZiAoYXJlYXMpIHtcbiAgICAgIGFyZWFzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgdmFyIGZhdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmF2b3JpdGVfYnRuXCIpO1xuICAgIHZhciBmYXZBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhdm9yaXRlX2J0blwiKTtcbiAgICBpZiAoZmF2KSB7XG5cbiAgICAgIGZhdi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZmF2QWxsLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcblxuICAgICAgfSlcblxuICAgIH1cblxuICAgIC8vIHZhciBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKTtcbiAgICAvLyB2YXIgb3ZlcmxheVNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVNlYXJjaEJhclwiKTtcbiAgICAvLyBpZiAoc2VhcmNoQmFyKSB7XG4gICAgLy8gICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2VhcmNoQmFyKVxuICAgIC8vICAgICBvdmVybGF5U2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgLy8gICB9KVxuICAgIC8vIH1cblxuXG5cblxuXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGNvbnN0IHN3aXBlcl9leHBsb3JhdGlvbiA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcbiAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5XSxcblxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgIH0sXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuXG4gICAgICAgIC8vIGF1dG9wbGF5OiB7XG4gICAgICAgIC8vICBkZWxheTogMjAwMCwgLy8gRMOpZmlsZW1lbnQgYXV0b21hdGlxdWUgdG91dGVzIGxlcyAxLjUgc2Vjb25kZXNcbiAgICAgICAgLy8gIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLCAvLyBDb250aW51ZXIgbCdhdXRvcGxheSBtw6ptZSBzaSBsJ3V0aWxpc2F0ZXVyIGludGVyYWdpdFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG5cbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2MDBweFxuICAgICAgICAgIDIwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjAwcHhcbiAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDg1MHB4XG4gICAgICAgICAgODUwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LjUsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDAwcHhcbiAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LjUsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KVxuXG5cbiAgICB2YXIgYmFyX2FkbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXJfYWRtaW5cIik7XG4gICAgdmFyIGJhcl9hZG1pbl9tb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhcl9hZG1pbl9tb2JpbGVcIik7XG4gICAgdmFyIG92ZXJsYXlfYXBwX21vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9hcHBfbW9iaWxlXCIpO1xuXG5cbiAgICB2YXIgbGVmdF9uYXZfYmFyX2FkbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0X25hdl9iYXJfYWRtaW5cIik7XG4gICAgdmFyIHRvcF9uYXZfYmFyX2FkbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BfbmF2X2Jhcl9hZG1pblwiKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgaWYgKGJhcl9hZG1pbikge1xuICAgICAgYmFyX2FkbWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICB0b3BfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImFkZF90cmFuc2l0aW9uXCIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChiYXJfYWRtaW5fbW9iaWxlKSB7XG4gICAgICBiYXJfYWRtaW5fbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxlZnRfbmF2X2Jhcl9hZG1pbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19iYXJcIilcbiAgICAgICAgb3ZlcmxheV9hcHBfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvdmVybGF5X2FwcF9tb2JpbGUpIHtcbiAgICAgIG92ZXJsYXlfYXBwX21vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZWZ0X25hdl9iYXJfYWRtaW4uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dfYmFyXCIpXG4gICAgICAgIG92ZXJsYXlfYXBwX21vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgICB9KVxuICAgIH1cblxuXG5cbiAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lclwiKTtcblxuXG4gICAgdmFyIHByb2R1Y3RfY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3RfY2F0ZWdvcnkgYnV0dG9uXCIpO1xuXG5cbiAgICBpZiAocHJvZHVjdF9jYXRlZ29yeSkge1xuICAgICAgcHJvZHVjdF9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgdmFyIGZhY3RvcnlfY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhY3RvcnlfY2F0ZWdvcnkgYnV0dG9uXCIpO1xuXG5cbiAgICBpZiAoZmFjdG9yeV9jYXRlZ29yeSkge1xuICAgICAgZmFjdG9yeV9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZmFjdG9yeV9jYXRlZ29yeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cblxuXG5cblxuXG5cbiAgfVxuXG4gIHNob3dDYXJkU2VhcmNoKCl7XG4gICAgdGhpcy5wb3B1cFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0aGlzLm92ZXJsYXlTZWFyY2hCYXJUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbiAgaGlkZUNhcmRTZWFyY2goKXtcbiAgICB0aGlzLnBvcHVwVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMub3ZlcmxheVNlYXJjaEJhclRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJTdmVsdGVDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXN2ZWx0ZSc7XG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCBBbHBpbmUgZnJvbSAnYWxwaW5lanMnXG4gXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lXG4gXG5BbHBpbmUuc3RhcnQoKVxuXG5cbnJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3N2ZWx0ZS9jb250cm9sbGVycycsIHRydWUsIC9cXC5zdmVsdGUkLykpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FmdGVyX2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi50cmltQWxsKHBhcnQpLnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gdHJpbUFsbChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCAnICcpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZSgnXScsICcnKSlcbiAgICAgICAgLmpvaW4oJy4nKSk7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuXG5sZXQgY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoY29tcG9uZW50LmVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG59O1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG1heENvdW50ID0gMTA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgfVxuICAgIH0sIDUpO1xufSk7XG5jb25zdCBmaW5kQ29tcG9uZW50cyA9IChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjb21wb25lbnQuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgZmluZFBhcmVudCA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbE5hbWVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KG1vZGVsVmFsdWUpID09PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5tb2RlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgICBjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG4gICAgaWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZGF0YU1vZGVsRGlyZWN0aXZlc1swXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50ICYmICdtb2RlbCcgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsIHx8ICcqJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghdGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGZpbmRDaGlsZHJlbihjb21wb25lbnQpLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gIWZvdW5kQ2hpbGRDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZmluYWxWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmaW5hbFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xuY29uc3QgaW5wdXRWYWx1ZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xuXG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudExldmVsRGF0YVtmaW5hbEtleV07XG59XG5jb25zdCBwYXJzZURlZXBEYXRhID0gKGRhdGEsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuICAgIGNvbnN0IHBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgICAgIGZpbmFsRGF0YSxcbiAgICAgICAgZmluYWxLZXksXG4gICAgICAgIHBhcnRzLFxuICAgIH07XG59O1xuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgfTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHsgLi4udGhpcy5wZW5kaW5nUHJvcHMsIC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbi8vIGJhc2UgSUlGRSB0byBkZWZpbmUgaWRpb21vcnBoXG52YXIgSWRpb21vcnBoID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEFORCBOT1cgSVQgQkVHSU5TLi4uXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgbGV0IEVNUFRZX1NFVCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzLCB1cGRhdGFibGUgYnkgdXNlcnMgbm93XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG4gICAgICAgICAgICBjYWxsYmFja3MgOiB7XG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkOiBub09wLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnbWVyZ2UnLFxuICAgICAgICAgICAgICAgIHNob3VsZFByZXNlcnZlOiBmdW5jdGlvbiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVBcHBlbmQ6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVtb3ZlOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVySGVhZE1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBDb3JlIE1vcnBoaW5nIEFsZ29yaXRobSAtIG1vcnBoLCBtb3JwaE5vcm1hbGl6ZWRDb250ZW50LCBtb3JwaE9sZE5vZGVUbywgbW9ycGhDaGlsZHJlblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cbiAgICAgICAgICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvbGROb2RlID0gb2xkTm9kZS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50ID0gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY3R4ID0gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZE5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5oZWFkLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSBvbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkSGVhZCAmJiBuZXdIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWQsIG9sZEhlYWQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gaGVhZCBwcm9taXNlcyByZXNvbHZlLCBjYWxsIG1vcnBoIGFnYWluLCBpZ25vcmluZyB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgT2JqZWN0LmFzc2lnbihjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwsIHNvIHdlIGFyZSBvbmx5IHVwZGF0aW5nIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwib3V0ZXJIVE1MXCIgfHwgY3R4Lm1vcnBoU3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmaW5kIHRoZSBiZXN0IGVsZW1lbnQgbWF0Y2ggaW4gdGhlIG5ldyBjb250ZW50LCBtb3JwaCB0aGF0LCBhbmQgbWVyZ2UgaXRzIHNpYmxpbmdzXG4gICAgICAgICAgICAgICAgLy8gaW50byBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBiZXN0TWF0Y2ggPSBmaW5kQmVzdE5vZGVNYXRjaChub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0YXNoIHRoZSBzaWJsaW5ncyB0aGF0IHdpbGwgbmVlZCB0byBiZSBpbnNlcnRlZCBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSBiZXN0TWF0Y2g/LnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgLy8gbW9ycGggaXRcbiAgICAgICAgICAgICAgICBsZXQgbW9ycGhlZE5vZGUgPSBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBiZXN0TWF0Y2gsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdhcyBhIGJlc3QgbWF0Y2gsIG1lcmdlIHRoZSBzaWJsaW5ncyBpbiB0b28gYW5kIHJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hvbGUgYnVuY2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugbm90aGluZyB3YXMgYWRkZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwiRG8gbm90IHVuZGVyc3RhbmQgaG93IHRvIG1vcnBoIHN0eWxlIFwiICsgY3R4Lm1vcnBoU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gcG9zc2libGVBY3RpdmVFbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSBjdHhcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChwb3NzaWJsZUFjdGl2ZUVsZW1lbnQsIGN0eCkge1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG9sZE5vZGUgcm9vdCBub2RlIHRvIG1lcmdlIGNvbnRlbnQgaW50b1xuICAgICAgICAgKiBAcGFyYW0gbmV3Q29udGVudCBuZXcgY29udGVudCB0byBtZXJnZVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGVuZGVkIHVwIGluIHRoZSBET01cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgOyBlbHNlIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgb2xkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NvZnRNYXRjaChvbGROb2RlLCBuZXdDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSA7IGVsc2UgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuc3R5bGUgIT09IFwibW9ycGhcIikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVIZWFkRWxlbWVudChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNOb2RlRnJvbShuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KG9sZE5vZGUsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB0aGUgY29yZSBhbGdvcml0aG0gZm9yIG1hdGNoaW5nIHVwIGNoaWxkcmVuLiAgVGhlIGlkZWEgaXMgdG8gdXNlIGlkIHNldHMgdG8gdHJ5IHRvIG1hdGNoIHVwXG4gICAgICAgICAqIG5vZGVzIGFzIGZhaXRoZnVsbHkgYXMgcG9zc2libGUuICBXZSBncmVlZGlseSBtYXRjaCwgd2hpY2ggYWxsb3dzIHVzIHRvIGtlZXAgdGhlIGFsZ29yaXRobSBmYXN0LCBidXRcbiAgICAgICAgICogYnkgdXNpbmcgaWQgc2V0cywgd2UgYXJlIGFibGUgdG8gYmV0dGVyIG1hdGNoIHVwIHdpdGggY29udGVudCBkZWVwZXIgaW4gdGhlIERPTS5cbiAgICAgICAgICpcbiAgICAgICAgICogQmFzaWMgYWxnb3JpdGhtIGlzLCBmb3IgZWFjaCBub2RlIGluIHRoZSBuZXcgY29udGVudDpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgb2xkIHBhcmVudCwgYXBwZW5kIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiAtIGlmIHRoZSBuZXcgY29udGVudCBoYXMgYW4gaWQgc2V0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50LCBtb3JwaFxuICAgICAgICAgKiAtIHNlYXJjaCBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAqIC0gaWYgaWQgc2V0IG1hdGNoIGZvdW5kLCBtb3JwaFxuICAgICAgICAgKiAtIG90aGVyd2lzZSBzZWFyY2ggZm9yIGEgXCJzb2Z0XCIgbWF0Y2hcbiAgICAgICAgICogLSBpZiBhIHNvZnQgbWF0Y2ggaXMgZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlLCBwcmVwZW5kIHRoZSBuZXcgbm9kZSBiZWZvcmUgdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB0d28gc2VhcmNoIGFsZ29yaXRobXMgdGVybWluYXRlIGlmIGNvbXBldGluZyBub2RlIG1hdGNoZXMgYXBwZWFyIHRvIG91dHdlaWdoIHdoYXQgY2FuIGJlIGFjaGlldmVkXG4gICAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgbm9kZS4gIFNlZSBmaW5kSWRTZXRNYXRjaCgpIGFuZCBmaW5kU29mdE1hdGNoKCkgZm9yIGRldGFpbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3UGFyZW50IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50IH0gb2xkUGFyZW50IHRoZSBvbGQgY29udGVudCB0aGF0IHdlIGFyZSBtZXJnaW5nIHRoZSBuZXcgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgbmV4dE5ld0NoaWxkID0gbmV3UGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZDtcblxuICAgICAgICAgICAgLy8gcnVuIHRocm91Z2ggYWxsIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKG5leHROZXdDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgbmV4dE5ld0NoaWxkID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgZXhpdGluZyBwYXJlbnQncyBjaGlsZHJlbiwganVzdCBhcHBlbmRcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0aW9uUG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgbm9kZSBoYXMgYW4gaWQgc2V0IG1hdGNoIHRoZW4gbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugc2VhcmNoIGZvcndhcmQgaW4gdGhlIGV4aXN0aW5nIG9sZCBjaGlsZHJlbiBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGlkU2V0TWF0Y2ggPSBmaW5kSWRTZXRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBwb3RlbnRpYWwgbWF0Y2gsIHJlbW92ZSB0aGUgbm9kZXMgdW50aWwgdGhhdCBwb2ludCBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaWRTZXRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgaWRTZXRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oaWRTZXRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBubyBpZCBzZXQgbWF0Y2ggZm91bmQsIHNvIHNjYW4gZm9yd2FyZCBmb3IgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgbGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZvdW5kIGEgc29mdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgbm9kZSwgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoc29mdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBzb2Z0TWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKHNvZnRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhYmFuZG9uIGFsbCBob3BlIG9mIG1vcnBoaW5nLCBqdXN0IGluc2VydCB0aGUgbmV3IGNoaWxkIGJlZm9yZSB0aGUgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG1vdmUgb25cbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYW55IHJlbWFpbmluZyBvbGQgbm9kZXMgdGhhdCBkaWRuJ3QgbWF0Y2ggdXAgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKGluc2VydGlvblBvaW50ICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEF0dHJpYnV0ZSBTeW5jaW5nIENvZGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gYXR0ciB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIHRvIGJlIG11dGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHRvIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHVwZGF0ZVR5cGUgeyhcInVwZGF0ZVwifFwicmVtb3ZlXCIpfVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgc2hvdWxkIGJlIGlnbm9yZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcbiAgICAgICAgICAgIGlmKGF0dHIgPT09ICd2YWx1ZScgJiYgY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHRvID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdHguY2FsbGJhY2tzLmJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQoYXR0ciwgdG8sIHVwZGF0ZVR5cGUpID09PSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzeW5jcyBhIGdpdmVuIG5vZGUgd2l0aCBhbm90aGVyIG5vZGUsIGNvcHlpbmcgb3ZlciBhbGwgYXR0cmlidXRlcyBhbmRcbiAgICAgICAgICogaW5uZXIgZWxlbWVudCBzdGF0ZSBmcm9tIHRoZSAnZnJvbScgbm9kZSB0byB0aGUgJ3RvJyBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZnJvbSB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdG8gdGhlIGVsZW1lbnQgdG8gY29weSBhdHRyaWJ1dGVzICYgc3RhdGUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY05vZGVGcm9tKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gZnJvbS5ub2RlVHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgaXMgYW4gZWxlbWVudCB0eXBlLCBzeW5jIHRoZSBhdHRyaWJ1dGVzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBuZXcgbm9kZSBpbnRvIHRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEgLyogZWxlbWVudCB0eXBlICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZXMgPSBmcm9tLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGVzID0gdG8uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIGJhY2t3YXJkcyB0byBhdm9pZCBza2lwcGluZyBvdmVyIGl0ZW1zIHdoZW4gYSBkZWxldGUgb2NjdXJzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRvQXR0cmlidXRlcy5sZW5ndGggLSAxOyAwIDw9IGk7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IHRvQXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJvbS5oYXNBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3luYyB0ZXh0IG5vZGVzXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gOCAvKiBjb21tZW50ICovIHx8IHR5cGUgPT09IDMgLyogdGV4dCAqLykge1xuICAgICAgICAgICAgICAgIGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLm5vZGVWYWx1ZSA9IGZyb20ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkge1xuICAgICAgICAgICAgICAgIC8vIHN5bmMgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGZyb20ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUge1N0cmluZ30gdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBhdHRyaWJ1dGVOYW1lLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIGxldCBpZ25vcmVVcGRhdGUgPSBpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmICghaWdub3JlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW2F0dHJpYnV0ZU5hbWVdID0gZnJvbVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBmcm9tW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5COiBtYW55IGJvdGhhbnMgZGllZCB0byBicmluZyB1cyBpbmZvcm1hdGlvbjpcbiAgICAgICAgICpcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRyaWNrLXN0ZWVsZS1pZGVtL21vcnBoZG9tL2Jsb2IvbWFzdGVyL3NyYy9zcGVjaWFsRWxIYW5kbGVycy5qc1xuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL2Nob29qcy9uYW5vbW9ycGgvYmxvYi9tYXN0ZXIvbGliL21vcnBoLmpzTDExM1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRvIHN5bmMgdGhlIGlucHV0IHZhbHVlIHRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRvIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGZyb20udHlwZSAhPT0gJ2ZpbGUnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gc3luYyBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgJ2NoZWNrZWQnLCBjdHgpO1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnZGlzYWJsZWQnLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnc2VsZWN0ZWQnLCBjdHgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBdHRyaWJ1dGUoJ3ZhbHVlJywgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvLmZpcnN0Q2hpbGQgJiYgdG8uZmlyc3RDaGlsZC5ub2RlVmFsdWUgIT09IGZyb21WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIHRoZSBIRUFEIHRhZyBjYW4gYmUgaGFuZGxlZCBzcGVjaWFsbHksIGVpdGhlciB3LyBhICdtZXJnZScgb3IgJ2FwcGVuZCcgc3R5bGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkVGFnLCBjdXJyZW50SGVhZCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBhZGRlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBwcmVzZXJ2ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cbiAgICAgICAgICAgIGxldCBoZWFkTWVyZ2VTdHlsZSA9IGN0eC5oZWFkLnN0eWxlO1xuXG4gICAgICAgICAgICAvLyBwdXQgYWxsIG5ldyBoZWFkIGVsZW1lbnRzIGludG8gYSBNYXAsIGJ5IHRoZWlyIG91dGVySFRNTFxuICAgICAgICAgICAgbGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdIZWFkQ2hpbGQgb2YgbmV3SGVhZFRhZy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLnNldChuZXdIZWFkQ2hpbGQub3V0ZXJIVE1MLCBuZXdIZWFkQ2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBlbHQgaW4gdGhlIGN1cnJlbnQgaGVhZFxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50SGVhZEVsdCBvZiBjdXJyZW50SGVhZC5jaGlsZHJlbikge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaGVhZCBlbGVtZW50IGlzIGluIHRoZSBtYXBcbiAgICAgICAgICAgICAgICBsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzUmVBcHBlbmRlZCA9IGN0eC5oZWFkLnNob3VsZFJlQXBwZW5kKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBsZXQgaXNQcmVzZXJ2ZWQgPSBjdHguaGVhZC5zaG91bGRQcmVzZXJ2ZShjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZUFwcGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgdmVyc2lvbiBhbmQgbGV0IHRoZSBuZXcgdmVyc2lvbiByZXBsYWNlIGl0IGFuZCByZS1leGVjdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGFuZCBzaG91bGQgbm90IGJlIHJlLWFwcGVuZGVkLCBzbyByZW1vdmUgaXQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5ldyBjb250ZW50IG1hcCwgcHJlc2VydmluZyBpdCBpbiB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkTWVyZ2VTdHlsZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBhbmQgdGhpcyBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gaWYgYW5kIG9ubHkgaWYgaXQgaXMgbWFya2VkIGZvciByZS1hcHBlbmQgZG8gd2UgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbWVyZ2UsIHdlIHJlbW92ZSB0aGlzIGNvbnRlbnQgc2luY2UgaXQgaXMgbm90IGluIHRoZSBuZXcgaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eC5oZWFkLnNob3VsZFJlbW92ZShjdXJyZW50SGVhZEVsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVzaCB0aGUgcmVtYWluaW5nIG5ldyBoZWFkIGVsZW1lbnRzIGluIHRoZSBNYXAgaW50byB0aGVcbiAgICAgICAgICAgIC8vIG5vZGVzIHRvIGFwcGVuZCB0byB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaCguLi5zcmNUb05ld0hlYWROb2Rlcy52YWx1ZXMoKSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdOb2RlIG9mIG5vZGVzVG9BcHBlbmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0VsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdFbHQuaHJlZiB8fCBuZXdFbHQuc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmFwcGVuZENoaWxkKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXdFbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCByZW1vdmVkIGVsZW1lbnRzLCBhZnRlciB3ZSBoYXZlIGFwcGVuZGVkIHRoZSBuZXcgZWxlbWVudHMgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgbmV0d29yayByZXF1ZXN0cyBmb3IgdGhpbmdzIGxpa2Ugc3R5bGUgc2hlZXRzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWRFbGVtZW50IG9mIHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChyZW1vdmVkRWxlbWVudCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLnJlbW92ZUNoaWxkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5oZWFkLmFmdGVySGVhZE1vcnBoZWQoY3VycmVudEhlYWQsIHthZGRlZDogYWRkZWQsIGtlcHQ6IHByZXNlcnZlZCwgcmVtb3ZlZDogcmVtb3ZlZH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbm9PcCgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgRGVlcCBtZXJnZXMgdGhlIGNvbmZpZyBvYmplY3QgYW5kIHRoZSBJZGlvbW9yb3BoLmRlZmF1bHRzIG9iamVjdCB0b1xuICAgICAgICAgIHByb2R1Y2UgYSBmaW5hbCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VEZWZhdWx0cyhjb25maWcpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbENvbmZpZyA9IHt9O1xuICAgICAgICAgICAgLy8gY29weSB0b3AgbGV2ZWwgc3R1ZmYgaW50byBmaW5hbCBjb25maWdcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgY2FsbGJhY2tzIGludG8gZmluYWwgY29uZmlnIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGNhbGxiYWNrcylcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGRlZmF1bHRzLmNhbGxiYWNrcyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgY29uZmlnLmNhbGxiYWNrcyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgaGVhZCBjb25maWcgaW50byBmaW5hbCBjb25maWcgIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGhlYWQpXG4gICAgICAgICAgICBmaW5hbENvbmZpZy5oZWFkID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGRlZmF1bHRzLmhlYWQpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBjb25maWcuaGVhZCk7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBtZXJnZURlZmF1bHRzKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhcmdldDogb2xkTm9kZSxcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50OiBuZXdDb250ZW50LFxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZTogY29uZmlnLmlnbm9yZUFjdGl2ZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVBY3RpdmVWYWx1ZTogY29uZmlnLmlnbm9yZUFjdGl2ZVZhbHVlLFxuICAgICAgICAgICAgICAgIGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcbiAgICAgICAgICAgICAgICBkZWFkSWRzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiBjb25maWcuY2FsbGJhY2tzLFxuICAgICAgICAgICAgICAgIGhlYWQ6IGNvbmZpZy5oZWFkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0lkU2V0TWF0Y2gobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZTEuaWQgIT09IFwiXCIgJiYgbm9kZTEuaWQgPT09IG5vZGUyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSA+IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSB7XG4gICAgICAgICAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2Rlc0JldHdlZW4oc3RhcnRJbmNsdXNpdmUsIGVuZEV4Y2x1c2l2ZSwgY3R4KSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IHN0YXJ0SW5jbHVzaXZlO1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5jbHVzaXZlID0gc3RhcnRJbmNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgZW5kRXhjbHVzaXZlKTtcbiAgICAgICAgICAgIHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgaWQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBmb3IgdGhlIG5ldyBjaGlsZCBPUlxuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIHBvdGVudGlhbCBpZCBtYXRjaGVzIHdlIGFyZSBkaXNjYXJkaW5nIGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgICAgLy8gcG90ZW50aWFsIGlkIG1hdGNoZXMgZm9yIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kSWRTZXRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cbiAgICAgICAgICAgIC8vIG1heCBpZCBtYXRjaGVzIHdlIGFyZSB3aWxsaW5nIHRvIGRpc2NhcmQgaW4gb3VyIHNlYXJjaFxuICAgICAgICAgICAgbGV0IG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBuZXdDaGlsZCwgb2xkUGFyZW50KTtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gb25seSBzZWFyY2ggZm9yd2FyZCBpZiB0aGVyZSBpcyBhIHBvc3NpYmlsaXR5IG9mIGFuIGlkIG1hdGNoXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwb3RlbnRpYWxNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2gsIHNjYW4gZm9yd2FyZFxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIHBvdGVudGlhbCBpZCBtYXRjaCBjb3VudCB3ZSBhcmUgZGlzY2FyZGluZyAodGhlXG4gICAgICAgICAgICAgICAgLy8gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoaXMgdG8gbWFrZSBpdCBsaWtlbHlcbiAgICAgICAgICAgICAgICAvLyB3b3J0aCBpdClcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsTWF0Y2ggIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYW4gaWQgbWF0Y2gsIHJldHVybiB0aGUgY3VycmVudCBwb3RlbnRpYWwgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsTWF0Y2gsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVyIHRoZSBvdGhlciBwb3RlbnRpYWwgbWF0Y2hlcyBvZiB0aGlzIG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIG1vcmUgcG90ZW50aWFsIGlkIG1hdGNoZXMgaW4gX290aGVyXyBjb250ZW50LCB3ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGhhdmUgYSBnb29kIGNhbmRpZGF0ZSBmb3IgYW4gaWQgbWF0Y2gsIHNvIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkdmFuY2VkIHRvIHRoZSBuZXh0IG9sZCBjb250ZW50IGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE1hdGNoID0gcG90ZW50aWFsTWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBTY2FucyBmb3J3YXJkIGZyb20gdGhlIGluc2VydGlvblBvaW50IGluIHRoZSBvbGQgcGFyZW50IGxvb2tpbmcgZm9yIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBzb2Z0IG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHdlIGZpbmQgYSBwb3RlbnRpYWwgaWQgbWF0Y2ggaW4gdGhlIG9sZCBwYXJlbnRzIGNoaWxkcmVuIE9SIGlmIHdlIGZpbmQgdHdvXG4gICAgICAgIC8vIHBvdGVudGlhbCBzb2Z0IG1hdGNoZXMgZm9yIHRoZSBuZXh0IHR3byBwaWVjZXMgb2YgbmV3IGNvbnRlbnRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kU29mdE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFNvZnRNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKHBvdGVudGlhbFNvZnRNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIHBvdGVudGlhbFNvZnRNYXRjaCwgbmV3Q29udGVudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHBvdGVudGlhbCBzb2Z0IG1hdGNoIGhhcyBhIHBvdGVudGlhbCBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgcmVtYWluaW5nIG5ld1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IHNvIGJhaWwgb3V0IG9mIGxvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNvZnQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBub2RlLCByZXR1cm4gaXRcbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV4dFNpYmxpbmcsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgbmV3IG5vZGUgaGFzIGEgc29mdCBtYXRjaCB3aXRoIHRoaXMgbm9kZSwgc29cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudCBvZiBmdXR1cmUgc29mdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB0d28gZnV0dXJlIHNvZnQgbWF0Y2hlcywgYmFpbCB0byBhbGxvdyB0aGUgc2libGluZ3MgdG8gc29mdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGNvbnN1bWUgZnV0dXJlIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIHNha2Ugb2YgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBwb3RlbnRpYWxTb2Z0TWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHN2Z3MgdG8gYXZvaWQgZmFsc2UtcG9zaXRpdmUgbWF0Y2hlcyBvbiBoZWFkLCBldGMuXG4gICAgICAgICAgICBsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sICcnKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIG5ld0NvbnRlbnQgY29udGFpbnMgYSBodG1sLCBoZWFkIG9yIGJvZHkgdGFnLCB3ZSBjYW4gc2ltcGx5IHBhcnNlIGl0IHcvbyB3cmFwcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9oZWFkPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9ib2R5Pi8pKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgZnVsbCBIVE1MIGRvY3VtZW50LCByZXR1cm4gdGhlIGRvY3VtZW50IGl0c2VsZiBhcyB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHJldHVybiB0aGUgaHRtbCBlbGVtZW50IGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgcGFydGlhbCBIVE1MLCB3cmFwIGl0IGluIGEgdGVtcGxhdGUgdGFnIHRvIHByb3ZpZGUgYSBwYXJlbnQgZWxlbWVudCBhbmQgYWxzbyB0byBoZWxwXG4gICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIHRvdWNoeSB0YWdzIGxpa2UgdHIsIHRib2R5LCBldGMuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcIjxib2R5Pjx0ZW1wbGF0ZT5cIiArIG5ld0NvbnRlbnQgKyBcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLCBcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlRG9jLmJvZHkucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVW5uZWNlc3NhcnlMb2NhbFZhcmlhYmxlSlNcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSB0YWcgY3JlYXRlZCBieSBpZGlvbW9ycGggcGFyc2luZyBjYW4gc2VydmUgYXMgYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBub2RlIGlzIGFkZGVkIGFzIGEgY2hpbGQgdG8gYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBub2RlcyBpbiB0aGUgYXJyYXkgb3IgSFRNTEVsZW1lbnQgY29sbGVjdGlvbiBhcmUgY29uc29saWRhdGVkIHVuZGVyXG4gICAgICAgICAgICAgICAgLy8gYSBzaW5nbGUgZHVtbXkgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBkdW1teVBhcmVudC5hcHBlbmQoZWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICB3aGlsZSAocHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5vZGUpOyAvLyBwdXNoIGFkZGVkIHByZWNlZGluZyBzaWJsaW5ncyBvbiBpbiBvcmRlciBhbmQgaW5zZXJ0XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgbW9ycGhlZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkZWQucHVzaChtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB3aGlsZSAobmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpOyAvLyBoZXJlIHdlIGFyZSBnb2luZyBpbiBvcmRlciwgc28gcHVzaCBvbiBhcyB3ZSBzY2FuLCByYXRoZXIgdGhhbiBhZGRcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdGFjay5wb3AoKSwgbW9ycGhlZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZEJlc3ROb2RlTWF0Y2gobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTY29yZSA9IHNjb3JlRWxlbWVudChjdXJyZW50RWxlbWVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3U2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IG5ld1Njb3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlc3RFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2NvcmVFbGVtZW50KG5vZGUxLCBub2RlMiwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAuNSArIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgdGVtcE5vZGUpO1xuICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0ZW1wTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIElEIFNldCBGdW5jdGlvbnNcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkge1xuICAgICAgICAgICAgcmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldCh0YXJnZXROb2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICByZXR1cm4gaWRTZXQuaGFzKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldChub2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkU2V0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmRlYWRJZHMuYWRkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHNvdXJjZVNldCkge1xuICAgICAgICAgICAgICAgIC8vIGEgcG90ZW50aWFsIG1hdGNoIGlzIGFuIGlkIGluIHRoZSBzb3VyY2UgYW5kIHBvdGVudGlhbElkc1NldCwgYnV0XG4gICAgICAgICAgICAgICAgLy8gdGhhdCBoYXMgbm90IGFscmVhZHkgYmVlbiBtZXJnZWQgaW50byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkgJiYgaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrbWF0Y2hDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvdHRvbSB1cCBhbGdvcml0aG0gdGhhdCBmaW5kcyBhbGwgZWxlbWVudHMgd2l0aCBpZHMgaW5zaWRlIG9mIHRoZSBub2RlXG4gICAgICAgICAqIGFyZ3VtZW50IGFuZCBwb3B1bGF0ZXMgaWQgc2V0cyBmb3IgdGhvc2Ugbm9kZXMgYW5kIGFsbCB0aGVpciBwYXJlbnRzLCBnZW5lcmF0aW5nXG4gICAgICAgICAqIGEgc2V0IG9mIGlkcyBjb250YWluZWQgd2l0aGluIGFsbCBub2RlcyBmb3IgdGhlIGVudGlyZSBoaWVyYXJjaHkgaW4gdGhlIERPTVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAgICAgICAgICogQHBhcmFtIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBpZE1hcFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVJZE1hcEZvck5vZGUobm9kZSwgaWRNYXApIHtcbiAgICAgICAgICAgIGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZWxlbWVudHMgd2l0aCBhbiBpZCBwcm9wZXJ0eVxuICAgICAgICAgICAgbGV0IGlkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIGlkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsdDtcbiAgICAgICAgICAgICAgICAvLyB3YWxrIHVwIHRoZSBwYXJlbnQgaGllcmFyY2h5IG9mIHRoYXQgZWxlbWVudCwgYWRkaW5nIHRoZSBpZFxuICAgICAgICAgICAgICAgIC8vIG9mIGVsZW1lbnQgdG8gdGhlIHBhcmVudCdzIGlkIHNldFxuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBpZCBzZXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBpbnNlcnQgaXQgaW4gdGhlICBtYXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkU2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuc2V0KGN1cnJlbnQsIGlkU2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZFNldC5hZGQoZWx0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBjb21wdXRlcyBhIG1hcCBvZiBub2RlcyB0byBhbGwgaWRzIGNvbnRhaW5lZCB3aXRoaW4gdGhhdCBub2RlIChpbmNsdXNpdmUgb2YgdGhlXG4gICAgICAgICAqIG5vZGUpLiAgVGhpcyBtYXAgY2FuIGJlIHVzZWQgdG8gYXNrIGlmIHR3byBub2RlcyBoYXZlIGludGVyc2VjdGluZyBzZXRzIG9mIGlkcywgd2hpY2ggYWxsb3dzXG4gICAgICAgICAqIGZvciBhIGxvb3NlciBkZWZpbml0aW9uIG9mIFwibWF0Y2hpbmdcIiB0aGFuIHRyYWRpdGlvbiBpZCBtYXRjaGluZywgYW5kIGFsbG93cyBjaGlsZCBub2Rlc1xuICAgICAgICAgKiB0byBjb250cmlidXRlIHRvIGEgcGFyZW50IG5vZGVzIG1hdGNoaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9sZENvbnRlbnQgIHRoZSBvbGQgY29udGVudCB0aGF0IHdpbGwgYmUgbW9ycGhlZFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld0NvbnRlbnQgIHRoZSBuZXcgY29udGVudCB0byBtb3JwaCB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7TWFwPE5vZGUsIFNldDxTdHJpbmc+Pn0gYSBtYXAgb2Ygbm9kZXMgdG8gaWQgc2V0cyBmb3IgdGhlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJZE1hcChvbGRDb250ZW50LCBuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShvbGRDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICByZXR1cm4gaWRNYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFRoaXMgaXMgd2hhdCBlbmRzIHVwIGJlY29taW5nIHRoZSBJZGlvbW9ycGggZ2xvYmFsIG9iamVjdFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3JwaCxcbiAgICAgICAgICAgIGRlZmF1bHRzXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHN5bmNBdHRyaWJ1dGVzID0gKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbUVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGZyb21FbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICB0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcbiAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciA9IFtdO1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCA9IChpZCwgcmVwbGFjZVdpdGhDbG9uZSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG4gICAgICAgIGlmICghcmVwbGFjZVdpdGhDbG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvbmVkT2xkRWxlbWVudCA9IGNsb25lSFRNTEVsZW1lbnQob2xkRWxlbWVudCk7XG4gICAgICAgIG9sZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkT2xkRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuICAgIH07XG4gICAgcm9vdFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXZlLXByZXNlcnZlXScpLmZvckVhY2goKG5ld0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXZlLXByZXNlcnZlJyk7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLnNldChpZCwgb2xkRWxlbWVudCk7XG4gICAgICAgIHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIElkaW9tb3JwaC5tb3JwaChyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGZyb21FbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHx8ICEodG9FbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEZyb21FbCA9IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcChmcm9tRWwuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb25lZEZyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgSWRpb21vcnBoLm1vcnBoKGNsb25lZEZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5BbHBpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQWxwaW5lLm1vcnBoKGZyb21FbC5fX3gsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZnJvbUVsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnT1BUSU9OJyAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJykgfHwgKGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbm5lckhUTUwgPSB0b0VsLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZU5vZGVSZW1vdmVkKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG4gICAgICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50cy4nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlcGxhY2VXaXRoKG9yaWdpbmFsRWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKC4uLmFyZ3MpKTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoYW5naW5nSXRlbXNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRydWVPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxSZWNvcmQub3JpZ2luYWw7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbmdlZEl0ZW1zLCAoW25hbWUsIHsgbmV3OiB2YWx1ZSB9XSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVtb3ZlZEl0ZW1zLmtleXMoKSk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRJdGVtcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZEl0ZW1zLnNpemUgPT09IDA7XG4gICAgfVxufVxuXG5jbGFzcyBFbGVtZW50Q2hhbmdlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuZGVsZXRlKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkU3R5bGUoc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5zZXRJdGVtKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMucmVtb3ZlSXRlbShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMucmVtb3ZlSXRlbShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgZ2V0QWRkZWRDbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuYWRkZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG4gICAgfVxuICAgIGdldENoYW5nZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuYWRkZWRDbGFzc2VzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMucmVtb3ZlZENsYXNzZXMpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJlxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKSk7XG4gICAgfVxufVxuXG5jbGFzcyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrID0gc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuICAgIH1cbiAgICB3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICAgIH1cbiAgICBoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZEVsZW1lbnQgb2YgdGhpcy5hZGRlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUubWF0Y2goLyhcXFMrKS9ndSkgfHwgW107XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICBjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlcyA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFuZXdWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMocHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgYWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgfVxuICAgIGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eV0gPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSAnRk9OVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09ICd2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsnO1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gJyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICAgICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlKHByb3BzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIgPSBuZXcgVW5zeW5jZWRJbnB1dHNUcmFja2VyKHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIodGhpcy5lbGVtZW50LCAoZWxlbWVudCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcykpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRTZWxmKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBmaW5kQ29tcG9uZW50cyh0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9FbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdO1xuICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVHVyYm9FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXR1cmJvPVwiZmFsc2VcIl0nKTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9TZW5kID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNUb1NlbmRba2V5XSA9IHZhbHVlLmZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3RDb25maWcgPSB7XG4gICAgICAgICAgICBwcm9wczogdGhpcy52YWx1ZVN0b3JlLmdldE9yaWdpbmFsUHJvcHMoKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMucGVuZGluZ0FjdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHt9LFxuICAgICAgICAgICAgdXBkYXRlZFByb3BzRnJvbVBhcmVudDogdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSxcbiAgICAgICAgICAgIGZpbGVzOiBmaWxlc1RvU2VuZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVxdWVzdDpzdGFydGVkJywgcmVxdWVzdENvbmZpZyk7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLmZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoIWhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKT8uaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJykgJiZcbiAgICAgICAgICAgICAgICAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlICcke3RoaXMubmFtZX0nIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOmAsIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICAgICAgZXhlY3V0ZU1vcnBoZG9tKHRoaXMuZWxlbWVudCwgbmV3RWxlbWVudCwgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSwgKGVsZW1lbnQpID0+IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy52YWx1ZVN0b3JlKSwgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlcik7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZUFsbFByb3BzKG5ld1Byb3BzKTtcbiAgICAgICAgY29uc3QgZXZlbnRzVG9FbWl0ID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEV2ZW50c1RvRW1pdCgpO1xuICAgICAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdXBkYXRlRnJvbVBhcmVudFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9PT0gJ2dldCcgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiYgKGFjdGlvbnMubGVuZ3RoIHx8IHRvdGFsRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBtZXRob2QsIGNzcmZUb2tlbik7XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgT2JqZWN0LmtleXModXBkYXRlZCkpO1xuICAgIH1cbn1cblxuY2xhc3MgU3RpbXVsdXNFbGVtZW50RHJpdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgfVxuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLnByb3BzVmFsdWU7XG4gICAgfVxuICAgIGdldEV2ZW50c1RvRW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcbiAgICB9XG4gICAgZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuZXZlbnRzVG9EaXNwYXRjaFZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIHRydWUsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICB9XG4gICAgZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgaXNMb2FkaW5nLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogMjAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdhY3Rpb24nLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnbW9kZWwnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm1vZGVsXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gbW9kZWwoZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZE1vZGVscy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBiYWNrZW5kUmVxdWVzdCAmJlxuICAgICAgICAgICAgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmXG4gICAgICAgICAgICB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBiYWNrZW5kUmVxdWVzdCAmJlxuICAgICAgICAgICAgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nRGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICBsZXQgbWF0Y2hpbmdFbGVtZW50cyA9IFsuLi5BcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKSldO1xuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gbWF0Y2hpbmdFbGVtZW50cy5maWx0ZXIoKGVsdCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWx0LCBjb21wb25lbnQpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgbWF0Y2hpbmdFbGVtZW50cyA9IFtlbGVtZW50LCAuLi5tYXRjaGluZ0VsZW1lbnRzXTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAncmV2ZXJ0JztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IChhY3Rpb24sIGlzTG9hZGluZykgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1wb2xsIFwiJHtyYXdQb2xsQ29uZmlnfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRQb2xsKGRpcmVjdGl2ZS5hY3Rpb24sIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kZWxdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmdldFVuc3luY2VkTW9kZWxzKCkuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgIWVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kZWxCaW5kaW5nIChtb2RlbERpcmVjdGl2ZSkge1xuICAgIGxldCBzaG91bGRSZW5kZXIgPSB0cnVlO1xuICAgIGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgIG1vZGVsRGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSByZXF1aXJlcyBhIHZhbHVlIC0gZS5nLiBvbihjaGFuZ2UpLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIVsnaW5wdXQnLCAnY2hhbmdlJ10uaW5jbHVkZXMobW9kaWZpZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdub3JlbmRlcic6XG4gICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWJvdW5jZSc6XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWUsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUVtcHR5KHZhbHVlKSB7XG4gICAgaWYgKG51bGwgPT09IHZhbHVlIHx8IHZhbHVlID09PSAnJyB8fCB1bmRlZmluZWQgPT09IHZhbHVlIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICBpZiAoIWlzVmFsdWVFbXB0eSh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgY29uc3QgYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMgPSAoZGF0YSwgZW50cmllcyA9IHt9LCBiYXNlS2V5ID0gJycpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2lLZXksIGlWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGJhc2VLZXkgPT09ICcnID8gaUtleSA6IGAke2Jhc2VLZXl9WyR7aUtleX1dYDtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gYmFzZUtleSAmJiBpc1ZhbHVlRW1wdHkoaVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGVudHJpZXNba2V5XSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVsbCAhPT0gaVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSB7IC4uLmVudHJpZXMsIC4uLmJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGlWYWx1ZSwgZW50cmllcywga2V5KSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KGlWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyQy9nLCAnLCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IGJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGRhdGEpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhlbnRyaWVzKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHt2YWx1ZX1gKVxuICAgICAgICAuam9pbignJicpO1xufVxuZnVuY3Rpb24gZnJvbVF1ZXJ5U3RyaW5nKHNlYXJjaCkge1xuICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCc/JywgJycpO1xuICAgIGlmIChzZWFyY2ggPT09ICcnKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEgPSAoa2V5LCB2YWx1ZSwgZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3QsIHNlY29uZCwgLi4ucmVzdF0gPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2ZpcnN0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhW2ZpcnN0XSA9IE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoc2Vjb25kKSkgPyB7fSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKFtzZWNvbmQsIC4uLnJlc3RdLmpvaW4oJy4nKSwgdmFsdWUsIGRhdGFbZmlyc3RdKTtcbiAgICB9O1xuICAgIGNvbnN0IGVudHJpZXMgPSBzZWFyY2guc3BsaXQoJyYnKS5tYXAoKGkpID0+IGkuc3BsaXQoJz0nKSk7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgZG90Tm90YXRlZEtleSA9IGtleS5yZXBsYWNlKC9cXFsvZywgJy4nKS5yZXBsYWNlKC9dL2csICcnKTtcbiAgICAgICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKGRvdE5vdGF0ZWRLZXksIHZhbHVlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufVxuY2xhc3MgVXJsVXRpbHMgZXh0ZW5kcyBVUkwge1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKVtrZXldO1xuICAgIH1cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb21RdWVyeVN0cmluZyh0aGlzLnNlYXJjaCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRvUXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgfVxufVxuY2xhc3MgSGlzdG9yeVN0cmF0ZWd5IHtcbiAgICBzdGF0aWMgcmVwbGFjZSh1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgJycsIHVybCk7XG4gICAgfVxufVxuXG5jbGFzcyBRdWVyeVN0cmluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IobWFwcGluZykge1xuICAgICAgICB0aGlzLm1hcHBpbmcgPSBtYXBwaW5nO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxVdGlscyA9IG5ldyBVcmxVdGlscyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdXJsVXRpbHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubWFwcGluZykuZm9yRWFjaCgoW3Byb3AsIG1hcHBpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQocHJvcCk7XG4gICAgICAgICAgICAgICAgdXJsVXRpbHMuc2V0KG1hcHBpbmcubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdXJsVXRpbHMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlTdHJhdGVneS5yZXBsYWNlKHVybFV0aWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVxdWVzdDpzdGFydGVkJywgKHJlcXVlc3REYXRhKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgbm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBwYXJlbnRDb21wb25lbnQgPSBmaW5kUGFyZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuICAgIH1cbn1cblxuY2xhc3MgTGF6eVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCdsYXp5JyAhPT0gY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2xvYWRpbmcnKT8udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXZlOmFwcGVhcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICB9XG59XG5cbmNsYXNzIExpdmVDb250cm9sbGVyRGVmYXVsdCBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGFjdGlvbiBuYW1lIHByb3ZpZGVkIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX0uIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCB0aGUgXCJkYXRhLWxpdmUtYWN0aW9uLXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IHBhcmFtcy5hY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGlvbkFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuICAgICAgICBkZWxldGUgYWN0aW9uQXJncy5hY3Rpb247XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc3RvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzZWxmJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWJvdW5jZScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdmaWxlcycsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzID0gdGhpcy5wZW5kaW5nRmlsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdID0gdGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBhY3Rpb25BcmdzLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICB9XG4gICAgZW1pdChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0KG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFVwKG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0U2VsZihldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFNlbGYobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuICAgIH1cbiAgICBwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5fdXBkYXRlRnJvbVBhcmVudFByb3BzKHRoaXMucHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlKTtcbiAgICB9XG4gICAgZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmZpbmdlcnByaW50ID0gdGhpcy5maW5nZXJwcmludFZhbHVlO1xuICAgIH1cbiAgICBnZXRFbWl0RGlyZWN0aXZlcyhldmVudCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBldmVudC5wYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBldmVudEFyZ3MuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcbiAgICAgICAgY29uc3QgZW1pdHMgPSBbXTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lTWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBldmVudCBcIiR7ZXZlbnRJbmZvfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW1pdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGlyZWN0aXZlLmFjdGlvbixcbiAgICAgICAgICAgICAgICBkYXRhOiBldmVudEFyZ3MsXG4gICAgICAgICAgICAgICAgbmFtZU1hdGNoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHM7XG4gICAgfVxuICAgIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuaWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lVmFsdWUsIHRoaXMucHJvcHNWYWx1ZSwgdGhpcy5saXN0ZW5lcnNWYWx1ZSwgaWQsIExpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSh0aGlzKSwgbmV3IFN0aW11bHVzRWxlbWVudERyaXZlcih0aGlzKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBMYXp5UGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUGFnZVVubG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBvbGxpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFF1ZXJ5U3RyaW5nUGx1Z2luKHRoaXMucXVlcnlNYXBwaW5nVmFsdWUpLFxuICAgICAgICAgICAgbmV3IENoaWxkQ29tcG9uZW50UGx1Z2luKHRoaXMuY29tcG9uZW50KSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5maWxlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuICAgICAgICBkZXRhaWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ2xpdmUnLCBjYW5jZWxhYmxlLCBidWJibGVzOiBjYW5CdWJibGUgfSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiZcbiAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnaWQnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlkICE9PSB0aGlzLmNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkxpdmVDb250cm9sbGVyRGVmYXVsdC52YWx1ZXMgPSB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHVybDogU3RyaW5nLFxuICAgIHByb3BzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDoge30gfSxcbiAgICBwcm9wc1VwZGF0ZWRGcm9tUGFyZW50OiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDoge30gfSxcbiAgICBjc3JmOiBTdHJpbmcsXG4gICAgbGlzdGVuZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRW1pdDogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBldmVudHNUb0Rpc3BhdGNoOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgZmluZ2VycHJpbnQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICAgIHJlcXVlc3RNZXRob2Q6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncG9zdCcgfSxcbiAgICBxdWVyeU1hcHBpbmc6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSA9IChjb250cm9sbGVyKSA9PiBuZXcgQmFja2VuZChjb250cm9sbGVyLnVybFZhbHVlLCBjb250cm9sbGVyLnJlcXVlc3RNZXRob2RWYWx1ZSwgY29udHJvbGxlci5jc3JmVmFsdWUpO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiIsImZ1bmN0aW9uIHJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHN2ZWx0ZUNvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsU3ZlbHRlQ29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3ZlbHRlQ29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFN2ZWx0ZUNvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBzdmVsdGVDb250cm9sbGVyc1tgLi8ke25hbWV9LnN2ZWx0ZWBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3ZlbHRlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyU3ZlbHRlQ29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPz8gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmludHJvID0gdGhpcy5pbnRyb1ZhbHVlID8/IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlU3ZlbHRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9kZXN0cm95SWZFeGlzdHMoKTtcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbnRybzogdGhpcy5pbnRybyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290ID0gdGhpcy5hcHA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnKTtcbiAgICB9XG4gICAgX2Rlc3Ryb3lJZkV4aXN0cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5yb290ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yb290LiRkZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lbGVtZW50LnJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkID0ge30pIHtcbiAgICAgICAgY29uc3QgZGV0YWlsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW50cm86IHRoaXMuaW50cm8sXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdzdmVsdGUnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBpbnRybzogQm9vbGVhbixcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIjxzdHlsZSBnbG9iYWw+XHJcbiAgICAvKiBAaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5jc3MnOyAqL1xyXG4gICAgLyogQGltcG9ydCAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5jc3MnOyAqL1xyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBGaWxlUG9uZCAsIHtyZWdpc3RlclBsdWdpbiAsIHN1cHBvcnRlZH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtZmlsZXBvbmQvc3JjL2luZGV4XCI7XHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWV4aWYtb3JpZW50YXRpb24nXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUmVzaXplIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1yZXNpemUnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1lZGl0J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS10cmFuc2Zvcm0nXHJcblxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyfSBmcm9tICdzdmVsdGUnXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuICAgXHJcblxyXG4gICAgcmVnaXN0ZXJQbHVnaW4oRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiAsRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsIEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgLCBGaWxlUG9uZFBsdWdpbkltYWdlRWRpdCAsIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0pXHJcblxyXG4gICAgbGV0IHBvbmQgO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgZmlsZTtcclxuXHJcbiAgICBsZXQgZmlsZW5hbWU7XHJcblxyXG4gICAgbGV0IHRhYiA9IFtdO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgbmFtZSA9IFwiZmlsZXBvbmRcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhhcyBpbml0aWFsaXNlZFwiKVxyXG4gICAgICAgIC8vIGZpbGVuYW1lID0gSlNPTi5wYXJzZShmaWxlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEZpbGUoZXJyb3IgLCBmaWxlcyl7XHJcbiAgICAvLyAgICBpZihmaWxlcy5maWxlbmFtZSAhPSBKU09OLnBhcnNlKGZpbGUpKXtcclxuICAgIC8vICAgICAgICAgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lXHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgIEpTT04ucGFyc2UoZmlsZSkubWFwKCh2YWwpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYodGFiLmluZGV4T2YodmFsKSA9PSAtMSl7XHJcbiAgICAvLyAgICAgICAgICAgICB0YWIucHVzaCh2YWwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVuYW1lKVxyXG4gICAgICAgIHRhYi5wdXNoKGZpbGVzLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSByZW1vdmVkXCIpXHJcblxyXG4gICAgICAgIHRhYiA9IHRhYi5maWx0ZXIoZWwgPT4gZWwgIT0gZmlsZXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYilcclxuXHJcbiAgICAgICAgZmlsZW5hbWUgPSBKU09OLnN0cmluZ2lmeSh0YWIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJhcHBcIj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiBuYW1lPVwiZmlsZV91cGRhdGVcIiBpZD1cIlwiIGJpbmQ6dmFsdWU9e2ZpbGVuYW1lfSBjbGFzcz1cImlucHV0X2Nob29zZV9maWxlXCI+XHJcbiAgICA8RmlsZVBvbmQgYmluZDp0aGlzPXtwb25kfSB7bmFtZX1cclxuICAgIHNlcnZlcj1cIi9maWxlcG9uZF9lZGl0XCJcclxuICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICBvbmluaXQ9e2hhbmRsZUluaXR9XHJcbiAgICBvbmFkZGZpbGU9e2hhbmRsZUFkZEZpbGV9XHJcbiAgICBtYXhGaWxlcz17MTB9XHJcbiAgICBvbnJlbW92ZWZpbGU9e2hhbmRsZVJlbW92ZUZpbGV9XHJcbiAgICBsYWJlbElkbGU9XCJHbGlzc2V6IHZvcyBmaWNoaWVyc1wiXHJcbiAgICBsYWJlbFByb2Nlc3Npbmc9XCJDaGFyZ2VtZW50Li4uXCJcclxuICAgIGZpbGVzPXtcclxuICAgICAgICBKU09OLnBhcnNlKGZpbGUpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbG9jYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlcjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbHVnaW5zPXtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3LFxyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlRXhpZk9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICA+XHJcbiAgICA8L0ZpbGVQb25kPlxyXG5cclxuXHJcbjwvZGl2PlxyXG4iLCI8c2NyaXB0PlxuICAgIGxldCBjdXJyZW50VGl0bGU7XG4gICAgbGV0IGFycmF5TGlua3MgPSBbXTtcbiAgICBsZXQgZ29MZWZ0ID0gZmFsc2U7XG4gICAgZXhwb3J0IGxldCBjYXRlZ29yeTtcblxuICAgIGV4cG9ydCBsZXQgbGlua3M7XG4gICAgZXhwb3J0IGxldCBsaW5rc0NhdGVnb3JpZXM7XG5cblxuXG4gICAgbGV0IGxpc3QgPSBbXTtcblxuICAgIGNhdGVnb3J5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHsgdGl0bGU6IGVsZW1lbnQubmFtZSwgbnVtOiAoKSA9PiBzZXRDYXRlZ29yeShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaXRlbXMpIH0pO1xuICAgIH0pO1xuICAgIFxuXG5cbiAgICBmdW5jdGlvbiBzZXRDYXRlZ29yeShuYW1lLCBpdGVtcykge1xuICAgICAgICBnb0xlZnQgPSAhZ29MZWZ0O1xuICAgICAgICBjdXJyZW50VGl0bGUgPSBuYW1lO1xuICAgICAgICBhcnJheUxpbmtzID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgYXJyYXlMaW5rcy5wdXNoKHsga2V5OiBlbGVtZW50LmtleSwgdmFsdWU6IGVsZW1lbnQubmFtZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgbGV0IHNwZWNpYWxMaXN0U3ViSXRlbXMgPSBbXG4gICAgICAgIHsgaGVhZGVyX3RpdGxlOiBcIkNhdMOpZ29yaWVzXCIsIGxpc3Q6IGxpc3QgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlR29MZWZ0KHBhcmFtcykge1xuICAgICAgICBnb0xlZnQgPSBwYXJhbXM7XG4gICAgfVxuXG5cbiAgICBpbXBvcnQgU2lkZSBmcm9tIFwiLi9TaWRlLnN2ZWx0ZVwiO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJfcGFyZW50X2FsbF9zdWJfaXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2FsbF9zdWJfaXRlbXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9zdWJfaXRlbXMgY29udGFpbmVyX3N1Yl9pdGVtc19tYWluXCIgY2xhc3M6Z29MZWZ0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yl9pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjY8OocyByYXBpZGVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggbGlua3MgYXMgaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIntpdGVtLnZhbHVlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbS5rZXl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggbGlua3NDYXRlZ29yaWVzIGFzIGl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2F0ZWdvcnkve2l0ZW0ua2V5fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbS52YWx1ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsjZWFjaCBzcGVjaWFsTGlzdFN1Ykl0ZW1zIGFzIHN1Ykl0ZW0gKHN1Ykl0ZW0uaGVhZGVyX3RpdGxlKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViX2l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3ViSXRlbS5oZWFkZXJfdGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjZWFjaCBzdWJJdGVtLmxpc3QgYXMgaXRlbSAoaXRlbS50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNwZWNpYWxfbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17aXRlbS5udW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Ym94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzaXplLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2lkZVxuICAgICAgICAgICAgZ29TaWRlPXtnb0xlZnR9XG4gICAgICAgICAgICBvbjp1cGRhdGU9eyhldmVudCkgPT4gdXBkYXRlR29MZWZ0KGV2ZW50LmRldGFpbCl9XG4gICAgICAgICAgICB7Y3VycmVudFRpdGxlfVxuICAgICAgICAgICAge2FycmF5TGlua3N9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpdGVtX3RpdGxlXCI+VGl0bGUgc2VjPC9zcGFuPlxuICAgICAgICAgICAgPHVsIHNsb3Q9XCJsaXN0X2xpbmtcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TWVpbGxldXJlcyB2ZW50ZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Tm91dmVhdXTDqXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Tm91dmVhdXTDqXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Tm91dmVhdXTDqXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2lkZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XHJcblxyXG4gICAgbGV0IGRpc3BsYXllZFRleHQgPSBcIlwiO1xyXG4gICAgbGV0IHRleHQgPSBcIkJpZW52ZW51ZSDDoCBsJ2VzcGFjZSBkZSBnZXN0aW9uIGRlIHZvdHJlIHZpdHJpbmVcIjtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBham91dGVyIHVuZSBsZXR0cmUgw6AgbGEgZm9pc1xyXG4gICAgZnVuY3Rpb24gcmV2ZWFsTmV4dExldHRlcigpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5ZWRUZXh0ICs9IHRleHRbaW5kZXhdO1xyXG4gICAgICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJldmVhbE5leHRMZXR0ZXIsIDEwMCk7IC8vIETDqWxhaSBlbnRyZSBjaGFxdWUgbGV0dHJlIChlbiBtaWxsaXNlY29uZGVzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEw6ljbGVuY2hlIGwnYWZmaWNoYWdlIGRlcyBsZXR0cmVzIHVuZSBwYXIgdW5lIGF1IGNoYXJnZW1lbnQgZHUgY29tcG9zYW50XHJcbiAgICBvbk1vdW50KCgpID0+IHtcclxuICAgICAgICByZXZlYWxOZXh0TGV0dGVyKCk7XHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48aDE+e2Rpc3BsYXllZFRleHR9PC9oMT5cclxuXHJcbiIsIjxzdHlsZSBnbG9iYWw+XHJcbiAgICAvKiBAaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5jc3MnOyAqL1xyXG4gICAgLyogQGltcG9ydCAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5jc3MnOyAqL1xyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBGaWxlUG9uZCAsIHtyZWdpc3RlclBsdWdpbiAsIHN1cHBvcnRlZH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtZmlsZXBvbmQvc3JjL2luZGV4XCI7XHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFeGlmT3JpZW50YXRpb24gZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWV4aWYtb3JpZW50YXRpb24nXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUmVzaXplIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1yZXNpemUnXHJcblxyXG4gICAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VFZGl0IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1lZGl0J1xyXG5cclxuICAgIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlVHJhbnNmb3JtIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS10cmFuc2Zvcm0nXHJcblxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyfSBmcm9tICdzdmVsdGUnXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuICAgXHJcblxyXG4gICAgcmVnaXN0ZXJQbHVnaW4oRmlsZVBvbmRQbHVnaW5JbWFnZUV4aWZPcmllbnRhdGlvbiAsRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcsIEZpbGVQb25kUGx1Z2luSW1hZ2VSZXNpemUgLCBGaWxlUG9uZFBsdWdpbkltYWdlRWRpdCAsIEZpbGVQb25kUGx1Z2luSW1hZ2VUcmFuc2Zvcm0pXHJcblxyXG4gICAgIGxldCBwb25kO1xyXG5cclxuICAgICBsZXQgZmlsZW5hbWUgO1xyXG5cclxuICAgICBsZXQgdGFiID0gW107XHJcblxyXG4gICAgZXhwb3J0IGxldCBuYW1lID0gXCJmaWxlcG9uZFwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGFzIGluaXRpYWxpc2VkXCIpXHJcbiAgICAgICAgLy8gcG9uZC5hZGRGaWxlKGZpbGUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRGaWxlKGVycm9yICwgZmlsZXMpe1xyXG4gICAgLy8gICAgaWYoZmlsZXMuZmlsZW5hbWUgIT0gSlNPTi5wYXJzZShmaWxlKSl7XHJcbiAgICAvLyAgICAgICAgIGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZVxyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICBKU09OLnBhcnNlKGZpbGUpLm1hcCgodmFsKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmKHRhYi5pbmRleE9mKHZhbCkgPT0gLTEpe1xyXG4gICAgLy8gICAgICAgICAgICAgdGFiLnB1c2godmFsKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhmaWxlcy5maWxlbmFtZSlcclxuICAgICAgICB0YWIucHVzaChmaWxlcy5maWxlbmFtZSk7XHJcblxyXG4gICAgICAgIGZpbGVuYW1lID0gSlNPTi5zdHJpbmdpZnkodGFiKVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlRmlsZShlcnJvciAsIGZpbGVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgcmVtb3ZlZFwiKVxyXG5cclxuICAgICAgICB0YWIgPSB0YWIuZmlsdGVyKGVsID0+IGVsICE9IGZpbGVzLmZpbGVuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWIpXHJcblxyXG4gICAgICAgIGZpbGVuYW1lID0gSlNPTi5zdHJpbmdpZnkodGFiKVxyXG4gICAgfVxyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImFwcFwiPlxyXG4gICAgPGlucHV0IHN0eWxlPVwiZGlzcGxheTpub25lO1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpbGVfdXBkYXRlXCIgaWQ9XCJcIiBiaW5kOnZhbHVlPXtmaWxlbmFtZX0gY2xhc3M9XCJpbnB1dF9jaG9vc2VfZmlsZVwiPlxyXG5cclxuICAgIDxGaWxlUG9uZCBiaW5kOnRoaXM9e3BvbmR9IHtuYW1lfVxyXG4gICAgc2VydmVyPVwiL2ZpbGVwb25kXCJcclxuICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICBvbmluaXQ9e2hhbmRsZUluaXR9XHJcbiAgICBvbmFkZGZpbGU9e2hhbmRsZUFkZEZpbGV9XHJcbiAgICAgbWF4RmlsZXM9ezEwfVxyXG4gICAgb25yZW1vdmVmaWxlPXtoYW5kbGVSZW1vdmVGaWxlfVxyXG4gICAgbGFiZWxJZGxlPVwiR2xpc3NleiB2b3MgZmljaGllcnNcIlxyXG4gICAgbGFiZWxQcm9jZXNzaW5nPVwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgICBcclxuICAgIHBsdWdpbnM9e1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXdcclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICA+XHJcbiAgICA8L0ZpbGVQb25kPlxyXG5cclxuXHJcbjwvZGl2PlxyXG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgZ29TaWRlID0gZmFsc2U7XHJcbiAgICBleHBvcnQgbGV0IGN1cnJlbnRUaXRsZTtcclxuICAgIGV4cG9ydCBsZXQgYXJyYXlMaW5rcztcclxuXHJcbiAgICBsZXQgaGlkZVNpZGUgPSBmYWxzZTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNpZGVCYXIoKSB7XHJcbiAgICAgICAgaGlkZVNpZGUgPSAhaGlkZVNpZGU7XHJcbiAgICAgICAgZ29TaWRlID0gZmFsc2U7XHJcbiAgICAgICAgZGlzcGF0Y2goXCJ1cGRhdGVcIiwgZmFsc2UpO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXZcclxuICAgIGNsYXNzPVwiY29udGFpbmVyX3N1Yl9pdGVtcyBjb250YWluZXJfc3ViX2l0ZW1zX3NlY29uZGFyeVwiXHJcbiAgICBjbGFzczpnb1NpZGVcclxuICAgIGNsYXNzOmhpZGVTaWRlXHJcbj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdWJfaXRlbXNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbV90aXRsZVwiIG9uOmNsaWNrPXtoaWRlU2lkZUJhcn0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld2JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2l6ZS02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC41IDE5LjUgMyAxMm0wIDAgNy41LTcuNU0zIDEyaDE4XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3Bhbj5NZW51IHByaW5jaXBhbDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHsjaWYgYXJyYXlMaW5rc31cclxuICAgICAgICAgICAgICAgICAgICB7I2VhY2ggYXJyYXlMaW5rcyBhcyBpdGVtIChpdGVtLmtleSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2F0ZWdvcnkvY2F0ZWdvcnlJdGVtL3tpdGVtLmtleX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbS52YWx1ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgey9lYWNofVxyXG4gICAgICAgICAgICAgICAgey9pZn1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJTd2lwZXIiLCJBdXRvcGxheSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJpbml0aWFsaXplIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uX2V4aXQiLCJsZWZ0X25hdmlnYXRpb25fYmFyIiwib3ZlcmxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzZWxlY3QiLCJhcmVhcyIsImZhdiIsImZhdkFsbCIsImVsIiwic3dpcGVyX2V4cGxvcmF0aW9uIiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibG9vcCIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiYnJlYWtwb2ludHMiLCJiYXJfYWRtaW4iLCJiYXJfYWRtaW5fbW9iaWxlIiwib3ZlcmxheV9hcHBfbW9iaWxlIiwibGVmdF9uYXZfYmFyX2FkbWluIiwidG9wX25hdl9iYXJfYWRtaW4iLCJib2R5IiwidG9nZ2xlIiwic3Bpbm5lciIsInByb2R1Y3RfY2F0ZWdvcnkiLCJmYWN0b3J5X2NhdGVnb3J5Iiwic2hvd0NhcmRTZWFyY2giLCJwb3B1cFRhcmdldCIsIm92ZXJsYXlTZWFyY2hCYXJUYXJnZXQiLCJoaWRlQ2FyZFNlYXJjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJyZWdpc3RlclN2ZWx0ZUNvbnRyb2xsZXJDb21wb25lbnRzIiwiQWxwaW5lIiwid2luZG93Iiwic3RhcnQiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwic3RhdGUiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsImFyZ3MiLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJ0cmltIiwicHVzaE1vZGlmaWVyIiwiY29uY2F0IiwiY2hhciIsImNvbWJpbmVTcGFjZWRBcnJheSIsInBhcnRzIiwiZmluYWxQYXJ0cyIsInBhcnQiLCJ0cmltQWxsIiwic3BsaXQiLCJzdHIiLCJyZXBsYWNlIiwibm9ybWFsaXplTW9kZWxOYW1lIiwibW9kZWwiLCJtYXAiLCJqb2luIiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJXZWFrTWFwIiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbXBvbmVudCIsInNldCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJyZWplY3QiLCJjb3VudCIsIm1heENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImdldCIsImNsZWFySW50ZXJ2YWwiLCJmaW5kQ29tcG9uZW50cyIsImN1cnJlbnRDb21wb25lbnQiLCJvbmx5UGFyZW50cyIsIm9ubHlNYXRjaE5hbWUiLCJjb21wb25lbnRzIiwiY29tcG9uZW50TmFtZSIsImNvbnRhaW5zIiwiZmluZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiY2hpbGRDb21wb25lbnROYW1lIiwiY2hpbGRDb21wb25lbnQiLCJmaW5kUGFyZW50IiwicGFyZW50RWxlbWVudCIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImhhc0F0dHJpYnV0ZSIsImNoZWNrZWQiLCJnZXRBdHRyaWJ1dGUiLCJpbnB1dFZhbHVlIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkT3B0aW9ucyIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiVmFsdWVTdG9yZSIsInByb3BzIiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJub3JtYWxpemVkTmFtZSIsImhhcyIsImdldE9yaWdpbmFsUHJvcHMiLCJnZXREaXJ0eVByb3BzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5Iiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJjaGFuZ2VkIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiY3VycmVudFZhbHVlIiwiSWRpb21vcnBoIiwiRU1QVFlfU0VUIiwiU2V0IiwiZGVmYXVsdHMiLCJtb3JwaFN0eWxlIiwiY2FsbGJhY2tzIiwiYmVmb3JlTm9kZUFkZGVkIiwibm9PcCIsImFmdGVyTm9kZUFkZGVkIiwiYmVmb3JlTm9kZU1vcnBoZWQiLCJhZnRlck5vZGVNb3JwaGVkIiwiYmVmb3JlTm9kZVJlbW92ZWQiLCJhZnRlck5vZGVSZW1vdmVkIiwiYmVmb3JlQXR0cmlidXRlVXBkYXRlZCIsImhlYWQiLCJzdHlsZSIsInNob3VsZFByZXNlcnZlIiwiZWx0Iiwic2hvdWxkUmVBcHBlbmQiLCJzaG91bGRSZW1vdmUiLCJhZnRlckhlYWRNb3JwaGVkIiwibW9ycGgiLCJvbGROb2RlIiwibmV3Q29udGVudCIsImNvbmZpZyIsIkRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyc2VDb250ZW50Iiwibm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVDb250ZW50IiwiY3R4IiwiY3JlYXRlTW9ycGhDb250ZXh0IiwibW9ycGhOb3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZWROZXdDb250ZW50IiwiYmxvY2siLCJvbGRIZWFkIiwibmV3SGVhZCIsInByb21pc2VzIiwiaGFuZGxlSGVhZEVsZW1lbnQiLCJhbGwiLCJhc3NpZ24iLCJpZ25vcmUiLCJtb3JwaENoaWxkcmVuIiwiYmVzdE1hdGNoIiwiZmluZEJlc3ROb2RlTWF0Y2giLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsIm1vcnBoZWROb2RlIiwibW9ycGhPbGROb2RlVG8iLCJpbnNlcnRTaWJsaW5ncyIsImlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50IiwicG9zc2libGVBY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlVmFsdWUiLCJhY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlIiwiaXNTb2Z0TWF0Y2giLCJyZXBsYWNlQ2hpbGQiLCJIVE1MSGVhZEVsZW1lbnQiLCJzeW5jTm9kZUZyb20iLCJuZXdQYXJlbnQiLCJvbGRQYXJlbnQiLCJuZXh0TmV3Q2hpbGQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0aW9uUG9pbnQiLCJuZXdDaGlsZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24iLCJpc0lkU2V0TWF0Y2giLCJpZFNldE1hdGNoIiwiZmluZElkU2V0TWF0Y2giLCJyZW1vdmVOb2Rlc0JldHdlZW4iLCJzb2Z0TWF0Y2giLCJmaW5kU29mdE1hdGNoIiwiaW5zZXJ0QmVmb3JlIiwidGVtcE5vZGUiLCJyZW1vdmVOb2RlIiwiaWdub3JlQXR0cmlidXRlIiwiYXR0ciIsInRvIiwidXBkYXRlVHlwZSIsIm5vZGVUeXBlIiwiZnJvbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVzIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXJyIiwidG9BdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImlnbm9yZVVwZGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJuZXdIZWFkVGFnIiwiY3VycmVudEhlYWQiLCJhZGRlZCIsInJlbW92ZWQiLCJwcmVzZXJ2ZWQiLCJub2Rlc1RvQXBwZW5kIiwiaGVhZE1lcmdlU3R5bGUiLCJzcmNUb05ld0hlYWROb2RlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJuZXdIZWFkQ2hpbGQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiY3VycmVudEhlYWRFbHQiLCJpbk5ld0NvbnRlbnQiLCJpc1JlQXBwZW5kZWQiLCJpc1ByZXNlcnZlZCIsIl9sb29wIiwibmV3Tm9kZSIsIl9ub2Rlc1RvQXBwZW5kIiwiX2kyIiwibmV3RWx0IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJocmVmIiwic3JjIiwicHJvbWlzZSIsIl9yZXNvbHZlIiwiX2kzIiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsInRhcmdldCIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJpZCIsImdldElkSW50ZXJzZWN0aW9uQ291bnQiLCJzdGFydEluY2x1c2l2ZSIsImVuZEV4Y2x1c2l2ZSIsIm5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCIsInBvdGVudGlhbE1hdGNoIiwib3RoZXJNYXRjaENvdW50IiwicG90ZW50aWFsU29mdE1hdGNoIiwic2libGluZ1NvZnRNYXRjaENvdW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiY29udGVudFdpdGhTdmdzUmVtb3ZlZCIsIm1hdGNoIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsInJlc3BvbnNlRG9jIiwiZHVtbXlQYXJlbnQiLCJOb2RlIiwiYXBwZW5kIiwiX2k0IiwiX2FyciIsInN0YWNrIiwibm9kZSIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJjdXJyZW50Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194Iiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwic2V0SXRlbSIsIml0ZW1OYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJyZW1vdmVJdGVtIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJfcmVmMyIsIl9yZWY0IiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXM1IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJvbGRWYWx1ZSIsInByZXZpb3VzVmFsdWVzIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIkNvbXBvbmVudCIsImxpc3RlbmVycyIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiX3RoaXM2IiwiZmluZ2VycHJpbnQiLCJkZWZhdWx0RGVib3VuY2UiLCJiYWNrZW5kUmVxdWVzdCIsInBlbmRpbmdBY3Rpb25zIiwicGVuZGluZ0ZpbGVzIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJsaXN0ZW5lciIsIl90aGlzNiRsaXN0ZW5lcnMkZ2V0IiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwiZmlsZXMiLCJpbnB1dCIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImVtaXQiLCJvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQiLCJwZXJmb3JtRW1pdCIsImVtaXRVcCIsImVtaXRTZWxmIiwiZG9FbWl0IiwibWF0Y2hpbmdOYW1lIiwiX3RoaXM3IiwiYWN0aW9ucyIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOCIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwicmVxdWVzdENvbmZpZyIsInVwZGF0ZWQiLCJtYWtlUmVxdWVzdCIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTYiLCJfT2JqZWN0JHZhbHVlcyIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3giLCJfdGhpczkiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsImxvY2F0aW9uIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJuZXdQcm9wcyIsImdldENvbXBvbmVudFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsIl9yZWY2IiwiX3JlZjciLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXMxMCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsIl90aGlzMTEiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTIiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJidWlsZFJlcXVlc3QiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJfaTciLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIkJhY2tlbmQiLCJyZXF1ZXN0QnVpbGRlciIsIl90aGlzJHJlcXVlc3RCdWlsZGVyJCIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczEzIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTQiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjgiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxNSIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJfdmFsaWRNb2RpZmllcnMkZ2V0IiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIm1hdGNoaW5nRWxlbWVudHMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QzIiwiX2VsZW1lbnQkY2xhc3NMaXN0NCIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTYiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTciLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxOCIsIl9yZWY5Iiwic3RvcEFsbFBvbGxpbmciLCJjbGVhclBvbGxpbmciLCJfdGhpczE5IiwidGltZXIiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMyMCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiaXNWYWx1ZUVtcHR5IiwiX2k4IiwiX09iamVjdCRrZXlzIiwidG9RdWVyeVN0cmluZyIsImJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzIiwiYmFzZUtleSIsIl9yZWYxMCIsIl9yZWYxMSIsImlLZXkiLCJpVmFsdWUiLCJfcmVmMTIiLCJfcmVmMTMiLCJmcm9tUXVlcnlTdHJpbmciLCJzZWFyY2giLCJpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSIsIl9rZXkkc3BsaXQiLCJfa2V5JHNwbGl0MiIsIl90b0FycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJyZXN0IiwiX3JlZjE0IiwiX3JlZjE1IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG90Tm90YXRlZEtleSIsIlVybFV0aWxzIiwiX1VSTCIsInNldERhdGEiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiVVJMIiwiSGlzdG9yeVN0cmF0ZWd5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlF1ZXJ5U3RyaW5nUGx1Z2luIiwibWFwcGluZyIsIl90aGlzMjMiLCJ1cmxVdGlscyIsImN1cnJlbnRVcmwiLCJfcmVmMTYiLCJfcmVmMTciLCJDaGlsZENvbXBvbmVudFBsdWdpbiIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJtb2RlbERpcmVjdGl2ZXMiLCJfdGhpczI0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsIkxhenlQbHVnaW4iLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMjUiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMjUkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiX3RoaXMyNiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI3IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyOCIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjE4IiwibmFtZU1hdGNoIiwiX3RoaXMyOSIsIl9yZWYxOSIsIl90aGlzMzAiLCJfcmVmMjAiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMxIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsInF1ZXJ5TWFwcGluZ1ZhbHVlIiwiX3RoaXMzMiIsIl9yZWYyMSIsIl90aGlzMzMiLCJfcmVmMjIiLCJldmVudE5hbWUiLCJfZWxlbWVudCRmaWxlcyIsImZpbmFsVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczM0IiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImNzcmYiLCJldmVudHNUb0Rpc3BhdGNoIiwicmVxdWVzdE1ldGhvZCIsInF1ZXJ5TWFwcGluZyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiY3NyZlZhbHVlIiwic3ZlbHRlQ29udHJvbGxlcnMiLCJpbXBvcnRBbGxTdmVsdGVDb21wb25lbnRzIiwicmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCIsImRlZmF1bHRfMSIsIl90aGlzJHByb3BzVmFsdWUiLCJfdGhpcyRpbnRyb1ZhbHVlIiwiaW50cm8iLCJpbnRyb1ZhbHVlIiwiY29tcG9uZW50VmFsdWUiLCJfZGVzdHJveUlmRXhpc3RzIiwicm9vdCIsIiRkZXN0cm95IiwiQm9vbGVhbiIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9