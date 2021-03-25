<!-- 高德地图组组件 -->
<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      recordData: "",
      polyline: "",
      map: "",
      marker: "",
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  props: ["recordDataChild2"],
  methods: {
    init() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: this.recordDataChild2.mapData.center,
      });
      this.marker = new AMap.Marker({
        map: this.map,
        position: this.recordDataChild2.mapData.position,
      });
      var polyline = new AMap.Polyline({
        map: this.map,
        path: this.recordDataChild2.mapAO,
        showDir: true,
        strokeColor: "#28F",
        strokeWeight: 6,
      });
      this.map.add(this.marker);
      this.map.setFitView();
      this.map.setZoom(this.recordDataChild2.mapData.zoom);
    },
  },
};
</script>


<style lang="scss"  scoped>
#container {
  width: 692px;
  height: 450px;
  box-shadow: 5px 5px 5px 5px #ffffff;
}
</style>