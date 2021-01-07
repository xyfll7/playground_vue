<template>
  <div>
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/quotationMng' }"
        >报价管理</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ $route.matched[2].name }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style scoped>
.el-breadcrumb {
    padding: 15px 10px 0px 10px;
    background: white;
}
</style>
