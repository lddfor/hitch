<template>
  <div class="knowledge-graph data-view" >
    <title-message inputName="知识图谱应用"></title-message>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="知识查询" name="first">
        <el-select v-model="value" placeholder="请选择" size="mini">
          <el-option label="综合" value="综合"></el-option>
          <el-option label="关键词" value="关键词"></el-option>
          <el-option label="摘要" value="摘要"></el-option>
          <el-option label="提名" value="提名"></el-option>
          <el-option label="作者" value="作者"></el-option>
        </el-select>
        <el-input
          size="mini"
          style="width: 400px"
          placeholder="请选择日期"
          suffix-icon="el-icon-search"
          v-model="input1">
        </el-input>
        <el-row :gutter="20" style="margin-top: 16px">
          <el-col :span="2">
            <el-link type="primary" :underline="false" style="line-height: 30px">结果中搜索</el-link>
          </el-col>
          <el-col :span="5">
            关键词搜索:
            <el-input size="mini" style="width: 160px" v-model="input3" placeholder="请输入关键词"></el-input>
          </el-col>
          <el-col :span="5">
            分类:
            <el-input size="mini" style="width: 160px" v-model="input4" placeholder="请输入关键词"></el-input>
          </el-col>
          <el-col :span="5">
            标签:
            <el-input size="mini" style="width: 160px" v-model="input5" placeholder="请输入关键词"></el-input>
          </el-col>
          <el-col :span="6">
            知识来源:
            <el-input size="mini" style="width: 160px" v-model="input6" placeholder="请输入关键词"></el-input>
          </el-col>
        </el-row>
        <div class="search-result-table">
          <el-table :data="tableData" style="width: 100%" size="mini">
            <el-table-column
              v-for="(column, index) in tableColumns"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pager clearfix">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="curPage + 1"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableDataSource.length"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="文档处理" name="third">
        <el-row>
          <el-upload
            disabled
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传doc/docx文件，且不超过10M</div>
          </el-upload>
        </el-row>
        <div class="search-result-table">
          <el-table :data="tableData" style="width: 100%" size="mini">
            <el-table-column
              v-for="(column, index) in tableColumns"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pager clearfix">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="curPage + 1"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableDataSource.length"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="图谱管理" name="fourth" lazy>
        <div style="display: flex">
          <div style="flex: 1;">
            <h3>实体管理</h3>
            <chart :id="'low8Hitch'" :option="pieEcharts" class="chart"></chart>
          </div>
          <div style="flex: 1;">
            <h3>本体管理</h3>
            <chart :id="'pagEcharts'" :option="pagEcharts" class="chart"></chart>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  
  
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  import chart from '~/common/chart.vue';
  
  export default {
    name: 'survey-device',
    components: {
      titleMessage,
      chart
    },
    data() {
      return {
        pieEcharts: {
          tooltip: {
            trigger: 'item',
            formatter: '{b}:信用分 {c} (分)'
          },
          backgroundColor: '',
          legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            data: ['企业信用分',],
            itemWidth: '15',
            itemHeight: '6',
          },
          series: [
            {
              type: 'graph',
              layout: 'force',
              edgeSymbol: ['arrow'],
              force: {
                gravity: 0.08,
                edgeLength: 8,
                repulsion: 50
              },
              grid: {
                top: '15%',
                left: '1%',
                right: '1%',
                bottom: '15%',
                containLabel: true
              },
              
              symbolSize: 64,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 16,
                    color: '#000',
                  }
                }
              },
              lineStyle: {
                normal: {
                  color: '#52a2a3',
                  curveness: 0.2,
                  width: 2
                }
              },
              data: [
                
                {
                  name: '公司1', x: 200, y: 60,
                  symbolSize: 165,
                  value: '',
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '公司2', x: 300, y: 160,
                  symbolSize: 72,
                  value: '99',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司3', x: 200, y: 60,
                  symbolSize: 54,
                  value: '85',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司4', x: 200, y: 60,
                  symbolSize: 54,
                  value: '45',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                
                
                {
                  name: '公司5', x: 200, y: 60,
                  symbolSize: 63,
                  value: '',
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '公司6', x: 200, y: 60,
                  symbolSize: 72,
                  value: '65',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司7', x: 200, y: 60,
                  symbolSize: 54,
                  value: '85',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司8', x: 200, y: 60,
                  symbolSize: 54,
                  value: '75',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司9', x: 200, y: 60,
                  symbolSize: 68,
                  value: '',
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '公司10', x: 200, y: 60,
                  symbolSize: 72,
                  value: '90',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司11', x: 200, y: 60,
                  symbolSize: 54,
                  value: '83',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '公司12', x: 200, y: 60,
                  symbolSize: 54,
                  value: '77',
                  itemStyle: { normal: { color: '#02957b' } }
                },
                
                {
                  name: '公司13', x: 300, y: 60,
                  symbolSize: 88,
                  value: '',
                  itemStyle: { normal: { color: '#0389d0' } }
                }
              ],
              links: [
                { source: '公司1', target: '公司2' },
                { source: '公司1', target: '公司3' },
                { source: '公司1', target: '公司4' },
                { source: '公司1', target: '公司5' },
                { source: '公司1', target: '公司6' },
                { source: '公司1', target: '公司7' },
                { source: '公司1', target: '公司8' },
                { source: '公司1', target: '公司9' },
                { source: '公司1', target: '公司10' },
                { source: '公司1', target: '公司11' },
                { source: '公司1', target: '公司12' },
                { source: '公司1', target: '公司13' },
              
              ]
            }
          ]
        },
        pagEcharts: {
          backgroundColor: '',
          series: [
            {
              type: 'graph',
              symbolSize: 50,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 16
                  }
                }
              },
              lineStyle: {
                normal: {
                  color: '#52a2a3',
                  curveness: 0.2,
                  width: 2
                }
              },
              data: [
                {
                  name: '年检情况33', x: 470, y: 5,
                  symbolSize: 76,
                  itemStyle: { normal: { color: '#cf5437' } }
                },
                {
                  name: '年检情况2', x: 510, y: 0,
                  symbolSize: 99,
                  itemStyle: { normal: { color: '#cf5437' } }
                },
                {
                  name: '企业性质', x: 550, y: 5,
                  symbolSize: 115,
                  itemStyle: { normal: { color: '#cf5437' } }
                },
                {
                  name: '税务\n等级', x: 490, y: 20,
                  symbolSize: 72,
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '违法\n违规', x: 450, y: 43,
                  symbolSize: 55,
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '企业\n荣誉', x: 470, y: 37,
                  symbolSize: 53,
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '基本\n信息', x: 495, y: 35,
                  symbolSize: 58,
                  itemStyle: { normal: { color: '#9142af' } }
                },
                {
                  name: '工商\n注册', x: 510, y: 30,
                  symbolSize: 54,
                  itemStyle: { normal: { color: '#02957b' } }
                },
                {
                  name: '评估\n方案', x: 480, y: 50,
                  symbolSize: 58,
                  itemStyle: { normal: { color: '#0389d0' } }
                }
              ],
              links: [
                { source: '年检情况', target: '税务\n等级' },
                { source: '年检情况2', target: '税务\n等级' },
                { source: '企业性质', target: '税务\n等级' },
                { source: '税务\n等级', target: '基本\n信息' },
                { source: '工商\n注册', target: '基本\n信息' },
                { source: '基本\n信息', target: '评估\n方案' },
                { source: '违法\n违规', target: '评估\n方案' },
                { source: '企业\n荣誉', target: '评估\n方案' }
              ]
            }
          ]
        },
        activeName: 'first',
        value: '',
        input1: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        curPage: 0,
        pageSize: 10,
        tableColumns: [
          {
            name: 'number',
            label: '序号',
            width: '80px'
          },
          {
            name: 'all',
            label: '题名',
          },
          {
            name: 'factory',
            label: '作者',
          },
          {
            name: 'workZone',
            label: '知识来源',
          },
          {
            name: 'station',
            label: '发表日期',
          },
          {
            name: 'bitNumber',
            label: '评分',
          },
          {
            name: 'occurrenceTime',
            label: '阅读量',
          },
          {
            name: 'deviceType',
            label: '下载量'
          },
        
        ],
        tableData: [],
        tableDataSource: []
      };
    },
    mounted() {
      this.getData();
    },
    computed: {
      startIndex: function () {
        return this.curPage * this.pageSize;
      },
      endIndex: function () {
        return (this.curPage + 1) * this.pageSize;
      }
    },
    methods: {
      handleClick() {
      
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.curPage = 0;
        this.getData();
      },
      handleCurrentChange(val) {
        this.curPage = val - 1;
        this.getData();
      },
      getData() {
        this.tableData = this.tableDataSource.slice(
          this.startIndex,
          this.endIndex
        );
      }
    }
  };
</script>


<style lang="scss">
  .knowledge-graph {
    .search-result-table {
      margin-top: 20px;
    }
    .upload-demo {
      text-align: center;
    }
    .chart {
      min-width: 150px;
      min-height: 70vh;
      padding-left: 10px;
      width: 100%;
    }
    
  }

</style>
