/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-10 18:03:55
 * @modify date 2021-06-10 18:13:12
 * @desc 通用解码函数
 */

/**
 * @desc 简单加密
 * @param sourceText
 * @returns {string}
 */
export function encrypt(sourceText) {
  let encodeText = [];
  let number = Math.trunc(Math.random() * 200);

  for (let index = 0; index < sourceText.length; index++) {
    encodeText.push(sourceText.charCodeAt(index) + number);
  }
  encodeText.push(number);
  return escape(encodeText.toString());
}

/**
 * @desc 简单加密
 * @param sourceText
 * @returns {string}
 */
export function decrypt(sourceText) {
  sourceText = unescape(sourceText);
  let stringArray = sourceText.split(',');
  let number = stringArray.pop();
  let decodeText = [];

  stringArray.forEach(function(item) {
    let temp = String.fromCharCode(item - number);
    decodeText.push(temp);
  });

  return decodeText.join('');
}
