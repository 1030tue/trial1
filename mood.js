var canvas = document.getElementById('canvas');
var data = {
    labels: ["4/31", "5/1", "5/2", "5/3", "5/4" ],//x-Axis
    datasets: [
        {
            type: 'line',
            label: "Mood", //y1 values
            fill: false,
            lineTension: 0.5,
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
            type: 'bar',
            label: "Energy",// y2 values
            fill: true,
            backgroundColor: "rgba(255,99,71,0.4)",
            borderColor: "rgba(255,128,128,1)",
            data: [35, 41, 20, 79, 99]
        }
    ]
};



var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

function adddata(newData_p, newData_e){
  let n = myLineChart.data.labels.length
  let today = new Date();
	myLineChart.data.datasets[0].data[n] = newData_p;
  myLineChart.data.datasets[1].data[n] = newData_e;
  myLineChart.data.labels[n] = (today.getMonth()+1)+'/'+today.getDate();
  myLineChart.update();
}

const option = {
	showLines: true,
  onHover: function(evt) {
  var item = myLineChart.getElementAtEvent(evt);
  if (item.length) {
    console.log("onHover",item, evt.type);
    console.log(">data", item[0]._index, data.datasets[0].data[item[0]._index]);
  }
}
};

// const myLineChart = Chart.Line(canvas,{
// 	data:data,
//   options:option
// });

const myLineChart = new Chart(canvas,{
  type: 'bar',
	data:data,
  options:option,
  responsive : true
});

document.addEventListener('submit', e =>{
  e.preventDefault()
  let newData_positivity = document.querySelector('.positivity').value
  let newData_energy = document.querySelector('.energy').value
  let newData_note = document.querySelector('.note').value

  adddata(newData_positivity, newData_energy)
  e.target.reset()
})
