<template>
  <div id="app">
      <el-container class="common-layout">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu 
            v-for="(item, index) in routerList"
            :key='index' 
          >
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span slot="title"  @click="goComponent(item.path)">{{ item.name }}</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item 
                    :index="'1-' + index"  
                    v-for="(childItem, childindex) in item.children" 
                    :key='childindex' 
                    @click="goComponent(childItem.path)"
                  >
                    {{ childItem.name }}
                  </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
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
    console.log(this.$router);
  },
  mounted() {
    // console.log(this.$router);
  },
  methods: {
    goComponent(targetRouter) {
      console.log(targetRouter)
      this.$router.push(targetRouter)
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
li{
  list-style: none;
}
</style>
