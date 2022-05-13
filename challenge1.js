
// Eerste dataset (bars water en brandstof)
const labels1 = [
    'Water',
    'Brandstof',
  ];

  const data1 = {
    labels: labels1,
    datasets: [{
      label: 'Voorraad water en brandstof (Liters)',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [1359, 4560],
    }]
  };

  const config1 = {
    type: 'bar',
    data: data1,
    options: {}
  };

  const myChart1 = new Chart(
    document.getElementById('chart1'),
    config1
  );

  //tweede dataset gemiddelde snelheid (gemiddelde verbruikte brandstof die dag)
// eerst definieren 
const labels2 = ['Maandag', 'Dinsdag', 'Woensdag','Donderdag','Vrijdag','Zaterdag','Zondag'] ;
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Gemiddelde kilometers afgelegd (KM)',
      data: [1238, 1302, 1198, 1206, 1500, 1298, 1320],
      borderColor: 'rgb(255, 99, 132)' ,
     // backgroundColor: ,
      yAxisID: 'y',
    },
    {
      label: 'Gemiddelde brandstof verbruikt (liters)',
      data: [965, 1003, 933, 966, 1300, 985, 1030],
      borderColor: 'rgb(28, 46, 74)		'	,
     // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y',
    }
  ]
}; 

const config2 = {
    type: 'line',
    data: data2,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: true,
      plugins: {
        title: {
          display: true,
          text: 'Gemiddelde snelheid en gemiddeld verbruik brandstof (Per dag)'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        }
         
        },
    }

}
; 

  const myChart2 = new Chart(
    document.getElementById('chart2'),
    config2
  );

// Chart 3, donut met verbruikt voedsel
const data3 = {
    labels: [
      'Granen',
      'Sap',
      'Aardappelen',
      'Groenten',
      'vers fruit',
      'Geconserveerd fruit',
      'Bier'
    ],
    datasets: [{
      label: 'Gemiddeld verbruik voedsel per categorie',
      data: [50, 35, 90, 85, 70, 38, 100],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Voedselvoorraad over per categorie',
      data: [200, 100, 180, 69, 128, 140, 300],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(28, 46, 74)	',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

const config3 = {
    type: 'radar',
    data: data3,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };
  
  const myChart3 = new Chart(
    document.getElementById('chart3'),
    config3
  ); 



  // Chart 4: Bar chart gemiddelde temperatuur op mars de afgelopen dagen 
    // ma-zo 
   
const labels4 = ['Maandag', 'Dinsdag', 'Woensdag','Donderdag','Vrijdag','Zaterdag','Zondag'];
  const data4 = {
    labels: labels4,
    datasets: [{
      label: 'Gemiddelde temperatuur op Mars deze week',
      data: [-65, -59, -61, -60, -56, -63, -62],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
      ],
        borderColor: [
          'rgb(255, 99, 132)',
      
        ],
        borderWidth: 1
      }]
    };

    const config4 = {
        type: 'bar',
        data: data4,
        options: {
          scales: {
                y: {
                  beginAtZero: true
                }
              }

            
        }
      };

const myChart4 = new Chart(
      document.getElementById('chart4'),
      config4
); 