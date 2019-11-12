<template>
  <div class="alarm-collocation">
    <title-message inputName="设备编码管理"></title-message>
    <div class="tab">
      <el-container style="height: calc(100vh - 150px)">
        <el-aside width="300px;" style="height: 100%;">
          <el-tree
            node-key="id"
            :default-expanded-keys="[111]"
            style="width: 290px;margin-top: 18px"
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-aside>
        <el-container>
          <el-main>
            <el-button type="primary" size="small" @click="addFunciton">添加</el-button>
            <div class="search-result-table">
              <el-table :data="tableData" style="width: 100%;height: 100%;margin-top: 20px" size="mini">
                <el-table-column
                  v-for="(column, index) in tableColumns"
                  :key="index"
                  :prop="column.name"
                  :label="column.label"
                  :width="column.width"
                ></el-table-column>
                <el-table-column label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button @click="categoryChange(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="categoryDelete(scope.row)" type="text" size="small">删除</el-button>
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
          </el-main>
        </el-container>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
          <div>
            <h4>设备名称</h4>
            <el-input size="mini" v-model="input1" placeholder="请输入设备名称"></el-input>
            <h4>设备编码</h4>
            <el-input size="mini" v-model="input2" placeholder="请输入设备编码"></el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-container>
    </div>
  </div>
</template>


<script>
  import titleMessage from "~/common/title-message.vue";
  
  export default {
    name: "survey-device",
    components: {
      titleMessage
    },
    methods: {
      addFunciton() {
        this.dialogVisible = true;
      },
      categoryChange() {
      },
      categoryDelete() {},
      handleNodeClick(data) {
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
    data() {
      return {
        input1: "",
        input2: "",
        dialogVisible: false,
        expandedKey: [11],
        curPage: 0,
        pageSize: 10,
        data: [
          {
            id: '11',
            label: '设备类型',
            children: [
              {
                id: '111',
                label: '天然气压缩机',
                
                children: [
                  { id: '1112', label: '电动机' },
                  { label: '电启动系统' },
                  { label: '发动机' },
                  { label: '风冷却系统' },
                  { label: '工艺气系统' },
                  { label: '机座' },
                  { label: '联轴器' },
                  { label: '其他系统' },
                  { label: '气马达启动系统' },
                  { label: '燃料气进气系统' },
                  { label: '润滑油系统' },
                  { label: '水冷却系统' },
                  { label: '四冲程燃气发动机' },
                  { label: '压缩机（含整体机压缩端）' },
                  { label: '仪控系统' },
                  { label: '整体式机组点火系统' },
                  { label: '整体式机组动力端' },
                  { label: '整体式机组机身' },
                  { label: '整体式机组空气进气总成' },
                  { label: '整体式机组电子调速器' },
                  { label: '整体式机组缸头启动系统' },
                  { label: '整体式机组燃料气注气系统' },
                  { label: '整体式机组卧轴传动系统' },
                  { label: '整体式机组液压机械调速器' },
                ]
                
              }
            
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        },
        tableColumns: [
          {
            name: 'no',
            label: '序号',
            width: '80px'
          },
          {
            name: 'deviceNo',
            label: '设备类别'
          },
          {
            name: 'deviceName',
            label: '设备编码'
          },
          {
            name: 'failureModeCode',
            label: '部件名称'
          },
          {
            name: 'failureModeName',
            label: '部件代码'
          }
        ],
        
        tableDataSource:[
          {no: 1, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '电动机', failureModeName: 1},
          {no: 2, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '电启动系统', failureModeName: 2},
          {no: 3, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '发动机', failureModeName: 3},
          {no: 4, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '风冷却系统', failureModeName: 4},
          {no: 5, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '工艺气系统', failureModeName: 5},
          {no: 6, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '机座', failureModeName: 6},
          {no: 7, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '联轴器', failureModeName: 7},
          {no: 8, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '其他系统', failureModeName: 8},
          {no: 9, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '气马达启动系统', failureModeName: 9},
          {no: 10, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '燃料气进气系统', failureModeName: 'A'},
          {no: 11, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '润滑油系统', failureModeName: 'B'},
          {no: 12, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '水冷却系统', failureModeName: 'C'},
          {no: 13, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '四冲程燃气发动机', failureModeName: 'D'},
          {no: 14, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '压缩机（含整体机压缩端）', failureModeName: 'E'},
          {no: 15, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '仪控系统', failureModeName: 'F'},
          {no: 16, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组点火系统', failureModeName: 'G'},
          {no: 17, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组动力端', failureModeName: 'H'},
          {no: 18, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组机身', failureModeName: 'J'},
          {no: 19, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组空气进气总成', failureModeName: 'K'},
          {no: 20, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组电子调速器', failureModeName: 'L'},
          {no: 21, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组缸头启动系统', failureModeName: 'M'},
          {no: 22, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组燃料气注气系统', failureModeName: 'N'},
          {no: 23, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组卧轴传动系统', failureModeName: 'P'},
          {no: 24, deviceNo: '往复式天然气压缩机', deviceName: 522, failureModeCode: '整体式机组液压机械调速器', failureModeName: 'Q'}
        ],
        //   [
        //   {
        //     number: "1",
        //     all: "2019年10月31日9点15分3秒", //时间
        //     factory: "压缩一级一缸排温", // 测点名称
        //     workZone: "警告", //报警等级
        //     station: "121", // 报警值
        //     bitNumber: "自适应阈值预警", // 智能模型名称
        //     occurrenceTime: "1、进排气阀泄漏 2、进气温度过高", //诊断结果
        //     deviceType: "1、更换气阀 2、排查进气温度" //推荐处理措施
        //   },
        tableData: []
      };
    }
  };
</script>


<style lang="scss">
  .alarm-collocation {
    .search-result-table {
      margin-top: 10px;
    }
    .manage-body {
      display: flex;
      .el-container {
      }
    }
    .el-tree .el-tree-node__content {
      height: 27px;
      
    }
    .el-tree-node > .el-tree-node__children{
      padding-bottom: 5px;
    }
  }
</style>
