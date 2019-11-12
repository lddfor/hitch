<template>
  <div class="system-help-question">
    <div class="system-help-question-child">
      <h3>问题列表</h3>
      <p>Q : 问题描述一</p>
      <p>A : 问题答案一</p>
      <el-divider style="color: red;"></el-divider>
      <p>Q : 问题描述二</p>
      <p>A : 问题答案二</p>
      <el-divider></el-divider>
      <p>Q : 问题描述三</p>
      <p>A : 问题答案三</p>
      <el-divider></el-divider>
      <p>Q : 问题描述四</p>
      <p>A : 问题答案四</p>
      <el-divider></el-divider>
      <p>Q : 问题描述五</p>
      <p>A : 问题答案五</p>
      <el-divider></el-divider>
      <p>Q : 问题描述六</p>
      <p>A : 问题答案六</p>
      <el-divider></el-divider>
      <p>Q : 问题描述七</p>
      <p>A : 问题答案七</p>
      <el-divider></el-divider>
      
    </div>
  </div>
</template>


<script>
import titleMessage from "~/common/title-message.vue";

export default {
  name: "system-help-question",
  components: {
    titleMessage
  },
  data() {
    return {
      titleName: "Q&A"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style lang="scss">
.system-help-question {
  
  .system-help-question-child {
    width: 80%;
  }
}
</style>
