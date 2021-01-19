<template>
  <div class="container">
    <div class="title">积木家门店管理系统</div>
    <router-link to="/pages/projectMng">Home</router-link>
    <div class="user-info">
      <el-avatar
        size="large"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="user-name">Admin</div>
      <el-button size="mini" round icon="iconfont icon-tuichu">
        <div class="user-button" @click="logout">退出登陆</div>
      </el-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
 
  methods: {
    ...mapActions(['resetToken']),
    logout() {
      if(this['resetToken']()) { this.$router.replace({ path: '/' })}
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background-color: aqua; */
  border-bottom: solid 1px #e6e6e6;
  z-index: 5000;
}
.title {
  font-size: 1.5rem;
  font-weight: 600;
}
.user-info {
  height: 100%;
  display: flex;
  align-items: center;
}
.user-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 10px;
}
.el-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-button {
  margin-left: 7px;
}
.el-button >>> .icon-tuichu {
  font-size: 0.8rem;
  margin-left: -3px;
}
</style>
