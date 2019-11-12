<!-- 设备报警列表 -->
<template>
  <div class="alarm-list">
    <div class="search-result-table">
      <p></p>
      <el-table :data="tableData" size="mini" border>
        <el-table-column
          v-for="(column, index) in tableColumns"
          :key="index"
          :prop="column.name"
          :label="column.label"
          :width="column.width"
          size="mini"
          sortable
        >
          <template slot-scope="scope">
            <div @click="viewDetail(scope.row)">
              <span
                v-if="scope.row[scope.column.property] ==='高高报'"
                style="color: red;"
              >{{scope.row[scope.column.property]}}</span>
              <span
                v-if="scope.row[scope.column.property] ==='高报'"
                style="color: #e6a23c"
              >{{scope.row[scope.column.property]}}</span>
              <span
                v-if="scope.row[scope.column.property] !=='高高报'  && scope.row[scope.column.property] !=='高报'"
              >{{scope.row[scope.column.property]}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager clearfix" style="text-align:right">
        <p></p>
        <el-link type="primary" style="font-size: 12px">
          <router-link to="/survey/organization/1/alarm-record-analysis/list" :underline="false">查看所有  &nbsp;&nbsp;</router-link>
        </el-link>
        <p></p>
      </div>
    </div>
    <AlarmDetailDialog :detailDialog="detailDialog"></AlarmDetailDialog>
  </div>
</template>

<script>
import AlarmDetailDialog from "./AlarmDetailDialog";
export default {
  components: {
    AlarmDetailDialog
  },
  props: {
    liteVersion: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    //这里存放数据
    return {
      detailDialog: {
        visible: false
      },
      curPage: 0,
      pageSize: 8,
      // tableColumns: 存放在 computed 属性中
      tableData: [],
      tableDataSource: [
    {
        "no": 1,
        "alarmTime": "09:15:03",
        "pointName": "压缩一级一缸排温",
        "alarmLevel": "警告",
        "alarmType": "自适应阈值预警",
        "value": 121,
        "alarmLimit": 120,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 2,
        "alarmTime": "09:15:04",
        "pointName": "进气温度",
        "alarmLevel": "警告",
        "alarmType": "趋势预警",
        "value": 15,
        "alarmLimit": 10,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 3,
        "alarmTime": "09:15:05",
        "pointName": "一级排气压力",
        "alarmLevel": "警告",
        "alarmType": "自适应阈值预警",
        "value": 3.55,
        "alarmLimit": 3.5,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 4,
        "alarmTime": "09:15:06",
        "pointName": "二级排气压力",
        "alarmLevel": "警告",
        "alarmType": "自适应阈值预警",
        "value": 3.65,
        "alarmLimit": 3.5,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 5,
        "alarmTime": "09:15:07",
        "pointName": "进气压力",
        "alarmLevel": "警告",
        "alarmType": "趋势预警",
        "value": 15,
        "alarmLimit": 10,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 6,
        "alarmTime": "09:15:08",
        "pointName": "压缩一级二缸排温",
        "alarmLevel": "警告",
        "alarmType": "自适应阈值预警",
        "value": 125,
        "alarmLimit": 120,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 7,
        "alarmTime": "09:15:08",
        "pointName": "进气温度",
        "alarmLevel": "警告",
        "alarmType": "趋势预警",
        "value": 15,
        "alarmLimit": 10,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 8,
        "alarmTime": "08:15:08",
        "pointName": "进气压力",
        "alarmLevel": "警告",
        "alarmType": "趋势预警",
        "value": 15,
        "alarmLimit": 10,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 9,
        "alarmTime": "10:15:00",
        "pointName": "压缩一级一缸排温",
        "alarmLevel": "高报",
        "alarmType": "固定门限值报警",
        "value": 140,
        "alarmLimit": 135,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 10,
        "alarmTime": "09:15:08",
        "pointName": "压缩一级二缸排温",
        "alarmLevel": "高报",
        "alarmType": "固定门限值报警",
        "value": 140,
        "alarmLimit": 135,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 11,
        "alarmTime": "09:10:58",
        "pointName": "进气压力",
        "alarmLevel": "高报",
        "alarmType": "固定门限值报警",
        "value": 1.8,
        "alarmLimit": 1.65,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 12,
        "alarmTime": "02:25:33",
        "pointName": "一级排气压力",
        "alarmLevel": "高高报",
        "alarmType": "固定门限值报警",
        "value": 3.76,
        "alarmLimit": 3.75,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    },
    {
        "no": 13,
        "alarmTime": "11:15:45",
        "pointName": "二级排气压力",
        "alarmLevel": "高高报",
        "alarmType": "固定门限值报警",
        "value": 3.76,
        "alarmLimit": 3.75,
        "alarmOrigin": "系统",
        "oilField": "长庆油田",
        "factory": "第五采气厂",
        "field": "作业三区",
        "station": "苏东7站",
        "bitNumber": "SD7-YS-1"
    }
]
    };
  },
  //监听属性 类似于data概念
  computed: {
    tableColumns: function() {
      const tableColumns = [
        {
          name: "alarmTime",
          label: "报警时间"
        },
        {
          name: "no",
          label: "编号"
        },
        {
          name: "oilField",
          label: "单位"
        },
        {
          name: "factory",
          label: "设备安装位置（一级）"
        },
        {
          name: "field",
          label: "设备安装位置（二级）"
        },
        {
          name: "station",
          label: "位置"
        },
        {
          name: "bitNumber",
          label: "设备位号"
        },

        {
          name: "pointName",
          label: "测点名称"
        },
        {
          name: "alarmLevel",
          label: "报警等级"
        },
        {
          name: "alarmType",
          label: "报警类型"
        },
        {
          name: "value",
          label: "报警值"
        },
        {
          name: "alarmLimit",
          label: "报警阈值"
        },
        {
          name: "alarmOrigin",
          label: "报警方式"
        }
      ];

      const liteVersionColumnNames = [
        "station",
        "bitNumber",
        "pointName",
        "alarmLevel",
        "alarmTime"
      ];

      if (this.liteVersion) {
        return tableColumns.filter(
          column =>
            column.hasOwnProperty("name") &&
            liteVersionColumnNames.includes(column.name)
        );
      } else {
        return tableColumns;
      }
    },
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
    viewDetail(row) {
      this.detailDialog.visible = true;
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
.alarm-list {
  .el-table--medium {
    th,
    td {
      padding: 6px 0 !important;
    }
  }
  th.is-leaf {
    border-bottom: none !important;
  }

  .el-table:not(.el-table--public) {
    border: 0 none;
    box-shadow: none;

    .el-table__header-wrapper,
    th.is-leaf,
    td {
      border-bottom: 0 none !important;
    }
  }
}
</style>
