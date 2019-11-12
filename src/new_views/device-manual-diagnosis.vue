<template>
  <div class="data-view">
    <div class="fullscreen">
      <div class="title_message with_back">
        <span class="go_back_sp" @click="userBack">
          <i class="el-icon-arrow-left"></i>
        </span>
        <span>{{titleName}}</span>
      </div>

      <div class="tab">
        <router-link :to="{ path: './analysis' }">图谱分析</router-link>
        <router-link :to="{ path: './quantity' }">工艺量展示</router-link>
        <router-link :to="{ path: './info' }">技术参数</router-link>
        <router-link :to="{ path: './model-assistant' }">模型辅助</router-link>
        <!--<router-link :to="{ path: './on-off' }">启停机记录</router-link>-->
        <!--<router-link :to="{ path: './take-care' }">保养记录</router-link>-->
        <!--<router-link :to="{ path: './overhaul' }">检修记录</router-link>-->
        <router-link :to="{ path: './static-data' }">静态资料</router-link>
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>


<script>
import TpAnalysis from "~/components/survey/TpAnalysis";

export default {
  name: "survey-tp-device-analysis",
  components: {
    TpAnalysis
  },
  data() {
    return {
      titleName: "人工诊断"
    };
  },
  mounted() {
    // 波形图
  },
  computed: {},
  methods: {
    userBack: function() {
      this.$router.push("/survey/device/11111/analysis").catch(err => {});
    }
  }
};
</script>


<style lang="scss">
.title_message {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 10px;
}

.dark-themes .data-view {
  margin-left: 0;
}

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

