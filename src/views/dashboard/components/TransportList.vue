<!-- 运输表单 -->
<template>
  <div>
    <el-table
      :default-sort="{ prop: 'begin_time', order: 'descending' }"
      :data="transportlist"
      style="width: 100%"
    >
      <el-table-column prop="transport_id" label="运单编号" width="190px">
        <template slot-scope="scope">
          <i class="el-icon-document-checked"></i>
          <span style="margin-left: 10px">{{ scope.row.transport_id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="mac" label="设备编号"> </el-table-column>
      <el-table-column
        sortable
        prop="begin_time"
        label="开始时间"
        width="160px"
      >
      </el-table-column>
      <el-table-column sortable prop="end_time" label="结束时间" width="160px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //显示最新的八条
      transportlist: [
        {
          transport_id: "SF1892371893422",
          mac: "STQ563",
          begin_time: "2021-3-21",
          end_time: "2021-3-21",
        },
        {
          transport_id: "SF1892371823429",
          mac: "STQ563",
          begin_time: "2021-3-19",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324271829",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324247189",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324247189",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324247189",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324247189",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
        {
          transport_id: "SF1892324247189",
          mac: "STQ563",
          begin_time: "2021-3-20",
          end_time: "2021-3-20",
        },
      ],
    };
  },

  components: {},

  created() {},

  methods: {},
};
</script>
<style  scoped>
</style>