<template>
  <div class="main-content" style="padding: 16px 24px 0;">
    <organization-select :is-not-union="true"></organization-select>
    <div class="search-result-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="(column, index) in tableColoums"
          :key="index"
          :prop="column.name"
          :label="column.label"
          :width="column.width"
        ></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager clearfix">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-sizes="[Number(this.newPag), Number(this.newPag*2), Number(this.newPag*3), Number(this.newPag*4)]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDataSource.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import OrganizationSelect from '~/components/OrganizationSelect'
  
  export default {
    name: '',
    props: {
      newPag: {
        // type: Number,
        default: 10
      },
      tableColoums: {
        default: function () {
          return    [
            {
              name: 'factory',
              label: '所属厂',
              width: '100px'
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
              name: 'bitNumber',
              label: '设备位号',
            },
            {
              name: 'deviceName',
              label: '设备名称',
            },
            {
              name: 'maintananceState',
              label: '维修情况',
            },
            {
              name: 'maintananceStartTime',
              label: '维修开始时间',
              width: '120px'
            },
            {
              name: 'maintananceEndTime',
              label: '维修结束时间',
              width: '120px'
            },
            {
              name: 'maintananceDepartment',
              label: '维修单位',
              width: '240px'
            },
            {
              name: 'maintanancePerson',
              label: '记录人',
              width: '80px'
            },
            {
              name: 'recordDate',
              label: '记录日期',
              width: '100px'
            }
          ]
        }
      }
    },
    components: {
      OrganizationSelect
    },
    data() {
      return {
        myForm: {
          hitchLevel1: '',
          hitchLevel2: '',
          hitchLevel3: '',
          bitNumber: ''
        },
        curPage: 0,
        pageSize: Number(this.newPag),
        // tableColumns:
        //   [
        //   {
        //     name: 'factory',
        //     label: '所属厂',
        //     width: '100px'
        //   },
        //   {
        //     name: 'workZone',
        //     label: '所属作业区',
        //   },
        //   {
        //     name: 'station',
        //     label: '所属站',
        //   },
        //   {
        //     name: 'bitNumber',
        //     label: '设备位号',
        //   },
        //   {
        //     name: 'deviceName',
        //     label: '设备名称',
        //   },
        //   {
        //     name: 'maintananceState',
        //     label: '维修情况',
        //   },
        //   {
        //     name: 'maintananceStartTime',
        //     label: '维修开始时间',
        //     width: '120px'
        //   },
        //   {
        //     name: 'maintananceEndTime',
        //     label: '维修结束时间',
        //     width: '120px'
        //   },
        //   {
        //     name: 'maintananceDepartment',
        //     label: '维修单位',
        //     width: '240px'
        //   },
        //   {
        //     name: 'maintanancePerson',
        //     label: '记录人',
        //     width: '80px'
        //   },
        //   {
        //     name: 'recordDate',
        //     label: '记录日期',
        //     width: '100px'
        //   }
        // ],
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
            maintananceState: '更换气阀螺钉5根',
            maintananceStartTime: '20:00',
            maintananceEndTime: '20:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨征',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉8根',
            maintananceStartTime: '9:30',
            maintananceEndTime: '9:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '马富利',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换喷射阀“O”型圈1个',
            maintananceStartTime: '11:00',
            maintananceEndTime: '11:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杜勇',
            recordDate: '2017.4.23'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换混合阀片2根',
            maintananceStartTime: '14:40',
            maintananceEndTime: '15:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.7.30'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换油分配器处伴热',
            maintananceStartTime: '6:00',
            maintananceEndTime: '15日18:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换直管段滤网',
            maintananceStartTime: '9:10',
            maintananceEndTime: '10:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-4',
            deviceName: '往复式压缩机',
            maintananceState: '更换缸头垫子1副',
            maintananceStartTime: '15:00',
            maintananceEndTime: '16:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2018.2.26'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-5',
            deviceName: '往复式压缩机',
            maintananceState: '紧固联轴器',
            maintananceStartTime: '6:00',
            maintananceEndTime: '10:00',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静 ',
            recordDate: '2018.3.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '补加液压油，更换皮带，高压点火线',
            maintananceStartTime: '19:20',
            maintananceEndTime: '20:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '重新起机',
            maintananceStartTime: '23:40',
            maintananceEndTime: '1:50',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '检查混合阀，起机调节缸温',
            maintananceStartTime: '1:40',
            maintananceEndTime: '2:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-4',
            deviceName: '往复式压缩机',
            maintananceState: '更换水泵',
            maintananceStartTime: '4:20',
            maintananceEndTime: '6:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD15-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉',
            maintananceStartTime: '6:30',
            maintananceEndTime: '7:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.27'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD17-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '清理油滤',
            maintananceStartTime: '17:20',
            maintananceEndTime: '-',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.27'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '检查空冷器',
            maintananceStartTime: '16:50',
            maintananceEndTime: '17:50',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '李祥阳',
            recordDate: '2019.1.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '调解缸温',
            maintananceStartTime: '18:20',
            maintananceEndTime: '0:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '李兴为',
            recordDate: '2019.2.14'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '重新调整气量',
            maintananceStartTime: '17:10',
            maintananceEndTime: '-',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '陈伟',
            recordDate: '2019.2.20'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '冷却后重新起机',
            maintananceStartTime: '19:20',
            maintananceEndTime: '/',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '陈伟',
            recordDate: '2019.4.18'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉',
            maintananceStartTime: '9:40',
            maintananceEndTime: '12:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '郭小林',
            recordDate: '2019.4.24'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换进气阀螺钉',
            maintananceStartTime: '21:20',
            maintananceEndTime: '22:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '弓志慧',
            recordDate: '2019.4.25'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '气量稳定后重启',
            maintananceStartTime: '9:00',
            maintananceEndTime: '8:00',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '弓志慧',
            recordDate: '2019.4.30'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '气量稳定后重启',
            maintananceStartTime: '20:40',
            maintananceEndTime: '17:40',
            maintananceDepartment: '-',
            maintanancePerson: '张超波',
            recordDate: '2019.5.31'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉5根',
            maintananceStartTime: '20:00',
            maintananceEndTime: '20:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨征',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉8根',
            maintananceStartTime: '9:30',
            maintananceEndTime: '9:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '马富利',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换喷射阀“O”型圈1个',
            maintananceStartTime: '11:00',
            maintananceEndTime: '11:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杜勇',
            recordDate: '2017.4.23'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换混合阀片2根',
            maintananceStartTime: '14:40',
            maintananceEndTime: '15:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.7.30'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换油分配器处伴热',
            maintananceStartTime: '6:00',
            maintananceEndTime: '15日18:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换直管段滤网',
            maintananceStartTime: '9:10',
            maintananceEndTime: '10:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-4',
            deviceName: '往复式压缩机',
            maintananceState: '更换缸头垫子1副',
            maintananceStartTime: '15:00',
            maintananceEndTime: '16:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2018.2.26'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-5',
            deviceName: '往复式压缩机',
            maintananceState: '紧固联轴器',
            maintananceStartTime: '6:00',
            maintananceEndTime: '10:00',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静 ',
            recordDate: '2018.3.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '补加液压油，更换皮带，高压点火线',
            maintananceStartTime: '19:20',
            maintananceEndTime: '20:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '重新起机',
            maintananceStartTime: '23:40',
            maintananceEndTime: '1:50',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '检查混合阀，起机调节缸温',
            maintananceStartTime: '1:40',
            maintananceEndTime: '2:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '刘静',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD10-YS-4',
            deviceName: '往复式压缩机',
            maintananceState: '更换水泵',
            maintananceStartTime: '4:20',
            maintananceEndTime: '6:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.2'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD15-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉',
            maintananceStartTime: '6:30',
            maintananceEndTime: '7:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.27'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东10站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD17-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '清理油滤',
            maintananceStartTime: '17:20',
            maintananceEndTime: '-',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '张振文',
            recordDate: '2018.12.27'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '检查空冷器',
            maintananceStartTime: '16:50',
            maintananceEndTime: '17:50',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '李祥阳',
            recordDate: '2019.1.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-11站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD11-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '调解缸温',
            maintananceStartTime: '18:20',
            maintananceEndTime: '0:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '李兴为',
            recordDate: '2019.2.14'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '重新调整气量',
            maintananceStartTime: '17:10',
            maintananceEndTime: '-',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '陈伟',
            recordDate: '2019.2.20'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东12站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD12-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '冷却后重新起机',
            maintananceStartTime: '19:20',
            maintananceEndTime: '/',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '陈伟',
            recordDate: '2019.4.18'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉',
            maintananceStartTime: '9:40',
            maintananceEndTime: '12:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '郭小林',
            recordDate: '2019.4.24'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-13站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD13-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换进气阀螺钉',
            maintananceStartTime: '21:20',
            maintananceEndTime: '22:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '弓志慧',
            recordDate: '2019.4.25'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '气量稳定后重启',
            maintananceStartTime: '9:00',
            maintananceEndTime: '8:00',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '弓志慧',
            recordDate: '2019.4.30'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-14站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD14-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '气量稳定后重启',
            maintananceStartTime: '20:40',
            maintananceEndTime: '17:40',
            maintananceDepartment: '-',
            maintanancePerson: '张超波',
            recordDate: '2019.5.31'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉5根',
            maintananceStartTime: '20:00',
            maintananceEndTime: '20:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨征',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换气阀螺钉8根',
            maintananceStartTime: '9:30',
            maintananceEndTime: '9:40',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '马富利',
            recordDate: '2016.10.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-7站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD7-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换喷射阀“O”型圈1个',
            maintananceStartTime: '11:00',
            maintananceEndTime: '11:20',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杜勇',
            recordDate: '2017.4.23'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-1',
            deviceName: '往复式压缩机',
            maintananceState: '更换混合阀片2根',
            maintananceStartTime: '14:40',
            maintananceEndTime: '15:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.7.30'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-2',
            deviceName: '往复式压缩机',
            maintananceState: '更换油分配器处伴热',
            maintananceStartTime: '6:00',
            maintananceEndTime: '15日18:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.5'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-3',
            deviceName: '往复式压缩机',
            maintananceState: '更换直管段滤网',
            maintananceStartTime: '9:10',
            maintananceEndTime: '10:10',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2017.11.13'
          },
          {
            oilField: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东-8站',
            deviceType: '整体式压缩机',
            bitNumber: 'SD8-YS-4',
            deviceName: '往复式压缩机',
            maintananceState: '更换缸头垫子1副',
            maintananceStartTime: '15:00',
            maintananceEndTime: '16:30',
            maintananceDepartment: '北京杰利阳能源设备制造有限公司',
            maintanancePerson: '杨虎',
            recordDate: '2018.2.26'
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
    watch: {
      'inputName': function (newVal, oldValue) {
        console.log(newVal, oldValue)
      }
      
    },
    
    methods: {
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
