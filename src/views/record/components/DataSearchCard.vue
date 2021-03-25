<!-- 搜索数据 -->
<template>
  <div>
    <div class="grid_search">
      <div></div>
      <el-card>
        <div slot="header" class="clearfix"><span>数据搜索</span></div>
        <el-form class="demo-form-inline" :inline="true" :model="search_record">
          <el-form-item label="记录仪序列号:">
            <el-input
              placeholder="请输入要搜索记录仪序列号"
              prefix-icon="el-icon-search"
              v-model="search_record.recordID"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="保温箱状态:">
            <el-select
              v-model="search_record.status"
              placeholder="请选择保温箱状态"
            >
              <el-option label="正常" value="normal"></el-option>
              <el-option label="失温" value="warrning"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      search_record: { recordID: "", status: "" },
    };
  },

  components: {},

  created() {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style  lang="scss" scoped>
.grid_search {
  margin-bottom: 25px;
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