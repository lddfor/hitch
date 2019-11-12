<template>
  <div class="user-center">
    <!--<title-message :inputName=""></title-message>-->
    <!-- 基本信息-->
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
        <el-button @click="userEdit" style="float: right; padding: 3px 0" type="text">编辑</el-button>
      </div>
      <div class="text item">
        <el-row :gutter="10">
          <el-col :span="3">
            <div class="block" size="small">
              <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </div>
          </el-col>
          <el-col :span="7">
            <div>账户姓名:</div>
            <div>登录账户:</div>
          </el-col>
          <el-col :span="7">
            <div>部门:</div>
          </el-col>
          <el-col :span="7">
            <div> 信息:</div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-row style="margin-top: 16px">
      <el-card>
        <div slot="header" class="clearfix">
          <span>安全信息</span>
          <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
        </div>
        <div class="text item">
          <el-row :gutter="10">
            <el-col :span="3">
              <div>账号等级</div>
              <div>手机绑定</div>
              <div>邮箱绑定</div>
              <div>登录密码</div>
              <div>账号安全</div>
            </el-col>
            <el-col :span="15">
              <div>良</div>
              <div>138XXXXXXXX</div>
              <div>mail@mail.com</div>
              <div>*******</div>
              <div>良</div>
            </el-col>
            <el-col :span="3">
              <div></div>
              <div>已设置</div>
              <div>未设置</div>
              <div>已设置</div>
              <div>已设置</div>
            </el-col>
            <el-col :span="3" class="card-edit-child">
              <div></div>
              <div>修改</div>
              <div>设置</div>
              <div>修改</div>
              <div>修改</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    
    </el-row>
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'user-center',
    components: {
      titleMessage,
    },
    data() {
      return {
        titleName: '个人中心',
      }
    },
    methods: {
      userEdit: function () {
        this.$router.push('/user-edit')
          .catch(err => {
          })
          .catch(err => {
          });
      }
    }
  };
</script>


<style lang="scss">
  .user-center {
    color: #cccccc;
    .el-card {
      font-size: 14px;
      background: #282828;
      .el-card__header {
        font-size: 16px;
        color: #cccccc;
        border-bottom: none;
      }
      .el-card__body {
        padding-bottom: 20px;
        color: #cccccc;
      }
      .item {
        font-weight: 400;
        .el-col {
          div:not(:last-child) {
            margin-bottom: 15px;
            
          }
          &.card-edit-child {
            div {
              color: #5075ED;
            }
          }
        }
        
      }
    }
  }
</style>
