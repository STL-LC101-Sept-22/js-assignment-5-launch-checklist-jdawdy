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
   document.getElementById('missionTarget').innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(input) {
    //window.addEventListener("click", function(){
    //should take in a string as a parameter and return 'empty', 'not a number', or 'is a number' as appropriate
    let numInput = Number(input);
    if(input === ''){
        return "Empty"
    } else if(isNaN(input)){
        return "Not a Number"
    } else if(isNaN(input) === false){
        return "Is a Number"
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //let readyToLaunch = launchStatus.innerHTML = "<span style='color: green;'>Shuttle is ready for launch</span>";
   //let notReadyToLaunch = launchStatus.innerHTML = "<span style='color: red;'>Shuttle not ready for launch!</span>";
   //take in a document parameter and string representing the pilot, copilot, fuel level and cargo mass. update the shuttle requierments.
   //fuelLevel needs to be higher than 10,000 liters. Change faultyItems to visible. Update fuel status stating there is not enough fuel for the journey. Change text of h2 element launch status to "Shuttle not ready for launch" and color to red.
   //cargoMass needs to be less than 10,000 kg. Change fualtyItems to visible. Update cargo status staing there is too much mass for takeoff. launchStatus = "Shuttle not ready for launch", Color Red
   //if shuttle is ready to launch change text of launchStatus to green and display "Shuttle is ready for launch"
   let launchList = createLaunchListObj(pilot, copilot, fuelLevel, cargoLevel);
   let areInputsValid = true;
   let inputErrorMessage = '';

   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(Number(fuelLevel)) === "Empty" || validateInput(Number(cargoLevel)) === "Empty"){
    areInputsValid = false;
    inputErrorMessage += "All fields are required";
   } 
   if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){ 
    areInputsValid = false;
    if(inputErrorMessage !== ''){
        inputErrorMessage += '\n';
    }
    inputErrorMessage += 'Make sure to enter valid information for each field.'
   };
   if(!areInputsValid) {
    alert(inputErrorMessage);
    list.style.visibility = 'hidden';
    return
   }
   list.style.visibility = 'visible';
   let overallStatus = checkLaunchStatus(document, launchList);
   updateOverallLaunchStatus(document, overallStatus)
};

function createLaunchListObj(pilotInput, copilotInput, fuelLevelInput, cargoLevelInput){
    return {
        pilotItem: {
            satusEle: 'pilotStatus',
            nameLabel: 'Pilot ${pilotInput}',
            statusFunc: function(){
                return {isReady: true, statusLabel: 'is ready'};
            }
        },
        copilotItem: {
            satusEle: 'copilotSatus',
            nameLabel: 'Co-pilot ${copilotInput}',
            statusFunc: function(){
                return {isReady: true, statusLabel: 'is ready'};
            }
        },
        fuelItem: {
            value: Number(fuelLevelInput),
            satusEle: 'fuelStatus',
            nameLabel: 'Fuel Level',
            statusFunc: function(fuelKg){
                if (fuelKg < 10000) {
                return {isReady: false, statusLabel: 'too low'};
                }
                return { isReady: true, statusLabel: 'high enough'}
            }
        },
        cargoItem: {
            value: Number(cargoLevelInput),
            satusEle: 'cargoStatus',
            nameLabel: 'Cargo mass',
            statusFunc: function(cargoKg){
                if (cargoKg < 10000) {
                return {isReady: true, statusLabel: 'low enough'};
                }
                return { isReady: false, statusLabel: 'too heavy'}
            }
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
    console.log(planetsReturned)
    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
