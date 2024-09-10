// Scrolling live feed
const liveFeed = document.querySelector('.live-feed');
let feedHeight = liveFeed.scrollHeight;
let start = 0;

function scrollFeed() {
    start -= 1;
    if (Math.abs(start) >= feedHeight) {
        start = liveFeed.clientHeight;
    }
    liveFeed.style.transform = `translateY(${start}px)`;
}


setInterval(scrollFeed, 50);

// OpenStreetMap integration
function initializeMap() {
    const map = L.map('map').setView([31.1048, 77.1734], 13); // Sample coordinates (Shimla, Himachal Pradesh)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([31.1048, 77.1734]).addTo(map)
        .bindPopup('Landslide prone area in Shimla')
        .openPopup();
    
        navigator.geolocation.watchPosition(alert,error);
        let marker,circle,zoomed;
        function alert(pos) {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const accuracy = pos.coords.accuracy;
            if(marker){
                map.removalLayer(marker);
                map.removalLayer(circle);
            }
            marker = L.marker([lat, lng],{color: 'red'}).addTo(map);
            circle = L.circle([lat, lng],{color: 'red',radius: accuracy}).addTo(map);
            if(!zoomed){
                zoomed = map.fitBounds(circle.getBounds());
            }
        
            map.setView([lat, lng]);
        
        }
        function error(err){
            if(err.code === 1){
                alert("please allow geolocation access");
        
            } else {
                alert("cannot get current location");
            }
        }
}

document.addEventListener('DOMContentLoaded', initializeMap);
