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