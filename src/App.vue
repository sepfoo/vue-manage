<template>
  <div id="app">
    <view-main></view-main>
  </div>
</template>

<script>

import ViewMain from '@/views/Main'
export default {
  name: "App",
  components: {
    ViewMain
  },
};
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
}
</style>
