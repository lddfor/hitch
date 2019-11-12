<!-- 设备故障详情弹窗 -->
<template>
  <el-dialog title="故障案例详情" :visible.sync="detailDialog.visible" width="680px">
    <div class="basic-detail-wrapper">
      <!-- row1 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          编号：
          <span>1</span>
        </div>
        <div class="flex" style="flex: 1;">
          故障特征：
          <span></span>
        </div>
      </div>

      <!-- row2 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          单位：
          <span>长庆</span>
        </div>
        <div class="flex" style="flex: 1;">
          故障分析：
          <span></span>
        </div>
      </div>

      <!-- row3 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          设备安装位置（一级）：
          <span>第四采气厂</span>
        </div>
        <div class="flex" style="flex: 1;">
          诊断建议：
          <span></span>
        </div>
      </div>

      <!-- row4 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          设备安装位置（二级）：
          <span>作业二区</span>
        </div>
        <div class="flex" style="flex: 1;"></div>
      </div>

      <!-- row5 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          设备安装位置（三级）：
          <span>2站</span>
        </div>
        <div class="flex" style="flex: 1;"></div>
      </div>

      <!-- row6 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          设备位号：
          <span>1#</span>
        </div>
        <div class="flex" style="flex: 1;">
          诊断日期：
          <span></span>
        </div>
      </div>

      <!-- row7 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          设备型号：
          <span>曲轴箱振动</span>
        </div>
        <div class="flex" style="flex: 1;">
          诊断单位：
          <span></span>
        </div>
      </div>

      <!-- row8 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          实时状态评估：
          <span></span>
        </div>
        <div class="flex" style="flex: 1;">
          诊断报告：
          <span>123</span>
          <el-button type="text" style="margin-left: 16px;">下载</el-button>
        </div>
      </div>

      <!-- row9 -->
      <div layout="row" class="flex-wrapper" style="display: flex;">
        <div class="flex" style="flex: 1;">
          状态简述：
          <span></span>
        </div>
        <div class="flex" style="flex: 1;"></div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["detailDialog"],
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
  .basic-detail-wrapper {
    padding: 16px 24px 32px;
    line-height: 2.8;
  }
</style>