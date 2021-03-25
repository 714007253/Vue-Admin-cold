<!-- homepage -->
<template>
  <div>
    <NavBar></NavBar>
    <div class="sidebar_main">
      <SideBar></SideBar>
      <div class="main">
        <router-view
          v-wechat-title="$route.meta.title + this.title"
        ></router-view>
        <div class="grid_center_box">
          <div class="copyright">© 2020 美橙西西版权所有</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default {
  name: "",
  data() {
    return {
      title: " - 冷链云平台",
    };
  },

  components: { SideBar, NavBar },

  created() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.sidebar_main {
  display: grid;
  grid-template-columns: 2fr 17fr;
  .main {
    background-color: #f5f5f5;
    height: 2325px;
    width: 100%;
    .copyright {
      color: #cccccc;
      position: relative;
      top: 0px;
    }
  }
}
</style>