<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./layout/Menu";
import Header from "./layout/Header";
export default {
  name: "App",
  inject: ["reload"],
  components: { Header, Menu },
};
</script>
<style>
body {
  background: #f1f1f1;
}
.header {
  margin-bottom: 10px;
  background: #fff;
  padding: 20px;
}
.content {
  /* padding: 20px; */
  border-radius: 3px;
  background: #fff;
}
.dsbty {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dscx {
  display: flex;
  justify-content: center;
}
.dscxy {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-type .el-input {
  max-width: 12vw;
  margin-right: 10px;
}
.input-type .el-select {
  max-width: 12vw;
  margin-right: 10px;
}

.el-table th,
th.is-leaf {
  background: #fbfbfb;
  color: #333;
  padding: 9px 0;
}
.el-table td {
  padding: 6px 0;
}
.el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  font-size: 12px;
}
.el-dialog__header{
  border-bottom:1px solid #ccc;
}
.el-dialog{
  font-weight: bold;
}
</style>
