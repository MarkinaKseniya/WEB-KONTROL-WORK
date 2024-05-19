
function navigateToBot() {
    window.location.href = 'https://t.me/SuperTest12345_bot';
}

document.addEventListener('DOMContentLoaded', function () {
    const userData = {
        labels: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
        datasets: [{
                label: 'Число пользователей',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 3,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointBorderColor: '#000',
                data: [100, 200, 400, 600, 800, 1000],
            },
            {
                label: 'Пользовательская активность',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 3,
                pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                pointBorderColor: '#000',
                data: [10, 20, 30, 40, 50, 60],
            }
        ]
    };

    const userOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#000'
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#000'
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }]
        }
    };

    const userCtx = document.getElementById('userGraph').getContext('2d');

    const userGraph = new Chart(userCtx, {
        type: 'line',
        data: userData,
        options: userOptions
    });

    function filterChartData() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        const startIndex = userData.labels.indexOf(startDate);
        const endIndex = userData.labels.indexOf(endDate);

        const filteredLabels = userData.labels.slice(startIndex, endIndex + 1);
        const filteredData1 = userData.datasets[0].data.slice(startIndex, endIndex + 1);
        const filteredData2 = userData.datasets[1].data.slice(startIndex, endIndex + 1);

        userGraph.data.labels = filteredLabels;
        userGraph.data.datasets[0].data = filteredData1;
        userGraph.data.datasets[1].data = filteredData2;
        userGraph.update();
    }

    document.getElementById('startDate').addEventListener('change', filterChartData);
    document.getElementById('endDate').addEventListener('change', filterChartData);
});
