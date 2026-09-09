# Proyecto JS Moderno

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-00C853?style=for-the-badge)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-FF9800?style=for-the-badge)

Proyecto web personal hecho con HTML, CSS y JavaScript, con varias páginas y funcionalidades interactivas. Está pensado como práctica de desarrollo frontend para aprender estructura, diseño y lógica con JavaScript.

## ¿Qué incluye?

- Menú de navegación entre páginas
- Slider de imágenes en la home
- Sección de artículos dinámicos
- Página de "Sobre mí" con acordeón
- Formulario de contacto con validación
- Reloj en tiempo real
- Login con guardado en localStorage
- Botón para volver arriba
- Diseño responsive

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript
- localStorage
- JustValidate

## Estructura del proyecto

```text
proyecto/
├── index.html
├── sobre-mi.html
├── contacto.html
├── reloj.html
├── style.css
├── scripts/
│   ├── main.js
│   ├── slider.js
│   ├── articles.js
│   ├── login.js
│   ├── contacto.js
│   └── reloj.js
└── README.md
```

## Páginas principales

- `index.html`: página principal con slider y contenido
- `sobre-mi.html`: sección informativa con desplegables
- `contacto.html`: formulario de contacto validado
- `reloj.html`: reloj dinámico con hora actual

## Funcionalidades

### Slider
Se usa JavaScript para cambiar imágenes con botones de anterior y siguiente.

### Artículos dinámicos
Los posts se generan desde un array con objetos, y se insertan en el DOM mediante JavaScript.

### Login
El formulario guarda el usuario en localStorage y muestra su nombre al iniciar sesión.

### Contacto
Se valida que los campos no estén vacíos y que el email sea correcto.

### Reloj
La hora se actualiza cada segundo usando `setInterval`.

## Cómo ejecutarlo
Abre directamente `index.html` en el navegador.

### Versión publicada

También está disponible online en:

```bash
https://teost09.github.io/proyecto_js/
```

## Aprendizajes del proyecto

Este proyecto sirve para practicar:

- maquetación con HTML
- estilos con CSS
- manipulación del DOM con JavaScript
- arrays y objetos
- eventos y validación
- uso de localStorage
- diseño responsive

## Mejoras futuras

- más páginas o secciones
- mejor diseño visual
- modo oscuro
- formulario con backend real
- autenticación más completa
- carga de datos desde JSON o API

## Creditos

Proyecto personal realizado como práctica de frontend con JavaScript moderno.
