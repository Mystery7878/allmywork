async function getUser(){
    try{
        const response=await axios.get('https://jsonpplaceholder.typicode.com');
        console.log(response.data);
    }
    catch(erro){
        console.log(error);
    }
}