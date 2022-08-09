let nombre = "";
let apellido = "";
let mail = "";
const personal = [];
let opcion = 0;

class Persona {
    constructor(nombre, apellido, mail) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.mail = mail,
            this.ausencias = 0
    }
}

function cargarPersonal() {
    nombre = prompt("Ingrese nombre: ");
    apellido = prompt("Ingrese apellido: ");
    mail = prompt("Ingrese mail: ");
}

alert("Bienvenido al sistema de control de personal");
do {
    opcion = parseInt(prompt("Opcion 1 - Dar de alta personal \nOpcion 2 - Dar de baja personal \nOpcion 3 - Mostrar personal actual \nOpcion 0 - Salir del Sistema \nIngrese la opcion deseada : "));
    switch (opcion) {
        case 1:
            let alta = prompt("Desea dar de alta una nueva persona ? (si/no): ");
            while (alta == "si") {
                cargarPersonal();
                const persona1 = new Persona(nombre, apellido, mail);
                personal.push(persona1);
                alta = prompt("Desea dar de alta una nueva persona ? (si/no): ");
            }
            break;
        case 2:
            let salida = "";
            do {
                // let salida = "si";
                let eliminar = prompt("Ingrese el nombre del empleado a eliminar: ")
                for(i=0; i<=personal.length;i++){
                    if (personal[i].nombre == eliminar){
                        alert("Persona a eliminar: "+personal[i].nombre);
                        personal.splice(i, 1);
                        break;
                    }
                }
                        // alert("Empleado no encontrado.");
                    
                
                // let baja = personal.indexOf(eliminar);
                // alert(baja);
                // if (baja >= 0) {
                //     personal.splice(baja, 1);
                 
                salida = prompt("Desea seguir eliminando personal si/no: ")
            } while (salida == "si");
            break;
        case 3:
            let mostrarPersonal = [];
            for (Persona of personal){
                mostrarPersonal.push(Persona.nombre);
            }
            alert(mostrarPersonal.join("*"));
            break;

    }
} while (opcion != 0);


alert("Gracias por usar el sistema de control de personal");
console.log(personal);


