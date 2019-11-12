const data = 0;

let combinedBaseOption = {
  "tooltip": {
    "trigger": "item",
    "formatter": "{a} <br/>{b}: {c} ({d}%)",
    "show": false
  },
  "color": [
    "#00c5c8",
    "#0092ff",
    "#84caff",
    "#fce648",
    "#fd2d8a"
  ],
  "series": [{
      "type": "pie",
      "selectedMode": "single",
      "hoverAnimation": false,
      "radius": [
        0,
        "22%"
      ],
      "center": [
        "20%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inner",
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 60,
          "name": "已接入",

        },
        {
          "value": 440,
          "name": "未接入"
        }
      ]
    },
    {
      "type": "pie",
      "radius": [
        "25%",
        "30%"
      ],
      "center": [
        "20%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 60,
          "name": "压缩机"
        },
        {
          "value": 440,
          "name": "压缩机"
        }
      ]
    },
    {
      "type": "pie",
      "selectedMode": "single",
      "hoverAnimation": false,
      "radius": [
        0,
        "22%"
      ],
      "center": [
        "50%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inner",
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 8,
          "name": "停机"
        },
        {
          "value": 50,
          "name": "开机"
        }
      ]
    },
    {
      "type": "pie",
      "radius": [
        "25%",
        "30%"
      ],
      "center": [
        "50%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 8,
          "name": "压缩机"
        },
        {
          "value": 50,
          "name": "压缩机"
        }
      ]
    },
    {
      "type": "pie",
      "selectedMode": "single",
      "hoverAnimation": false,
      "radius": [
        0,
        "22%"
      ],
      "center": [
        "80%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inner",
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 12,
          "name": "非完好"
        },
        {
          "value": 8,
          "name": "停机"
        },
        {
          "value": 38,
          "name": "完好"
        }
      ]
    },
    {
      "type": "pie",
      "radius": [
        "25%",
        "30%"
      ],
      "center": [
        "80%",
        "80%"
      ],
      "label": {
        "normal": {
          "show": true,
          "formatter": "{b}\n{c}",
          "align": "left",
          "textStyle": {
            "fontSize": 10
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "data": [{
          "value": 10,
          "name": "中"
        },
        {
          "value": 2,
          "name": "差"
        },
        {
          "value": 8,
          "label": {
            "normal": {
              "show": false,
              "position": "inner"
            }
          }
        },
        {
          "value": 6,
          "name": "良"
        },
        {
          "value": 32,
          "name": "优"
        }
      ]
    }
  ]
}

let combinedOption = (data0, data1, data2) => {
  let option = Object.assign({}, combinedBaseOption);
  if (data0) {
    data0.innerData && (option.series[0].data = data0.innerData)
    data0.outerData && (option.series[1].data = data0.outerData)
  }
  if (data1) {
    data1.innerData && (option.series[2].data = data1.innerData)
    data1.outerData && (option.series[3].data = data1.outerData)
  }
  if (data2) {
    data2.innerData && (option.series[4].data = data2.innerData)
    data2.outerData && (option.series[5].data = data2.outerData)
  }
  return option;
}


export {
  data,
  combinedOption
}
