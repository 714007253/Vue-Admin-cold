<!-- 临时面包屑 -->
<template>
  <div>
    <div class="grid_breadcrumb">
      <div></div>
      <el-card>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/record' }"
            >记录仪列表</el-breadcrumb-item
          >
          <el-breadcrumb-item>记录仪报表 </el-breadcrumb-item>
        </el-breadcrumb></el-card
      >
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  components: {},

  created() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.grid_breadcrumb {
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
}
</style>