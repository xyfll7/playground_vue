<template>
  <el-menu
    :default-active="
      $route.matched[2] ? $route.matched[2].path : $route.matched[1].path
    "
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="/pages/quotationMng">
      <span slot="title">报价管理</span>
    </el-menu-item>
    <el-submenu index="/pages/projectMng">
      <template slot="title"><span>项目管理</span> </template>
      <el-menu-item index="/pages/projectMng/AcontractMng/?type=1">签约管理</el-menu-item>
      <el-menu-item index="/pages/projectMng/BmaterialSelectionMng">选材管理</el-menu-item>
      <el-menu-item index="/pages/projectMng/CbudgetMng">预算管理</el-menu-item>
      <el-menu-item index="/pages/projectMng/DprojectScheduling">项目排期</el-menu-item>
      <el-menu-item index="/pages/projectMng/EprojectImplement">项目实施</el-menu-item>
      <el-menu-item index="/pages/projectMng/FchangeMng">变更管理</el-menu-item>
      <el-menu-item index="/pages/projectMng/GexaminationMng">审批管理</el-menu-item>
    </el-submenu>

    <el-menu-item index="/pages/materialMng">
      <span slot="title">材料管理</span>
    </el-menu-item>
    <el-menu-item index="/pages/manualMng">
      <span slot="title">人工管理</span>
    </el-menu-item>
    <el-submenu index="/pages/systemSetting">
      <template slot="title"><span>系统设置</span> </template>
      <el-menu-item index="/pages/systemSetting/userMng">用户管理</el-menu-item>
      <el-menu-item index="/pages/systemSetting/roleMng">角色管理</el-menu-item>
      <el-menu-item index="/pages/systemSetting/passwordMng">密码管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style scoped>
.el-menu {
  height: calc(100vh - 76px);
}
</style>
