// PM2.5 data for the next 7 days (1-7 October 2024)
const pm25Data = [29.34, 29.75, 29.77, 29.46, 28.64, 27.49, 26.34]; // Your predicted data
const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

// Create a chart
const ctx = document.getElementById('pm25Chart').getContext('2d');
const pm25Chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'PM2.5 Levels',
            data: pm25Data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
