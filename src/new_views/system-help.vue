<template>
  <div class="system-help">
    <title-message :inputName="titleName"></title-message>
    
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <router-link to="/system-help/function">
            <div style="line-height: 32px">系统功能</div>
          </router-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <router-link to="/system-help/question" style="line-height: 32px">
            <div>Q & A</div>
          </router-link>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple" style="text-align: right">
          <el-input
            size="mini"
            placeholder="请输入内容"
            style="width: 300px"
            v-model="input"
            suffix-icon="el-icon-search"
            clearable>
          </el-input>
        </div>
      </el-col>
    </el-row>
    
    
    <RouterView/>
    <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
    <!--<el-tab-pane label="系统功能" name="first">系统功能</el-tab-pane>-->
    <!--<el-tab-pane label="Q  &  A " name="second">Q &A  </el-tab-pane>-->
    <!---->
    <!--</el-tabs>-->
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'system-help',
    components: {
      titleMessage,
    },
    data() {
      return {
        titleName: '用户帮助',
        input: '',
      }
    },
    methods: {
      handleClick(tab, event) {
      },
    },
  };
</script>


<style lang="scss">
  .system-help {
    width: 100%;
    a {
      color: #71737d;
      line-height: 34px;
      /*font-weight: 700;*/
    }
    .router-link-active {
      color: #4f76ee;
    }
  }
</style>
