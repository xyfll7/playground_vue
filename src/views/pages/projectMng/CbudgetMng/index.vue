<template>
  <div>
    预算管理
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "CbudgetMng",
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter-3");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate-3");
    next();
  },
  created() {
    console.log("created-3");
  },
  updated() {
    console.log("updated-3");
  },
};
</script>