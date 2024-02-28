function getMeaning() {
    var word = document.getElementById("word").value
    const wordsData = {

        "string":{
            meaning:"strings are used to represent textual data. they sequences of character in enclosed in a single or double quotes",
            example:"'example'",

        },
        "number":{
            meaning:"number data types represent numeric values",
            example:"24"
        },
        "array":{
            meaning:"arrays are used to store multiple values in a single variable. this values can be of different data types",
            example:"[ameh is 10 years old]"
        },
        "variables":{
            meaning:"variable are container used to store values",
            example:"var 2024"
        },
        "boolean":{
            meaning:"boolean is a data type that represent two values; true/false. ",
            example:""
        },
        "function":{
            meaning:"functions are block or codes that perform a specific task. the can be reused throughout the program",
            example:"function ageChecker(){}"
        },
        "loop":{
            meaning:"loop are used to repeatedly execute a block of code",
            example:"ameh,ameh,ameh,ameh"
        },
        "object":{
            meaning:"object are used to store multiple values in a single variable",
            example:"ameh is a boy",
        }
    }
    const wordToLower = word.toLowerCase();
        if(word ===""){
            document.getElementById("meaning").innerHTML="";
            document.getElementById("example").innerHTML="";
        }else if (wordToLower in wordsData){
            document.getElementById("meaning").innerHTML=wordsData[wordToLower].meaning;
            document.getElementById("example").innerHTML=wordsData[wordToLower].example;
        }else{
            document.getElementById("meaning").innerHTML="sorry word not found";
            document.getElementById("example").innerHTML="";
        }
    
}