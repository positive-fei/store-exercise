<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center">宠物街</div>
      <div slot="right"></div>
    </nav-bar>
    <home-swiper :homeBanners="homeBanners"></home-swiper>
    <home-recommend :homeRecommends="homeRecommends"></home-recommend>
    <home-feature :homeFeatures="homeFeatures"></home-feature>
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <goods-image class="goods-image" :goodsList = "goodsList" :title="title"></goods-image>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsImage from 'components/content/goods/goodsImage.vue';

import HomeSwiper from './childComponents/HomeSwiper.vue';
import HomeRecommend from './childComponents/HomeRecommend.vue';
import HomeFeature from './childComponents/HomeFeature.vue';

import { getHomeBanner } from "network/home.js";



export default {
  name: "Home",
  components: {
    NavBar,HomeSwiper,HomeRecommend,HomeFeature,TabControl,GoodsImage
  },
   data() {
    return {
      homeBanners: [],
      homeRecommends: [],
      homeFeatures:[],
      titles: ['标题一','标题二','标题三'],
      goodsList: [],
      title: ''
    };
  },
  created() {
    // 发送请求拿到banner图数据
    getHomeBanner()
      .then((res) => {
        console.log(res);
        this.homeBanners = res.resultData.bannerList;
        this.homeRecommends = res.resultData.recommendList;
        this.homeFeatures = res.resultData.featureList;
        this.goodsList = res.resultData.goodsList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
}
</script>

<style>
.home{
  padding-top: 44px;
}

.home-nav {
  background-color: rgb(20, 180, 167);
  color: rgb(0, 4, 7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position: sticky;
  top: 44px;
}

</style>