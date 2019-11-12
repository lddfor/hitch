<!-- 设备故障记录列表 -->
<template>
  <div class="data-view">
    <div class="main-content" style="padding: 24px 24px 0;">
      <div class="search-result-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
          <el-table-column v-if="false" fixed="right" label="操作" width="100">
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
    <FaultDetailDialog :detailDialog="detailDialog"></FaultDetailDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import FaultDetailDialog from "./FaultDetailDialog";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    FaultDetailDialog
  },
  data() {
    //这里存放数据
    return {
      detailDialog: {
        visible: false
      },
      curPage: 0,
      pageSize: 10,
      tableColumns: [
        {
          name: "number",
          label: "编号",
          width: "50px"
        },
        // {
        //   name: "oilField",
        //   label: "单位",
        //   width: "100px"
        // },
        {
          name: "factory",
          label: "设备位置（一级）",
        },
        {
          name: "workZone",
          label: "设备位置（二级）",
        },
        {
          name: "station",
          label: "设备位置（三级）",
        },
        {
          name: "bitNumber",
          label: "设备位号",
        },
        {
          name: "faultTime",
          label: "报警时间",
        },
        {
          name: "diagnosisResult",
          label: "诊断结果"
        },
        {
          name: "checkState",
          label: "审核状态",
          width: "120px"
        }
      ],
      tableData: [],
      tableDataSource: [
        {
          number: 1,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月31日9点15分3秒",
          diagnosisResult: "1、进排气阀泄漏\n2、进气温度过高",
          checkState: "已审核"
        },
        {
          number: 2,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月31日9点15分4秒",
          diagnosisResult: "1、进排气阀泄漏\n2、进气温度过高",
          checkState: "已审核"
        },
        {
          number: 3,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月31日9点15分5秒",
          diagnosisResult: "活塞杆磨损",
          checkState: "已审核"
        },
        {
          number: 4,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月31日9点15分6秒",
          diagnosisResult: "气阀故障",
          checkState: "已审核"
        },
        {
          number: 5,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月31日9点15分7秒",
          diagnosisResult: "气阀故障",
          checkState: "已审核"
        },
        {
          number: 6,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月30日21点15分8秒",
          diagnosisResult: "活塞杆磨损",
          checkState: "已审核"
        },
        {
          number: 7,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月21日9点15分8秒",
          diagnosisResult: "1、进排气阀泄漏\n2、进气温度过高",
          checkState: "已审核"
        },
        {
          number: 8,
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东7站",
          bitNumber: "SD7-YS-1",
          faultTime: "2019年9月21日9点10分58秒",
          diagnosisResult: "1、进排气阀泄漏\n2、进气温度过高",
          checkState: "已审核"
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
</style>
