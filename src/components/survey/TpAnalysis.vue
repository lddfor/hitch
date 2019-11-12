<template>
  <div>
    <div class="page-survey-tp-device-analysis">
      <div class="graph-option grid-content card-item" style="width: 180px;">
        <h3>图谱选择</h3>
        <el-checkbox-group v-model="checkedAll" @change="handleCheckedCitiesChange" :max="3">
          <el-checkbox
            v-for="item in currentGraphOptions.graphItems"
            :label="item.id"
            :key="item.id"
          >{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="graph-view">
        <div
          class="graph grid-content card-item"
          v-for="(option, $index) in echartOptions"
          :key="$index"
          style="margin-bottom: 10px"
        >
          <div style="padding: 10px 20px 0">{{option.graphItem.name}}</div>
          <chart :id="'manualDiagnosisGraph_'+ $index" :option="option.graphOption" class="chart"></chart>
        </div>
      </div>
      <div class="analysis-option grid-content" v-if="showAnalysisOptions">
        <el-form>
          <h4>
            设备名称:
            <span style="font-weight: 700">SD7-YS-1</span>
          </h4>
          <section>
            <el-select
              v-model="value3"
              placeholder="时间筛选"
              size="mini"
              @change="showCustomizeTime(value3)"
            >
              <el-option key="1" label="最近一周" value="week"></el-option>
              <el-option key="2" label="最近一月" value="month"></el-option>
              <el-option key="3" label="最近三月" value="thirdMonth"></el-option>
              <el-option key="4" label="最近一年" value="year"></el-option>
              <el-option key="5" label="自定义" value="auto"></el-option>
            </el-select>
          </section>
          <section v-if="useCustomizeTime" class="wrap-datepicker">
            <!-- 自定义的时间选择框 -->

            <el-date-picker
              v-model="diagTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            <p></p>
          </section>
          <section v-if="isWareFull">
            <el-select v-model="value" placeholder="趋势类型" size="mini">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </section>
          <section v-if="isBaoLuoFull">
            <el-select v-model="value2" placeholder="包络选择" size="mini">
              <el-option
                v-for="(item, index) in baoLuooptions"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </section>
          <div class="tp-analysis-up">
            <span style="font-weight: 700">诊断结论</span>
            <div class="tp-analysis-up-textarea">
              <el-input
                type="textarea"
                placeholder="请输入内容诊断结论"
                v-model="textarea"
                maxlength="30"
                show-word-limit
              ></el-input>
            </div>
          </div>
          <div style="text-align: right;">
            <el-button
              type="primary"
              :plain="!textarea ? true : false"
              @click="toggleShowTextarea2"
              v-if="!showTextarea2"
            >完成</el-button>
          </div>
          <div class="tp-analysis-up" v-if="showTextarea2">
            <el-form-item>
              <span style="font-weight: 700">措施推荐</span>
              <div class="tp-analysis-up-textarea">
                <el-input
                  type="textarea"
                  placeholder="请输入内容措施推荐"
                  v-model="textarea2"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </div>
            </el-form-item>
            <p></p>
            <el-button type="primary" @click="showDetailDialog">编制诊断报告</el-button>
          </div>
        </el-form>
      </div>
    </div>

    <FaultDemo :detailDialog="detailDialog"></FaultDemo>
  </div>
</template>


<script>
import PowerOnOffRecord from "~/components/survey/PowerOnOffRecord";
import FaultDemo from "~/components/survey/FaultDemo";

import moment from "moment";

import echarts from "echarts"; //原生的echarts

import chart from "~/common/chart.vue"; // 这是自己封装的echarts
import "echarts-gl";

import * as a from "~/mock_data/a";
import * as b from "~/mock_data/b";
import * as c from "~/mock_data/c";
import * as cepstrum from "~/mock_data/cepstrum";
import * as e from "~/mock_data/e";
import * as waterfall from "~/mock_data/waterfall";
import * as baoluo from "~/mock_data/baoluo";
import * as bangtu from "~/mock_data/bangtu";
import * as zhuansuqushi from "~/mock_data/zhuansuqushi";

export default {
  name: "survey-tp-device-analysis",
  components: {
    PowerOnOffRecord,
    FaultDemo,
    chart
  },
  data() {
    return {
      checkedAll: [1],

      value: "",
      value2: "",
      value3: "",
      textarea: "",
      textarea2: "1、排查进排气阀\n2、检查冷却系统",
      showTextarea2: false,
      options: [
        {
          label: "单通道多特征值",
          value: "单通道多特征值"
        },
        {
          label: "多通道单特征值",
          value: "多通道单特征值"
        }
      ],
      baoLuooptions: [
        {
          label: "包络波形",
          value: "包络频谱"
        },
        {
          label: "多通道单特征值",
          value: "多通道单特征值"
        }
      ],
      diagTime: [moment().subtract(7, "days"), moment()],
      useCustomizeTime: false, //右侧时间选择 是否需要展示自定义时间选择框
      isWareFull: false, // 如果是单测点/多测点趋势图或者单值或多值棒图
      isBaoLuoFull: false, // 如果是包络图的话 就是现实默认是不显示的
      graphOptions: [
        {
          groupName: "往复式压缩机",
          graphItems: [
            { id: 1, name: "单测点/多测点趋势图" },
            { id: 2, name: "波形图" },
            { id: 3, name: "频谱图" },
            { id: 4, name: "倒谱图" },
            { id: 5, name: "功率谱" },
            { id: 6, name: "瀑布图" },
            { id: 7, name: "包络分析" },
            { id: 8, name: "单值/多值棒图" },
            { id: 9, name: "转速趋势图" }
          ]
        }
      ],
      detailDialog: {
        visible: false
      }
    };
  },
  props: ["showAnalysisOptions"],
  mounted() {},
  computed: {
    currentGraphOptions() {
      return this.graphOptions[0];
    },
    graphCanvasEl() {
      return this.$el.querySelector(".graphCanvas");
    },
    echartOptions() {
      return this.checkedAll.map(id => {
        return {
          graphItem:
            this.currentGraphOptions.graphItems.filter(
              item => item.id === id
            )[0] || {},
          graphOption: this.getGraphOption(id)
        };
      });
    }
  },
  methods: {
    handleCheckedCitiesChange(value) {
      console.log("value", value);
      //  这里是checkbox选中的内容 是[1,2,3,4,5]
    },
    getGraphOption(id, graphData) {
      var graphId = id;
      if (graphId === 1 || graphId === 8) {
        this.isWareFull = true;
      } else {
        this.isWareFull = false;
      }
      if (graphId === 7) {
        this.isBaoLuoFull = true; //只有当时包络图的时候才显示
      } else {
        this.isBaoLuoFull = false;
      }
      var config = this.getGraphConfig(graphId);

      var data = graphData || config.data;
      var option = config.graphOption(data);

      if (option && data) {
        if (graphId === 6) {
          const seriesObj = option.series[0];
          const formatter = seriesObj.label.formatter;
          data.forEach((item, index) => {
            option.series[index] = JSON.parse(JSON.stringify(seriesObj));
            option.series[index].label.formatter = formatter;
            option.series[index].data = item;
          });
        }
        return option;
      }
      return null;
    },
    getGraphConfig(graphId) {
      var configMap = {
        1: a,
        2: b,
        3: c,
        4: cepstrum,
        5: e,
        6: waterfall, // 瀑布图
        7: baoluo, // 包络图
        8: bangtu, // 棒图
        9: zhuansuqushi // 转速趋势
      };
      return configMap[graphId];
    },
    toggleShowTextarea2() {
      if (this.textarea.trim()) {
        this.showTextarea2 = true;
      }
    },
    showDetailDialog() {
      this.detailDialog.visible = true;
    },
    showCustomizeTime(value) {
      this.useCustomizeTime = value == "auto" ? true : false;
    }
  }
};
</script>


<style lang="scss">
.page-survey-tp-device-analysis {
  min-height: calc(100vh - 280px);
  display: flex;

  .graph-option {
    margin: 0;
    margin-right: 16px;
    padding: 0 16px;
    dl {
      font-weight: bold;
      padding: 4px 0;
      line-height: 2;
    }
    dd {
      margin-left: 20px;
      line-height: 1.5;
      a.active {
        color: #5075ed;
      }
    }
  }
  .analysis-option {
    margin: 0;
    margin-left: 16px;
    padding: 0 16px;
    section {
      margin: 16px 0;
    }
  }
  .graph-view {
    flex: 1;
    display: flex;
    flex-direction: column;

    .graph {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 16px;
      &-canvas {
        flex: 1;
      }
    }
    .stop-record {
    }
  }
  .grid-content {
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
}

.tp-analysis-up {
  // margin-top: 16px;
  /*background: white;*/
  padding: 16px 0;
  .tp-analysis-up-textarea {
    margin-top: 10px;
    padding: 16px;
  }
}
.chart {
  min-width: 150px;
  min-height: 200px;
  padding-left: 10px;
  width: 100%;
}
.graphCanvas {
  min-height: 400px;
}

.wrap-datepicker {
  .el-range-editor--medium.el-input__inner {
    height: auto;
  }
  .el-range-editor.el-input__inner{
    display: flex;
    flex-wrap: wrap;
    width: 200px;
  }
  .el-date-editor .el-range-input{
    width: 90%;
  }
  input{
    background-color: transparent;
    color: #606266;
  }

}
  .el-date-table td.in-range div{
    background: #333;
  }
  .el-date-table td.in-range div:hover{
     background: #000;
  }
</style>
