<!-- 面包屑导航组件 -->
<template>
  <div>
    <div class="grid_breadcrumb">
      <div></div>
      <el-card class="Navigation">
        <div class="navbar clearfix">
          <el-breadcrumb
            class="breadcrumb-container"
            separator-class="el-icon-arrow-right"
          >
            <el-breadcrumb-item
              v-for="item in levelList"
              :key="item.path"
              :to="item.path"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-card>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !==
          "Dashboard".toLocaleLowerCase()
      ) {
        matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.levelList = matched;
    },
  },
};
</script>

<style lang="scss"  scoped>
.grid_breadcrumb {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  .Navigation {
    top: 5px;
    position: relative;
    height: 60px;
    margin-bottom: 27px;
  }
}
</style>