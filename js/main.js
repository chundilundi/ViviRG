const espacio = " ";
let nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");

if (nombreingresado) {
    alert("¡Hola," + espacio + nombreingresado + "! Te damos la bienvenida a VivíRG. Aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
} else {
    alert("No ingresaste un nombre, por favor volvé a intentarlo.");
    nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
    if (nombreingresado) {
        alert("¡Hola," + espacio + nombreingresado + "! Te damos la bienvenida a VivíRG. Aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
    } else {
        alert("No ingresaste un nombre, por favor volvé a intentarlo.");
        nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
        if (nombreingresado) {
            alert("¡Hola," + espacio + nombreingresado + "! Te damos la bienvenida a VivíRG. Aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
        } else {
            alert("No ingresaste un nombre, por favor volvé a intentarlo.");
            nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
        }
    }
}

// Acá suponemos que va un ciclo y no supimos aplicarlos, por eso está planteado asi.
// De esta forma hay sólo 4 intentos para ingresar el nombre, pero te deja ingresar igual luego del 4to intento.
// La idea sería que no te deje ingresar a la página hasta que ingreses un nombre. 

