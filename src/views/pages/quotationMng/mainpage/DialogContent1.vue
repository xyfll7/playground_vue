<template>
  <el-form ref="form" :model="ruleForm" label-width="100px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="客户姓名:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目地址:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="设计师:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="房型:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="定制合同总价:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="手机号:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="户型面积:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="硬装合同总价:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="总价:">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item label="是否签约:">
        <el-radio-group v-model="ruleForm.isSignUp">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      radio: "nihao",
      ruleForm: {
		name: "fasdf",
		isSignUp:'是',
      },
    };
  },
};
</script>
