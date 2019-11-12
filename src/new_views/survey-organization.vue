<template>
  <div class="data-view main-content">
    <el-row class="fullscreen" :gutter="20" type="flex">
      <el-col :span="13" class="first-page">
        <div class="device-state-panel">
          <div class="canvas-group">
            <div v-if="orgName" class="title">当前位置：{{orgName}}</div>
            <div class="combined-echarts-panel">
              <chart
                :id="'combinedGraphs'"
                class="combined-echarts"
                :svg="true"
                :option="combinedEcharts"
                @click="combinedEchartsClickHandler"
              ></chart>
            </div>
          </div>
        </div>

        <div class="grid-content bg-purple device-distribute-view card-item">
          <!-- 设备分布地图 -->
          <div class="map-canvas-panel">
            <chart
              :id="'mapCanvas'"
              class="map-canvas"
              :option="mapCanvasEcharts"
              @click="mapSelectHandler"
            ></chart>
          </div>
        </div>
      </el-col>
      <el-col :span="11" class="first-page">
        <div
          class="grid-content bg-purple small-panel card-item"
          style="display: flex; flex-direction: column; margin-left: -10px; margin-right: -10px"
        >
          <el-row :gutter="20" style="flex: 1;" class="card-field">
            <el-col :span="24">
              <div style="display: flex; padding-bottom: 1%">
                <div style="flex: 5">
                  <h4>当前报警数量</h4>
                  <p class="big warn-color">156</p>
                </div>
                <div style="flex: 3">
                  <h4>当前报警设备</h4>
                  <p class="big warn-color">16</p>
                </div>
              </div>

              <div style="display: flex">
                <div style="flex: 5; display: flex; flex-direction: column">
                  <div style="flex: 1; display: flex;">
                    <div style="margin-right: 12%" class="small error-color">
                      <h4>警告</h4>
                      <p>21</p>
                    </div>
                    <div style class="small warn-color">
                      <h4>注意</h4>
                      <p>35</p>
                    </div>
                  </div>
                  <div style="flex: 1; display: flex;">
                    <div style="margin-right: 12%" class="small error-color">
                      <h4>高高报</h4>
                      <p>16</p>
                    </div>
                    <div style="margin-right: 12%" class="small warn-color">
                      <h4>高报</h4>
                      <p>32</p>
                    </div>
                    <div style class="small warn-color">
                      <h4>低报</h4>
                      <p>52</p>
                    </div>
                  </div>
                </div>
                <div style="flex: 3; display: flex; flex-direction: column;">
                  <div style class="small warn-color">
                    <h4>压缩机</h4>
                    <p>16</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <AlarmList :lite-version="true"></AlarmList>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <!-- 报警 故障 统计 -->
    <el-row :gutter="20" type="flex" style="margin-top: 20px; display: none">
      <!-- 报警统计 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="alarm-analysis-title">
            <h3>报警统计分析</h3>
            <div class="alarm-analysis-timewindow">
              <el-select v-model="alarmDeviceType" size="mini" placeholder="全部类型" clearable>
                <el-option
                  v-for="item in deviceTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="alarmTimeType" size="mini" placeholder="时间段选择">
                <el-option
                  v-for="item in timeTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>报警设备百分比</h3>
                  <div>
                    <chart :id="'warePieTypeHitch'" :option="warePieEcharts" class="chart"></chart>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>同类设备各型号报警率排行</h3>
                  <div>
                    <chart :id="'equalLineTypeHitch'" :option="equalLineEcharts" class="chart"></chart>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>报警数量趋势</h3>
                  <div>
                    <chart :id="'trendWareHitch'" :option="trendWareHitchEcharts" class="chart"></chart>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="right-more">
            <el-link type="primary">
              <router-link :to="'/survey/organization/' + orgId + '/alarm-record-analysis/list'">更多</router-link>
            </el-link>
          </div>
        </div>
      </el-col>

      <!-- 故障统计 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="breakdown-analysis-title">
            <h3>故障统计分析</h3>
            <div class="breakdown-analysis-timewindow">
              <el-select v-model="faultDeviceType" size="mini" placeholder="全部类型" clearable>
                <el-option
                  v-for="item in deviceTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="faultTimeType" size="mini" placeholder="时间段选择">
                <el-option
                  v-for="item in timeTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>

          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>故障设备百分比</h3>
                  <div>
                    <chart :id="'hitchPieTypeHitch'" :option="faultWarePieEcharts" class="chart"></chart>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>同类设备各型号故障率排行</h3>
                  <div>
                    <chart :id="'hitchLineTypeHitch'" :option="faultEqualLineEcharts" class="chart"></chart>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content bg-purple small-panel">
                  <h3 style="visible:hidden"></h3>
                  <h3>故障数量趋势</h3>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="right-more">
            <div>
              <chart :id="'hitchWareHitch'" :option="faultTrendWareHitchEcharts" class="chart"></chart>
            </div>
            <el-link type="primary">
              <router-link :to="'/survey/organization/' + orgId + '/fault-record-analysis/list'">更多</router-link>
            </el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
import china from "echarts/map/js/china";
import * as changqing from "../mock_data/map/changqing";
import chart from "~/common/chart.vue";
// import * as L from 'leaflet';
import * as mapImage from "../../static/images/map.png";
import AlarmList from "../components/survey/AlarmListForOrganization";

import * as FourIndicators from "~/mock_data/organization/four-indicators.chart";

export default {
  name: "survey-organization",
  components: {
    chart,
    AlarmList
  },
  computed: {
    orgId() {
      return this.$route.params.id;
    },
    orgName() {
      const data = this.deviceOptionData.filter(item => {
        return item.key == this.orgId;
      });
      if (data.length) {
        return data[0].name;
      }
    },
    orgValues() {
      const data = this.deviceOptionData.filter(item => {
        return item.key == this.orgId;
      });
      if (data.length) {
        return data[0].value;
      }
      return this.deviceOptionData[0];
    },
    deviceAccessPath() {
      return `./${this.orgId}/device-access`;
    },
    deviceOnOff() {
      return `./${this.orgId}/device-on-off`;
    },
    deviceAvailabilityPath() {
      return `./${this.orgId}/device-availability`;
    },
    deviceIntactPath() {
      return `./${this.orgId}/device-intact`;
    }
  },
  watch: {
    $route: function(newVal, oldVal) {
      if (parseInt(newVal.params.id) != newVal.params.id) {
        this.$router.push("/survey/organization/" + 1);
        return;
      }
      if (newVal != oldVal) {
        this.reDraw();
        this.reDrawMap();
        this.reDrawAlarmInfo();
        this.reDrawFaultInfo();
      }
    },

    alarmTimeType: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.reDrawAlarmInfo();
      }
    },
    faultTimeType: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.reDrawFaultInfo();
      }
    }
  },
  data() {
    return {
      alarmDeviceType: "",
      alarmTimeType: 1,
      faultDeviceType: "",
      faultTimeType: 1,
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
      deviceOptionData: [
        {
          key: 1,
          name: "长庆油田",
          value: [
            // 设备接入率
            [
              {
                name: "已接入",
                value: 60
              },
              {
                name: "未接入",
                value: 440
              }
            ],
            // 设备启停机
            [
              {
                name: "停机",
                value: 8
              },
              {
                name: "开机",
                value: 50
              }
            ],
            // 设备利用率
            [
              {
                name: "",
                value: 88
              },
              {
                name: "",
                value: 90
              },
              {
                name: "",
                value: 92
              }
            ],
            // 设备完好率
            [
              {
                name: "非完好",
                value: 12
              },
              {
                name: "停机",
                value: 8
              },
              {
                name: "完好",
                value: 38
              }
            ],
            // 报警信息
            [
              [
                {
                  value: 6
                },
                {
                  value: 54
                }
              ],
              [
                {
                  value: 8
                },
                {
                  value: 52
                }
              ],
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ]
            ],

            [[10, 8, 6, 4, 2], [12, 10, 9, 8, 6], [20, 16, 16, 12, 10]],
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
            // 故障信息
            [
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ],
              [
                {
                  value: 15
                },
                {
                  value: 45
                }
              ],
              [
                {
                  value: 18
                },
                {
                  value: 42
                }
              ]
            ],

            [[7, 9, 11, 12, 15], [8, 12, 15, 16, 18], [9, 15, 20, 18, 20]],
            [
              [["第一周", "第二周", "第三周", "第四周"], [6, 5, 4, 9]],
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
                [8, 5, 6, 4, 3, 5, 6, 3, 9, 5, 1, 4]
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
                [10, 12, 18, 12, 16, 20, 22, 22, 16, 12, 16, 10]
              ]
            ],

            // 地图数据信息
            [
              {
                zoom: 2,
                center: [109.999249,38.086515],
                data: [
                  {
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
                  }
                ],
                children: 31
              }
            ]
          ]
        },
        {
          key: 31,
          name: "第五采气厂",
          value: [
            [
              {
                name: "已接入",
                value: 23
              },
              {
                name: "未接入",
                value: 77
              }
            ],
            [
              {
                name: "开机",
                value: 18
              },
              {
                name: "停机",
                value: 2
              }
            ],
            [
              {
                name: "",
                value: 90
              },
              {
                name: "",
                value: 92
              },
              {
                name: "",
                value: 93
              }
            ],
            [
              {
                name: "",
                value: 90
              }
            ],
            // 报警信息
            [
              [
                {
                  value: 6
                },
                {
                  value: 54
                }
              ],
              [
                {
                  value: 8
                },
                {
                  value: 52
                }
              ],
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ]
            ],

            [[10, 8, 6, 4, 2], [12, 10, 9, 8, 6], [20, 16, 16, 12, 10]],
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
            // 故障信息
            [
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ],
              [
                {
                  value: 15
                },
                {
                  value: 45
                }
              ],
              [
                {
                  value: 18
                },
                {
                  value: 42
                }
              ]
            ],

            [[7, 9, 11, 12, 15], [8, 12, 15, 16, 18], [9, 15, 20, 18, 20]],
            [
              [["第一周", "第二周", "第三周", "第四周"], [6, 5, 4, 9]],
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
                [8, 5, 6, 4, 3, 5, 6, 3, 9, 5, 1, 4]
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
                [10, 12, 18, 12, 16, 20, 22, 22, 16, 12, 16, 10]
              ]
            ],
            // 地图数据信息
            [
              {
                zoom: 4,
                center: [109.999249,38.086515],
                data: [
                  {
                    name: "作业三区",
                    value: 300
                  }
                ],
                children: 313
              }
            ]
          ]
        },
        {
          key: 313,
          name: "作业三区",
          value: [
            [
              {
                name: "已接入",
                value: 23
              },
              {
                name: "未接入",
                value: 0
              }
            ],
            [
              {
                name: "开机",
                value: 18
              },
              {
                name: "停机",
                value: 2
              }
            ],
            [
              {
                name: "",
                value: 92
              },
              {
                name: "",
                value: 93
              },
              {
                name: "",
                value: 95
              }
            ],
            [
              {
                name: "",
                value: 92
              }
            ],
            // 报警信息
            [
              [
                {
                  value: 6
                },
                {
                  value: 54
                }
              ],
              [
                {
                  value: 8
                },
                {
                  value: 52
                }
              ],
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ]
            ],

            [[10, 8, 6, 4, 2], [12, 10, 9, 8, 6], [20, 16, 16, 12, 10]],
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
            // 故障信息
            [
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ],
              [
                {
                  value: 15
                },
                {
                  value: 45
                }
              ],
              [
                {
                  value: 18
                },
                {
                  value: 42
                }
              ]
            ],

            [[7, 9, 11, 12, 15], [8, 12, 15, 16, 18], [9, 15, 20, 18, 20]],
            [
              [["第一周", "第二周", "第三周", "第四周"], [6, 5, 4, 9]],
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
                [8, 5, 6, 4, 3, 5, 6, 3, 9, 5, 1, 4]
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
                [10, 12, 18, 12, 16, 20, 22, 22, 16, 12, 16, 10]
              ]
            ],

            // 地图数据信息
            [
              {
                zoom: 18,
                center: [109.989188,38.080011],
                data: [
                  {
                    name: "苏东-7站",
                    value: 300
                  },
                  {
                    name: "苏东-8站",
                    value: 300
                  },
                  {
                    name: "苏东-10站",
                    value: 300
                  },
                  {
                    name: "苏东-11站",
                    value: 300
                  },
                  {
                    name: "苏东-12站",
                    value: 300
                  },
                  {
                    name: "苏东-13站",
                    value: 300
                  },
                  {
                    name: "苏东-14站",
                    value: 300
                  },
                  {
                    name: "苏东-21站",
                    value: 300
                  }
                ],
                children: 3133
              }
            ]
          ]
        },
        {
          key: 3133,
          name: "苏东-7站",
          value: [
            [
              {
                name: "已接入",
                value: 3
              },
              {
                name: "未接入",
                value: 0
              }
            ],
            [
              {
                name: "开机",
                value: 1
              },
              {
                name: "停机",
                value: 1
              }
            ],
            [
              {
                name: "",
                value: 95
              },
              {
                name: "",
                value: 95
              },
              {
                name: "",
                value: 96
              }
            ],
            [
              {
                name: "",
                value: 95
              }
            ],
            // 报警信息
            [
              [
                {
                  value: 6
                },
                {
                  value: 54
                }
              ],
              [
                {
                  value: 8
                },
                {
                  value: 52
                }
              ],
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ]
            ],

            [[10, 8, 6, 4, 2], [12, 10, 9, 8, 6], [20, 16, 16, 12, 10]],
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
            // 故障信息
            [
              [
                {
                  value: 12
                },
                {
                  value: 48
                }
              ],
              [
                {
                  value: 15
                },
                {
                  value: 45
                }
              ],
              [
                {
                  value: 18
                },
                {
                  value: 42
                }
              ]
            ],

            [[7, 9, 11, 12, 15], [8, 12, 15, 16, 18], [9, 15, 20, 18, 20]],
            [
              [["第一周", "第二周", "第三周", "第四周"], [6, 5, 4, 9]],
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
                [8, 5, 6, 4, 3, 5, 6, 3, 9, 5, 1, 4]
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
                [10, 12, 18, 12, 16, 20, 22, 22, 16, 12, 16, 10]
              ]
            ],

            // 地图数据信息
            [
              {
                zoom: 20,
                center: [109.989188,38.080011],
                data: [
                  {
                    name: "SD7-YS-1",
                    value: 300
                  },
                  {
                    name: "SD7-YS-2",
                    value: 300
                  },
                  {
                    name: "SD7-YS-3",
                    value: 300
                  }
                ]
              }
            ]
          ]
        }
      ],
      mapCanvasEcharts: {},
      combinedEcharts: {},
    
      // 设备完好率
      // wholePieEcharts: {
      //   graphic: [{
      //     type:'text',
      //     left:'center',
      //     top:'40%',
      //     style:{
      //         text:'设备完好率',
      //         fill:'#658DCA',
      //         fontSize: 12,
      //         fontWeight: "bold",
      //         lineHeight: 20
      //     }
      //   }],
      //   tooltip: {
      //     formatter: "{a}：{c}%"
      //   },
      //   series: [
      //     {
      //       name: "设备完好率",
      //       type: "gauge",
      //       radius:"90%",
      //       splitNumber: 0,
      //       axisLine: {
      //         show: true,
      //         lineStyle: {
      //           width: 9,
      //           color: [
      //             [
      //               1,
      //               new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      //                 {
      //                   offset: 0.1,
      //                   color: "#658DCA"
      //                 },
      //                 {
      //                   offset: 0.6,
      //                   color: "#6ECAD9"
      //                 },
      //                 {
      //                   offset: 1,
      //                   color: "#6ECAD9"
      //                 }
      //               ])
      //             ]
      //           ]
      //         }
      //       },
      //       splitLine: {
      //         show: false
      //       },
      //       axisTic: {
      //         show: false
      //       },
      //       axisLabel: {
      //         show: false
      //       },
      //       pointer: {
      //         length: "25%",
      //         width: 5
      //       },
      //       detail: {
      //         formatter: "{value}%",
      //         textStyle: {
      //           fontSize: 20,
      //           lineHeight: 20,
      //           fontWeight: "bold",
      //           color: "#658DCA"
      //         }
      //       },
      //       data: [{ value: 50, name: "设备完好率" }]
      //     }
      //   ]
      // },
      wholePieEcharts: null,

      // 报警设备百分比
      warePieEcharts: {
        title: {
          // text: '故障设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        legend: {
          top: "5",
          left: "left",
          show: true,
          data: ["报警设备百分比"]
        },
        tooltip: {
          formatter: "{b}<br/>数量：{c}（{d}%）"
        },
        series: [
          {
            type: "pie",
            radius: ["55%", "70%"],
            center: ["50%", "60%"],
            selectedMode: "single",
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 15,
                name: "报警设备",
                label: {
                  normal: {
                    formatter: function(data) {
                      return data.percent.toFixed(2) + "%";
                    },
                    textStyle: {
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#5075ed"
                    },
                    padding: [10, 4, 0, 4]
                  }
                }
              },
              {
                value: 55,
                name: "正常设备",
                label: {
                  show: false
                }
              }
            ],
            itemStyle: {
              normal: {
                color: function(params) {
                  //自定义颜色 第二个值是第一个值的透明度的20%，没办法用rgba，所以直接取的值；
                  var colorList = ["#5075ed", "#DCE3FB"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      },
      // 同类设备各型号报警率
      equalLineEcharts: {
        backgroundColor: "#fff",
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
              "</span>%";
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
            fontSize: "10"
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: [
            "DPC-2803",
            "JGT/4-G3516LE",
            "RTY-1250",
            "G3608-JGC/4",
            "ZTY-630"
          ]
        },
        yAxis: {
          name: "百分比（%）",
          nameTextStyle: {
            padding: [0, 0, 0, 40]
          },
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
            itemStyle: {
              normal: {
                color: "#347aea"
              }
            },
            data: [70, 60, 50, 40, 30]
          }
        ]
      },
      // 报警类型趋势
      trendWareHitchEcharts: {
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
            smooth: true,
            itemStyle: {
              normal: {
                color: "#347aea"
              }
            }
          }
        ]
      },

      // 故障设备百分比
      faultWarePieEcharts: {
        title: {
          // text: '故障设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        legend: {
          top: "5",
          left: "left",
          show: true,
          data: ["故障设备百分比"]
        },
        tooltip: {
          formatter: "{b}<br/>数量：{c}（{d}%）"
        },
        series: [
          {
            type: "pie",
            radius: ["55%", "70%"],
            center: ["50%", "60%"],
            selectedMode: "single",
            label: {
              normal: {
                position: "center",
                formatter: "{b}<br/>数量：{c}（{d}%）"
              }
            },
            data: [
              {
                value: 5,
                name: "故障设备",
                label: {
                  normal: {
                    formatter: function(data) {
                      return data.percent.toFixed(2) + "%";
                    },
                    textStyle: {
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#5075ed"
                    },
                    padding: [10, 4, 0, 4]
                  }
                }
              },
              {
                value: 150,
                name: "正常设备",
                label: {
                  show: false
                }
              }
            ],
            itemStyle: {
              normal: {
                color: function(params) {
                  //自定义颜色 第二个值是第一个值的透明度的20%，没办法用rgba，所以直接取的值；
                  var colorList = ["#5075ed", "#DCE3FB"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      },
      // 同类设备各型号故障率
      faultEqualLineEcharts: {
        backgroundColor: "#fff",
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
              "</span>%";
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
            fontSize: "10"
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
          name: "百分比（%）",
          nameTextStyle: {
            padding: [0, 0, 0, 40]
          },
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
            itemStyle: {
              normal: {
                color: "#347aea"
              }
            },
            data: [70, 60, 50, 40, 30]
          }
        ]
      },
      // 故障类型趋势
      faultTrendWareHitchEcharts: {
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
            smooth: true,
            itemStyle: {
              normal: {
                color: "#347aea"
              }
            }
          }
        ]
      },
      warePieEcharts2: {
        graphic: [
          {
            type: "text",
            left: "center",
            top: "52%",
            style: {
              text: "当前报警数量",
              fill: "#347aea",
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: 20
            }
          }
        ],
        title: {
          // text: '故障设备/总设备',
          left: "70%",
          top: "50%",
          textStyle: {
            fontSize: "14",
            fontWeight: "400"
          }
        },
        legend: {
          top: "5",
          left: "left",
          show: true,
          data: ["报警设备百分比"]
        },
        // tooltip: {
        //   formatter: "{b}<br/>数量：{c}（{d}%）"
        // },
        series: [
          {
            type: "pie",
            radius: ["55%", "70%"],
            center: ["50%", "60%"],
            selectedMode: "single",
            hoverAnimation: false,
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 150,
                name: "报警设备",
                label: {
                  normal: {
                    formatter: function(data) {
                      return data.value;
                    },
                    textStyle: {
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#5075ed",
                      lineHeight: 20
                    },
                    padding: [40, 4, 0, 4]
                  }
                }
              }
            ],
            itemStyle: {
              normal: {
                color: function(params) {
                  //自定义颜色 第二个值是第一个值的透明度的20%，没办法用rgba，所以直接取的值；
                  var colorList = ["#5075ed", "#DCE3FB"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      },
      //
      allPieEcharts: {
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
            radius: "75%",
            center: ["50%", "60%"],
            selectedMode: "single",
            hoverAnimation: false,
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}（{d}%）",
                textStyle: {
                  fontSize: "12"
                }
                // position: 'inside'
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
      }
    };
  },
  created() {
    this.combinedEcharts = FourIndicators.combinedOption();
  },
  mounted() {
    this.reDraw();
    this.reDrawMap();
    this.reDrawAlarmInfo();
    this.reDrawFaultInfo();
  },
  methods: {
    // 地图点击事件监听
    mapSelectHandler(e) {
      const orgValues = this.orgValues;
      let currentValues = orgValues[10][0];
      let data = e.data;
      if (currentValues.children) {
        this.$router.push(`/survey/organization/${currentValues.children}`);
      } else {
        this.$router.push(`/survey/device/31331/analysis`);
      }
    },
    // 地图上面的三个组合图点击事件监听
    combinedEchartsClickHandler(e) {
      let index = Math.ceil(e.seriesIndex / 2); // 一个图由两个 series 组成
      let $router = this.$router;
      let indexRouteMap = {
        0: () => $router.push(this.deviceAccessPath),
        1: () => $router.push(this.deviceOnOff),
        2: () => $router.push(this.deviceIntactPath)
      };
      typeof indexRouteMap[index] === `function` && indexRouteMap[index]();
    },
    reDraw() {
      // orgId 改变 这里变

      let temp = null;
      const orgValues = this.orgValues;
      this.combinedOption = FourIndicators.combinedOption(
        {
          innerData: orgValues[0]
        },
        {
          innerData: orgValues[1]
        },
        {
          innerData: orgValues[3]
        }
      );
    },

    reDrawAlarmInfo() {
      let temp = null;
      const alarmTimeType = this.alarmTimeType - 1;

      // 报警设备百分比
      this.warePieEcharts.series[0].data.forEach((item, index) => {
        temp = {
          ...item,
          ...this.orgValues[4][alarmTimeType][index]
        };
        this.warePieEcharts.series[0].data.splice(index, 1, temp);
      });

      // 同类设备各型号报警率排行
      const equalLineData = this.equalLineEcharts.series[0].data;
      equalLineData.splice(
        0,
        equalLineData.length,
        ...this.orgValues[5][alarmTimeType]
      );

      // 报警数量趋势
      const trendData = this.trendWareHitchEcharts.series[0].data;
      trendData.splice(
        0,
        trendData.length,
        ...this.orgValues[6][alarmTimeType][1]
      );

      // x轴坐标分类
      this.trendWareHitchEcharts.xAxis.data = this.orgValues[6][
        alarmTimeType
      ][0];
    },
    reDrawFaultInfo() {
      let temp = null;
      const faultTimeType = this.faultTimeType - 1;

      // 故障设备百分比
      this.faultWarePieEcharts.series[0].data.forEach((item, index) => {
        temp = {
          ...item,
          ...this.orgValues[7][faultTimeType][index]
        };
        this.faultWarePieEcharts.series[0].data.splice(index, 1, temp);
      });

      // 同类设备各型号故障率排行
      const faultEqualLineData = this.faultEqualLineEcharts.series[0].data;
      faultEqualLineData.splice(
        0,
        faultEqualLineData.length,
        ...this.orgValues[8][faultTimeType]
      );

      // 故障数量趋势
      const faultTrendData = this.faultTrendWareHitchEcharts.series[0].data;

      faultTrendData.splice(
        0,
        faultTrendData.length,
        ...this.orgValues[9][faultTimeType][1]
      );

      // console.log('故障数量趋势:', faultTrendData)

      // x轴坐标分类
      this.faultTrendWareHitchEcharts.xAxis.data = this.orgValues[9][
        faultTimeType
      ][0];
    },
    reDrawMap() {
      // 基于准备好的dom，初始化echarts实例
      const orgValues = this.orgValues;

      var currentValues = orgValues[10][0];
      var option = changqing.graphOption(currentValues.data);
      option.geo.zoom = currentValues.zoom;
      if(currentValues.center){
        option.geo.center = currentValues.center;
      } 
      this.mapCanvasEcharts = option;
    }
  }
};
</script>

<style lang="scss" scoped>
// 首屏内容
.first-page {
  position: relative;
  .device-state-panel {
    position: absolute;
    z-index: 1;
    height: 240px;
    width: 80%;
    padding: 20px;
    right: 2%;

    .title {
      white-space: nowrap;
      flex: 1;
      position: absolute;
      margin-left: -23%;
    }

    .combined-echarts-panel {
      flex: 1;
      width: 100%;
      height: 160px;
      overflow: hidden;
      // 备注：感觉 overflow 对 canvas 没有用

      .combined-echarts {
        width: 100%;
        height: 320px;
        margin-top: -160px;
      }
    }

    .canvas-group {
      display: flex;

      .canvas {
        display: none;
        flex: 1;
      }
    }
  }
}

.data-view {
  .chart {
    min-width: 170px;
    min-height: 170px;
    padding-left: 10px;
    // width: 100%;
    margin: auto -10px;
    // width: 100%;
    height: 100%;
  }
  .grid-content {
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

    &.small-panel {
      padding: 0;
    }

    &-mini {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: rgba($color: #fff, $alpha: 0);
      height: 100px;
      width: 100px;
      padding: 0;

      h3 {
        margin: 0;
        text-align: center;
      }

      .chart {
        min-width: 100px;
        min-height: 100px;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: auto;
      }
    }
  }
  .device-distribute-view {
    display: flex;
    flex-direction: column;
    .map-canvas-panel {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;

      .map-canvas {
        flex: 1;
      }
    }
  }
}

.card-field {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 40px;

  .error-color {
    color: red;
  }
  .warn-color {
    color: orange;
  }

  h4 {
    color: inherit;
    margin: 4px 0;
    font-size: 12px;
  }
  p {
    color: inherit;
    font-size: 12px;
    &.big {
      font-size: 28px;
      font-weight: bold;
    }
  }
  .small {
    position: relative;
    padding-left: 14px;
    min-width: 50px;

    &::before {
      content: "";
      position: absolute;
      height: 26px;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 4px;
      border-left: red 4px solid;
      margin-left: -10px;
    }

    &.warn-color {
      &::before {
        border-left: orange 4px solid;
      }
    }
  }
}
</style>
