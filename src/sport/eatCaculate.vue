<template>
  
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
  },
  methods: {
    testReq() {
      console.log(this.$get);
      this.$get('/test/mock').then(()=>{
        console.log(res.data);
      })
    }
  }
}
</script>