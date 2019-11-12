<template>
  <div class="data-view">
    <title-message inputName=""></title-message>
    <div class="tab-line" style="position: relative;margin-top: 36px;">
      <el-tabs v-model="activeName" @tab-click="changeTab">
        <el-tab-pane label="设备台账" name="1">
          <el-button type="primary" size="small">新建</el-button>
          <el-button type="primary" size="small">导出报表</el-button>
          <equipment-record></equipment-record>
        </el-tab-pane>
        <el-tab-pane label="启停机记录" name="2">
          <el-button type="primary" size="small">新建</el-button>
          <el-button type="primary" size="small">导出报表</el-button>
          <power-on-off-record v-bind.sync="dropdownData"></power-on-off-record>
        </el-tab-pane>
        <el-tab-pane label="检修记录" name="3">
          <el-button type="primary" size="small">新建</el-button>
          <el-button type="primary" size="small">导出报表</el-button>
          <check-record v-bind.sync="dropdownData"></check-record>
        </el-tab-pane>
        <el-tab-pane label="保养记录" name="4">
          <el-button type="primary" size="small">新建</el-button>
          <el-button type="primary" size="small">导出报表</el-button>
          <maintenance-record v-bind.sync="dropdownData"></maintenance-record>
        </el-tab-pane>
      </el-tabs>
      
      <el-input
        placeholder="搜索"
        suffix-icon="el-icon-search"
        v-model="keyword"
        style="position: absolute;top: 6px; right: 0; width: 280px;"
        size="mini"
      ></el-input>
    </div>
  </div>
</template>

<script>
  import titleMessage from '~/common/title-message.vue';
  import EquipmentRecord from '../components/equipment/EquipmentRecord';
  import PowerOnOffRecord from '../components/equipment/PowerOnOffRecord';
  import CheckRecord from '../components/equipment/CheckMaintenanceRecord';
  import MaintenanceRecord from '../components/equipment/MaintenanceRecord';
  
  export default {
    name: 'equipment',
    components: {
      titleMessage,
      EquipmentRecord,
      PowerOnOffRecord,
      CheckRecord,
      MaintenanceRecord
    },
    data() {
      return {
        activeName: '1',
        keyword: '',
        dropdownData: {
          factoryList: [
            {
              label: '第三采气厂',
              id: '1'
            },
            {
              label: '第四采气厂',
              id: '2'
            },
            {
              label: '第五采气厂',
              id: '3'
            }
          ],
          workZoneList: [
            {
              label: '作业三区',
              id: '3-1'
            }
          ],
          stationList: [
            {
              label: '苏东-7站',
              id: '3-1-1'
            }
          ],
          myForm: {
            hitchLevel1: '',
            hitchLevel2: '',
            hitchLevel3: '',
            bitNumber: ''
          }
        }
      };
    },
    
    watch: {
      $route(to, from) {
        if (to.params.id === from.params.id) {
          return;
        }
        console.log('form', to.params.id.split(':')[1]);
        let key = to.params.id.split(':')[1];
        // 点击侧边栏选中的链接
        this.activeName = key;
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      changeTab(tab) {
      }
    }
  };
</script>


<style lang="scss">
  .data-view {
  }
</style>
