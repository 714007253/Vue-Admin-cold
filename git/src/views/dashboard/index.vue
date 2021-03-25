<!-- 首页 -->
<template>
  <div class="dashboard">
    <DataCard></DataCard>
    <div class="dataline_echarts_grid">
      <div></div>
      <el-card><DataLine class="dataline"></DataLine></el-card>
      <div></div>
    </div>
    <div class="datagroupcard_grid">
      <div></div>
      <el-card><DataGroupCard></DataGroupCard></el-card>
      <div></div>
    </div>
    <div class="datagroupcard_grid2">
      <div></div>
      <el-card><TransportList></TransportList></el-card>
      <el-card><DangerRecord-List></DangerRecord-List></el-card>
      <div></div>
    </div>
  </div>
</template>

<script>
import DangerRecordList from "./components/DangerRecordList";
import DataCard from "./components/DataCard";
import DataGroupCard from "./components/DataGroupCard";
import DataLine from "./components/DataLine";
import TransportList from "./components/TransportList";

export default {
  name: "",
  data() {
    return {};
  },

  components: {
    DataCard,
    DataLine,
    DataGroupCard,
    TransportList,
    DangerRecordList,
  },

  created() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.dashboard {
  display: grid;
  justify-content: center;
  .dataline_echarts_grid {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
    .dataline {
      position: relative;
      top: 37px;
      left: 37px;
      width: 980px;
      height: 600px;
    }
  }
  .datagroupcard_grid {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
  }
  .datagroupcard_grid2 {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 3fr 5fr 3fr 3fr;
    grid-column-gap: 40px;
    div {
      height: 500px;
    }
  }
}
</style>