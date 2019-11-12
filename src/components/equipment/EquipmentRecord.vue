<template>
  <div class="main-content" style="padding: 16px 24px 0;">
    <organization-select :is-not-union="true"></organization-select>
    <div class="search-result-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="(column, index) in tableColumns"
          :key="index"
          :prop="column.name"
          :label="column.label"
          :width="column.width"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager clearfix">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDataSource.length"
        ></el-pagination>
      </div>
    </div>
    <EquipmentRecordDetailDialog :detailDialog="detailDialog" :basicData='curData'></EquipmentRecordDetailDialog>
  </div>
</template>

<script>
  
  import EquipmentRecordDetailDialog from './EquipmentRecordDetailDialog';
  import OrganizationSelect from '~/components/OrganizationSelect';
  
  export default {
    name: '',
    props: [],
    components: { EquipmentRecordDetailDialog, OrganizationSelect },
    data() {
      return {
        curPage: 0,
        pageSize: 10,
        detailDialog: {
          visible: false
        },
        curData: null,
        tableColumns: [
         
          {
            name: 'factory',
            label: '所属厂',
          },
          {
            name: 'workZone',
            label: '所属作业区',
          },
          {
            name: 'station',
            label: '所属站',
          },
          {
            name: 'deviceType',
            label: '设备类型',
          },
          {
            name: 'bitNumber',
            label: '设备位号',
          },
          {
            name: 'deviceName',
            label: '设备名称'
          },
          {
            name: 'deviceModel',
            label: '规格型号',
          },
          {
            name: 'installWay',
            label: '安装方式',
          },
          // {
          //   name: 'produceFactory',
          //   label: '生产厂家'
          // }
        ],
        tableData: [],
        tableDataSource: [
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-09-019',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-041',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-3',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-040',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-10-015',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-014',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-3',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-013',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-4',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-039',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-5',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-017',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-09-018',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-042',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-3',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-043',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-4',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-11-038',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD15-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-11-041',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD17-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-11-010',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-10-013',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-025',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-08-026',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-10-009',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-10-008',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-09-013',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-1',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-09-014',
            productTime: 2009.5,
            useTime: 2009.5
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-2',
            deviceName: '往复式压缩机',
            deviceModel: 'DPC-2803',
            installWay: '成撬安装',
            produceFactory: '北京杰利阳能源设备制造有限公司',
            deviceFixNumber: 'JW-09-015',
            productTime: 2009.5,
            useTime: 2009.5
          }
        ]
      };
    },
    computed: {
      startIndex: function () {
        return this.curPage * this.pageSize;
      },
      endIndex: function () {
        return (this.curPage + 1) * this.pageSize;
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      viewDetail(row) {
        this.curData = row
        this.detailDialog.visible = true;
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.curPage = 0;
        this.getData();
      },
      handleCurrentChange(val) {
        this.curPage = val - 1;
        this.getData();
      },
      getData() {
        this.tableData = this.tableDataSource.slice(
          this.startIndex,
          this.endIndex
        );
      }
    }
  };
</script>

<style lang="scss" scoped>
  // .equipment-record {
  //   .el-collapse {
  //     border: none;
  
  //     .el-collapse-item {
  //       margin: 24px 0;
  
  //       & > div {
  //         box-shadow: 0px 0px 5px 1px #ebeef5;
  
  //         .el-collapse-item__header {
  //           padding-left: 24px;
  //           //border-bottom: none;
  //         }
  //       }
  //     }
  
  //     .el-collapse-item__wrap {
  //       margin-top: 8px;
  //       border-bottom: none;
  //     }
  
  //     .el-collapse-item__content {
  //       padding-bottom: 0;
  //     }
  //   }
  
  //   .basic-detail-wrapper,
  //   .techParam-compressor-wrapper,
  //   .techParam-engine-wrapper,
  //   .techParam-chainAlarm-wrapper {
  //     padding-left: 24px;
  //     line-height: 2.8;
  //   }
  // }
</style>
