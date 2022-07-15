function getUsers(){
    axios.get("https://api.github.com/users/andrer54")
        .then(response=>{
            resultado.textContent = JSON.stringify(response.data) 
            autor.textContent = response.data.login;
            avatarUrl.src = response.data.avatar_url

        })
}
getUsers()