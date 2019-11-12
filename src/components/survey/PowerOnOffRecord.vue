<!-- 监测分析 启停机记录 -->
<template>
  <div class="data-view survey-power">
    <div class="title" style="margin-bottom: 12px;font-size:14px;font-weight: 700;color: #ccc;">启停机记录</div>
    <div class="search-result-table">
      <el-table :data="tableData" style="width: 100%">
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-sizes="[3, 6, 9, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
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
      pageSize: 3,
      tableColumns: [
        {
          name: "number",
          label: "编号",
          width: "150px"
        },
        {
          name: "curState",
          label: "当前状态"
        },
        {
          name: "powerOnEvent",
          label: "启停事件"
        },
        {
          name: "powerOnTime",
          label: "启停机时间"
        },
        {
          name: "totalRunDuration",
          label: "累计运行时间"
        }
      ],
      tableData: [],
      tableDataSource: [
        {
          number: "1",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "2",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "3",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "4",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "5",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "6",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "7",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "8",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        },
        {
          number: "9",
          curState: "开机",
          powerOnEvent: "开机",
          powerOnTime: "2019-10-09",
          totalRunDuration: "5小时"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    startIndex: function() {
      return this.curPage * this.pageSize;
    },
    endIndex: function() {
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
      console.log(`当前页: ${val}`);
    },
    getData() {
      this.tableData = this.tableDataSource.slice(
        this.startIndex,
        this.endIndex
      );
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.curPage = 0;
      this.getData();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
