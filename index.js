const url = "http://localhost:3000/users"
function getUsers(){
    axios.get(url)
        .then(response=>{
            resultado.textContent = JSON.stringify(response.data) 


        })
}
getUsers()