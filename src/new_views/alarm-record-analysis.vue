<template>
  <div class="default-record-analysis-all">
    <el-tabs v-model="activeName">
      <!-- echarts图表 -->
      <el-tab-pane label="报警图表" :name="activeNameList.OVERVIEW_TAB" lazy>
        <div class="default-record-analysis-scoend">
          <div class="analysis-scoend-input">
            <el-select style="float: right;margin-left: 8px;" v-model="timeTypeValue" size="mini">
              <el-option
                v-for="item in timeTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              style="float: right"
              v-model="deviceTypeValue"
              size="mini"
              placeholder="全部类型"
              clearable
            >
              <el-option
                v-for="item in deviceTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <el-row :gutter="20" style="margin-top: 10px">
            <el-col :span="6">
              <h4>报警设备百分比</h4>
              <chart :id="'lowHitch'" :option="pieEcharts" class="chart"></chart>
            </el-col>
            <el-col :span="6">
              <h4>各子单位设备报警数量对比</h4>
              <chart :id="'childHitch'" :option="childEcharts" class="chart"></chart>
            </el-col>
            <el-col :span="6">
              <h4>各类设备报警数量对比</h4>
              <chart :id="'typeHitch'" :option="typeEcharts" class="chart"></chart>
            </el-col>
            <el-col :span="6">
              <h4>报警级别分布</h4>
              <chart :id="'allTypeHitch'" :option="allPieEcharts" class="chart"></chart>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px">
            <el-col :span="12">
              <h4>报警数量趋势</h4>
              <chart :id="'trendHitch'" :option="trendHitchEcharts" class="chart"></chart>
            </el-col>
            <el-col :span="6">
              <h4>各报警类型的报警数量排行</h4>
              <chart :id="'lineFirstTypeHitch'" :option="lineHitchEcharts" class="chart"></chart>
            </el-col>
            <el-col :span="6">
              <h4>各设备型号的报警率排行</h4>
              <chart :id="'lineTypeHitch'" :option="deviceTypeLineHitchEcharts" class="chart"></chart>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <!-- list -->
      <el-tab-pane label="报警列表" :name="activeNameList.ALARM_LIST_TAB" lazy>
        <el-button  type="primary" size="small" style="margin-top: 10px">导出列表</el-button>
        <div class="default-record-analysis">
          <div class="default-record-analysis-first">
            <alarm-list></alarm-list>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import AlarmList from "../components/survey/AlarmList";
import titleMessage from "~/common/title-message.vue";
import chart from "~/common/chart.vue";

const OVERVIEW_TAB = "overview",
  ALARM_LIST_TAB = "list";

export default {
  components: {
    chart,
    AlarmList,
    titleMessage
  },
  name: "alarm-record-analysis",
  data() {
    return {
      activeNameList: {
        OVERVIEW_TAB,
        ALARM_LIST_TAB
      },
      activeName: ALARM_LIST_TAB,
      titleName: "报警统计分析详情",
      timeTypeValue: 1,
      deviceTypeValue: "",
      timeTypeOptions: [
        {
          label: "最近一个月",
          value: 1
        },
        {
          label: "最近三个月",
          value: 2
        },
        {
          label: "最近一年",
          value: 3
        }
      ],
      deviceTypeOptions: [
        {
          label: "压缩机",
          value: 1
        }
      ],
      pieEcharts: {
        backgroundColor: '#1f1d1d',
        title: {
          // text: '报警设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> 数量：{c}（{d}%）"
        },
        legend: {
          show: false,
          bottom: 10,
          left: "center",
          data: ["有报警", "无报警"]
        },
        series: [
          {
            name: "报警设备百分比",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontSize: "12"
                }
              },
              emphasis: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontWeight: "bold",
                  fontSize: "14"
                }
              }
            },
            data: [
              { value: 535, name: "有报警" },
              { value: 1548, name: "无报警" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      childEcharts: {
        backgroundColor: '#1f1d1d',
        title: {
          // text: '报警设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> 数量：{c} （{d}%）"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "各子单位设备报警数量对比",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontSize: "12"
                }
              },
              emphasis: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontWeight: "bold",
                  fontSize: "14"
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              { value: 10, name: "严重" },
              { value: 80, name: "良好" },
              { value: 110, name: "正常" }
            ]
          }
        ]
      },
      typeEcharts: {
        backgroundColor: '#1f1d1d',
        title: {
          // text: '报警设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> 数量：{c} （{d}%）"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "各类设备报警数量对比",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontSize: "12"
                }
              },
              emphasis: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontWeight: "bold",
                  fontSize: "14"
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              { value: 10, name: "严重" },
              { value: 80, name: "良好" },
              { value: 110, name: "正常" }
            ]
          }
        ]
      },
      allPieEcharts: {
        backgroundColor: '#1f1d1d',
        title: {
          // text: '报警设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> 数量：{c} （{d}%）"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "报警级别分布",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontSize: "12"
                }
              },
              emphasis: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontWeight: "bold",
                  fontSize: "14"
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              { value: 10, name: "严重" },
              { value: 80, name: "良好" },
              { value: 110, name: "正常" }
            ]
          }
        ]
      },
      trendHitchEcharts: {
        backgroundColor: '#1f1d1d',
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            var html =
              params[0].name +
              "：<span style='color:#fd7e23;font-size:18px; font-weight:bold;'>" +
              params[0].value +
              "</span>";
            return html;
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          name: "数量",
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      },
      lineHitchEcharts: {
        backgroundColor: '#1f1d1d',
        grid: {
          top: "15%",
          left: "12%",
          bottom: "22%",
          right: "5%"
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            var html =
              params[0].name +
              "：<br/> <span style='color:#fd7e23;font-size:18px; font-weight:bold;'>" +
              params[0].value +
              "</span>";
            return html;
          }
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#999",
            rotate: 20,
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: ["固定门限报警", "自适应阈值报警", "趋势报警", "多变量报警"]
        },
        yAxis: {
          name: "数量",
          type: "value",
          splitLine: {
            lineStyle: {
              color: "rgba(204,204,204,0.3)"
            }
          },
          axisTick: { show: false },
          axisLabel: {
            color: "#999"
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        series: [
          {
            name: "各报警类型的报警数量排行",
            type: "bar",
            barMaxWidth: 13,
            data: [70, 60, 50, 40]
          }
        ]
      },
      deviceTypeLineHitchEcharts: {
        backgroundColor: '#1f1d1d',
        grid: {
          top: "15%",
          left: "12%",
          bottom: "22%",
          right: "5%"
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            var html =
              params[0].name +
              "：<br/> <span style='color:#fd7e23;font-size:18px; font-weight:bold;'>" +
              params[0].value +
              "%</span>";
            return html;
          }
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#999",
            rotate: 20,
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: [
            "DPC-2803",
            "ZTY-630",
            "RTY-1250",
            "JGT/4-G3516LE",
            "G3608-JGC/4"
          ]
        },
        yAxis: {
          name: "报警率（%）",
          type: "value",
          splitLine: {
            lineStyle: {
              color: "rgba(204,204,204,0.3)"
            }
          },
          axisTick: { show: false },
          axisLabel: {
            color: "#999"
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        series: [
          {
            name: "辅助",
            type: "bar",
            barMaxWidth: 13,
            data: [70, 60, 50, 40, 30]
          }
        ]
      },
      dataOption: [
        // 报警设备百分比 0
        [
          [
            // 近一月
            {
              name: "有报警",
              value: 6
            },
            {
              name: "无报警",
              value: 54
            }
          ],
          [
            // 近三月
            {
              name: "有报警",
              value: 8
            },
            {
              name: "无报警",
              value: 52
            }
          ],
          [
            // 近一年
            {
              name: "有报警",
              value: 12
            },
            {
              name: "无报警",
              value: 48
            }
          ]
        ],
        // 各子单位设备报警数量对比 1
        [
          [
            {
              name: "第三采气厂",
              value: 20
            },
            {
              name: "第四采气厂",
              value: 40
            },
            {
              name: "第五采气厂",
              value: 40
            }
          ],
          [
            {
              name: "第三采气厂",
              value: 25
            },
            {
              name: "第四采气厂",
              value: 45
            },
            {
              name: "第五采气厂",
              value: 30
            }
          ],
          [
            {
              name: "第三采气厂",
              value: 30
            },
            {
              name: "第四采气厂",
              value: 35
            },
            {
              name: "第五采气厂",
              value: 35
            }
          ]
        ],
        // 各类设备报警数量对比 2
        [
          [
            {
              name: "压缩机",
              value: 20
            }
          ],
          [
            {
              name: "压缩机",
              value: 30
            }
          ],
          [
            {
              name: "压缩机",
              value: 50
            }
          ]
        ],
        // 报警级别分布 3
        [
          [
            {
              name: "低报",
              value: 25
            },
            {
              name: "低低报",
              value: 25
            },
            {
              name: "高报",
              value: 35
            },
            {
              name: "高高报",
              value: 15
            }
          ],
          [
            {
              name: "低报",
              value: 20
            },
            {
              name: "低低报",
              value: 30
            },
            {
              name: "高报",
              value: 40
            },
            {
              name: "高高报",
              value: 10
            }
          ],
          [
            {
              name: "低报",
              value: 20
            },
            {
              name: "低低报",
              value: 30
            },
            {
              name: "高报",
              value: 30
            },
            {
              name: "高高报",
              value: 20
            }
          ]
        ],
        // 报警数量趋势 4
        [
          [["第一周", "第二周", "第三周", "第四周"], [18, 15, 12, 27]],
          [
            [
              "第一周",
              "第二周",
              "第三周",
              "第四周",
              "第五周",
              "第六周",
              "第七周",
              "第八周",
              "第九周",
              "第十周",
              "第十一周",
              "第十二周"
            ],
            [24, 15, 18, 12, 9, 15, 18, 9, 27, 15, 3, 12]
          ],
          [
            [
              "第一月",
              "第二月",
              "第三月",
              "第四月",
              "第五月",
              "第六月",
              "第七月",
              "第八月",
              "第九月",
              "第十月",
              "第十一月",
              "第十二月"
            ],
            [30, 36, 54, 36, 48, 60, 66, 66, 48, 36, 48, 30]
          ]
        ],
        // 各报警类型的报警数量排行 5
        [[20, 30, 30, 20], [25, 25, 35, 15], [20, 30, 40, 10]],
        // 各设备型号的报警率排行 6
        [[7, 9, 11, 12, 15], [8, 12, 15, 16, 18], [9, 15, 20, 18, 20]]
      ]
    };
  },
  computed: {
    orgId() {
      return this.$route.params.id;
    }
  },
  watch: {
    timeTypeValue: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.draw();
      }
    }
  },
  created() {
    let activeName = this.$route.params.tab;
    if (activeName == OVERVIEW_TAB) {
      this.activeName = OVERVIEW_TAB;
    } else {
      this.activeName = ALARM_LIST_TAB;
    }
  },
  mounted() {
    this.draw();
  },
  methods: {
    userBack: function() {
      this.$router.back(-1);
    },
    draw() {
      let tempData = null;
      const alarmTimeType = this.timeTypeValue - 1;

      tempData = this.pieEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[0][alarmTimeType]);

      tempData = this.childEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[1][alarmTimeType]);

      tempData = this.typeEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[2][alarmTimeType]);

      tempData = this.allPieEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[3][alarmTimeType]);

      tempData = this.trendHitchEcharts.series[0].data;
      tempData.splice(
        0,
        tempData.length,
        ...this.dataOption[4][alarmTimeType][1]
      );

      // x轴坐标分类
      this.trendHitchEcharts.xAxis.data = this.dataOption[4][alarmTimeType][0];

      // 各报警类型的报警数量排行
      tempData = this.lineHitchEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[5][alarmTimeType]);

      // 各设备型号报警率排行
      tempData = this.deviceTypeLineHitchEcharts.series[0].data;
      tempData.splice(0, tempData.length, ...this.dataOption[6][alarmTimeType]);

      // console.log('this.deviceTypeLineHitchEcharts.series[0].data:', this.deviceTypeLineHitchEcharts.series[0].data)
    }
  }
};
</script>

<style lang="scss">
.default-record-analysis-all {
  .title_message {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
    .el-icon-arrow-left {
      font-weight: 700;
    }
  }
  h4 {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
  .chart {
    min-width: 150px;
    min-height: 200px;
    padding-left: 10px;
    width: 100%;
  }
  .default-record-analysis {
    .default-record-analysis-first {
      height: 50%;
      width: 100%;
      overflow: auto;
    }
  }
  .default-record-analysis-scoend {
    padding: 16px;
    /*margin-top: 16px;*/
    height: 100%;
    .analysis-scoend-input {
      height: 30px;
    }
  }
}
</style>
