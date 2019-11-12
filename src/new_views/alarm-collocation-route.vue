<template>
  <div class="alarm-collocation">
    <div class="title_message"><span class="el-icon-arrow-left" style="cursor: pointer" @click="$router.go(-1)"></span>报警配置</div>
    <organization-select :is-not-union="true" size="mini" style="margin-top: 20px"></organization-select>
    <h3 style="font-weight: 700">通知配置</h3>
    <el-row :gutter="20" style="margin-top: 16px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="6">
          <el-form-item label="通知方式">
            <el-select v-model="form.region" placeholder="通知方式" size="mini">
              <el-option label="信息" value="信息"></el-option>
              <el-option label="邮件" value="邮件"></el-option>
              <el-option label="所有" value="所有"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="通知频率">
            <el-select v-model="form.rate" placeholder="通知频率" size="mini">
              <el-option label="只通知一次" value="只通知一次"></el-option>
              <el-option label="每五分钟通知" value="每五分钟通知"></el-option>
              <el-option label="每小时通知" value="每小时通知"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="通知人员">
            <el-select v-model="form.person" placeholder="通知人员" size="mini">
              <el-option label="设备负责人A" value="设备负责人A"></el-option>
              <el-option label="设备负责人B" value="设备负责人B"></el-option>
              <el-option label="设备负责人C" value="设备负责人C"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label>
            <el-button type="primary" size="small">保存</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <h3 style="font-weight: 700;margin-top: 0px">阈值配置</h3>
    <el-card>
      <div class="search-result-table">
        <el-table :data="tableData" style="width: 100%" size="mini" border>
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
          
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button @click="viewDetail(scope.row)" type="text" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pager clearfix">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="curPage + 1"
            :page-size="3"
            layout="prev, pager, next"
            :total="tableDataSource.length"
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
  import titleMessage from '~/common/title-message.vue';
  import OrganizationSelect from '~/components/OrganizationSelect';
  
  export default {
    name: 'survey-device',
    components: {
      titleMessage,
      OrganizationSelect
    },
    data() {
      return {
        activeName: 'first',
        rate: '',
        person: '',
        dialogVisible: false,
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        form: {
          name: ''
        },
        curPage: 0,
        pageSize: 10,
        tableColumnsSencond: [
          {
            name: 'no',
            label: '所属站',
            // width: "70px"
          },
          {
            name: 'name',
            label: '设备类型'
          },
          {
            name: 'llow',
            label: '设备位号'
          },
          {
            name: 'low',
            label: '设备名称'
          },
          {
            name: 'height',
            label: '报警方式'
          },
          {
            name: 'hheight',
            label: '通知频率'
          },
          {
            name: 'hhheight',
            label: '通知人员'
          },
        
        
        ],
        tableColumns: [
          {
            name: 'no',
            label: '序号',
            width: '70px'
          },
          {
            name: 'name',
            label: '测点名称'
          },
          {
            name: 'llow',
            label: '低低值'
          },
          {
            name: 'low',
            label: '低值'
          },
          {
            name: 'height',
            label: '高值'
          },
          {
            name: 'hheight',
            label: '高高值'
          }
        ],
        tableData: [],
        tableDataSencond: [],
        tableDataSource: [
          {
            no: 1,
            name: 'A',
            llow: '1',
            low: '2',
            height: '3',
            hheight: '4'
          },
          {
            no: 2,
            name: 'B',
            llow: '1',
            low: '2',
            height: '3',
            hheight: '4'
          },
          {
            no: 3,
            name: 'B',
            llow: '1',
            low: '2',
            height: '3',
            hheight: '4'
          },
          {
            no: 4,
            name: 'A',
            llow: '1',
            low: '2',
            height: '3',
            hheight: '4'
          },
          {
            no: 5,
            name: 'B',
            llow: '1',
            low: '2',
            height: '3',
            hheight: '4'
          },
        ],
        tableDataSourceSencond: [
          {
            no: '第五采气厂',
            name: '整体式压缩机',
            llow: 'SD&-YS-1',
            low: '往复式压缩机',
            height: '所有',
            hheight: '只通知一次',
            hhheight: '设备负责人A',
            
          },
          {
            no: '第五采气厂',
            name: '整体式压缩机',
            llow: 'SD&-YS-1',
            low: '往复式压缩机',
            height: '所有',
            hheight: '只通知一次',
            hhheight: '设备负责人A',
            
          },
          {
            no: '第五采气厂',
            name: '整体式压缩机',
            llow: 'SD&-YS-1',
            low: '往复式压缩机',
            height: '所有',
            hheight: '只通知一次',
            hhheight: '设备负责人A',
            
          },
          {
            no: '第五采气厂',
            name: '整体式压缩机',
            llow: 'SD&-YS-1',
            low: '往复式压缩机',
            height: '所有',
            hheight: '只通知一次',
            hhheight: '设备负责人A',
            
          },
          {
            no: '第五采气厂',
            name: '整体式压缩机',
            llow: 'SD&-YS-1',
            low: '往复式压缩机',
            height: '所有',
            hheight: '只通知一次',
            hhheight: '设备负责人A',
            
          },
        ],
        formDialog: {
          time: 'A',
          one: '1',
          two: '2',
          three: '3',
          four: '4'
        }
      };
    },
    methods: {
      goBack(){
      
      },
      changeView(value) {
        this.activeName = 'first';
        
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
      startIndex: function () {
        return this.curPage * this.pageSize;
      },
      endIndex: function () {
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
    .title_message {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .el-card__body {
      padding-bottom: 0px;
    }
  }
</style>
