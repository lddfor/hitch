let data = [];
let graphOption = () => {
  return {
    title: {
      // text: 'Step Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['Step Start', 'Step Middle', 'Step End']
    },
    grid: {
      top:"10px",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    xAxis: {
      type: 'category',
      data: ['2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00',
        '2009/6/13 0:00', '2009/6/13 1:00', '2009/6/13 2:00',]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'RPM',
        type:'line',
        step: 'start',
        data:[1120, 1120, 1120, 2000,6000, 6000, 6000,6000,6000,6000,7000,7000,7000,7000,7000,7000,7000,7000,7000,7000,6900,7000,7000,7000,6900,7000,7000,7000,6900,7000,7000,7000,6900,7000]
      }
    ]
  }
  
};
export {
  data,
  graphOption
}
