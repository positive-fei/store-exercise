<template>
  <div id="tab-control">
    <div class = "tab-control-item" :class="{active: index === currentIndex}"
     v-for="(title,index) in titles" :key="index" @click="isActive(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    titles: {
      type:Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0
    }

  },
  computed: {
  
  },
  methods: {
    isActive(index){
      this.currentIndex = index;
    }
  },
  components: {},
};
</script>


<style>
  #tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    padding: 10px 10px;
    background-color: rgb(70, 214, 224);
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
    font-size: 20px;
  }

  .active {
    color: rgb(216, 98, 19);
  }

  .active span{
    border-bottom: 3px solid rgb(209, 104, 18);
  }

</style>