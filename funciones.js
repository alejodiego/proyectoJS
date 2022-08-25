
//CONTROL DE ACCESO

document.getElementById("botonAcceso").addEventListener("click", acceso);

function acceso() {
    let usuarioDeAcceso = document.getElementById("usuarioDeAcceso").value;
    let passDeAcceso = document.getElementById("passDeAcceso").value;
    localStorage.setItem("usuario", usuarioDeAcceso);
    localStorage.setItem("clave", passDeAcceso);   
}

let usuario = localStorage.getItem("usuario");
let clave = parseInt(localStorage.getItem("clave"));
if (usuario == "admin" && clave == 1234) {
    alert("Bienvenido " + usuario + " al sistema de personal.");
    acceso1 = true;
    document.getElementById("acceso").classList.add("ocultar");
    document.getElementById("sistemaPrincipal").classList.remove("ocultar");
    document.getElementById("sistemaPrincipal").classList.add("mostrar");
} else {
    alert("Usuario o contraseña no valida.");
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

document.getElementById("btnCerrarSesion").addEventListener("click", cerrarSesion);

function cerrarSesion(){
    localStorage.clear();
    window.location.reload();
}





