<!-- 1.全局监听路由页面跳转时直达顶部 2.全局监听屏幕尺寸进行手机浏览器以及电脑端匹配特定移动端则在css上增加.mobile，特定电脑端则在.computer,若无特定则等于赋值给两种 -->
<template>
  <div id="app">
    <router-view :class="computedPhone"></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  watch: {
    $route: function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.onresize = () => {
      this.setWidth(document.documentElement.clientWidth);
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
    computedPhone() {
      if (this.screenWidth < 1024) {
        return "mobile";
      } else {
        return "computer";
      }
    },
  },
};
</script>
<style>
html,
body {
  width: 100%;

  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>


