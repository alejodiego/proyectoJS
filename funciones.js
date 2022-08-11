
//CONTROL DE ACCESO
document.getElementById("sistemaPrincipal").style.display = "none";

let boton = document.getElementById("botonAcceso");
boton.addEventListener("click", acceso);


function acceso() {
    let usuarioDeAcceso = document.getElementById("usuarioDeAcceso").value;
    let passDeAcceso = document.getElementById("passDeAcceso").value;

    if (usuarioDeAcceso == "admin" && passDeAcceso == 1234) {
        alert("Bienvenido " + usuarioDeAcceso + " al sistema de personal.");
        acceso1 = true;
        document.getElementById("acceso").style.display = "none";
        document.getElementById("sistemaPrincipal").style.display = "flex";
    } else {
        alert("Usuario o contraseña no valida.");
    }
}


//FIN CONTROL ACCESO


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

function alta() {
    let alta = prompt("Desea dar de alta una nueva persona ? (si/no): ");
    while (alta == "si") {
        cargarPersonal();
        const persona1 = new Persona(nombre, apellido, mail);
        personal.push(persona1);
        alta = prompt("Desea dar de alta una nueva persona ? (si/no): ");
    }
}

function baja() {
    let baja = prompt("Desea dar de baja una persona ? (si/no): ");
    while (baja == "si") {
        let eliminar = prompt("Ingrese el nombre del empleado a eliminar: ")
        for (i = 0; i <= personal.length; i++) {
            if (personal[i].nombre == eliminar) {
                alert("Persona a eliminar: " + personal[i].nombre);
                personal.splice(i, 1);
                break;
            }
        }
        baja = prompt("Desea seguir eliminando personal si/no: ")
    }
}
function mostrarPersonas() {
    let mostrarPersonal = [];
    for (Persona of personal) {
        mostrarPersonal.push(Persona.nombre);
    }
    alert(mostrarPersonal.join("*"));
}





