<template>
  <div id="App">
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="isRouterAlive" />
    </transition>
  </div>
</template>
<script>
// https://www.cnblogs.com/mica/p/10642194.html
export default {
  name: "App",
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    return {
      reload() {
        this.isRouterAlive = false;
        console.log("kkkk");
        this.$nextTick(function () {
          this.isRouterAlive = true;
        });
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: #77777751;
  border-radius: 4px;
} */
</style>
