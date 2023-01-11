var isDataInit = false;
var destinations = [];
var destinationDistanceByAir = [];
var destinationDistanceByLand = [];
var destinationDescriptionData = [];
var selectedDestination = 0;

function initDestinationDescriptionData(){
    destinationDescriptionData = [`It is one of the country's largest cities and is a bustling port. Its harbour is provided by the sheltered strait between Mactan Island and the coast. The country's oldest settlement, it is also one of its most historic and retains much of the flavour of its long Spanish heritage.`,
        `Siquijor is the third smallest province in the Philippines. It is recognized as a center of mystic power and a capital of mystic activities and black magic. Siquijor is known for the infamous agimat and gayuma.`,
        `Boracay is a tropical island about an hour's flight from Metro Manila in the Philippines. It has superb long white sand beaches and is one of the country's most developed tourist destinations. White Beach, Boracay placed 2nd in Condé Nast Traveler's 25 Best Island Beaches in the World: Readers' Choice Awards in 2020.`];
}

function initDestinationDistanceByAir(){
    destinationDistanceByAir = [`566`,`663`,`307`];
}

function initDestinationDistanceByLand(){
    destinationDistanceByLand = [`826`,`958`,`441`];
}

function initDestinationAreas(){
    destinations = [`Cebu`,`Siquijor`,`Boracay`,`El Nido`,`Coron`,`Chocolate Hills`,
        `Davao City`,`Puerto Princesa`,`Baguio`,`Ilo-Ilo`,`Vigan`,`Bacolod`,
        `Dumaguete`,`Tagaytay`,`Mactan`,`Apo Island`,`Sagada`,`Zamboanga`,
        `Legazpi`,`Baler`];
}

function initData(){
    initDestinationDescriptionData();
    initDestinationDistanceByAir();
    initDestinationDistanceByLand();
    initDestinationAreas();
    isDataInit = true;
}

function getSelectedDestination(){
    selectedDestination = document.getElementById(`destinationArea`).value;
}

function getDestinationArea(selectedDestination){
    return destinations[selectedDestination];
}
function getDestinationDescriptionData(selectedDestination){
    return destinationDescriptionData[selectedDestination];
}
function getDestinationDistanceByAir(selectedDestination){
    return destinationDistanceByAir[selectedDestination];
}
function getDestinationDistanceByLand(selectedDestination){
    return destinationDistanceByLand[selectedDestination];
}

function displayDestinationArea(){
    document.getElementById(`destinationName`).innerHTML = getDestinationArea(selectedDestination);
    console.log(getDestinationArea(selectedDestination));
}
function displayDestinationDescriptionData(){
    document.getElementById(`destinationDescription`).innerHTML = getDestinationDescriptionData(selectedDestination);
    console.log(getDestinationDescriptionData(selectedDestination));
}
//Need to implement Destination Radio Button
function displayDestinationDistance(){
    // document.getElementById(`destinationDescription`).innerHTML = getDestinationDescriptionData(selectedDestination);
    // console.log(getDestinationDescriptionData(selectedDestination));
    
}

function displayOutput(){
    if (isDataInit) {
        getSelectedDestination();
        displayDestinationArea();
        displayDestinationDescriptionData();
    } else {
        alert(`Data was not initialized...`);
    }
}