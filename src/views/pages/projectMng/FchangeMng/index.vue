<template>
  <div>
    变更管理
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "FchangeMng",
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter-5");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate-5");
    next();
  },
  created() {
    console.log("created-5");
  },
  updated() {
    console.log("updated-5");
  },
};
</script>