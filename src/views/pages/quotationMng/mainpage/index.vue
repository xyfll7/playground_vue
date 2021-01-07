<template>
  <div>
    <div class="dsbty header">
      <!-- 左边 -->
      <div class="dsbty input-type">
        <el-input
          placeholder="输入小区名称搜索"
          suffix-icon="el-icon-search"
          v-model="input3"
        >
        </el-input>
        <el-input
          placeholder="输入客户姓名搜索"
          suffix-icon="el-icon-search"
          v-model="input3"
        >
        </el-input>
        <el-input
          placeholder="输入手机号搜索"
          suffix-icon="el-icon-search"
          v-model="input3"
        >
        </el-input>
        <el-input
          placeholder="设计师"
          suffix-icon="el-icon-search"
          v-model="input3"
        >
        </el-input>
        <el-select v-model="value" placeholder="签约状态">
          <el-option
            v-for="item in [
              { value: '已签约' },
              { value: '未签约' },
              { value: '全部' },
            ]"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 右边 -->
      <div class="dsbty">
        <el-button type="primary" @click="dialogVisible1 = true">
          新增报价
        </el-button>
        <el-button type="primary" @click="dialogVisible2 = true">
          批量导入
        </el-button>
      </div>
      <!-- 对话框一 -->
      <el-dialog title="新增报价" :visible.sync="dialogVisible1" width="60%">
        <!-- <span>这是一段信息</span> -->
        <DialogContent1 />
        <span slot="footer">
          <el-button @click="dialogVisible1 = false"> 取 消 </el-button>
          <el-button type="primary" @click="dialogVisible1 = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
      <!-- 对话框二 -->
      <el-dialog title="批量导入" :visible.sync="dialogVisible2" width="40%">
        <DialogContent2 />
        <span slot="footer">
          <el-button @click="dialogVisible2 = false"> 取 消 </el-button>
          <el-button type="primary" @click="dialogVisible2 = false">
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
import DialogContent2 from "@/components/BatchImport";
import Table from "./Table";
export default {
  components: { DialogContent1, DialogContent2, Table },
  data() {
    return {
      value: "",
      input3: "",
      dialogVisible1: false,
      dialogVisible2: false,
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
