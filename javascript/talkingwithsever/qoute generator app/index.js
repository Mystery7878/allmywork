async function getUser(){
    try{
        const response=await axios.get('https://api.quotable.io/random');
       const data =response.data 
       console.log(response.data);
    document.getElementById("tag").innerHTML = data.tags;
    document.getElementById("content").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;
    }
    catch(error){
        console.log(error);
        document.getElementById("error").innerHTML = error;
    }
}