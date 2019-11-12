import Vue from 'vue';
import VueRouter from 'vue-router'

import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('~/views/Login'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/',
    component: () => import('~/components/Home'),
    children: [
      {
        path: '',
        component: () => import('~/views/OverView'),
        redirect: '/survey/organization/1'
        //  监测分析  这里应该是一个树
      },
      {
        // 监测分析-设备接入情况统计
        path: 'survey/organization/:id/device-access',
        component: () => import('~/components/survey/DeviceAccess'),
      },
      {
        // 监测分析-设备开停机情况
        path: 'survey/organization/:id/device-on-off',
        component: () => import('~/components/survey/DeviceOffOn'),
      },
      {
        // 监测分析-设备利用率情况
        path: 'survey/organization/:id/device-availability',
        component: () => import('~/components/survey/DeviceAvailability'),
      }, //
      {
        // 监测分析-设备完好率情况
        path: 'survey/organization/:id/device-intact',
        component: () => import('~/components/survey/DeviceIntact'),
      }, //
      {
        // 监测分析-设备报警详情
        path: 'survey/organization/:id/alarm-detail',
        component: () => import('~/components/survey/AlarmDetail'),
      },
      // 故障统计分析
      {
        path: 'survey/organization/:id/fault-record-analysis/:tab',
        component: () => import('~/new_views/fault-record-analysis'),
      },
      // 告警统计分析
      {
        path: 'survey/organization/:id/alarm-record-analysis/:tab',
        component: () => import('~/new_views/alarm-record-analysis'),
      },
      {
        // 监测分析-组织机构
        path: 'survey/organization/:id',
        component: () => import('~/new_views/survey-organization'),
      },
      
      // 监测分析-设备
      {
        path: 'survey/device/:id',
        component: () => import('~/new_views/survey-device'),
        children: [{
          // 监测分析-设备-监测分析子模块
          path: 'analysis',
          component: () => import('~/new_views/survey-device-analysis-copy'),
        }, {
          // 监测分析-设备-监测分析子模块
          path: 'analysis-copy',
          component: () => import('~/new_views/survey-device-analysis-copy'),
        },
          {
            // 监测分析-设备-智能预测子模块
            path: 'prediction',
            component: () => import('~/new_views/survey-device-prediction'),
          }],
      },
      // 人工诊断
      {
        path: 'manual-diagnosis/device/:id',
        component: () => import('~/new_views/device-manual-diagnosis'),
        children: [
          {
            // 监测分析-设备-图谱分析
            path: 'analysis',
            component: () => import('~/new_views/survey-tp-device-analysis'),
          }, {
            // 监测分析-设备-静态资料
            path: 'info',
            component: () => import('~/new_views/survey-tp-device-info'),
          }, {
            // 监测分析-设备-工艺量展示
            path: 'quantity',
            component: () => import('~/new_views/survey-tp-device-quantity'),
          }, {
            // 监测分析-设备-模型辅助
            path: 'model-assistant',
            component: () => import('~/new_views/survey-tp-device-model-assistant'),
          }, { // 要新加启停机记录 保养记录  检修记录
            // 监测分析-设备-静态资料
            path: 'static-data',
            component: () => import('~/new_views/static-data'),
          },
        
        ],
      },
      {
        // 监测分析-图谱分析、工艺量展示、静态资料等详细信息
        path: 'survey/tp/device/:id',
        component: () => import('~/new_views/survey-tp'),
        children: [{
          // 监测分析-设备-图谱分析
          path: 'analysis',
          component: () => import('~/new_views/survey-tp-device-analysis'),
        }, {
          // 监测分析-设备-静态资料
          path: 'info',
          component: () => import('~/new_views/survey-tp-device-info'),
        }, {
          // 监测分析-设备-工艺量展示
          path: 'quantity',
          component: () => import('~/new_views/survey-tp-device-quantity'),
        }],
      },
      //
      {
        path: '/hitch',
        component: () => import('~/new_views/hitch'),
      },
      // equipment
      {
        path: '/equipment/:id',
        component: () => import('~/new_views/equipment'),
        
      },
      // 设备管理
      {
        path: '/template-management',
        component: () => import('~/new_views/template-management'),
      },
      //   用户管理
      {
        path: '/system-user',
        component: () => import('~/new_views/system-user'),
      },
      //   审计日志
      {
        path: '/system-log',
        component: () => import('~/new_views/system-log'),
      },
      //   消息管理
      {
        path: '/system-message',
        component: () => import('~/new_views/system-message'),
      },
      //  user-center  用户中心
      {
        path: '/user-center',
        component: () => import('~/new_views/user-center'),
      },
      {
        path: '/user-edit',
        component: () => import('~/new_views/user-edit'),
      },
      //
      {
        path: '/search/:keyword',
        component: () => import('~/new_views/system-search'),
      },
      {
        path: '/system-help',
        component: () => import('~/new_views/system-help'),
        children: [{
          // 监测分析-设备-监测分析子模块
          path: 'function',
          component: () => import('~/new_views/system-help-function'),
        },
          {
            path: 'question',
            component: () => import('~/new_views/system-help-question'),
          }],
      },
      // 故障统计分析
      {
        path: '/fault-record-analysis',
        component: () => import('~/new_views/fault-record-analysis'),
      },
      // 告警统计分析
      {
        path: '/alarm-record-analysis',
        component: () => import('~/new_views/alarm-record-analysis'),
      },
      // 离线监测
      {
        path: '/off-line',
        component: () => import('~/new_views/off-line'),
        children: [{
          // 监测分析-设备-监测分析子模块
          path: 'report-form',
          component: () => import('~/new_views/off-line-report-form'),
        },
          {
            path: 'trend-map',
            component: () => import('~/new_views/off-line-trend-map'),
          }],
      },
      // 智能应用
      {
        path: '/smart-application',
        component: () => import('~/new_views/smart-application'),
        children: [
          // 模型诊断
          {
            path: 'ai-diagnosis',
            component: () => import('~/new_views/device-ai-diagnosis'),
          },
          // 智能预测
          {
            path: 'prediction',
            component: () => import('~/new_views/survey-device-prediction'),
          },
          // 综合诊断
          {
            path: 'integrated-diagnostics',
            component: () => import('~/new_views/integrated-diagnostics'),
          },
          // 自动诊断
          {
            path: 'auto-diagnostics',
            component: () => import('~/new_views/auto-diagnostics'),
          },
        ]
      },
      
      // 报警配置
      {
        path: '/alarm-collocation',
        component: () => import('~/new_views/alarm-collocation'),
      },
      // 设备编码管理
      {
        path: '/fault-category-manage',
        component: () => import('~/new_views/fault-category-manage'),
      },
      // 诊断案例库
      {
        path: '/diagnosis-collocation',
        component: () => import('~/new_views/diagnosis-collocation'),
      },
      // 知识图谱应用
      {
        path: '/knowledge-graph',
        component: () => import('~/new_views/knowledge-graph'),
      },
      // 故障代码库
      {
        path: '/fault-code',
        component: () => import('~/new_views/fault-code'),
      },
      { // 设备知识库
        path: '/device-konwledge',
        component: () => import('~/new_views/device-konwledge'),
      }, { // 设备知识库
        path: '/alarm-collocation-route',
        component: () => import('~/new_views/alarm-collocation-route'),
      },
    ],
  },
  {
    path: '*',
    meta: {
      requiresAuth: false,
    },
    component: () => import('~/views/NotFound'),
  },

]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  const {
    requiresAuth = true,
  } = to.meta;
  next()
  if (requiresAuth) {
    if (!store.state.user.password) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
    } else {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      next()
    }
  } else {
    next()
  }
})

export default router
