<template>
  <div class="topbar">
    <div class="top-area">
      <div class="bar-title">
        <!--<img class="logo" src="../assets/emqlogo.png" />-->
        <span>长庆油田关键机组远程监测与故障诊断系统</span>
      </div>
      <div class="topbar-right">
        <div class="header_search_input">
          <!-- <el-input v-model="input" placeholder="请输入搜索内容" size="mini" suffix-icon="el-icon-search"></el-input> -->
          <el-autocomplete
            size="mini"
            popper-class="my-autocomplete"
            v-model="input"
            :fetch-suggestions="getQuerySuggestions"
            placeholder="请输入搜索内容"
            style="width: 280px;"
            @select="handleSelect"
          >
            <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></i>
            <div class="search-result">搜索结果</div>
            <template slot-scope="{ item }">
              <span class="title">{{ item.title }}</span>
            </template>
            <el-button type="text" style="float: right;">展示</el-button>
          </el-autocomplete>
        </div>
        <div class="help-link">
          <el-dropdown>
            <span class="el-dropdown-link">
              <span class="first-icon">
                <i class="fa fa-user"></i>
              </span>
              <span>{{ $store.state.user.username }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div href="javascript:;" @click="userMessage">
                  <i class="fa fa-ambulance"></i>
                  <span>账户信息</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div href="javascript:;" @click="logout">
                  <i class="fa fa-user"></i>
                  <span>退出登录</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "topbar",

  components: {},

  data() {
    return {
      lang: window.localStorage.getItem("language") || "en",
      input: "",
      results: []
    };
  },

  computed: {
    activeLink() {
      return this.$route.path === "/help";
    }
  },

  methods: {
    ...mapActions(["USER_LOGIN"]),
    logout() {
      this.USER_LOGIN({ isLogOut: true });
      this.$router.push({ path: "/login" }).catch(err => {});
    },
    userMessage() {
      this.$router.push({ path: "/user-center" }).catch(err => {});
      // const openLink =
      //   this.lang === "en"
      //     ? "https://www.emqx.io/downloads#enterprise"
      //     : "https://www.emqx.io/cn/downloads#enterprise";
      // window.open(openLink);
    },
    querySearch(queryString, cb) {
      var results = this.results;
      var res = queryString
        ? results.filter(this.createFilter(queryString))
        : results;
      // 调用 callback 返回建议列表的数据
      cb(res);
    },
    getQuerySuggestions(queryString, cb) {
      var results = [];
      var queryTypes = ["故障案例库", "设备档案库", "设备", "组织", "个人消息"];
      if (queryString.toString().trim()) {
        results = queryTypes
          .map(t => `在${t}中搜索${queryString}`)
          .map(t => {
            return {
              title: t
            };
          });
      }

      cb(results);
    },
    createFilter(queryString) {
      return result => {
        return (
          result.title.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { title: "654564", from: "故障案例库", fromTitle: "案例名称" },
        { title: "654564111", from: "个人消息", fromTitle: "消息名称" },
        { title: "654321", from: "设备详情", fromTitle: "" },
        { title: "654564", from: "故障案例库", fromTitle: "案例名称" },
        { title: "66666", from: "个人消息", fromTitle: "消息名称" },
        { title: "123456", from: "个人消息", fromTitle: "消息名称" }
      ];
    },
    handleSelect(item) {
    },
    handleIconClick(ev) {
      this.$router.push({ path: "/search/" + this.input }).catch(err => {});
    }
  },
  mounted() {}
};
</script>


<style lang="scss">
.topbar {
  height: 60px;
  line-height: 60px;
  /*padding-left: 110px;*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.16);
  .bar-title {
    position: fixed;
    top: 0;
    z-index: 1003;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #2b2c30;
    color: #fff !important;
    background-color: #32394d;

    span {
      font-size: 16px;
      margin-right: 40px;
      font-weight: 700;
      font-family: "Helvetica Neue";
    }

    img {
      margin-top: 6px;
      width: 48px;
      height: 42px;
      float: left;
    }
  }
  .top-area {
    background-color: #32394d;
    height: 100%;
    padding: 0 20px;
    text-align: right;
    .topbar-right {
      .header_search_input {
        display: inline-block;
        margin-right: 100px;
      }
      .help-link {
        display: inline;
        line-height: 32px;
        cursor: pointer;
        .link {
          display: inline-block;
          color: #82858f;
          padding: 0 20px;
          border-right: 1px solid #2b2c30;
          position: relative;
          top: 3px;
          .icon-bangzhu {
            font-size: 20px;
          }
        }
        a.active {
          color: #34c388;
        }
      }
      .enterprise-btn.el-button {
        color: #34c388;
        background: transparent;
        border-radius: 40px;
        border-color: #34c388;
        margin-left: 20px;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        .icon-arrow {
          position: relative;
          top: 1px;
        }
      }
      .el-button--medium {
        padding: 9px 20px;
      }
    }
  }
  .el-dropdown-link {
    .first-icon {
      display: inline-block;
      height: 32px;
      width: 32px;
      background: #4f76ee;
      text-align: center;
      font-size: 20px;
      border-radius: 50%;
      line-height: 32px;
      vertical-align: middle;
      color: white;
      margin-right: 10px;
    }
  }
}
</style>
