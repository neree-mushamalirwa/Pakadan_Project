import { Controller } from '@hotwired/stimulus';

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
        
    }
}
