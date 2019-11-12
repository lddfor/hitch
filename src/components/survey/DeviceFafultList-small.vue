<!--设备监测分析页面的设备故障记录列表-->
<template>
  <div class="main-content">
    <div class="search-result-table">
      <!--<div class="title-message">-->
        <!--<span style="font-weight: 700;font-size: 14px">设备故障记录列表</span>-->
        <!--<span>（设备故障总数量8个）</span></div>-->
      <el-table :data="tableData" style="width: 100%;margin-top: 10px" size="mini">
        <el-table-column
          v-for="(column, index) in tableColumns"
          :key="index"
          :prop="column.name"
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
            <span v-if="scope.row[scope.column.property] !=='高高报'  && scope.row[scope.column.property] !=='高报'">{{scope.row[scope.column.property]}} </span>
            
            <!--<span></span>-->
            <!--{{scope.row[scope.column.property]}}  &lt;!&ndash; 渲染对应表格里面的内容 &ndash;&gt;-->
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="viewDetail(scope.row)" type="text" size="small">更多</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager clearfix">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-size="3"
          layout="prev, pager, next"
          :total="tableDataSource.length"
        ></el-pagination>
      </div>
    </div>
    <FaultDetailDialog :detailDialog="detailDialog"></FaultDetailDialog>
  </div>

</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import FaultDetailDialog from './FaultDetailDialog'
  
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
        pageSize: 3,
        tableColumns: [
          {
            name: 'number',
            label: '序号',
            width: '80px'
          },
          // {
          //   name: "statusAssess",
          //   label: "实时状态评估",
          // },
          // {
          //   name: "anaysisTime",
          //   label: "故障时间",
          // },
          // {
          //   name: "statusSketch",
          //   label: "状态简述",
          // },
          {
            name: 'alarmTime',
            label: '报警时间',
          },
          {
            name: 'alarmPointName',
            label: '报警测点名称',
          },
          {
            name: 'deviceGrade',
            label: '报警等级',
          },
          {
            name: 'diagnosticResults',
            label: '诊断结果',
          }
          // ,
          // {
          //   name: "auditStatus",
          //   label: "审核状态",
          // }
        ],
        tableData: [],
        tableDataSource: [
          {
            number: '1',
            // statusAssess:'',                          // 实时状态评估
            // anaysisTime:"",                           // 故障时间
            deviceGrade: '高高报',                        // 报警等级
            statusSketch: '',                              // 状态简述
            alarmTime: '2019.9.29.8:18:4',            // 报警时间
            alarmPointName: '二缸排温',               // 报警测点名称
            diagnosticResults: '活塞杆磨损', // 诊断结果
            auditStatus: '已审核',                          // 审核状态
          },
          {
            number: '2',
            deviceGrade: '高高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '二缸排温',    // 报警测点名称
            diagnosticResults: '活塞杆磨损', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '3',
            deviceGrade: '高高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '二缸排温',    // 报警测点名称
            diagnosticResults: '活塞杆磨损', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '4',
            deviceGrade: '高高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '一级排气压力',    // 报警测点名称
            diagnosticResults: '活塞杆磨损', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '5',
            deviceGrade: '高高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '二级排气压力',    // 报警测点名称
            diagnosticResults: '气阀故障', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '6',
            deviceGrade: '高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '活塞杆沉降',    // 报警测点名称
            diagnosticResults: '气阀故障', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '7',
            deviceGrade: '高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '压缩一级二缸排温',    // 报警测点名称
            diagnosticResults: '活塞杆磨损', // 诊断结果
            auditStatus: '已审核',       // 审核状态
          },
          {
            number: '8',
            deviceGrade: '高报',      // 报警等级
            statusSketch: '',      // 状态简述
            alarmTime: '2019.9.29.8:18:4',         // 报警时间
            alarmPointName: '压缩一级二缸排温',    // 报警测点名称
            diagnosticResults: '1,进排气阀泄露2,进气温度过高', // 诊断结果
            auditStatus: '已审核',       // 审核状态
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
      viewDetail(row) {
        // this.detailDialog.visible = true;
        this.$router.push('/survey/organization/1/fault-record-analysis/overview')
          .catch(err => {
          })
          .catch(err => {
          })
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
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getData();
    }
  };
</script>
<style lang='scss' scoped>
  .title-message {
    margin-bottom: 0px;
    font-weight: 700;
  }
  
  //@import url(); 引入公共css类
</style>

