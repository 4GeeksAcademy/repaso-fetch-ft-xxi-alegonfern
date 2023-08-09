import React, { useEffect, useState } from 'react'

const App = () => {

    const [users, setUsers] = useState(null)
    const [todos, setTodos] = useState(null)
    const [comments, setComments] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        allData()
        getPosts("https://jsonplaceholder.typicode.com/posts")
    }, [])

    const allData = async () => {
        try {
            const responses = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/todos"),
                fetch("https://jsonplaceholder.typicode.com/comments")
            ])

            const datos = await Promise.all(responses.map((response) => response.json()))
            const [users, todos, comments] = datos;

            setUsers(users)
            setTodos(todos)
            setComments(comments)

        } catch (error) {
            console.log(error.message)
        }
    }

    const getPosts = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then((response) => response.json())
            .then((datos) => setPosts(datos))
    }

    return (
        <div>App</div>
    )
}

export default App