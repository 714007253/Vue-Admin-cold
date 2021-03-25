 <!--  -->
 <template>
  <div>
    <el-table
      :default-sort="{ prop: 'happen_time', order: 'descending' }"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="mac" label="记录仪序列号">
        <template slot-scope="scope">
          <i class="el-icon-warning-outline"></i>
          <span style="margin-left: 10px">{{ scope.row.mac }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="alarm_content" label="报警类型"> </el-table-column>
      <el-table-column sortable prop="happen_time" label="预警时间">
      </el-table-column>
    </el-table>
  </div>
</template>
 
 <script>
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-22",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
        },
        {
          mac: "STQ563",
          alarm_content: "过温66℉",
          happen_time: "2021-3-23",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
        },
        {
          mac: "STQ563",
          alarm_content: "过温76℉",
          happen_time: "2021-3-21",
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