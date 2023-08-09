let users = null;
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((resultado) => {
        console.log(resultado)
        users = resultado
    })

setTimeout(() => {

    console.log(users);

    for(user of users){
        console.log(user)
    }

}, 5000)