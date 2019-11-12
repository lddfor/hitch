<template>
  <div>
    <h3>设备选择</h3>
    <div style="display: flex">
      <div style="width: 50%">
        <organization-select :immediately="true"></organization-select>
        <prediction-form
          :modelOptions="healthAssessmentModel"
          :label="label"
          @valueChange="valueChange"
        >
          <el-form>
            <el-form-item>
              <el-input
                size="mini"
                type="textarea"
                :autosize="{ minRows: 3 }"
                placeholder="请输入内容"
                v-model="textarea2"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item>
              <p>措施推荐</p>
              <div>
                <el-input
                  size="mini"
                  type="textarea"
                  :autosize="{ minRows: 3 }"
                  placeholder="请输入内容"
                  v-model="textarea3"
                  readonly
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <p></p>
        </prediction-form>
      </div>
      <div style="flex: 1">
        <img
          :src="'/static/images/yasuojimoxingtu/' + currentModel.icon"
          alt
          style="width: 200px; margin-left: 100px"
        />
      </div>
    </div>
  </div>
</template>


<script>
import predictionForm from "../components/survey/PredictionForm";
import titleMessage from "~/common/title-message";
import OrganizationSelect from "~/components/OrganizationSelect";

export default {
  name: "survey-device-prediction",
  components: {
    predictionForm,
    titleMessage,
    OrganizationSelect
  },
  data() {
    return {
      activeNames: ["1"],
      healthAssessmentModel: [
        {
          label: "往复压缩机活塞杆磨损诊断模型",
          value: 3,
          icon: "3.png",
          inputValue: [
            { label: "十字头冲击峰值", value: 1 },
            { label: "十字头冲击信号频率", value: 2 },
            { label: "十字头冲击波形直流量", value: 3 }
          ]
        },
        { label: "往复压缩机气阀泄露诊断模型", value: 1, icon: "1.png" },
        { label: "往复压缩机活塞环磨损诊断模型", value: 2, icon: "2.png" },
        { label: "往复压缩机十字头磨损诊断模型", value: 4, icon: "4.png" },
        { label: "往复压缩机大头瓦磨损诊断模型", value: 5, icon: "5.png" },
        { label: "往复压缩机反向角异常诊断模型", value: 6, icon: "6.png" },
        { label: "往复压缩机活塞杆载荷异常诊断模型", value: 7, icon: "7.png" }
      ],
      label: {
        submitBtn: "开始诊断"
      },
      textarea2: "这里是诊断结果",
      textarea3: "这里是推荐结果",
      currentModel: {}
    };
  },
  methods: {
    valueChange(e) {
      this.currentModel = e;
    }
  }
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
