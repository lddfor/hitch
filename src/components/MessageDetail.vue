<template>
  <el-dialog title="消息详情" :visible.sync="detailDialog.visible" width="680px">
    <div class="detail">
      <div class="title">
        标题：
        <span>{{title}}</span>
      </div>
      <div class="title">
        时间：
        <span>{{time}}</span>
      </div>
      <div class="title">
        发件人：
        <span>{{sender}}</span>
      </div>
      <div class="title">
        详细内容：
        <span>{{content}}</span>
      </div>
      <div class="title">
        <el-button type="text">跳转</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "",
  props: ["detailDialog"],
  data() {
    return {
      title: "",
      time: "2019-10-09",
      sender: "用户A",
      content: "编号1、长庆油田、第四采气厂、2#、去周几震动、2019-10-09"
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
  .detail {
    padding-left: 24px;
  }
  .title {
    line-height: 40px;
  }
</style>