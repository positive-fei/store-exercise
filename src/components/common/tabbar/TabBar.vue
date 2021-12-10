<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  .tab-bar {
    display: flex;
    background-color: #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -5px 1px rgba(100,100,100,0.1);
  }

</style>