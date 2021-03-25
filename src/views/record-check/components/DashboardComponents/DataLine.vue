
<template>
  <div>
    <el-card> <div id="RecorderData1"></div></el-card>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      // 参数定义
      echarts: "",
      linedata: [-79, -79, -67, -78, -89, -79, -79, -67, -78, -89, -77, -79],
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
              "10:09:01AM",
              "10:32:22AM",
              "10:47:17AM",
              "11:02:22AM",
              "11:17:34AM",
              "11:32:22AM",
              "11:47:14AM",
              "12:02:51AM",
              "12:17:05AM",
            ],
            name: "时间",
            nameLocation: "end",
          },
        ],
        yAxis: {
          splitNumber: 9,
          type: "value",
          name: "温度",
          nameLocation: "end",
          data: [],
        },

        series: [
          {
            type: "line",
            data: this.linedata,
            areaStyle: { color: "#33ccff" },
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
              color: "#FF6600",
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
  top: -27px;
  left: -36px;
  width: 650px;
  height: 470px;
}
.el-card {
  width: 627px;
  height: 450px;
}
</style>