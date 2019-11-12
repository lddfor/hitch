<template>
  <div class="data-view">
    <title-message inputName="消息管理"></title-message>
    <div class="main-content" style="padding: 24px 24px 0;">
      <div class="search-result-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
              <el-button @click="setReaded(scope.row)" type="text" size="small">标为已读</el-button>
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
            layout="total, sizes, ->, prev, pager, next, jumper, slot"
            :total="tableDataSource.length"
          ></el-pagination>
        </div>
      </div>
    </div>
    <MessageDetail :detailDialog="detailDialog"></MessageDetail>
  </div>
</template>

<script>

import titleMessage from '~/common/title-message.vue';
import MessageDetail from '../components/MessageDetail'

export default {
  name: "system-message",
  components: {
    titleMessage,
    MessageDetail
    },
  data() {
    return {
      curPage: 0,
      pageSize: 10,
      detailDialog: {
        visible: false
      },
      tableColumns: [
        {
          name: "messageType",
          label: "消息类型",
        },
        {
          name: "title",
          label: "标题"
        },
        {
          name: "time",
          label: "时间",
        }
      ],
      tableData: [],
      tableDataSource: [
        {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },
              {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },
              {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },  {
          messageType: "系统通知",
          title: "标题名称",
          time: "2019-10-09 10:24:02"
        },
      
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
    viewDetail(row) {
      this.detailDialog.visible = true;
    },
    setReaded(row) {
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
  }
};
</script>


<style lang="scss">
.data-view {
}
</style>
