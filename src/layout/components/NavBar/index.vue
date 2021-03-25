<!-- Sidebar -->
<template>
  <div>
    <div class="navbar">
      <div class="navbar_1">
        <img class="navbar_image" src="@/icons/svg/thermometer.svg" alt="" />
        <span class="navbar_title">冷链实时监控云平台</span>
      </div>
      <div class="navbar_2">
        <span class="navbar_admin"> 您好 , 管理员 </span>
        <div>
          <router-link to="" @click.native="logout">
            <el-image
              :src="require('@/icons/svg/logout.svg')"
              class="navbar_quit"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  components: {},

  created() {},

  methods: {
    logout() {
      this.$confirm("是否退出当前账号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({ type: "success", message: "退出成功!" });
          window.sessionStorage.clear();
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消退出" });
        });
      if ((type = "success")) return;
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-image: linear-gradient(
    -225deg,
    #22e1ff 0%,
    #1d8fe1 48%,
    #625eb1 100%
  );
  .navbar_1 {
    display: grid;
    grid-template-columns: 80px 240px;
    .navbar_image {
      position: relative;
      top: 12px;
      width: 90px;
      height: 54px;
    }

    .navbar_title {
      position: relative;
      top: 21px;
      color: aliceblue;
      font-size: 25px;
      font-weight: 700;
    }
  }
  .navbar_2 {
    display: grid;
    justify-content: end;
    grid-template-columns: 120px 64px;
    .navbar_quit {
      top: 20px;
      width: 29px;
      height: 41px;
    }

    .navbar_admin {
      position: relative;
      top: 30px;
      font-weight: 600;
      color: #ffffff !important;
      font-size: 14px;
    }
  }
}
</style>