const url = "http://localhost:3000/new"
function addUser(newUser){
    axios.post(url, newUser)
    .then(response=>console.log(response))
}
const newUser = {
    nome: "Neto",
    especialidade: "Enfermagem",
    avatar: "https://picsum.photos/200/300"
}

function adicionar(){
    addUser(newUser)
}
