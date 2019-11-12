<!-- 在人工诊断 模型辅助右边 添加的静态资料-->
<template>
  <div>
    <el-card class="box-card card-item">
      <!-- 启停机记录-->
      <PowerOnOffRecord></PowerOnOffRecord>
    </el-card>
    <el-card class="box-card card-item maintenance">
      <!--设备保养记录-->
      <MaintenanceRecord :table-coloums="this.MaintenanceRecordSmallCloums"></MaintenanceRecord>
    </el-card>
    <el-card class="box-card card-item CheckMaintenanceRecord">
      <CheckMaintenanceRecord :table-coloums="this.CheckMaintenanceRecordTableColoums"></CheckMaintenanceRecord>
    </el-card>
  </div>
</template>


<script>
  import TpProcessAnalysis from '~/components/survey/TpProcessAnalysis';
  import PowerOnOffRecord from '~/components/survey/PowerOnOffRecord'
  import MaintenanceRecord from '~/components/equipment/MaintenanceRecord'
  import CheckMaintenanceRecord from '~/components/equipment/CheckMaintenanceRecord'
  
  export default {
    name: 'survey-tp-device-quantity',
    components: {
      TpProcessAnalysis,
      PowerOnOffRecord,
      MaintenanceRecord,
      CheckMaintenanceRecord //设备检修记录
    },
    data() {
      return {
        CheckMaintenanceRecordTableColoums: [
            {
          name: 'maintananceState',
          label: '维修情况',
        },
          {
            name: 'maintananceStartTime',
            label: '维修开始时间',
          },
          {
            name: 'maintananceEndTime',
            label: '维修结束时间',
          },
          {
            name: 'maintananceDepartment',
            label: '维修单位',
          },
          {
            name: 'maintanancePerson',
            label: '记录人',
          },
          {
            name: 'recordDate',
            label: '记录日期',
          }],
        MaintenanceRecordSmallCloums: [
          {
            name: "maintananceStartTime",
            label: "保养开始时间",
          },
          {
            name: "levelAll",
            label: "保养级别",
          },
          {
            name: "maintananceEndTime",
            label: "保养结束时间",
          },
          {
            name: "maintananceTimeRange",
            label: "保养历时",
          },
          {
            name: "maintananceChargePerson",
            label: "保养负责人",
          },
          {
            name: "recordPerson",
            label: "记录人",
          },
          {
            name: "recordDate",
            label: "记录日期",
          }
        ],
      };
    },
    mounted() {
      // 波形图
    },
    computed: {},
    methods: {}
  };
</script>


<style lang="scss">
  .el-card__body {
    padding-bottom: 0px;
  }
  
  .maintenance, .CheckMaintenanceRecord {
    margin-top: 16px;
    .el-card__body {
      padding: 0px;
    }
  }
</style>
