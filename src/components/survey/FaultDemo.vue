<!-- 设备故障详情弹窗 -->
<template>
  <el-dialog title="诊断报告详情" :visible.sync="detailDialog.visible" width="680px" top="5vh">
    <div class="basic-detail-wrapper">

      <img src="/static/images/default-all.png" alt="" style="width: 100%;">
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
