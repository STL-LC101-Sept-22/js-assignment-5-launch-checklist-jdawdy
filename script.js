// Write your JavaScript code here!

//const { formSubmission, myFetch } = require("./scriptHelper");

//let input = document.getElementsByClassName('formField');
// let input = document.querySelector('form')
// let pilot = document.getElementsByName('pilotName');
// let copilot = document.getElementsByName('copilotName');
// let fuelLevel = document.getElementsByName('fuelLevel');
// let cargoLevel = document.getElementsByName('cargoMass');
//querysel

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    })
   let list = document.getElementById("faultyItems");


   list.style.visibility = "hidden";
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);
    let cargoInput = document.querySelector("input[name=cargoMass]");
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