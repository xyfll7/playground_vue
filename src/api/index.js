import service from './service'


export default {
    // 用户登陆
    login: data => service({ url: 'sys/login', method: 'POST', data }),

    // 用户管理
    getUserList: data => service({ url: '/sys/user/list', method: 'GET', data }), // 获取用户列表
    saveUser: data => service({ url: '/sys/user/save', method: 'POST', data }),  // 添加用户
    getRoleList: data => service({ url: '/sys/role/list', method: 'GET', data }),  // 获取角色列表
}
