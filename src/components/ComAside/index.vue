<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>通用后端管理系统</h3>
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path + ''"
      :key="item.path"
      @click="clickMenuItem(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subitem, index) in item.children"
        :key="index"
      >
        <el-menu-item :index="index.toString()">{{
          subitem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style scoped>
h3 {
  text-align: center;
  padding-top: 24px;
}
.el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  name: "ComAside",
  data() {
    return {
      isCollapse: true,
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "/Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "/MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "/UserManage/UserManage",
        },
        {
          label: "其它",
          name: "other",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "/Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "/Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
  mounted(){
    console.log(this.$router.push)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenuItem(item) {
      console.log(item)
      this.$router
        .push({
          name: 'home'
        })
        .catch((err) => err);
    },
  },
};
</script>
