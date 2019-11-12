<!-- 这个是 工业模型 表格组件 11 号 3 修改-->
<template>
  <div class="data-view survey-power">
    <div class="title" style="margin-bottom: 12px;font-size:14px;font-weight: 700;">工业模型应用</div>
    <div class="search-result-table">
      <el-table :data="tableData" style="width: 100%" border :span-method="objectSpanMethod">
        <el-table-column
          v-for="(column, index) in tableColumns"
          :key="index"
          :prop="column.name"
          :label="column.label"
          :width="column.width"
        
        ></el-table-column>
      </el-table>
      <div class="pager clearfix">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="tableDataSource.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        curPage: 0,
        pageSize: 10,
        tableColumns: [
          {
            name: 'number',
            label: '监测类型',
          },
          {
            name: 'curState',
            label: '模型名称',
          },
          {
            name: 'powerOnEvent',
            label: '机器学习模型',
          },
          {
            name: 'powerOnTime',
            label: '工作状态'
          }
        ],
        tableData: [],
        tableDataSource: [
          {
            number: '监测预警类',
            curState: '往复式压缩机机组曲轴箱振动智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警',
            powerOnTime: '工作中',
          },
          {
            number: '监测预警类',
            curState: '往复式压缩机机组活塞杆沉降智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警',
            powerOnTime: '工作中',
          },
          {
            number: '监测预警类',
            curState: '往复式压缩机机组十字头冲击智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警',
            powerOnTime: '工作中',
          },
          {
            number: '监测预警类',
            curState: '往复式压缩机机组动态压力智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警/',
            powerOnTime: '升级中',
          },
          {
            number: '监测预警类',
            curState: '往复式压缩机机组气阀温度智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警',
            powerOnTime: '升级中',
          },
          {
            number: '监测预警类',
            curState: '往复式压缩机机组工艺参量智能预警模型',
            powerOnEvent: '自适应阈值预警/趋势预警/多变量参数预警',
            powerOnTime: '已停用',
          },
          {
            number: '预测评估类',
            curState: '滚动轴承健康度评估模型',
            powerOnEvent: 'XX算法',
            powerOnTime: '已停用',
          },
          {
            number: '预测评估类',
            curState: '往复式压缩机运行状态评估模型',
            powerOnEvent: 'XX算法',
            powerOnTime: '已停用',
          }
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {
      startIndex: function () {
        return this.curPage * this.pageSize;
      },
      endIndex: function () {
        return (this.curPage + 1) * this.pageSize;
      }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      handleCurrentChange(val) {
        this.curPage = val - 1;
        this.getData();
      },
      getData() {
        this.tableData = this.tableDataSource.slice(
          this.startIndex,
          this.endIndex
        );
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 6 === 0)  {
            return {
              rowspan: 6,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 1
            };
          }
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getData();
    }
  };
</script>

<style lang='scss' scoped>
  //@import url(); 引入公共css类
  
  .survey-power {
    .el-table--medium {
      th,
      td {
        padding: 6px 0;
      }
    }
    
    .el-table:not(.el-table--public) {
      border: 0 none;
      box-shadow: none;
    }
    
    .el-table__header-wrapper,
    th.is-leaf,
    td {
      border-bottom: 0 none;
    }
  }
</style>
