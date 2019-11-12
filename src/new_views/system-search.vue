<template>
  <div class="data-view">
    <title-message inputName="全局搜索"></title-message>
    <div class="main-content" style="padding: 24px;">
      <div class="hitch">
        <div class="title" style="margin-bottom: 16px;font-size: 16px;font-weight: 700;">故障案例库</div>
        <div class="search-result-table">
          <el-table :data="tableDataHitch" style="width: 100%">
            <el-table-column
              v-for="(column, index) in tableColumnsHitch"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="viewDetailHitch(scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <hitch-detail :detailDialog="detailDialogHitch"></hitch-detail>
      </div>

      <div class="device">
        <div class="title" style="margin-top: 16px;margin-bottom: 16px;font-size: 16px;font-weight: 700;">设备详情</div>
        <div class="search-result-table">
          <el-table :data="tableDataDevice" style="width: 100%">
            <el-table-column
              v-for="(column, index) in tableColumnsDevice"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="viewDetailDevice(scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <DeviceDetail :detailDialog="detailDialogDevice"></DeviceDetail>
      </div>

      <div class="message">
        <div class="title" style="margin-top: 16px;margin-bottom: 16px;font-size: 16px;font-weight: 700;">个人消息</div>
        <div class="search-result-table">
          <el-table :data="tableDataMessage" style="width: 100%">
            <el-table-column
              v-for="(column, index) in tableColumnsMessage"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="viewDetailMessage(scope.row)" type="text" size="small">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <MessageDetail :detailDialog="detailDialogMessage"></MessageDetail>
      </div>
    </div>
  </div>
</template>

<script>
import titleMessage from '~/common/title-message.vue';
import HitchDetail from "../components/HitchDetail";
import DeviceDetail from "../components/equipment/EquipmentRecordDetail"
import MessageDetail from "../components/MessageDetail"

export default {
  name: "",
  components: {
    titleMessage,
    HitchDetail,
    DeviceDetail,
    MessageDetail
  },
  data() {
    return {
      detailDialogHitch: {
        visible: false
      },
      tableColumnsHitch: [
        {
          name: "number",
          label: "序号",
          width: "80px"
        },
        {
          name: "factory",
          label: "所属厂",
          width: "150px"
        },
        {
          name: "workZone",
          label: "所属作业区",
          width: "150px"
        },
        {
          name: "station",
          label: "所属站",
          width: "150px"
        },
        {
          name: "bitNumber",
          label: "所属位号",
          width: "150px"
        },
        {
          name: "occurrenceTime",
          label: "案例发生时间",
          width: "120px"
        },
        {
          name: "deviceType",
          label: "设备类型",
          width: "120px"
        },
        {
          name: "deviceName",
          label: "设备名称",
          width: "180px"
        },
        {
          name: "caseName",
          label: "案例名称"
        }
      ],
      tableDataHitch: [
        {
          number: 1,
          factory: "厂级",
          workZone: "作业区",
          station: "站级",
          bitNumber: "2#",
          occurrenceTime: "2019-10-09",
          deviceType: "类型",
          deviceName: "123",
          caseName: "654564"
        },
        {
          number: 2,
          factory: "厂级",
          workZone: "作业区",
          station: "站级",
          bitNumber: "3#",
          occurrenceTime: "2019-10-10",
          deviceType: "类型",
          deviceName: "123",
          caseName: "654564"
        }
      ],
      detailDialogDevice: {
        visible: false
      },
      tableColumnsDevice: [
        {
          name: "oilField",
          label: "所属油田",
          width: "120px"
        },
        {
          name: "factory",
          label: "所属厂",
          width: "120px"
        },
        {
          name: "workZone",
          label: "所属作业区",
          width: "120px"
        },
        {
          name: "station",
          label: "所属站",
          width: "120px"
        },
        {
          name: "deviceType",
          label: "设备类型",
          width: "120px"
        },
        {
          name: "bitNumber",
          label: "设备位号",
          width: "120px"
        },
        {
          name: "deviceName",
          label: "设备名称"
        },
        {
          name: "deviceModel",
          label: "规格型号",
          width: "120px"
        },
        {
          name: "installWay",
          label: "安装方式",
          width: "120px"
        },
        {
          name: "produceFactory",
          label: "生产厂家",
          width: "120px"
        }
      ],
      tableDataDevice: [
        {
          oilField: '长庆',
          factory: '第四采气厂',
          workZone: '作业二区',
          station: '2站',
          deviceType: '',
          bitNumber: '1#',
          deviceName: '654321',
          deviceModel: '',
          installWay: '',
          produceFactory: ''
        }
      ],
      detailDialogMessage: {
        visible: false
      },
      tableColumnsMessage: [
        {
          name: "messageType",
          label: "消息类型",
          width: "220px"
        },
        {
          name: "title",
          label: "标题"
        },
        {
          name: "time",
          label: "时间",
          width: "250px"
        }
      ],
      tableDataMessage: [
        {
          messageType: "个人消息",
          title: "654564111",
          time: "2019-10-09"
        },
        // {
        //   messageType: "个人消息",
        //   title: "66666",
        //   time: "2019-10-09"
        // },
        // {
        //   messageType: "个人消息",
        //   title: "123456",
        //   time: "2019-10-09"
        // }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    viewDetailHitch(row) {
      this.detailDialogHitch.visible = true;
    },
    viewDetailDevice(row) {
      this.detailDialogDevice.visible = true;
    },
    viewDetailMessage(row) {
      this.detailDialogMessage.visible = true;
    }
  }
};
</script>
