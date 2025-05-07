// Dados do gráfico de desmatamento (exemplo)
const dataDesmatamento = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
        label: 'Área desmatada (km²)',
        data: [7000, 8500, 9000, 9500, 10000], // Dados de exemplo
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'line',
    data: dataDesmatamento,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Ano'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Área desmatada (km²)'
                },
                beginAtZero: true
            }
        }
    }
};

// Criar gráfico no canvas
const ctx = document.getElementById('graficoDesmatamento').getContext('2d');
new Chart(ctx, config);
