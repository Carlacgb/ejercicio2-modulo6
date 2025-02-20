# Ejercicio práctico 1 - Módulo 6
## Implementación Inicial de PWA en la Web del Hospital

### Descripción: 
Integración de características básicas de una PWA (Progressive Web Application) en el proyecto de la web del hospital. El objetivo es configurar el archivo de manifiesto y registrar un Service Worker para mejorar la experiencia del usuario, haciendo la aplicación instalable y accesible offline.

### 1. Creación del Manifiesto

Se creó un archivo de manifiesto en la carpeta "public" con el nombre de "manifest.json". Dentro se incluyen los siguientes elementos:

- Nombre de la aplicación.
- Iconos en varias resoluciones para diferentes dispositivos.
- Color de fondo y color del tema.
- Modo de pantalla (fullscreen o standalone).


### 2. Registro de un Service Worker Básico
Se crea el archivo service worker en la carpeta public "sw.js" se incluyen los componentes con los archivos principales.

### 3. Implementación de Estrategias de Almacenamiento en Caché
Se implementa el Stale-While-Revalidate en el archivo sw.js

### 4. Pruebas de Funcionamiento Offline y Validación con Lighthouse
Se realiza pruebas de funcionamiento en modo offline y validación en Lighthouse
- Performance 56
- Accesibilidad 98
- Buenas prácticas 96 
- SEO 83


