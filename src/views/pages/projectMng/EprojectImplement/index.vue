<template>
  <div>
    项目实施
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "EprojectImplement",
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter-4");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate-4");
    next();
  },
  created() {
    console.log("created-4");
  },
  updated() {
    console.log("updated-4");
  },
};
</script>