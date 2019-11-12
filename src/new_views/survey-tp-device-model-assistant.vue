<template>
  <div class="card-item" style="overflow: overlay;padding: 20px;">
    <prediction-form :modelOptions="healthAssessmentModel">
      <div>
        <el-input
          size="mini"
          type="textarea"
          :autosize="{ minRows: 3 }"
          placeholder="请输入内容"
          v-model="textarea2"
          readonly
        ></el-input>
      </div>
      <p></p>
    </prediction-form>
  </div>
</template>


<script>
import predictionForm from "../components/survey/PredictionForm";

export default {
  name: "survey-device-prediction",
  components: {
    predictionForm
  },
  data() {
    return {
      activeNames: ["1"],
      healthAssessmentModel: [
        {
          value: "1",
          label: "往复压缩机气阀泄漏诊断模型"
        },
        {
          value: "2",
          label: "往复压缩机活塞环磨损诊断模型"
        },
        {
          value: "3",
          label: "往复压缩机活塞杆磨损诊断模型"
        },
        {
          value: "4",
          label: "往复压缩机十字头磨损诊断模型"
        },
        {
          value: "5",
          label: "往复压缩机大头瓦磨损诊断模型"
        },
        {
          value: "6",
          label: "往复压缩机反向角异常诊断模型"
        },
        {
          value: "7",
          label: "往复压缩机活塞杆载荷异常诊断模型"
        }
      ],
      textarea2: ""
    };
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.el-collapse {
  border: none;
}
.el-collapse-item {
  margin: 20px 0;
  &:first-of-type {
    margin-top: 0;
  }

  .context {
    padding: 0 20px;
  }
}
</style>
