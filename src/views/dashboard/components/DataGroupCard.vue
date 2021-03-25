<!--  -->
<template>
  <div>
    <el-carousel :interval="124000" type="card" height="750px">
      <el-carousel-item
        :model="recordData"
        v-for="item in recordData"
        :key="item.id"
      >
        <el-card class="datagroupcard_data">
          <el-card class="datagroupcard_map">
            <GaoDeMap :recordData="item" class="GaoDeMap"></GaoDeMap
          ></el-card>
          <div>
            <span>记录仪型号:</span
            ><span class="datagroupcard_span2">{{ item.mac }}</span>
          </div>
          <div>
            <span>TempTale Ultra序列号:</span
            ><span class="datagroupcard_span2">{{ item.recordID }}</span>
          </div>
          <div>
            <span>实时温度:</span>
            <span class="datagroupcard_span2">{{
              item.recordNowTempatrue
            }}</span>
          </div>
          <div>
            <span>实时经度:</span
            ><span class="datagroupcard_span2">{{ item.longitude }}</span>
          </div>
          <div>
            <span>实时纬度:</span
            ><span class="datagroupcard_span2">{{ item.latitude }}</span>
          </div>
          <div>
            <span>报警次数:</span
            ><span class="datagroupcard_span2">{{ item.alarmTotalTimes }}</span>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import GaoDeMap from "@/components/GaoDeMap";
export default {
  data() {
    return { recordData: [] };
  },
  name: "",
  components: { GaoDeMap },

  created() {
    this.record();
  },

  methods: {
    async record() {
      const { data: res } = await this.$http.get("record");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.recordData = res.recordData;
    },
  },
};
</script>
<style lang="scss" scoped>
.datagroupcard_map {
  height: 220px !important;
  border-bottom: none !important;
  .GaoDeMap {
    height: 220px;
    position: relative;
    top: -30px;
    left: -20px;
  }
}
.datagroupcard_data {
  div {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    border-bottom: #f2f2f2 1px solid;
    margin-top: 10px;
  }
  span {
    font-size: 19px;
    position: relative;
    top: 32px;
  }
  .datagroupcard_span2 {
    text-align: right;
  }
}
</style>