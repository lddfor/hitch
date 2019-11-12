<template>
  <div class="home-view">
    <Leftbar />  <!-- 这个是侧边栏-->
    <Topbar />   <!-- 这个是header -->
    <div class="home-content">
      <RouterView />
    </div>
  </div>
</template>


<script>
import Leftbar from './Leftbar';
import Topbar from './Topbar';

export default {
  name: 'home-view',
  components: {
    Leftbar,
    Topbar,
  },
};
</script>


<style lang="scss">
.home-view {
  box-sizing: border-box;
  min-height: 100%;
  .home-content {
    margin: 0 20px 0 84px;
    padding: 60px 0 20px 0;
  }
}
</style>
