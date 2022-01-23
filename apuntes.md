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
### Instalar Vue Router
+ https://router.vuejs.org/installation.html#direct-download-cdn
1. Instalar Vue Router en el proyecto **hspp**:
    + $ vue add router
    + ? Still proceed? (y/N): y
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y

### Analizar el funcionamiento de Vue Router
1. Cambios principales al implementer Vue Router:
    + Archivo de rutas: **hspp\src\router\index.js**.
    + Los componente que fungen como vistas se ubican en: **hspp\src\views**.
    + Modifica el componente principal: **hspp\src\App.vue**.

### Crear nueva ruta
1. Crear vista **hspp\src\views\Blog.vue**:
    ```vue
    <template>
        <h1>HS++ Blog</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style scoped>

    </style>
    ```
2. Crear ruta para la vista blog en **hspp\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'
    /* import Blog from '../views/Blog' */

    const routes = [
        ≡
        {
            path: '/blog',
            name: 'Blog',
            /* component: Blog */
            component: () => import('../views/Blog')
        }
    ]
    ≡
    ```
3. Incluir blog en el menú del componente principal **hspp\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/blog">Blog</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### Rutas con parámetros
1. Agregar ruta para posts en **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/blog/:post',
            name: 'Post',
            component: () => import('../views/Post')
        }
    ]
    ≡
    ```
2. Crear vista **hspp\src\views\Post.vue**:
    ```vue
    <template>
        <h1>HS++ Post: {{ $route.params.post }}</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Pasar dos parámetros
1. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/user/:user/post/:post',
            name: 'UserPost',
            component: () => import('../views/UserPost')
        }
    ]
    ≡
    ```
2. Crear vista **hspp\src\views\UserPost.vue**:
    ```vue
    <template>
        <h1>HS++ Post ({{ $route.params.post }}) de un usuario ({{ $route.params.user }})</h1>
    </template>

    <script>
    export default {
        mounted(){
            console.log(this.$route.params)
        }
    }
    </script>

    <style>

    </style>
    ```

### Ruta 404 Not Found
1. Agregar ruta 404 en **hspp\src\router\index.js**:
    ```js
    const routes = [
        ≡
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ```
2. Crear vista **hspp\src\views\NotFound.vue**:
    ```vue
    <template>
        <h1>404 | Ruta no encontrada</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Sintaxis de coincidencia de rutas
1. Modificar archivo de **rutas hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/compras/:orderIdt(\\d+)',
            name: 'Order',
            component: () => import('../views/Order')
        },
        {
            path: '/compras/:productName',
            name: 'Product',
            component: () => import('../views/Product')
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ≡
    ```
2. Crear vista **hspp\src\views\Order.vue**:
    ```vue
    <template>
        <h1>HS++: Detalle de una orden</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
3. Crear vista **hspp\src\views\Product.vue**:
    ```vue
    <template>
        <h1>HS++: Detalle de un producto</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Rutas con parámetros opcionales
1. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/users/:userId(\\d+)?',
            name: 'Users',
            component: () => import('../views/Users')
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ≡
    ```
2. Crear componente **hspp\src\views\Users.vue**:
    ```vue
    <template>
        <div v-if="$route.params.userId">
            <h1>HS++: Detalle de un usuario</h1>
        </div>
        <div v-else>
            <h1>HS++: Lista de usuarios</h1>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Rutas anidadas
1. Modificar vista **hspp\src\views\Users.vue**:
    ```vue
    <template>
        <div v-if="$route.params.userId">
            <h1>HS++: Detalle de un usuario</h1>
        </div>
        <div v-else>
            <h1>HS++: Lista de usuarios</h1>
        </div>

        <div id="nav">
            <router-link :to="'/users/' + $route.params.userId">Index</router-link> |
            <router-link :to="'/users/' + $route.params.userId + '/profile'">Perfil</router-link> |
            <router-link :to="'/users/' + $route.params.userId + '/courses'">Cursos</router-link>
        </div>

        <router-view/>
    </template>
    ≡
    ```
2. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/users/:userId(\\d+)?',
            name: 'Users',
            component: () => import('../views/Users'),
            children: [
                {
                    path: '',
                    component: () => import('../views/users/Index'),
                },
                {
                    path: 'profile',
                    component: () => import('../views/users/Profile'),
                },
                {
                    path: 'courses',
                    component: () => import('../views/users/Courses'),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ≡
    ```
3. Crear vista **hspp\src\views\users\Profile.vue**:
    ```vue
    <template>
        <h2>HS++: Perfil de un usuario</h2>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
4. Crear vista **hspp\src\views\users\Courses.vue**:
    ```vue
    <template>
        <h2>HS++: Cursos de un usuario</h2>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
5. Crear vista **hspp\src\views\users\Index.vue**:
    ```vue
    <template>
        <h2>HS++: Contenido por defecto</h2>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Rutas con nombre
1. Modificar componente principal **hspp\src\App.vue** para llamar a las rutas por sus nombres:
    ```vue
    <template>
        <div id="nav">
            <router-link :to="{name: 'Home'}">Home</router-link> |
            <router-link :to="{name: 'About'}">About</router-link> |
            <router-link :to="{name: 'Blog'}">Blog</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```
2. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/users/:userId(\\d+)?',
            name: 'Users',
            component: () => import('../views/Users'),
            children: [
                {
                    path: '',
                    name: 'UsersIndex',
                    component: () => import('../views/users/Index'),
                },
                {
                    path: 'profile',
                    name: 'UsersProfile',
                    component: () => import('../views/users/Profile'),
                },
                {
                    path: 'courses',
                    name: 'UsersCourses',
                    component: () => import('../views/users/Courses'),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ≡
    ```
3. Modificar la vista **hspp\src\views\Users.vue**:
    ```vue
    <template>
        <div v-if="$route.params.userId">
            <h1>HS++: Detalle de un usuario</h1>
        </div>
        <div v-else>
            <h1>HS++: Lista de usuarios</h1>
        </div>

        <div id="nav">
            <router-link :to="{name: 'UsersIndex', params: {userId: $route.params.userId}}">Index</router-link> |
            <router-link :to="{name: 'UsersProfile', params: {userId: $route.params.userId}}">Perfil</router-link> |
            <router-link :to="{name: 'UsersCourses', params: {userId: $route.params.userId}}">Cursos</router-link>
        </div>

        <router-view/>
    </template>
    ≡
    ```

### Redirecciones
1. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/blog',
            /* redirect: '/post', */
            redirect: { name: 'Blog' },
        },
        {
            path: '/post',
            name: 'Blog',
            component: () => import('../views/Blog')
        },
        ≡
    ]
    ≡
    ```

### Recibir parametros de la url dentro de props
1. Modificar vista **hspp\src\views\Users.vue**:
    ```vue
    <template>
        <div v-if="$route.params.userId">
            <h1>HS++: Detalle del usuario con id = {{ userId }}</h1>
        </div>
        <div v-else>
            <h1>HS++: Lista de usuarios</h1>
        </div>

        <div id="nav">
            <router-link :to="{name: 'UsersIndex', params: {userId}}">Index</router-link> |
            <router-link :to="{name: 'UsersProfile', params: {userId}}">Perfil</router-link> |
            <router-link :to="{name: 'UsersCourses', params: {userId}}">Cursos</router-link>
        </div>

        <router-view/>
    </template>

    <script>
    export default {
        props: ['userId'],
    }
    </script>

    <style>

    </style>
    ```
2. Modificar archivo de rutas **hspp\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/users/:userId(\\d+)?',
            name: 'Users',
            component: () => import('../views/Users'),
            props: true,
            children: [
                {
                    path: '',
                    name: 'UsersIndex',
                    component: () => import('../views/users/Index'),
                },
                {
                    path: 'profile',
                    name: 'UsersProfile',
                    component: () => import('../views/users/Profile'),
                },
                {
                    path: 'courses',
                    name: 'UsersCourses',
                    component: () => import('../views/users/Courses'),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
    ≡
    ```

### Diferentes modos history
+ https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
1. Modificar el archivo de rutas **hspp\src\router\index.js** para cambiar el modo **createWebHistory** por **createWebHashHistory**:
    ```js
    import { createRouter, createWebHashHistory } from 'vue-router'
    import Home from '../views/Home.vue'

    const routes = [
        ≡
    ]

    const router = createRouter({
        history: createWebHashHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
2. Revertir los cambios en **hspp\src\router\index.js**.

### Ciclos de vida
+ https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforecreate
1. Modificar componente **hspp\src\components\HelloWorld.vue**:
    ```vue
    <template>
        <div class="hello">
            <!-- <h1>{{ msg }}</h1> -->
            <h1>{{ prueba }}</h1>
            <button @click="prueba += '+'">Cambiar valor de prueba</button>
            ≡
        </div>
    </template>

    <script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return {
            prueba: "HS++ Saludo original"
            }
        },
        beforeCreate(){
            // Este método se ejecuta antes de crearse el componente
            console.log('beforeCreate')
            this.prueba = "HS++ Saludo desde beforeCreate"
        },
        created(){
            // Este método se ejecuta luego de crearse el componente (pero aún no se ha montado)
            console.log('created')
            this.prueba = "HS++ Saludo desde created"
        },
        mounted(){
            // Este método se ejecuta luego de montarse el componente
            console.log('mounted')
            alert('Componente montado')
        },
        updated(){
            // Este método se ejecuta cuando ocurre algún cambio en el componente
            console.log('updated')
        },
        unmounted(){
            // Este método se ejecuta luego de desmontarse el componente
            console.log('unmounted')
            alert('Componente desmontado')
        },
    }
    </script>
    ≡
    ```

## VueX
### ¿Qué es VueX?
+ **Contenido**: acerca de Vuex.

### Instalar VueX
1. Instalar VueX al proyecto **hspp**:
    + $ vue add vuex
    + ? Still proceed? (y/N): y

### States
1. Crear componente **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
    </template>

    <script>
    import { mapState } from 'vuex'
    export default {
        /* computed: {
            nombre(){
                return this.$store.state.nombre
            },
            apellido(){
                return this.$store.state.apellido
            }
        } */
        /* computed: mapState(['nombre', 'apellido']) */
        computed: {
            ...mapState(['nombre', 'apellido'])
        }
    }
    </script>

    <style>

    </style>
    ```
2. Modificar la vista **hspp\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
            <MiTienda />
        </div>
    </template>

    <script>
    // @ is an alias to /src
    /* import HelloWorld from '@/components/HelloWorld.vue' */
    import MiTienda from '@/components/MiTienda.vue'

    export default {
        name: 'Home',
        components: {
            /* HelloWorld */
            MiTienda
        }
    }
    </script>
    ```

### Getters
1. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
        <p>El apellido tiene {{ sizeApellido }} letras</p>
        <!-- <p>El apellido tiene {{ $store.getters.sizeApellido }} letras</p> -->
    </template>

    <script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapState(['nombre', 'apellido']),
            /* sizeApellido(){
                return this.$store.getters.sizeApellido
            } */
            ...mapGetters(['sizeApellido'])
        }
    }
    </script>

    <style>

    </style>
    ```
2. Modificar **hspp\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            nombre: 'Leticia',
            apellido: 'Rodríguez'
        },
        getters: {
            sizeApellido(state){
                return state.apellido.length
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```

### Mutations I
1. Modificar **hspp\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            nombre: 'Leticia',
            apellido: 'Rodríguez',
            count: 1
        },
        getters: {
            sizeApellido(state){
                return state.apellido.length
            }
        },
        mutations: {
            decrement(state){
                state.count--
            },
            increment(state){
                state.count++
            }
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
        <p>El apellido tiene {{ sizeApellido }} letras</p>
        <!-- <p>El apellido tiene {{ $store.getters.sizeApellido }} letras</p> -->
        <div>
            <button @click="decrement()">-</button>
            {{ count }}
            <button @click="increment()">+</button>
        </div>
    </template>

    <script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations(['decrement', 'increment'])
            /* decrement(){
                this.$store.commit('decrement')
            },
            increment(){
                this.$store.commit('increment')
            } */
        },
        computed: {
            ...mapState(['nombre', 'apellido', 'count']),
            /* sizeApellido(){
                return this.$store.getters.sizeApellido
            } */
            ...mapGetters(['sizeApellido'])
        }
    }
    </script>

    <style>

    </style>
    ```

### Mutations II
1. Modificar **hspp\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡,
        mutations: {
            changeNombre(state, nombre){
                state.nombre = nombre
            },
            ≡
        },
        ≡
    })
    ```
2. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
        <p>El apellido tiene {{ sizeApellido }} letras</p>
        <form @submit.prevent="changeNombreComponente()">
            <input type="text" v-model="nombreComponente">
            <button>Actualizar</button>
        </form>
        
    </template>

    <script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        data(){
            return {
                nombreComponente: ''
            }
        },
        methods: {
            ...mapMutations(['decrement', 'increment', 'changeNombre']),
            changeNombreComponente(){
                this.changeNombre(this.nombreComponente)
                this.nombreComponente = ''
            }
        },
        computed: {
            ...mapState(['nombre', 'apellido', 'count']),
            ...mapGetters(['sizeApellido'])
        }
    }
    </script>

    <style>

    </style>
    ```

### Acciones I
1. Modificar **hspp\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            changeNombre(/* context */ { commit }, nombre){
                setTimeout(() => {
                    console.log('Actualizado en BD')
                    /* context.commit('changeNombre', nombre) */
                    commit('changeNombre', nombre)
                }, 500)
            }
        },
        ≡
    })
    ```
2. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
        <p>El apellido tiene {{ sizeApellido }} letras</p>
        <form @submit.prevent="changeNombreComponente()">
            <input type="text" v-model="nombreComponente">
            <button>Actualizar</button>
        </form>
        
    </template>

    <script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        data(){
            return {
                nombreComponente: ''
            }
        },
        methods: {
            ...mapMutations(['decrement', 'increment']),
            ...mapActions(['changeNombre']),
            changeNombreComponente(){
                this.changeNombre(this.nombreComponente)
                this.nombreComponente = ''
            },
            /* changeNombre(nombre){
                this.$store.dispatch('changeNombre', nombre)
            } */
        },
        computed: {
            ...mapState(['nombre', 'apellido', 'count']),
            ...mapGetters(['sizeApellido'])
        }
    }
    </script>

    <style>

    </style>
    ```

### Acciones II
1. Modificar **hspp\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            changeNombre({ commit }, nombre){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        commit('changeNombre', nombre)
                        resolve()
                    }, 500)
                })
            },
            async confirmationChangeNombre({ dispatch }, nombre){
                await dispatch('changeNombre', nombre)
                console.log('Actualizado en BD')
            }
        },
        modules: {
        }
    })
    ```
2. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    ≡
    <script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        ≡
        methods: {
            ...mapMutations(['decrement', 'increment']),
            ...mapActions(['changeNombre', 'confirmationChangeNombre']),
            changeNombreComponente(){
                this.confirmationChangeNombre(this.nombreComponente).then(() => {
                    this.nombreComponente = ''
                })
            }
        },
        ≡
    }
    </script>
    ≡
    ```

### Módulos
1. Modificar **hspp\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    /* import { moduleUser } from './modules/moduleUser'
    import { moduleCounter } from './modules/moduleCounter' */
    import moduleUser from './modules/moduleUser'
    import moduleCounter from './modules/moduleCounter'

    /* const moduleUser = {
        namespaced: true,

        state: {
            nombre: 'Leticia',
            apellido: 'Rodríguez'
        },
        getters: {
            sizeApellido(state){
                return state.apellido.length
            }
        },
        mutations: {
            changeNombre(state, nombre){
                state.nombre = nombre
            }
        },
        actions: {
            changeNombre({ commit }, nombre){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        commit('changeNombre', nombre)
                        resolve()
                    }, 500)
                })
            },
            async confirmationChangeNombre({ dispatch }, nombre){
                await dispatch('changeNombre', nombre)
                console.log('Actualizado en BD')
            }
        }
    } */

    /* const moduleCounter = {
        namespaced: true,
        
        state: {
            count: 1
        },
        mutations: {
            decrement(state){
                state.count--
            },
            increment(state){
                state.count++
            }
        }
    } */

    export default createStore({
        state: {
        },
        modules: {
            user: moduleUser,
            counter: moduleCounter
        }
    })
    ```
2. Modificar **hspp\src\components\MiTienda.vue**:
    ```vue
    <template>
        <h1>Tienda HS++</h1>
        <p>Mi nombre es: {{ nombre }}</p>
        <p>Mi apellido es: {{ apellido }}</p>
        <p>El apellido tiene {{ sizeApellido }} letras</p>
        <form @submit.prevent="changeNombreComponente()">
            <input type="text" v-model="nombreComponente">
            <button>Actualizar</button>
        </form>
        
    </template>

    <script>
    /* import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' */
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('user')

    export default {
        data(){
            return {
                nombreComponente: ''
            }
        },
        methods: {
            ...mapMutations(/* 'counter',  */['decrement', 'increment']),
            ...mapActions(/* 'user',  */['changeNombre', 'confirmationChangeNombre']),
            changeNombreComponente(){
                this.confirmationChangeNombre(this.nombreComponente).then(() => {
                    this.nombreComponente = ''
                })
            }
        },
        computed: {
            ...mapState(/* 'user',  */['nombre', 'apellido', 'count']),
            /* ...mapState({
                nombre: state => state.user.nombre, 
                apellido: state => state.user.apellido, 
                count: state => state.counter.count
            }), */
            ...mapGetters(/* 'user',  */['sizeApellido'])
        }
    }
    </script>

    <style>

    </style>
    ```
3. Crear **hspp\src\store\modules\moduleUser.js**:
    ```js
    /* export  */const moduleUser = {
        namespaced: true,

        state: {
            nombre: 'Leticia',
            apellido: 'Rodríguez'
        },
        getters: {
            sizeApellido(state){
                return state.apellido.length
            }
        },
        mutations: {
            changeNombre(state, nombre){
                state.nombre = nombre
            }
        },
        actions: {
            changeNombre({ commit }, nombre){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        commit('changeNombre', nombre)
                        resolve()
                    }, 500)
                })
            },
            async confirmationChangeNombre({ dispatch }, nombre){
                await dispatch('changeNombre', nombre)
                console.log('Actualizado en BD')
            }
        }
    }

    export default moduleUser
    ```
4. Crear **hspp\src\store\modules\moduleUser.js**:
    ```js
    /* export  */const moduleCounter = {
        namespaced: true,
        
        state: {
            count: 1
        },
        mutations: {
            decrement(state){
                state.count--
            },
            increment(state){
                state.count++
            }
        }
    }

    export default moduleCounter
    ```


## CRUD
### Resumen de la sección
+ **Contenido**: sobre lo que haremos en esta sección.
+ **Repositorio de la API a consumir en esta sección**: https://github.com/coders-free/cursos-prueba
  
### Nuevo proyecto
1. Crear proyecto **cursos**:
    + $ vue create cursos
        + Seleccionar: Manually select features
        + Seleccionar unicamente:
            + (*) Choose Vue version
            + (*) Babel
            + (*) Router
            + (*) Vuex
            + (*) Linter / Formatter
        + Seleccionar: 3.x
        + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
        + Seleccionar: ESLint with error prevention only
        + Seleccionar unicamente: 
            + (*) Lint on save
        + Selecconar: In dedicated config files
        + Save this as a preset for future projects? (y/N): n
    + Ejecutar proyecto:
        + $ cd cursos
        + npm run serve
2. Instalar Axios:
    + $ cd cursos
    + $ npm install --save axios vue-axios
        + URL de nmp vue-axios: https://www.npmjs.com/package/vue-axios
3. Indicar las dependencias de axios en **cursos\src\main.js**:
    ```js
    ≡
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
    ```

### Mostrar listado de registros
1. Modificar componente principal **cursos\src\App.vue**:
    ```vue
    <template>
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link :to="{name: 'CoursesList'}">Cursos</router-link> |
                <router-link to="/about">About</router-link>
            </div>
        <router-view />
    </template>
    ≡
    ```
2. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/courses',
        name: 'CoursesList',
        component: () => import('../views/courses/CoursesList')
    },
    {
        path: '/courses/:id',
        name: 'CourseDetails',
        component: () => import('../views/courses/CourseDetails')
    },
    ≡
    ```
3. Crear vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <h1>Lista de cursos</h1>
        <ul>
            <li v-for="course in courses" :key="course.id">
                <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                    {{ course.title }}
                </router-link>
            </li>
        </ul>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: []
            }
        },
        methods: {
            getCourses() {
                this.axios.get('https://cursos-prueba.tk/api/courses')
                    .then(response => {
                        this.courses = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourses()
        }
    }
    </script>

    <style>

    </style>
    ```
4. Crear vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        <h1>Detalle de un curso</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### Mostrar detalle de un registro
1. Modificar vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        <h1>{{ course.title }}</h1>
        <p>{{ course.description }}</p>
        <p><b>Categoría: </b>{{ course.category.name }}</p>
    </template>

    <script>
    export default {
        data() {
            return {
                course: {}
            }
        },
        methods: {
            getCourse() {
                this.axios.get(`https://cursos-prueba.tk/api/courses/${this.$route.params.id}?included=category`)
                    .then(response => {
                        this.course = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourse()
        }
    }
    </script>

    <style>

    </style>
    ```

### Guardar registro I
1. Modificar la vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <h1>Lista de cursos</h1>
        <form>
            <div>
                <label for="title">Título</label>
                <br>
                <input id="title" type="text" placeholder="Ingrese el título del curso">
            </div>
            <br>
            <div>
                <label for="description">Descripción</label>
                <br>
                <textarea id="description" placeholder="Ingrese la descripción del curso"></textarea>
            </div>
            <br>
            <div>
                <label for="categories">Categoría</label>
                <br>
                <select name="" id="categories">
                    <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </form>
        ≡
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: []
            }
        },
        methods: {
            getCourses() {
                this.axios.get('https://cursos-prueba.tk/api/courses')
                    .then(response => {
                        this.courses = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>
    ≡
    ```

### Guardar registro II
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <h1>Lista de cursos</h1>
        <form @submit.prevent="saveCourse">
            <div>
                <label for="title">Título</label>
                <br>
                <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
            </div>
            <br>
            <div>
                <label for="description">Descripción</label>
                <br>
                <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
            </div>
            <br>
            <div>
                <label for="categories">Categoría</label>
                <br>
                <select name="" id="categories" v-model="course.category_id">
                    <option value="" selected disabled>Seleccione una categoría</option>
                    <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <br>
            <button type="submit">Guardar</button>
        </form>
        <ul>
            <li v-for="course in courses" :key="`course-${course.id}`">
                <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                    {{ course.title }}
                </router-link>
            </li>
        </ul>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                }
            }
        },
        methods: {
            getCourses() {
                this.axios.get('https://cursos-prueba.tk/api/courses')
                    .then(response => {
                        this.courses = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(response => {
                        this.courses.push(response.data)
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>
    ```

### Eliminar registro
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        ≡
        <ul>
            <li v-for="course in courses" :key="`course-${course.id}`">
                <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                    {{ course.title }}
                </router-link>
                -
                <button @click="deleteCourse(course.id)">Eliminar</button>
            </li>
        </ul>
    </template>

    <script>
    export default {
        ≡
        methods: {
            ≡
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        this.courses = this.courses.filter(course => course.id != id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        ≡
    }
    </script>
    ≡
    ```

### Editar registro
1. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    {
        path: '/courses/:id',
        name: 'CourseDetails',
        component: () => import('../views/courses/CourseDetails')
    },
    {
        path: '/courses/:id/edit',
        name: 'CourseEdit',
        component: () => import('../views/courses/CourseEdit')
    },
    ≡
    ```
2. Crear vista **cursos\src\views\courses\CourseEdit.vue**:
    ```vue
    <template>
        <h1>Editar curso</h1>
        <form @submit.prevent="updateCourse">
            <div>
                <label for="title">Título</label>
                <br>
                <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
            </div>
            <br>
            <div>
                <label for="description">Descripción</label>
                <br>
                <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
            </div>
            <br>
            <div>
                <label for="categories">Categoría</label>
                <br>
                <select name="" id="categories" v-model="course.category_id">
                    <option value="" selected disabled>Seleccione una categoría</option>
                    <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <br>
            <button type="submit">Guardar</button>
        </form>
    </template>

    <script>
    export default {
        data() {
            return {
                course: {},
                categories: [],
            }
        },
        methods: {
            getCourse() {
                this.axios.get(`https://cursos-prueba.tk/api/courses/${this.$route.params.id}?included=category`)
                    .then(response => {
                        this.course = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            updateCourse() {
                this.axios.put(`https://cursos-prueba.tk/api/courses/${this.$route.params.id}`, this.course)
                    .then(() => {
                        this.$router.push({ name: 'CourseDetails', params: { id: this.$route.params.id } })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourse(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>
    ```
3. Modificar vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        <h1>{{ course.title }}</h1>
        <p>{{ course.description }}</p>
        <p><b>Categoría: </b>{{ course.category.name }}</p>
        <router-link :to="{name: 'CourseEdit', params: {id: course.id}}">
            Editar curso
        </router-link>
    </template>

    <script>
    export default {
        data() {
            return {
                course: {}
            }
        },
        methods: {
            getCourse() {
                this.axios.get(`https://cursos-prueba.tk/api/courses/${this.$route.params.id}?included=category`)
                    .then(response => {
                        this.course = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourse()
        }
    }
    </script>

    <style>

    </style>
    ```
4. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <h1>Lista de cursos</h1>
        <form @submit.prevent="saveCourse">
            <div>
                <label for="title">Título</label>
                <br>
                <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
            </div>
            <br>
            <div>
                <label for="description">Descripción</label>
                <br>
                <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
            </div>
            <br>
            <div>
                <label for="categories">Categoría</label>
                <br>
                <select name="" id="categories" v-model="course.category_id">
                    <option value="" selected disabled>Seleccione una categoría</option>
                    <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <br>
            <button type="submit">Guardar</button>
        </form>
        <ul>
            <li v-for="course in courses" :key="`course-${course.id}`">
                <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                    {{ course.title }}
                </router-link>
                -
                <button @click="deleteCourse(course.id)">Eliminar</button>
            </li>
        </ul>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                }
            }
        },
        methods: {
            getCourses() {
                this.axios.get('https://cursos-prueba.tk/api/courses')
                    .then(response => {
                        this.courses = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(response => {
                        this.courses.push(response.data)
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        this.courses = this.courses.filter(course => course.id != id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>
    ```

### Mostrar errores de validación
1. Modificar Vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <h1>Lista de cursos</h1>
        <ul v-if="errors.length > 0">
            <li v-for="error in errors" :key="error.id">
                {{ error }}
            </li>
        </ul>
        ≡
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                },
                errors: []
            }
        },
        methods: {
            ≡
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(response => {
                        this.courses.push(response.data)
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = Object.values(error.response.data.errors).flat()
                    })
            },
            ≡
        },
        ≡
    }
    </script>
    ≡
    ```

### Paginación
1. Obtener los CDN's de [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/download) y pegarlos en **cursos\public\index.html**:
    ```html
    ≡
    <head>
        ≡
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>
    ≡
    ```
2. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de cursos</h1>
            <ul v-if="errors.length > 0">
                <li v-for="error in errors" :key="error.id">
                    {{ error }}
                </li>
            </ul>
            <form @submit.prevent="saveCourse" class="mb-4">
                <div class="mb-2">
                    <label for="title">Título</label>
                    <br>
                    <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
                </div>
                
                <div class="mb-2">
                    <label for="description">Descripción</label>
                    <br>
                    <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
                </div>
                
                <div class="mb-2">
                    <label for="categories">Categoría</label>
                    <br>
                    <select name="" id="categories" v-model="course.category_id">
                        <option value="" selected disabled>Seleccione una categoría</option>
                        <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary btn-sm">Guardar</button>
            </form>
            <ul>
                <li v-for="course in courses" :key="`course-${course.id}`" class="mb-2">
                    <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                        {{ course.title }}
                    </router-link>
                    -
                    <button @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </li>
            </ul>

            <!-- paginación -->
            <div class="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li 
                            v-for="pagination_link in pagination_links"
                            :key="'pagination_link-' + pagination_link.label"
                            class="page-item"
                            :class="{
                                'disabled': pagination_link.url == null,
                                'active': pagination_link.active
                            }"
                        >
                            <a 
                                class="page-link"
                                @click="changePage(pagination_link.url)"
                                v-html="pagination_link.label" 
                                style="cursor: pointer"
                            ></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                },
                errors: [],
                pagination_links: []
            }
        },
        computed: {
            page() {
                return this.$route.query.page ?? 1
            }
        },
        watch: {
            page() {
            this.getCourses() 
            }
        },
        methods: {
            getCourses() {
                this.axios.get(`https://cursos-prueba.tk/api/courses?per_page=10&page=${this.page}`)
                    .then(response => {
                        let res = response.data
                        this.courses = res.data
                        this.pagination_links = res.links
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(response => {
                        this.courses.push(response.data)
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = Object.values(error.response.data.errors).flat()
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        this.courses = this.courses.filter(course => course.id != id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            changePage(url) {
                this.$router.replace({
                    query: {
                        page: url.split('page=')[1]
                    }
                })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>
    ```

### Paginación II
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de cursos</h1>
            <ul v-if="errors.length > 0">
                <li v-for="error in errors" :key="error.id">
                    {{ error }}
                </li>
            </ul>
            <form @submit.prevent="saveCourse" class="mb-4">
                <div class="mb-2">
                    <label for="title">Título</label>
                    <br>
                    <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
                </div>
                
                <div class="mb-2">
                    <label for="description">Descripción</label>
                    <br>
                    <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
                </div>
                
                <div class="mb-2">
                    <label for="categories">Categoría</label>
                    <br>
                    <select name="" id="categories" v-model="course.category_id">
                        <option value="" selected disabled>Seleccione una categoría</option>
                        <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary btn-sm">Guardar</button>
            </form>
            <ul>
                <li v-for="course in courses" :key="`course-${course.id}`" class="mb-2">
                    <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                        {{ course.title }}
                    </router-link>
                    -
                    <button @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </li>
            </ul>

            <!-- paginación -->
            <div class="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li 
                            v-for="pagination_link in pagination.links"
                            :key="'pagination_link-' + pagination_link.label"
                            class="page-item"
                            :class="{
                                'disabled': pagination_link.url == null,
                                'active': pagination_link.active
                            }"
                        >
                            <a 
                                class="page-link"
                                @click="changePage(pagination_link.url)"
                                v-html="pagination_link.label" 
                                style="cursor: pointer"
                            ></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                },
                errors: [],
                pagination: {}
                /* pagination_links: [] */
            }
        },
        computed: {
            page() {
                let page = this.$route.query.page ?? 1
                let last_page = this.pagination.last_page
                if(page > last_page){
                    this.$router.replace({
                        query: {
                            page: this.pagination.last_page
                        }
                    })
                    return last_page
                }
                return page
            }
        },
        watch: {
            page() {
            this.getCourses() 
            }
        },
        methods: {
            getCourses() {
                this.axios.get(`https://cursos-prueba.tk/api/courses?sort=-id&per_page=10&page=${this.page}`)
                    .then(response => {
                        let res = response.data
                        this.courses = res.data
                        this.pagination = {
                            links: res.links,
                            last_page: res.last_page
                        }
                        /* this.pagination_links = res.links */
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(() => {
                        /* this.courses.push(response.data) */
                        this.getCourses()
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = Object.values(error.response.data.errors).flat()
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        /* this.courses = this.courses.filter(course => course.id != id) */
                        this.getCourses()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            changePage(url) {
                this.$router.replace({
                    query: {
                        page: url.split('page=')[1]
                    }
                })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>
    ```

### Filtrar registros
1. Modificar **cursos\public\index.html**:
    ```html
    ≡
    <body class="bg-light">
        ≡
    </body>
    ≡
    ```
2. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Lista de cursos</h1>
            <ul v-if="errors.length > 0">
                <li v-for="error in errors" :key="error.id">
                    {{ error }}
                </li>
            </ul>
            <div class="mb-4 card">
                <form @submit.prevent="saveCourse" class="card-body">
                    <div class="mb-2">
                        <label for="title">Título</label>
                        <br>
                        <input class="form-control" v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
                    </div>
                    
                    <div class="mb-2">
                        <label for="description">Descripción</label>
                        <br>
                        <textarea class="form-control" v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
                    </div>
                    
                    <div class="mb-2">
                        <label for="categories">Categoría</label>
                        <br>
                        <select class="form-control" name="" id="categories" v-model="course.category_id">
                            <option value="" selected disabled>Seleccione una categoría</option>
                            <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary btn-sm">Guardar</button>
                </form>
            </div>
            <div class="mb-4">
                <h2>Buscar</h2>
                <input v-model="search" type="text" placerholder="Ingrese una palabra para filtrar" class="form-control">
            </div>
            <ul>
                <li v-for="course in courses" :key="`course-${course.id}`" class="mb-2">
                    <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                        {{ course.title }}
                    </router-link>
                    -
                    <button @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </li>
            </ul>

            <!-- paginación -->
            <div class="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li 
                            v-for="pagination_link in pagination.links"
                            :key="'pagination_link-' + pagination_link.label"
                            class="page-item"
                            :class="{
                                'disabled': pagination_link.url == null,
                                'active': pagination_link.active
                            }"
                        >
                            <a 
                                class="page-link"
                                @click="changePage(pagination_link.url)"
                                v-html="pagination_link.label" 
                                style="cursor: pointer"
                            ></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                },
                errors: [],
                pagination: {},
                search: ''
            }
        },
        computed: {
            page() {
                let page = this.$route.query.page ?? 1
                let last_page = this.pagination.last_page
                if(page > last_page){
                    this.$router.replace({
                        query: {
                            page: this.pagination.last_page
                        }
                    })
                    return last_page
                }
                return page
            }
        },
        watch: {
            page() {
            this.getCourses() 
            },
            search() {
                this.getCourses()
            }
        },
        methods: {
            getCourses() {
                this.axios.get(`https://cursos-prueba.tk/api/courses?sort=-id&per_page=10&page=${this.page}&filter[title]=${this.search}`)
                    .then(response => {
                        let res = response.data
                        this.courses = res.data
                        this.pagination = {
                            links: res.links,
                            last_page: res.last_page
                        }
                        /* this.pagination_links = res.links */
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(() => {
                        /* this.courses.push(response.data) */
                        this.getCourses()
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = Object.values(error.response.data.errors).flat()
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        /* this.courses = this.courses.filter(course => course.id != id) */
                        this.getCourses()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            changePage(url) {
                this.$router.replace({
                    query: {
                        page: url.split('page=')[1]
                    }
                })
            }
        },
        created() {
            this.getCourses(),
            this.getCategories()
        }
    }
    </script>

    <style>

    </style>   
    ```

### Parámetros en las peticiones
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    ≡
    methods: {
        getCourses() {
            /* this.axios.get(`https://cursos-prueba.tk/api/courses?sort=-id&per_page=10&page=${this.page}&filter[title]=${this.search}`) */
            this.axios.get(`https://cursos-prueba.tk/api/courses`, {
                params: {
                    sort: '-id',
                    per_page: 10,
                    page: this.page,
                    'filter[title]': this.search
                }
            })
                .then(response => {
                    let res = response.data
                    this.courses = res.data
                    this.pagination = {
                        links: res.links,
                        last_page: res.last_page
                    }
                    /* this.pagination_links = res.links */
                })
                .catch(error => {
                    console.log(error)
                })
        },
        ≡
    }
    ≡
    ```


## Composition API
### Setup
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    ≡
    <script>
    import { ref, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    export default {
        setup() {
            // Constantes
            const pagination = ref({})
            const route = useRoute()
            const router = useRouter()

            // Propiedades computadas
            const page = computed(() => {
                let page = route.query.page ?? 1
                if(page > pagination.value.last_page){
                    router.replace({
                        query: {
                            page: pagination.value.last_page
                        }
                    })
                    return pagination.value.last_page
                }
                return page
            })

            // Métodos
            const setPagination = (response) => {
                pagination.value = {
                    links: response.links,
                    last_page: response.last_page
                }
            }
        
            const changePage = (url) => {
                router.replace({
                    query: {
                        page: url.split('page=')[1]
                    }
                })
            }

            return {
                pagination,
                page,
                setPagination,
                changePage
            }
        },
        data() {
            return {
                courses: [],
                categories: [],
                course: {
                    title: '',
                    description: '',
                    category_id: ''
                },
                errors: [],
                search: ''
            }
        },
        watch: {
            page() {
                this.getCourses() 
            },
            search() {
                this.getCourses()
            }
        },
        methods: {
            getCourses() {
                this.axios.get(`https://cursos-prueba.tk/api/courses`, {
                    params: {
                        sort: '-id',
                        per_page: 10,
                        page: this.page,
                        'filter[title]': this.search
                    }
                })
                    .then(response => {
                        let res = response.data
                        this.courses = res.data

                        this.setPagination(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('https://cursos-prueba.tk/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
                    .then(() => {
                        /* this.courses.push(response.data) */
                        this.getCourses()
                        this.course = {
                            title: '',
                            description: '',
                            category_id: ''
                        }
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = Object.values(error.response.data.errors).flat()
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`https://cursos-prueba.tk/api/courses/${id}`)
                    .then(() => {
                        /* this.courses = this.courses.filter(course => course.id != id) */
                        this.getCourses()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },
        ≡
    }
    </script>
    ≡
    ```

### Composables
1. Crear composable **cursos\src\composables\usePagination.js**:
    ```js
    import { ref, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    export default function usePagination() {
        // Constantes
        const pagination = ref({})
        const route = useRoute()
        const router = useRouter()

        // Propiedades computadas
        const page = computed(() => {
            let page = route.query.page ?? 1
            if(page > pagination.value.last_page){
                router.replace({
                    query: {
                        page: pagination.value.last_page
                    }
                })
                return pagination.value.last_page
            }
            return page
        })

        // Métodos
        const setPagination = (response) => {
            pagination.value = {
                links: response.links,
                last_page: response.last_page
            }
        }
    
        const changePage = (url) => {
            router.replace({
                query: {
                    page: url.split('page=')[1]
                }
            })
        }

        return {
            pagination,
            page,
            setPagination,
            changePage
        }
    }
    ```
2. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <script>
    import usePagination from '@/composables/usePagination.js'

    export default {
        setup() {
            const {
                pagination,
                page,
                setPagination,
                changePage
            } = usePagination()

            return {
                pagination,
                page,
                setPagination,
                changePage
            }
        },
        data() {
            ≡
        },
        ≡
    }
    </script>
    ```

## Autenticación

    ≡
    ```vue
    ```



