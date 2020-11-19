<template>
  <div id="app">
    <div id="my-echarts" style="width: 600px;height:400px;">

    </div>
  </div>
</template>
<script>
export default {
  name:'app',
  data() {
    return {
    }
  },
  mounted() {
    this.testReq()
    this.drawLine()
  },
  created() {
  },
  methods: {
    testReq() {
      // console.log(this.$post);
      this.$get('/test/mock').then((res)=>{
        console.log(res);
      })
    },
    // 注入e-charts
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('my-echarts'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '摄入蛋白质'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>