function getUser(id){
    axios.get(`http://localhost:3000/user/${id}`)
        .then(response=>{
            user.textContent = response.data.nome 
            especialidade.textContent = response.data.especialidade;
            avatarUrl.src = response.data.avatar;

        })
        .catch(e=>console.error(e))
}
getUser(1)