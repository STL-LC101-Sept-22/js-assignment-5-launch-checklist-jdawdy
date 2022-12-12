// Write your helper functions here!
require('isomorphic-fetch');

let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById('cargoStatus');
let fualtyItems = document.getElementById('faultyItems')
let launchStatus = document.getElementById('launchStatus')
let readyToLaunch = launchStatus.innerHTML = "<span style='color: green;'>Shuttle is ready for launch</span>"
let notReadyToLaunch = launchStatus.innerHTML = "<span style='color: red;'>Shuttle not ready for launch!</span>"

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(input) {
   window.addEventListener("click", function(){
    //should take in a string as a parameter and return 'empty', 'not a number', or 'is a number' as appropriate
    if(typeof input === ''){
        return "Empty"
        alert('All fields are required!');
    } else if(typeof input === 'string'){
        return "Not a Number"
    } else{
        return "Is a Number"
    };
   });
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let readyToLaunch = launchStatus.innerHTML = "<span style='color: green;'>Shuttle is ready for launch</span>";
    let notReadyToLaunch = launchStatus.innerHTML = "<span style='color: red;'>Shuttle not ready for launch!</span>";
   //take in a document parameter and string representing the pilot, copilot, fuel level and cargo mass. update the shuttle requierments.
   //fuelLevel needs to be higher than 10,000 liters. Change faultyItems to visible. Update fuel status stating there is not enough fuel for the journey. Change text of h2 element launch status to "Shuttle not ready for launch" and color to red.
   //cargoMass needs to be less than 10,000 kg. Change fualtyItems to visible. Update cargo status staing there is too much mass for takeoff. launchStatus = "Shuttle not ready for launch", Color Red
   //if shuttle is ready to launch change text of launchStatus to green and display "Shuttle is ready for launch"
   if(validateInput(pilot) = "Not a Number"){
    pilotStatus.innerHTML = `${pilot} Ready!`
    launchStatus = readyToLaunch
   } else {
    launchStatus = notReadyToLaunch
   };
   if(validateInput(copilot) = "Not a Number"){
    copilotStatus.innerHTML = `${copilot} Ready!`
    launchStatus = readyToLaunch
   } else {
    launchStatus = notReadyToLaunch
   };
   if(validateInput(fuelLevel) = "Is a Number" && fuelLevel >= 10001){
    fuelStatus.innerHTML = `Fuel level high enough for launch`
    launchStatus = readyToLaunch
   } else {
    fualtyItems.innerHTML = visible
    fuelStatus.innerHTML = `You only filled the fuel to ${fuelLevel}. Fuel level must be filled over 10,000 liters.`
    launchStatus = notReadyToLaunch
   };
   if(validateInput(cargoLevel) ="Is a Number" && cargoLevel >= 10000){
    cargoStatus.innerHTML = `Cargo mass low enough for launch`
    launchStatus = readyToLaunch
   } else {
    list = visible
    cargoStatus.innerHTML = `You loaded ${cargoLevel}. We can only carry 10,000 kilograms.`;
    launchStatus = notReadyToLaunch
   };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
