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
  </div>
</template>

<script>
import OrganizationSelect from "~/components/OrganizationSelect";
export default {
  name: "power-on-off-record",
  props: ["myForm", "factoryList", "workZoneList", "stationList"],
  components: { OrganizationSelect },
  data() {
    return {
      curPage: 0,
      pageSize: 10,
      tableColumns: [
        
        {
          name: "factory",
          label: "所属厂",
        },
        {
          name: "workZone",
          label: "所属作业区",
        },
        {
          name: "station",
          label: "所属站",
        },
        {
          name: "deviceType",
          label: "设备类型",
        },
        {
          name: "bitNumber",
          label: "设备位号",
        },
        {
          name: "deviceName",
          label: "设备名称"
        },
        {
          name: "deviceState",
          label: "设备状态",
        },
        {
          name: "powerOnOffTime",
          label: "开停机时间"
        },
        {
          name: "powerOffReason",
          label: "停机原因"
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
          deviceState: "开机",
          date: "2016.10.13",
          powerOffTime: "20:00",
          powerOnTime: "20:20",
          powerOffReason: "注油器管线卡套处渗油"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2016.10.13",
          powerOffTime: "9:30",
          powerOnTime: "9:40",
          powerOffReason: "高位水箱水管线接头处漏水"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.4.23",
          powerOffTime: "11:00",
          powerOnTime: "11:20",
          powerOffReason: "水泵皮带有裂痕"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.7.30",
          powerOffTime: "14:40",
          powerOnTime: "15:10",
          powerOffReason: "自动排模块漏气"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.11.5",
          powerOffTime: "6:00",
          powerOnTime: "15日18:30",
          powerOffReason: "高位油箱防爆接线盒损坏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.11.13",
          powerOffTime: "9:10",
          powerOnTime: "10:10",
          powerOffReason: "一级进气分离器液位开关防爆软管损坏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-4",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.2.26",
          powerOffTime: "15:00",
          powerOnTime: "16:30",
          powerOffReason: "3号动力缸缸温波动大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-5",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.3.5",
          powerOffTime: "6:00",
          powerOnTime: "10:00",
          powerOffReason: "动力缸注油分配块防爆软管破损"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.2",
          powerOffTime: "19:20",
          powerOnTime: "20:40",
          powerOffReason: "防爆门渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.2",
          powerOffTime: "23:40",
          powerOnTime: "1:50",
          powerOffReason: "U型压差计玻璃管破损"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.2",
          powerOffTime: "1:40",
          powerOnTime: "2:10",
          powerOffReason: "注油单泵渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-4",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.2",
          powerOffTime: "4:20",
          powerOnTime: "6:20",
          powerOffReason: "仪表风调压阀内部腐蚀严重"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD15-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.27",
          powerOffTime: "6:30",
          powerOnTime: "7:20",
          powerOffReason: "压缩缸排温温差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD17-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.27",
          powerOffTime: "17:20",
          powerOnTime: "-",
          powerOffReason: "压缩缸排温温差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-11站",
          deviceType: "整体式压缩机",
          bitNumber: "SD11-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.1.5",
          powerOffTime: "16:50",
          powerOnTime: "17:50",
          powerOffReason: "风机皮带磨损严重"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-11站",
          deviceType: "整体式压缩机",
          bitNumber: "SD11-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.2.14",
          powerOffTime: "18:20",
          powerOnTime: "0:30",
          powerOffReason: "主轴瓦温度高数据跳停,调压撬冻堵"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东12站",
          deviceType: "整体式压缩机",
          bitNumber: "SD12-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.2.20",
          powerOffTime: "17:10",
          powerOnTime: "-",
          powerOffReason: "动力缸注油模块渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东12站",
          deviceType: "整体式压缩机",
          bitNumber: "SD12-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.4.18",
          powerOffTime: "19:20",
          powerOnTime: "/",
          powerOffReason: "机组转速波动大，不稳定"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-13站",
          deviceType: "整体式压缩机",
          bitNumber: "SD13-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.4.24",
          powerOffTime: "9:40",
          powerOnTime: "12:40",
          powerOffReason: "高位油箱漏油"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-13站",
          deviceType: "整体式压缩机",
          bitNumber: "SD13-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.4.25",
          powerOffTime: "21:20",
          powerOnTime: "22:20",
          powerOffReason: "压缩缸排气温度相差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-14站",
          deviceType: "整体式压缩机",
          bitNumber: "SD14-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.4.30",
          powerOffTime: "9:00",
          powerOnTime: "8:00",
          powerOffReason: "一级分离器高液位停机"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-14站",
          deviceType: "整体式压缩机",
          bitNumber: "SD14-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.5.31",
          powerOffTime: "20:40",
          powerOnTime: "17:40",
          powerOffReason: "防爆门渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2016.10.13",
          powerOffTime: "20:00",
          powerOnTime: "20:20",
          powerOffReason: "注油器管线卡套处渗油"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2016.10.13",
          powerOffTime: "9:30",
          powerOnTime: "9:40",
          powerOffReason: "高位水箱水管线接头处漏水"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.4.23",
          powerOffTime: "11:00",
          powerOnTime: "11:20",
          powerOffReason: "水泵皮带有裂痕"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.7.30",
          powerOffTime: "14:40",
          powerOnTime: "15:10",
          powerOffReason: "自动排模块漏气"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.11.5",
          powerOffTime: "6:00",
          powerOnTime: "15日18:30",
          powerOffReason: "高位油箱防爆接线盒损坏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.11.13",
          powerOffTime: "9:10",
          powerOnTime: "10:10",
          powerOffReason: "一级进气分离器液位开关防爆软管损坏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-4",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.2.26",
          powerOffTime: "15:00",
          powerOnTime: "16:30",
          powerOffReason: "3号动力缸缸温波动大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-5",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.3.5",
          powerOffTime: "6:00",
          powerOnTime: "10:00",
          powerOffReason: "动力缸注油分配块防爆软管破损"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.2",
          powerOffTime: "19:20",
          powerOnTime: "20:40",
          powerOffReason: "防爆门渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.2",
          powerOffTime: "23:40",
          powerOnTime: "1:50",
          powerOffReason: "U型压差计玻璃管破损"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.2",
          powerOffTime: "1:40",
          powerOnTime: "2:10",
          powerOffReason: "注油单泵渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD10-YS-4",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.2",
          powerOffTime: "4:20",
          powerOnTime: "6:20",
          powerOffReason: "仪表风调压阀内部腐蚀严重"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD15-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2018.12.27",
          powerOffTime: "6:30",
          powerOnTime: "7:20",
          powerOffReason: "压缩缸排温温差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东10站",
          deviceType: "整体式压缩机",
          bitNumber: "SD17-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2018.12.27",
          powerOffTime: "17:20",
          powerOnTime: "-",
          powerOffReason: "压缩缸排温温差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-11站",
          deviceType: "整体式压缩机",
          bitNumber: "SD11-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.1.5",
          powerOffTime: "16:50",
          powerOnTime: "17:50",
          powerOffReason: "风机皮带磨损严重"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-11站",
          deviceType: "整体式压缩机",
          bitNumber: "SD11-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.2.14",
          powerOffTime: "18:20",
          powerOnTime: "0:30",
          powerOffReason: "主轴瓦温度高数据跳停,调压撬冻堵"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东12站",
          deviceType: "整体式压缩机",
          bitNumber: "SD12-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.2.20",
          powerOffTime: "17:10",
          powerOnTime: "-",
          powerOffReason: "动力缸注油模块渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东12站",
          deviceType: "整体式压缩机",
          bitNumber: "SD12-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.4.18",
          powerOffTime: "19:20",
          powerOnTime: "/",
          powerOffReason: "机组转速波动大，不稳定"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-13站",
          deviceType: "整体式压缩机",
          bitNumber: "SD13-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.4.24",
          powerOffTime: "9:40",
          powerOnTime: "12:40",
          powerOffReason: "高位油箱漏油"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-13站",
          deviceType: "整体式压缩机",
          bitNumber: "SD13-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2019.4.25",
          powerOffTime: "21:20",
          powerOnTime: "22:20",
          powerOffReason: "压缩缸排气温度相差大"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-14站",
          deviceType: "整体式压缩机",
          bitNumber: "SD14-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.4.30",
          powerOffTime: "9:00",
          powerOnTime: "8:00",
          powerOffReason: "一级分离器高液位停机"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-14站",
          deviceType: "整体式压缩机",
          bitNumber: "SD14-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2019.5.31",
          powerOffTime: "20:40",
          powerOnTime: "17:40",
          powerOffReason: "防爆门渗漏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2016.10.13",
          powerOffTime: "20:00",
          powerOnTime: "20:20",
          powerOffReason: "注油器管线卡套处渗油"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2016.10.13",
          powerOffTime: "9:30",
          powerOnTime: "9:40",
          powerOffReason: "高位水箱水管线接头处漏水"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-7站",
          deviceType: "整体式压缩机",
          bitNumber: "SD7-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.4.23",
          powerOffTime: "11:00",
          powerOnTime: "11:20",
          powerOffReason: "水泵皮带有裂痕"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-1",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.7.30",
          powerOffTime: "14:40",
          powerOnTime: "15:10",
          powerOffReason: "自动排模块漏气"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-2",
          deviceName: "往复式压缩机",
          deviceState: "开机",
          date: "2017.11.5",
          powerOffTime: "6:00",
          powerOnTime: "15日18:30",
          powerOffReason: "高位油箱防爆接线盒损坏"
        },
        {
          oilField: "长庆油田",
          factory: "第五采气厂",
          workZone: "作业三区",
          station: "苏东-8站",
          deviceType: "整体式压缩机",
          bitNumber: "SD8-YS-3",
          deviceName: "往复式压缩机",
          deviceState: "停机",
          date: "2017.11.13",
          powerOffTime: "9:10",
          powerOnTime: "10:10",
          powerOffReason: "一级进气分离器液位开关防爆软管损坏"
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
      this.tableData.forEach(item => {
        item.powerOnOffTime = `${item.date} ${item.powerOffTime}`;
        if (item.powerOnTime) {
          item.powerOnOffTime += ` ~ ${item.date} ${item.powerOnTime}`;
        }
      });
    }
  }
};
</script>
