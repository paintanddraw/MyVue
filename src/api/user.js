/**
 * 用户模块
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块，对post提交的数据进行序列化

const user = {
    listUsers(){
        return axios.get(`${base.test}/users`);
    }
}

export default  user;