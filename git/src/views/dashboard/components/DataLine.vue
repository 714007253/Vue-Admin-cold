<!-- 四组数据对应的周折线图 -->
<template>
  <div>
    <div></div>
    <div id="dataline_echarts"></div>
    <div></div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      date: null,
      echarts: "",
      echartsData: null,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.initchart("dataline_echarts");
      this.getData();
    });
  },
  methods: {
    initchart(id) {
      this.charts = echarts.init(document.getElementById(id), null, {
        renderer: "svg",
      });
    },
    async getData() {
      this.drawLine();
    },

    drawLine() {
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["仓储记录仪", "在线记录仪", "报警记录仪", "运输记录仪"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          name: "日期",
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          name: "单位/个",
          type: "value",
        },
        series: [
          {
            name: "仓储记录仪",
            type: "line",
            stack: "总量",
            data: [0, 20, 40, 50, 80, 95, 100],
          },
          {
            name: "在线记录仪",
            type: "line",
            stack: "总量",
            data: [0, 12, 34, 50, 20, 21, 30],
          },
          {
            name: "报警记录仪",
            type: "line",
            stack: "总量",
            data: [3, 5, 3, 8, 9, 3],
          },
          {
            name: "运输记录仪",
            type: "line",
            stack: "总量",
            data: [3, 2, 4, 5, 2, 1, 1],
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
#dataline_echarts {
  width: 980px;
  height: 500px;
}
</style>
