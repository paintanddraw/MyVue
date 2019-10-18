/**
 * 新建了一个api文件夹，里面有一个index.js和一个base.js，以及多个根据模块划分的接口js文件。
 * index.js是一个api的出口，base.js管理接口域名，其他js则用来管理各个模块的接口。
 * api接口的统一出口
 */
// 文章模块接口
import article from './article';
// 用户模块接口
import user from './user';
// 其他模块的接口……

// 导出接口
export default {
    article,
    user
    // ……
}