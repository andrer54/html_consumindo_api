function delUser(id){
    axios.delete(`http://localhost:3000/del/${id}`)
        .then(response=>{
             console.log(response)

        })
        .catch(e=>console.error(e))
}
delUser(1)