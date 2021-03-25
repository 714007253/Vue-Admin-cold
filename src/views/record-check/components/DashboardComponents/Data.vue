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
        <div class="Data_elcard2">
          {{ recordDataChild5.intervalOfManagement }}
        </div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>打点总数:</div>
        <div class="Data_elcard2">{{ recordDataChild5.pointNum }}</div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>温度均值:</div>
        <div class="Data_elcard2">
          {{ recordDataChild5.meanvalueTempature }}
        </div>
      </div>
      <el-divider> </el-divider>
      <div class="Data_elcard">
        <div>记录总时长:</div>
        <div class="Data_elcard2">{{ recordDataChild5.totalTime }}</div>
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
  props: ["recordDataChild5"],

  created() {},

  methods: {},
};
</script>
<style  scoped>
.Data_elcard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
}
.Data_elcard2 {
  text-align: right;
}
.el-card {
  height: 450px !important;
}
</style>