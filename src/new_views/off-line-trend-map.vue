<template>
  <div class="off-line-trend-map">
    <el-card style="margin-top: 18px">
      <div style="width: 50%;float: right">
        <el-row :gutter="20">
          <el-form ref="form" :model="form" label-width="80px">
            <el-col :span="12">
              <el-form-item label="活动名称1">
                <el-date-picker
                  type="dates"
                  v-model="value4"
                  placeholder="选择一个月份">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="选择测点">
                <el-select v-model="value" multiple placeholder="请选择">
                  <el-option
                    multiple
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <el-checkbox :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                   </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </div>
      
      <chart :id="'lowHitch'" :option="columnarEcharts" class="chart"></chart>
    </el-card>
  </div>
</template>

<script>
  import titleMessage from '~/common/title-message.vue';
  import chart from '~/common/chart.vue';
  
  export default {
    name: 'offLineTrendMap',
    components: {
      titleMessage,
      chart
    },
    data() {
      return {
        columnarEcharts: {
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          legend: {
            data: ['测点1', '测点2', '视频广告', '直接访问', '搜索引擎']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [4, 7, 2, 8, 4, 2, 1, 5, 3, 7, 2, 6],
            name: '测点1',
            type: 'line',
            smooth: true
          }, {
            data: [3, 9, 5, 6, 2, 5, 6, 5, 3, 6, 2, 7],
            name: '测点2',
            type: 'line',
            smooth: true
          }]
        },
        form: {
          name: ''
        },
        value4: '',
        cities: [{
          value: 'Beijing',
          label: '测点1'
        }, {
          value: 'Shanghai',
          label: '测点2'
        }, {
          value: 'Nanjing',
          label: '测点3'
        }, {
          value: 'Chengdu',
          label: '测点4'
        }, {
          value: 'Shenzhen',
          label: '测点5'
        }, {
          value: 'Guangzhou',
          label: '测点6'
        }],
        value: ''
      };
    },
    
    watch: {},
    computed: {},
    mounted() {
    },
    methods: {
      changeTab(tab) {
      
      },
      
    }
  };
</script>


<style lang="scss">
  .off-line-trend-map {
    .chart {
      min-width: 150px;
      min-height: 60vh;
      padding-left: 10px;
      width: 100%;
    }
  }
</style>
