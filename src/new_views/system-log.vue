<template>
  <div class="data-view">
    <div class="main-content" style="padding: 24px 24px 0;">
      <title-message inputName="审计日志"></title-message>
      <div class="search-form">
        <el-form :inline="true" :model="myForm" class="demo-form-inline">
          <el-form-item label></el-form-item>
          <el-date-picker
            size="mini"
            v-model="myForm.dateRange"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
          <el-form-item style="margin-top: -3px;margin-left: 10px">
            <el-button type="text" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item style="float: right;">
            <el-input
              size="mini"
              placeholder="搜索日志"
              suffix-icon="el-icon-search"
              v-model="myForm.oprName"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
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
  </div>
</template>


<script>
import { getAuditLogs } from "~/mock_api/api/audit";

import titleMessage from "~/common/title-message.vue";
export default {
  name: "system-log",
  components: {
    titleMessage
  },
  data() {
    return {
      myForm: {
        dateRange: null,
        oprName: ""
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      curPage: 0,
      pageSize: 10,
      tableColumns: [
        {
          name: "number",
          label: "编号",
        },
        {
          name: "user",
          label: "用户",
        },
        {
          name: "IPAddress",
          label: "IP地址",
        },
        {
          name: "oprName",
          label: "操作"
        },
        {
          name: "dateRange",
          label: "时间",
        }
      ],
      tableData: [],
      tableDataSource: []
    };
  },
  created() {
    getAuditLogs().then(logs => {
      this.tableDataSource = logs;
      this.getData();
    });
  },
  computed: {
    startIndex: function() {
      return this.curPage * this.pageSize;
    },
    endIndex: function() {
      return (this.curPage + 1) * this.pageSize;
    }
  },
  mounted() {},
  methods: {
    onSubmit() {},
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


<style lang="scss">
.data-view {
}
</style>
