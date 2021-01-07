<template>
  <div>
    项目管理
      {{$route.query}}>>>{{$route.fullPath}}>>>{{$route.path}}
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheViews">
        <!-- <router-view :key="$route.query.type  ? $route.name +'/'+ Date.now(): $route.name"/> -->
        <!-- <router-view :key="$route.fullPath"/> -->
        <router-view :key="$route.path"/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // cacheViews: ['AcontractMng', 'BmaterialSelectionMng','CbudgetMng','DprojectScheduling','EprojectImplement','FchangeMng','GexaminationMng'],
      cacheViews: ['AcontractMng', '','CbudgetMng','DprojectScheduling','EprojectImplement','FchangeMng','GexaminationMng'],
    }
  },
  updated(){
    // console.log("ssss",this.$route)
    // console.log("ssss",Date.now())
  }
}
</script>
