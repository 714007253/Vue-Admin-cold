<!--  -->
<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <Dashboard :recordData="recordData"></Dashboard>
  </div>
</template>

<script>
import Breadcrumb from "./components/Breadcrumb.vue";
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "",
  data() {
    return { recordData: {} };
  },

  components: { Breadcrumb, Dashboard },

  created() {
    this.record();
  },

  methods: {
    async record() {
      const { data: res } = await this.$http.get(
        "records/" + this.$route.params.id
      );
      if (res.meta.status !== 200) return this.$message.error("获取数据失败");
      this.recordData = res.recordData;
    },
  },
};
</script>
<style lang="scss"  scoped>
</style>