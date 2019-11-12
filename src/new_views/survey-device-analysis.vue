<template>
  <div class="page-survey-device-analysis">
    <div style="display: flex">
      <div style="flex: 1;display:flex; flex-direction:column; ">
        <div style="flex: 9; padding-right: 16px;padding-bottom: 16px;">
          <div class="grid-content device-overview-field">
            <div class="device-overview-image">
              <img v-if="a" src="/static/images/device-overview.png" alt style="width: 100%"/>
              <img v-else src="/static/images/new_pid_image.png" alt style="width: 100%"/>
            </div>
            <div style="margin-top: 10px">
              <el-link @click="changeImgClcik('all')" :underline="false" style="padding-bottom: 2px">
                <span v-bind:class="{ active: isActive }">设备概览图</span>
              </el-link>
              <el-link :underline="false" @click="changeImgClcik('pid')" v-bind:class="{ active: !isActive }" style="margin-left: 20px">
                <span> 工艺pid</span>
              </el-link>
            </div>
            <div class="right">
              <el-link type="primary">
                <!-- 以前是图谱分析   然后是变成人工诊断-->
                <router-link to="/manual-diagnosis/device/analysis/analysis">人工诊断</router-link>
              </el-link>
            </div>
          </div>
        </div>
        <div style="flex: 4; padding-right: 16px;padding-bottom: 16px;">
          <div>
            <div class="grid-content" style="padding-bottom: 0;">
              <!--这里原来是启停机记录   -->
              <IndustrialModel></IndustrialModel>
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column">
        <div style="flex: 1; display: flex; ">
          <div style="flex: 1; padding-right: 16px;    padding-bottom: 16px;">
            <div class="basic-info">
              <div class="grid-content basic-info-field">
                <h3>基础信息</h3>
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
                         style="float: right;margin-top: 10px;margin-bottom: 10px">详情
                </el-link>
              
              </div>
            </div>
          </div>
          <div style="flex: 1;  padding-bottom: 16px;">
            <div class="health-precent">
              <div class="grid-content">
                <h3>滚动轴承健康度</h3>
                <div style="display: flex">
                  <div style="flex: 1">
                    <chart :id="'low1Hitch'" :option="ringEcharts" class="chart"></chart>
                  </div>
                  <div style="flex: 1">
                    <chart :id="'low2Hitch'" :option="ringEcharts2" class="chart"></chart>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="flex: 1; display: flex;">
          <div style="flex: 1;padding-right: 16px;    padding-bottom: 16px;">
            <div class="runtime-record">
              <div class="grid-content">
                <h3>设备运行状态</h3>
                <div>
                  <chart :id="'low3Hitch'" :option="ringEcharts3" class="chart"></chart>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 1;  padding-bottom: 16px;">
            <div class="device-usage">
              <div class="grid-content">
                <h3>设备利用率</h3>
                <div>
                  <el-select v-model="value" placeholder="请选择" size="mini"
                             style="float: right;margin-top: -40px">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div>
                  <chart :id="'sharpPieTypeHitch'" :option="sharpPieEcharts" class="chart"></chart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="flex: 1; display: flex;">
          <div style="flex: 1;padding-right: 16px;    padding-bottom: 16px;">
            <div class="runtime-record">
              <div class="grid-content">
                <h3>设备运行时长</h3>
                <div>
                  <chart :id="'low4Hitch'" :option="ringEcharts4" class="chart"></chart>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 1;  padding-bottom: 16px;">
            <div class="device-usage">
              <div class="grid-content">
                <h3>劣化趋势</h3>
                <div>
                  <chart :id="'low8Hitch'" :option="pieEcharts" class="chart"></chart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设备报警列表 -->
    <div class="device-alarm-list">
      <div class="grid-content" style="padding: 0;">
        <AlarmList></AlarmList>
      </div>
    </div>
    <!-- 设备 故障记录列表 -->
    <div class="device-alarm-list" style="margin-top: 16px">
      <div class="grid-content" style="padding: 0;">
        <div class="search-result-table">
          <DeviceFaultList></DeviceFaultList>
        </div>
      </div>
    </div>
    
    <!-- 基础信息的详情的弹出框 -->
    <EquipmentRecordDetailDialog :detailDialog="detailDialog" :basicData='curData'></EquipmentRecordDetailDialog>
  
  </div>

</template>

<script>
  import PowerOnOffRecord from '~/components/survey/PowerOnOffRecord';
  import IndustrialModel from '~/components/survey/IndustrialModel';
  import FaultList from '../components/survey/FaultList';
  import DeviceFaultList from '../components/survey/DeviceFafultList';
  import AlarmList from '~/components/survey/AlarmListForDevice';
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
      DeviceFaultList
    },
    data() {
      return {
        a: 1,
        isActive:true,
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
        ringEcharts: {
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
              formatter: '{value} %'
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [
              {
                gt: 0,
                lte: 14,
                color: '#23bd68',
                colorAlpha: 1
              },
              {
                gt: 14,
                color: 'gray',
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
          backgroundColor: '#fff',
          tooltip: {
            show: false
          },
          
          series: [
            {
              name: '',
              max: 100,
              type: 'gauge',
              splitNumber: 10,
              radius: '85%',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.25, '#23bd68'], [0.5, '#23bd68'], [.75, '#23bd68'],
                    [1, '#ccc', 0.3]],
                  width: 10
                }
              },
              splitLine: {
                show: false,
                length: 15,
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
                  // color: '#fff',
                  // fontSize: 18,
                  // fontWeight: 'bolder'
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
                offsetCenter: [0, '40%'],//相对于仪表盘中心的偏移位置
                textStyle: {
                  fontSize: 40,
                  color: '#23bd68',
                  fontWeight: 'bold'
                },
                formatter: '{value}%'
              },
              data: [{ value: 74 }]
            }
          ]
        },
        
      };
    },
    methods: {
      openEquipment: function () {
        this.detailDialog.visible = true;
      },
      changeImgClcik:function(name){
        if(name === 'all'){
          this.a = 1;
          this.isActive = true
        }else{
          this.a = 0;
          this.isActive = false
        }
      }
    }
    
  };
</script>


<style lang="scss" scoped>
  .data-view {
  }
  .active{
    color: #5075ed;
    border-bottom: 1px solid #5075ed;
  }
  .page-survey-device-analysis {
    
    h3 {
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
    }
    .device-overview {
      &-field {
        display: flex;
        flex-direction: column;
      }
      &-image {
        flex: 1;
        max-height: 300px;
        img {
          margin: auto;
          height: 100%;
        }
      }
    }
    .basic-info {
      height: 100%;
      ul {
        margin: 0;
        padding: 0;
        li {
          line-height: 1.5;
          list-style: none;
        }
      }
    }
    .health-precent {
      height: 100%;
    }
    .runtime-record {
      height: 100%;
      ul {
        margin: 0;
        padding: 0;
        li {
          line-height: 1.5;
          list-style: none;
        }
      }
    }
    .device-usage {
      height: 100%;
    }
    .device-alarm-list {
      grid-column: 1 / 4;
    }
  }
  
  .grid-content {
    background-color: #fff;
    height: 100%;
    padding: 20px;
    
    h3 {
      line-height: 20px;
    }
    
    p {
      margin: 0;
    }
    
    .right-more {
      text-align: right;
    }
  }
  
  .chart {
    min-width: 150px;
    min-height: 200px;
    padding-left: 10px;
    width: 100%;
  }
  
  .survey-device-details {
    li {
      line-height: 30px !important;
    }
  }
</style>
