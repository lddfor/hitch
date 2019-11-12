<template>
  <div class="survey-device">
    <title-message inputName="SD7-YS-1 设备信息"></title-message>
    <div class="main-content">
      <RouterView/>
    </div>
  
  
  </div>
</template>


<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'survey-device',
    components: {
      titleMessage
    }
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
  
  .right {
    text-align: right;
  }
  
  .survey-device{
    /*background: white;*/
  }
</style>
