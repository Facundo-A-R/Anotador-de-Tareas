  //Function anomia checkComplete
  //Arrow function o funciones flechas
  const checkComplete = (id) => {
    //Creo un elemento HTML
    const i = document.createElement("i");
    //Agrego varias clases al elemento creado.
    i.classList.add("far", "fa-check-square", "icon");
    //Evento
    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
  };

  //Function anomia completeTask
  //Arrow function o funciones flechas
  const completeTask = (event, id) => {
    //Recupero el elemento.
    const element = event.target;
    //Agrego varias clases al elemento.
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    //Remuevo una de las clases del elemento.
    element.classList.toggle("far");

    console.log("check id ", id);
    //Constante tipo arreglo que resive los datos almacenados en localStorage
    const taskId = JSON.parse(localStorage.getItem("tasks"));
    //Recupero la posicion del arreglo donde se encuentra el id y comparo que este sea identico al resivido por parametro
    const index = taskId.findIndex(item => item.id === id);
    console.log(index);
    //Modificamos el arreglo dentro del localStorage mediante la posicion del index modificando el atributo complete
    taskId[index].complete = !taskId[index].complete;
    console.log(taskId);
    //Almaceno el estado en el localStorage
    localStorage.setItem("tasks", JSON.stringify(taskId));
  };

  export default checkComplete;