<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
     
      // $route 和 $router的区别 $router代表整个路由   $route代表具体的某个路由
      console.log(this.$router);
      console.log(this.$route);
      console.log(this.path)
      if(this.$route.path === this.path){
        return
      }
      //this.$router.push(this.path);
      this.$router.replace(this.path)
    }
  },

}
</script>

<style>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }

  .active {
    color: red;
  }

</style>