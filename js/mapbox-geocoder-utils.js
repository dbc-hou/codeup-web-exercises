const MAPBOX_API_KEY = 'pk.eyJ1IjoiZGJjLWhvdSIsImEiOiJja3plZmlxamIzNzE0MnBuZjlyMzRqZjdhIn0.ombBI2IxUTjwKPLIE-3CQw'
const baseURL = 'https://api.mapbox.com';
const endPoint = '/geocoding/v5/mapbox.places/';

var ChapultepecInfo = [
    {streetAddress: '813 Richmond Avenue',
    city: 'Houston',
    stateCode: 'TX',
    zipCode: '77006'}
];

function geoCode(search,token) {
    return fetch(baseURL + endPoint + encodeURIComponent(search) + '.json'+ '?'
        + 'access_token=' + MAPBOX_API_KEY)
        .then(function (res) {
            return res.json();
        }).then(function (data) {
            return data;
        });
}

geoCode(ChapultepecInfo,MAPBOX_API_KEY).then(function (data) {
    console.log(data);
});