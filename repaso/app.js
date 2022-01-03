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