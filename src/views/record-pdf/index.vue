<!--  -->
<template>
  <div>
    <Breadcrumb></Breadcrumb
    ><PdfReport v-if="flag" :recordData="recordDatas"></PdfReport>
  </div>
</template>

<script>
import Breadcrumb from "./components/Breadcrumb.vue";
import PdfReport from "./components/PdfReport.vue";
export default {
  name: "",
  data() {
    return { recordDatas: {}, flag: false };
  },

  components: { Breadcrumb, PdfReport },

  created() {
    this.record();
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 100);
  },
  methods: {
    async record() {
      const { data: res } = await this.$http.get(
        "records/" + this.$route.params.id
      );
      if (res.meta.status !== 200) return this.$message.error("获取数据失败");
      this.recordDatas = res.recordData;
    },
  },
};
</script>
<style  scoped>
</style>