function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)

}
function getUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
}
getUsers(2).then(function(res){
    return res.json()
}).then(function(response){
    let id= response.data[0]['id']
    return id
}).then(function(id){
    return getUserInfo(id)
}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response.data)
})