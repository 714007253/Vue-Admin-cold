<!-- 四个计数卡片 -->
<template>
  <div class="grid_Card_card">
    <el-card class="grid_Card_card2">
      <div class="card_Data">{{ recordData.recordNowTempatrue }}</div>
      <div class="card_Data2">
        <el-image
          class="datacard_icon"
          :src="require('@/icons/svg/nowTempature.svg')"
        ></el-image
        >实时温度
      </div>
    </el-card>
    <div></div>
    <el-card class="grid_Card_card2">
      <div class="card_Data">{{ recordData.maxTempature }}</div>
      <div class="card_Data2">
        <el-image
          class="datacard_icon"
          :src="require('@/icons/svg/maxTempature.svg')"
        ></el-image
        >最高温度
      </div>
    </el-card>
    <div></div>
    <el-card class="grid_Card_card2">
      <div class="card_Data">{{ recordData.minTempature }}</div>
      <div class="card_Data2">
        <el-image
          class="datacard_icon"
          :src="require('@/icons/svg/lowTempature.svg')"
        ></el-image
        >最低温度
      </div>
    </el-card>
    <div></div>
    <el-card class="grid_Card_card2">
      <div class="card_Data">{{ recordData.alarmTotalTimes }}</div>
      <div class="card_Data2">
        <el-image
          class="datacard_icon"
          :src="require('@/icons/svg/warringTempature.svg')"
        ></el-image
        >报警次数
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  components: {},
  props: ["recordData"],
  created() {},

  methods: {},
};
</script>
<style lang="scss"  scoped>
.grid_Card_card {
  display: grid;
  grid-template-columns: 3fr 2fr 3fr 2fr 3fr 2fr 3fr;
  .el-card {
    height: 150px;
  }
  .grid_Card_card2 {
    display: grid;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    .card_Data {
      font-size: 35px;
      display: grid;
      grid-row-gap: 10px;
      justify-content: center;
    }
    .card_Data2 {
      display: grid;
      grid-template-columns: 1fr 4fr;
    }
    .datacard_icon {
      position: relative;
      top: 6px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>