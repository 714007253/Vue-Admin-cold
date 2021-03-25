<!-- 记录仪列表 -->
<template>
  <div class="grid_List">
    <div></div>
    <el-card>
      <div slot="header" class="clearfix"><span>数据列表</span></div>
      <el-table :data="recordData" stripe border style="width: 100%">
        <el-table-column align="center" prop="mac" label="型号">
        </el-table-column>
        <el-table-column align="center" prop="recordID" label="序列号">
        </el-table-column>

        </el-table-column>
        <el-table-column
          align="center"
          prop="meanvalueTempature"
          label="温度均值"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="recordNowTempatrue"
          label="实时温度"
        >
        </el-table-column>
        <el-table-column align="center" prop="longitude" label="实时经度">
        </el-table-column
        ><el-table-column align="center" prop="latitude" label="实时纬度">
        </el-table-column>
        <el-table-column
          width="180"
          align="center"
          prop="happenTime"
          label="开始时间"
        >
        </el-table-column>
        <el-table-column
          width="180"
          align="center"
          prop="endTime"
          label="结束时间"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="alarmTotalTimes"
          label="报警总次数"
        >
        </el-table-column>
        <el-table-column width="180" align="center" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="showEditDialog(scope.row.id)"
              type="text"
              size="small"
              >查看</el-button
            >
            <el-button
              @click="showPDFDialog(scope.row.id)"
              type="text"
              size="small"
              >生成详细PDF</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
      >
      </el-pagination>
    </el-card>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return { recordData: [], currentPage4: 1 };
  },

  components: {},

  created() {
    this.record();
  },

  methods: {
    async record() {
      const { data: res } = await this.$http.get("record");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.recordData = res.recordData;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showEditDialog(id) {
      this.$router.push({ path: `/checkRecord/${id}` });
    },
    showPDFDialog(id) {
      this.$router.push({ path: `/checkPDF/${id}` });
    },
  },
};
</script>
<style lang="scss" scoped>
.grid_List {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>