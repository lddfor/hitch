<template>
  <div>
    <div class="tab">
      <router-link :to="{ path: './auto-diagnostics' }">自动诊断</router-link>
      <router-link :to="{ path: './integrated-diagnostics' }">综合诊断</router-link>
      <router-link :to="{ path: './ai-diagnosis' }">模型诊断</router-link>
      <router-link :to="{ path: './prediction' }">智能预测</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
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