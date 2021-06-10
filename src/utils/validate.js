/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-10 17:56:50
 * @modify date 2021-06-10 18:50:18
 * @desc 通用校验函数
 */

/**
 * @desc 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @desc 判读是否为密码
 * @param value
 * @returns {boolean}
 */
export function isPassword(value) {
  const reg = /^(\w){6,20}$/;
  return reg.test(value);
}

/**
 * @desc 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

/**
 * @desc 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export function isName(value) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  return reg.test(value);
}

/**
 * @desc 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
export function isIP(ip) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(ip);
}

/**
 * @desc 判断是否是网站
 * @param url
 * @returns {boolean}
 */
export function isUrl(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * @desc 判断是否小写
 * @param value
 * @returns {boolean}
 */
export function isLowerCase(value) {
  const reg = /^[a-z]+$/;
  return reg.test(value);
}

/**
 * @desc 判断是否大写
 * @param value
 * @returns {boolean}
 */
export function isUpperCase(value) {
  const reg = /^[A-Z]+$/;
  return reg.test(value);
}

/**
 * @desc 判断是否大写开头
 * @param value
 * @returns {boolean}
 */
export function isAlphabets(value) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(value);
}

/**
 * @desc 判断是否字符
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * @desc 判断是否数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * @desc 判断是否端口
 * @param value
 * @returns {boolean}
 */
export function isPort(value) {
  const reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
  return reg.test(value);
}

/**
 * @desc 判断是否二代身份证号
 * @param value
 * @returns {boolean}
 */
export function isIdCard(value) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
}

/**
 * @desc 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
export function isEmail(value) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(value);
}

/**
 * @desc 判断是否中文
 * @param value
 * @returns {boolean}
 */
export function isChinese(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(value);
}

/**
 * @desc 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank(value) {
  return value == null || false || value === '' || value.trim() === '' || value.toLocaleLowerCase().trim() === 'null';
}

/**
 * @desc 判断是否固话
 * @param value
 * @returns {boolean}
 */
export function isFixedPhone(value) {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/;
  const regMobile = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(value) || regMobile.test(value);
}

/**
 * @desc 判断是否手机
 * @param value
 * @returns {boolean}
 */
export function isMobilePhone(value) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(value);
}

/**
 * @desc 判断是否金额
 * @param value
 * @returns {boolean}
 */
export function isNum(value) {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(value);
}

/**
 * @desc 判断是否经度
 * @param value
 * @returns {boolean}
 */
export function isLongitude(value) {
  const reg = /^[-|+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/;
  return reg.test(value);
}

/**
 * @desc 判断是否纬度
 * @param value
 * @returns {boolean}
 */
export function isLatitude(value) {
  const reg = /^[-|+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/;
  return reg.test(value);
}

/**
 * @desc 判断是否为JSON
 * @param value
 * @returns {boolean}
 */
export function isJSON(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}
