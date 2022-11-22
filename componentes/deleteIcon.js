 //Import de la funcion orderDates
 import { displayTask } from "./readTask.js";

 //Function anomia deleteIcon
 //Arrow function o funciones flechas
 const deleteIcon = (id) => {
   //Creo un elemento HTML
   const i = document.createElement("i");
   //Agrego varias clases al elemento creado.
   i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
   //Evento
   i.addEventListener("click", () => deleteTask(id));
   return i;
 };

 //Function anomia deleteTask
 //Arrow function o funciones flechas
 const deleteTask = (id) => {
  //Elemento padre.
  const list = document.querySelector("[data-list]");
  console.log("id", id);
  //Constante tipo arreglo que resive los datos almacenados en localStorage
  const deleteTaskId = JSON.parse(localStorage.getItem("tasks"));
  console.log(deleteTaskId);
  //Recupero la posicion del arreglo donde se encuentra el id y comparo que este sea identico al resivido por parametro
  const index = deleteTaskId.findIndex(item => item.id === id);
  console.log(index);
  //Metodo de la libreria array que permite borrar elementos de un arreglo
  deleteTaskId.splice(index,1);
  //Limpio el elemento padre 
  list.innerHTML = "";
  //Almaceno el estado en el localStorage
  localStorage.setItem("tasks", JSON.stringify(deleteTaskId));
  //LLamo a la funcion displayTask() que se encarga de refrescar la pantalla
  displayTask();

   /* //Recupero el elemento del elemento padre.
   const parent = event.target.parentElement;
   //remuevo el elemento padre
   parent.remove(); */
 };

 export default deleteIcon;