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

</style>
