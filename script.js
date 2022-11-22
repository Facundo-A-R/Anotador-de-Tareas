//Import de la funcion addTask y readTask
import {addTask} from './componentes/addTask.js';
import {displayTask} from './componentes/readTask.js';

//Immediately Invoked Function Expression IIFE
(() => {
    //Constante del boton.
    const btn = document.querySelector("[data-form-btn]");

    //Evento
    btn.addEventListener("click", addTask);
    //LLamo a la funcion readTask()
    displayTask();
})();