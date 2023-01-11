var destinations = [];
var selectedDestination = 0;

function initDestinationDescriptionData() {
    
}

function initDestinationDistanceByAir() {
    
}

function initDestinationDistanceByLand() {
    
}

function initDestinationAreas() {
    destinations = [`Cebu`,`Siquijor`,`Boracay`];
}

function getSelectedDestination(){
    selectedDestination = document.getElementById(`destinationArea`).value;
}

function getDestinationArea(selectedDestination){
    return destinations[selectedDestination];
}

function displayDestinationArea(){
    initDestinationAreas();
    getSelectedDestination();
    document.getElementById(`destinationName`).innerHTML = getDestinationArea(selectedDestination);
    console.log(getDestinationArea(selectedDestination));
}