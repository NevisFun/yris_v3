/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 22:08:01
 * @modify date 2021-06-10 22:30:25
 * @desc 导出默认网路配置
 */

const network = {
  //后端服务地址
  serverUrl: 'localhost:8080',
  //后端接收方式
  contentType: 'application/json;charset=UTF-8',
  //最长请求时间
  requestTimeout: 10000,
  //操作正常代码
  successCode: '200'
};
export default network;
