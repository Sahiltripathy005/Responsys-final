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
