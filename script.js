// Obtener referencias a los elementos del DOM
const elementosDOM = {
    textarea: document.getElementById("textarea"),
    imgResultado: document.getElementById("imgResultado"),
    h3Resultado: document.getElementById("h3Resultado"),
    pResultado: document.getElementById("pResultado"),
    copiarResultado: document.getElementById("copiarResultado"),
    notificacion: document.getElementById("notificacion"),
    notificacionTexto: document.getElementById("notificacionTexto")
};

let textoProcesado = "";

// Función para encriptar el texto
function encriptarTexto() {
    procesarTexto({ 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' });
}

// Función para desencriptar el texto
function desencriptarTexto() {
    procesarTexto({ 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' });
}

// Función principal para procesar el texto con patrones específicos
function procesarTexto(patrones) {
    const texto = elementosDOM.textarea.value;
    if (!texto) {
        mostrarDefault();
        return;
    }

    // Crear una expresión regular dinámica con los patrones
    const regex = new RegExp(Object.keys(patrones).join("|"), "g");

    // Aplicar los patrones al texto y mostrar la respuesta
    textoProcesado = texto.replace(regex, match => patrones[match]);
    mostrarRespuesta(textoProcesado);
}

// Función para validar caracteres permitidos
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para copiar el texto al portapapeles
const copiarTexto = async () => {
    try {
        await navigator.clipboard.writeText(textoProcesado);
        mostrarNotificacion("Copiado al portapapeles");
    } catch (err) {
        console.log("Error al copiar");
    }
}

// Función para mostrar notificación de error o éxito
function mostrarNotificacion(mensaje) {
    elementosDOM.notificacionTexto.innerHTML = mensaje;
    elementosDOM.notificacion.classList.remove("oculto");
    setTimeout(() => {
        elementosDOM.notificacion.classList.add("oculto");
    }, 2000);
}

// Función para mostrar el resultado en la interfaz
function mostrarRespuesta(respuesta) {
    elementosDOM.imgResultado.classList.add("oculto");
    elementosDOM.h3Resultado.classList.add("oculto");
    elementosDOM.copiarResultado.classList.remove("oculto");
    elementosDOM.pResultado.classList.add("respuesta");
    elementosDOM.pResultado.innerHTML = respuesta;
}

// Función para mostrar el estado predeterminado en la interfaz
function mostrarDefault() {
    elementosDOM.imgResultado.classList.remove("oculto");
    elementosDOM.h3Resultado.classList.remove("oculto");
    elementosDOM.copiarResultado.classList.add("oculto");
    elementosDOM.pResultado.classList.remove("respuesta");
    elementosDOM.pResultado.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
}

// Agregar evento de cambio en el textarea
elementosDOM.textarea.addEventListener("input", function () {
    if (elementosDOM.textarea.value === "") {
        mostrarDefault();
    } else {
        elementosDOM.imgResultado.classList.add("oculto");
        elementosDOM.h3Resultado.classList.add("oculto");
        elementosDOM.copiarResultado.classList.add("oculto");
        elementosDOM.pResultado.classList.remove("respuesta");
        elementosDOM.pResultado.innerHTML = "";
    }
    elementosDOM.notificacion.classList.add("oculto");
    elementosDOM.notificacionTexto.innerHTML = "";
});
