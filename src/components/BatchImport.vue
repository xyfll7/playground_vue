<template>
  <el-form ref="form" :model="ruleForm" label-width="100px">
    <el-form-item label="下载模板:" class="click-to-download">
      <a
        href="https://7879-xyf-5g046an637f3d27a-1304344970.tcb.qcloud.la/excel.xlsx?sign=66245596a67e3c9ad482ae17c794cc4e&t=1607934577"
        target="_blank"
      >
        点击下载</a
      >
    </el-form-item>
    <el-form-item label="上传文件:">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <div class="dsbty">
          <el-input
            v-model="ruleForm.name"
            placeholder="请选择文件，仅支持excel文件"
          ></el-input>
          <!-- <el-button size="small" type="primary">点击上传</el-button> -->
          <el-button type="primary" @click="dialogVisible1 = true">
            浏览
          </el-button>
        </div>
      </el-upload>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      radio: "nihao",
      ruleForm: {
        name: "",
        isSignUp: "是",
        dialogVisible1: false,
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`, fileList);
    },
  },
};
</script>
<style scoped>
.el-button {
  margin-left: 10px;
}
.click-to-download {
  color: #409eff;
}
</style>
