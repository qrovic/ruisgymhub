const repairData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Equipment Repairs',
        data: [5, 8, 10, 7, 12, 9],
        fill: false, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 2 
    }]
};


const ctxline = document.getElementById('repairLineGraph').getContext('2d');
const repairLineGraph = new Chart(ctxline, {
    type: 'line', 
    data: repairData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category', 
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                type: 'linear', 
                title: {
                    display: true,
                    text: 'Number of Repairs'
                }
            }
        }
    }
});