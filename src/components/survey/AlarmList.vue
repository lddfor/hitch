<!-- 设备报警列表 -->
<template>
  <div class="alarm-list">
    <div class="card-item" style="padding: 24px 10px 0;">
      <div class="search-result-table">
        <el-table :data="tableData" style="width: 100%" size="small" border height="80%">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            size="small"
            :label="column.label"
            :width="column.width"
          >
            <template slot-scope="scope">
              <span v-if="scope.row[scope.column.property] ==='高高报'" style="color: red;">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] ==='高报'" style="color: #e6a23c">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] ==='注意'" style="color: #00FFFF">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] ==='警告'" style="color: #FFFF00">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] !=='高高报'
                        && scope.row[scope.column.property] !=='高报'
                        && scope.row[scope.column.property] !=='警告'
                        && scope.row[scope.column.property] !=='注意'">{{scope.row[scope.column.property]}} </span>
    
              <!--<span></span>-->
              <!--{{scope.row[scope.column.property]}}  &lt;!&ndash; 渲染对应表格里面的内容 &ndash;&gt;-->
            </template>
          </el-table-column>
          <el-table-column label="操作">
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
    </div>
    <AlarmDetailDialog :detailDialog="detailDialog"></AlarmDetailDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import AlarmDetailDialog from "./AlarmDetailDialog";
export default {
  //import引入的组件需要注入到对象中才能使用
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
      pageSize: 10,
      // tableColumns: 存放在 computed 属性中
      tableData: [],
      tableDataSource: [
        {
          alarmTime: "2019.10.31 9:15:03",
          pointName: "压缩一级一缸排温",
          alarmLevel: "高高报",
          alarmType: "固定门限值报警",
          value: 140,
          alarmLimit: 135,
          alarmOrigin: "系统",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          no: 1
        },
        {
          alarmTime: "2019.10.31 9:15:4",
          pointName: "压缩一级二缸排温",
          alarmLevel: "高高报",
          alarmType: "固定门限值报警",
          value: 140,
          alarmLimit: 135,
          alarmOrigin: "电邮",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东8站",
          bitNumber: "SD7-YS-2",
          no: 2
        },
        {
          alarmTime: "2019.10.31. 9:15:5",
          pointName: "进气压力",
          alarmLevel: "高高报",
          alarmType: "固定门限值报警",
          value: 1.8,
          alarmLimit: 1.65,
          alarmOrigin: "短信",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东9站",
          bitNumber: "SD7-YS-3",
          no: 3
        },
        {
          alarmTime: "2019.10.31 9:15:6",
          pointName: "一级排气压力",
          alarmLevel: "高高报",
          alarmType: "固定门限值报警",
          value: 3.76,
          alarmLimit: 3.75,
          alarmOrigin: "系统",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东10站",
          bitNumber: "SD7-YS-4",
          no: 4
        },
        {
          alarmTime: "2019.10.31 9:15:7",
          pointName: "二级排气压力",
          alarmLevel: "高高报",
          alarmType: "固定门限值报警",
          value: 3.76,
          alarmLimit: 3.75,
          alarmOrigin: "电邮",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东11站",
          bitNumber: "SD7-YS-5",
          no: 5
        },
        {
          alarmTime: "2019.10.30 9:15:8",
          pointName: "进气温度",
          alarmLevel: "高报",
          alarmType: "趋势预警",
          value: 15,
          alarmLimit: 10,
          alarmOrigin: "短信",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东12站",
          bitNumber: "SD7-YS-6",
          no: 6
        },
        {
          alarmTime: "2019.10.30 21:15:8",
          pointName: "进气压力",
          alarmLevel: "高报",
          alarmType: "趋势预警",
          value: 15,
          alarmLimit: 10,
          alarmOrigin: "电邮",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东13站",
          bitNumber: "SD7-YS-7",
          no: 7
        },
        {
          alarmTime: "2019.10.30 20:15:8",
          pointName: "一级排气压力",
          alarmLevel: "高报",
          alarmType: "自适应阈值报警",
          value: 3.55,
          alarmLimit: 3.5,
          alarmOrigin: "电邮",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东14站",
          bitNumber: "SD7-YS-8",
          no: 8
        },
        {
          alarmTime: "2019.10.22 10:15:0",
          pointName: "二级排气压力",
          alarmLevel: "高报",
          alarmType: "自适应阈值报警",
          value: 3.65,
          alarmLimit: 3.5,
          alarmOrigin: "系统",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东15站",
          bitNumber: "SD7-YS-9",
          no: 9
        },
        {
          alarmTime: "2019.10.21 9:15:8",
          pointName: "压缩一级一缸排温",
          alarmLevel: "高报",
          alarmType: "自适应阈值报警",
          value: 121,
          alarmLimit: 120,
          alarmOrigin: "短信",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东16站",
          bitNumber: "SD7-YS-10",
          no: 10
        },
        {
          alarmTime: "2019.10.21 9:10:58",
          pointName: "压缩一级二缸排温",
          alarmLevel: "高报",
          alarmType: "自适应阈值报警",
          value: 125,
          alarmLimit: 120,
          alarmOrigin: "短信",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东17站",
          bitNumber: "SD7-YS-11",
          no: 11
        },
        {
          alarmTime: "2019.10.20 14:25:33",
          pointName: "进气温度",
          alarmLevel: "高报",
          alarmType: "趋势预警",
          value: 15,
          alarmLimit: 10,
          alarmOrigin: "系统",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东18站",
          bitNumber: "SD7-YS-12",
          no: 12
        },
        {
          alarmTime: "2019.10.20 11:15:45",
          pointName: "进气压力",
          alarmLevel: "高报",
          alarmType: "趋势预警",
          value: 15,
          alarmLimit: 10,
          alarmOrigin: "短信",
          oilField: "长庆油田",
          factory: "第五采气厂",
          field: "作业三区",
          station: "苏东19站",
          bitNumber: "SD7-YS-13",
          no: 13
        },
        {
          alarmTime: "",
          pointName: "",
          alarmLevel: "",
          alarmType: "",
          value: "",
          alarmLimit: "",
          alarmOrigin: "",
          oilField: "",
          factory: "",
          field: "",
          station: "",
          bitNumber: "",
          no: ""
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    tableColumns: function() {
      const tableColumns = [
        {
          name: "no",
          label: "编号",
          width: "50px"
        },
        // {
        //   name: "oilField",
        //   label: "单位",
        //   width: "80px"
        // },
        {
          name: "factory",
          label: "设备位置（一级）",
          width:"150p"
        },
        {
          name: "field",
          label: "设备位置（二级）",
          width: "150p",
          
        },
        {
          name: "station",
          label: "设备位置（三级）",
          width: "150px"
        },
        {
          name: "bitNumber",
          label: "设备位号"
        },
        {
          name: "alarmTime",
          label: "报警时间",
          width: "150px"
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
        
      ];

      const liteVersionColumnNames = [
        "station",
        "bitNumber",
        "pointName",
        "alarmLevel"
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
