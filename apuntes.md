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
1. Modificar documento **vue\index.html**:
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
        <div id="app">
            {{ message }}
            <hr>
            {{ counter }}
            <hr>
            {{ saludo + nombre + ' / ' + 3*7 }}
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        message: 'HSoluciones++',
                        counter: 0,
                        saludo: "Hola, mi nombre es: ",
                        nombre: 'Petrix'
                    }
                },
                mounted(){
                    setInterval(() => {
                        this.counter++
                    }, 1000)
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```

### Eventos y métodos
1. Modificar documento **vue\index.html**:
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
        <div id="app">
            <button v-on:click="decrement()">
                -
            </button>
            {{ counter }}
            <button v-on:click="increment()">
                +
            </button>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        counter: 0
                    }
                },
                methods: {
                    decrement(){
                        this.counter--
                    },
                    increment(){
                        this.counter++
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```

### v-model
1. Modificar documento **vue\index.html**:
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
        <div id="app">
            <form action="" v-on:submit.prevent="addPais()">
                <input type="text" v-model="name">
                <BUtton>Agregar</BUtton>
            </form>
            <hr>
            País: {{ name }}
            <hr>
            {{ paises }}
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        name: "",
                        paises: ['Perú', 'Bolivia']
                    }
                },
                methods: {
                    addPais() {
                        this.paises.push(this.name)
                        this.name = ""
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```

### v-for
1. Modificar documento **vue\index.html**:
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
        <div id="app">
            <form action="" v-on:submit.prevent="addPais()">
                <input type="text" v-model="name" placeholder="País...">
                <input type="text" v-model="capital" placeholder="Capital...">
                <BUtton>Agregar</BUtton>
            </form>
            <hr>
            País / Capital: {{ name + (name ? ' / ' : ' ') + capital }}
            <hr>
            <ul>
                <template v-for="(pais, index) in paises" >
                    <li :key="pais.name">
                        {{ index + 1 }} - {{ pais.name }} / {{ pais.capital }}
                    </li>
                </template>
            </ul>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        name: "",
                        capital: "",
                        paises: [
                            {
                                name: 'Perú',
                                capital: 'Lima'
                            },
                            {
                                name: 'Venezuela',
                                capital: 'Caracas'
                            }
                        ]
                    }
                },
                methods: {
                    addPais() {
                        this.paises.push({
                            name: this.name,
                            capital: this.capital
                        })
                        this.name = ""
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```

### v-if, v-else, v-if-else y v-show
1. Modificar documento **vue\index.html**:
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
        <div id="app">
            <h1 v-if="active">HSoluciones++</h1>
            <h1 v-else="active">HS++ :(</h1>

            <hr>

            <div v-if="type == 'A'">A</div>
            <div v-else-if="type == 'B'">B</div>
            <div v-else-if="type == 'C'">C</div>
            <div v-else>No es ni A, ni B ni C</div>

            <hr>

            <template v-if="active">
                <h2>HSoluciones++</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias corporis ex quia recusandae qui ab rem eos! Aliquam eveniet ipsa vitae omnis sit quibusdam fugit dolorum adipisci nesciunt minima.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam incidunt illo aperiam debitis harum eos alias! Voluptatibus laboriosam obcaecati quia vero ipsum amet illum provident necessitatibus accusamus ipsa! Quos, corporis.</p>
            </template>

            <hr>

            <h2>Petrix</h2>
            <p v-if="active">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis incidunt molestiae voluptates aliquid impedit! Unde consectetur necessitatibus blanditiis voluptates totam cupiditate itaque iste incidunt reprehenderit cum consequuntur, perferendis debitis tenetur!</p>
            <p v-show="active">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae deserunt tempore rerum corrupti eius dolorum consequuntur qui, provident accusantium sapiente illo, dolor fugiat, et reiciendis ex. Reprehenderit, doloribus voluptas.</p>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        active: true,
                        type: 'X'
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```

### v-bind
1. Modificar documento **vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Curso de Vue Js</title>

        <style>
            .text-black{
                color: black;
            }
            .text-red{
                color: red;
            }
            .text-green{
                color: green;
            }
            .text-blue{
                color: blue;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <button @click="color = 'red'">
                Rojo
            </button>
            <button @click="color = 'green'">
                Verde
            </button>
            <button @click="color = 'blue'">
                Azul
            </button>

            <p v-bind:class=" 'text-' + color ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste nam rem repellat possimus enim consequatur illo quaerat reprehenderit, autem ullam maxime ea? Quo, molestiae eligendi fugiat eveniet esse suscipit.</p>
            {{ 'text-' + color }}

            <hr>

            <button @click="active = !active">
                <span v-if="active">Desactivar</span>
                <span v-else>Activar</span>
            </button>

            <p :class="active ? 'text-blue' : 'text-red'">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cum quibusdam velit fuga consectetur perspiciatis numquam, consequuntur repudiandae ullam, obcaecati hic tenetur, adipisci distinctio necessitatibus deserunt. Totam vel repellat nobis.</p>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        color: 'black',
                        active: true
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```
2. Equivalencias:
    + **v-on:** se puede reemplazar por **@**
    + **v-bind:** se puede reemplazar por **:**.

### Propiedades computadas
1. Modificar documento **vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Curso de Vue Js</title>

        <style>
            .text-black{
                color: black;
            }
            .text-red{
                color: red;
            }
            .text-green{
                color: green;
            }
            .text-blue{
                color: blue;
            }
            .mt-16{
                margin-top: 4rem;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <button @click="color = 'red'">
                Rojo
            </button>
            <button @click="color = 'green'">
                Verde
            </button>
            <button @click="color = 'blue'">
                Azul
            </button>

            <p v-bind:class=" 'text-' + color ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste nam rem repellat possimus enim consequatur illo quaerat reprehenderit, autem ullam maxime ea? Quo, molestiae eligendi fugiat eveniet esse suscipit.</p>
            {{ 'text-' + color }}

            <hr>

            <button @click="active = !active">
                <span v-if="active">Desactivar</span>
                <span v-else>Activar</span>
            </button>

            <p :class="colorClassComputed" class="mt-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cum quibusdam velit fuga consectetur perspiciatis numquam, consequuntur repudiandae ullam, obcaecati hic tenetur, adipisci distinctio necessitatibus deserunt. Totam vel repellat nobis.</p>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script>
            Vue.createApp({
                data(){
                    return {
                        color: 'black',
                        active: true
                    }
                },
                computed: {
                    colorClassComputed(){
                        return this.active ? 'text-blue' : 'text-red'
                    }
                }
            }).mount('#app')
        </script>
    </body>
    </html>
    ```


## Componentes

### Introducción a componentes
1. Crear **vue\componentes.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Componentes</title>
    </head>
    <body>
        <div id="app">
            {{ message }}
            <hr>
            <button-counter></button-counter>
            <button-counter></button-counter>
            <button-counter></button-counter>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="main.js"></script>
        <script>
            app.mount('#app')
        </script>
    </body>
    </html>
    ```
2. Crear **vue\main.js**:
    ```js
    const app = Vue.createApp({
        data(){
            return {
                message: 'HSoluciones++',
                count: 5
            }
        }
    })

    app.component('button-counter', {
        data(){
            return {
                count: 0
            }
        },

        template: `
            <button @click="count++">
                Haz hecho click {{ count }} veces
            </button>
        `
    })
    ```

### Pasar datos a componentes (props)
1. Modificar **vue\main.js**:
    ```js
    const app = Vue.createApp({
        data(){
            return {
                courses: [
                    {
                        id: 1,
                        name: 'Vue.js',
                        price: '$50'
                    },
                    {
                        id: 2,
                        name: 'React.js',
                        price: '$60'
                    },
                    {
                        id: 3,
                        name: 'Angular',
                        price: '$70'
                    }
                ]
            }
        }
    })

    app.component('button-counter', {
        data(){
            return {
                count: 0
            }
        },

        template: `
            <button @click="count++">
                Haz hecho click {{ count }} veces
            </button>
        `
    })

    app.component('detail-course', {
        data(){
            return {

            }
        },

        props: ['course'],

        template: `
            <h1>{{ course.name }}</h1>
            <p>Precio: {{ course.price }}</p>
        `
    })
    ```
2. Modificar **vue\componentes.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Componentes</title>
    </head>
    <body>
        <div id="app">
            <detail-course v-for="course in courses" :key="course.id" :course="course"></detail-course>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="main.js"></script>
        <script>
            app.mount('#app')
        </script>
    </body>
    </html>
    ```

### Emitir eventos
1. Modificar **vue\main.js**:
    ```js
    const app = Vue.createApp({
        data(){
            return {
                textSize: 1,
                courses: [
                    {
                        id: 1,
                        name: 'Vue.js',
                        price: '$50'
                    },
                    {
                        id: 2,
                        name: 'React.js',
                        price: '$60'
                    },
                    {
                        id: 3,
                        name: 'Angular',
                        price: '$70'
                    }
                ]
            }
        }
    })

    app.component('button-counter', {
        data(){
            return {
                count: 0
            }
        },

        template: `
            <button @click="count++">
                Haz hecho click {{ count }} veces
            </button>
        `
    })

    app.component('detail-course', {
        data(){
            return {

            }
        },

        props: ['course'],

        template: `
            <h1>{{ course.name }}</h1>
            <p>Precio: {{ course.price }}</p>
            <button @click="$emit('crecerTexto', 0.2)">Incrementar tamaño</button>
        `
    })
    ```
2. Modificar **vue\componentes.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Componentes</title>
    </head>
    <body>
        <div id="app">
            <div :style="{ fontSize: textSize + 'em' }">
                <detail-course @crecer-texto="textSize += $event" v-for="course in courses" :key="course.id" :course="course"></detail-course>
            </div>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="main.js"></script>
        <script>
            app.mount('#app')
        </script>
    </body>
    </html>
    ```

### Emitir eventos II
1. Modificar **vue\main.js**:
    ```js
    const app = Vue.createApp({
        data(){
            ≡
        },
        methods: {
            crecer(size){
                this.textSize += size
            }
        }
    })
    ≡
    ```
2. Modificar **vue\componentes.html**:
    ```html
    ≡
    <detail-course @crecer-texto="crecer" v-for="course in courses" :key="course.id" :course="course"></detail-course>
    ≡
    ```

### Slots
1. Modificar **vue\main.js**:
    ```js
    ≡
    app.component('detail-course', {
        data(){
            return {

            }
        },

        props: ['course'],

        template: `
            <h1>{{ course.name }}</h1>
            <p>Precio: {{ course.price }}</p>
            <slot></slot>
            <button @click="$emit('crecerTexto', 0.2)">Incrementar tamaño</button>
        `
    })
    ```
2. Modificar **vue\componentes.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Componentes</title>
    </head>
    <body>
        <div id="app">
            <div :style="{ fontSize: textSize + 'em' }">
                <detail-course @crecer-texto="crecer" :course="course">
                    <p>Este es el mejor curso que puedes encontrar en la web</p>
                </detail-course>
            </div>
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="main.js"></script>
        <script>
            app.mount('#app')
        </script>
    </body>
    </html>
    ```


## Vue CLI

### Instalar Vue CLI
+ https://v3.vuejs.org/guide/installation.html#cli
1. Descargar e instalar [node.js](https://nodejs.org/es).
2. Instalar Vue CLI (ejecutar en una terminal como administrador):
    + $ npm install -g @vue/cli
3. Crear proyecto **hspp**:
    + $ vue create hspp
    + Seleccionar: Default (Vue 3) ([Vue 3] babel, eslint)
    + Seleccionar: Use NPM
4. Ejecutar proyecto **hspp**:
    + $ cd hspp
    + $ npm run serve
 
### Analizar proyecto
+ **Contenido**: analisis de la estructura de un proyecto Vue.

### Crear nuestro primer componente
1. Crear componente **hspp\src\components\Counter.vue**:
    ```vue
    <template>
        <h1>HS++ Counter</h1>
        <button @click="disminuir()">
            -
        </button>
        {{ contador }}
        <button @click="aumentar()">
            +
        </button>
    </template>

    <script>
    export default {
        data(){
            return {
                contador: 0
            }
        },
        methods: {
            disminuir(){
                this.contador--
            },
            aumentar(){
                this.contador++
            }
        }
    }
    </script>

    <style scoped>
        h1{
            color: red;
        }
    </style>
    ```
    + **Atajo**: <vue> with default.vue
2. Incluir componente **Counter** en el componente principal **hspp\src\App.vue**:
    ```vue
    <template>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Título principal</h1>
        <Counter />
    </template>

    <script>
    import Counter from './components/Counter'

    export default {
        name: 'App',
        components: {
            Counter
        }
    }
    </script>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    </style>
    ```


## Vue router

Instalar Vue Router


    ≡
    ```vue
    ```


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