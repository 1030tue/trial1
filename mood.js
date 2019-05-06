var canvas = document.getElementById('canvas');
var data = {
    labels: ["4/31", "5/1", "5/2", "5/3", "5/4" ],//x-Axis
    datasets: [
        {
            type: 'line',
            label: "Positivity Level", //y1 values
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 80, 0, 100],
        },
        {
            label: "Negativity Level",// y2 values
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [35, 41, 20, 100, 0],
        }
    ]
};




function adddata(newData){
  let n = myLineChart.data.labels.length
  let today = new Date();
	myLineChart.data.datasets[0].data[n] = newData;
  myLineChart.data.datasets[1].data[n] = 100 - newData;
  myLineChart.data.labels[n] = (today.getMonth()+1)+'/'+today.getDate();
  myLineChart.update();
}

const option = {
	showLines: true
};

// const myLineChart = Chart.Line(canvas,{
// 	data:data,
//   options:option
// });

const myLineChart = new Chart(canvas,{
  type: 'bar',
	data:data,
  options:option
});

document.addEventListener('submit', e =>{
  e.preventDefault()
  let newData = document.querySelector('input').value
  adddata(newData)
  e.target.reset()
})
