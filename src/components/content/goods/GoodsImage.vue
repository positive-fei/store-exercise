<template>
  <div id="goods-image">
    <div class="image"  v-for="goods in goodsList" :key="goods.id">
      <a href="goods.linkUrl">
        <img src="goods.imageUrl">
      </a>
      <span>{{goods.name}}</span>
    </div>
  </div>

</template>


<script>

export default {
  components:{
  
  },
  props: {
    goodsList: Array,
    title: String
  }
}
</script>


<style>

</style>