<template>
  <div class="page-survey-device-analysis">
    <div class="top-element">
      <div class="top-element-left">
        <div class="device-overview-image">
          <img v-if="a" src="/static/images/01.png" alt style="width: 100%;height: 50vh"/>
          <img v-else src="/static/images/new_pid_image.png" alt style="width: 100%;height: 50vh"/>
        </div>
        <div style="margin-top: 0px">
          <el-link @click="changeImgClcik('all')" :underline="false" style="padding-bottom: 2px">
            <span v-bind:class="{ active: isActive }">设备概览图</span>
          </el-link>
          <el-link :underline="false" @click="changeImgClcik('pid')" v-bind:class="{ active: !isActive }"
                   style="margin-left: 20px">
            <span> 工艺pid</span>
          </el-link>
          <el-link type="primary" style="float: right">
            <!-- 以前是图谱分析   然后是变成人工诊断-->
            <router-link to="/manual-diagnosis/device/analysis/analysis">人工诊断</router-link>
          </el-link>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="报警记录" name="first">
            <AlarmListSmall></AlarmListSmall>
          </el-tab-pane>
          <!--<el-tab-pane label="故障记录" name="second">-->
          <!--<DeviceFaultListSmall></DeviceFaultListSmall>-->
          <!--</el-tab-pane>-->
        
        </el-tabs>
      </div>
      <div class="top-element-right">
        
        <div style="display: flex; height: 55vh;margin-left: 10px" class="tab-body">
          <el-tabs v-model="activeNameRight" @tab-click="handleClick" style="width: 100%">
            <el-tab-pane label="运行状态" name="one" style="background: #1f1d1d;height: 43vh">
              <div @click="shakeEchartsClick">
                <span
                  style="font-size: 24px; font-weight: 700; color: #62C89B;margin-left: 18px;margin-top: 16px">优</span>
                <chart :id="'low3Hitch'" :option="radarEcharts" class="chart" style="height: 45vh"></chart>
              </div>
            </el-tab-pane>
            <el-tab-pane label="部件健康度" name="two" lazy style="background: #1f1d1d;height: 43vh">
              <div @click="shakeEchartsClick">
                <chart @click="shakeEchartsClick" :id="'low1Hitch'" :option="ringEcharts" class="chart"></chart>
                <chart @click="shakeEchartsClick" :id="'low2Hitch'" :option="ringEcharts2" class="chart"></chart>
              </div>
            </el-tab-pane>
            <el-tab-pane label="设备状态" name="three" lazy style="background: #1f1d1d;height: 43vh">
              <div style="display: flex;flex-direction: column;">
                <div style="display: flex;">
                  <div
                    style="flex: 1;padding-top: 20px; justify-content: center;align-items: center;text-align: center">
                    <span style="margin: 0 0 0 20px;">设备运行时长</span>
                    <el-select v-model="value" placeholder="请选择时间" style="margin: 20px;">
                      <el-option label="最近一天" value="最近一天"></el-option>
                      <el-option label="最近一月" value="最近一月"></el-option>
                      <el-option label="最近一年" value="最近一年"></el-option>
                    </el-select>
                    <div @click="shakeEchartsClick">
                      <chart :id="'ringEcharts4'" :option="ringEcharts4" class="chart" style="height:25vh"></chart>
                    </div>
                  </div>
                  <div
                    style="flex: 1;padding-top: 20px; justify-content: center;align-items: center;text-align: center">
                    <span style="margin: 0 0 0 20px;">设备利用率</span>
                    <el-select v-model="value2" placeholder="请选择时间" style="margin: 20px;">
                      <el-option label="最近一天" value="最近一天"></el-option>
                      <el-option label="最近一月" value="最近一月"></el-option>
                      <el-option label="最近一年" value="最近一年"></el-option>
                    </el-select>
                    <chart :id="'sharpPieTypeHitch'" :option="sharpPieEcharts" class="chart"
                           style="height:25vh"></chart>
                  
                  </div>
                </div>
              </div>
            
            </el-tab-pane>
            <el-tab-pane label="基础信息" name="four" lazy style="background: #1f1d1d;height: 43vh">
              <div class="basic-info">
                <h3 style="margin: 0;">基础信息</h3>
                <div style="min-width: 305px;">
                  <ul class="survey-device-details">
                    <li>型号 ：DPC-2803</li>
                    <li>额定功率：473KW</li>
                    <li>额定转速：440rpm</li>
                    <li>转速范围：265～440 rpm</li>
                    <li>缸数：3</li>
                    <li>压缩级数 前期：1级 后期：2级</li>
                    <li>排气压力：3.5MPa</li>
                    <li>排气量：12~32x104Nm3/d</li>
                  </ul>
                </div>
                <el-link type="primary" @click="openEquipment"
                         style="position: absolute;bottom:16px;right: 16px;">详情
                </el-link>
              </div>
            </el-tab-pane>
          </el-tabs>
        
        </div>
        
        <div style="display: flex;height: 15vh;margin-top: 15px" @click="shakeEchartsClick">
          <!-- 注释掉的是原来的 劣化趋势图-->
          <!--<chart :id="'low8Hitch'" :option="pieEcharts" class="chart"></chart>-->
          <chart :id="'low9Hitch33'" :option="newPieCharts" class="chart"></chart>
        </div>
      </div>
      
      
      <!-- 基础信息的详情的弹出框 -->
      <EquipmentRecordDetailDialog :detailDialog="detailDialog" :basicData='curData'></EquipmentRecordDetailDialog>
    </div>
    <div>
      <!--<chart :id="'low9Hitch33'" :option="newPieCharts" class="chart"></chart>-->
    </div>
  </div>

</template>

<script>
  import PowerOnOffRecord from '~/components/survey/PowerOnOffRecord';
  import IndustrialModel from '~/components/survey/IndustrialModel';
  import FaultList from '../components/survey/FaultList';
  import DeviceFaultList from '../components/survey/DeviceFafultList';
  import DeviceFaultListSmall from '../components/survey/DeviceFafultList-small';
  import AlarmList from '~/components/survey/AlarmListForDevice';
  import AlarmListSmall from '~/components/survey/AlarmListForDevice-small';
  import chart from '~/common/chart.vue';
  import EquipmentRecordDetailDialog from '~/components/equipment/EquipmentRecordDetailDialog';
  import echarts from 'echarts';
  
  export default {
    name: 'survey-device-analysis',
    components: {
      IndustrialModel,
      AlarmList,
      chart,
      EquipmentRecordDetailDialog,
      FaultList,
      DeviceFaultList,
      AlarmListSmall,
      DeviceFaultListSmall
    },
    data() {
      return {
        value: '',
        value2: '',
        activeNameRight: 'one',
        activeName: 'first',
        a: 1,
        isActive: true,
        detailDialog: {
          visible: false
        },
        curData: {
          oilField: '长庆油田',
          factory: '第五采气厂',
          workZone: '作业三区',
          station: '苏东-7站',
          deviceType: '整体式压缩机',
          bitNumber: 'SD7-YS-1',
          deviceName: '往复式压缩机',
          deviceModel: 'DPC-2803',
          installWay: '成撬安装',
          produceFactory: '北京杰利阳能源设备制造有限公司',
          deviceFixNumber: 'JW-09-019',
          productTime: 2009.5,
          useTime: 2009.5
        },
        options: [
          {
            value: '1',
            label: '最近一个月'
          },
          {
            value: '2',
            label: '最近三个月'
          },
          {
            value: '3',
            label: '最近一年'
          }
        ],
        value: '',
        radarEcharts: {
          backgroundColor: '',
          title: {
            // text: '基础雷达图'
          },
          grid: {
            left: '15%',
            top: '25%',
            bottom: '15%',
            right: '5%',
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
        ringEcharts: {
          // backgroundColor: '#2C343F',
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
        ringEcharts3: {
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
                  formatter: '优',
                  textStyle: {
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: '#23bd68'
                  }
                }
              }
            },
              {
                value: 100,
                // name: ' 已捕捞',
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
                    // formatter: '\n\n曲轴箱轴承',
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
        ringEcharts4: {
          grid: {
            left: '10%',
            top: '25%',
            bottom: '15%',
            right: '5%',
          },
          
          series: [{
            name: '预测',
            type: 'pie',
            radius: ['40%', '45%'],
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
                  formatter: '657h',
                  textStyle: {
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: '#23bd68'
                  }
                }
              }
            },
              {
                value: 100,
                // name: ' 已捕捞',
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
                  // normal: {
                  //   // formatter: '\n\n曲轴箱轴承',
                  //   textStyle: {
                  //     fontSize: 12,
                  //     color: '#23bd68'
                  //   },
                  //   padding: [33, 4, 12, 4],
                  // }
                }
              }
            ]
          }]
        },
        // 劣化趋势
        pieEcharts: {
          
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            left: '5px',
            right: '5%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            color: 'white',
            axisLabel: {
              textStyle: { //改变刻度字体样式
                color: 'white'
              }
            },
            data: [
              '00:00',
              '01:15',
              '02:30',
              '03:45',
              '05:00',
              '06:15',
              '07:30',
              '08:45',
              '10:00',
              '11:15',
              '12:30',
              '13:45',
              '15:00',
              '16:15',
              '17:30',
              '18:45',
              '20:00',
              '21:15',
              '22:30',
              '23:45'
            ]
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} %',
              textStyle: { //改变刻度字体样式
                color: 'white'
              }
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [
              {
                gt: 0,
                lte: 14,
                color: '#23bd68',  // 这是线条的绿色
                colorAlpha: 1
              },
              {
                gt: 14,
                color: 'white',
                symbol: 'none',
                colorAlpha: 0.6
              }
            ]
          },
          series: [
            {
              name: '',
              type: 'line',
              smooth: true,
              data: [
                50,
                47,
                42,
                43,
                45,
                50,
                92,
                83,
                67,
                65,
                63,
                65,
                67,
                83,
                82,
                83,
                75,
                73,
                72,
                67
              ]
            }
          ]
        },
        // 设备利用率
        sharpPieEcharts: {
          title: {
            // text: '设备利用率',
            x: 'center',
            textStyle: {
              fontStyle: '22px'
            },
            top: '15%'
          },
          grid: {
            left: '10%',
            top: '25%',
            bottom: '15%',
            right: '5%',
          },
          backgroundColor: '',
          tooltip: {
            show: false
          },
          
          series: [
            {
              name: '',
              max: 100,
              type: 'gauge',
              splitNumber: 5,
              radius: '45%',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.25, '#23bd68'], [0.5, '#23bd68'], [.75, '#23bd68'],
                    [1, '#ccc', 0.3]],
                  width: 10
                }
              },
              splitLine: {
                show: false,
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                formatter: function (v) {
                  switch (v + '') {
                    // case '10': return '低';
                    // case '50': return '中';
                    // case '90': return '高';
                    default:
                      return '';
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 'bolder'
                }
              },
              axisTick: {            // 坐标轴小标记
                show: false
              },
              pointer: {
                width: 4,
                length: '80%'
              },
              detail: {
                offsetCenter: [0, '90%'],//相对于仪表盘中心的偏移位置
                textStyle: {
                  fontSize: 14,
                  color: '#23bd68',
                  fontWeight: 'bold'
                },
                formatter: '{value}%'
              },
              data: [{ value: 74 }]
            }
          ]
        },
        
        
        newPieCharts: {
          backgroundColor: '',
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
      };
    },
    methods: {
      shakeEchartsClick() {
        this.$router.push('/smart-application/prediction')
        
      },
      handleClick(item) {
      
      },
      openEquipment: function () {
        this.detailDialog.visible = true;
      },
      changeImgClcik: function (name) {
        if (name === 'all') {
          this.a = 1;
          this.isActive = true
        } else {
          this.a = 0;
          this.isActive = false
        }
      }
    }
    
  };
</script>


<style lang="scss" scoped>
  
  .active {
    color: #5075ed;
    border-bottom: 1px solid #5075ed;
  }
  
  .el-tabs__content {
    background: red !important;
  }
  
  .page-survey-device-analysis {
    height: calc(100vh - 145px);
    display: flex;
    flex-direction: column;
    .el-tabs__content {
      background: #1f1d1d !important;
    }
    .basic-info {
      padding-left: 20px;
      height: 100%;
      ul {
        margin: 0;
        padding: 0;
        li {
          line-height: 25px;
          list-style: none;
        }
      }
    }
    .top-element {
      height: 100vh;
      width: 100%;
      
      display: flex;
      /*min-height: ;*/
      .top-element-left {
        flex: 7;
        .device-overview-image {
          img {
            width: 100%;
            height: 60vh;
          }
        }
      }
      .top-element-right {
        flex: 3;
      }
    }
    .bottom-element {
      margin-top: 60px;
      width: 100%;
      height: 35vh;
      display: flex;
      .bottom-element-left {
        flex: 1;
      }
      .bottom-element-right {
        flex: 1;
      }
    }
  }
  
  .chart {
    min-width: 150px;
    min-height: 170px;
    padding-left: 10px;
    width: 100%;
  }
  
  .tab-body {
    .el-tabs__header {
      marign: 0px 0px 5px;
    }
  }

</style>
