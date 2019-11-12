<template>
  <div>
    <tp-analysis :show-analysis-options="true"></tp-analysis>
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
      titleName: ""
    };
  },
  mounted() {
    // 波形图
  },
  computed: {},
  methods: {}
};
</script>


<style lang="scss">
</style>
