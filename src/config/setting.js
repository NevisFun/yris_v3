/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 22:15:58
 * @modify date 2021-06-12 21:58:05
 * @desc 导出默认通用配置
 */

const setting = {
  //软件信息设定
  title: 'Yongze Business Information System',
  abbreviation: 'YRIS',
  version: '0.3.0',
  copyright: 'Copyright ©' + new Date().getFullYear() + ' Yongze Inc.',

  // 保存用户名称
  saveUser: false,
  // 保存用户密码
  saveCode: false,

  //缓存最大数量
  keepAliveMaxNum: 99,
  //路由安全名单
  routesWhiteList: ['/login', '/404', '/403', '/:pathMatch(.*)'],
  //角色权限控制
  rolesControl: true,

  //用户标记名称
  tokenName: 'wi2fd2$sf',
  //开启登录加密
  loginRSA: false,
  //标记存储位置
  storage: 'sessionStorage',

  //加载显示文字
  loadingText: 'YRIS正在加载中...',
  //防止重复提交
  debounce: ['doEdit']
};
export default setting;
