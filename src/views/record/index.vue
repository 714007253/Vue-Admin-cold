<!-- 记录仪列表 -->
<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <DataSearchCard> </DataSearchCard>
    <DataCardList></DataCardList>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import DataSearchCard from "./components/DataSearchCard.vue";
import DataCardList from "./components/DataCardList.vue";
export default {
  name: "",
  data() {
    return {};
  },

  components: { Breadcrumb, DataSearchCard, DataCardList },

  created() {},

  methods: {},
};
</script>
<style scoped>
</style>