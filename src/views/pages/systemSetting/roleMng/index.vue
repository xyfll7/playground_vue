
<template>
  <div>
    <!-- // 人工管理 -->
    <div class="dsbty header">
      <!-- 左边 -->
      <div class="dsbty input-type"></div>
      <!-- 右边 -->
      <div class="dsbty">
        <el-button type="primary" @click="dialogVisible1 = true">
          添加角色
        </el-button>
      </div>
      <!-- 对话框一 -->
      <el-dialog title="添加角色" :visible.sync="dialogVisible1" width="40%">
        <DialogContent1 />
        <span slot="footer">
          <el-button @click="dialogVisible1 = false"> 取 消 </el-button>
          <el-button type="primary" @click="dialogVisible1 = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </div>
    <Table @edit="onEdit" />
  </div>
</template>

<script>
import DialogContent1 from "./DialogContent1";
import Table from "./Table";
export default {
  components: { DialogContent1, Table },
  data() {
    return {
      value: "",
      input3: "",
      dialogVisible1: true,
    };
  },
  methods: {
    onEdit(e) {
      this.dialogVisible1 = true;
      console.log("ssss", e);
    },
  },
};
</script>
