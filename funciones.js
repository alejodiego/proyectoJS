let nombre = "";
let apellido = "";
let mail = "";

class Persona {
    constructor(nombre, apellido, mail) {
        this.nombre = nombre.toUpperCase(),
            this.apellido = apellido.toUpperCase(),
            this.mail = mail,
            this.ausencias = 0
    }
    controlPresentismo() {
        alert("Control de presentismo, " + this.nombre);
        let controlPresentismo = prompt(this.nombre + " " + this.apellido + " asistio a su puesto el dia de hoy ? (si/no)");
        if (controlPresentismo == "no") {
            this.ausencias += 1;
            console.log(this.ausencias);
        } else {
            alert("No contabiliza ausencia");
        }
    }

}

function cargarPersonal() {
    nombre = prompt("Ingrese nombre: ");
    apellido = prompt("Ingrese apellido: ");
    mail = prompt("Ingrese mail: ");
}

alert("Bienvenido al sistema de control de personal");
let alta = prompt("Desea dar de alta una nueva persona ? (si/no): ");
if (alta == "si") {
    cargarPersonal();
    console.log(nombre);
    console.log(apellido);
    console.log(mail);
    const persona1 = new Persona(nombre, apellido, mail);
    console.log(persona1);
    persona1.controlPresentismo();
    alert("Gracias por usar el sistema de control de personal");
} else {
    alert("Gracias por usar el sistema de control de personal");
}

