<!-- 高德地图组组件 -->
<template>
  <div class="box">
    <div :id="container" style="width: 486px; height: 221px"></div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      container: "",
      lineArr: [],
      map: {},
      maker: {},
      polyline: {},
    };
  },
  created() {
    this.printData();
  },
  mounted() {
    this.init();
  },
  props: ["recordData"],
  methods: {
    printData() {
      this.lineArr = this.recordData.recordMap.mapAO;
      this.container = this.recordData.id;
      console.log(this.lineArr);
    },
    init() {
      this.map = new AMap.Map(this.recordData.id, {
        resizeEnable: true,
        center: this.recordData.recordMap.mapData.center,
      });
      this.marker = new AMap.Marker({
        map: this.map,
        position: this.recordData.recordMap.mapData.position,
      });
      this.polyline = new AMap.Polyline({
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