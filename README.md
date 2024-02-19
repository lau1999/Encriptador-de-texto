El encriptador de texto es un reto de Alura Latam:
**HTML (index.html):**
- **Head:**
  - Configuración de la página con metaetiquetas.
  - Enlaces a Bootstrap Icons y a la hoja de estilos personalizada.
- **Body:**
  - **Aside:** Barra lateral con el logo.
  - **Main:**
    - Área principal de contenido.
    - Campo de entrada de texto (textarea) para escribir el mensaje.
    - Sección con botones y texto informativo.
  - **Section:**
    - Muestra el resultado con una imagen, título y párrafo.
    - Botón para copiar el resultado.
  - **Div:**
    - Notificación de copiado al portapapeles.
  - **Footer:**
    - Información del desarrollador.

### **JavaScript (script.js):**
- **Funciones:**
  - `encriptarTexto()` y `desencriptarTexto()`: Inicia el procesamiento del texto con patrones específicos.
  - `procesarTexto(patrones)`: Función principal para procesar el texto con patrones.
  - `validarTexto(texto)`: Valida que el texto contenga solo letras minúsculas y espacios.
  - `copiarTexto()`: Copia el resultado al portapapeles.
  - `mostrarNotificacion(mensaje)`: Muestra notificaciones de éxito o error.
  - `mostrarRespuesta(respuesta)`: Muestra el resultado en la interfaz.
  - `mostrarDefault()`: Muestra el estado predeterminado en la interfaz.

### **CSS (style.css):**
- **Estilos Generales:**
  - Reset de márgenes y paddings, modelo de caja.
  - Fondo y fuente del cuerpo de la página.
- **Estilos Específicos:**
  - Diseño responsivo para diferentes tamaños de pantalla.
  - Estilos para el área principal, entrada de texto, botones, resultado, notificación y pie de página.
  - Animación para la notificación.

**Nota Adicional:**
- Este encriptador de texto fue desarrollado como parte de un reto propuesto por Alura Latam. Durante cuatro semanas, los participantes trabajaron en una aplicación para encriptar textos, aplicando los principios de lógica de programación y utilizando JavaScript. El proyecto sigue una metodología ágil de desarrollo y se organiza mediante Trello. ¡Bienvenidas y bienvenidos a este desafío de Alura Latam!
