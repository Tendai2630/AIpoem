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

let instructionInput=document.querySelector("#User-instructions")    

let apikey ="t4f81808b6o8c140994f8e9749ba33a0";
let context =
"You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳ Generating a french poem about ${instructionsInput.value}</div>`;

axios.get(apiURL), then(displayPoem);



    
    
}






let poemFormElement= document.querySelector("poem-generator-form")
poemFormElement.addEventListener("submit",generatepoem);

