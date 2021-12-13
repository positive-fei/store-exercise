<template>
 <div id="app">
    <tab-bar-init></tab-bar-init>
    <router-view/>
  </div>
</template>

<script>
import TabBarInit from "components/content/TabBarInit";

export default {
  name: 'App',
  components: {
    TabBarInit
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
