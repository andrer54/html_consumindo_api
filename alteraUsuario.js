function updateUser(id, updatedUser){
    axios.put(`http://localhost:3000/editar/${id}`, updatedUser)
        .then(response=>console.log(response))
        .catch(e=>console.error(e))
}

const updatedUser = {
    nome: "Marcelinho",
    especialidade: "171",
    avatar: "https://picsum.photos/200/300"
}
updateUser(3, updatedUser)
