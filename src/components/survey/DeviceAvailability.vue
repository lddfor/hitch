<!-- 设备接入情况统计 -->
<template>
  <div class="data-view">
    <!-- <title-message inputName="设备利用情况统计"></title-message> -->
     <div class="title_message with_back">
      <span class="go_back_sp" @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span>{{titleName}}</span>
    </div>
    <div class="main-content" style="padding: 24px 24px 0;">
      <div class="search-result-table">
       
        <div>
          <el-date-picker
            v-model="value1"
            size="mini"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right">
          </el-date-picker>
        </div>
        <el-table :data="tableData | accessStateFilter(accessState)"
                  style="width: 100%;margin-top: 10px">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
            :fixed="column.fixed"
            :formatter="column.formatter"
          >
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
        titleName: '设备利用情况统计',
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
            // width: "120px"
          },
          {
            name: "deviceType",
            label: "设备类型",
            // width: "120px"
          },
          // {
          //   name: "accessTime",
          //   label: "开关机时间"
          // },
          {
            name: "accessState",
            label: "设备利用率",
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
            bitNumber: "4#",
            deviceModel: "ZTY630",
            accessState: "80%",
            deviceType: "压缩机",
            accessTime: "2019-10-09"
          },
          {
            number: "2",
            oilField: "长庆油田",
            factory: "第四采气厂",
            workZone: "作业二区",
            station: "2站",
            bitNumber: "2#",
            deviceModel: "ZTY630",
            accessState: "88%",
            deviceType: "压缩机",
            accessTime: "2019-10-09"
          },
          {
            number: "3",
            oilField: "长庆油田",
            factory: "第四采气厂",
            workZone: "作业二区",
            station: "2站",
            bitNumber: "3#",
            deviceModel: "ZTY630",
            accessState: "90%",
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
            accessState: "86%",
            deviceType: "压缩机",
            accessTime: "2019-10-09"
          }
        ],
        accessState: "",
        value1:'',
        pickerOptions:{
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
  
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
        console.log(`每页 ${val} 条`);
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
      handleClick(data){
      }
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getData();
    }
  };
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
</style>
