<template>
  <div id="app">
    <el-row>
      <!-- 查询条件 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="类型">
          <el-input v-model="formInline.user" placeholder="类型"></el-input>
        </el-form-item>
        <el-form-item label="星级">
          <el-select v-model="formInline.region" placeholder="星级">
            <el-option label="☆" value="oneStart"></el-option>
            <el-option label="☆☆" value="twoStart"></el-option>
            <el-option label="☆☆☆" value="threeStart"></el-option>
            <el-option label="☆☆☆☆" value="foutStart"></el-option>
            <el-option label="☆☆☆☆☆" value="fiveStart"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-table
        :data="guixuPriceList"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="type"
          label="类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="star"
          label="星级"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄'
      // }],
      guixuPriceList:[]
    }
  },
  mounted() {
    console.log(store);
  },
  created() {
    this.getPriceList();
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    getPriceList() {
      this.setTimeout(() => {
        
      }, timeout);
      this.$get('/list/guixuList').then((res)=>{
        console.log(res);
        this.guixuPriceList = res.data.guixuList
      })
    }
  }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>