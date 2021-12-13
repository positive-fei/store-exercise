<template>
  <div id="home-recommend">
   <div class="home-recommend-item" v-for="item in homeRecommends" :key="item.recommendId">
      <a :href="item.recommendLinkUrl">
        <img :src="item.recommendImageUrl" alt="" />
        <div>{{item.recommendName}}</div>
      </a>
   </div>
  </div>
</template>

<script>

export default {
  name: "HomeRecommend",
  props: {
     homeRecommends:{
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
  #home-recommend {
    display:flex;
    width: 100%;
    text-align: center;
    font-size:14px;
    padding: 20px 0 15px;
    border-bottom: 13px solid #eee;
    background-color: rgb(56, 199, 204);
  }
  .home-recommend-item{
    flex: 1;
  }
  .home-recommend-item img{
    width: 84px;
    height: 70px;
    margin-bottom: 7px;
  }

</style>