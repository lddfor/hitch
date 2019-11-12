<template>
  <div class="off-line-report-form">
    <el-card class="box-card" style="margin-top: 16px">
      <el-form label-width="140px" :model="formLabelAlign" size="mini">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="设备安装位置(一级)">
              <el-input v-model="formLabelAlign.one"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="设备安装位置(二级)">
              <el-input v-model="formLabelAlign.two"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="设备安装位置(三级)">
              <el-input v-model="formLabelAlign.three"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="设备位号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="">
              <el-button type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card" style="margin-top: 16px">
      <el-button @click="reportExprot" type="primary" size="small">导入</el-button>
      <el-button type="primary" size="small">导出</el-button>
      <el-table :data="tableData" style="width: 100%;margin-top: 16px" size="mini">
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
    </el-card>
    
    <el-dialog
      top="10vh"
      title="报表导入"
      :visible.sync="dialogVisible"
      width="90%">
      <div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        
        <el-row :gutter="20" style="padding:24px">
          <el-col :span="16">
            <el-input size="mini"></el-input>
          </el-col>
          <el-col :span="8">
            <!--<el-button type="primary" size="small">上传文件</el-button>-->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          
          </el-col>
        </el-row>
        <el-radio v-model="radio" label="2" style="margin-top: 60px">备选项</el-radio>
        <el-table :data="tableData" style="width: 100%;margin-top: 16px" size="mini">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  
  </div>
</template>

<script>
  import titleMessage from '~/common/title-message.vue';
  
  export default {
    name: 'offLineReportForm',
    components: {
      titleMessage,
      
    },
    data() {
      return {
        formLabelAlign: {
          one: '',
          two: '',
          three: '',
          name: '',
          region: '',
          
        },
        fileList: [
          {
            name: '导入文件1.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: '导入文件2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }],
        radio: '',
        dialogVisible: false,
        
        curPage: 0,
        pageSize: 10,
        tableColumns: [
          {
            name: 'number',
            label: '序号',
            width: '80px'
          },
          {
            name: 'all',
            label: '设备安装位置(一级)',
            width: '150px'
          },
          {
            name: 'factory',
            label: '设备安装位置(二级)',
            width: '150px'
          },
          {
            name: 'workZone',
            label: '设备安装位置(三级)',
            width: '150px'
          },
          {
            name: 'station',
            label: '设备位号',
          },
          {
            name: 'occurrenceTime',
            label: '时间',
            width: '180px'
          },
          {
            name: 'device1',
            label: '测点1',
            width: '150px'
          },
          {
            name: 'device2',
            label: '测点2',
          },
          {
            name: 'device3',
            label: '测点3',
          },
          {
            name: 'device4',
            label: '测点4',
          }
        ],
        tableData: [],
        tableDataSource: [
          {
            number: 1,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          },
          {
            number: 2,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '2#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          },
          {
            number: 3,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }, {
            number: 4,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }, {
            number: 5,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }, {
            number: 6,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }, {
            number: 7,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }, {
            number: 8,
            field: '',
            all: '第四采气厂',
            factory: '作业二区',
            workZone: '2站',
            station: '1#',
            occurrenceTime: '2019-08',
            device1: '8.5',
            device2: '9.5',
            device3: '9.5',
            device4: '9.5'
          }
        ],
      };
    },
    
    watch: {},
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
    methods: {
      changeTab(tab) {
      
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
      reportExprot: function () {
        this.dialogVisible = true
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  };
</script>


<style lang="scss">
  .off-line-report-form {
    .box-card {
      .el-card__body {
        padding-bottom: 0;
      }
    }
    .upload-demo{
      .el-upload-list--text{
        position: absolute;
        left: 24px;
        
      }
    }
  }
</style>
