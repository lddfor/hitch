<!-- 这里是自动诊断 -->
<template>
  <!--<title-message inputName="故障案例库"></title-message>-->
  <div class="main-content">
    <div>
      <span :underline="false" type="info" style="margin-bottom: 10px">
        在过去的
        <span style="color: #5075ed;"> 最近一天</span>
        内，系统利用
        <span  style="color: #5075ed;">12个智能诊断模型</span>
        ,共进行了34次自动诊断。
      </span>
    </div>
    
    <div class="search-form">
      <el-form :inline="true" :model="myForm" class="demo-form-inline">
        <el-form-item label>
          <el-select @change="firstChange" size="mini" v-model="myForm.hitchLevel1" placeholder="查询方式">
            <el-option label="最近一个月" value="mouth"></el-option>
            <el-option label="最近一个星期" value="week"></el-option>
            <el-option label="最近一天" value="day"></el-option>
            <el-option label="自定义" value="self"></el-option>
          </el-select>
        </el-form-item>
       
        <el-form-item>
          <el-date-picker
            v-if="selfIsTrue"
            size="mini"
            v-model="valueTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-cascader
            size="mini"
            v-model="valueCascader"
            :options="getOrganizationTreeChildren"
            @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-select size="mini" v-model="deviceName" placeholder="模型名称">
            <el-option label="自适应阈值预警" value="mouth"></el-option>
            <el-option label="趋势预警" value="week"></el-option>
            <el-option label="固定门限值预警" value="week"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select size="mini" v-model="alarmLevel" placeholder="报警等级">
            <el-option label="警告" value="mouth"></el-option>
            <el-option label="注意" value="week2"></el-option>
            <el-option label="高报" value="week3"></el-option>
            <el-option label="高高报" value="week4"></el-option>
            <el-option label="低报" value="week5"></el-option>
            <el-option label="低低报" value="week6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-input
            size="mini"
            placeholder="搜索"
            suffix-icon="el-icon-search"
            v-model="myForm.caseName"
          ></el-input>
        </el-form-item>
  
        <el-form-item>
          <el-button type="text" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="search-result-table">
      <el-table :data="tableData" style="width: 100%" size="mini">
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

</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  import HitchDetail from '../components/HitchDetail';
  import getOrganizationTree from '../mock_api/data/organization_tree'
  export default {
    name: 'hitch',
    components: {
      titleMessage,
      HitchDetail
    },
    data() {
      return {
        alarmLevel:"",
        deviceName:"",
        getOrganizationTreeChildren:getOrganizationTree[0].children,
        valueCascader:[],
        valueTime:"",
        selfIsTrue:false,
        detailForm: {
          name: '',
          name2: '',
          name3: '',
          name4: '',
          name5: '',
        },
        myForm: {
          hitchLevel1: '',
        },
        
        valueCascader: '',
        options: [],
        demoCascader: [],
        curPage: 0,
        pageSize: 10,
        detailDialog: {
          visible: false
        },
        tableColumns: [
          {
            name: 'number',
            label: '序号',
            width: '80px'
          },
          {
            name: 'all',
            label: '时间',
          },
          {
            name: 'factory',
            label: '测点名称',
          },
          {
            name: 'workZone',
            label: '报警等级',
          },
          {
            name: 'station',
            label: '报警值',
          },
          {
            name: 'bitNumber',
            label: '智能模型名称',
          },
          {
            name: 'occurrenceTime',
            label: '诊断结果',
          },
          {
            name: 'deviceType',
            label: '推荐处理措施',
          }
        ],
        
        tableDataSource: [
          {
            number: '1',
            all: '2019年10月31日9点15分3秒',//时间
            factory: '压缩一级一缸排温', // 测点名称
            workZone: '警告',  //报警等级
            station: '121', // 报警值
            bitNumber: '自适应阈值预警',// 智能模型名称
            occurrenceTime: '1、进排气阀泄漏 2、进气温度过高', //诊断结果
            deviceType: '1、更换气阀 2、排查进气温度', //推荐处理措施
          },
          {
            number: '2',
            all: '2019年10月31日9点15分4秒',//时间
            factory: '进气温度', // 测点名称
            workZone: '警告',  //报警等级
            station: '15', // 报警值
            bitNumber: '趋势预警',// 智能模型名称
            occurrenceTime: '1、进排气阀泄漏2、进气温度过高', //诊断结果
            deviceType: '1、更换气阀 3、排查进气温度', //推荐处理措施
          },
          {
            number: '3',
            all: '2019年10月31日9点15分5秒',//时间
            factory: '一级排气压力', // 测点名称
            workZone: '注意',  //报警等级
            station: '3.55', // 报警值
            bitNumber: '自适应阈值预警',// 智能模型名称
            occurrenceTime: '活塞杆磨损', //诊断结果
            deviceType: '更换活塞杆', //推荐处理措施
          },
          {
            number: '4',
            all: '2019年10月31日9点15分6秒',//时间
            factory: '二级排气压力', // 测点名称
            workZone: '注意',  //报警等级
            station: '3.65', // 报警值
            bitNumber: '自适应阈值预警',// 智能模型名称
            occurrenceTime: '气阀故障', //诊断结果
            deviceType: '更换气阀', //推荐处理措施
          },
          {
            number: '5',
            all: '2019年10月31日9点15分7秒',//时间
            factory: '进气压力', // 测点名称
            workZone: '警告',  //报警等级
            station: '15', // 报警值
            bitNumber: '趋势预警',// 智能模型名称
            occurrenceTime: '气阀故障', //诊断结果
            deviceType: '更换气阀', //推荐处理措施
          },
          {
            number: '6',
            all: '2019年10月30日9点15分8秒',//时间
            factory: '压缩一级二缸排温', // 测点名称
            workZone: '警告',  //报警等级
            station: '125', // 报警值
            bitNumber: '自适应阈值预警',// 智能模型名称
            occurrenceTime: '活塞杆磨损', //诊断结果
            deviceType: '更换活塞杆', //推荐处理措施
          },
          {
            number: '7',
            all: '2019年10月30日21点15分8秒',//时间
            factory: '进气温度', // 测点名称
            workZone: '注意',  //报警等级
            station: '15', // 报警值
            bitNumber: '趋势预警',// 智能模型名称
            occurrenceTime: '1、进排气阀泄漏2、进气温度过高', //诊断结果
            deviceType: '1、更换气阀 2、排查进气温度', //推荐处理措施
          },
          {
            number: '8',
            all: '2019年10月30日20点15分8秒',//时间
            factory: '进气压力', // 测点名称
            workZone: '注意',  //报警等级
            station: '15', // 报警值
            bitNumber: '趋势预警',// 智能模型名称
            occurrenceTime: '1、进排气阀泄漏2、进气温度过高', //诊断结果
            deviceType: '1、更换气阀 2、排查进气温度', //推荐处理措施
          },
          {
            number: '9',
            all: '2019年10月22日10点15分0秒',//时间
            factory: '压缩一级一缸排温', // 测点名称
            workZone: '高报',  //报警等级
            station: '140', // 报警值
            bitNumber: '固定门限值报警',// 智能模型名称
            occurrenceTime: '活塞杆磨损', //诊断结果
            deviceType: '1、更换气阀 2、排查进气温度', //推荐处理措施
          },
          {
            number: '10',
            all: '2019年10月21日9点15分8秒',//时间
            factory: '压缩一级二缸排温', // 测点名称
            workZone: '高报',  //报警等级
            station: '140', // 报警值
            bitNumber: '固定门限值报警',// 智能模型名称
            occurrenceTime: '气阀故障', //诊断结果
            deviceType: '更换活塞杆', //推荐处理措施
          },
          {
            number: '11',
            all: '2019年10月21日9点10分58秒',//时间
            factory: '进气压力', // 测点名称
            workZone: '高报',  //报警等级
            station: '1.8', // 报警值
            bitNumber: '固定门限值报警',// 智能模型名称
            occurrenceTime: '气阀故障', //诊断结果
            deviceType: '更换气阀', //推荐处理措施
          },
          {
            number: '12',
            all: '2019年10月20日14点25分33秒',//时间
            factory: '一级排气压力', // 测点名称
            workZone: '高高报',  //报警等级
            station: '3.76', // 报警值
            bitNumber: '固定门限值报警',// 智能模型名称
            occurrenceTime: '活塞杆磨损', //诊断结果
            deviceType: '更换活塞杆', //推荐处理措施
          },
          {
            number: '13',
            all: '2019年10月20日11点15分45秒',//时间
            factory: '二级排气压力', // 测点名称
            workZone: '高高报',  //报警等级
            station: '3.76', // 报警值
            bitNumber: '固定门限值报警',// 智能模型名称
            occurrenceTime: '活塞杆磨损', //诊断结果
            deviceType: '更换活塞杆', //推荐处理措施
          }
        ],
        tableData: [],
      };
    },
    computed: {
      startIndex: function () {
        return this.curPage * this.pageSize;
      },
      endIndex: function () {
        return (this.curPage + 1) * this.pageSize;
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      
      firstChange(val) {
        if(val === 'self'){
           this.selfIsTrue = true
        }else{
          this.selfIsTrue = false
        }
      },
      handleChange() {
      
      },
      onSubmit() {
      },
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
    }
  };
</script>


<style lang="scss">
  .data-view {
  }
</style>
