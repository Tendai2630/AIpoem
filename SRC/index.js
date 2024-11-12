function displayPoem(response){

new typewriter("#poem",{
strings:"response.data.answer",
autostart : true,
delay :1,
cursor:"",})
}
;







function generatepoem (event){
    event.preventDefault();
let instructionInput=document.querySelector("User-instructions")    

let apikey ="t4f81808b6o8c140994f8e9749ba33a0";
let prompt ='User instructions :Generate a English poem about $(instructionInput.value)';
let context="You are a nature expert and love to write nature poem .your mission is to produce a 4 line poem using basic HTML .Please follow instructions given by the user  ";
let apiURL="https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}";

axios.get(apiURL), then(displayPoem);



    ne
    
}






let poemFormElement= document.querySelector("poem-generator-form")
poemFormElement.addEventListener("submit",generatepoem);

