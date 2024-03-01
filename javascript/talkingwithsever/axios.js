function getUser(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{console.log(response.data)})
    .catch(error=>{console.log(error)})
}

function postUser(){
    axios.post("https://jsonplaceholder.typicode.com/users",{
        id:11,
        name:'emmy',
        userName:'wider'
    })
    .then(respons=>{console.log(respons)})
    .catch(erro=>{console.log(erro)})
}


function putUser(){
    axios.patch("https://jsonplaceholder.typicode.com/users/id:11",{
        name:'emmy',
    })
    .then(respos=>{console.log(respos)})
    .catch(ero=>{console.log(ero)})
}

function deleteUser(){
    axios.get("https://jsonplaceholder.typicode.com/users/11")
    .then(resonse=>{console.log(resonse)})
    .catch(eror=>{console.log(eror)})
}
