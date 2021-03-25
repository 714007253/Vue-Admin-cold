<!-- SideBar -->
<template>
  <div>
    <div>
      <el-menu
        :default-active="$router.path"
        class="sidebar"
        background-color="#f2f2f2"
        text-color="black"
        :router="true"
      >
        <el-submenu
          :index="item.id + ''"
          v-for="item in menulist"
          :key="item.id"
        >
          <template slot="title">
            <i :class="item.icons"></i>
            <span>{{ item.authName }}</span>
          </template>
          <el-menu-item
            :index="'/' + subItem.path"
            v-for="subItem in item.children"
            :key="subItem.id"
          >
            <template slot="title">
              <i :class="subItem.icons"></i>
              <span>{{ subItem.authName }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      menulist: [
        {
          icons: "el-icon-s-data",
          id: 101,
          authName: "首页",
          path: "dashboard",
          children: [
            {
              icons: "el-icon-view",
              id: 102,
              authName: "可视化面板",
              path: "dashboard",
            },
          ],
        },
        {
          icons: "el-icon-cpu",
          id: 103,
          authName: "记录仪",
          path: "record",
          children: [
            {
              icons: "el-icon-c-scale-to-original",
              id: 1031,
              authName: "记录仪列表",
              path: "record",
            },
            // {
            //   icons: "el-icon-info",
            //   id: 1032,
            //   authName: "在线记录仪",
            //   path: "recordOnline",
            // },
            // {
            //   icons: "el-icon-error",
            //   id: 1033,
            //   authName: "报警记录仪",
            //   path: "recordDanger",
            // },
            // {
            //   icons: "el-icon-ship",
            //   id: 1034,
            //   authName: "运输记录仪",
            //   path: "recordTransport",
            // },
          ],
        },
        // {
        //   icons: "el-icon-user",
        //   id: 105,
        //   authName: "用户列表",
        //   path: "user",
        //   children: [
        //     {
        //       icons: "el-icon-user-solid",
        //       id: 106,
        //       authName: "用户列表",
        //       path: "user",
        //     },
        //   ],
        // },
      ],
    };
  },

  components: {},

  created() {},

  methods: {},
};
</script>
<style  scoped>
.sidebar {
  height: 2325px;
  width: 100%;
}
</style>