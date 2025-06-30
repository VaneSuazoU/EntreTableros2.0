# 🌌 EntreTableros 2.0 - Tienda de Juegos de Mesa

**EntreTableros** es una tienda ficticia de juegos de mesa con un diseño galáctico, moderno y amigable. Esta versión 2.0 fue desarrollada con **Angular**, integrando funcionalidades interactivas como registro de usuarios, edición de perfil, categorización dinámica de juegos y una sección social donde los usuarios pueden acumular puntos de participación.

## 🚀 Tecnologías Utilizadas

- Angular 16+
- TypeScript
- Bootstrap 5
- HTML5 & CSS3 (con estilos separados por componente)
- JSON para la carga dinámica de productos
- LocalStorage para persistencia de sesión
- [Angular CLI](https://angular.dev/tools/cli)

## 🧩 Estructura del Proyecto

- `src/app/components`: Componentes modulares como `navbar`, `category`, `login`, `register`, `profile`, `social-board`, etc.
- `assets/data/games.json`: Base de datos simulada con los juegos.
- `styles`: Estilos generales del sitio y estilos específicos por componente.
- `app-routing.module.ts`: Configuración de rutas.

## 🛠️ Instalación y ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/entre-tableros.git
   cd entre-tableros
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

4. Accede a la aplicación desde el navegador:
   ```
   http://localhost:4200/
   ```

## 📦 Funcionalidades principales

- 🧑 Registro e inicio de sesión con validaciones.
- ✍️ Edición de perfil con campos como nombre, dirección y fecha de nacimiento.
- 🎲 Visualización de juegos por categorías: Familiares, Estratégicos, Infantiles y Cartas.
- 🔎 Filtro por categoría y detalles de cada juego.
- 🗨️ Foro social tipo "Tablero Social".
- 🎁 Sistema de puntos y beneficios para usuarios activos.

## 📁 Datos simulados

Los juegos se cargan desde un archivo JSON local ubicado en:

```
public/games/games.json
```

## ✨ Versión 2.0 - ¿Qué hay de nuevo?

Esta es la **versión 2.0** de *EntreTableros*, completamente reestructurada utilizando el framework **Angular**. A diferencia de la primera versión (desarrollada con HTML, CSS y JavaScript puro), esta nueva implementación permite una mayor escalabilidad, reutilización de componentes y navegación fluida gracias al uso de *routing* y *binding* de datos.

### Principales mejoras respecto a la versión 1.0:

- Migración a Angular con estructura basada en componentes.
- Incorporación de Bootstrap para un diseño responsive más robusto.
- Manejo de rutas dinámicas (`category/:id`, `user/:id`, etc.).
- Validaciones de formularios reactivas con feedback visual.
- Módulo de autenticación y gestión de sesión con LocalStorage.
- Nuevo foro social (“Tablero Social”) donde los usuarios participan y ganan puntos.
- Separación de estilos por componente para mejor mantenibilidad.
- Integración de una base de datos simulada vía archivo JSON.