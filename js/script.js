var bMapAPIKey = "Am2YdL2HMpJ-SEBUO_An7ZvZcXEirmjOallLyKkTdZlwp0yTgZ__SJ12-0Rx4rKP";

var map;
function initMap() {
    "use strict";

    var storelocation = new Microsoft.Maps.Location(6.716394901275635, 79.9130859375),

     map = new Microsoft.Maps.Map('#myMap', {
        // credentials: 'Your Bing Maps Key',
        center: storelocation,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 14,
        disableScrollWheelZoom: true,
        disablePanning: true
    });

    //Create an infobox at the center of the map but don't show it.
    var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);


    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(storelocation, {
        title: 'Online Shopimo in Sri Lanka',
        subTitle: '(Fashion Store)',
        text: "S"
    });

    pin.metadata = {
        title: 'Online Shopimo, Sri Lanka',
        description: 'No: 234/12, Galle Road, Panadura'
    };

    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin, 'click', function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    });

    //Add the pushpin to the map
    map.entities.push(pin);

}