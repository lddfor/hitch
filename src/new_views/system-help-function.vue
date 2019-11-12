<template>
  <div class="system-help-function">
    
    <div class="system-help-function-child">
      <div class="system-help-function-child-center">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/">综合检测</router-link> </el-link>
          </el-col>
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/smart-application/auto-diagnostics">智能应用</router-link> </el-link>
          </el-col>
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/smart-application/auto-diagnostics">统计分析</router-link> </el-link>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/equipment/:1">设备档案</router-link> </el-link>
          </el-col>
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/alarm-collocation">配置管理</router-link> </el-link>
          </el-col>
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/hitch">知识库管理</router-link> </el-link>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/template-management">报表管理</router-link> </el-link>
          </el-col>
          <el-col :span="6">
            <el-link type="primary"> <router-link to="/system-log">系统管理</router-link> </el-link>
          </el-col>
           <el-col :span="6">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'system-help-function',
    components: {
      titleMessage,
    },
    data() {
      return {
        titleName: '系统功能',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
  };
</script>


<style lang="scss">
  .system-help-function {
    .system-help-function-child {
      margin-top: 15px;
      width: calc(100% - 270px);
      height: calc(100% - 165px);
      position: absolute;
      display: flex;
      flex: 1;
      overflow: auto;
      align-items: center;
      justify-content: center;
      .system-help-function-child-center {
        height: 160px;
        width: 60%;
        a{
          color: #4f76ee;;
        }
      }
    }
  }
</style>
