<template>
  <el-form ref="form" :model="ruleForm" label-width="100px">
    <el-form-item label="姓名:">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="性别:">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号:">
      <el-input v-model="ruleForm.mobile"></el-input>
    </el-form-item>
    <el-form-item label="角色:">
      <el-select v-model.lazy="ruleForm.roleIds" placeholder="请选择角色">
        <el-option
          v-for="(item) in roleList"
          :key="item.roleId"
          :value="item.roleId"
          :label="item.roleName"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="用户密码:" prop="pass">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import api from "../../../../api";
export default {
  props: {
    roleList: Array,
  },
  data() {
    return {
      ruleForm: {
        username: "555",
        password: "是",
        email: "l.7@qq.com",
        mobile: "123456874111",
        roleIds: JSON.stringify([1338753860912201700]),
      },
    };
  },
  methods: {
    onSaveUser() {
      api.saveUser({ ...this.ruleForm });
    },
    onUpdate(e) {
      console.log("onUpdate", e);
    },
  },
};
</script>
