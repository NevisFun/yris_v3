/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 21:52:55
 * @modify date 2021-06-08 15:36:59
 * @desc 设置全局配置：通用配置|主题配置|网络配置
 */

//默认配置
import setting from './setting.js';
import network from './network.js';
import theme from './theme.js';

export default { ...setting, ...theme, ...network };
