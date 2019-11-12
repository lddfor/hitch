<template>
  <div class="data-view fullfill">
    <div class="tab">
      <router-link :to="{ path: './analysis' }">图谱分析</router-link>
      <router-link :to="{ path: './quantity' }">工艺量展示</router-link>
      <router-link :to="{ path: './info' }">技术参数</router-link>
    </div>

    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>


<script>
export default {
  name: "survey-tp"
};
</script>


<style lang="scss">
.tab {
  height: 48px;
  line-height: 48px;
  a {
    color: #71737d;
    padding: 0 8px;
    font-weight: 700;
    &.router-link-active {
      color: #5075ed;
    }
  }
}
</style>
