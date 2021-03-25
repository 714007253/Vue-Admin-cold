<!-- 其他基础参数 -->
<template>
  <div>
    <el-card>
      <div class="Data_elcard">
        <div>配置员:</div>
        <div class="Data_elcard2">张三</div>
      </div>

      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>启动延迟:</div>
        <div class="Data_elcard2">3s</div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>打点时间间隔:</div>
        <div class="Data_elcard2">1s</div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>打点总数:</div>
        <div class="Data_elcard2">123</div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>温度均值:</div>
        <div class="Data_elcard2">-75℉</div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>记录总时长:</div>
        <div class="Data_elcard2">12h</div>
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
<style  scoped>
.el-card {
  height: 450px;
}
.Data_elcard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
}
.Data_elcard2 {
  text-align: right;
}
</style>