<template>
  <div id="app">
      <el-container class="common-layout">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li v-for="(item, index) in routerList" :key="index" @click="goComponent(item.path)">
              {{ item.name }}
            </li>
          </ul>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      routerList: [],
    };
  },
  created() {
    this.routerList = this.$router.options.routes;
    console.log(this.routerList);
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {
    goComponent(targetRouter) {
      // this.$router.push(targetRouter)
    }
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 20%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.common-layout {
  height: 100%;
}
</style>
