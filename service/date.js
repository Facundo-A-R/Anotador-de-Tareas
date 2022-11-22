//Function anomia uniqueDate
//Arrow function o funciones flechas
export const uniqueDate = (tasks) => {
    //Arreglo que almacenara las fechas dentro de tasks.fechaFormat
    const unique = [];
    //Recorro las tareas almacenadas en el localStorage
    tasks.forEach((tasks) => {
        //console.log(tasks.fechaFormat);
        if (!unique.includes(tasks.fechaFormat)) {
            unique.push(tasks.fechaFormat);  
        }
    });
    //console.log(unique);
    return unique;
}

//Funcion que ordena por fecha
export const orderDates = (uniqueFecha) => { 
    uniqueFecha.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY')
        const secondDate = moment(b, 'DD/MM/YYYY')
        return firstDate - secondDate
    });
}