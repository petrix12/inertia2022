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
### ¿Cómo funciona la autenticación?
1. Realizar petición http:
    + URL: http://cursos-prueba.tk/api/login
    + Método: POST
    + Body:
        ```json
        {
            "gran_type": "password",
            "client_id": "956804e5-0b1b-4fea-a567-49df94c6ce0a",
            "client_secret": "4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
            "username": "victor@codersfree.com",
            "password": "12345678"
        }
        ```

### Crear ruta de login y register
1. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/auth/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/auth/Register.vue')
        }
    ]
    ≡
    ```
2. Crear vista **cursos\src\views\auth\Login.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Login</h1>
            <div class="card mx-auto">
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="mb-1">Email</label>
                            <input type="email" v-model="email" class="form-control" placeholder="Ingresa tu email">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="mb-1">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Ingresa tu password">
                        </div>

                        <button class="btn btn-primary">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log('Inicio de sesión')
            }
        }
    }
    </script>

    <style scoped>
        .card {
            max-width: 32rem;
        }
    </style>
    ```
3. Crear vista **cursos\src\views\auth\Register.vue**:
    ```vue
    <template>
        <h1>Register</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
4. Modificar componente principal **cursos\src\App.vue**:
    ```vue
    <template>
        <div class="navigation">
            <router-link to="/">Home</router-link> |
            <router-link :to="{name: 'CoursesList'}">Cursos</router-link> |
            <router-link to="/about">About</router-link>
        </div>

        <div class="navigation">
            <router-link :to="{name: 'Login'}">Login</router-link> |
            <router-link :to="{name: 'Register'}">Register</router-link>
        </div>

        <router-view />
    </template>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .navigation {
        margin: 30px;
    }

    .navigation a {
        font-weight: bold;
        color: #2c3e50;
    }

    .navigation a.router-link-exact-active {
        color: #42b983;
    }
    </style>
    ```

### BaseUrl
1. Modificar **cursos\src\main.js**:
    ```js
    ≡
    axios.defaults.baseURL = 'https://cursos-prueba.tk'

    createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
    ```
2. Eliminar la url base 'https://cursos-prueba.tk' en las vistas:
    + **cursos\src\views\courses\CoursesList.vue**.
    + **cursos\src\views\courses\CourseEdit.vue**.
    + **cursos\src\views\courses\CourseDetails.vue**.
3. Modificar vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        <h1>{{ course.title }}</h1>
        <p>{{ course.description }}</p>
        <p><b>Categoría: </b>{{ category.name }}</p>
        <router-link :to="{name: 'CourseEdit', params: {id: $route.params.id}}">
            Editar curso
        </router-link>
    </template>

    <script>
    export default {
        data() {
            return {
                course: {},
                category: {}
            }
        },
        methods: {
            getCourse() {
                this.axios.get(`/api/courses/${this.$route.params.id}?included=category`)
                    .then(response => {
                        this.course = response.data
                        this.category = response.data.category
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

### Soliciar Access token
1. Modificar vista **cursos\src\views\auth\Login.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Login</h1>
            <div class="card mx-auto">
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="mb-1">Email</label>
                            <input type="email" v-model="email" class="form-control" placeholder="Ingresa tu email">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="mb-1">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Ingresa tu password">
                        </div>

                        <button class="btn btn-primary" :class="{ 'disabled': disabled }">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                email: 'victor@codersfree.com',
                password: '12345678',
                disabled: false
            }
        },
        methods: {
            login() {
                this.disabled = true
                this.axios.post('/api/login', {
                    gran_type: "password",
                    client_id: "956804e5-0b1b-4fea-a567-49df94c6ce0a",
                    client_secret: "4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
                    username: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log(response.data)
                    this.disabled = false
                })
            }
        }
    }
    </script>

    <style scoped>
        .card {
            max-width: 32rem;
        }
    </style>
    ```

### Almacenar access token en un estado
1. Modificar tienda **cursos\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            auth: null
        },
        mutations: {
            setAuth(state, auth) {
                state.auth = auth
            }
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar vista **cursos\src\views\auth\Login.vue**:
    ```vue
    <template>
        <div class="container">
            {{ auth }}
            ≡
        </div>
    </template>

    <script>
    import { mapMutations, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: 'victor@codersfree.com',
                password: '12345678',
                disabled: false
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            ...mapMutations(['setAuth']),
            login() {
                this.disabled = true
                this.axios.post('/api/login', {
                    gran_type: "password",
                    client_id: "956804e5-0b1b-4fea-a567-49df94c6ce0a",
                    client_secret: "4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
                    username: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log(response.data)
                    this.setAuth(response.data)
                    this.disabled = false
                })
            }
        }
    }
    </script>
    ≡
    ```

### Almacena access token en localstorage
1. Modificar vista **cursos\src\views\auth\Login.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Login</h1>
            <div class="card mx-auto">
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="mb-1">Email</label>
                            <input type="email" v-model="email" class="form-control" placeholder="Ingresa tu email">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="mb-1">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Ingresa tu password">
                        </div>

                        <button class="btn btn-primary" :class="{ 'disabled': disabled }">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { mapMutations, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: 'victor@codersfree.com',
                password: '12345678',
                disabled: false
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            ...mapMutations(['setAuth']),
            login() {
                this.disabled = true
                this.axios.post('/api/login', {
                    gran_type: "password",
                    client_id: "956804e5-0b1b-4fea-a567-49df94c6ce0a",
                    client_secret: "4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
                    username: this.email,
                    password: this.password
                })
                .then(response => {
                    localStorage.setItem("auth", JSON.stringify(response.data))
                    this.setAuth(response.data)
                    this.disabled = false
                    this.$router.push({
                        name: 'Dashboard'
                    })
                })
            }
        }
    }
    </script>

    <style scoped>
        .card {
            max-width: 32rem;
        }
    </style>
    ```
2. Modificar tienda **cursos\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            setAuth({ commit }) {
                if(localStorage.getItem('auth')){
                    commit('setAuth', JSON.parse(localStorage.getItem('auth')));
                }
            }
        },
        ≡
    })
    ```
3. Modificar componente principal **cursos\src\App.vue**:
    ```vue
    <template>
        <div class="navigation">
            <router-link to="/">Home</router-link> |
            <router-link :to="{name: 'CoursesList'}">Cursos</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>

            <div v-if='auth' class="mb-3">
                <button class="btn btn-danger">
                    Cerrar sesión
                </button>
            </div>

            <div v-else class="navigation">
                <router-link :to="{name: 'Login'}">Login</router-link> |
                <router-link :to="{name: 'Register'}">Register</router-link>
            </div>
        </div>
        ≡
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            ...mapActions(['setAuth'])
        },
        created() {
            this.setAuth();
        }
    }
    </script>
    ≡
    ```
4. Crear vista **cursos\src\views\Dashboard.vue**:
    ```vue
    <template>
        <h1>Bienvenido {{ auth.user.name }}</h1>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['auth'])
        }
    }
    </script>

    <style>

    </style>
    ```
5. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    ≡
    ```

### Proteger rutas
1. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('../views/Dashboard.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/auth/Login.vue'),
            beforeEnter: (to, from, next) =>{
                if(localStorage.getItem('auth')){
                    next('/dashboard')
                } else {
                    next()
                }
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/auth/Register.vue')
        }
    ]
    ≡
    router.beforeEach((to, from, next) => {
        const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
        if(protectedRoute && !localStorage.getItem('auth')){
            next('/login')
        } else {
            next()
        }
    })

    export default router
    ```

### Cerrar sesión
1. Modificar tienda **cursos\src\store\index.js**:
    ```js
    ≡
    actions: {
		setAuth({ commit }) {
			if(localStorage.getItem('auth')){
				commit('setAuth', JSON.parse(localStorage.getItem('auth')));
			}
		},
		logout() {
			localStorage.removeItem('auth')
			location.reload()
		}
    },
    ≡
    ```
2. Modificar componente principal **cursos\src\App.vue**:
    ```vue
    <template>
        ≡
        <div v-if='auth' class="mb-3">
            <button class="btn btn-danger" @click="logout">
                Cerrar sesión
            </button>
        </div>
        ≡
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ...mapActions(['setAuth', 'logout'])
        },
        ≡
    }
    </script>
    ≡
    ```

### Mandar credenciales
1. Modificar **cursos\src\main.js**:
    ```js
    ≡
    axios.defaults.withCredentials = true
    axios.defaults.baseURL = 'https://cursos-prueba.tk/api/v2'
    ≡
    ```
2. Eliminar la cadena **'/api'** en la peticiones http en los archivos:
    + cursos\src\views\courses\CoursesList.vue
    + cursos\src\views\courses\CourseEdit.vue
    + cursos\src\views\courses\CourseDetails.vue
    + cursos\src\views\auth\Login.vue
3. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        ≡
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ≡
            saveCourse() {
                this.axios.post('/courses', this.course)
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
                        console.log(error.response.data)
                        /* this.errors = Object.values(error.response.data.errors).flat() */
                    })
            },
            ≡
        },
        ≡
    }
    </script>
    ≡
    ```
4. Modificar vista principal **cursos\src\App.vue**:
    ```vue
    <script>
    ≡
    export default {
        ≡
        ≡
        watch: {
            auth(newValue) {
                if(newValue){
                    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newValue.token.access_token	
                }
            }
        },
        created() {
            this.setAuth();
        }
    }
    </script>
    ≡
    ```
5. Modificar vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        ≡
        <p><b>Categoría: </b>{{ category.name }}</p>
        <p><b>Autor: </b>{{ user.name }}</p>
        ≡
    </template>

    <script>
    export default {
        data() {
            return {
                course: {},
                category: {},
                user: {}
            }
        },
        methods: {
            getCourse() {
                this.axios.get(`/courses/${this.$route.params.id}?included=category,user`)
                    .then(response => {
                        this.course = response.data
                        this.category = response.data.category
                        this.user = response.data.user
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

### Restringir funcionalidades
1. Modificar vista **cursos\src\views\courses\CoursesList.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Lista de cursos</h1>
            <ul v-if="errors.length > 0">
                <li v-for="error in errors" :key="error.id">
                    {{ error }}
                </li>
            </ul>
            <div v-if="auth" class="mb-4 card">
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
                    <button v-if="auth && course.user.id == auth.user.id" @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
    import usePagination from '@/composables/usePagination.js'
    import { mapState } from 'vuex'

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
        computed: {
            ...mapState(['auth'])
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
                this.axios.get(`/courses`, {
                    params: {
                        included: 'user',
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
                        /* this.pagination = {
                            links: res.links,
                            last_page: res.last_page
                        } */
                        /* this.pagination_links = res.links */
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCategories() {
                this.axios.get('/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            saveCourse() {
                this.axios.post('/courses', this.course)
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
                        console.log(error.response.data)
                        /* this.errors = Object.values(error.response.data.errors).flat() */
                    })
            },
            deleteCourse(id) {
                this.axios.delete(`/courses/${id}`)
                    .then(() => {
                        /* this.courses = this.courses.filter(course => course.id != id) */
                        this.getCourses()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
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
2. Modificar vista **cursos\src\views\courses\CourseDetails.vue**:
    ```vue
    <template>
        <h1>{{ course.title }}</h1>
        <p>{{ course.description }}</p>
        <p><b>Categoría: </b>{{ category.name }}</p>
        <p><b>Autor: </b>{{ user.name }}</p>

        <div v-if="auth && user.id == auth.user.id">
            <router-link :to="{name: 'CourseEdit', params: {id: $route.params.id}}">
                Editar curso
            </router-link>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                course: {},
                category: {},
                user: {}
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            getCourse() {
                this.axios.get(`/courses/${this.$route.params.id}?included=category,user`)
                    .then(response => {
                        this.course = response.data
                        this.category = response.data.category
                        this.user = response.data.user
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
3. Modificar archivo de rutas **cursos\src\router\index.js**:
    ```js
    ≡
    {
        path: '/courses/:id/edit',
        name: 'CourseEdit',
        component: () => import('../views/courses/CourseEdit'),
        meta: {
        requiresAuth: true
        }
    },
    ≡
    ```
4. Modificar vista **cursos\src\views\courses\CourseEdit.vue**:
    ```vue
    ≡
    <script>
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                course: {},
                categories: [],
                user: {}
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            getCourse() {
                this.axios.get(`/courses/${this.$route.params.id}?included=category,user`)
                    .then(response => {
                        this.course = response.data
                        this.user = response.data.user
                        if(this.user.id != this.auth.user.id) {
                            this.$router.push('/courses')
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            ≡
        },
        ≡
    }
    </script>
    ```


## Introducción a Inertia
+ **Respositorio**: https://github.com/coders-free/inertia
### Introducción
+ **Contenido**: sobre Inertia.

### Instalar Inertia con Jetstream
1. Crear proyecto **inertia**:
    1. $ laravel new inertia --jet
        + Which Jetstream stack do you prefer?: [1] inertia
        + Will your application use teams? (yes/no) [no]: no
2. En caso de ser necesario crear un virtual host para el proyecto **inertia**:
    + http://inertia.test
3. Crear base de datos **inertia**.
4. Ejecutar migraciones:
    + $ php artisan migrate
5. Asegurar que la varible de entorno **APP_URL=http://inertia.test** en **.env** coincida con el virtual host.
6. Cambiar la siguiente variable de entorno en **.env**:
    ```env
    FILESYSTEM_DRIVER=public
    ```

### Estructura del proyecto
1. Modificar **.env**:
    ```env
    APP_NAME="Explorando Inertia"
    ≡
    ```
2. Modificar **config\app.php**:
    ```php
    ≡
    'locale' => 'es',
    ≡
    ```
3. Ejecutar:
    + $ npm run watch

### Rutas y vistas
+ **Contenido**: sobre rutas y vistas con inertia.

### Metaetiquetas
1. Modificar vista **resources\js\Pages\Welcome.vue**:
    ```vue
    <template>
        <!-- <Head title="Welcome" /> -->
        <Head>
            <title>Welcome HS++</title>
            <meta name="description" content="Página principal de HS++">
        </Head>
        ≡
    </template>

    <style scoped>
        ≡
    </style>

    <script>
        ≡
        export default defineComponent({
            components: {
                Head,
                Link,
            },

            props: {
                canLogin: Boolean,
                canRegister: Boolean,
                laravelVersion: String,
                phpVersion: String,
                user: Object
            }
        })
    </script>
    ```

## Proyecto
+ **Respositorio**: https://github.com/coders-free/inertia
### Presentación del proyecto
+ **Contenido**: sobre lo que haremos en esta sección.

### Estructura del proyecto
1. Abrir el proyecto **inertia** de la sección anterior.
2. Crear los modelos **Organization**, **Country**, **Contact** (con: factory, migración, seeder y controlador):
    + $ php artisan make:model Organization -a
    + $ php artisan make:model Country -a
    + $ php artisan make:model Contact -a
3. Establecer campos de la migración **database\migrations\2022_03_09_122425_create_organizations_table.php**:
    ```php
    ≡
    Schema::create('organizations', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->timestamps();
    });
    ≡
    ```
4. Establecer campos de la migración **database\migrations\2022_03_09_122437_create_countries_table.php**:
    ```php
    ≡
    Schema::create('countries', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->timestamps();
    });
    ≡
    ```
5. Establecer campos de la migración **database\migrations\2022_03_09_122451_create_contacts_table.php**:
    ```php
    ≡
    Schema::create('contacts', function (Blueprint $table) {
        $table->id();
        $table->string('first_name');
        $table->string('last_name');
        $table->foreignId('organization_id')->constrained();
        $table->string('email');
        $table->string('phone');
        $table->string('address');
        $table->string('city');
        $table->string('state');
        $table->foreignId('country_id')->constrained();
        $table->string('postal_code');
        $table->timestamps();
    });
    ≡
    ```
6. Ejecutar migraciones:
    + $ php artisan migrate

### Llenar con datos falsos
1. Crear factory **database\factories\CountryFactory.php**:
    ```php
    ≡
    public function definition()
    {
        return [
            'name' => $this->faker->country()
        ];
    }
    ≡
    ```
2. Crear factory **database\factories\OrganizationFactory.php**:
    ```php
    ≡
    public function definition()
    {
        return [
            'name' => $this->faker->company
        ];
    }
    ≡
    ```
3. Crear factory **database\factories\ContactFactory.php**:
    ```php
    ≡
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'organization_id' => Organization::all()->random()->id,
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'city' => $this->faker->sentence(),
            'state' => $this->faker->state,
            'country_id' => Country::all()->random()->id,
            'postal_code' => $this->faker->postcode
        ];
    }
    ≡
    ```
4. Modificar el seeder **database\seeders\DatabaseSeeder.php** para que ejecute todos los factories:    
    ```php
    ≡
    use App\Models\Contact;
    use App\Models\Country;
    use App\Models\Organization;
    use Illuminate\Database\Seeder;

    class DatabaseSeeder extends Seeder
    {
        ≡
        public function run()
        {
            // \App\Models\User::factory(10)->create();

            Country::factory(5)->create();
            Organization::factory(20)->create();
            Contact::factory(100)->create();
        }
    }
    ```
5. Reestablecer la base de datos y ejecutar los seeders:
    + $ php artisan migrate:fresh --seed


### Habilitar asignación masiva
1. Habilitar asignación masiva en el modelo **app\Models\Organization.php**:    
    ```php
    ≡
    class Organization extends Model
    {
        ≡
        protected $fillable = [
            'name'
        ];
    }
    ```
2. Habilitar asignación masiva en el modelo **app\Models\Country.php**:    
    ```php
    ≡
    class Country extends Model
    {
        ≡
        protected $fillable = [
            'name'
        ];
    }
    ```
3. Habilitar asignación masiva en el modelo **app\Models\Contact.php**:    
    ```php
    ≡
    class Contact extends Model
    {
        ≡
        protected $fillable = [
            'first_name',
            'last_name',
            'organization_id',
            'email',
            'phone',
            'address',
            'city',
            'state',
            'country_id',
            'postal_code'
        ];
    }
    ```

### Crear rutas
1. Modificar el archivo de rutas **routes\web.php**: 
    ```php
    ≡
    use App\Http\Controllers\ContactController;
    use Illuminate\Foundation\Application;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    ≡

    Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::get('contacts/create', [ContactController::class, 'create'])->name('contacts.create');
    Route::post('contacts', [ContactController::class, 'store'])->name('contacts.store');
    Route::get('contacts/{contact}/edit', [ContactController::class, 'edit'])->name('contacts.edit');
    Route::put('contacts/{contact}', [ContactController::class, 'update'])->name('contacts.update');
    Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])->name('contacts.destroy');

    Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    ```
2. Crear vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    <template>
        <div>
            <h1 class="text-xl font-semibold">Lista de contactos</h1>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
3. Crear vista **resources\js\Pages\Contacts\Create.vue**:
    ```vue
    <template>
        <div>
            <h1>Formulario para crear contacto</h1>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
4. Crear vista **resources\js\Pages\Contacts\Edit.vue**:
    ```vue
    <template>
        <div>
            <h1>Formulario para editar contacto</h1>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
5. Programar controlador **app\Http\Controllers\ContactController.php**: 
    ```php
    ≡
    use Inertia\Inertia;

    class ContactController extends Controller
    {
        ≡
        public function index()
        {
            return Inertia::render('Contacts/Index');
        }
        ≡
        public function create()
        {
            return Inertia::render('Contacts/Create');
        }
        ≡
        public function edit(Contact $contact)
        {
            return Inertia::render('Contacts/Edit');
        }
        ≡
    }
    ≡
    ```
6. Compilar las vistas de Vue:
    + $ npm run watch

### Plantillas
1. Modificar plantilla **resources\js\Layouts\AppLayout.vue**:   
    ```vue
    <template>
        <div>
            ≡
            <div class="min-h-screen bg-gray-100">
                <nav class="bg-white border-b border-gray-100">
                    <!-- Primary Navigation Menu -->
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex">
                                <!-- Logo -->
                                <div class="shrink-0 flex items-center">
                                    <Link :href="route('dashboard')">
                                        <jet-application-mark class="block h-9 w-auto" />
                                    </Link>
                                </div>

                                <!-- Navigation Links -->
                                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <jet-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                                        Dashboard
                                    </jet-nav-link>

                                    <jet-nav-link :href="route('contacts.index')" :active="route().current('contacts.*')">
                                        Contacts
                                    </jet-nav-link>
                                </div>
                            </div>

                            <div class="hidden sm:flex sm:items-center sm:ml-6">

                                <!-- Settings Dropdown -->
                                <div class="ml-3 relative">
                                    <jet-dropdown align="right" width="48">
                                        <template #trigger>
                                            <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                                            </button>

                                            <span v-else class="inline-flex rounded-md">
                                                <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                                    {{ $page.props.user.name }}

                                                    <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <!-- Account Management -->
                                            <div class="block px-4 py-2 text-xs text-gray-400">
                                                Manage Account
                                            </div>

                                            <jet-dropdown-link :href="route('profile.show')">
                                                Profile
                                            </jet-dropdown-link>

                                            <div class="border-t border-gray-100"></div>

                                            <!-- Authentication -->
                                            ≡
                                        </template>
                                    </jet-dropdown>
                                </div>
                            </div>

                            <!-- Hamburger -->
                            ≡
                        </div>
                    </div>

                    <!-- Responsive Navigation Menu -->
                    <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                        <div class="pt-2 pb-3 space-y-1">
                            <jet-responsive-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                                Dashboard
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('contacts.index')" :active="route().current('contacts.*')">
                                Contacts
                            </jet-responsive-nav-link>
                        </div>

                        <!-- Responsive Settings Options -->
                        <div class="pt-4 pb-1 border-t border-gray-200">
                            <div class="flex items-center px-4">
                                <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 mr-3" >
                                    <img class="h-10 w-10 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                                </div>

                                <div>
                                    <div class="font-medium text-base text-gray-800">{{ $page.props.user.name }}</div>
                                    <div class="font-medium text-sm text-gray-500">{{ $page.props.user.email }}</div>
                                </div>
                            </div>

                            <div class="mt-3 space-y-1">
                                <jet-responsive-nav-link :href="route('profile.show')" :active="route().current('profile.show')">
                                    Profile
                                </jet-responsive-nav-link>

                                <!-- Authentication -->
                                ≡
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Heading -->
                ≡

                <!-- Page Content -->
                ≡
            </div>
        </div>
    </template>

    <script>
        ≡
    </script>
    ```
2. Modificar archivo de configuración **config\jetstream.php**:
    ```php
    ≡
    'features' => [
        // Features::termsAndPrivacyPolicy(),
        Features::profilePhotos(),
        // Features::api(),
        // Features::teams(['invitations' => true]),
        Features::accountDeletion(),
    ],
    ≡
    ```
3. Modificar vista **resources\js\Pages\Contacts\Index.vue**:    
    ```vue
    <template>
        <div>
            <app-layout title="Lista de contactos">
                <template #header>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Contactos
                    </h2>
                </template>
                <h1 class="text-xl font-semibold">Lista de contactos</h1>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'

    export default {
        components: {
            AppLayout
        }
    }
    </script>

    <style>

    </style>
    ```
4. Modificar vista **resources\js\Pages\Contacts\Create.vue**:    
    ```vue
    <template>
        <div>
            <app-layout title="Crear contacto">
                <template #header>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Contactos
                    </h2>
                </template>
                <h1>Formulario para crear contacto</h1>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'

    export default {
        components: {
            AppLayout
        }
    }
    </script>

    <style>

    </style>
    ```
5. Modificar vista **resources\js\Pages\Contacts\Edit.vue**:    
    ```vue
    <template>
        <div>
            <app-layout title="Editar contacto">
                <template #header>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Contactos
                    </h2>
                </template>
                <h1>Formulario para editar contacto</h1>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'

    export default {
        components: {
            AppLayout
        }
    }
    </script>

    <style>

    </style>
    ```

### Middleware auth
1. Modificar controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    class ContactController extends Controller
    {
        public function __construct(){
            $this->middleware('auth');
        }
        ≡
    }
    ```

### Pasar parámetros a una vista
1. Modificar controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('Contacts/Index', compact('contacts'));
    }
    ≡
    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Edit', compact('contact'));
    }
    ≡
    ```
2. Modificar la vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Lista de contactos">
                ≡
                <pre>
                    {{ contacts }}
                </pre>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'

    export default {
        components: {
            AppLayout
        },
        props: {
            contacts: {
                type: Array,
                required: true
            }
        }
    }
    </script>
    ≡
    ```
3. Modificar la vista **resources\js\Pages\Contacts\Edit.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Editar contacto">
                ≡
                <pre>
                    {{ contact }}
                </pre>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'

    export default {
        components: {
            AppLayout
        },
        props: {
            contact: {
                type: Object,
                required: true
            }
        }
    }
    </script>
    ≡
    ```

### Listar registros
+ Componentes gratuitos de Tailwind UI: https://tailwindui.com/preview
+ Demo de un dasboard de Inertia: https://demo.inertiajs.com
1. Modificar la vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Lista de contactos">
                <template #header>
                    ≡
                </template>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                                <th scope="col" class="relative px-6 py-3">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="contact in contacts" :key="contact.id">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {{ contact.first_name }} {{ contact.last_name }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {{ contact.organization.name }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {{ contact.city }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {{ contact.phone }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                        >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    ≡
    ```
2. Crear relación entre **organization_id** (Modelo Contact) y **name** (Modelo Organization) en **app\Models\Contact.php**:
    ```php
    ≡
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
    ≡
    ```
3. Crear relación entre **country_id** (Modelo Contact) y **name** (Modelo Country) en **app\Models\Contact.php**:
    ```php
    ≡
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
    ≡
    ```
4. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function index()
    {
        $contacts = Contact::with('organization')->get();
        return Inertia::render('Contacts/Index', compact('contacts'));
    }
    ≡
    ```
5. Descargar el recurso de **fontawesome** de la lección y ubicarlo en la carpeta **vendor**.
    + **Nota**: cuando se pase el proyecto a producción se deberá pasar manualmente este recurso.
6. Modificar **resources\views\app.blade.php**:
    ```php
    ≡
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    {{-- fontawesome --}}
    <link rel="stylesheet" href="{{asset('vendor/fontawesome-free/css/all.min.css')}}">
    ≡
    ```

### Paginacion
1. Evitar que los archivos del proyecto queden cacheados modificando **resources\views\app.blade.php**:
    ```php
    ≡
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') . '?version=' . Str::random() }}">
    ≡
    <!-- Scripts -->
    @routes
    <script src="{{ mix('js/app.js') . '?version=' . Str::random() }}" defer></script>
    ≡
    ```
    + **Nota**: estos cambios se deben deshacer en producción.
2. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function index()
    {
        $contacts = Contact::with('organization')->paginate();
        return Inertia::render('Contacts/Index', compact('contacts'));
    }
    ≡
    ```
3. Modificar la vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Lista de contactos">
                ≡
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        ≡
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="contact in contacts.data" :key="contact.id">
                                                ≡
                                            </tr>
                                        </tbody>
                                    </table>
                                    <pagination :pagination="contacts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Pagination from '@/Components/Pagination.vue'

    export default {
        components: {
            AppLayout,
            Pagination
        },
        props: {
            contacts: Object,
        }
    }
    </script>
    ≡
    ```
4. Crear componente **resources\js\Components\Pagination.vue**:
    ```vue
    <template>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div v-if="pagination.links.length > 3" class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        Mostrando
                        <span class="font-medium">{{ pagination.from }}</span>
                        hasta
                        <span class="font-medium">{{ pagination.to }}</span>
                        de
                        <span class="font-medium">{{ pagination.total }}</span>
                        resultados
                    </p>
                </div>
                <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <template v-for="(link, key) in pagination.links">
                            <div :key="key" v-if="link.url == null" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" v-html="link.label">
                            </div>
                            <Link :key="'link-' + key" 
                                v-else 
                                :href="link.url" 
                                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                :class="link.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'"
                                v-html="link.label" 
                            />
                        </template>
                    </nav>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { Link } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            Link
        },
        props: {
            pagination: Object
        }
    }
    </script>

    <style>

    </style>
    ```

### Implementar buscador
1. Modificar la vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    ≡
    <template>
        <div>
            <app-layout title="Lista de contactos">
                ≡
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                    <div class="px-6 py-4 flex items-center">
                                        <Input v-model="search" type="text" class="flex-1" placeholder="Ingres texto para filtrar" />
                                    </div>

                                    <table class="min-w-full divide-y divide-gray-200">
                                        ≡
                                    </table>
                                    <pagination :pagination="contacts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Pagination from '@/Components/Pagination.vue'
    import Input from '@/Jetstream/Input.vue'
    import pickBy from 'lodash/pickBy'

    export default {
        components: {
            AppLayout,
            Pagination,
            Input
        },
        data() {
            return {
                search: this.filters.search
            }
        },
        watch: {
            // Se mantiene a la escucha de cualquier cambio en search
            search($value) {
                this.$inertia.get('/contacts', pickBy({
                    search: $value 
                }), {
                    preserveState: true
                })
            }
        },
        props: {
            filters: Object,
            contacts: Object
        }
    }
    </script>
    ≡
    ```
2. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    use App\Models\Contact;
    use App\Http\Requests\StoreContactRequest;
    use App\Http\Requests\UpdateContactRequest;
    use Illuminate\Http\Request;
    use Inertia\Inertia;

    class ContactController extends Controller
    {
        ≡
        public function index(Request $request)
        {
            $filters = $request->all('search');
            $contacts = Contact::with('organization')
                ->filter($filters)
                ->paginate();
            return Inertia::render('Contacts/Index', compact('contacts', 'filters'));
        }
        ≡
    }
    ```
3. Agregar un Query Scope para filtrar contactos en el modelo **app\Models\Contact.php**:
    ```php
    ≡
    // Query Scope para filtrar contactos
    public function scopeFilter($query, $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where('first_name', 'LIKE', '%' . $search . '%')
                ->orWhere('last_name', 'LIKE', '%' . $search . '%')
                ->orWhere('city', 'LIKE', '%' . $search . '%')
                ->orWhere('phone', 'LIKE', '%' . $search . '%')
                ->orWhereHas('organization', function($query) use ($search){
                    $query->where('name', 'LIKE', '%' . $search . '%');
                });
        });
    }
    ≡
    ```

### Agregar registros
1. Modificar vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Lista de contactos">
                ≡
                <div class="container py-12">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                    <div class="px-6 py-4 flex items-center">
                                        <Input v-model="search" type="text" class="flex-1" placeholder="Ingres texto para filtrar" />
                                        <Link :href="route('contacts.create')" class="ml-4 flex-shrink-0 btn btn-blue">Nuevo</Link>
                                    </div>

                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            ≡
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ≡
                                        </tbody>
                                    </table>
                                    <pagination :pagination="contacts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    ≡
    import { Link } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            ≡
            Link
        },
        data() {
            ≡
        },
        watch: {
            ≡
        },
        props: {
            ≡
        }
    }
    </script>
    ≡
    ```
2. Crear archivo de estilo **resources\css\buttons.css**:
    ```css
    .btn {
        @apply font-bold py-2 px-4 rounded;
    }

    .btn-blue {
        @apply bg-blue-500 text-white hover:bg-blue-700;
    }

    .btn-indigo {
        @apply bg-indigo-500 text-white hover:bg-indigo-700;
    }
    ```
3. Crear archivo de estilo **resources\css\commom.css**:
    ```css
    .container{
        @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
    }
    ```
4. Crear archivo de estilo **resources\css\forms.css**:
    ```css
    .form-control {
        @apply border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm;
    }
    ```
5. Importar los estilos anteriores en **resources\css\app.css**:
    ```css
    ≡
    @import 'buttons.css';
    @import 'commom.css';
    @import 'forms.css';
    ```
6. Modificar la vista **resources\js\Pages\Contacts\Create.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Crear contacto">
                <template #header>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Contactos
                    </h2>
                </template>

                <div class="container py-12">
                    <h1 class="text-3xl font-semibold text-gray-700 mb-3">
                        <span class="text-indigo-500">Contacts /</span> Create
                    </h1>

                    <div class="bg-white px-6 py-8 rounded-lg shadow">
                        <!-- {{ this.$page.props.errors }} -->
                        <jet-validation-errors />
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label>
                                    First Name
                                    <Input v-model="contact.first_name" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Last Name
                                    <Input v-model="contact.last_name" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Organization
                                    <select v-model="contact.organization_id" class="form-control w-full">

                                        <option value="" selected disabled>
                                            Seleccione una opción
                                        </option>

                                        <option v-for="organization in organizations" :value="organization.id" :key="'organization-' + organization.id">
                                            {{ organization.name }}
                                        </option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Email
                                    <Input v-model="contact.email" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Phone
                                    <Input v-model="contact.phone" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Address
                                    <Input v-model="contact.address" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    City
                                    <Input v-model="contact.city" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    State
                                    <Input v-model="contact.state" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Country
                                    <select v-model="contact.country_id" class="form-control w-full">
                                        <option value="" selected disabled>
                                            Seleccione una opción
                                        </option>
                                        <option v-for="country in countries" :value="country.id" :key="'country-' + country.id">
                                            {{ country.name }}
                                        </option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Postal Code
                                    <Input v-model="contact.postal_code" type="text" class="w-full" />
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-end mt-3">
                            <button class="btn btn-indigo" @click="store">
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Input from '@/Jetstream/Input.vue'
    import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'

    export default {
        components: {
            AppLayout,
            Input,
            JetValidationErrors
        },
        data() {
            return {
                contact: {
                    first_name: '',
                    last_name: '',
                    organization_id: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    state: '',
                    country_id: '',
                    postal_code: ''
                }
            }
        },
        props: {
            organizations: Array,
            countries: Array
        },
        methods: {
            store() {
                this.$inertia.post(this.route('contacts.store'), this.contact)
            }
        }
    }
    </script>

    <style>

    </style>
    ```
7. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function index(Request $request)
    {
        $filters = $request->all('search');
        $contacts = Contact::with('organization')
            ->filter($filters)
            ->latest('id')
            ->paginate();
        return Inertia::render('Contacts/Index', compact('contacts', 'filters'));
    }
    ≡
    public function create()
    {
        $organizations = \App\Models\Organization::all();
        $countries = \App\Models\Country::all();
        return Inertia::render('Contacts/Create', compact('organizations', 'countries'));
    }
    ≡
    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'organization_id' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country_id' => 'required',
            'postal_code' => 'required'
        ]);
        $contact = Contact::create($data);
        return redirect()->route('contacts.edit', $contact);
    }
    ≡
    ```

### Editar registros
1. Modificar la vista **resources\js\Pages\Contacts\Index.vue**:
    ```vue
    ≡
    <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="contact in contacts.data" :key="contact.id">
            ≡
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link :href="route('contacts.edit', contact)" class="text-indigo-600 hover:text-indigo-900">
                    <!-- <i class="fas fa-chevron-right"></i> --> >
                </Link>
            </td>
        </tr>
    </tbody>
    ≡
    ```
2. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function edit(Contact $contact)
    {
        $organizations = \App\Models\Organization::all();
        $countries = \App\Models\Country::all();
        return Inertia::render('Contacts/Edit', compact('contact', 'organizations', 'countries'));
    }
    ≡
    public function update(Request $request, Contact $contact)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'organization_id' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country_id' => 'required',
            'postal_code' => 'required'
        ]);
        $contact->update($data);
        return redirect()->route('contacts.edit', $contact);
    }
    ≡
    ```
3. Modificar la vista **resources\js\Pages\Contacts\Edit.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Editar contacto">
                <template #header>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Contactos
                    </h2>
                </template>
                <div class="container py-12">
                    <h1 class="text-3xl font-semibold text-gray-700 mb-3">
                        <span class="text-indigo-500">Contacts /</span> Edit
                    </h1>

                    <div class="bg-white px-6 py-8 rounded-lg shadow">
                        <!-- {{ this.$page.props.errors }} -->
                        <jet-validation-errors />
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label>
                                    First Name
                                    <Input v-model="form.first_name" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Last Name
                                    <Input v-model="form.last_name" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Organization
                                    <select v-model="form.organization_id" class="form-control w-full">

                                        <option value="" selected disabled>
                                            Seleccione una opción
                                        </option>

                                        <option v-for="organization in organizations" :value="organization.id" :key="'organization-' + organization.id">
                                            {{ organization.name }}
                                        </option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Email
                                    <Input v-model="form.email" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Phone
                                    <Input v-model="form.phone" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Address
                                    <Input v-model="form.address" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    City
                                    <Input v-model="form.city" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    State
                                    <Input v-model="form.state" type="text" class="w-full" />
                                </label>
                            </div>

                            <div>
                                <label>
                                    Country
                                    <select v-model="form.country_id" class="form-control w-full">
                                        <option value="" selected disabled>
                                            Seleccione una opción
                                        </option>
                                        <option v-for="country in countries" :value="country.id" :key="'country-' + country.id">
                                            {{ country.name }}
                                        </option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Postal Code
                                    <Input v-model="form.postal_code" type="text" class="w-full" />
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-end mt-3">
                            <button class="btn btn-indigo" @click="update">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Input from '@/Jetstream/Input.vue'
    import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'

    export default {
        components: {
            AppLayout,
            Input,
            JetValidationErrors
        },
        data() {
            return {
                form: this.contact
            }
        },
        props: {
            contact: Object,
            organizations: Array,
            countries: Array
        },
        methods: {
            update () {
                this.$inertia.put(this.route('contacts.update', this.contact), this.form)
                // Otra forma de enviar:
                /* this.$inertia.form(this.form).put(this.route('contacts.update', this.contact)) */
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### Eliminar registro
1. Modificar archivo de estilos **resources\css\buttons.css**:
    ```css
    ≡
    .btn-red {
        @apply bg-red-500 text-white hover:bg-red-700;
    }
    ```
2. Modificar la vista **resources\js\Pages\Contacts\Edit.vue**:
    ```vue
    <template>
        <div>
            <app-layout title="Editar contacto">
                ≡
                <div class="container py-12">
                    ≡
                    <div class="bg-white px-6 py-8 rounded-lg shadow">
                        ≡
                        <div class="grid grid-cols-2 gap-6">
                            ≡
                        </div>
                        <div class="flex justify-end mt-3">
                            <button class="btn btn-red mr-3" @click="destroy">
                                Eliminar
                            </button>
                            <button class="btn btn-indigo" @click="update">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            </app-layout>
        </div>
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            update () {
                ≡
            },
            destroy () {
                this.$inertia.delete(this.route('contacts.update', this.contact))
            }
        }
    }
    </script>
    ≡
    ```
3. Modificar el controlador **app\Http\Controllers\ContactController.php**:
    ```php
    ≡
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contacts.index');
    }
    ≡
    ```

## Subir repositorio
1. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git add .
    + $ git commit -m "Proyecto culminado (Versión 0)"
    + $ git push -u origin main

## Limpiar cache
+ $ php artisan cache:clear
+ $ php artisan config:clear
+ $ php artisan config:cache