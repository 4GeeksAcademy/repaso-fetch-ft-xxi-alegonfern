const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;

        if (exito) {
            resolve("Trabajo realizado!");
        } else {
            reject(new Error("Error: Trabajo no realizado"))
        }

    }, 2000)
})

promesa.then((result) => {
    console.log(result)
})
    .catch((error) => {
        console.log(error.message)
    })


const operacionAsincrona = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tarea realizada!');
        }, 5000)
    })
}

const miFuncion = async () => {
    try {
    
        const resultado = await operacionAsincrona();
        console.log(resultado);

    } catch (error) {
        console.log(error.message)
    }
}

miFuncion();


function pruebaUno(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resultado 1!');
        }, 2000)
    })
}

function pruebaDos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resultado 2!');
        }, 1000)
    })
}

function pruebaTres(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resultado 3!');
        }, 1500)
    })
}

async function pruebasCombinadas(){
    try {

        const resultados = await Promise.all([
            pruebaUno(),
            pruebaDos(),
            pruebaTres()
        ])

        console.log(resultados);
        console.log("Todas las pruebas realizadas!")
        
    } catch (error) {
        console.log(error.message)
    }
}

pruebasCombinadas();


/* fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    console.log(response)
}) */

async function fetchCombinados(){
    try {
        
        const resultados = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/todos"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ])

        const [users, todos, comments] = await Promise.all(resultados.map((resultado) => resultado.json()))

        console.log(users);
    
    } catch (error) {
        console.log(error.message)
    }
}

fetchCombinados()