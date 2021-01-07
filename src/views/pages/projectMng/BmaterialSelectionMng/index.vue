<template>
  <div>
    选材管理\
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "BmaterialSelectionMng",
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter-2");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate-2");
    next();
  },
  created() {
    console.log("created-2");
  },
  updated() {
    console.log("updated-2");
  },
};
</script>