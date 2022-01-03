# Aprende Vue 3 desde cero + inertia
+ [URL del curso en Coders Free](https://codersfree.com/cursos/aprende-vue-3-desde-cero-mas-inertia)
+ [URL del repositorio en GitHub](https://github.com/petrix12/inertia2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **inertia2022**.
    + **Description**: Proyecto para seguir el curso de "Aprende Vue 3 desde cero + inertia", creado por Víctor Arana Flores en Coders Free.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/inertia2022.git
    + $ git push -u origin main


## Repaso javascript

### Introducción
+ **Contenido**: sobre la necesidad de dominar JavaScript.

### Diferencia entre var, let y const
1. Crear carpeta **repaso** para empezar un proyecto.
2. Crear documento **repaso\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Repaso</title>
    </head>
    <body>
        <script src="app.js"></script>
    </body>
    </html>
    ```
3. Crear archivo **repaso\app.js**:
    ```js
    var nombre1 = 'Soluciones++'
    let nombre2 = 'Soluciones++'
    const g = 9.81

    if(true){
        var nombre1 = 'Pedro'
        let nombre2 = 'Pedro'

        console.log('nombre1: ' + nombre1)
        console.log('nombre2: ' + nombre2)
    }

    console.log('nombre1: ' + nombre1)
    console.log('nombre2: ' + nombre2)
    console.log('g: ' + g)
    ```

### Funciones flecha
1. Modificar **repaso\app.js**:
    ```js
    // Función tradicional
    function funcion1(){
        console.log('Llamada función 1')
    }

    // Función flecha
    const funcion2 = () => {
        console.log('Llamada función 2')
    }

    // Otra función flecha
    const funcion3 = () => {
        return 'Llamada función 3'
    }

    // Otra forma de escribir la función flecha anterior
    const funcion4 = () =>  'Llamada función 4'

    funcion1()
    funcion2()

    let valor3 = funcion3()
    console.log(valor3)

    let valor4 = funcion4()
    console.log(valor4)
    ```

### Template literales
1. Modificar **repaso\app.js**:
    ```js
    let nombre = 'Leticia'
    let apellido = 'Rodríguez'
    let edad = 44

    let texto1 = 'Hola, mi nombre es ' + nombre + ', mi apellido es ' + apellido + ', y mi edad es ' + edad + '.'
    let texto2 = `Hola, mi nombre es ${nombre}, mi apellido es ${apellido}, y mi edad es ${edad}.`

    console.log(texto1)
    console.log(texto2)
    ```

### Objetos literales
1. Modificar **repaso\app.js**:
    ```js
    let persona = {
        nombre: 'Lucia',
        apellido: 'Robles',
        edad: 70,
        mascotas: ['Perro', 'Gato', 'Conejo']
    }

    let texto = `Hola, mi nombre es ${persona.nombre}, mi apellido es ${persona.apellido}, y mi edad es ${persona.edad}.`

    persona.id = 11639889
    persona.nombre = 'Rosa'
    console.log(texto)
    console.log(persona)
    ```

### Destructuración de objetos
1. Modificar **repaso\app.js**:
    ```js
    let persona = {
        nombre: 'Lucia',
        apellido: 'Robles',
        edad: 70,
        mascotas: ['Perro', 'Gato', 'Conejo']
    }

    const { nombre, apellido, edad, mascontas } = persona

    console.log(nombre)
    ```

### Promesas Javascript
1. Modificar **repaso\app.js**:
    ```js
    let data = [
        {
            id: 1,
            name: 'Carlos',
            age: 23
        },
        {
            id: 2,
            name: 'Ramón',
            age: 45
        },
        {
            id: 3,
            name: 'Javier',
            age: 18
        },
    ]

    // Función que simula que obtiene datos de una API
    function getData(){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(true){
                    resolve(data)
                }else{
                    reject('Error: sin respuesta')
                }
            }, 2000)
        })
    }

    let response = getData()

    response.then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })

    console.log('Continua el programa')
    ```

### Async await
1. Modificar **repaso\app.js**:
    ```js
    let data = [
        {
            id: 1,
            name: 'Carlos',
            age: 23
        },
        {
            id: 2,
            name: 'Ramón',
            age: 45
        },
        {
            id: 3,
            name: 'Javier',
            age: 18
        },
    ]

    // Función que simula que obtiene datos de una API
    function getData(){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(false){
                    resolve(data)
                }else{
                    reject('Error: sin respuesta')
                }
            }, 2000)
        })
    }

    // Funciòn asincrona
    async function fetchData(){
        try {
            let response = await getData()
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    fetchData()
    console.log('Continua el programa')
    ```

### Peticiones con fetch
+ https://jsonplaceholder.typicode.com
1. Modificar **repaso\app.js**:
    ```js
    /* fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => {
            response.json().then(
                (data) => {
                    console.log(data)
                }
            ).catch()
        }
    ).catch() */

    // Otra forma más elegante de escribir la función anterior
    fetch('https://jsonplaceholder.typicode.com/users').then(
        response => response.json()
    ).then(
        data => console.log(data)
    ).catch()
    ```

## Introducción Vue

### Instalación de vue
+ https://v3.vuejs.org/guide/installation.html
1. Crear carpeta **vue** para empezar un proyecto.
2. Crear documento **vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Curso de Vue Js</title>
    </head>
    <body>
        <script src="https://unpkg.com/vue@next"></script>
        <script>
            console.log(Vue)
        </script>
    </body>
    </html>
    ```

### Interpolación



    ```js
    ```

Eventos y métodos

v-model

v-for

v-if, v-else, v-if-else y v-show

v-bind

Propiedades computadas
Componentes

Introducción a componentes

Pasar datos a componentes (props)

Emitir eventos

Emitir eventos II

Slots
Vue CLI

Instalar Vue CLI

Analizar proyecto

Crear nuestro primer componente
Vue router

Instalar Vue Router

Analizar el funcionamiento de Vue Router

Crear nueva ruta

Rutas con parametros

Pasar dos parametros

Ruta 404 Not Found

Sintaxis de coincidencia de rutas

Rutas con parámetros opcionales

Rutas anidadas

Rutas con nombre

Redirecciones

Recibir parametros de la url dentro de props

Diferentes modos history

Ciclos de vida
VueX

¿Qué es VueX?

Instalar VueX

States

Getters

Mutations I

Mutations II

Acciones I

Acciones II

Modulos