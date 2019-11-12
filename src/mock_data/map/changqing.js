const geoCoordMap = {
  第三采气厂: [107.734657,38.638525],
  第四采气厂: [109.281755,40.220617],
  第五采气厂: [109.999249,38.086515],
  作业三区: [109.999249,38.086515],
  "苏东-7站": [109.989188,38.080011],
  "苏东-8站": [110.012185,38.062967],
  "苏东-9站": [110.038631,38.118857],
  "苏东-10站": [109.998099,38.118175],
  "苏东-11站": [109.975677,38.104775],
  "苏东-12站": [109.920198,38.100686],
  "苏东-13站": [109.961305,38.12408],
  "苏东-14站": [110.130905,38.143607],
  "苏东-21站": [110.070539,38.038189],
  "SD7-YS-2": [109.98617,38.078619],
  "SD7-YS-1": [109.989188,38.080011],
  "SD7-YS-3": [109.987679,38.085095],

};

const data = [{
    name: "第三采气厂",
    value: 100
  },
  {
    name: "第四采气厂",
    value: 200
  },
  {
    name: "第五采气厂",
    value: 300
  },
];

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

let graphOption = (data) => {

  return {
    tooltip: {
      backgroundColor: 'rgba(8,41,65,0.65)',
      borderWidth: '1',
      borderColor: '#a88a47',
      formatter: function (params) {
        return `
          <b>设备信息概览</b>
          <div>${params.name}</div>
          <div>在线设备比例</div>
          <div>报警设备比例</div>
          <div>故障设备比例</div>
        `
      }
    },
    visualMap: {
      type: 'piecewise',
      itemGap: 4,
      itemWidth: 10,
      itemHeight: 10,
      itemSymbol: "circle",
      left: 10,
      bottom: 20,
      calculable: true,
      color: ['#00e6af', '#1ea9f9', '#fbd657', '#ff315c'],
      textStyle: {
        color: '#fff',
      },
      categories: ['300', '200', '100'],
      pieces: [{
          value: 100,
          label: '存在高高报警',
          color: 'red'
        },
        {
          value: 200,
          label: '存在高报警',
          color: 'orange'
        },
        {
          value: 300,
          label: '设备运行正常',
          color: 'blue'
        },
      ]
    },

    geo: {
      map: 'china',
      top: 10,
      bottom: 10,
      zoom: 20,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#1874a6',
          borderColor: '#245778',
          borderWidth: 1,
          borderType: 'solid',
          shadowColor: 'rgba(26, 187, 224, .5)',
          shadowBlur: 2,
          label: {
            show: true,
            textStyle: {
              color: '#fff'

            }

          }

        },
        emphasis: {
          areaColor: '#1874a6',
          borderColor: '#1abfe5',
          borderWidth: 2,
          borderType: 'solid',
          shadowColor: 'rgba(0, 0, 0, .5)',
          shadowBlur: 10,
          shadowOffsetX: 1,
          shadowOffsetY: 10,
          label: {
            show: true,
            textStyle: {
              color: '#fff'

            }
          }

        }
      },
    },
    series: [{
      selectedMode: 'single',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: 12,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          borderWidth: 1
        }
      }
    }]
  }
};

export {
  data,
  graphOption
}
