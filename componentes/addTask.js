//Import de script
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
//Import de la funcion uniqueDate
import { uniqueDate } from "../service/date.js";
//Import de la funcion displayTask
import { displayTask } from "./readTask.js";

//Function anomia addTask
//Arrow function o funciones flechas
export const addTask = (event) => {
  //Prevenir eventos del formulario
  event.preventDefault();
  //Elemento padre.
  const list = document.querySelector("[data-list]");
  //Constante del input data-form-input
  const input = document.querySelector("[data-form-input]");
  //Recupero el valor con la propiedad value
  const value = input.value;
  //Limpio el input
  input.value = "";
  //Constante del input datatime-local
  const datetime = document.querySelector("[data-form-datetime]");
  //Recupero el valor con la propiedad value
  const fecha = datetime.value;
  //Le doy un formato con la API moment
  const fechaFormat = moment(fecha).format("DD/MM/YYYY");
  //Limpio el input
  datetime.value = "";

  //Validacion si los campos estan vacios
  if (value === "" || fecha === "") {
    return;
  }

  //Constante designada al check
  const complete = false;

  //Creamos una constante de tipo Objeto
  const taskObj = {
    value,
    fechaFormat,
    complete,
    id: uuid.v4(),
  };

  //Limpio el elemento padre
  list.innerHTML = "";

  //Constante tipo arreglo que resive los datos almacenados en localStorage
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  //console.log(taskList);

  //Almaceno el objeto en un arreglo
  taskList.push(taskObj);

  //Agrego a la base de datos del navegador con sessionStorage
  //sessionStorage.setItem("tasks", JSON.stringify(taskObj));

  //Agrego a la base de datos del navegador con localStorage
  localStorage.setItem("tasks", JSON.stringify(taskList));

  //LLamo a la funcion readTask
  displayTask();

  /* //Ejecuto la funcion createTask(taskObj)
      const task = createTask(taskObj)
      //Agrego la tarea o las tareas
      list.appendChild(task); */
};

//Function anomia createTask
//Arrow function o funciones flechas
export const createTask = ({ value, fechaFormat, complete, id }) => {
  //Creo un elemento HTML
  const task = document.createElement("li");
  //Agrego una clase al elemento creado.
  task.classList.add("card");

  //Creo un elemento HTML
  const taskContent = document.createElement("div");

  //Creo una constante que resive el valor de la funcion checkComplete(id).
  const check = checkComplete(id);
  console.log(complete);

  //Verifico el estado de mi constante complete si esta es true le aplico las clases
  if (complete) {
    console.log("completado");
    //Agrego varias clases al check.
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    //Remuevo una de las clases del check.
    check.classList.toggle("far");
  }

  //Creo un elemento HTML
  const titleTask = document.createElement("span");
  //Agrego una clase al elemento creado.
  titleTask.classList.add("task");
  //Agrego el valor de la constante value que contiene el input
  titleTask.innerText = value;

  //Creo un elemento HTML
  const dateElement = document.createElement("span");
  //Le agrego fechaFormat al elemento creado.
  dateElement.innerHTML = fechaFormat;

  //Agrego el templei
  //task.innerHTML = content;

  //Le asigno un Hijo a taskContent (div) el cual es un elemento HTML (i)
  taskContent.appendChild(check);
  //Agrego la tarea Hijo en el padre
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  //Agrego la tarea Hijo en el padre
  task.appendChild(dateElement);
  //Le asigno un Hijo a taskContent (div) el cual es un elemento HTML (i)
  task.appendChild(deleteIcon(id));

  //Retorno la implementacion
  return task;
};
