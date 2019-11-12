/**
 * 这里是专业分析的所有的图表
 * lidongdong
 */

//  震动趋势图
let shakeEcharts = () => {
  return {
    'title': {'text': '', 'show': false},
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 12, 'textAlign': 'left'}
    },
    'color': ['#5075ED', '#5075ED', '#ff9f7f', '#ffdb5c', '#67e0e3', '#39b5e3'],
    'grid': {'top': 30, 'bottom': 30, 'left': 30, 'right': 50},
    'toolbox': {'show': true, 'feature': {'mark': {'show': true}}},
    'xAxis': [{
      'type': 'time',
      'splitLine': {'show': false},
      'data': [],
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969'},
      'splitNumber': 0
    }],
    'yAxis': [{
      'type': 'value',
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      //纵坐标的刻度线
      'axisLabel': {'color': '#696969'},
      // 'nameTextStyle': {'color': '#696969'},
      //纵坐标的刻度线style
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dashed'}},
      // 'name': '',
      name:'m/s*2',
      nameLocation:'end',
      nameTextStyle:{
        color:"black",
        fontSize:12,
        padding:0
      },
      // 'max': 40
    }],
    'series': [{
      'color': '#5075ED', // 鼠标hover上的小圆点的颜色
      'name': '加速度趋势分析',
      'type': 'line',
      'smooth': true,
      'data': [
        // {'value': ['2019-02-22', 28.45]},
        // {'value': ['2019-03-01', 0]},
        // {'value': ['2019-03-08', 0]},
        // {'value': ['2019-03-15', 0]},
        // {'value': ['2019-03-22', 0]},
        // {'value': ['2019-03-29', 0]},
        // {'value': ['2019-04-05', 0]},
        // {'value': ['2019-04-12', 0]},
        // {'value': ['2019-04-19', 0]},
        // {'value': ['2019-04-26', 0]},
        // {'value': ['2019-05-03', 0]},
        // {'value': ['2019-05-10', 0]},
        // {'value': ['2019-05-17', 0]}
      ]
      ,
      'symbolSize': '8',
      'showAllSymbol': true,
      'lineStyle': {'color': '#5075ED'}, // 波形的颜色 主颜色
      // 这个是分割点的 波形图上线的小圆点
      'symbol': 'circle',
      // 'symbol': 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      // 这个代表的是警戒线
      'markLine': {
        'symbolSize': 0,
        'data': [
          {   // 警戒线的颜色 最小值  (预警值)
            'yAxis': 17.43,
            'lineStyle': {'color': '#ffdb5c', 'type': 'solid'}
          },
          {   // 警戒线的颜色 最大值
            'yAxis': 29.26, 'lineStyle':
              {'color': '#ef5350', 'type': 'solid'}
          }
        ]
      }
    }]
  };
};

// 复制留存的
let shakeEchartsCopy = () => {
  return {
    'title': {'text': '', 'show': false},
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 12, 'textAlign': 'left'}
    },
    'color': ['#5075ED', '#5075ED', '#ff9f7f', '#ffdb5c', '#67e0e3', '#39b5e3'],
    'grid': {'top': 30, 'bottom': 30, 'left': 30, 'right': 50},
    // 'toolbox': {'show': true, 'feature': {'mark': {'show': true}}},
    'xAxis': [{
      'type': 'time',
      'splitLine': {'show': false},
      'data': [],
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969'},
      'splitNumber': 0
    }],
    'yAxis': [{
      'type': 'value',
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      //纵坐标的刻度线
      'axisLabel': {'color': '#696969'},
      'nameTextStyle': {'color': '#696969'},
      //纵坐标的刻度线style
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dashed'}},
      'name': '',
      'max': 40
    }],
    'series': [{
      'color': '#5075ED', // 鼠标hover上的小圆点的颜色
      'name': '加速度趋势分析',
      'type': 'line',
      'smooth': true,
      'data':
        [
          {'value': ['2019-02-22', 28.45]},
          {'value': ['2019-03-01', 26.38]},
          {'value': ['2019-03-08', 27.68]},
          {'value': ['2019-03-15', 24.86]},
          {'value': ['2019-03-22', 1.83]},
          {'value': ['2019-03-29', 12.85]},
          {'value': ['2019-04-05', 34.85]},
          {'value': ['2019-04-12', 17.84]},
          {'value': ['2019-04-19', 30.38]},
          {'value': ['2019-04-26', 7.15]},
          {'value': ['2019-05-03', 20.13]},
          {'value': ['2019-05-10', 29.54]},
          {'value': ['2019-05-17', 26.33]}
        ]
      ,
      'symbolSize': '8',
      'showAllSymbol': true,
      'lineStyle': {'color': '#5075ED'}, // 波形的颜色 主颜色
      // 这个是分割点的 波形图上线的小圆点
      'symbol': 'circle',
      // 'symbol': 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      // 这个代表的是警戒线
      'markLine': {
        'symbolSize': 0,
        'data': [
          {   // 警戒线的颜色 最小值  (预警值)
            'yAxis': 17.43,
            'lineStyle': {'color': '#ffdb5c', 'type': 'solid'}
          },
          {   // 警戒线的颜色 最大值
            'yAxis': 29.26, 'lineStyle':
              {'color': '#ef5350', 'type': 'solid'}
          }
        ]
      }
    }]
  };
};

// 震动频谱图
let frequencyEcharts = () => {
  return {
    // 这个是图标对象容器的位置
    'grid': {'left': 60, 'top': 30, 'bottom': 30, 'right': 70},
    'title': {},
    // 这个是鼠标显示内容的颜色
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 14, 'textAlign': 'left'}
    },
    'xAxis': {
      // 'axisLabel': {'show': true, 'color': '#696969'},
      // 'axisLine': {'lineStyle': {'color': '#cccccc'}},
      // 'splitLine': {'show': true}
      axisTick: {
        show: false
      },
      axisLine: {
        show: true
      },
      axisLabel: {
        show: true,
        // interval: 'auto',//坐标显示间隔
        textStyle: {
          color: '#666666',
          fontSize: 10,
        }
      },
      name:'频率(Hz)',
      nameLocation:'end',
      nameTextStyle:{
        color:"black",
        fontSize:12,
        padding:0
      },
      //这个是为了解决echarts图表上的x轴显示不全的问题
      boundaryGap: ['0%', '-6%'],
      //    这个是x轴的分割线
    },
    'yAxis': {
      // 'axisLabel': {formatter: '{value} Hz','showMaxLabel': false, 'color': '#696969'},
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dotted'}},
      name:'幅值(m/s2)',
      nameLocation:'end',
      nameTextStyle:{
        color:"black",
        fontSize:12,
        padding:0
      },
      // boundaryGap: ['-1%', '-1%']
    },
    // 'toolbox': {'show': true, 'feature': {'dataZoom': {'yAxisIndex': 'none'}}},
    'series': [{
      'data': [],
      'type': 'line',
      'symbol': 'circle',
      'symbolSize': 2,
      'color': '#5075ED'
      //   这个是图标波形图的线颜色. 主要的
    }]
  };
};

let frequencyEchartsCopy = () => {
  return {
    // 这个是图标对象容器的位置
    'grid': {'left': 40, 'top': 10, 'bottom': 10, 'right': 20},
    'title': {},
    // 这个是鼠标显示内容的颜色
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 14, 'textAlign': 'left'}
    },
    'xAxis': {
      'axisLabel': {'show': false, 'color': '#696969'},
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'splitLine': {'show': false}
    },
    'yAxis': {
      'axisLabel': {'showMaxLabel': false, 'color': '#696969'},
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dotted'}}
    },
    'toolbox': {'show': true, 'feature': {'dataZoom': {'yAxisIndex': 'none'}}},
    'series': [{
      'data':[],
      'type': 'line',
      'symbol': 'circle',
      'symbolSize': 2,
      'color': '#5075ED'
      //   这个是图标波形图的线颜色. 主要的
    }]
  };
};
// 故障趋势图
let hitchEcharts = () => {
  return {
    'title': {'text': '', 'show': false},
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 12, 'textAlign': 'left'}
    },
    'color': ['#0fa7e4', '#20ba61', '#ff9f7f', '#ffdb5c', '#67e0e3', '#39b5e3'],
    'grid': {'top': 30, 'bottom': 70, 'left': 50, 'right': 50},
    'toolbox': {'show': true, 'feature': {'mark': {'show': true}}},
    'xAxis': [{
      'type': 'time',
      'splitLine': {'show': false},
      'data': [],
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969', 'rotate': 45},
      'splitNumber': 0
    }],
    'yAxis': [{
      'type': 'value',
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969'},
      'nameTextStyle': {'color': '#696969'},
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dashed'}},
      'name': '',
      'max': 20
    }],
    'series': [{
      'color': '#5075ED',
      'name': '0',
      'type': 'line',
      'smooth': true,
      'data': [{'name': '2019-02-24', 'value': ['2019-02-24', 9.16]}, {
        'name': '2019-03-03',
        'value': ['2019-03-03', 10.14]
      }, {'name': '2019-03-10', 'value': ['2019-03-10', 7.26]}, {
        'name': '2019-03-17',
        'value': ['2019-03-17', 3.99]
      }, {'name': '2019-03-24', 'value': ['2019-03-24', 1.88]}, {
        'name': '2019-03-31',
        'value': ['2019-03-31', 1.02]
      }, {'name': '2019-04-07', 'value': ['2019-04-07', 10.75]}, {
        'name': '2019-04-14',
        'value': ['2019-04-14', 6.38]
      }, {'name': '2019-04-21', 'value': ['2019-04-21', 5.47]}, {
        'name': '2019-04-28',
        'value': ['2019-04-28', 1.47]
      }, {'name': '2019-05-05', 'value': ['2019-05-05', 4.82]}, {
        'name': '2019-05-12',
        'value': ['2019-05-12', 7.21]
      }, {'name': '2019-05-19', 'value': ['2019-05-19', 4.99]}],
      'symbolSize': '6',
      'showAllSymbol': true,
      'lineStyle': {'color': '#5075ED'},
      'symbol': 'circle',
      'markLine': {
        'symbolSize': 0,
        'data': [
          {
            'yAxis': 4.73,
            'lineStyle': {'color': '#ffdb5c', 'type': 'solid'}
          },
          {
            'yAxis': 8.92, 'lineStyle':
              {'color': '#ef5350', 'type': 'solid'}
          }]
      }
    }]
  };
};

// 柱状图
let columnarEcharts = () => {
  return {
    'title': {'text': '', 'show': false},
    'tooltip': {
      'trigger': 'axis',
      'backgroundColor': '#fff',
      'borderColor': '#eee',
      'borderWidth': 1,
      'textStyle': {'color': '#989898', 'fontSize': 12, 'textAlign': 'left'},
      'axisPointer': {'type': 'shadow'}
    },
    'color': ['#20ba61', '#ff9f7f', '#ffdb5c', '#67e0e3', '#39b5e3'],
    'grid': {'left': 50, 'top': 20, 'bottom': 70},
    'toolbox': {'show': true, 'feature': {'mark': {'show': true}}},
    'xAxis': [{
      'type': 'category',
      'splitLine': {'show': false},
      // 'data': ['轴承故障', '不对中', '不平衡', '机械松动', '机泵串轴', '基础松动', '润滑不良', '转子磨碰', '气蚀'],
      'data': ['轴承故障', '不对中', '不平衡', '机械松动', '机泵串轴', '基础松动'],
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969', 'rotate': 0},
      // 这个是rotate 显示的将x轴的坐标点进行旋转
      'boundaryGap': [0, 0.01],
      //  boundaryGap  分别表示数据最小值和最大值的延伸范围
      'splitNumber': 0
    }],
    'yAxis': [{
      'type': 'value',
      'axisLine': {'lineStyle': {'color': '#cccccc'}},
      'axisLabel': {'color': '#696969'},
      'nameTextStyle': {'color': '#696969'},
      'splitLine': {'lineStyle': {'width': 1, 'color': '#efefef', 'type': 'dashed'}},
      'axisTick': {'show': false},
      'max': 100
    }],
    'series': [{
      'name': '',
      'type': 'bar',
      'color': '#5075ED',
      'barWidth': '50%',
      'label': {'show': true, 'position': 'top', 'color': '#696969'},
      'data': [28, 57, 68, 46, 28, 58]
    }]
  };
};

// 雷达图
let radarEcharts = (dataObj = {
  alarm_num_score: 10,
  alarm_type_score: 10,
  comprehensive_score: 10,
  fault_prob_score: 10,
  fault_type_score: 10,
  gross_value_alarm_score: 10
}) => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '综合健康度:低值报警',
      textStyle: {
        fontSize: '14'
      }
    },
    tooltip: {
      position:  ['65%', 30],
    },
    legend: {
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
      splitNumber: 1,
      // shape: 'circle',
      indicator: [
        {name: '故障类型', max: 22},
        {name: '故障概率', max: 22},
        {name: '总值报警', max: 22},
        {name: '报警类型', max: 22},
        {name: '报警数量', max: 22},
        {name: '综合加权得分', max: 22},
      ]
    },
    series: [{
      name: '',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [dataObj.fault_type_score.toFixed(2),
            dataObj.fault_prob_score.toFixed(2),
            dataObj.gross_value_alarm_score.toFixed(2),
            dataObj.alarm_type_score.toFixed(2),
            dataObj.alarm_num_score.toFixed(2),
            dataObj.comprehensive_score.toFixed(2)],
          name: '系统评级',
          itemStyle: {
            normal: {
              color: 'rgba(80, 117, 237, .6)'
            }
          },
          areaStyle: {
            normal: {
              color: 'rgba(80, 117, 237, .8)'
            }
          }
        },
        
      ]
    }]
  };
};

// 仪表盘 大数据的四个仪表盘 暂时是

let gaugeEcharts = (value = 1, beforeColor = '#5075ED', backColor = '#e3eafd') => {
  return {
    title: {'text': '', 'show': true},
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
      show: false,
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: true},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        startAngle: 210,
        endAngle: -30,
        // radius : 180,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 4,
            radius: 100,
            color: [[value.toFixed(2) / 10, beforeColor], [1, backColor]]
          }
        },
        axisTick: {            // 坐标轴小标记
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          show: false,
          textStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bolder'
          }
        },
        pointer: {
          width: 2,
          length: '20%',
        },
        title: {
          show: false, // 这是t仪表盘里的显示
        },
        detail: {
          show: false, // 是否显示下边的那个30
        },
        // 用地板函数 保证指针颜色是正确的
        data: [{value: (Math.floor(value * 10) / 10).toFixed(2) * 10, name: '完成率'}]
      }
    ]
  };
};

export default {
  shakeEcharts,        // 震动趋势图
  frequencyEcharts,    // 震动频谱图
  hitchEcharts,        // 故障趋势图
  columnarEcharts,     // 柱状图
  radarEcharts,        // 雷达图
  gaugeEcharts,
  shakeEchartsCopy,     // 新copy 的图
  frequencyEchartsCopy
};
