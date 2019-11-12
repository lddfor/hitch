<template>
  <div class="fault-code">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="设备文档库" name="one">
        <!--<title-message inputName="设备文档库"></title-message>-->
        <organization-select :is-not-union="true"></organization-select>
        <el-row style="margin-top: 16px">
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
      
            <el-button size="small" type="primary">上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传doc/docx文件，且不超过10M</div>
          </el-upload>
        </el-row>
  
        <el-card class="search-result-table">
          <span style="font-size: 14px;font-weight: 500;color: #cccccc;">查询位置 :{{fileLink}}</span>
          <el-table :data="tableData" style="width: 100%;margin-top: 10px" size="mini" border>
            <el-table-column
              v-for="(column, index) in tableColumns"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width">
            </el-table-column>
      
            <el-table-column fixed="right" label="操作" width="180">
              <template slot-scope="scope">
                <el-button size="small" type="text">下载</el-button>
                <el-button @click="viewDetail(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">预览</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pager clearfix">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="curPage + 1"
              :page-size="10"
              layout="prev, pager, next"
              :total="tableDataSource.length"
            ></el-pagination>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="标准规范" name="two">
        <!--<title-message inputName="设备文档库"></title-message>-->
        <organization-select :is-not-union="true"></organization-select>
        <el-row style="margin-top: 16px">
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
      
            <el-button size="small" type="primary">上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传doc/docx文件，且不超过10M</div>
          </el-upload>
        </el-row>
  
        <el-card class="search-result-table">
          <span style="font-size: 14px;font-weight: 500;color: #cccccc;">查询位置 :{{fileLink}}</span>
          <el-table :data="tableData" style="width: 100%;margin-top: 10px" size="mini" border>
            <el-table-column
              v-for="(column, index) in tableColumns"
              :key="index"
              :prop="column.name"
              :label="column.label"
              :width="column.width">
            </el-table-column>
      
            <el-table-column fixed="right" label="操作" width="180">
              <template slot-scope="scope">
                <el-button size="small" type="text">下载</el-button>
                <el-button @click="viewDetail(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">预览</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pager clearfix">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="curPage + 1"
              :page-size="10"
              layout="prev, pager, next"
              :total="tableDataSource.length"
            ></el-pagination>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
   
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
        activeName:"one",
        fileLink: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        options3: [
          {
            id: 3133,
            label: '苏东-7站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3134,
            label: '苏东-8站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3135,
            label: '苏东-10站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3136,
            label: '苏东-11站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3137,
            label: '苏东-12站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3138,
            label: '苏东-13站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 3139,
            label: '苏东-14站',
            nodeAttributes: {
              type: 'organization'
            },
          },
          {
            id: 31310,
            label: '苏东-21站',
            nodeAttributes: {
              type: 'organization'
            },
            
          }
        ],
        options4: [
          {
            id: 31331,
            label: 'SD7-YS-1',
            nodeAttributes: {
              type: 'device'
            }
          },
          {
            id: 31332,
            label: 'SD7-YS-2',
            nodeAttributes: {
              type: 'organization'
            }
          },
          {
            id: 31333,
            label: 'SD7-YS-3',
            nodeAttributes: {
              type: 'organization'
            }
          }
        ],
        form: {
          name: ''
        },
        fileList: [],
        curPage: 0,
        pageSize: 10,
        tableColumns: [
          {
            name: 'no',
            label: '文件名',
            
          }],
        tableData: [],
        tableDataSource: [
          {
            no: '2019采气五厂作业三区8月份工作报告.doc',
          },
          {
            no: '2019采气五厂作业三区8月份工作报告.doc',
          },
          {
            no: '2019采气五厂作业三区8月份工作报告.doc',
          },
          {
            no: '2019采气五厂作业三区8月份工作报告.doc',
          },
          {
            no: '2019采气五厂作业三区8月份工作报告.doc',
          }
        ]
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      searchResult() {
        this.fileLink = `  ${this.value1}/${this.value2}/${this.value3}/${this.value4}`
        console.log()
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
      handleClick(){
      
      },
      getData() {
        this.tableData = this.tableDataSource.slice(
          this.startIndex,
          this.endIndex
        );
      },
    }
  };
</script>


<style lang="scss">
  .fault-code {
    .search-result-table {
      margin-top: 16px;
      .el-card__body {
        padding-bottom: 0px;
      }
    }
  }

</style>
