# Codificador de Texto - Desafío de Alura Latam

Este proyecto es una aplicación web creada para encriptar y desencriptar textos. Forma parte de un desafío propuesto por Alura Latam, realizado durante cuatro semanas para ayudar a los participantes a mejorar sus habilidades en programación web utilizando JavaScript. A continuación, te explico cómo está estructurado el proyecto:

## Estructura del Proyecto

### HTML (index.html)

- **Cabeza:**
  - Configuración básica de la página con etiquetas especiales que permiten que cargue más rápido y sea más fácil de encontrar en los motores de búsqueda.
  - Enlaces a Bootstrap Icons para los íconos de la página y a una hoja de estilos personalizada para el diseño.

- **Cuerpo:**
  - **Barra Lateral:** A la izquierda, hay una barra con el logo de la aplicación.
  - **Área Principal:** Incluye:
    - Un campo de texto donde puedes escribir el mensaje que deseas encriptar o desencriptar.
    - Botones para realizar las acciones de encriptar y desencriptar, junto con información sobre cómo usar la aplicación.
    - Una sección para mostrar el resultado con una imagen, un título y un párrafo descriptivo.
    - Un botón para copiar el resultado al portapapeles.
    - Una notificación que te avisa cuando el texto ha sido copiado con éxito.

- **Pie de Página:**
  - Información sobre el desarrollador y créditos del proyecto.

### JavaScript (script.js)

- **Funciones Principales:**
  - `encriptarTexto()` y `desencriptarTexto()`: Funciones para convertir el texto usando patrones específicos.
  - `procesarTexto(patrones)`: Función que maneja cómo se procesa el texto.
  - `validarTexto(texto)`: Verifica que el texto contenga solo letras minúsculas y espacios.
  - `copiarTexto()`: Copia el texto resultante al portapapeles.
  - `mostrarNotificacion(mensaje)`: Muestra mensajes de éxito o error.
  - `mostrarRespuesta(respuesta)`: Muestra el texto procesado en la pantalla.
  - `mostrarDefault()`: Restaura el estado original de la aplicación.

### CSS (estilo.css)

- **Estilos Generales:**
  - Ajustes básicos para márgenes y espaciado que aseguran un diseño uniforme.
  - Estilo del fondo y la fuente de la página.

- **Estilos Específicos:**
  - Diseño adaptable a diferentes tamaños de pantalla para que la aplicación se vea bien en móviles y computadoras.
  - Estilos para el campo de texto, los botones, la sección de resultados y la notificación.
  - Animación para que la notificación de copiado sea más visible.

## Nota adicional

Este codificador de texto es parte del reto de Alura Latam, diseñado para practicar encriptación de textos y manejo de eventos en JavaScript, aplicando principios de lógica de programación. El proyecto sigue una metodología ágil de desarrollo y se organiza mediante Trello.

[Ver el proyecto en línea](https://lau1999.github.io/Encriptador-de-texto/)

![Encriptador](https://github.com/user-attachments/assets/1751069a-b445-4dee-b375-2442b599b5c0)
