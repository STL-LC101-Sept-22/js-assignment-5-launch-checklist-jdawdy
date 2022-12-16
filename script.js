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
    console.log(listedPlanets);
    let input = document.querySelector('form')
    input.addEventListener('submit', function(event) {
        let pilot = document.querySelector("input[name='pilotName']").value;
        let copilot = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass'").value;
        formSubmission()
    });
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