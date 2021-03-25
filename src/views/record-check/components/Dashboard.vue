<!--  -->
<template>
  <div>
    <div class="grid_checkrecord">
      <div></div>
      <el-card>
        <div slot="header" class="clearfix">
          <span>设备编号:{{ recordData.recordID }}</span
          ><span>记录仪型号:{{ recordData.mac }}</span
          ><span>查看:</span
          ><span
            ><el-button @click="toCheckRecord" type="primary" round
              >可视化面板</el-button
            ></span
          ><span
            ><el-button @click="toPdfRecord" round>详细报表</el-button></span
          >
        </div>
        <div class="grid_checkrecord_card">
          <div></div>
          <div>
            <DataCard v-if="flag1" :recordDataChild="recordData"></DataCard>
            <div class="grid_checkrecord_card2">
              <DataMap v-if="flag2" :recordDataChild2="recordData"></DataMap>
              <div></div>
              <DataLine v-if="flag3" :recordDataChild3="recordData"></DataLine>
            </div>
            <div class="grid_checkrecord_card2">
              <DataDangerTable
                v-if="flag4"
                :recordDataChild4="recordData"
              ></DataDangerTable>
              <div></div>
              <Data v-if="flag5" :recordDataChild5="recordData"></Data>
            </div>
          </div>
          <div></div>
        </div>
      </el-card>
      <div></div>
    </div>
  </div>
</template>

<script>
import DataCard from "./DashboardComponents/DataCard";
import Data from "./DashboardComponents/Data";
import DataDangerTable from "./DashboardComponents/DataDangerTable";
import DataMap from "./DashboardComponents/DataMap";
import DataLine from "./DashboardComponents/DataLine";
export default {
  name: "",
  data() {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
    };
  },

  components: { DataCard, Data, DataDangerTable, DataMap, DataLine },
  props: ["recordData"],
  created() {},
  mounted() {
    setTimeout(() => {
      this.flag1 = true;
      this.flag2 = true;
      this.flag3 = true;
      this.flag4 = true;
      this.flag5 = true;
    }, 100);
  },
  methods: {
    toCheckRecord() {
      this.$router.push({ path: `/checkRecord/${this.recordData.id}` });
    },
    toPdfRecord() {
      this.$router.push({
        path: `/checkPDF/${this.recordData.id}`,
      });
    },
  },
};
</script>
<style lang="scss"  scoped>
.grid_checkrecord {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  .clearfix {
    font-size: 15px;
    display: grid;
    grid-template-columns: 10fr 27fr 3fr 5fr 4fr;
    align-items: center;
  }
  .grid_checkrecord_card {
    display: grid;
    grid-template-columns: 1fr 30fr 1fr;
  }
  .grid_checkrecord_card2 {
    margin-bottom: 25px;
    margin-top: 25px;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
  }
}
</style>