<template>
  <div class="equipment-record-detail">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="basic">
        <template slot="title">
          <h4>基本信息</h4>
        </template>
        <div class="basic-detail-wrapper">
          <!-- row1 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              所属油田：
              <span>{{basicData.oilField}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              设备位号：
              <span>{{basicData.bitNumber}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              出厂编号：
              <span>{{basicData.deviceFixNumber}}</span>
            </div>
          </div>
          <!-- row2 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              所属厂：
              <span>{{basicData.factory}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              设备名称：
              <span>{{basicData.deviceName}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              生产日期：
              <span>{{basicData.productTime}}</span>
            </div>
          </div>
          <!-- row3 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              所属工作区：
              <span>{{basicData.workZone}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              规格型号：
              <span>{{basicData.deviceModel}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              投用日期：
              <span>{{basicData.useTime}}</span>
            </div>
          </div>
          <!-- row4 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              所属站：
              <span>{{basicData.station}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              安装方式：
              <span>{{basicData.installWay}}</span>
            </div>
            <div class="flex" style="flex: 1;"></div>
          </div>
          <!-- row5 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              设备类型：
              <span>{{basicData.deviceType}}</span>
            </div>
            <div class="flex" style="flex: 1;">
              生产厂家：
              <span>{{basicData.produceFactory}}</span>
            </div>
            <div class="flex" style="flex: 1;"></div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="techParam-compressor">
        <template slot="title">
          <h4>压缩机技术参数</h4>
        </template>
        <div class="techParam-compressor-wrapper">
          <!-- row1 -->
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              压缩级数：
              <span>前期：1级 后期：2级</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              前期工况缸径：
              <span>9.5″（241.3 mm）</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              前期工况缸数：
              <span>2</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              后期工况缸径：
              <span>一级：13″（330.2 mm）二级：9.5″（241.3 mm）</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              后期工况缸数：
              <span>一级：1 二级：1</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              冲程：
              <span>11″（279.4 mm）</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              缸头端固定余隙值：
              <span>9.5″缸：16.2% 13″缸：12.6%</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              曲轴端固定余隙值：
              <span>9.5″缸：14.7% 13″缸：11.6%</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              缸号排序：
              <span>飞轮侧 1级缸 皮带轮侧 2级缸</span>
            </div>
          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item name="techParam-engine">
        <template slot="title">
          <h4>发动机技术参数</h4>
        </template>
        <div class="techParam-engine-wrapper">
          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              额定功率：
              <span>473 kW</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              额定转速：
              <span>440 rpm</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              转速范围：
              <span>265～440 rpm</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              缸径：
              <span>15″（381 mm）</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              冲程：
              <span>16″（406.4 mm）</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              缸数：
              <span>3</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              活塞排量：
              <span>3×46.3 L</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              燃气耗量：
              <span>0.37 Nm3/kW.h</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              排气温度：
              <span>≤420℃</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              缸号排序：
              <span>飞轮侧1号缸、中间为2号缸、皮带轮侧3号缸</span>
            </div>
          </div>

          <div layout="row" class="flex-wrapper" style="display: flex;">
            <div class="flex" style="flex: 1;">
              飞轮旋向：
              <span>面向飞轮顺时针</span>
            </div>
          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item v-if="false" name="techParam-unitShape">
        <template slot="title">
          <h4>机组外形技术参数</h4>
        </template>
        <div>暂无</div>
      </el-collapse-item>

      <el-collapse-item name="techParam-chainAlarm">
        <template slot="title">
          <h4>连锁报警技术参数</h4>
        </template>
        <div class="techParam-chainAlarm-wrapper">
          <div
            v-for="(item, index) in chainAlarm"
            :key="index"
            layout="row"
            class="flex-wrapper"
            style="display: flex;"
          >
            <div class="flex" style="flex: 1;">
              {{item.key}}：
              <span>{{item.value}}</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["basicData"],
  components: {},
  data() {
    return {
      activeNames: ["basic"],
      chainAlarm: [
        { key: "进气压力低报警值（单位：MPa）", value: 0.75 },
        { key: "进气压力低停机值（单位：MPa）", value: 0.7 },
        { key: "进气压力高报警值（单位：MPa）", value: 1.5 },
        { key: "进气压力高停机值（单位：MPa）", value: 1.65 },
        { key: "进气温度报警值（单位：℃）", value: 30 },
        { key: "进气温度停机值（单位：℃）", value: 60 },
        { key: "一级排气压力报警值（单位：MPa）", value: 3.7 },
        { key: "一级排气压力停机值（单位：MPa）", value: 3.75 },
        { key: "二级排气压力报警值（单位：MPa）", value: 3.7 },
        { key: "二级排气压力停机值（单位：MPa）", value: 3.75 },
        { key: "压缩一级一缸排温报警值（单位：℃）", value: 127 },
        { key: "压缩一级一缸排温停机值（单位：℃）", value: 135 },
        { key: "压缩一级二缸排温报警值（单位：℃）", value: 127 },
        { key: "压缩一级二缸排温停机值（单位：℃）", value: 135 },
        { key: "发动机转速报警值（单位：r/min）", value: 440 },
        { key: "发动机转速停机值（单位：r/min）", value: 480 },
        { key: "发动机一缸排温报警值（单位：℃）", value: 420 },
        { key: "发动机一缸排温停机值（单位：℃）", value: 440 },
        { key: "发动机二缸排温报警值（单位：℃）", value: 420 },
        { key: "发动机二缸排温停机值（单位：℃）", value: 440 },
        { key: "发动机三缸排温报警值（单位：℃）", value: 420 },
        { key: "发动机三缸排温停机值（单位：℃）", value: 440 },
        { key: "一号轴瓦温度报警值（单位：℃）", value: 100 },
        { key: "一号轴瓦温度停机值（单位：℃）", value: 110 },
        { key: "二号轴瓦温度报警值（单位：℃）", value: 100 },
        { key: "二号轴瓦温度停机值（单位：℃）", value: 110 },
        { key: "三号轴瓦温度报警值（单位：℃）", value: 100 },
        { key: "三号轴瓦温度停机值（单位：℃）", value: 110 },
        { key: "四号轴瓦温度报警值（单位：℃）", value: 100 },
        { key: "四号轴瓦温度停机值（单位：℃）", value: 110 },
        { key: "动力缸夹套水温报警值（单位：℃）", value: 88 },
        { key: "动力缸夹套水温停机值（单位：℃）", value: 95 },
        { key: "燃气压力报警值（单位：MPa）", value: 0.17 },
        { key: "燃气压力停机值（单位：MPa）", value: 0.18 },
        { key: "高位油箱油温报警值（单位：℃）", value: 88 },
        { key: "高位油箱油温停机值（单位：℃）", value: 90 },
        { key: "动力润滑无油流报警延迟（单位：秒）", value: 60 },
        { key: "压缩润滑无油流报警延迟单位：秒）", value: 50 },
        { key: "控制柜温度报警值（单位：℃）", value: 50 },
        { key: "控制柜温度停机值（单位：℃）", value: 60 }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // getName(obj) {
    //   return Object.keys(obj)[0]
    // },
    // getValue(obj) {
    //   return Object.values(obj)[0]
    // }
  }
};
</script>

<style lang="scss">
.equipment-record-detail {
  .el-collapse-item__header {
    padding-left: 16px;
    font-size: 16px;
  }
  .el-collapse-item__content {
    padding: 0 16px 16px 16px;
  }
  .flex-wrapper {
    > div {
      font-size: 15px;
      > span {
        color: #4f76ee;
      }
    }
  }
}
</style>

