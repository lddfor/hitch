<!--诊断案例库-->
<template>
  <div class="data-view hitch">
    <!--<title-message inputName="故障案例库"></title-message>-->
    <div class="main-content" style=" margin-top: 16px">
      <el-link :underline="false" type="info" style="margin-bottom: 10px">诊断案例库</el-link>
      <div class="search-form">
        <el-form :inline="true" :model="myForm" class="demo-form-inline">
          
          <el-form-item label>
            <el-select @change="firstChange" size="mini" v-model="myForm.hitchLevel1" placeholder="查询方式">
              <el-option label="按设备查询" value="device"></el-option>
              <el-option label="按设备类别查询" value="type"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label>
            <el-cascader
              style="width: 300px"
              size="mini"
              v-model="valueCascader"
              :options="demoCascader"
              @change="handleChange"></el-cascader>
          </el-form-item>
          
          
          <el-form-item>
            <el-button type="text" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item style="float: right;">
            <el-input
              size="mini"
              placeholder="搜索故障案例"
              suffix-icon="el-icon-search"
              v-model="myForm.caseName"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" size="small" @click="addMessage">添加记录</el-button>
      <p></p>
      <div class="search-result-table">
        <el-table :data="tableData" style="width: 100%" size="mini">
          <el-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :prop="column.name"
            :label="column.label"
            :width="column.width"
          ></el-table-column>
          <el-table-column   label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="viewDetail(scope.row)" type="text" size="small">查看详情</el-button>
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
    </div>
    <hitch-detail :detailDialog="detailDialog" :detailsData="newDetailsData"></hitch-detail>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%">
      <div style="margin-top: 10px;padding-right: 18px;">
        <el-form ref="form" :model="detailForm" label-width="120px">
          <el-form-item label="层级关系">
            <el-cascader
              v-model="detailForm.name"
              :options="optionsC"
              @change="cascaderHandleChange" style="width: 400px;"></el-cascader>
          </el-form-item>
          <el-form-item label="设备状态简述">
            <el-input v-model="detailForm.name2"></el-input>
          </el-form-item>
          <el-form-item label="设备状态分析">
            <el-input v-model="detailForm.name3"></el-input>
          </el-form-item>
          <el-form-item label="设备运行建议">
            <el-input v-model="detailForm.name4"></el-input>
          </el-form-item>
          <el-form-item label="参考标准">
            <el-checkbox v-model="detailForm.name6">ISO10816-3:2009振动监测评估标准
            </el-checkbox>
            <el-checkbox v-model="detailForm.name8">GB/T7777-2003容积式压缩机机械振动测量与评价
            </el-checkbox>
          
          </el-form-item>
          <el-form-item label="检修反馈">
            <el-input v-model="detailForm.name7"></el-input>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :limit="3">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
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
  import HitchDetail from '../components/HitchDetail';
  
  export default {
    name: 'hitch',
    components: {
      titleMessage,
      HitchDetail
    },
    data() {
      return {
        optionsC: [
          {
            id: 11,
            label: '第三采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 111,
                label: '第一天然气处理厂',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 1111,
                    label: '增压站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 11111,
                        label: '7#',
                        nodeAttributes: {
                          type: 'device'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 112,
                label: '作业二区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 1121,
                    label: '桃2-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 11211,
                        label: '1#',
                        nodeAttributes: {
                          type: 'device'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 21,
            label: '第四采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 211,
                label: '作业一区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2111,
                    label: '苏36-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21111,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21112,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21113,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21114,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2112,
                    label: '苏36-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21121,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21122,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2113,
                    label: '苏36-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21131,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21132,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 212,
                label: '作业二区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2121,
                    label: '苏6-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21211,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21212,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2122,
                    label: '苏6-7站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21221,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21222,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21223,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21224,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2123,
                    label: '苏东41-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21231,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21232,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21233,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21234,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2124,
                    label: '苏东41-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21241,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21242,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2125,
                    label: '苏东41-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21251,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21252,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2126,
                    label: '苏东41-3站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21261,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21262,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2127,
                    label: '苏东41-3站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21271,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21272,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2128,
                    label: '苏东41-4站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21281,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21282,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 213,
                label: '作业三区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 2131,
                    label: '苏54-1站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21311,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21312,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21313,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21314,
                        label: '4#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 2132,
                    label: '苏54-2站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 21321,
                        label: '1#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21322,
                        label: '2#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 21323,
                        label: '3#',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 31,
            label: '第五采气厂',
            nodeAttributes: {
              type: 'organization'
            },
            children: [
              {
                id: 313,
                label: '作业三区',
                nodeAttributes: {
                  type: 'organization'
                },
                children: [
                  {
                    id: 3133,
                    label: '苏东-7站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
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
                    ]
                  },
                  {
                    id: 3134,
                    label: '苏东-8站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31341,
                        label: 'SD8-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31342,
                        label: 'SD8-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31343,
                        label: 'SD8-YS-3',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31344,
                        label: 'SD8-YS-4',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31345,
                        label: 'SD8-YS-5',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3135,
                    label: '苏东-10站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31351,
                        label: 'SD10-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31352,
                        label: 'SD10-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31353,
                        label: 'SD10-YS-3',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31354,
                        label: 'SD10-YS-4',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31355,
                        label: 'SD15-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31356,
                        label: 'SD17-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3136,
                    label: '苏东-11站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31361,
                        label: 'SD11-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31362,
                        label: 'SD11-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3137,
                    label: '苏东-12站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31371,
                        label: 'SD12-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31372,
                        label: 'SD12-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3138,
                    label: '苏东-13站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31381,
                        label: 'SD13-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31382,
                        label: 'SD13-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 3139,
                    label: '苏东-14站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 31391,
                        label: 'SD14-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      },
                      {
                        id: 31392,
                        label: 'SD14-YS-2',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  },
                  {
                    id: 31310,
                    label: '苏东-21站',
                    nodeAttributes: {
                      type: 'organization'
                    },
                    children: [
                      {
                        id: 313101,
                        label: 'SD21-YS-1',
                        nodeAttributes: {
                          type: 'organization'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        newDetailsData: [{
          title: '设备状态简述',
          type: 'content',
          content: '本次监测周期内该机组持续运行,震动趋势平稳'
        }, {
          title: '设备状态分析',
          type: 'list',
          content: [
                    '泵两端速度谱中出现转频及其倍频，2X转频幅值较高；',
                    '电机速度谱中出现转频及其倍频，1X转频幅值较高；',
                    '综合分析机组存在拍振，并且存在不对中。振动幅值均在正常范围内。',
            ]
        }, {
          title: '设备运行建议',
          type: 'content',
          content: '设备可继续运行,关注震动及温度发展趋势'
        }, {
          title: '检修反馈',
          type: 'content',
          content: '重新找后恢复正常'
        }, {
          title: '查看相关附件',
          type: 'list',
          download: true,
          content: [
            'ISO10816振动标准.PDF'
          ]
        },],
        detailForm: {
          name: '',
          name2: '',
          name3: '',
          name4: '',
          name5: '',
          name6: '',
          name7: '',
          name8: '',
        },
        myForm: {
          hitchLevel1: '',
        },
        dialogVisible: false,
        valueCascader: '',
        options: [],
        demoCascader: [],
        curPage: 0,
        pageSize: 10,
        detailDialog: {
          visible: false
        },
        tableColumns: [
          {
            name: 'number',
            label: '序号',
            width: '80px'
          },
          // {
          //   name: 'all',
          //   label: '所属油田',
          //   width: '150px'
          // },
          // {
          //   name: 'factory',
          //   label: '所属厂',
          //   width: '150px'
          // },
          {
            name: 'workZone',
            label: '所属作业区',
          },
          {
            name: 'station',
            label: '所属站',
          },
          {
            name: 'bitNumber',
            label: '所属位号',
          },
          {
            name: 'occurrenceTime',
            label: '案例发生时间',
          },
          {
            name: 'deviceType',
            label: '设备类型',
          },
          {
            name: 'deviceName',
            label: '设备名称',
          },
          {
            name: 'caseName',
            label: '案例名称',
          }
        ],
        tableData: [],
        tableDataSource: [
          {
            number: 1,
            field: '',
            all: '长庆油田',
            factory: '第三采气厂',
            workZone: '第一天然气处理厂',
            station: '增压站',
            bitNumber: '7#',
            deviceType: '分体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2017.1.14',
            caseName: '2#风机扇叶断裂故障'
          },
          {
            number: 2,
            all: '长庆油田',
            factory: '第三采气厂',
            workZone: '第一天然气处理厂',
            station: '增压站',
            bitNumber: '6#',
            deviceType: '分体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2017.2.19',
            caseName: '填料磨损故障'
          },
          {
            number: 3,
            all: '长庆油田',
            factory: '第三采气厂',
            workZone: '第一天然气处理厂',
            station: '增压站',
            bitNumber: '2#',
            deviceType: '分体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2018.11.8',
            caseName: '填料磨损故障'
          },
          {
            number: 4,
            all: '长庆油田',
            factory: '第三采气厂',
            workZone: '第一天然气处理厂',
            station: '增压站',
            bitNumber: '5#',
            deviceType: '分体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2019.5.10',
            caseName: '填料盒破损事故'
          },
          {
            number: 5,
            all: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东7站',
            bitNumber: 'SD7-YS-1',
            deviceType: '整体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2019.8.10',
            caseName: '一排压变软管破裂'
          },
          {
            number: 6,
            all: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东7站',
            bitNumber: 'SD7-YS-1',
            deviceType: '整体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2019.7.8',
            caseName: '通讯模块故障'
          },
          {
            number: 7,
            all: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东7站',
            bitNumber: 'SD7-YS-1',
            deviceType: '整体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2019.5.30',
            caseName: '防爆门渗漏故障'
          },
          {
            number: 8,
            all: '长庆油田',
            factory: '第五采气厂',
            workZone: '作业三区',
            station: '苏东7站',
            bitNumber: 'SD7-YS-1',
            deviceType: '整体式压缩机',
            deviceName: '往复式压缩机',
            occurrenceTime: '2019.4.18',
            caseName: '机组转速波动大故障'
          }
        ]
      };
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
    methods: {
      cascaderHandleChange(){},
      addMessage() {
        this.dialogVisible = true;
      },
      firstChange(val) {
        if (val === 'device') {
          this.demoCascader = [
            {
              id: 11,
              label: '第三采气厂',
              nodeAttributes: {
                type: 'organization'
              },
              children: [
                {
                  id: 111,
                  label: '第一天然气处理厂',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 1111,
                      label: '增压站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 11111,
                          label: '7#',
                          nodeAttributes: {
                            type: 'device'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 112,
                  label: '作业二区',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 1121,
                      label: '桃2-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 11211,
                          label: '1#',
                          nodeAttributes: {
                            type: 'device'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 21,
              label: '第四采气厂',
              nodeAttributes: {
                type: 'organization'
              },
              children: [
                {
                  id: 211,
                  label: '作业一区',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 2111,
                      label: '苏36-1站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21111,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21112,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21113,
                          label: '3#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21114,
                          label: '4#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2112,
                      label: '苏36-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21121,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21122,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2113,
                      label: '苏36-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21131,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21132,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 212,
                  label: '作业二区',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 2121,
                      label: '苏6-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21211,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21212,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2122,
                      label: '苏6-7站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21221,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21222,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21223,
                          label: '3#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21224,
                          label: '4#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2123,
                      label: '苏东41-1站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21231,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21232,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21233,
                          label: '3#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21234,
                          label: '4#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2124,
                      label: '苏东41-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21241,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21242,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2125,
                      label: '苏东41-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21251,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21252,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2126,
                      label: '苏东41-3站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21261,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21262,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2127,
                      label: '苏东41-3站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21271,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21272,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2128,
                      label: '苏东41-4站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21281,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21282,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 213,
                  label: '作业三区',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 2131,
                      label: '苏54-1站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21311,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21312,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21313,
                          label: '3#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21314,
                          label: '4#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 2132,
                      label: '苏54-2站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 21321,
                          label: '1#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21322,
                          label: '2#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 21323,
                          label: '3#',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 31,
              label: '第五采气厂',
              nodeAttributes: {
                type: 'organization'
              },
              children: [
                {
                  id: 313,
                  label: '作业三区',
                  nodeAttributes: {
                    type: 'organization'
                  },
                  children: [
                    {
                      id: 3133,
                      label: '苏东-7站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
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
                      ]
                    },
                    {
                      id: 3134,
                      label: '苏东-8站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31341,
                          label: 'SD8-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31342,
                          label: 'SD8-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31343,
                          label: 'SD8-YS-3',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31344,
                          label: 'SD8-YS-4',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31345,
                          label: 'SD8-YS-5',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 3135,
                      label: '苏东-10站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31351,
                          label: 'SD10-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31352,
                          label: 'SD10-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31353,
                          label: 'SD10-YS-3',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31354,
                          label: 'SD10-YS-4',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31355,
                          label: 'SD15-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31356,
                          label: 'SD17-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 3136,
                      label: '苏东-11站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31361,
                          label: 'SD11-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31362,
                          label: 'SD11-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 3137,
                      label: '苏东-12站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31371,
                          label: 'SD12-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31372,
                          label: 'SD12-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 3138,
                      label: '苏东-13站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31381,
                          label: 'SD13-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31382,
                          label: 'SD13-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 3139,
                      label: '苏东-14站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 31391,
                          label: 'SD14-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        },
                        {
                          id: 31392,
                          label: 'SD14-YS-2',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    },
                    {
                      id: 31310,
                      label: '苏东-21站',
                      nodeAttributes: {
                        type: 'organization'
                      },
                      children: [
                        {
                          id: 313101,
                          label: 'SD21-YS-1',
                          nodeAttributes: {
                            type: 'organization'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        } else {
          this.demoCascader = [
            { label: '设备故障类别' }
          ]
        }
      },
      handleChange() {
      
      },
      onSubmit() {
      },
      viewDetail(row) {
        this.detailDialog.visible = true;
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
