<!--  -->
<template>
  <div>
    <el-card>
      <el-table
        class="DataDangereltable"
        :default-sort="{ prop: 'happen_time', order: 'descending' }"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="alarmType" label="报警类型"> </el-table-column>

        <el-table-column sortable prop="alarmHappenTime" label="报警开始时间">
        </el-table-column>
        <el-table-column sortable prop="alarmEndTime" label="报警结束时间">
        </el-table-column>
        <el-table-column prop="alarmDuration" label="报警持续时间">
        </el-table-column></el-table
    ></el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
        {
          alarmType: "STQ563",
          alarmHappenTime: "2021-3-22",
          alarmEndTime: "2021-3-22",
          alarmDuration: "2s",
        },
      ],
    };
  },

  components: {},
  props: ["recordData"],
  created() {},

  methods: { getdata() {} },
};
</script>
<style lang="scss"  scoped>
.el-card {
  height: 450px;
  .DataDangereltable {
    position: relative;
    top: -20px;
  }
}
</style>