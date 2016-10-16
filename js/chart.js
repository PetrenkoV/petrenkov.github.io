google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Новые заявки');
    data.addColumn('number', 'В расмотрении');
    data.addColumn('number', 'Заключенные сделки');

    data.addRows([
        [0, 0.3, 0, 2],
        [0.5, 1.2, 0, 2],
        [2, 2.3, 0, 2],
        [3, 1.25, 0, 2],
        [4, 0.8, 0, 2],
        [5, 1.5, 0, 2]
    ]);

    var options = {
        hAxis: {
            <!--  title: 'Time' -->
        },
        vAxis: {
            <!--  title: 'Popularity' -->
        },
        backgroundColor: '#f0ede6',
        legend: { position: 'bottom' },
        colors: ['#ff6d64', '#75ef7c', 'c0c0c0'],
        width: 580,
        height: 400,
        chartArea: { width: '80%', height: '80%' }

    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
