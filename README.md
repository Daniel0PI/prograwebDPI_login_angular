# DESARROLLO DE LA PRACTICA 
-Pacheco Infanzon Daniel 
## PRE-REQUISITOS DEL ENTORNO

# Angular CLI instalado en su máquina 
 npm install -g @angular/cli
 ![image](https://github.com/user-attachments/assets/ef3c7698-362a-4bfe-a986-c5b9e23d04ae)

# API a utilizar:
Utilizaremos la API pública: https://api.escuelajs.co/api/v1/users
![Captura de pantalla 2024-11-14 100412](https://github.com/user-attachments/assets/ded78abc-eda5-4dd3-a094-b8804a076c69)


## Parte 1: Crear el Proyecto Angular
#ng new login-api-DPI
Desde la terminal ingresando en la carpeta del proyecto ejecutaremos el comando para crear un proyceto nuevo de angular


## Parte 2: Crear el Servicio para Consumir la API
debemos de crear un servicio para poder consumir la api 
# ng generate service services/user
Abre el archivo src/app/services/user.service.ts y configura el servicio de la
siguiente forma:


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

## parte 2 creamos el servicio
debemos de crear un servicio para poder consumir la api 
# ng generate service services/user
Abre el archivo src/app/services/user.service.ts y configura el servicio de la
siguiente forma:

![image](https://github.com/user-attachments/assets/83821295-cc5f-4f2e-9901-dbf1876dba4c)
para facilitarnos el trabajo podemos crear un modelo de alumno que contenga cada uno de los campos de los registros antes mencionados dentro del api 
![image](https://github.com/user-attachments/assets/11cf1d79-e8ac-4dc7-ab43-04bf4a6d4983)

## parte 3 creamos el componente de login
ng generate componet "nombre del componente "
modificamos el html para poder poner la estructura 
 
![image](https://github.com/user-attachments/assets/8a48e0e8-b0bc-4b91-8eda-7e2b2f8f0115)

declaramos un metodo que al dar click al boton nos mande una funcion, que sera recibida dentro de la configuracion, obtenemos los datos de los componentes, se manda a llamar, se crea el servicio y lo importamos

![image](https://github.com/user-attachments/assets/743822b0-65da-4980-83e9-dddf64103a00)
de igual manera se importa los componentes de material design 
![image](https://github.com/user-attachments/assets/060a7f4e-8eed-4552-8cd3-e93213927eb9)

esta validacion nos permite recorrer la api, validando cada uno de los alumnos y viendo si hacen match alguno de los registros, de ser correcto nos va a redireccionar a la vita principal 
![image](https://github.com/user-attachments/assets/8dc9f7fa-821d-4873-ba0f-9829e3f6b2cc)

## parte 4 
configuramos el router para poder renderizar los componentes, indicamos las ruta a renderizar, para esto antes tenemos  que importar los componentes 

 ![image](https://github.com/user-attachments/assets/09e60dcb-399e-409e-af2d-cc3a19b58cc3)
con el comnado <router-outle> podemos indicar que renderice todo lo que hay dentro de nuestro router
![image](https://github.com/user-attachments/assets/8e5324fe-d4d3-43c1-ac52-336ba6a01036)
 ## parte 5 Ejecucion 

 para poder ver nuestra aplicacion deberemos aplicar el comando 
 # ng serve 
 ![image](https://github.com/user-attachments/assets/b213542e-b24e-47a6-a07a-163cf7dca5fb)


## pagina de login 
![image](https://github.com/user-attachments/assets/ae46d825-8392-43da-89e2-51d9d158177b)
 # inicio incorrecto 
![image](https://github.com/user-attachments/assets/d31a1525-72c6-46dc-8846-ec0cb12d2a88)

 # inicio correcto
 
 ![image](https://github.com/user-attachments/assets/23c67e03-4a7e-4843-b3f2-ee8360fadf2c)

# redireccion a la pagina de inicio 
![image](https://github.com/user-attachments/assets/d20896ce-eea2-43a2-9f61-ab40e3eec0b3)

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
