<template>
  <div
    class="left-bar"
    v-bind:class="{openClass: isCollapse}"
    @mouseenter="leftMenuEnter"
    @mouseleave="leftMenuLeave"
  >
    <el-menu
      mode="vertical"
      unique-opened
      :collapse-transition="false"
      router
      background-color="#212734"
      text-color="#8991A3"
      active-text-color="#4A90E2"
      :default-active="menuItemActive"
    >
      <!--监测分析  开始-->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>综合监测</span>
        </template>
        <el-menu-item index="/" style="padding-left: 0;border-right: 0px none;" class="first">
          <!-- 监测分析 -->
          <el-tree
            ref="myTree"
            :data="treeData"
            :props="defaultProps"
            :default-openeds="[1]"
            :expand-on-click-node="true"
            @node-click="treeClick"
            class="organization-tree"
          ></el-tree>
          <!--:expand-on-click-node  点击图标才展开树的节点-->
        </el-menu-item>
      </el-submenu>
      <!--监测分析  结束-->

      <!--智能应用 开始 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-data-line"></i>
          <span>智能应用</span>
        </template>
        <el-menu-item index="/smart-application/auto-diagnostics">
          <i class="el-icon-bank-card"></i>
          自动诊断
        </el-menu-item>
        <el-menu-item index="/smart-application/integrated-diagnostics">
          <i class="el-icon-bank-card"></i>
          综合诊断
        </el-menu-item>
        <el-menu-item index="/smart-application/ai-diagnosis">
          <i class="el-icon-bangzhu"></i>
          模型诊断
        </el-menu-item>
        <el-menu-item index="/smart-application/prediction">
          <i class="el-icon-bank-card"></i>
          智能预测
        </el-menu-item>
      </el-submenu>
      <!--智能预测 结束-->

      <!--统计分析  开始-->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-data-line"></i>
          <span>统计分析</span>
        </template>
        <el-menu-item index="/survey/organization/1/alarm-record-analysis/overview">
          <i class="el-icon-data-line"></i>
          报警统计分析
        </el-menu-item>
        <el-menu-item index="/survey/organization/1/fault-record-analysis/overview">
          <i class="el-icon-data-line"></i>
          故障统计分析
        </el-menu-item>
      </el-submenu>
      <!--统计分析  结束-->

      <!--设备档案  开始-->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span>设备档案</span>
        </template>
        <el-menu-item index="/equipment/:1">
          <i class="el-icon-files"></i>
          设备台账
        </el-menu-item>
        <el-menu-item index="/equipment/:2">
          <i class="el-icon-files"></i>
          启停机记录
        </el-menu-item>
        <el-menu-item index="/equipment/:3">
          <i class="el-icon-files"></i>
          检修记录
        </el-menu-item>
        <el-menu-item index="/equipment/:4">
          <i class="el-icon-files"></i>
          保养记录
        </el-menu-item>
      </el-submenu>
      <!--设备档案  结束-->
      <!--配置管理 开始-->

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>配置管理</span>
        </template>
        <el-menu-item index="/alarm-collocation">
          <i class="el-icon-office-building"></i>
          报警配置
        </el-menu-item>
        <el-menu-item index="/fault-category-manage">
          <i class="el-icon-collection"></i>
          设备编码管理
        </el-menu-item>
      </el-submenu>

      <!--配置管理 结束-->

      <!--知识库管理 开始-->
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span>知识库管理</span>
        </template>
        <el-menu-item index="/hitch">
          <i class="el-icon-receiving"></i>
          故障案例库
        </el-menu-item>
        <el-menu-item index="/diagnosis-collocation">
          <i class="el-icon-files"></i>
          诊断案例库
        </el-menu-item>
        <el-menu-item index="/knowledge-graph">
          <i class="el-icon-files"></i>
          知识图谱应用
        </el-menu-item>
        <el-menu-item index="/fault-code">
          <i class="el-icon-files"></i>
          故障代码库
        </el-menu-item>
        <el-menu-item index="/device-konwledge">
          <i class="el-icon-files"></i>
          设备文档库
        </el-menu-item>
      </el-submenu>
      <!--知识库管理 结束-->

      <!--离线检测  开始-->
      <!-- 这个是为了给大庆项目添加的路由-->
      <!--<el-menu-item index="/off-line/report-form" style="padding-left: 10px">-->
      <!--<i class="el-icon-bangzhu"></i>-->
      <!--离线检测-->
      <!--</el-menu-item>-->
      <!--离线检测  结束-->

      <!--报表管理  开始-->
      <!--<el-submenu index="7">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-document-copy"></i>-->
          <!--<span>报表管理</span>-->
        <!--</template>-->
        <!--<el-menu-item index="/template-management" style="padding-left: 10px">-->
          <!--<i class="el-icon-document"></i>-->
          <!--报表-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="/template-export-report">-->
        <!--<i class="el-icon-folder-opened"></i>-->
        <!--报表导出-->
        <!--</el-menu-item>-->
      <!--</el-submenu>-->
      <!--报表管理  结束-->

      <!--系统管理  开始-->
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-thumb"></i>
          <span>系统管理</span>
        </template>
        <!--<el-menu-item index="/system-user">-->
        <!--<i class="el-icon-user"></i>-->
        <!--用户管理-->
        <!--</el-menu-item>-->
        <el-menu-item index="/user-center">
          <i class="el-icon-s-help"></i>
          账户信息
        </el-menu-item>
        <el-menu-item index="/system-log">
          <i class="el-icon-c-scale-to-original"></i>
          审计日志
        </el-menu-item>
        <el-menu-item index="/system-message">
          <i class="el-icon-chat-line-round"></i>
          消息管理
        </el-menu-item>
        <el-menu-item index="/system-help/function">
          <i class="el-icon-s-help"></i>
          用户帮助
        </el-menu-item>
     
      </el-submenu>
      <!--系统管理  结束-->
    </el-menu>
  </div>
</template>


<script>
import { Menu, MenuItem, MenuItemGroup } from "element-ui";
import { mapActions } from "vuex";

import { getOrganizationTree } from "~/mock_api/api/organization.js";

export default {
  name: "left-bar",
  data() {
    return {
      isCollapse: true,
      // true 是展开 false 是关闭
      defaultProps: {
        children: "children",
        label: "label"
      },
      treeData: []
    };
  },
  computed: {
    menuItemActive() {
      return this.$route.path;
    }
  },
  components: {
    "el-menu": Menu,
    "el-menu-item": MenuItem,
    "el-menu-item-group": MenuItemGroup
  },
  created() {
    // 综合监测下的组织设备树
    getOrganizationTree().then(
      organizationTree => (this.treeData = organizationTree)
    );
  },
  methods: {
    ...mapActions(["USER_LOGIN"]),
    logout() {
      this.USER_LOGIN({ isLogOut: true });
      this.$router.push({ path: "/login" }).catch(err => {});
    },
    treeClick(data) {
      var id = data.id;
      var type = data.nodeAttributes && data.nodeAttributes.type;
      var routerMap = {
        organization: `/survey/${type}/${id}`,
        device: `/survey/${type}/${id}/analysis`
      };
      if (type) {
        this.$router.push(routerMap[type]).catch(err => {});
      }
    },
    leftMenuEnter() {
      this.isCollapse = false;
    },
    leftMenuLeave() {
      this.isCollapse = true;
    }
  }
};
</script>


<style lang="scss">
.left-bar {
  &.openClass {
    width: 52px;
  }
  div[tabindex="0"] {
    > .el-tree-node__content {
      /*padding-left: 13px !important;*/
    }
  }

  position: fixed;
  top: 60px;
  bottom: 0;
  z-index: 1002;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0;
  background-color: #32394d;
  box-shadow: 5px 0px 15px #171717;
  &::-webkit-scrollbar {
    width: 0;
    height: 16px;
    background-color: #7af5cf;
    // 滚动条的背景颜色和样式 将滚动条去掉
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: red;
    width: 10px;
    height: 10px;
    border: 6px;
  }
  .el-submenu__title {
    font-weight: 700;
  }

  .el-menu {
    width: 240px;
    min-height: 100%;
    border-right: none !important;

    &--collapse {
      width: auto;
    }

    .el-menu-item {
      height: auto;
    }

    .el-submenu__icon-arrow {
      width: 12px;
    }
  }

  .bar-title {
    position: fixed;
    top: 0;
    z-index: 1003;
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    width: 200px;
    border-bottom: 1px solid #2b2c30;
    color: #fff !important;
    background-color: #32394d;

    span {
      font-size: 16px;
      margin-left: 8px;
    }

    img {
      margin-top: 6px;
      width: 48px;
      height: 42px;
      float: left;
    }
  }
  .el-tree {
    background: #212734;
    .el-tree-node:focus > .el-tree-node__content {
      background: #212734;
    }
  }
  .el-menu-item {
    // height: 40px;
    height: auto;
    padding: 0px;
    line-height: 40px;

    i {
      color: #6e6e75 !important;
    }

    &:hover,
    &.is-active {
      /*color: #5075ed !important;*/
      /*background-color: rgba(79, 118, 238, 0.1) !important;*/
      /*border-right: 4px solid #5075ed;*/
      i {
        /*color: #5075ed !important;*/
      }
    }

    .el-tree {
      .el-icon-caret-right:before {
        content: "\e6e0";
      }

      .el-tree-node__content {
        position: relative;
        height: 40px;

        &:hover,
        &.is-active {
          color: #5075ed !important;
          background-color: rgba(79, 118, 238, 0.1) !important;
          border-right: 0 none;
        }

        > .el-tree-node__expand-icon {
          position: absolute;
          top: 8px;
          right: 14px;
          padding: 6px;
        }
      }

      .el-tree-node__label {
        padding-left: 40px;
      }
    }
  }

  .last-item {
    margin-bottom: 72px;
  }

  .el-menu-item-group__title {
    font-weight: bolder;
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 14px;
  }

  i {
    width: 20px;
  }
  .el-menu-item {
    /*padding-left: 50px !important;*/
    margin-left: 10px;
  }
  .dash-topic img {
    position: absolute;
    top: 12px;
    width: 14px;
    height: 15px;

    &.green {
      display: none;
    }

    .black {
      display: block;
    }
  }

  .el-menu-item-group__title {
    color: #666 !important;
    background-color: #ffffff;
  }

  .is-active,
  .el-menu-item:hover {
    & > .dash-topic {
      .black {
        display: none;
      }

      .green {
        display: block;
      }
    }
  }
}
</style>
