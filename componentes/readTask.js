//Import de la funcion createTask
import { createTask } from "./addTask.js";
//Import de la funcion uniqueDate
import { uniqueDate } from "../service/date.js";
//Import de la funcion orderDates
import { orderDates } from "../service/date.js";
//Import de script
import dateElement from "./dateElement.js";

//Function anomia displayTask
//Arrow function o funciones flechas
export const displayTask = () => {
   
    //Elemento padre.
    const list = document.querySelector("[data-list]");
    //Constante tipo arreglo que resive los datos almacenados en localStorage
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    
    //console.log(dateElement("14/06/2021"));
    //Constante que ejecuta la funcion uniqueDate(taskList) mostrando la lista de fechas
    const dateListFecha = uniqueDate(taskList);
    //console.log(dateListFecha);
    //Ordeno las fechas
    orderDates(dateListFecha);
    //Recorro el arreglo dateListFecha
    dateListFecha.forEach((dateListFecha) => {
        //Le doy un formato con la API moment
        const dateMoment = moment(dateListFecha, "DD/MM/YYYY");
        
        /*
        * Agrego el elemento del arreglo dateListFecha agrupando cada uno de los elementos 
        * por cada una de las fechas del dateListFecha
        */
        list.appendChild(dateElement(dateListFecha));            

        //Recorro la lista que esta en el localStorage
        taskList.forEach( (tasks) => {
            //Le doy un formato con la API moment
            const tasksMoment = moment(tasks.fechaFormat, "DD/MM/YYYY");
            //Calculo la diferencia con el metodo diff() de la clase moment
            const fechaDiff = dateMoment.diff(tasksMoment);

            /* Agrego el elemento fechaFormar al contenedorcomo lista
            list.appendChild(dateElement(tasks.fechaFormat)); */

            // Si la diferencia es igual a cero creamos la lista
            if (fechaDiff === 0) {
                //Agrego la tarea o las tareas mediante la funcion createTask(tasks)
                list.appendChild(createTask(tasks));   
            }
        });
    });
    
};