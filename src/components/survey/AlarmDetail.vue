<!-- 设备报警详情 -->
<template>
  <div class="data-view">
    <div class="title_message with_back">
      <span class="go_back_sp" @click="userBack">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span>{{titleName}}</span>
    </div>

    <div class="main-content" style="padding: 24px;">
      <!-- <div class="block basic-info">
        <div class="block-title">基本信息</div>
        <div class="block-content">
          <div class="row">编号：1</div>
          <div class="row">单位：长庆</div>
          <div class="row">设备安装位置（一级）：第四采气厂</div>
          <div class="row">设备安装位置（二级）：作业二区</div>
          <div class="row">设备安装位置（三级）：2站</div>
          <div class="row">设备位号：1#</div>
        </div>
      </div>-->

      <div class="block survey-point">
        <div class="block-title">测点信息</div>
        <div class="block-content">
          <div class="row" style="display: flex;">
            <div class="flex" style="flex: 1;">测点名称：压缩一级一缸排温</div>
            <div class="flex" style="flex: 2;">时间：2019年10月31日9点15分3秒</div>
          </div>

          <div class="row" style="display: flex;">
            <div class="flex" style="flex: 1;">报警值：140</div>
            <div class="flex" style="flex: 2;">高报值：127</div>
          </div>

          <div class="row" style="display: flex;">
            <div class="flex" style="flex: 1;">高高报值：135</div>
            <div class="flex" style="flex: 2;">低报值：/</div>
          </div>

          <div class="row" style="display: flex;">
            <div class="flex" style="flex: 1;">低低报值：/</div>
            <div class="flex" style="flex: 2;">报警类型：固定门限值报警</div>
          </div>
        </div>
      </div>

      <div class="block diagnosis">
        <div class="block-title">智能诊断结果</div>
        <div class="block-content">
          <p>1、进排气阀泄漏</p>
          <p>2、进气温度过高</p>
        </div>
      </div>

      <div class="block treatment" v-if="!showMeasure">
        <div class="block-title">处理方式</div>
        <div class="block-content">
          <div class="row">
            <el-radio-group v-model="treatment">
              <el-radio :label="1">确认诊断</el-radio>
              <el-radio :label="2">人工诊断</el-radio>
            </el-radio-group>
          </div>
          <div class="row" style="padding: 8px 0 16px;">
            <el-button type="primary" @click="next">下一步</el-button>
          </div>
        </div>
      </div>

      <div class="block measure" v-if="showMeasure">
        <div class="block-title">措施推荐</div>
        <!-- <div class="block-content"> -->
        <el-input
          type="textarea"
          placeholder="措施推荐"
          v-model="measure"
          rows="5"
          maxlength="500"
          show-word-limit
        ></el-input>
        <!-- </div> -->
        <p></p>
        <el-button type="primary" @click="userBack">完成</el-button>
        <el-button type="primary" @click="goDanualDiagnosis">人工诊断</el-button>
      </div>
    </div>
    <!-- <AlarmDetailDialog :detailDialog="detailDialog"></AlarmDetailDialog> -->
    <FaultDetailDialog :detailDialog="detailDialog"></FaultDetailDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TitleMesage from "~/common/title-message.vue";
import AlarmDetailDialog from "./AlarmDetailDialog";
import FaultDetailDialog from "./FaultDetailDialog";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    TitleMesage,
    AlarmDetailDialog,
    FaultDetailDialog
  },
  data() {
    //这里存放数据
    return {
      titleName: "设备报警详情",
      detailDialog: {
        visible: false
      },
      treatment: 1,
      measure: `1、排查进排气阀\n2、检查冷却系统`,
      showMeasure: false,
      deviceId: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    viewDetail() {
      this.detailDialog.visible = true;
    },
    next() {
      if (this.treatment == 1) {
        if (!this.showMeasure) {
          this.showMeasure = true;
        }
      } else {
        this.goDanualDiagnosis();
      }
    },
    goDanualDiagnosis(){
      this.$router.push("/manual-diagnosis/device/analysis/analysis").catch(err=>{});
    },
    userBack: function() {
      this.$router.go(-1)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.deviceId = this.$route.params.id;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类

.title_message {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 10px;
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
</style>
