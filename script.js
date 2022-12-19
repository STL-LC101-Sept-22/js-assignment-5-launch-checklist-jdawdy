// Write your JavaScript code here!

const { formSubmission, myFetch } = require("./scriptHelper");

//let input = document.getElementsByClassName('formField');
let input = document.querySelector('form')
// let pilot = document.getElementsByName('pilotName');
// let copilot = document.getElementsByName('copilotName');
// let fuelLevel = document.getElementsByName('fuelLevel');
// let cargoLevel = document.getElementsByName('cargoMass');
//querysel

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
   })
   let list = document.getElementById("faultyItems");


   list.style.visibility = "hidden";
   let form = document.querySelector("form");
   
   input.addEventListener('submit', function(event) {
       let pilotInput = document.querySelector("input[name='pilotName']").value;
       let copilotInput = document.querySelector("input[name='copilotName']").value;
       let fuelLevelInput = document.querySelector("input[name='fuelLevel']").value;
       let cargoLevelInput = document.querySelector("input[name='cargoMass']").value;
       
       let pilot = pilotInput.value;
       let copilot = copilotInput.value;
       let fuelLevel = Number(fuelInput.value);
       let cargoLevel = Number(cargoInput.value);

       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
   
});

//input.addEventListener('submit', function(event) {
    //createLaunchListObj(pilotName, copilotName, fuelLevel, cargoMass)
    //formSubmission(document, /*list,*/ pilotName, copilotName, fuelLevel, cargoMass)
    
    
    // console.log('I made it here')
    // if(pilotName === ""){
    //     alert('All fields are required!');
    // };
    // if(copilotName === ""){
    //     alert('All fields are required!');
    // };
    // if (fuelLevel === ""){
    //     alert('All fields are required!');
    // };
    // if(cargoMass === ""){
    //     alert('All fields are required!');
    // };
    // console.log(pilotName)
    // alert("Co pilotname: " + copilotName + "<----");
//});
//