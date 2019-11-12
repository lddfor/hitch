<template>
  <div class="">
    <div class="fullscreen page-diag">
      <!-- 设备及诊断时间选择 -->
      <div class="diag-option-field">
        <h3 style="margin: 0">设备选择</h3>
        <organization-select @search="getOrganizationSelection" :immediately="true"></organization-select>
        <div style="margin-top: -10px">
          使用当前时间的设备数据进行综合诊断
          <el-button
            type="text"
            size="mini"
            :underline="false"
            @click="useCustomizeTime = true"
          >使用自定义时间</el-button>
        </div>
        <p></p>
        <div v-show="useCustomizeTime">
          <el-date-picker v-model="diagTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          <p></p>
        </div>
        <div>
          <el-button type="primary" @click="goDiag = true">开始诊断</el-button>
          <p></p>
        </div>
      </div>
      <!-- 综合诊断 -->
      <div class="diag-progress-field" v-if="goDiag">
        <!-- 设备预览图及模型应用进度 -->
        <div class="preview-sub-field" style="display: flex">
          <div class="preview">
            <div
              v-for="(model, $index) in diagModels"
              :key="$index"
              :style="markerStyle(model)"
              class="marker"
              :class="'status-'+ statusColor(model) + '-marker'"
              v-bind:data-name="model.name"
            ></div>
            <img src="/static/images/device-diagnostics.png" alt />
          </div>
          <div class="progress">
            <ul>
              <li
                v-for="(model, $index) in diagModels"
                :key="$index"
                :class="'status-'+ statusColor(model) + '-text'"
              >
                <span>使用{{model.name}}进行{{model.part}}诊断</span>
                <span>
                  <template v-if="model.status == diagStatus.SUCCESS">√</template>
                  <template v-else-if="model.status == diagStatus.ERROR">×</template>
                  <template v-else>?</template>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 处理措施推荐 -->
        <div class="suggestion-sub-field">
          <h3>处理措施推荐</h3>
          <ol>
            <li
              v-for="(suggestion, $index) in diagSuggestions"
              :key="$index"
            >针对{{suggestion.part}}，建议{{suggestion.text}}；</li>
          </ol>
        </div>
      </div>
      <div v-if="!goDiag">
        <img src="../../static/images/message.png" alt=""   style="float:right;width: 800px;height: 500px">
      </div>
    </div>
  </div>
</template>

<script>
const LOADING = 0,
  SUCCESS = 1,
  ERROR = -1;

import OrganizationSelect from "~/components/OrganizationSelect";

export default {
  components: {
    OrganizationSelect
  },
  methods: {
    getOrganizationSelection(result) {},
    markerStyle(model) {
      return {
        left: model.position[0],
        bottom: model.position[1],
        width: model.size,
        height: model.size
      };
    },
    statusColor(model) {
      let status = model.status;
      let statusColor;
      switch (status) {
        case SUCCESS:
          statusColor = "success";
          break;
        case ERROR:
          statusColor = "error";
          break;
        default:
          statusColor = "loading";
      }
      return statusColor;
    }
  },
  data() {
    return {
      useCustomizeTime: false,
      diagTime: new Date(),
      goDiag: false,
      diagStatus: {
        LOADING,
        SUCCESS,
        ERROR
      },
      diagModels: [
        {
          name: "往复压缩机气阀泄漏",
          part: "气阀",
          status: SUCCESS,
          position: ["0", "0"],
          size: "40px"
        },
        {
          name: "往复压缩机活塞环磨损",
          part: "活塞环",
          status: SUCCESS,
          position: ["0%", "64%"],
          size: "40px"
        },
        {
          name: "往复压缩机活塞杆磨损",
          part: "活塞杆",
          status: ERROR,
          position: ["50%", "36%"],
          size: "40px"
        },
        {
          name: "往复压缩机十字头磨损",
          part: "十字头",
          status: SUCCESS,
          position: ["50%", "64%"],
          size: "40px"
        },
        {
          name: "往复压缩机大头瓦磨损",
          part: "大头瓦",
          status: ERROR,
          position: ["60%", "36%"],
          size: "40px"
        },
        {
          name: "往复压缩机反向角异常",
          part: "反向角",
          status: SUCCESS,
          position: ["60%", "64%"],
          size: "40px"
        },
        {
          name: "往复压缩机活塞杆载荷异常",
          part: "活塞杆载荷",
          status: SUCCESS,
          position: ["0%", "36%"],
          size: "40px"
        },
        {
          name: "XXX诊断模型",
          part: "xxx部件",
          status: SUCCESS,
          position: ["0%", "64%"],
          size: "40px"
        }
      ],
      diagSuggestions: [
        { part: "xxx部件", text: "xxx" },
        { part: "xxx部件", text: "xxx" }
      ]
    };
  }
};
</script>

<style lang="scss">

.page-diag {
  display: flex;
  flex-direction: column;
}
.diag-progress-field {
  flex: 1;
  display: flex;
  flex-direction: column;

  .preview-sub-field {
    flex: 1;
    display: flex;

    .preview {
      flex: 3;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
      .marker {
        position: absolute;
        border: 2px solid;
        border-radius: 50%;
        transform: translate(-50%, 50%);
      }
    }
    .progress {
      flex: 2;
      display: flex;
      align-items: center;
      ul {
        li {
          font-size: 20px;
          line-height: 1.5;
        }
      }
    }
    .status {
      &-success {
        $color: #7391f1;
        &-marker {
          border-color: $color !important;
        }
        &-text {
          color: $color !important;
        }
      }
      &-error {
        $color: rgb(192, 0, 0);
        &-marker {
          border-color: $color !important;
        }
        &-text {
          color: $color !important;
        }
      }
    }
  }
  .suggestion-sub-field {
    min-height: 200px;
    max-height: 300px;
    position: absolute;
    right: 350px;
    top: 100px;
    ol {
      li {
        font-size: 18px;
        line-height: 1.5;
      }
    }
  }
}
</style>
