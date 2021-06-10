/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-10 18:00:22
 * @modify date 2021-06-10 20:12:30
 * @desc 通用格式函数
 */

/**
 * @desc URL请求参数转为JSON格式
 * @param url
 * @returns {{}|any}
 */
export function paramJson(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  );
}

/**
 * @desc 父子关系数组转换成树形结构数据
 * @param data
 * @returns {*}
 */
export function translateDataToTree(data) {
  const parent = data.filter((value) => value.parentId === 'undefined' || value.parentId == null);
  const children = data.filter((value) => value.parentId !== 'undefined' && value.parentId != null);
  const translator = (parent, children) => {
    parent.forEach((parent) => {
      children.forEach((current, index) => {
        if (current.parentId === parent.id) {
          const temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          translator([current], temp);
          typeof parent.children !== 'undefined' ? parent.children.push(current) : (parent.children = [current]);
        }
      });
    });
  };
  translator(parent, children);
  return parent;
}

/**
 * @desc 树形结构数据转换成父子关系数组
 * @param data
 * @returns {[]}
 */
export function translateTreeToData(data) {
  const result = [];
  data.forEach((item) => {
    const loop = (data) => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId
      });
      const child = data.children;
      if (child) {
        for (let index = 0; index < child.length; index++) {
          loop(child[index]);
        }
      }
    };
    loop(item);
  });
  return result;
}

/**
 * @desc 10位时间戳转换
 * @param time
 * @returns {string}
 */
export function tenBitTimestamp(time) {
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? '' + month : month;
  let day = date.getDate();
  day = day < 10 ? '' + day : day;
  let hour = date.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second; //组合
}

/**
 * @desc 13位时间戳转换
 * @param time
 * @returns {string}
 */
export function thirteenBitTimestamp(time) {
  const date = new Date(time / 1);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? '' + month : month;
  let day = date.getDate();
  day = day < 10 ? '' + day : day;
  let hour = date.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second; //组合
}

/**
 * @desc 获取UUID
 * @param length
 * @returns {string}
 */
export function uuid(length = 32) {
  const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let text = '';
  for (let index = 0; index < length; index++) {
    text += num.charAt(Math.floor(Math.random() * num.length));
  }
  return text;
}

/**
 * @desc m到n的随机数
 * @param min
 * @param max
 * @returns {number}
 */
export function random(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

/**
 * @desc addEventListener
 * @type {function(...[*]=)}
 */
export const on = (function() {
  return function(element, event, handler, useCapture = false) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
})();

/**
 * @desc removeEventListener
 * @type {function(...[*]=)}
 */
export const off = (function() {
  return function(element, event, handler, useCapture = false) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
})();
