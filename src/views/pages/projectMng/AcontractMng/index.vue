<template>
  <div>
    签约管理
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "AcontractMng",
  beforeRouteEnter(to, from, next){
      console.log("beforeRouteEnter")
      next()
  },
  beforeRouteUpdate(to, from, next){
      console.log("beforeRouteUpdate")
      next()
  },
  created() {
    console.log("created");
  },
  updated() {
      console.log("updated")
  },
};
</script>