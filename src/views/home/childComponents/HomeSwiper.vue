<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="item in homeBanners" :key="item.bannerId">
        <a :href="item.bannerLinkUrl">
          <img :src="item.bannerImageUrl" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  props: {
    homeBanners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
 
};
</script>

<style>
</style>