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

        <el-table-column
          width="180"
          sortable
          prop="alarmHappenTime"
          label="报警开始时间"
        >
        </el-table-column>
        <el-table-column
          width="180"
          sortable
          prop="alarmEndTime"
          label="报警结束时间"
        >
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
      tableData: [],
    };
  },

  components: {},
  props: ["recordDataChild4"],

  created() {
    this.getdata();
  },

  methods: {
    getdata() {
      this.tableData = this.recordDataChild4.recordalarm;
    },
  },
};
</script>
<style lang="scss"  scoped>
.DataDangereltable {
  position: relative;
  top: -20px;
}
.el-card {
  height: 450px !important;
}
</style>