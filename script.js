// Casualty Data Chart
var ctx1 = document.getElementById('casualtyChart').getContext('2d');
var casualtyChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Casualties',
            data: [75, 120, 20, 50, 40, 0, 60],
            backgroundColor: '#4287f5',
            borderColor: '#357ae8',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Death Count Chart
var ctx2 = document.getElementById('deathChart').getContext('2d');
var deathChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Deaths',
            data: [40, 25, 35, 10, 5, 8, 40],
            backgroundColor: '#4287f5',
            borderColor: '#357ae8',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Generate PDF button functionality
document.getElementById('generate-pdf').addEventListener('click', function () {
    window.print();  // Simulate PDF generation (can be expanded with libraries like jsPDF)
});



// Initialize OpenStreetMap
// OpenStreetMap integration

const map = L.map('map').setView([31.1048, 77.1734], 13); // Sample coordinates (Shimla, Himachal Pradesh)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
color: 'red'
}).addTo(map);

L.marker([31.1048, 77.1734],{color :'red'}).addTo(map)
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
document.addEventListener('DOMContentLoaded', initializeMap);