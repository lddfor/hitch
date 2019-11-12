<template>
  <div class="off-line">
    <title-message inputName="离线监测"></title-message>
    <div class="off-line-router-link">
      <router-link to="/off-line/report-form">报表</router-link>
      <router-link to="/off-line/trend-map" style="margin-left: 18px">趋势图</router-link>
      <RouterView/>
    </div>
  </div>
</template>

<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'offLine',
    components: {
      titleMessage,
    },
    data() {
      return {};
    },
    
    watch: {},
    computed: {},
    mounted() {
    },
    methods: {
      changeTab(tab) {
      
      },
      
    }
  };
</script>


<style lang="scss">
  .off-line {
    .off-line-router-link {
      a {
        color: #71737d;
        font-size: 14px;
        font-weight: 700;
        &.router-link-active {
          color: #409eff;
        }
      }
      
      
    }
  }
</style>
