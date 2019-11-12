<template>
  <div class="main-content" style="padding:16px 24px 0;">
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
      </el-table>
      <div class="pager clearfix">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curPage + 1"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDataSource.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import OrganizationSelect from "~/components/OrganizationSelect";
  
  export default {
    name: "",
    props: ["myForm", "factoryList", "workZoneList", "stationList"],
    components: { OrganizationSelect },
    data() {
      return {
        curPage: 0,
        pageSize: 10,
        tableColumns:
          [
          {
            name: "maintananceStartTime",
            label: "保养开始时间",
          },
          {
            name: "levelAll",
            label: "保养级别",
          },
          {
            name: "maintananceEndTime",
            label: "保养结束时间",
          },
          {
            name: "maintananceTimeRange",
            label: "保养历时",
          },
          {
            name: "maintananceChargePerson",
            label: "保养负责人",
          },
          {
            name: "recordPerson",
            label: "记录人",
          },
          {
            name: "recordDate",
            label: "记录日期",
          }
        ],
        tableData: [],
        tableDataSource: [
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-7站",
            deviceType: "整体式压缩机",
            bitNumber: "SD7-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2014/7/1",
            levelAll:"1000小时",
            maintananceEndTime: "2014/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2016.10.13"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-7站",
            deviceType: "整体式压缩机",
            bitNumber: "SD7-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2014/10/1",
            levelAll:"5000小时",
            maintananceEndTime: "2014/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2016.10.13"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-7站",
            deviceType: "整体式压缩机",
            bitNumber: "SD7-YS-3",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2015/1/1",
            levelAll:"8000小时",
            maintananceEndTime: "2015/1/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2017.4.23"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-8站",
            deviceType: "整体式压缩机",
            bitNumber: "SD8-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2015/4/1",
            levelAll:"24000小时",
            maintananceEndTime: "2015/4/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2017.7.30"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-8站",
            deviceType: "整体式压缩机",
            bitNumber: "SD8-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2015/7/1",
            levelAll:"24000小时",
            maintananceEndTime: "2015/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2017.11.5"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-8站",
            deviceType: "整体式压缩机",
            bitNumber: "SD8-YS-3",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2015/10/1",
            levelAll:"24000小时",
            maintananceEndTime: "2015/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2017.11.13"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-8站",
            deviceType: "整体式压缩机",
            bitNumber: "SD8-YS-4",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2016/1/1",
            levelAll:"24000小时",
            maintananceEndTime: "2016/1/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.2.26"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-8站",
            deviceType: "整体式压缩机",
            bitNumber: "SD8-YS-5",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2016/4/1",
            levelAll:"24000小时",
            maintananceEndTime: "2016/4/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.3.5"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD10-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2016/7/1",
            levelAll:"24000小时",
            maintananceEndTime: "2016/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.2"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD10-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2016/10/1",
            levelAll:"24000小时",
            maintananceEndTime: "2016/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.2"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD10-YS-3",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2017/1/1",
            levelAll:"24000小时",
            maintananceEndTime: "2017/1/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.2"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD10-YS-4",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2017/4/1",
            levelAll:"24000小时",
            maintananceEndTime: "2017/4/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.2"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD15-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2017/7/1",
            levelAll:"24000小时",
            maintananceEndTime: "2017/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.27"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东10站",
            deviceType: "整体式压缩机",
            bitNumber: "SD17-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2017/10/1",
            levelAll:"24000小时",
            maintananceEndTime: "2017/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2018.12.27"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-11站",
            deviceType: "整体式压缩机",
            bitNumber: "SD11-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2018/1/1",
            levelAll:"24000小时",
            maintananceEndTime: "2018/1/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.1.5"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-11站",
            deviceType: "整体式压缩机",
            bitNumber: "SD11-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2018/4/1",
            levelAll:"24000小时",
            maintananceEndTime: "2018/4/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.2.14"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东12站",
            deviceType: "整体式压缩机",
            bitNumber: "SD12-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2018/7/1",
            levelAll:"24000小时",
            maintananceEndTime: "2018/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.2.20"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东12站",
            deviceType: "整体式压缩机",
            bitNumber: "SD12-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2018/10/1",
            levelAll:"24000小时",
            maintananceEndTime: "2018/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.4.18"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-13站",
            deviceType: "整体式压缩机",
            bitNumber: "SD13-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2019/1/1",
            levelAll:"24000小时",
            maintananceEndTime: "2019/1/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.4.24"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-13站",
            deviceType: "整体式压缩机",
            bitNumber: "SD13-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2019/4/1",
            levelAll:"24000小时",
            maintananceEndTime: "2019/4/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.4.25"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-14站",
            deviceType: "整体式压缩机",
            bitNumber: "SD14-YS-1",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2019/7/1",
            levelAll:"24000小时",
            maintananceEndTime: "2019/7/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.4.30"
          },
          {
            oilField: "长庆油田",
            factory: "第五采气厂",
            workZone: "作业三区",
            station: "苏东-14站",
            deviceType: "整体式压缩机",
            bitNumber: "SD14-YS-2",
            deviceName: "往复式压缩机",
            maintananceStartTime: "2019/10/1",
            levelAll:"24000小时",
            maintananceEndTime: "2019/10/2",
            maintananceTimeRange: "24h",
            maintananceChargePerson: "张雄兵",
            recordPerson: "杨鹏",
            recordDate: "2019.5.31"
          }
        ]
      };
    },
    computed: {
      startIndex: function() {
        return this.curPage * this.pageSize;
      },
      endIndex: function() {
        return (this.curPage + 1) * this.pageSize;
      }
    },
    mounted() {
      this.getData();
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
