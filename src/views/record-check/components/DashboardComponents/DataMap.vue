<!-- 高德地图组组件 -->
<template>
  <div>
    <div id="container" style="width: 627px; height: 450px"></div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      recordData: "",
      lineArr: [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528],
        [116.480151, 39.998453],
        [116.480784, 39.998302],
        [116.480784, 39.998302],
        [116.481149, 39.998184],
        [116.481573, 39.997997],
        [116.481863, 39.997846],
        [116.482072, 39.997718],
        [116.482362, 39.997718],
        [116.483633, 39.998935],
        [116.48367, 39.998968],
        [116.484648, 39.999861],
      ],
      polyline: "",
      position: "",
      center: [116.484648, 39.999861],
      map: "",
      marker: "",
    };
  },
  created() {
    this.record();
  },
  mounted() {
    this.init();
  },

  methods: {
    async record() {
      const { data: res } = await this.$http.get(
        "records/" + this.$route.params.id
      );
      if (res.meta.status !== 200) return this.$message.error("获取数据失败");
      this.recordData = res.recordData;
      this.center = this.recordData.mapData.center;
      this.position = this.recordData.mapData.position;
      this.lineArr = this.recordData.mapAO;
      console.log(this.lineArr); //测试数组
    },
    init() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: this.center,
      });
      this.marker = new AMap.Marker({
        map: this.map,
        position: this.position,
      });
      var polyline = new AMap.Polyline({
        map: this.map,
        path: this.lineArr,
        showDir: true,
        strokeColor: "#28F",
        strokeWeight: 6,
      });
      this.map.add(this.marker);
      this.map.setFitView();
      this.map.setZoom(16);
    },
  },
};
</script>


<style  scoped>
</style>