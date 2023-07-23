window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Trex',
            location: {
                lat: 35.149058,
                lng: 129.065263,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.149058}; longitude: ${129.065263};`);
        model.setAttribute('gltf-model', './assets/trex/scene.gltf');
        model.setAttribute('rotation', '0 179 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.01 0.01 0.01');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
