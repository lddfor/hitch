<template>
  <el-form :inline="true" :model="myForm" :size="size">
    <template v-if="!isNotUnion">
      <el-form-item label>
        <el-cascader
          style="width: 300px"
          size="mini"
          v-model="valueCascader"
          :options="demoCascader"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
    </template>
    <template v-else>
      <el-form-item label>
        <el-select
          v-model="myForm.hitchLevel1"
          placeholder="设备位置（一级）"
          @change="selectChange(myForm.hitchLevel1, 'hitchLevel1')"
        >
          <el-option
            v-for="(item, $index) in hitchLevel1List"
            :label="item.label"
            :value="item"
            :key="$index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-select
          v-model="myForm.hitchLevel2"
          placeholder="设备位置（二级）"
          @change="selectChange(myForm.hitchLevel2, 'hitchLevel2')"
        >
          <el-option
            v-for="(item, $index) in hitchLevel2List"
            :label="item.label"
            :value="item"
            :key="$index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-select
          v-model="myForm.hitchLevel3"
          placeholder="设备位置（三级）"
          @change="selectChange(myForm.hitchLevel3, 'hitchLevel3')"
        >
          <el-option
            v-for="(item, $index) in hitchLevel3List"
            :label="item.label"
            :value="item"
            :key="$index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-select v-model="myForm.bitNumber" placeholder="设备位号">
          <el-option
            v-for="(item, $index) in bitNumberList"
            :label="item.label"
            :value="item"
            :key="$index"
          ></el-option>
        </el-select>
      </el-form-item>
    </template>

    <el-form-item v-if="!immediately">
      <el-button type="text" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "organization-select-component",
  props: {
    immediately: {
      type: Boolean,
      default: false
    },
    isNotUnion: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "mini"
    }
  },
  data() {
    return {
      myForm: {
        hitchLevel1: "",
        hitchLevel2: "",
        hitchLevel3: "",
        bitNumber: ""
      },
      hitchLevel1List: [{ label: "第五采气厂" }],
      hitchLevel2List: [{ label: "作业三区" }],
      hitchLevel3List: [
        {
          id: 3133,
          label: "苏东-7站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31331,
              label: "SD7-YS-1",
              nodeAttributes: {
                type: "device"
              }
            },
            {
              id: 31332,
              label: "SD7-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31333,
              label: "SD7-YS-3",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3134,
          label: "苏东-8站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31341,
              label: "SD8-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31342,
              label: "SD8-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31343,
              label: "SD8-YS-3",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31344,
              label: "SD8-YS-4",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31345,
              label: "SD8-YS-5",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3135,
          label: "苏东-10站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31351,
              label: "SD10-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31352,
              label: "SD10-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31353,
              label: "SD10-YS-3",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31354,
              label: "SD10-YS-4",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31355,
              label: "SD15-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31356,
              label: "SD17-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3136,
          label: "苏东-11站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31361,
              label: "SD11-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31362,
              label: "SD11-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3137,
          label: "苏东-12站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31371,
              label: "SD12-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31372,
              label: "SD12-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3138,
          label: "苏东-13站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31381,
              label: "SD13-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31382,
              label: "SD13-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 3139,
          label: "苏东-14站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 31391,
              label: "SD14-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            },
            {
              id: 31392,
              label: "SD14-YS-2",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        },
        {
          id: 31310,
          label: "苏东-21站",
          nodeAttributes: {
            type: "organization"
          },
          children: [
            {
              id: 313101,
              label: "SD21-YS-1",
              nodeAttributes: {
                type: "organization"
              }
            }
          ]
        }
      ],
      bitNumberList: [
        {
          id: 31331,
          label: "SD7-YS-1",
          nodeAttributes: {
            type: "device"
          }
        },
        {
          id: 31332,
          label: "SD7-YS-2",
          nodeAttributes: {
            type: "organization"
          }
        },
        {
          id: 31333,
          label: "SD7-YS-3",
          nodeAttributes: {
            type: "organization"
          }
        }
      ],

      valueCascader: "",
      demoCascader: []
    };
  },
  computed: {},
  mounted() {
    this.firstChange("device");
  },
  watch: {},
  methods: {
    firstChange(val) {
      if (val === "device") {
        this.demoCascader = [
          {
            id: 11,
            label: "第三采气厂",
            nodeAttributes: {
              type: "organization"
            },
            children: [
              {
                id: 111,
                label: "第一天然气处理厂",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 1111,
                    label: "增压站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 11111,
                        label: "7#",
                        nodeAttributes: {
                          type: "device"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 112,
                label: "作业二区",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 1121,
                    label: "桃2-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 11211,
                        label: "1#",
                        nodeAttributes: {
                          type: "device"
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
            label: "第四采气厂",
            nodeAttributes: {
              type: "organization"
            },
            children: [
              {
                id: 211,
                label: "作业一区",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 2111,
                    label: "苏36-1站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21111,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21112,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21113,
                        label: "3#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21114,
                        label: "4#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2112,
                    label: "苏36-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21121,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21122,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2113,
                    label: "苏36-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21131,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21132,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 212,
                label: "作业二区",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 2121,
                    label: "苏6-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21211,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21212,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2122,
                    label: "苏6-7站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21221,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21222,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21223,
                        label: "3#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21224,
                        label: "4#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2123,
                    label: "苏东41-1站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21231,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21232,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21233,
                        label: "3#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21234,
                        label: "4#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2124,
                    label: "苏东41-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21241,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21242,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2125,
                    label: "苏东41-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21251,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21252,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2126,
                    label: "苏东41-3站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21261,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21262,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2127,
                    label: "苏东41-3站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21271,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21272,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2128,
                    label: "苏东41-4站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21281,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21282,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 213,
                label: "作业三区",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 2131,
                    label: "苏54-1站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21311,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21312,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21313,
                        label: "3#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21314,
                        label: "4#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 2132,
                    label: "苏54-2站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 21321,
                        label: "1#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21322,
                        label: "2#",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 21323,
                        label: "3#",
                        nodeAttributes: {
                          type: "organization"
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
            label: "第五采气厂",
            nodeAttributes: {
              type: "organization"
            },
            children: [
              {
                id: 313,
                label: "作业三区",
                nodeAttributes: {
                  type: "organization"
                },
                children: [
                  {
                    id: 3133,
                    label: "苏东-7站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31331,
                        label: "SD7-YS-1",
                        nodeAttributes: {
                          type: "device"
                        }
                      },
                      {
                        id: 31332,
                        label: "SD7-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31333,
                        label: "SD7-YS-3",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3134,
                    label: "苏东-8站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31341,
                        label: "SD8-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31342,
                        label: "SD8-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31343,
                        label: "SD8-YS-3",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31344,
                        label: "SD8-YS-4",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31345,
                        label: "SD8-YS-5",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3135,
                    label: "苏东-10站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31351,
                        label: "SD10-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31352,
                        label: "SD10-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31353,
                        label: "SD10-YS-3",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31354,
                        label: "SD10-YS-4",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31355,
                        label: "SD15-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31356,
                        label: "SD17-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3136,
                    label: "苏东-11站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31361,
                        label: "SD11-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31362,
                        label: "SD11-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3137,
                    label: "苏东-12站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31371,
                        label: "SD12-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31372,
                        label: "SD12-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3138,
                    label: "苏东-13站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31381,
                        label: "SD13-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31382,
                        label: "SD13-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 3139,
                    label: "苏东-14站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 31391,
                        label: "SD14-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      },
                      {
                        id: 31392,
                        label: "SD14-YS-2",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  },
                  {
                    id: 31310,
                    label: "苏东-21站",
                    nodeAttributes: {
                      type: "organization"
                    },
                    children: [
                      {
                        id: 313101,
                        label: "SD21-YS-1",
                        nodeAttributes: {
                          type: "organization"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ];
      } else {
        this.demoCascader = [{ label: "设备故障类别" }];
      }
    },
    handleChange() {},
    onSubmit() {},
    selectChange(val, key) {
      // switch (key) {
      //   case "hitchLevel1":
      //     this.hitchLevel2List = this.queryDemoCascader(val);
      //     break;
      //   case "hitchLevel2":
      //     this.hitchLevel2List = this.queryDemoCascader(val);
      //     break;
      //   case "hitchLevel3":
      //     this.bitNumberList = this.queryDemoCascader(val);
      //     break;
      // }
    },
    queryDemoCascader(val) {
      return [];
    }
  }
};
</script>
