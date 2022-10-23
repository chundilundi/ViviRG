const espacio = " ";
let nombreingresado = prompt("Por favor ingresá tu nombre:");

class Operador{
    constructor (nombre, bienvenida){
        this.nombre = nombre;
        this.bienvenida = bienvenida;
    }
    hablar(){
        alert("¡Hola soy tu " + this.nombre + espacio + this.bienvenida);
    }
}

const persona1 = new Operador("operardorx de Viví RG!","te doy la bienvenida a VivíRG.");
persona1.hablar();

if (nombreingresado) {
    alert(nombreingresado + "," + espacio + "aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
} else {
    alert("No ingresaste un nombre, por favor volvé a intentarlo.");
    nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
    if (nombreingresado) {
        alert(nombreingresado + "," + espacio + "aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
    } else {
        alert("No ingresaste un nombre, por favor volvé a intentarlo.");
        nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
        if (nombreingresado) {
            alert(nombreingresado + "," + espacio + "aquí vas a poder consultar sobre todo lo que necesites para empezar tu nueva vida en Rio Grande. Esperamos que te sea de utilidad.")
        } else {
            alert("No ingresaste un nombre, por favor volvé a intentarlo.");
            nombreingresado = prompt("¡Bienvenidx a VivíRG! por favor ingresá tu nombre:");
        }
    }
}

//Hola profes, pudimos implementar objetos, funciones, propiedades, métodos y clases 
//pero a la hora de implementar invocación de objeto cuando el usuario realiza una acción y arrays, no supimos resolverlo.

