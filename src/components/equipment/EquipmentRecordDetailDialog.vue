<template>
  <el-dialog title="基本信息详情" :visible.sync="detailDialog.visible" width="680px">
    <EquipmentRecordDetail :basicData="basicData"></EquipmentRecordDetail>
  </el-dialog>
</template>

<script>
import EquipmentRecordDetail from "./EquipmentRecordDetail";

export default {
  name: "",
  props: ["detailDialog", "basicData"],
  components: { EquipmentRecordDetail },
  data() {
    return {
      activeNames: ["basic"]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
</style>