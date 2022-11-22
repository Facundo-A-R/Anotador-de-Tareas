//Function anomia default
//Arrow function o funciones flechas
export default (date) => {
    //
    const dateElement = document.createElement("li");
    //
    dateElement.classList.add("date");
    //
    dateElement.innerHTML = date;

    return dateElement;
}