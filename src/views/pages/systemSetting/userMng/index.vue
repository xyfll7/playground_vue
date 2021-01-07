
<template>
  <div>
    <!-- // 用户管理 -->
    <div class="dsbty header">
      <!-- 左边 -->
      <div class="dsbty input-type"></div>
      <!-- 右边 -->
      <div class="dsbty">
        <el-button type="primary" @click="dialogVisible1 = true">
          添加用户
        </el-button>
      </div>
      <!-- 对话框一 -->
      <el-dialog title="添加用户" :visible.sync="dialogVisible1" width="40%">
        <DialogContent1 ref="DialogContent1" :roleList="roleList"/>
        <span slot="footer">
          <el-button @click="dialogVisible1 = false"> 取 消 </el-button>
          <el-button type="primary" @click="onSaveUser"> 确 定 </el-button>
        </span>
      </el-dialog>
    </div>
    <Table @edit="onEdit" :tableData="tableData"/>
  </div>
</template>

<script>
import DialogContent1 from "./DialogContent1";
import Table from "./Table";
import api from "../../../../api";
export default {
  components: { DialogContent1, Table },
  data() {
    return {
      value: "",
      input3: "",
      dialogVisible1: true,
      tableData:[],// 用户列表
      roleList:[],// 角色列表
    };
  },
  async created() {
    this.tableData = (await api.getUserList()).page.list;
    this.roleList = (await api.getRoleList()).page.list;
    console.log(this.roleList)
  },
  methods: {
    onSaveUser() {
      this.$refs.DialogContent1.onSaveUser();
    },
    onEdit(e) {
      this.dialogVisible1 = true;
      this.$refs.DialogContent1.onUpdate(e);
    },
  },
};
</script>
