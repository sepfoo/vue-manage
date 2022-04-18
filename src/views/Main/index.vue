<template>
  <el-container>
    <el-aside width="auto">
      <com-aside></com-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComAside from "@/components/ComAside";
export default {
  name: "ViewMain",
  components: {
    ComAside,
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: red;
}
.el-main {
  padding-top: 0;
}
</style>