# 🌌 EntreTableros 2.0 - Tienda de Juegos de Mesa

**EntreTableros** es una tienda ficticia de juegos de mesa con un diseño galáctico, moderno y amigable.  
Esta versión 2.0 fue desarrollada con **Angular**, integrando funcionalidades interactivas como registro de usuarios, edición de perfil, categorización dinámica de juegos, y una sección social donde los usuarios pueden acumular puntos de participación.

---

## 🚀 Tecnologías Utilizadas

- Angular 16+
- TypeScript
- Bootstrap 5
- HTML5 & CSS3 (estilos separados por componente)
- JSON publicado en GitHub Pages como API simulada
- LocalStorage para gestión de sesión
- Docker para contenerización
- Jasmine & Karma para pruebas unitarias

---

## 🧩 Estructura del Proyecto

- `src/app/components`: Componentes como `navbar`, `categoria`, `login`, `register`, `perfil`, `foro`, etc.
- `public/games.json`: Fuente de datos simulada (cargada desde GitHub Pages)
- `styles.css`: Estilos generales del sitio
- `Dockerfile`: Script para construir la app y ejecutarla vía NGINX
- `app.routes.ts`: Configuración de rutas con protección por roles

---

## 📦 Funcionalidades principales

- 🧑 Registro e inicio de sesión con validaciones básicas
- 👤 Edición de perfil con campos personales
- 🎲 Visualización de juegos por categorías: Familiares, Estratégicos, Infantiles y Party Games
- ✏️ Simulación de creación y edición de juegos para usuarios con rol `admin`
- 🗨️ Foro social con sistema de participación (puntos)
- 🔐 Control de acceso y rutas protegidas
- 🔍 Navegación dinámica con parámetros en rutas

---

## 📁 Datos simulados (API)

Los juegos se obtienen desde un archivo JSON publicado como API en GitHub Pages:  
🔗 [https://vanesuazou.github.io/EntreTableros_API/data.json](https://vanesuazou.github.io/EntreTableros_API/data.json)

---

## 🧪 Pruebas

Se implementó una prueba funcional real para el componente `LoginComponent`, validando el flujo de autenticación con credenciales válidas y redirección.  
Las pruebas se ejecutan con:

```bash
ng test
```

---

## 🐳 Dockerización

La app puede ejecutarse en un contenedor Docker con NGINX como servidor web.

### 📄 Dockerfile

```Dockerfile
# Etapa 1: Build Angular
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servidor NGINX
FROM nginx:alpine
COPY --from=build /app/dist/entre-tableros /usr/share/nginx/html
```

### ▶️ Ejecución

```bash
docker build -t entretableros-app .
docker run -d -p 8080:80 entretableros-app
```

Accede desde:  
👉 `http://localhost:8080`

---

## ✨ ¿Qué hay de nuevo en la versión 2.0?

- 🔁 Migración completa a Angular con estructura modular
- ⚙️ Manejo de rutas dinámicas y componentes reutilizables
- 💾 Simulación de base de datos externa mediante API en GitHub Pages
- 🧪 Inclusión de pruebas con Jasmine
- 🐳 Dockerización para facilitar despliegue
- 🎨 Mejoras visuales con Bootstrap y estilo moderno
- 🚫 Funciones de edición restringidas a usuarios con rol `admin`

---

## 📎 Recursos del proyecto

- 🔗 [Repositorio GitHub App Angular](https://github.com/vanesuazou/EntreTableros)
- 🔗 [API en GitHub Pages](https://vanesuazou.github.io/EntreTableros_API/)
- 🎬 Video demostrativo en Kaltura (agregar el link cuando lo tengas)
- 📌 [Tablero Trello](https://trello.com/b/tu-tablero) (agregar tu link)

---

## 💡 Notas finales

Este proyecto es una simulación educativa desarrollada para la asignatura **Desarrollo Full Stack II**, orientada al consumo de API REST, gestión de componentes, y despliegue en contenedores.  
No incluye backend real, por lo que las acciones como editar o agregar juegos no persisten.

---
