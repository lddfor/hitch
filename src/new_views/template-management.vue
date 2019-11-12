<template>
  <div class="template-management">
    <title-message :inputName="titleName"></title-message>
    <div class="template-management-child">
      <!--<div class="management-header">management-header</div>-->
      <!--<div class="management-body">management-header</div>-->
      <el-container>
        <el-header>
          <span class="header-text">常用图表库 </span>
          <span><i class="iconfont icon-tubiao-bingtu"></i>事件占比</span>
          <span><i class="iconfont icon-tubiao-zhuzhuangtu"></i>事件分布</span>
          <span><i class="iconfont icon-tubiao-zhexiantu"></i>事件趋势</span>
        </el-header>
        <el-main>
          
          <el-row :gutter="20">
            <el-col :span="8">
              <el-card class="box-card">
                <!-- 这个是环形图-->
                <chart :id="'lowHitch'" :option="columnarEcharts" class="chart"></chart>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="box-card">
                <chart :id="'mainHitch'" :option="mainEcharts" class="chart"></chart>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="box-card">
                <chart :id="'lineHitch'" :option="lineEcharts" class="chart"></chart>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 16px">
            <el-col :span="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>图表设置</span>
                  <el-button style="float: right; padding: 3px 0" type="text"> </el-button>
                </div>
                <div class="text item" style="height: 328px">
                  <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="图表名称" prop="name">
                      <el-input type="text" size="mini" v-model="ruleForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="展示数据" prop="data">
                      <el-select v-model= "value" placeholder="事件类型" size="mini">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="图表类型" prop="type">
                      <el-select v-model="chartsValue" placeholder="饼图" size="mini">
                        <el-option
                          v-for="item in chartsOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="筛选条件" prop="term">
                      <el-radio v-model="radio" label="1">统一筛选条件</el-radio>
                      <el-radio v-model="radio" label="2">自定义筛选条件</el-radio>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="small">关闭</el-button>
                      <el-button type="primary" size="small">保存</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="box-card" style="height: 443px">
                <div class="text item"  style="text-align: center;cursor: pointer;line-height: 343px">
                  <i class="el-icon-plus"></i>
                </div>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="box-card" style="height: 443px">
                <div  class="text item"  style="text-align: center;cursor: pointer;line-height: 343px">
                  <i class="el-icon-plus"></i>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    
    </div>
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  import chart from '~/common/chart.vue';
  
  export default {
    name: 'template-management',
    components: {
      titleMessage,
      chart
    },
    data() {
      return {
        titleName: '报表',
        ruleForm: {
          name: '',
          data: '',
          type: '',
          term:''
        },
        options: [{
          value: '事件统计',
          label: '事件统计'
        }, {
          value: '事件占比',
          label: '事件占比'
        }, {
          value: '事件分布',
          label: '事件分布'
        }, {
          value: '事件趋势',
          label: '事件趋势'
        }],
        value:"",
        radio:'',
        chartsOptions: [{
          value: '饼图',
          label: '饼图'
        }, {
          value: '柱状图',
          label: '柱状图'
        }, {
          value: '折线图',
          label: '折线图'
        }],
        chartsValue:"",
        // 这个是环形图
        columnarEcharts: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['新建', '误报', '普通商秘', '工作商秘', '核心商秘']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: '新建' },
                { value: 310, name: '误报' },
                { value: 234, name: '普通商秘' },
                { value: 135, name: '工作商秘' },
                { value: 248, name: '核心商秘' }
              ]
            }
          ]
        },
        // 这个是柱状图
        mainEcharts:{
          backgroundColor:'#fff',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#fb9b45'
              }
            }
          },
          toolbox: {
            feature: {
              //dataView: {show: true, readOnly: false},
              //magicType: {show: true, type: ['line', 'bar']},
              //restore: {show: true},
              //saveAsImage: {show: true}
            }
          },
          legend: {
            data:['网站访问量','新增用户数']
          },
          xAxis: [
            {
              type: 'category',
              data: ['18日','19日','18日','20日','21日','22日','23日','24日'],
              axisPointer: {
                type: 'shadow',
                shadowStyle:{
                  color:'rgba(233,242,255,0.3)'
                }
              },
              axisLine:{
                lineStyle:{
                  color: '#ccc'
                }
              },
              axisLabel:{
                textStyle: {
                  color:'#858585'
                }
              },
              axisTick: {
                show:false,
              },
            }
            // xAxis.axisLine.lineStyle.type string[ default: 'solid' ]
          ],
          yAxis: [
            {
              type: 'value',
              name: '（次）',
              min: 0,
              //max: 25,
              //interval: 5,
              axisLabel: {
                formatter: '{value}',
                color:'#858585'
              },
              axisLine:{
                lineStyle:{
                  color: '#ccc'
                }
              },
              splitLine:{
                lineStyle:{
                  type: 'dashed',
                  color: '#e7e7e7'
                }
              },
              splitArea:{
                areaStyle:{
                  color: '#e9f2ff',
                  shadowColor: '#e9f2ff',
                  shadowBlur: 10
                }
        
              },
              axisTick: {
                show:false,
              },
            },
            {
              type: 'value',
              name: '（人）',
              min: 0,
              //max: 250,
              //interval: 50,
              axisLabel: {
                formatter: '{value}',
                color:'#858585'
              },
              axisLine:{
                lineStyle:{
                  color: '#ccc'
                }
              },
      
              splitLine:{
                lineStyle:{
                  type: 'dashed',
                  color: '#fff'
                }
              },
              splitArea:{
                areaStyle:{
                  color: '#e9f2ff',
                  shadowColor: '#e9f2ff',
                  shadowBlur: 10
                }
        
              },
              axisTick: {
                show:false,
              }
            }
          ],
          series: [
            {
              name:'网站访问量',
              type:'bar',
              data:[500,670,400,800,900,600,700,600],
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 0,
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //   offset: 0,
                  //   color: '#67c3f9'
                  // }, {
                  //   offset: 1,
                  //   color: '#3d75e8'
                  // }]),
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 10
                }
              }
            },
            {
              name:'新增用户数',
              type:'line',
              yAxisIndex: 1,
              data:[800,1100,900,1200,900,800,1000,800],
              itemStyle: {
                normal: {
                  color: '#fb9b45',
                  barBorderRadius: 0,
                  lineStyle:{
                    color: '#fb9b45',
                  },
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 10
                }
              },
              symbolSize: 7
            }
          ]
        },
        // 这个是折线图
        lineEcharts: {
          backgroundColor: 'white',
          grid: {
            left: '20',
            right: '20',
            bottom: '30',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            axisLabel: {
              color: '#7691d8',
              fontSize: 16
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            name: '(万人)',
            nameTextStyle: {
              color: '#7691d8',
              fontSize: 14,
              padding: [0, 50, 5, 0]
            },
            interval: 40,
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#7691d8',
              fontSize: 16
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(118, 145,216, .23)'
              }
            }
          },
          series: [{
            name: '',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              borderColor: '#0091d7',
              borderWidth: 3,
              color: '#00ffff'
            },
            lineStyle: {
              normal: {
                width: 3,
                color: '#0091d7',
                shadowColor: 'rgba(0,0,0,1)',
                shadowBlur: 5,
                shadowOffsetY: 5
              }
            },
            data: [30, 65, 38, 50, 40, 90, 110]
          }]
        },
      }
    },
    methods: {
      userBack: function () {
        this.$router.push('/user-center').catch(err=>{});
      },
      
      
    }
  };
</script>

<style lang="scss">
  .template-management {
    .template-management-child {
      margin-top: 15px;
      width: calc(100% - 270px);
      height: calc(100% - 150px);
      background: white;
      position: absolute;
      display: flex;
      flex: 1;
      overflow: auto;
      /*padding: 16px;*/
      .el-card__body{
        margin-top: 16px;
      }
      
      .chart {
        min-width: 150px;
        min-height: 200px;
        padding-left: 10px;
        width: 100%;
      }
      header {
        /*background: #cccccc;*/
        .header-text {
          line-height: 60px;
          font-weight: 700;
        }
        span:not(:first-child) {
          cursor: pointer;
          margin-left: 15px;
          i {
            margin-right: 8px;
          }
        }
      }
      
    }
  }
</style>
