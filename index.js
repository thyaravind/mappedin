var mapsSortedByElevation = []
var div = document.getElementById('mapView')
var mapExpanded = false

// options for Mappedin.getVenue
// To get you started we've provided a key and secret that has access to some demo venues.
//  - mappedin-demo-mall
//  - mappedin-demo-retail-2
//  - warehouse-demo
//  - mappedin-demo-city
//  - rail-demo
//  - mappedin-demo-stadium
//  - mappedin-demo-entertainment-park
// Speak with a Mappedin representative when you are ready to get your own key and secret set up with access to your own venues.
// You may need to customize these options with the data provided by Mappedin for your venue.
var venueOptions = {
    clientId: "61e07cd47c5338001d0da250",
    clientSecret: "uIxz9muJSl0496kHXDrE8KaSzK0dKpa4HR2hi04mzHnvpCRH",
    perspective: "Website",
    things: {
        venue: ['slug', 'name'],
        locations: ['name', 'type', 'description', 'icon', 'logo', 'sortOrder'],
        categories: ['name'],
        maps: ['name', 'elevation', 'shortName']
    },
    venue: "geisinger-medical-center"
};

// Options for the MapView constructor
var mapviewOptions = {
    antialias: "AUTO",
    mode: Mappedin.modes.TEST,
};

// Options for search
var searchOptions = {
    key: "",
    secret: ""
}

// Combined all of them to use Mappedin.initalize
var options = {
    mapview: mapviewOptions,
    venue: venueOptions,
    search: searchOptions
}

Mappedin.initialize(options, div);