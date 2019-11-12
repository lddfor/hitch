<!-- 图片查看 -->
<template>
  <el-dialog title="基本信息详情" :visible.sync="imgDialog.visible" width="480px">
    <img :src="imgSrc" style="width: 400px;height: 400px;margin: 0 auto;" />
  </el-dialog>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ['imgDialog'],
  data() {
    //这里存放数据
    return {
      baseSrc: "../assets/img/"
    };
  },
  //监听属性 类似于data概念
  computed: {
    imgSrc() {
      return this.baseSrc + this.imgDialog.imgName;
    }
  },
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
</style>