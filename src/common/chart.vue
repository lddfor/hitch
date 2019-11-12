<template>
  <div :id="id"></div>
</template>

<script>
// import { mapGetters } from 'vuex';
import util from "../common/echarts.utils";
import echarts from "echarts";
import "zrender/lib/svg/svg"; //echarts svg 渲染器
import { registerDarkTheme } from "./echarts-dark.theme"; //echarts 黑色主题
registerDarkTheme(echarts)

const ACTION_EVENTS = [
  "legendselectchanged",
  "legendselected",
  "legendunselected",
  "datazoom",
  "datarangeselected",
  "timelinechanged",
  "timelineplaychanged",
  "restore",
  "dataviewchanged",
  "magictypechanged",
  "geoselectchanged",
  "geoselected",
  "geounselected",
  "pieselectchanged",
  "pieselected",
  "pieunselected",
  "mapselectchanged",
  "mapselected",
  "mapunselected",
  "axisareaselected",
  "focusnodeadjacency",
  "unfocusnodeadjacency",
  "brush",
  "gauge",
  "brushselected"
];
const MOUSE_EVENTS = [
  "click",
  "dblclick",
  "mouseover",
  "mouseout",
  "mousedown",
  "mouseup",
  "globalout"
];
let _this;
export default {
  name: "chart",
  props: ["id", "option", "heightClass", "group", "svg"],
  // computed: {
  //   ...mapGetters({
  //     showNav: 'GET_SHOW_NAV',
  //     showTree: 'GET_SHOW_TREE',
  //     showComparision: 'GET_SHOW_COMPARISION'
  //   })
  // },
  watch: {
    // showNav: function(val) {
    //   this.chart.resize();
    // },
    // showTree: function(val) {
    //   setTimeout(() => { this.chart.resize(); }, 110);
    // },
    // showComparision: function(val) {
    //   setTimeout(() => { this.chart.resize(); }, 110);
    // },
    option: {
      handler: function(val, oldVal) {
        // console.log(val, oldVal);
        if (this.chart && val) {
          // this.chart.clear();
          this.chart.setOption(val, true);
        }
      },
      deep: true
    },
    group: function(group) {
      _this.chart.group = group;
    }
  },
  data() {
    return {
      chart: {}
    };
  },
  methods: {
    init() {
      let chart = echarts.init(document.getElementById(this.id), "dark", {
        renderer: this.svg ? "svg" : "canvas"
      });
      this.chart = chart;
      if (this.group) {
        this.chart.group = this.group;
      }
      chart.setOption(this.option, true);
      util.chartResResize(chart);
      MOUSE_EVENTS.forEach(event => {
        chart.on(event, params => {
          this.$emit(event, params);
          // for backward compatibility, may remove in the future
          // this.$emit('click', params);
        });
      });
      // expose ECharts events as custom events
      ACTION_EVENTS.forEach(event => {
        chart.on(event, params => {
          this.$emit(event, params);
        });
      });
      // chart.on('click', function (param) {
      //     alert(param.seriesName);  //legend的名称
      //     alert(param.name);  //X轴的值
      // });
    }
  },
  mounted() {
    if (this.option) {
      this.init();
    }
    _this = this;
  },
  connect(group) {
    if (typeof group !== "string") {
      group = group.map(chart => chart.chart);
    }
    echarts.connect(group);
  },
  disconnect(group) {
    echarts.disConnect(group);
  },
  divResize() {
    _this.chart.resize();
  }
};
</script>
<style lang="scss">
</style>
