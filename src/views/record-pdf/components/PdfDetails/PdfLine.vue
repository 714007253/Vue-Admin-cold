
<template>
  <div>
    <el-card shadow="never"> <div id="RecorderData1"></div></el-card>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      echarts: "",
      linedata1: [
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
        "-65",
      ],
      linedata2: [
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
        "-90",
      ],
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.initchart("RecorderData1");
      this.getData();
    });
  },
  created() {},
  props: ["recordData"],
  methods: {
    initchart(id) {
      this.charts = echarts.init(document.getElementById(id));
    },
    getData() {
      this.drawLine();
    },

    drawLine() {
      this.charts.setOption({
        color: ["#B9DDFF"],
        xAxis: [
          {
            axisLabel: {
              interval: 0,
            },
            boundaryGap: false,
            type: "category",
            data: [
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
              "11:00",
              "12:00",
            ],
            name: "时间",
            nameLocation: "end",
          },
        ],
        yAxis: {
          max: "-40",
          min: "-120",
          splitNumber: 9,
          type: "value",
          name: "温度",
          nameLocation: "end",
          data: [],
        },

        series: [
          {
            type: "line",
            data: this.recordData.recordTempatrueArray,

            label: {
              show: true,
            },
            lineStyle: {
              width: 3,
              type: "solid",
              color: "#3AA1FF",
            },
          },
          {
            type: "line",
            data: this.linedata1,

            label: {
              show: true,
            },
            lineStyle: {
              width: 3,
              type: "solid",
              color: "#CC0000",
            },
          },
          {
            type: "line",
            data: this.linedata2,
            label: {
              show: true,
            },
            lineStyle: {
              width: 3,
              type: "solid",
              color: "#CC0000",
            },
          },
        ],
      });
    },
  },
};
</script>
<style  scoped>
#RecorderData1 {
  position: relative;
  left: -61px;

  width: 1700px;
  height: 500px;
}
</style>