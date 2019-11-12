<!-- 设备接入情况统计 -->
<template>
  <div class="data-view device-access">
    <!-- <title-message inputName="设备接入情况统计"></title-message> -->
    <div class="title_message with_back">
      <span class="go_back_sp" @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span>{{titleName}}</span>
    </div>
    <div class="main-content" style="padding: 24px 24px 0;">
      <div class="search-result-table">
        <div style="margin-bottom: 16px;">
          已接入设备数量：
          <span>440</span>
          ，未接入数量：
          <span>60</span>
        </div>
        <div>
          <el-select v-model="accessState" placeholder="接入状态">
            <el-option key="0" label="全部" value></el-option>
            <el-option key="1" label="未接入" value="未接入"></el-option>
            <el-option key="2" label="已接入" value="已接入"></el-option>
          </el-select>
        </div>
        <el-table :data="tableData | accessStateFilter(accessState)" style="width: 100%">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
            :fixed="column.fixed"
            :formatter="column.formatter"
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
  </div>
</template>

<script>
import TitleMessage from "~/common/title-message";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    TitleMessage
  },
  data() {
    //这里存放数据
    return {
      titleName: "设备接入情况统计",
      curPage: 0,
      pageSize: 10,
      tableColumns: [
        {
          name: "oilField",
          label: "单位",
          width: "120px"
        },
        {
          name: "factory",
          label: "设备安装位置（一级）",
          width: "180px"
        },
        {
          name: "workZone",
          label: "设备安装位置（二级）",
          width: "180px"
        },
        {
          name: "station",
          label: "设备安装位置（三级）",
          width: "180px"
        },
        {
          name: "bitNumber",
          label: "设备位号",
          width: "100px"
        },
        {
          name: "deviceModel",
          label: "设备型号",
          width: "120px"
        },
        {
          name: "deviceType",
          label: "设备类型",
          width: "120px"
        },
        {
          name: "accessTime",
          label: "接入时间"
        },
        {
          name: "accessState",
          label: "接入状态",
          width: "120px",
          fixed: "right"
        }
      ],
      tableData: [],
      tableDataSource: [
        {
          number: "1",
          oilField: "长庆油田",
          factory: "第四采气厂",
          workZone: "作业二区",
          station: "2站",
          bitNumber: "1#",
          deviceModel: "ZTY630",
          accessState: "已接入",
          deviceType: "压缩机",
          accessTime: "2019-10-09"
        },
        {
          number: "2",
          oilField: "长庆油田",
          factory: "第四采气厂",
          workZone: "作业二区",
          station: "2站",
          bitNumber: "1#",
          deviceModel: "ZTY630",
          accessState: "已接入",
          deviceType: "压缩机",
          accessTime: "2019-10-09"
        },
        {
          number: "3",
          oilField: "长庆油田",
          factory: "第四采气厂",
          workZone: "作业二区",
          station: "2站",
          bitNumber: "1#",
          deviceModel: "ZTY630",
          accessState: "未接入",
          deviceType: "压缩机",
          accessTime: "2019-10-09"
        },
        {
          number: "4",
          oilField: "长庆油田",
          factory: "第四采气厂",
          workZone: "作业二区",
          station: "2站",
          bitNumber: "1#",
          deviceModel: "ZTY630",
          accessState: "已接入",
          deviceType: "压缩机",
          accessTime: "2019-10-09"
        }
      ],
      accessState: ""
    };
  },
  filters: {
    accessStateFilter(value, accessState) {
      if (!accessState) {
        return value;
      }
      return value.filter(v => v.accessState == accessState);
    }
  },
  //监听属性 类似于data概念
  computed: {
    startIndex: function() {
      return this.curPage * this.pageSize;
    },
    endIndex: function() {
      return (this.curPage + 1) * this.pageSize;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      this.$router.push("/survey/organization/" + this.$route.params.id).catch(err=>{});
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.curPage = 0;
      this.getData();
    },
    handleCurrentChange(val) {
      this.curPage = val - 1;
      this.getData();
      console.log(`当前页: ${val}`);
    },
    getData() {
      this.tableData = this.tableDataSource.slice(
        this.startIndex,
        this.endIndex
      );
    },
    handleClick(data) {}
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getData();
  }
};
</script>
<style lang='scss'>
//@import url(); 引入公共css类
</style>
