<template>
  <div class="fault-code">
    <title-message inputName="故障代码库"></title-message>
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
                <!--<el-table-column fixed="right" label="操作" width="100">-->
                <!--<template slot-scope="scope">-->
                <!--<el-button @click="categoryChange(scope.row)" type="text" size="small">修改</el-button>-->
                <!--<el-button @click="categoryDelete(scope.row)" type="text" size="small">删除</el-button>-->
                <!--</template>-->
                <!--</el-table-column>-->
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
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'survey-device',
    components: {
      titleMessage
    },
    methods: {
      addFunciton() {
        this.dialogVisible = true;
      },
      categoryChange() {
      },
      categoryDelete() {
      },
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
    data() {
      return {
        input1: '',
        input2: '',
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
                label: '天然压缩机',
                
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
          children: 'children',
          label: 'label'
        },
        tableColumns: [
          {
            name: 'no',
            label: '序号',
            width: '80px'
          },
          {
            name: 'deviceNo',
            label: '故障部位代码'
          },
          {
            name: 'deviceName',
            label: '故障部位描述'
          },
          {
            name: 'failureModeCode',
            label: '故障现象代码组'
          },
          {
            name: 'failureModeName',
            label: '故障现象代码'
          },
          {
            name: 'failureReasonCode',
            label: '故障现象描述',
          },
          {
            name: 'failureReasonName',
            label: '故障原因代码组',
          },
          {
            name: 'failureReasonName2',
            label: '故障原因代码',
          },
          {
            name: 'failureReasonName3',
            label: '故障原因描述',
          },
          {
            name: 'failureReasonName4',
            label: '故障对策代码组',
          },
          {
            name: 'failureReasonName5',
            label: '故障对策代码',
          },
          {
            name: 'failureReasonName6',
            label: '故障对策描述',
          },
          {
            name: 'failureReasonName7',
            label: '故障对策代码',
          }
        
        ],
        
        tableDataSource: [
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '转子不平衡', no: 1},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '不对中', no: 2},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴弯曲', no: 3},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '螺栓松动', no: 4},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴磨损', no: 5},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴承跑圈', no: 6},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴瓦间隙过大', no: 7},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴瓦磨损', no: 8},
          // {deviceName: '离心泵', failureModeName: '振动大', failureReasonName: '轴颈磨损', no: 9}
        ],
        tableData: []
      };
    }
  };
</script>


<style lang="scss">
  .fault-code {
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
