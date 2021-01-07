<template>
  <el-container>
    <el-card>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>
<script>
import { mapActions } from "vuex";
import { validatePass, checkAccount } from "./validates";
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAccount, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions(["user/login"]),
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
         if(await this["user/login"](this.ruleForm)) {
            this.$router.replace({ path: '/pages' })
         }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.el-card {
  padding-top: 25px;
  width: 500px;
  display: flex;
  align-items: center;
}
</style>
