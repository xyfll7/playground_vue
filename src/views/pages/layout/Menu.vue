<template>
  <el-menu
    :default-active="
      $route.matched[2] ? $route.matched[2].path : $route.matched[1].path
    "
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    router
  >
    <el-menu-item index="/pages/materialMng">
      <span slot="title">材料管理</span>
    </el-menu-item>
    <el-menu-item index="/pages/manualMng">
      <span slot="title">人工管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>

export default {
  created() {
  },

  methods: {

    handleOpen() {},
    handleClose() {},
    handleSelect() {
     
    },

  },
};
</script>
<style scoped>
.el-menu {
  height: calc(100vh - 76px);
}
</style>
