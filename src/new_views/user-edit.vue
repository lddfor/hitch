<template>
  <div class="user-edit">
    <div class="title_message with_back">
      <span class="go_back_sp" @click="userBack">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span>{{titleName}}</span>
    </div>
    <div class="user-edit-child">
     
      <el-form ref="form" :model="form" label-width="80px">
        <h3>基本信息</h3>
        <el-form-item label="账户姓名">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="登录账户">
          <el-input v-model="form.account" size="small"></el-input>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="form.other1" size="small"></el-input>
        </el-form-item>
        <el-form-item label="头像修改">
          <el-avatar size="large"  src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
          <span style="vertical-align: top;margin-left: 16px;margin-top: 5px">上传头像</span>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="form.other2" size="small"></el-input>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="form.other3" size="small"></el-input>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="form.other4" size="small"></el-input>
        </el-form-item>
        <div style="margin-left: 80px">
          <el-button type="primary" size="small">保存</el-button>
          <el-button @click="userBack" size="small">取消</el-button>
        </div>
      </el-form>
      
     
    </div>
  
  
  </div>
</template>

<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'user-edit',
    components: {
      titleMessage,
    },
    data() {
      return {
        titleName: '基本信息编辑',
        form: {
          name: '',
          account: '',
          other1: '',
          other2: '',
          other3: '',
          other4: ''
        }
      }
    },
    methods: {
      userBack: function () {
        this.$router.push('/user-center').catch(err=>{});
      }
    }
  };
</script>

<style lang="scss">
  .user-edit {
    .title_message {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 10px;
      margin-top: 10px;
      .el-icon-arrow-left {
        font-weight: 700;
      }
    }
    .user-edit-child {
      margin-top: 15px;
      width: calc(100% - 240px);
      height: calc(100% - 130px);
      /*background: white;*/
      position: absolute;
      display: flex;
      flex: 1;
      overflow: auto;
      padding: 0 16px;
      form {
        width: 40%;
      }
    }
  }
</style>
