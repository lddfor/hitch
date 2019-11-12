<!-- 设备报警列表 -->
<template>
  <div class="alarm-list">
    <div class="main-content">
      <div class="search-result-table">
        <!--<div class="title-message">设备报警列表</div>-->
        <el-table :data="tableData" style="width: 100%;margin-top: 0px" size="mini" border>
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            size="mini"
            :label="column.label"
            :width="column.width">
            <template slot-scope="scope">
              <span v-if="scope.row[scope.column.property] ==='高高报'||scope.row[scope.column.property] ==='警告'" style="color: red;">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] ==='高报'||scope.row[scope.column.property] ==='注意'" style="color: #e6a23c">
                {{scope.row[scope.column.property]}}
              </span>
              <span v-if="scope.row[scope.column.property] !=='高高报' && scope.row[scope.column.property] !=='警告'
              && scope.row[scope.column.property] !=='高报' && scope.row[scope.column.property] !=='注意' ">{{scope.row[scope.column.property]}} </span>
              
              <!--<span></span>-->
              <!--{{scope.row[scope.column.property]}}  &lt;!&ndash; 渲染对应表格里面的内容 &ndash;&gt;-->
            </template>
          </el-table-column>
          
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
              <el-button @click="otheViewDetail(scope.row)"
                         :disabled="scope.row.alarmMessageStatus ==='未确认'"
                         type="text" size="small">
                <span v-bind:class="{ active: scope.row.alarmMessageStatus ==='未确认' }">{{openView(scope.row)}}</span>
              </el-button>
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
    </div>
    <el-dialog
      title="报警详情"
      :visible.sync="dialogTableVisible"
      width="30%">
      <div class="main-content">
        <div class="block survey-point">
          <div class="block-title">报警内容</div>
          <div class="block-content" style="">
            <div class="row">
              <p style="line-height: 20px">测点 <strong>压缩一级一缸排温</strong> 的当前值为 <i>121</i> 报警阈值是 <i>120</i> ,
                触发了<strong>自适应阈值报警</strong>,达到了 <strong>警告</strong> 级别</p>
            </div>
          </div>
        </div>
        <div class="block diagnosis">
          <div class="block-title">智能诊断结果</div>
          <div class="block-content">
            <p>根据工业模型进行自动诊断,导致报警的原因如下</p>
            <p>1、进排气阀泄漏</p>
            <p>2、进气温度过高</p>
            <p>3、气缸水套或水箱堵塞</p>
          </div>
        </div>
        
        <div class="block treatment">
          <div class="block-title">措施推荐</div>
          <div class="block-content">
            <p>根据知识图谱检索相关维护方案,推荐措施如下</p>
            <p>1、检修或更换</p>
            <p>2、找出进气温高的原因并排除</p>
            <p>3、检修并清洗</p>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogTableVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="dialogTableVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="otherViseible"
      width="30%">
      <div class="main-content" style="padding: 24px;">
        <div class="block treatment">
          <div class="block-title">处理方式</div>
          <div class="block-content">
            <div class="row">
              <el-radio-group v-model="treatment" @change="radioValue">
                <el-radio :label="1">误报</el-radio>
                <el-radio :label="2">有效</el-radio>
                <el-radio :label="3">忽略</el-radio>
              </el-radio-group>
              <div></div>
            </div>
          </div>
          <div v-if="treatment == '1'|| treatment=='2'">
            <div class="block-title">延期报警</div>
            <div class="block-content">
              <el-date-picker
                v-model="valuePicker"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>
         
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="otherViseible = false">取 消</el-button>
    <el-button type="primary" @click="otherViseible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  // import AlarmDetailDialog from './AlarmDetailDialog';
  
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      // AlarmDetailDialog
    },
    props: {
      pageAll: {
        default: 10
      }
    },
    data() {
      //这里存放数据
      return {
        valuePicker:"",
        dialogTableVisible: false,
        otherViseible: false,
        treatment: '',
        curPage: 0,
        pageSize: 3,
        tableColumns: [
          {
            name: 'no',
            label: '序号',
            width: '70px',
            
          },
          {
            name: 'alarmTime',
            label: '报警时间',
          },
          {
            name: 'pointName',
            label: '测点名称',
          },
          {
            name: 'alarmLevel',
            label: '报警等级'
          }],
        tableData: [],
        tableDataSource: [
          {
            no: 1,
            alarmTime: '2019-10-31',
            pointName: '压缩一级一缸排温',
            alarmLevel: '警告',
            alarmType: '固定门限值报警',
            value: 140,
            alarmLimit: 135,
            alarmOrigin: '系统',
            alarmMessageStatus: '未确认'
          },
          {
            no: 2,
            alarmTime: '2019-10-31',
            pointName: '压缩一级二缸排温',
            alarmLevel: '注意',
            alarmType: '固定门限值报警',
            value: 140,
            alarmLimit: 135,
            alarmOrigin: '电邮',
            alarmMessageStatus: '已忽略'
          },
          {
            no: 3,
            alarmTime: '2019-10-31',
            pointName: '进气压力',
            alarmLevel: '高高报',
            alarmType: '固定门限值报警',
            value: 1.8,
            alarmLimit: 1.65,
            alarmOrigin: '短信',
            alarmMessageStatus: '有效报警'
          },
          {
            no: 4,
            alarmTime: '2019-10-31',
            pointName: '一级排气压力',
            alarmLevel: '高高报',
            alarmType: '固定门限值报警',
            value: 3.76,
            alarmLimit: 3.75,
            alarmOrigin: '系统',
            alarmMessageStatus: '误报警'
          },
          {
            no: 5,
            alarmTime: '2019-10-31',
            pointName: '二级排气压力',
            alarmLevel: '高高报',
            alarmType: '固定门限值报警',
            value: 3.76,
            alarmLimit: 3.75,
            alarmOrigin: '电邮',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 6,
            alarmTime: '2019-10-31',
            pointName: '进气温度',
            alarmLevel: '高报',
            alarmType: '趋势预警',
            value: 15,
            alarmLimit: 10,
            alarmOrigin: '短信',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 7,
            alarmTime: '2019-10-31',
            pointName: '进气压力',
            alarmLevel: '高报',
            alarmType: '趋势预警',
            value: 15,
            alarmLimit: 10,
            alarmOrigin: '电邮',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 8,
            alarmTime: '2019-10-31',
            pointName: '一级排气压力',
            alarmLevel: '高报',
            alarmType: '自适应阈值报警',
            value: 3.55,
            alarmLimit: 3.5,
            alarmOrigin: '电邮',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 9,
            alarmTime: '2019-10-31',
            pointName: '二级排气压力',
            alarmLevel: '高报',
            alarmType: '自适应阈值报警',
            value: 3.65,
            alarmLimit: 3.5,
            alarmOrigin: '系统',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 10,
            alarmTime: '2019-10-31',
            pointName: '压缩一级一缸排温',
            alarmLevel: '高报',
            alarmType: '自适应阈值报警',
            value: 121,
            alarmLimit: 120,
            alarmOrigin: '短信',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 11,
            alarmTime: '2019-10-31',
            pointName: '压缩一级二缸排温',
            alarmLevel: '高报',
            alarmType: '自适应阈值报警',
            value: 125,
            alarmLimit: 120,
            alarmOrigin: '短信',
            alarmMessageStatus: '已诊断'
          },
          {
            no: 12,
            alarmTime: '2019-10-31',
            pointName: '进气温度',
            alarmLevel: '高报',
            alarmType: '趋势预警',
            value: 15,
            alarmLimit: 10,
            alarmOrigin: '系统',
            alarmMessageStatus: '已诊断'
          },
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
      radioValue(val){
      },
      viewDetail(row) {
        this.dialogTableVisible = true;
      },
      otheViewDetail(row) {
        if (row.alarmMessageStatus === '有效报警') {
          this.$router.push('/survey/organization/:id/alarm-detail');
          return
        }
        
        this.otherViseible = true;
        //
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
      },
      getScopeColumn(scope) {
      },
      openView(row) {
        if (row.alarmMessageStatus === '未确认') {
          return '忽略重复'
        }
        if (row.alarmMessageStatus === '已忽略') {
          return '修改状态'
        }
        if (row.alarmMessageStatus === '有效报警') {
          return '开始诊断'
        }
        if (row.alarmMessageStatus === '误报警') {
          return '修改状态'
        }
        if (row.alarmMessageStatus === '已诊断') {
          return '查看诊断 '
        }
      },
      next: function () {
      
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
  .alarm-list {
    .el-pagination{
      margin: 0;
    }
    p {
      line-height: 20px;
      margin: 0;
      color: #ccc;
    }
    .title-message {
      margin-bottom: 0px;
      font-weight: 700;
    }
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
  
  .block {
    .block-title {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
    }
    
    .block-content {
      margin-bottom: 16px;
      margin-left: 24px;
      line-height: 2.8;
    }
  }
  
  .active {
    color: #cccccc;
  }
</style>
