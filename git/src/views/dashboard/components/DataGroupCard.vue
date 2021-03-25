<!--  -->
<template>
  <div>
    <el-carousel autoplay="false" type="card" height="750px">
      <el-carousel-item v-for="item in 3" :key="item">
        <el-card class="datagroupcard_data">
          <el-card class="datagroupcard_map"> </el-card>
          <div>
            <span>记录仪型号:</span
            ><span class="datagroupcard_span2">308YLK</span>
          </div>
          <div>
            <span>TempTale Ultra序列号:</span
            ><span class="datagroupcard_span2">KB732469812</span>
          </div>
          <div>
            <span>实时温度:</span><span class="datagroupcard_span2">-78℉</span>
          </div>
          <div>
            <span>实时经度:</span
            ><span class="datagroupcard_span2">184.3728W</span>
          </div>
          <div>
            <span>实时纬度:</span
            ><span class="datagroupcard_span2">123.3172N</span>
          </div>
          <div>
            <span>报警次数:</span><span class="datagroupcard_span2">2</span>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
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
.datagroupcard_map {
  height: 220px !important;
  border-bottom: none !important;
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