import { Controller } from '@hotwired/stimulus';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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
    connect() {

        // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }

    initialize(){
        var button = document.querySelector(".show_side_bar");
        var button_exit = document.querySelector(".exit_side_bar");
        var left_navigation_bar = document.querySelector(".left_navigation_bar");
        var overlay = document.querySelector(".overlay");
        if(button){
            button.addEventListener("click" , () =>{
                left_navigation_bar.classList.add("show");
                overlay.classList.add("active");
            })
            
        }
        if(button_exit){
            button_exit.addEventListener("click" , () =>{
                left_navigation_bar.classList.remove("show");
                overlay.classList.remove("active");
            })
            
        }
        if(overlay){
            overlay.addEventListener("click" , () =>{
                left_navigation_bar.classList.remove("show");
                overlay.classList.remove("active");
            })
            
        }

        var inputs =document.querySelectorAll("input");
        if (inputs) {
            inputs.forEach(element => {
                element.addEventListener("focus" , ()=> {
                    element.classList.add("active");
                })
                element.addEventListener("blur" , ()=> {
                    element.classList.remove("active");
                })
            })
           
        }

        // init Swiper:
    const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
    // Responsive breakpoints
    breakpoints: {
      
      // when window width is >= 600px
      300: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 30
      },
      // when window width is >= 850px
      850: {
        slidesPerView: 3.5,
        spaceBetween: 40
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 4.5,
        spaceBetween: 40
      },
  }
  });
        
    }
}
