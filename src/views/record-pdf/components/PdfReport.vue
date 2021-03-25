<!--  -->
<template>
  <div class="grid_checkrecord">
    <div></div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>设备编号:{{ recordData.recordID }}</span
        ><span>记录仪型号:{{ recordData.mac }}</span
        ><span>查看:</span
        ><span
          ><el-button @click="toCheckRecord" round>可视化面板</el-button></span
        ><span
          ><el-button @click="toPdfRecord" type="primary" round
            >详细报表</el-button
          ></span
        >
      </div>
      <div class="getPdf">
        <div></div>
        <el-button @click="getDownPdf" type="warning" round
          >生成pdf文档</el-button
        >
      </div>
      <div id="pdfDom">
        <PdfDetails v-if="flag" :recordData="recordData"></PdfDetails>
      </div>
    </el-card>
    <div></div>
  </div>
</template>

<script>
import PdfDetails from "./PdfDetails/index";
export default {
  name: "",
  data() {
    return { flag: false };
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 100);
  },
  components: { PdfDetails },
  props: ["recordData"],
  created() {},

  methods: {
    getDownPdf() {
      this.getPdf("pdfDom", this.recordData.recordID + "记录仪Pdf表单");
    },
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
  .getPdf {
    display: grid;
    grid-template-columns: 9fr 1fr;
  }
  #pdfDom {
    margin-top: 25px;
  }
}
</style>