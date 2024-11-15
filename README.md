
# DESARROLLO DE LA PRACTICA 
-Pacheco Infanzon Daniel 
## PRE-REQUISITOS DEL ENTORNO

# Angular CLI instalado en su máquina 
 npm install -g @angular/cli
# API a utilizar:
Utilizaremos la API pública: https://api.escuelajs.co/api/v1/users

## Parte 1: Crear el Proyecto Angular
#ng new consumo-api-DPI
Desde la terminal ingresando en la carpeta del proyecto ejecutaremos el comando para crear un proyceto nuevo de angular
![Captura de pantalla 2024-11-14 093627](https://github.com/user-attachments/assets/afdf4e64-82c1-4756-be56-9acc94fa19eb)
![Captura de pantalla 2024-11-14 093906](https://github.com/user-attachments/assets/03a5540e-bb64-48cb-b962-8f617bf95c77)

## Parte 2: Crear el Servicio para Consumir la API
debemos de crear un servicio para poder consumir la api 
# ng generate service services/user
Abre el archivo src/app/services/user.service.ts y configura el servicio de la
siguiente forma:
![Captura de pantalla 2024-11-14 093627](https://github.com/user-attachments/assets/0a178e7f-19f6-435b-b54c-1717de33473b)

● Pregunta: ¿Qué hace el método getUsers en este servicio? getDatos hace la consulta a la api, por medio de htt.get obtiene la estructura de los datos, por eso se crea user.model.ts 
## Parte 3: Configurar HttpClientModule
Abre src/app/app.ts y agrega HttpClientModule en los imports para que Angular pueda hacer peticiones HTTP.
debes de importar los paquetes 
# import { importProvidersFrom } from '@angular/core';
# import { HttpClientModule } from '@angular/common/http';
y declarar el HtppClientModule dentro del importProvidersForm 

![Captura de pantalla 2024-11-14 094815](https://github.com/user-attachments/assets/6e2590d8-5b51-44af-bdd4-59e5e3945d8b)

## Parte 4: Crear el Componente de la Tabla de Usuarios
# ng generate component components/user-list
creamos el componente con el comando, nos generara 4 archivos, que modificaremos
![Captura de pantalla 2024-11-14 095253](https://github.com/user-attachments/assets/cdf8c1e1-738b-457e-8e31-88c896949af2)
![Captura de pantalla 2024-11-14 095108](https://github.com/user-attachments/assets/8ceddd42-1613-4c52-bb21-aa20037fd166)


Pregunta: ¿Qué función cumple el método ngOnInit en el componente UserListComponent?
El método ngOnInit en el componente ApisComponent cumple la función de inicializar el componente y realizar tareas de configuración una vez que el componente ha sido creado. En este caso específico, ngOnInit se utiliza para realizar una llamada al servicio AlumnosService y obtener los datos de los usuarios cuando el componente se inicializa.


## Parte 5: Crear la Vista para Mostrar los Datos en una Tabla
insertamos un html que contenga los campos necesarios, con una sentencia *ngFor que nos servira para poder iterar en la lista de datos del Api 
si deseamos añadir paginacion es necesario ejecutar el comando de material design 
# ng add @angular/material

![image](https://github.com/user-attachments/assets/02ea9ad0-b1e7-4911-911e-fe1cb521f12b)
importaremos los componentes dentro de nuestro TS del componente base 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AlumnosService } from '../alumnos.service';
import { User } from '../user.model';
 ![image](https://github.com/user-attachments/assets/13707f57-bf81-478f-be5d-b87479ba919c)

Pregunta: ¿Para qué sirve el bucle *ngFor en Angular? Explica cómo se utiliza en este ejemplo. El bucle *ngFor en Angular es una directiva estructural que permite iterar sobre listas o arrays en una plantilla HTML, generando dinámicamente un elemento HTML por cada elemento en la lista. 
 en este caso accede a la api, pues es un archvo con los datos de alumnos, itera sobre esa lista y va guardando los datos dentro de un usuario para poder mostrarlos en la vista 


## Parte 6: Integrar el Componente en la Aplicación


configuraremos el router importando el componente  y creando su ruta 
![image](https://github.com/user-attachments/assets/c0731579-0a47-4ee9-b7b1-67b1d81a84ef)
para poder renderizar y mostrar el componente es necesario poner <app-outlet >  que toma lo que hay en el router y lo muestra
![image](https://github.com/user-attachments/assets/9ac1b654-ac13-47d5-9b26-7053f9451702)


## Parte 7: Ejecutar el Proyecto
dentro de la carpeta con una terminal ocuparemos el comando 
#ng serve 
nos creara un locallhost y podremos acceder a nuestra vista 
![image](https://github.com/user-attachments/assets/d5a96514-a837-4ae9-a6e4-9f1c1a0b151d)

## PREGUNTAS 

1. ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?
nos permite reutilizar código, informacion y datos que alguna persona ya creo, para poder hacer ejemplos, el consumo de apis es aplicable a diversos componentes, facil reutilizacion de codigo, inyección de dependencias y pruebas aisladaas 

2. ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?
que podemos dar mantenimiento mas fácil, es escalable, además permite reutilizar la lógica y no estar definiéndola cada vez que utilicemos un componente


3. ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?
APIs de autenticación para permisos y acceso.
APIs de geolocalización para mostrar mapas.
APIs de datos en tiempo real para notificaciones y actualizaciones.
APIs de servicios externos como pagos y redes sociales.
APIs de análisis de datos para estadísticas y métricas.





# ConsumoApiDPI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




# Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
