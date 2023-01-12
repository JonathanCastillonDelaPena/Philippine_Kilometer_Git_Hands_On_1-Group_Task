var isDataInit = false;
var destinations = [];
var destinationDistanceByAir = [];
var destinationDistanceByLand = [];
var destinationDescriptionData = [];
var selectedDestination = 0;

function initDestinationDescriptionData(){
    destinationDescriptionData = [`It is one of the country's largest cities and is a bustling port. Its harbour is provided by the sheltered strait between Mactan Island and the coast. The country's oldest settlement, it is also one of its most historic and retains much of the flavour of its long Spanish heritage.`
        ,`Siquijor is the third smallest province in the Philippines. It is recognized as a center of mystic power and a capital of mystic activities and black magic. Siquijor is known for the infamous agimat and gayuma.`
        ,`Boracay is a tropical island about an hour's flight from Metro Manila in the Philippines. It has superb long white sand beaches and is one of the country's most developed tourist destinations. White Beach, Boracay placed 2nd in Condé Nast Traveler's 25 Best Island Beaches in the World: Readers' Choice Awards in 2020.`
        ,`El Nido is a coastal town in Palawan. El Nido comprises 45 islands and islets; limestone cliffs are also found here, which form a Karst backdrop similar to those found in Ha Long Bay, Krabi and Guilin.`
        ,`Coron is one of Palawan's most popular beach and island destinations. This paradise-like getaway comprises of the eastern half of Busuanga Island, Coron Island, and 50 other islets within the vicinity, all of which are separate from the main Palawan Island.`
        ,`The hills are located throughout the towns of Carmen, Batuan and Sagbayan and consist of about 1,776 mounds of the same general shape. During the dry season when precipitation in inadequate, the grass-covered hills turn chocolate brown, hence the name in reference to a branded confection.`
        ,`Lying at the southeastern corner of the Philippines, Davao City, the largest city in the world (244,000 hectares), is considered the Orchid Capital of the Philippines. It is also famous for fruits and as a take-off point for climbing Mt.`
        ,`Puerto Princesa is the capital city of the Province of Palawan. It is the center of trade and commerce, communication, education and government service. It divides Palawan into the northern and southern parts. A component city of the province, it constitutes about 17 percent of the total land mass of the province.`
        ,`Baguio is a highland city of 345,000 people (2015) in the province of Benguet, Philippines. Due to its cool mountain weather relative to the rest of the country, it is considered the "Summer Capital of the Philippines." The city is abundant in pine trees, so it is nicknamed the City of Pines.`
        ,`A more modern take on Iloilo's capital is the “City of Love”. This is a playful extension of the province's “Heart of the Philippines” tagline, and one that banks fully on the locals' friendliness and 'soft-spokenness'.`
        ,`Vigan is famous for its well-preserved Spanish Colonial town, historical Vigan tourist spots, and delicious food and delicacies. Because of its charm, it has been inscribed as one of the UNESCO World Heritage Sites.`
        ,`It's an urban center that prides itself on its eclectic mix of heritage, cultural and religious sites. Bacolod is called the City of Smiles because of its Masskara Festival and the locals who also have a smiling face.`
        ,`Dumaguete is known for its quiet, laid-back atmosphere and its many beautiful parks and gardens. The city is also home to a large number of universities, making it a great place for retirees who want to continue to enjoy a busy and active social life. Dumaguete is also a great place to retire because it's affordable`
        ,`Tagaytay City is always on top of the list of weekend destinations for city dwellers. It's known for its stunning views, gastronomic food trips, and family-friendly activities.`
        ,`Mactan Island is a hub of world-class resorts, breathtaking diving sites, pristine beaches and islets that are home to Philippines luxury resorts, and unique Filipino dining experiences.`
        ,`Apo Island is a small, pristine island surrounded by calm and clear waters. It is perfect for underwater activities such as snorkeling and diving; it has even been rated as one of the best dive sites in the world.`
        ,`Sagada Mountain Province is home to the famous historical and mysterious hanging coffins, scenic and calming mountain valleys, rice terraces, limestone caves, stunning waterfalls, and friendly Igorots that let people discover its rich culture and traditions preserved over time.`
        ,`Zamboanga City is in the Mindanao region of the Philippines. Known as the "City of Flowers" (the etymology of Zamboanga comes from the Malay word jambangan means garden of flowers), it is now one of the most important and busiest port cities in the Philippines.`
        ,`Located in the province of Albay in the Bicol region, it is known as the gateway to see the world-famous Mayon Volcano. Travelers from different parts of the world over come to Legazpi to see the perfect cone shape of one of the most active volcanoes in the world.`
        ,`Baler is a small town in Aurora Province on the east coast of Luzon in the Philippines. It is situated between the Sierra Madre mountain range and the Pacific Ocean, in the vast plain at the mouth of Baler's Bay.`];
}

function initDestinationDistanceByAir(){
    destinationDistanceByAir = [`566`,`663`,`307`,`407`,`300`,`908`
        ,`963`,`583`,`210`,`453`,`335`,`468`
        ,`627`,`56`,`567`,`200`,`208`,`850`
        ,`339`,`151`];
}

function initDestinationDistanceByLand(){
    destinationDistanceByLand = [`826`,`958`,`441`,`618`,`439`,`1,169`
        ,`1,489`,`798`,`243`,`655`,`403`,`708`
        ,`930`,`65`,`822`,`221`,`389`,`1,331`
        ,`467`,`269`];
}

function initDestinationAreas(){
    destinations = [`Cebu`,`Siquijor`,`Boracay`,`El Nido`,`Coron`,`Chocolate Hills`
        ,`Davao City`,`Puerto Princesa`,`Baguio`,`Ilo-Ilo`,`Vigan`,`Bacolod`
        ,`Dumaguete`,`Tagaytay`,`Mactan`,`Apo Island`,`Sagada`,`Zamboanga`
        ,`Legazpi`,`Baler`];
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
}
function displayDestinationDescriptionData(){
    document.getElementById(`destinationDescription`).innerHTML = getDestinationDescriptionData(selectedDestination);
}

function displayDestinationDistanceAndTranspoType(){
    let isByAirSelected = document.getElementById(`airRadioBtn`).checked;
    let isByLandSelected = document.getElementById(`landRadioBtn`).checked;
    let transpoType = null;
    let distance = null;

    if (isByAirSelected) {
        transpoType = `Air`;
        distance = getDestinationDistanceByAir(selectedDestination);
    } else if (isByLandSelected){
        transpoType = `Land`;
        distance = getDestinationDistanceByLand(selectedDestination);
    } else {
        transpoType = `Error...`;
        distance = `Error...`;
    }
    document.getElementById(`transpoType`).innerHTML = transpoType;
    document.getElementById(`destinationDistance`).innerHTML = distance;
}

function displayDestinationImg(){
    document.getElementById(`destinationImg1`).src = `images/${getDestinationArea(selectedDestination)}1.jpg`;
    document.getElementById(`destinationImg2`).src = `images/${getDestinationArea(selectedDestination)}2.jpg`;
}

function displayOutput(){
    if (isDataInit) {
        getSelectedDestination();
        displayDestinationArea();
        displayDestinationImg();
        displayDestinationDistanceAndTranspoType();
        displayDestinationDescriptionData();
    } else {
        alert(`Data was not initialized...`);
    }
}