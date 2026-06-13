# Angular Routing Avanzado y LocalStorage

## Descripción

Este proyecto fue desarrollado como la Tarea N°4 de Angular. La aplicación implementa navegación modular utilizando Routing, Lazy Loading y almacenamiento de información mediante LocalStorage.

La aplicación permite navegar entre diferentes secciones, visualizar una lista de usuarios y productos, acceder al detalle de un producto mediante rutas dinámicas y recordar la última ruta visitada para redirigir automáticamente al usuario cuando vuelve a ingresar.

## Funcionalidades

* Routing principal con Angular Router.
* Módulos independientes:

  * UsuariosModule
  * ProductosModule
* Lazy Loading para optimizar la carga de módulos.
* Navegación mediante routerLink.
* Uso de router-outlet para renderizar las vistas.
* Ruta dinámica para detalle de productos.
* Persistencia de la última ruta visitada utilizando LocalStorage.
* Redirección automática a la última sección visitada.

## Estructura de Rutas

| Ruta           | Descripción          |
| -------------- | -------------------- |
| /              | Página principal     |
| /usuarios      | Listado de usuarios  |
| /productos     | Listado de productos |
| /productos/:id | Detalle de producto  |

## Tecnologías Utilizadas

* Angular
* TypeScript
* HTML
* CSS
* Angular Router
* LocalStorage

## Instalación y Ejecución

### Clonar el repositorio

```bash
git clone https://github.com/PaolaGiannattasio/Tarea4
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
ng serve
```

Luego abrir en el navegador:

```text
http://localhost:4200
```

## Despliegue

Para desplegar la aplicación en GitHub Pages utilizando la configuración preparada para Git Bash, ejecuta:

```bash
npm run deploy
```

Aplicación publicada en:

GitHub Pages: https://paolagiannattasio.github.io/Tarea4/

## Capturas de Pantalla

Se incluyen capturas mostrando:

* Página principal.
* Módulo Usuarios.
* Módulo Productos.
* Detalle de producto mediante ruta dinámica.
* Redirección automática utilizando LocalStorage.

## Datos de la Entrega

**Nombre:** Paola Giannattasio

**Unidad:** Unidad 4 - Angular Routing Avanzado

## Bibliografía

* Documentación oficial de Angular: https://angular.dev
* Angular Router Guide: https://angular.dev/guide/routing
* MDN Web Docs - LocalStorage: https://developer.mozilla.org
