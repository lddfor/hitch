<template>
  <div class="alarm-collocation">
    <title-message inputName="设备列表"></title-message>
    <organization-select :is-not-union="true" size="mini" style="margin-top: 20px"></organization-select>
    <el-card>
      <div class="search-result-table">
        <el-table :data="tableDataSourceSencond" style="width: 100%" size="mini" border>
          <el-table-column
            v-for="(column, index) in tableColumnsSencond"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
          
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button @click="changeView(scope.row)" type="text" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pager clearfix">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="curPage + 1"
            :page-size="3"
            layout="prev, pager, next"
            :total="tableDataSourceSencond.length"
          ></el-pagination>
        </div>
      </div>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="测点名称">
          <el-input v-model="formDialog.time"></el-input>
        </el-form-item>
        <el-form-item label="低低值">
          <el-input v-model="formDialog.one"></el-input>
        </el-form-item>
        <el-form-item label="低低值">
          <el-input v-model="formDialog.two"></el-input>
        </el-form-item>
        <el-form-item label="高值">
          <el-input v-model="formDialog.three"></el-input>
        </el-form-item>
        <el-form-item label="高高值">
          <el-input v-model="formDialog.four"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
  import titleMessage from "~/common/title-message.vue";
  import OrganizationSelect from "~/components/OrganizationSelect";
  
  export default {
    name: "survey-device",
    components: {
      titleMessage,
      OrganizationSelect
    },
    data() {
      return {
        activeName:'first',
        rate: "",
        person: "",
        dialogVisible: false,
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        form: {
          name: ""
        },
        curPage: 0,
        pageSize: 10,
        tableColumnsSencond:[
          {
            name: "no",
            label: "所属站",
            // width: "70px"
          },
          {
            name: "name",
            label: "设备类型"
          },
          {
            name: "llow",
            label: "设备位号"
          },
          {
            name: "low",
            label: "设备名称"
          },
          {
            name: "height",
            label: "报警方式"
          },
          {
            name: "hheight",
            label: "通知频率"
          },
          {
            name: "hhheight",
            label: "通知人员"
          },
        
        
        ],
        tableColumns: [
          {
            name: "no",
            label: "序号",
            width: "70px"
          },
          {
            name: "name",
            label: "测点名称"
          },
          {
            name: "llow",
            label: "低低值"
          },
          {
            name: "low",
            label: "低值"
          },
          {
            name: "height",
            label: "高值"
          },
          {
            name: "hheight",
            label: "高高值"
          }
        ],
        tableData: [],
        tableDataSencond:[],
        tableDataSource: [
          {
            no: 1,
            name: "A",
            llow: "1",
            low: "2",
            height: "3",
            hheight: "4"
          },
          {
            no: 2,
            name: "B",
            llow: "1",
            low: "2",
            height: "3",
            hheight: "4"
          },
          {
            no: 3,
            name: "B",
            llow: "1",
            low: "2",
            height: "3",
            hheight: "4"
          },
          {
            no: 4,
            name: "A",
            llow: "1",
            low: "2",
            height: "3",
            hheight: "4"
          },
          {
            no: 5,
            name: "B",
            llow: "1",
            low: "2",
            height: "3",
            hheight: "4"
          },
        ],
        tableDataSourceSencond: [
          {
            no: "第五采气厂",
            name: "整体式压缩机",
            llow:"SD&-YS-1",
            low: "往复式压缩机",
            height:"所有",
            hheight: "只通知一次",
            hhheight: "设备负责人A",
            
          },
          {
            no: "第五采气厂",
            name: "整体式压缩机",
            llow:"SD&-YS-1",
            low: "往复式压缩机",
            height:"所有",
            hheight: "只通知一次",
            hhheight: "设备负责人A",
            
          },
          {
            no: "第五采气厂",
            name: "整体式压缩机",
            llow:"SD&-YS-1",
            low: "往复式压缩机",
            height:"所有",
            hheight: "只通知一次",
            hhheight: "设备负责人A",
            
          },
          {
            no: "第五采气厂",
            name: "整体式压缩机",
            llow:"SD&-YS-1",
            low: "往复式压缩机",
            height:"所有",
            hheight: "只通知一次",
            hhheight: "设备负责人A",
            
          },
          {
            no: "第五采气厂",
            name: "整体式压缩机",
            llow:"SD&-YS-1",
            low: "往复式压缩机",
            height:"所有",
            hheight: "只通知一次",
            hhheight: "设备负责人A",
            
          },
        ],
        formDialog: {
          time: "A",
          one: "1",
          two: "2",
          three: "3",
          four: "4"
        }
      };
    },
    methods: {
      changeView(value){
        // this.activeName = 'first';
        this.$router.push('/alarm-collocation-route')
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
      },
      viewDetail() {
        this.dialogVisible = true;
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
    }
  };
</script>


<style lang="scss">
  .alarm-collocation {
    .el-card__body {
      padding-bottom: 0px;
    }
  }
</style>
