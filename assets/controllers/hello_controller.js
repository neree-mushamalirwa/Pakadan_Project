import { Controller } from '@hotwired/stimulus';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
  static targets = ["overlaySearchBar" , "popup" , "Exit"]

  connect() {

    // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
  }

  initialize() {
    var button = document.querySelector(".show_side_bar");
    var button_exit = document.querySelector(".exit_side_bar");
    var left_navigation_bar = document.querySelector(".left_navigation_bar");
    var overlay = document.querySelector(".overlay");

    if (button) {
      button.addEventListener("click", () => {
        left_navigation_bar.classList.add("show");
        overlay.classList.add("active");
      })

    }
    if (button_exit) {
      button_exit.addEventListener("click", () => {
        left_navigation_bar.classList.remove("show");
        overlay.classList.remove("active");
      })

    }
    if (overlay) {
      overlay.addEventListener("click", () => {
        left_navigation_bar.classList.remove("show");
        overlay.classList.remove("active");
      })

    }

    var inputs = document.querySelectorAll("input");
    if (inputs) {
      inputs.forEach(element => {
        element.addEventListener("focus", () => {
          element.classList.add("active");
        })
        element.addEventListener("blur", () => {
          element.classList.remove("active");
        })
      })

    }
    var select = document.querySelectorAll("select");
    if (select) {
      select.forEach(element => {
        element.addEventListener("focus", () => {
          element.classList.add("active");
        })
        element.addEventListener("blur", () => {
          element.classList.remove("active");
        })
      })

    }
    var areas = document.querySelectorAll("textarea");
    if (areas) {
      areas.forEach(element => {
        element.addEventListener("focus", () => {
          element.classList.add("active");
        })
        element.addEventListener("blur", () => {
          element.classList.remove("active");
        })
      })

    }
    var fav = document.querySelectorAll(".favorite_btn");
    var favAll = document.querySelectorAll(".favorite_btn");
    if (fav) {

      fav.forEach(element => {
        element.addEventListener("click", () => {
          favAll.forEach(el => {
            el.classList.remove("active");
          })
          element.classList.add("active");
        })

      })

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

      const swiper_exploration = new Swiper('.swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination, Autoplay],

        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
          },
        }
      });

    })


    var bar_admin = document.querySelector(".bar_admin");
    var bar_admin_mobile = document.querySelector(".bar_admin_mobile");
    var overlay_app_mobile = document.querySelector(".overlay_app_mobile");


    var left_nav_bar_admin = document.querySelector(".left_nav_bar_admin");
    var top_nav_bar_admin = document.querySelector(".top_nav_bar_admin");
    var body = document.querySelector("body");

    if (bar_admin) {
      bar_admin.addEventListener("click", () => {
        left_nav_bar_admin.classList.toggle("hide")
        top_nav_bar_admin.classList.toggle("hide")
        body.classList.toggle("hide")
        body.classList.add("add_transition")
      })
    }

    if (bar_admin_mobile) {
      bar_admin_mobile.addEventListener("click", () => {
        left_nav_bar_admin.classList.toggle("show_bar")
        overlay_app_mobile.classList.toggle("active")
      })
    }
    if (overlay_app_mobile) {
      overlay_app_mobile.addEventListener("click", () => {
        left_nav_bar_admin.classList.toggle("show_bar")
        overlay_app_mobile.classList.toggle("active")
      })
    }



    var spinner = document.querySelector(".spinner");


    var product_category = document.querySelectorAll(".product_category button");


    if (product_category) {
      product_category.forEach(element => {
        element.addEventListener("click", () => {
          product_category.forEach(element => {
            element.classList.remove("active")
          });
          element.classList.add("active")
        })
      });
    }



    var factory_category = document.querySelectorAll(".factory_category button");


    if (factory_category) {
      factory_category.forEach(element => {
        element.addEventListener("click", () => {
          factory_category.forEach(element => {
            element.classList.remove("active")
          });
          element.classList.add("active")
        })
      });
    }







  }

  showCardSearch(){
    this.popupTarget.classList.remove('hidden');
    this.overlaySearchBarTarget.classList.add('active');
  }
  hideCardSearch(){
    this.popupTarget.classList.add('hidden');
    this.overlaySearchBarTarget.classList.remove('active');
  }
}
