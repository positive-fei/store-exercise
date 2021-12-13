<template>
<div>
  <div id="home-feature-title">今日推荐</div>
  <div id="home-feature">
    <div class="home-feature-item" v-for="item in homeFeatures" :key="item.featureId">
        <a :href="item.featureLinkUrl">
          <img :src="item.featureImageUrl" alt="" />
          <div>{{item.featureName}}</div>
        </a>
    </div>
  </div>
</div>
  
</template>

<script>

export default {
  name: "HomeFeature",
  props: {
     homeFeatures:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
   
  }
 
};
</script>

<style>
  #home-feature {
    display:flex;
    width: 100%;
    height: 320px;
    text-align: center;
    font-size:14px;
    padding: 30px 0 20px;
    border-bottom: 13px solid #eee;
    background-color: rgb(56, 199, 204);
     flex-wrap:wrap;
  }
  .home-feature-item{
    flex: 1;
  }
  .home-feature-item img{
    width: 100px;
    height: 80px;
    margin-bottom: 7px;
  }
  #home-feature-title{
    padding: 10px 0 15px;
    text-align: center;
    font-size:20px;
     background-color: rgb(224, 166, 40);
  }

</style>