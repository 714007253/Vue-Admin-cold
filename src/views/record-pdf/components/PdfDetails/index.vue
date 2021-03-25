<!-- pdf报表 -->
<template>
  <div>
    <el-card
      >
      <div class="title">Beautiful® Orange</div>
      <div>
        <div>
          <el-image
            style="width: 170px; height: 70px; padding-left: 3px"
            :src="require('@/icons/svg/SafeGenx.png')"
          ></el-image>
        </div>
        <div class="icon">LIVES ARE WORTH ACCOMPANYING</div>
      </div>
      <div>
        <el-row :gutter="60">
          <el-col :span="12">
            <div style="margin-bottom: 7px; font-weight: 600">记录仪配置</div>
            <el-card
              class="box"
              shadow="never"
              style="
                border: 1px solid black;
                height: 100px;
                margin-bottom: 15px;
              "
            >
              <div>
                <span>配置员:</span>
                <span class="box2">董超峰</span>
              </div>
              <div>
                <span>启动延迟:</span><span class="box2">3s</span>
              </div>
              <div>
                <span> 取点间隔:</span><span class="box2">{{recordData.intervalOfManagement}}</span>
              </div></el-card
            ></el-col
          >
          <el-col :span="12">
            <div style="margin-bottom: 7px; font-weight: 600">记录仪读取</div>
            <el-card  class="box" shadow="never" style="height: 100px; margin-bottom: 15px">
              <div >
                <span> 开启时间:</span><span class="box2">{{recordData.happenTime}}</span>
              </div>
              <div>
                <span>读取方式:</span><span class="box2"> 机读</span>
              </div>
              <div >
                <span>注:</span><span class="box2">以GMT为准</span>
              </div>
            </el-card></el-col
          >
        </el-row>

        <el-row :gutter="60">
          <el-col :span="12">
            <div style="margin-bottom: 7px; font-weight: 600">记录的数据</div>
            <el-card class="box" shadow="never" style="height: 110px; margin-bottom: 15px">
              <div >
                <span>第一点:</span
                ><span class="box2">{{recordData.happenTime}}</span>
              </div>
              <div >
                <span>最后一点:</span
                ><span class="box2">{{recordData.endTime}}</span>
              </div>
              <div >
                <span>采样记录点的个数:</span
                ><span class="box2">{{recordData.pointNum}}</span>
              </div>
            </el-card></el-col
          >
          <el-col :span="12">
            <div style="margin-bottom: 7px; font-weight: 600">温度摘要数据</div>
            <el-card class="box"  shadow="never" style="height: 110px; margin-bottom: 15px">
              <div >
                <span>最大值:</span><span class="box2">{{recordData.maxTempature}}</span>
              </div>
              <div>
                <span>最小值:</span><span  class="box2">{{recordData.minTempature}}</span></span>
              </div>
              <div>
                <span>均值:</span
                ><span  class="box2">{{recordData.meanvalueTempature}}</span>
              </div>
            </el-card></el-col
          >
        </el-row>
      </div>
      <div> <div style="margin-bottom: 7px; font-weight: 600; margin-bottom: 15px">
        警报摘要
      </div> <PdfTable v-if="flag" :recordData="recordData"></PdfTable> </div>
      <div><div style="margin-bottom: 7px; margin-top: 15px;font-weight: 600; margin-bottom: 15px">温度曲线</div><PdfLine  v-if="flag2" :recordData="recordData"></PdfLine>  </div>
      <div> <div style="margin-bottom: 7px; margin-top: 15px; font-weight: 600; margin-bottom: 15px">
        初始提示备注 </div> <el-card style="margin-bottom: 35px;font-weight: 500;" shadow="never" >{{
        recordData.remarks
      }}</el-card>
      </div>
      <div> <div style="font-weight: 600; margin-bottom: 15px">
        TempTale Ultra 序列号：{{ recordData.recordID }}
      </div></div></el-card
    >
  </div>
</template>

<script>
import PdfLine from "./PdfLine";
import PdfTable from "./PdfTable";
export default {
  name: "",
  data() {
    return { flag: false, flag2: false };
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
      this.flag2 = true;
    }, 100);
  },
  components: { PdfLine, PdfTable },
  props: ["recordData"],
  created() {},

  methods: {},
};
</script>
<style lang="scss"  scoped>
.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.icon {
  position: relative;
  left: -17px;
  top: -20px;
  color: #1858db;
  font-size: 12px;
  font-weight: 600;
}
.box div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .box2 {
    text-align: right;
  }
}
</style>