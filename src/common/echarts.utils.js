import moment from 'moment';

/**
 * @param {Number} len
 * @param {Number*} max
 * @description 模拟len个介于0 ~ max 之间的随机数
 */

let randomData = (len, max) => {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push((max / 2 + Math.random() * max / 2).toFixed(2));
  }
  return result;
};
let initArea = (len, num) => {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(num);
  }
  return result;
};
/**
 * chart图重绘
 * @param   chart
 * @return
 * */
let chartResResize = (chart) => {
  let resizeHanlder = debounce(() => {
    chart.resize();
  }, 10);
  window.addEventListener('resize', resizeHanlder);
};
/**
 * 函数防抖
 * @param   fn,delay
 * @return  fn
 * */
let debounce = (fn, delay) => {
  var ctx, args;
  var timer = null;
  var later = function() {
    fn.apply(ctx, args);
    // 当事件真正执行后，清空定时器
    timer = null;
  };
  return function() {
    ctx = this;
    args = arguments;
    // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 重新设置事件触发的定时器
    timer = setTimeout(later, delay);
  };
};
/**
 * @param {String | Number} id
 * @param {Array*} treeData
 * @return {String}
 * @description 在树结构中查找指定id对应的text
 */
let getTreeTextById = (id, treeData, pro) => {
  if (Array.isArray(treeData) && treeData.length > 0) {
    let bool = false;
    let result = '';
    let len = treeData.length;
    for (let i = 0; i < len; i++) {
      let item = treeData[i];
      if (item.id.toString() === id.toString()) {
        result = item[pro];
        bool = true;
      }
    }
    if (!bool) {
      let len = treeData.length;
      for (let i = 0; i < len; i++) {
        let item = treeData[i];
        if (item.children) {
          let childResult = getTreeTextById(id, item.children, pro);
          if (childResult) {
            return childResult;
          }
        }
      }
    } else {
      return result;
    }
  }
};

/**
 * @param  type:number || String 阿拉伯数字
 * @return  type:String 罗马数字
 * */

let Arabit2Roman = (num) => {
  if (isNaN(num)) {
    return false;
  }
  var ans = '';
  var k = Math.floor(num / 1000);
  var h = Math.floor((num % 1000) / 100);
  var t = Math.floor((num % 100) / 10);
  var o = num % 10;
  var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousand = 'M';
  for (let i = 0; i < k; i++) {
    ans += thousand;
  }
  if (h) {
    ans += hundred[h - 1];
  }
  if (t) {
    ans += ten[t - 1];
  }
  if (o) {
    ans += one[o - 1];
  }
  return ans;
};
/**
 *
 * @param {*} columns
 * @param {*} rows
 * @description 把接口返回的数据转换成line 图表需要的格式
 */
let splitAndCmbination = (columns, rows) => {
  let data = [];
  columns.forEach((col) => {
    data.push([]);
  });
  rows.forEach((row) => {
    if (row && row.length === columns.length) {
      row.forEach((item, index) => {
        if (isNaN(Number(item))) {
          data[index].push(item);
        } else {
          data[index].push(Number(Number(item).toFixed(2)));
        }
      });
    }
  });
  let result = [];
  columns.forEach((col, index) => {
    result.push({
      name: col,
      data: data[index]
    });
  });
  return result;
};
/**
 * @param {Object} params
 * @description 图表tooltip的样式
 */
let lineTooltipFomatter = (params) => {
  let axisValue = params[0]['axisValue'];
  let style = 'color: #696969;font-weight:bold;text-align: left;';
  let extraStyle = style + 'float: right;padding-right: 5px;padding-left: 8px;width: 40px;';
  let resultStr = '<p style="' + style + '">' + axisValue + '</p>';
  params.forEach((item) => {
    let value = item['value'];
    if (value) {
      let seriesName = item['seriesName'];
      let color = item['color'];
      let dot = '<span style="margin-right: 5px; display:inline-block; width: 0; height: 0;border: solid 4px;border-radius: 4px;border-color:' + color + ';"></span>';
      resultStr += '<p>' + dot + seriesName + '<span style="' + style + extraStyle + '">' + value + '</span></p>';
    }
  });
  return resultStr;
};
/**
 * @param
 * @description 格式化line、area、bar类型图表的tooltip样式
 */
let lineTooltip = {
  trigger: 'axis',
  formatter: (params) => {
    return lineTooltipFomatter(params);
  },
  backgroundColor: '#fff',
  borderColor: '#eee',
  borderWidth: 1,
  textStyle: {
    color: '#989898',
    fontSize: 12,
    textAlign: 'left'
  }
};
/**
 * @param  时间戳
 * @return  2018-01-01 00:00:00
 * */
let formatDateTime = (inputTime) => {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};
/**
 * 只能拷贝属性，不能拷贝方法（function类型的不行）
 * @param {Object} param
 * @return {Object}
 * @description 深拷贝Object对象
 */
let copyDeep = (param) => {
  return JSON.parse(JSON.stringify(param));
};
/**
 * 从现在前推一段时间取固定间隔的散列时间序列
 * @param {Number} length 从现在往前推长度
 * @param {String} uint length的单位，moment.js常量days、hours等
 * @param {Number} interval 每隔多少取一个时间点，单位
 * @param {String} formatStr 格式化的字符串
 */
let getIntervalSequence = (length, uint, interval, formatStr) => {
  let now = moment().startOf('minute');
  let minute = now.minute();
  now.minute(interval * Math.floor(minute / interval));
  let temp = moment(now);
  let start = temp.subtract(length, uint);
  let result = [];
  result.push(start.format(formatStr));
  while (start.format(formatStr) !== now.format(formatStr)) {
    start = start.add(interval, 'minute');
    result.push(start.format(formatStr));
  }
  return result;
};
/**
 * 生成从开始时间到结束时间，每隔一定时间间隔的时间点序列
 * getPeriodSequence('2018-03-15 00:00', '2018-03-19 00:00', 1, 'hours', 'YYYY-MM-DD HH:mm')
 * util.getPeriodSequence('2018-03-15', '2018-03-19', 1, 'days', 'YYYY-MM-DD')
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 * @param {Number} interval 时间序列的间隔
 * @param {String} intervalUint 时间序列间隔的单位，moment。js的'days','minutes'等
 * @param {String} formatStr 时间格式化的字符串
 */
let getPeriodSequence = (start, end, interval, intervalUint, formatStr) => {
  moment(start).format(formatStr);
  let result = [];
  result.push(moment(start).format(formatStr));
  while (moment(start).format(formatStr) !== moment(end).format(formatStr)) {
    start = moment(start).add(interval, intervalUint);
    result.push(moment(start).format(formatStr));
  }
  return result;
};
/**
 *
 * @param {*} columns
 * @param {*} rows
 * @description 把接口返回的数据转换成对象
 */
let transform2obj = (columns, rows) => {
  let result = {};
  let arr = [];
  columns.forEach((col, index) => {
    rows.forEach((row) => {
      arr.push(row[index]);
      result[col] = arr;
    });
    arr = [];
  });
  return result;
};
/**
 *
 * @param tableData type Array
 * @param Dic type Array
 */

let changeTableDic = (tableData, Dic) => {
  
  for (let i = 0; i < tableData.length; i++) {
    
    for (let i = 0; i < tableData.length; i++) {
      for (let j = 0; j < Dic.device_alarm_level.length; j++) {
        // 实时状态评估
        if (tableData[i].alarmLevel === Dic.device_alarm_level[j].dicKey) {
          tableData[i].alarmLevel = Dic.device_alarm_level[j].dicValue;
        }
      }
      for (let l = 0; l < Dic.device_fault_type_pump.length; l++) {
        // 这个是获取所有的故障类型
        if (tableData[i].faultType == Dic.device_fault_type_pump[l].dicKey) {
          tableData[i].faultType = Dic.device_fault_type_pump[l].dicValue;
        }
      }
      
      for (let n = 0; n < Dic.work_order_status_type.length; n++) {
        // 报告状态
        if (tableData[i].status === Dic.work_order_status_type[n].dicKey) {
          tableData[i].status = Dic.work_order_status_type[n].dicValue;
        }
      }
      for (let n = 0; n < Dic.work_order_repair_type.length; n++) {
        // 工作类型
        if (tableData[i].repairType === Dic.work_order_repair_type[n].dicKey) {
          tableData[i].repairType = Dic.work_order_repair_type[n].dicValue;
        }
      }
      for (let n = 0; n < Dic.work_order_repair_specialty.length; n++) {
        // 维修专业
        if (tableData[i].repairSpecialty === Dic.work_order_repair_specialty[n].dicKey) {
          tableData[i].repairSpecialty = Dic.work_order_repair_specialty[n].dicValue;
        }
      }
      //report_bdanalysis_status
      // for (let n = 0; n < Dic.report_bdanalysis_status.length; n++) {
      //     // 维修专业
      //     if (tableData[i].status === Dic.report_bdanalysis_status[n].dicKey) {
      //         tableData[i].status = Dic.report_bdanalysis_status[n].dicValue;
      //     }
      // }
    }
  }
  return tableData;
};
/**
 *
 * @param tableData
 * @param Dic
 * @param status 代表的  是否是大数据报告
 * @returns {*}
 */
let changeTableBigDataDic = (tableData, Dic, status) => {
  
  for (let i = 0; i < tableData.length; i++) {
    
    for (let i = 0; i < tableData.length; i++) {
      for (let j = 0; j < Dic.device_alarm_level.length; j++) {
        // 实时状态评估
        if (tableData[i].alarmLevel === Dic.device_alarm_level[j].dicKey) {
          tableData[i].alarmLevel = Dic.device_alarm_level[j].dicValue;
        }
      }
      for (let l = 0; l < Dic.device_fault_type_pump.length; l++) {
        // 这个是获取所有的故障类型
        if (tableData[i].faultType == Dic.device_fault_type_pump[l].dicKey) {
          tableData[i].faultType = Dic.device_fault_type_pump[l].dicValue;
        }
      }
      
      for (let n = 0; n < Dic.work_order_repair_type.length; n++) {
        // 工作类型
        if (tableData[i].repairSpecialty === Dic.work_order_repair_type[n].dicKey) {
          tableData[i].repairSpecialty = Dic.work_order_repair_type[n].dicValue;
        }
      }
      for (let n = 0; n < Dic.work_order_repair_specialty.length; n++) {
        // 维修专业
        if (tableData[i].repairType === Dic.work_order_repair_specialty[n].dicKey) {
          tableData[i].repairType = Dic.work_order_repair_specialty[n].dicValue;
        }
      }
      if (status) {
        for (let n = 0; n < Dic.report_bdanalysis_status.length; n++) {
          // 维修专业
          if (tableData[i].status === Dic.report_bdanalysis_status[n].dicKey) {
            tableData[i].status = Dic.report_bdanalysis_status[n].dicValue;
          }
        }
      } else {
        for (let n = 0; n < Dic.report_analysis_status.length; n++) {
          // 报告状态
          if (tableData[i].status === Dic.report_analysis_status[n].dicKey) {
            tableData[i].status = Dic.report_analysis_status[n].dicValue;
          }
        }
      }
      //report_bdanalysis_status
      
    }
  }
  return tableData;
};
export default {
  randomData,
  initArea,
  chartResResize,
  debounce,
  Arabit2Roman,
  splitAndCmbination,
  getTreeTextById,
  lineTooltipFomatter,
  lineTooltip,
  formatDateTime,
  copyDeep,
  getIntervalSequence,
  getPeriodSequence,
  transform2obj,
  changeTableDic,
  changeTableBigDataDic  // 大数据专属的状态改变方法
};
