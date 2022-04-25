<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" @click="hanldMenu"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabsList" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "ComHeader",
  data() {
    return {
      //   isCollapse:this.$store.state.isCollapse,

      userImg: require("@/assets/images/user.png"),
    };
  },
  methods: {
    hanldMenu() {
      //   console.log(this.$store)
      this.$store.commit("collapseMenu");
    },
  },
  computed:{
    ...mapState([
     'tabsList']
    )
  },
  mounted(){
    console.log(this.tabsList)
  }
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>