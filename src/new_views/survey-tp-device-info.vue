<template>
  <div class="data-view">
    <equipment-record-detail :basicData="baseData"></equipment-record-detail>
  </div>
</template>


<script>
import EquipmentRecordDetail from "../components/equipment/EquipmentRecordDetail";

export default {
  name: "survey-tp-device-info",
  components: {
    EquipmentRecordDetail
  },
  data() {
    return {
      baseData: {
        oilField: "长庆油田",
        factory: "第五采气厂",
        workZone: "作业三区",
        station: "苏东-7站",
        deviceType: "整体式压缩机",
        bitNumber: "SD7-YS-1",
        deviceName: "往复式压缩机",
        deviceModel: "DPC-2803",
        installWay: "成撬安装",
        produceFactory: "北京杰利阳能源设备制造有限公司",
        deviceFixNumber: "JW-09-019",
        productTime: 2009.5,
        useTime: 2009.5
      }
    };
  }
};
</script>


<style lang="scss">
.data-view {
}
</style>
