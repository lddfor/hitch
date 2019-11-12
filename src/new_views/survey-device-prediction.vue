<template>
  <div class="devic_prediction">
    <title-message inputName="智能预测"></title-message>
    <el-row :gutter="10">
      <el-cascader
        style="width: 300px"
        size="mini"
        v-model="value1"
        :options="demoCascader"
        @change="handleChangeCasader"></el-cascader>
    
    </el-row>
    <el-row class="row-bg">
      <el-col :span="8">
        <h4 style="text-align: center;font-weight: 700;font-size: 16px">设备运行状态评估</h4>
        <div>
          <chart :id="'lowHitch'" :option="radarEcharts" class="chart"></chart>
        </div>
        <h5>选择设备整体或独立部件</h5>
        <div>
          <el-select v-model="svalue" placeholder="请选择评估对象" @change="selectOne">
            <el-option label="工业泵组" value="工业泵组"></el-option>
            <el-option label="电机" value="电机"></el-option>
            <el-option label="离心泵" value="离心泵"></el-option>
          </el-select>
        </div>
        <h5>删除异常点</h5>
        <!--optionAll-->
        <el-select v-model="valueAll" multiple placeholder="请选择" style="width: 350px">
          <el-option
            v-for="(item) in optionAllSelect"
            :key="item.label"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <div style="margin-top: 10px">
          <el-date-picker
            v-model="valueTime"
            type="datetime"
            placeholder="选择时间">
          </el-date-picker>
        </div>
        <el-button type="primary" style="margin-top: 16px">
          开始评估
        </el-button>
      </el-col>
      
      
      <el-col :span="8">
        <h4 style="text-align: center;font-weight: 700;font-size: 16px">设备劣化趋势预测</h4>
        <div>
          <chart :id="'lowHitch3'" :option="pieEcharts" class="chart"></chart>
        </div>
        
        <h5>选择评估对象</h5>
        <div>
          <el-select v-model="svalue2" placeholder="请选择评估对象">
            <el-option label="工业泵组" value="工业泵组"></el-option>
            <el-option label="离心压缩机组" value="离心压缩机组"></el-option>
            <el-option label="往复式压缩机组" value="往复式压缩机组"></el-option>
            <el-option label="螺杆压缩机组" value="螺杆压缩机组"></el-option>
            <el-option label="烟气轮机组" value="烟气轮机组"></el-option>
          </el-select>
        </div>
        
        <div style="margin-top: 10px">
          <el-date-picker
            v-model="valueTime2"
            type="datetime"
            placeholder="选择时间">
          </el-date-picker>
        </div>
        <el-button type="primary" style="margin-top: 16px">
          开始评估
        </el-button>
      </el-col>
      
      
      <el-col :span="8">
        <h4 style="text-align: center;font-weight: 700;font-size: 16px">健康度评估</h4>
        <div>
          <div style="display: flex;">
            <div style="flex: 1;">
              <chart :id="'ringEcharts4'" :option="ringEcharts" class="chart" style="height:28vh"></chart>
            </div>
            <div style="flex: 1;">
              <chart :id="'sharpPieTypeHitch'" :option="ringEcharts2" class="chart"
                     style="height:28vh"></chart>
            </div>
          </div>
        </div>
        
        <h5>选择评估对象</h5>
        <div>
          <el-select v-model="svalue3" placeholder="请选择评估对象">
            <el-option label="滚动轴承" value="滚动轴承"></el-option>
            <el-option label="齿轮箱" value="齿轮箱"></el-option>
            <el-option label="电机" value="电机"></el-option>
            <el-option label="往复式压缩机活塞杆" value="往复式压缩机活塞杆"></el-option>
            <el-option label="往复式压缩机热力参数" value="往复式压缩机热力参数"></el-option>
            <el-option label="往复式压缩机气阀" value="往复式压缩机气阀"></el-option>
          </el-select>
        </div>
        <h5>删除异常点</h5>
        
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1">电机驱动端速度有效值</el-checkbox>
          <el-checkbox v-model="checked2">电机驱动端加速度峰峰值</el-checkbox>
          <el-checkbox v-model="checked3">电机非驱动端速度有效值</el-checkbox>
          <el-checkbox v-model="checked4">螺杆压缩机组</el-checkbox>
          <el-checkbox v-model="checked5">烟气轮机组</el-checkbox>
        </div>
        <el-date-picker
          v-model="valueTime5"
          type="datetime"
          placeholder="选择时间">
        </el-date-picker>
        <el-button type="primary" style="margin-top: 16px">
          开始评估
        </el-button>
      
      </el-col>
    </el-row>
  </div>
</template>

<!--<chart :id="'lowHitch'" :option="pieEcharts" class="chart"></chart>-->
<script>
  import chart from '~/common/chart.vue';
  import predictionForm from '../components/survey/PredictionForm';
  import titleMessage from '~/common/title-message.vue';
  import echarts from 'echarts';
  
  export default {
    name: 'survey-device-prediction',
    components: {
      chart,
      predictionForm,
      titleMessage
    },
    data() {
      return {
        valueTime5: '',
        ringEcharts: {
          backgroundColor: '#1f1d1d',
          series: [{
            name: '预测',
            type: 'pie',
            radius: ['60%', '75%'],
            avoidLabelOverlap: true,
            silent: true,
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 30,
              name: '未发生',
              itemStyle: {
                normal: {
                  color: '#23bd68',
                  opacity: .4
                }
              },
              label: {
                normal: {
                  formatter: '0.86',
                  textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#23bd68'
                  }
                }
              }
            },
              {
                value: 100,
                name: ' 已捕捞',
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                      offset: 0,
                      color: '#23bd68'
                    }, {
                      offset: 1,
                      color: '#23bd68'
                    }]),
                    borderColor: '#23bd68',
                    borderWidth: 2,
                    
                  }
                },
                label: {
                  normal: {
                    formatter: '\n\n曲轴箱轴承',
                    textStyle: {
                      fontSize: 12,
                      color: '#23bd68'
                    },
                    padding: [33, 4, 12, 4],
                  }
                }
              }
            ]
          }]
        },
        ringEcharts2: {
          backgroundColor: '#1f1d1d',
          series: [{
            name: '预测',
            type: 'pie',
            radius: ['60%', '75%'],
            avoidLabelOverlap: true,
            silent: true,
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 30,
              name: '未发生',
              itemStyle: {
                normal: {
                  color: '#FF8C00',
                  opacity: .4
                }
              },
              label: {
                normal: {
                  formatter: '0.73',
                  textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#FF8C00'
                  }
                }
              }
            },
              {
                value: 100,
                name: ' 已捕捞',
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                      offset: 0,
                      color: '#FF8C00'
                    }, {
                      offset: 1,
                      color: '#FF8C00'
                    }]),
                    borderColor: '#FF8C00',
                    borderWidth: 2,
                    
                  }
                },
                label: {
                  normal: {
                    formatter: '\n\n电机轴承',
                    textStyle: {
                      fontSize: 12,
                      color: '#FF8C00'
                    },
                    padding: [33, 4, 12, 4],
                  }
                }
              }
            ]
          }]
        },
        //雷达图
        radarEcharts: {
          backgroundColor: '#1f1d1d',
          title: {
            // text: '基础雷达图'
          },
          legend: {
            top: '10px'
          },
          grid: {
            top: '10%'
          },
          tooltip: {},
          // legend: {
          //   // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          // },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                // backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            radius: 70,
            indicator: [
              { name: '一级进排气阀状态', max: 1 },
              { name: '二级进排气阀状态', max: 1 },
              { name: '曲轴箱状态', max: 1 },
              { name: '发动机状态', max: 1 },
              { name: '活塞杆状态', max: 1 },
            ]
          },
          series: [{
            name: '',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [0.85, 0.79, 0.89, 0.76, 0.78, 0.77],
                name: ''
              },
              // {
              //   value: [0.75, 0.89, 0.79, 0.79, 0.88, 0.97],
              //   name: '实际状态'
              // }
            ]
          }]
        },
        svalue: '',
        svalue2: '',
        svalue3: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        options3: [
          {
            id: 3133,
            label: '苏东-7站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31331,
                label: 'SD7-YS-1',
                nodeAttributes: {
                  type: 'device'
                }
              },
              {
                id: 31332,
                label: 'SD7-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31333,
                label: 'SD7-YS-3',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3134,
            label: '苏东-8站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31341,
                label: 'SD8-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31342,
                label: 'SD8-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31343,
                label: 'SD8-YS-3',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31344,
                label: 'SD8-YS-4',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31345,
                label: 'SD8-YS-5',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3135,
            label: '苏东-10站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31351,
                label: 'SD10-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31352,
                label: 'SD10-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31353,
                label: 'SD10-YS-3',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31354,
                label: 'SD10-YS-4',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31355,
                label: 'SD15-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31356,
                label: 'SD17-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3136,
            label: '苏东-11站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31361,
                label: 'SD11-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31362,
                label: 'SD11-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3137,
            label: '苏东-12站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31371,
                label: 'SD12-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31372,
                label: 'SD12-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3138,
            label: '苏东-13站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31381,
                label: 'SD13-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31382,
                label: 'SD13-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 3139,
            label: '苏东-14站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 31391,
                label: 'SD14-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              },
              {
                id: 31392,
                label: 'SD14-YS-2',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          },
          {
            id: 31310,
            label: '苏东-21站',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 313101,
                label: 'SD21-YS-1',
                nodeAttributes: {
                  type: 'organization'
                }
              }
            ]
          }
        ],
        options4: [
          {
            id: 31331,
            label: 'SD7-YS-1',
            nodeAttributes: {
              type: 'device'
            }
          },
          {
            id: 31332,
            label: 'SD7-YS-2',
            nodeAttributes: {
              type: 'organization'
            }
          },
          {
            id: 31333,
            label: 'SD7-YS-3',
            nodeAttributes: {
              type: 'organization'
            }
          }
        ],
        valueAll: [],
        optionAllSelect: [],
        optionAll: [
          {
            label: '电机驱动端速度有效值',
          },
          {
            label: '电机驱动端加速度峰峰值',
          },
          {
            label: '电机非驱动端速度有效值'
          },
          {
            label: '电机非驱动端加速度峰峰值'
          },
          {
            label: '2倍电源频率幅值'
          },
          {
            label: '离心泵驱动端速度有效值'
          },
          {
            label: '离心泵驱动端加速度峰峰值'
          },
          {
            label: '离心泵非驱动端速度有效值'
          },
          {
            label: '叶轮通过频率幅值'
          },
        ],
        pieEcharts: {
          backgroundColor: '#1f1d1d',
          title: {
            text: '设备劣化趋势预测',
            x: 'left',
            textStyle: {
              fontSize: '14px'
            },
            
          },
          grid: {
            left: '10%',
            top: '25%',
            bottom: '15%',
            right: '5%',
          },
          legend: {
            type: 'scroll',
            data: ['当前', '预测',],
            itemWidth: 18,
            itemHeight: 12,
            textStyle: {
              color: '#fff',
              fontSize: 11
            },
            top: '5',
            right: '50'
          },
          yAxis: [
            {
              type: 'value',
              position: 'right',
              splitLine: {
                show: false
              }
              ,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              }
            },
            {
              type: 'value',
              position: 'left',
              nameTextStyle: {
                color: '#00FFFF'
              },
              splitLine: {
                show: false,
                lineStyle: {
                  type: 'dashed',
                  color: 'rgba(135,140,147,0.8)'
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(135,140,147,0.8)'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                formatter: '{value}',
                color: '#fff',
                fontSize: 14
              }
            },
          ],
          xAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(135,140,147,0.8)',
                }
              },
              axisLabel: {
                inside: false,
                textStyle: {
                  color: '#fff',// x轴颜色
                  fontWeight: 'normal',
                  fontSize: '14',
                  lineHeight: 22
                }
                
              },
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            },
            {
              type: 'category',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: false
              },
              splitLine: {
                show: false
              },
              //-----
              data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            },
          ],
          series: [
            {
              'name': '预测',
              'type': 'line',
              'smooth': true,
              'yAxisIndex': 1,
              'lineStyle': { 'type': 'solid' },
              'data': [50, 52, 52, 52, 52, 58, 52, 55, 54, 52, 52, 52, 43, 52, 52, 52, 20, 52, 52, 52, 52, 52, 55, 52, 52, 23, 52, 52, 52, 52, 52],
              'itemStyle': {
                'normal': { 'color': '#00f8ff' }
              }
            },
            {
              'name': '当前',
              'type': 'line',
              'smooth': true,
              'yAxisIndex': 1,
              'lineStyle':
                { 'type': 'solid' },
              'data': [44, 54, 49, 56, 49, 61, 44, 60, 47, 57, 54, 46, 39, 48, 41, 32, 48, 65, null, null, null, null, null, null, null, null, null, null, null, null],
              'itemStyle': { 'normal': { 'color': '#00f15a' } }
            }, {
              'name': ' ',
              'type': 'line',
              'smooth': true,
              'yAxisIndex': 1,
              'lineStyle': { 'type': 'dashed' },
              // 'data': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 65, 57, 81, 41, 72, 92, 51, 74, 46, 38, 59, 63, 60, 56],
              'itemStyle': { 'normal': { 'color': '#0696f9' } }
            }],
        },
        valueTime: '',
        valueTime2: '',
        checked1: '',
        checked2: '',
        checked3: '',
        checked4: '',
        checked5: '',
        demoCascader: [
          {
            id: 11,
            label: '第三采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 111,
                label: '第一天然气处理厂',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 1111,
                    label: '增压站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 11111,
                        label: '7#',
                        nodeAttributes: {
                          type: 'device'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 112,
                label: '作业二区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 1121,
                    label: '桃2-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 11211,
                        label: '1#',
                        nodeAttributes: {
                          type: 'device'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 21,
            label: '第四采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 211,
                label: '作业一区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2111,
                    label: '苏36-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21111,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21112,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21113,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21114,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2112,
                    label: '苏36-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21121,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21122,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2113,
                    label: '苏36-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21131,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21132,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 212,
                label: '作业二区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2121,
                    label: '苏6-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21211,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21212,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2122,
                    label: '苏6-7站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21221,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21222,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21223,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21224,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2123,
                    label: '苏东41-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21231,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21232,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21233,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21234,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2124,
                    label: '苏东41-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21241,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21242,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2125,
                    label: '苏东41-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21251,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21252,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2126,
                    label: '苏东41-3站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21261,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21262,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2127,
                    label: '苏东41-3站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21271,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21272,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2128,
                    label: '苏东41-4站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21281,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21282,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 213,
                label: '作业三区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2131,
                    label: '苏54-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21311,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21312,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21313,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21314,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2132,
                    label: '苏54-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21321,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21322,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21323,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 31,
            label: '第五采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 313,
                label: '作业三区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 3133,
                    label: '苏东-7站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31331,
                        label: 'SD7-YS-1',
                        nodeAttributes: {
                          type: 'device'
                        }
                      },
                      {
                        id: 31332,
                        label: 'SD7-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31333,
                        label: 'SD7-YS-3',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3134,
                    label: '苏东-8站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31341,
                        label: 'SD8-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31342,
                        label: 'SD8-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31343,
                        label: 'SD8-YS-3',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31344,
                        label: 'SD8-YS-4',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31345,
                        label: 'SD8-YS-5',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3135,
                    label: '苏东-10站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31351,
                        label: 'SD10-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31352,
                        label: 'SD10-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31353,
                        label: 'SD10-YS-3',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31354,
                        label: 'SD10-YS-4',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31355,
                        label: 'SD15-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31356,
                        label: 'SD17-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3136,
                    label: '苏东-11站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31361,
                        label: 'SD11-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31362,
                        label: 'SD11-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3137,
                    label: '苏东-12站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31371,
                        label: 'SD12-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31372,
                        label: 'SD12-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3138,
                    label: '苏东-13站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31381,
                        label: 'SD13-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31382,
                        label: 'SD13-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3139,
                    label: '苏东-14站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31391,
                        label: 'SD14-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31392,
                        label: 'SD14-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 31310,
                    label: '苏东-21站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 313101,
                        label: 'SD21-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    methods: {
      handleChangeCasader() {
      
      },
      selectOne(val) {
        this.valueAll = [];
        if (val === '工业泵组') {
          this.optionAllSelect = this.optionAll.slice(0);
          this.optionAll.slice(0)
            .map((item) => {
              this.valueAll.push(item.label)
            })
        } else if (val === '电机') {
          this.optionAllSelect = this.optionAll.slice(0, 5);
          
          this.optionAll.slice(0, 5)
            .map((item) => {
              this.valueAll.push(item.label)
            })
        } else if (val === '离心泵') {
          this.optionAllSelect = this.optionAll.slice(5);
          this.optionAll.slice(5)
            .map((item) => {
              this.valueAll.push(item.label)
            })
        }
      },
    },
    mounted() {
    
    }
  };
</script>


<style lang="scss" scoped>
  .devic_prediction {
    .row-bg {
      margin-top: 10px;
    }
  }
  
  .chart {
    min-width: 150px;
    width: 100%;
    min-height: 200px;
    padding-left: 10px;
    width: 100%;
  }
</style>
