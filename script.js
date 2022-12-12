// Write your JavaScript code here!
let input = document.getElementsByClassName('formField');

let pilotName = document.getElementsByName('pilotName');
let copilotName = document.getElementsByName('copilotName');
let fuelLevel = document.getElementsByName('fuelLevel');
let cargoMass = document.getElementsByName('cargoMass');

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
   
});

window.addEventListener('submit', function(event) {
    if(validateInput(pilotName) === "Empty"){
        alert('All fields are required!');
    };
    if(validateInput(copilotName) === "Empty"){
        alert('All fields are required!');
    };
    if (validateInput(fuelLevel) === "Empty"){
        alert('All fields are required!');
    };
    if(validateInput(cargoMass) === "Empty"){
        alert('All fields are required!');
    };
    //alert('All fields are required!');
});