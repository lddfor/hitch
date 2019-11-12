<template>
  <div class="prediction_form">
    <h6>模型选择</h6>
    <div>
      <el-select v-model="value" placeholder="请选择模型" size="mini" style="width: 350px">
        <el-option v-for="item in modelOptions" :key="item.value" :label="item.label" :value="item"></el-option>
      </el-select>
    </div>

    <div v-if="value.inputValue">
      <h6>输入量选择</h6>
      <div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox
            v-for="(item, $index) in value.inputValue"
            :label="item.label"
            :value="item.value"
            :key="$index"
            :checked="true"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>

    <h6>时间选择</h6>
    <div>
      <el-date-picker size="mini" v-model="value1" type="datetime" placeholder="请选择时间"></el-date-picker>
    </div>

    <h6>
      <el-button
        type="primary"
        size="small"
        @click="submit"
        class="start-assess"
      >{{label.submitBtn}}</el-button>
    </h6>

    <div v-show="submitSuccess">
      <slot></slot>
      <div>
        <el-link type="primary">
          <router-link to="/manual-diagnosis/device/analysis/analysis">人工诊断</router-link>
        </el-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "component-prediction-form",
  props: {
    modelOptions: {
      type: Array,
      default: []
    },
    label: {
      type: Object,
      default: () => {
        return {
          submitBtn: "开始评估"
        };
      }
    }
  },
  watch: {
    newValue() {
      this.$emit("valueChange", this.value);
    }
  },
  data() {
    return {
      activeNames: ["1"],
      fileList: [],
      value: {},
      value1: "",
      textarea2: "评估结果",
      submitSuccess: true,
      checkList: ["1", "2", "3"]
    };
  },
  computed: {
    newValue() {
      return this.value;
    }
  },
  mounted() {
    this.submitSuccess = false;
  },
  methods: {
    submit() {
      if (!this.submitSuccess) {
        this.submitSuccess = true;
      }
      this.$emit("commit", this.data);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>


<style lang="scss">
.prediction_form {
  h6 {
    margin: 10px 0 10px 0;
    font-size: 14px;
    /*padding: 0 16px;*/
  }
  .start-assess {
    margin: 15px 0;
  }
}
</style>
