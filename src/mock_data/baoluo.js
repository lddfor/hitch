function randomData(i) {
  now = new Date(+now + oneDay);
  value =  Math.random() * 210;
  
  return {
    name: now.toString(),
    value: [
      i,
      i % 100 === 0 ? 800 : Math.round(value)
    ]
  }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData(i));
}

let graphOption = (data) => {
  return {
    title: {
      // text: '动态数据 + 时间坐标轴'
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "20px",
      bottom: "20px"
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return  params.value[1];
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      // type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [{
      name: '模拟数据',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data
    }]
  };
  
};


export {
  data,
  graphOption
}
