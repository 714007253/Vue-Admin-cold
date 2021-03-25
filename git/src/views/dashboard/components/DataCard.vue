<!-- 计数卡片 -->
<template>
  <div>
    <div class="datacard_grid_box">
      <div></div>
      <el-card class="datacard_box">
        <div>
          <router-link class="datacard_data" to="/record">
            {{ datacardList.recordTotal }}
          </router-link>
        </div>
        <div>
          <router-link class="datacard_word" to="/record"
            ><el-image
              class="datacard_icon"
              :src="require('@/icons/svg/all-record.svg')"
            ></el-image>
            仓储记录仪</router-link
          >
        </div>
      </el-card>
      <el-card class="datacard_box">
        <div>
          <router-link class="datacard_data" to="/recordOnline"
            >{{ datacardList.recordTotalOnline }}
          </router-link>
        </div>
        <div>
          <router-link class="datacard_word" to="/recordOnline"
            ><el-image
              class="datacard_icon"
              :src="require('@/icons/svg/online-record.svg')"
            ></el-image
            >在线记录仪</router-link
          >
        </div></el-card
      >
      <el-card class="datacard_box">
        <div>
          <router-link class="datacard_data" to="/recordDanger"
            >{{ datacardList.recordDanger }}
          </router-link>
        </div>
        <div>
          <router-link class="datacard_word" to="/recordDanger"
            ><el-image
              class="datacard_icon"
              :src="require('@/icons/svg/danger-record.svg')"
            ></el-image
            >报警记录仪</router-link
          >
        </div>
      </el-card>
      <el-card class="datacard_box">
        <div>
          <router-link class="datacard_data" to="/recordTransport"
            >{{ datacardList.recordInvalid }}
          </router-link>
        </div>
        <div class="homeword">
          <router-link class="datacard_word" to="/recordTransport"
            ><el-image
              class="datacard_icon"
              :src="require('@/icons/svg/transport-record.svg')"
            ></el-image
            >运输记录仪</router-link
          >
        </div>
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
      datacardList: {
        recordDanger: "",
        recordInvalid: "",
        recordTotalOnline: "",
        recordTotal: "",
      },
    };
  },

  components: {},

  created() {
    this.getDataCardData();
  },

  methods: {
    async getDataCardData() {
      const { data: res } = await this.$http.post("/index/recordBaseData");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.datacardList = res.homelist;
    },
  },
};
</script>
<style lang="scss"  scoped>
.datacard_grid_box {
  margin-top: 25px;
  display: grid;
  justify-content: center;
  grid-template-columns: 3fr 2fr 2fr 2fr 5fr;
  grid-column-gap: 10px;
  .datacard_box {
    display: grid;
    align-items: center;
    height: 120px;
    width: 275px;
    color: #999999;
    div {
      display: grid;
      grid-row-gap: 10px;
      justify-content: center;
    }
  }
  .datacard_data {
    color: black;
    font-size: 30px;
    font-weight: 600;
  }
  .datacard_word {
    display: grid;
    grid-template-columns: 40px 130px;
    color: black;
    font-size: 21px;
    font-weight: 500;
  }
  .datacard_icon {
    width: 31px;
    height: 30px;
  }

  .datacard_data:hover {
    color: #1fa2e8;
  }

  .datacard_word:hover {
    color: #1fa2e8;
  }
}
</style>