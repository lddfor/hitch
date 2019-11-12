<template>
  <el-dialog
  title="故障案例详情"
  :visible.sync="detailDialog.visible"
  width="680px"
  >
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item 
      v-for="(detail, index) in detailsData"
      :key="index"
       :title="detail.title" 
       :name="detail.title">
        <div v-if="detail.type=='content'">{{detail.content}}</div>
        <div v-if="detail.type=='list'">
          <div v-for="(listItem, listIndex) in detail.content"
        :key="listIndex"
        >
        <span style="display: inline-block;min-width: 300px;">{{listItem}}</span>
        <el-button type="text" v-if="detail.download" >下载</el-button>
        <!-- @click="viewImg(listItem)" -->
        </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <ImgDialog :imgDialog="imgDialog"></ImgDialog>
</el-dialog>
</template>

<script>
import ImgDialog from './imgDialog'
  export default {
    name: '',
    props:{
      detailsData: {
        type: Array,
        default:function(){
            return [
              {
              title: '故障描述',
              type: 'content',
              content: '2017年1月14日，甲方人员巡检时发现7#天然气压缩机组面板报警停机，面板显示2#空冷器震动大停机，随后对空冷器进行详细检查工作。'
            },
            {
              title: '故障原因',
              type: 'list',
              content: [
                '1）风扇扇叶固定支架受冷热交替影响，长时间运行造成疲劳断裂；',
                '2）风扇扇叶固定支架断裂后，扇叶与外圈间隙较小发生碰撞后导致风扇叶片折损；',
                '3）风机震动开关不能有效工作，造成扇叶二次伤害。'
              ]
            },
            {
              title: '处理结果',
              type: 'content',
              content: '检查扇叶固定支架，更换扇叶，对扇叶角度、风扇动平衡进行调整'
            },
            {
              title: '备注',
              type: 'list',
              content: [
                '预防措施',
                '1）1000小时对风扇轴承、叶片的紧固进行检查调整、加固；',
                '2）1000小时保养对风机震动开关检查、测试、调整；',
                '3）加强备件储备；',
                '4）强化轴承的维护保养及更换。 '
              ]
            },
            {
              title: '相关附件信息',
              type: 'list',
              download: true,
              content: [
                '123.word',
                '111.jpg'
              ]
            },
          ]
        }
      },
      detailDialog:{
        default: {}
      }
    },
    // props: ['detailDialog','detailsData'],
    components: {ImgDialog},
    data () {
      return {
        imgDialog: {
          visible: false,
          imgName: ''
        },
        activeNames: [],
        details: [
          {
            title: '故障描述',
            type: 'content',
            content: '2017年1月14日，甲方人员巡检时发现7#天然气压缩机组面板报警停机，面板显示2#空冷器震动大停机，随后对空冷器进行详细检查工作。'
          },
          {
            title: '故障原因',
            type: 'list',
            content: [
              '1）风扇扇叶固定支架受冷热交替影响，长时间运行造成疲劳断裂；',
              '2）风扇扇叶固定支架断裂后，扇叶与外圈间隙较小发生碰撞后导致风扇叶片折损；',
              '3）风机震动开关不能有效工作，造成扇叶二次伤害。'
            ]
          },
          {
            title: '处理结果',
            type: 'content',
            content: '检查扇叶固定支架，更换扇叶，对扇叶角度、风扇动平衡进行调整'
          },
          {
            title: '备注',
            type: 'list',
            content: [
              '预防措施',
              '1）1000小时对风扇轴承、叶片的紧固进行检查调整、加固；',
              '2）1000小时保养对风机震动开关检查、测试、调整；',
              '3）加强备件储备；',
              '4）强化轴承的维护保养及更换。 '
            ]
          },
          {
            title: '相关附件信息',
            type: 'list',
            download: true,
            content: [
              '123.word',
              '111.jpg'
            ]
          },
        ]
      }
    },
    computed: {
      
    },
    mounted() {
      this.activeNames.push(this.details[0].title);
      
    },
    methods: {
       handleChange(val) {
      },
      viewImg(imgName) {
        this.imgDialog.imgName = imgName
        this.imgDialog.visible = true
      }
    }
  }
</script>
