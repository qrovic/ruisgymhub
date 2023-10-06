const customerData = {
    datasets: [{
        data: [15, 10, 25, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)', 
            'rgba(255, 206, 86, 0.6)', 
            'rgba(75, 192, 192, 0.6)' 
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)' 
        ],
        borderWidth: 1 
    }],
    labels: ['Non-Member Walk-in', 'Member Walk-in', 'Non-Member Monthly', 'Member Monthly'],
};


const ctxpie = document.getElementById('customerPieChart').getContext('2d');
const customerPieChart = new Chart(ctxpie, {
    type: 'pie', // Pie chart
    data: customerData,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});       
 