<template>
  <div id="app">
    <span>{{ $store.state.count }}</span>
    <span>{{ getterCount }}</span>
    <a class="add" @click="addState">增加</a>
    <a class="reduce" @click="reduceState">减少</a>
  </div>
</template>
<script>
export default {
  data() {
    return{
    }
  },
  computed:{
    getterCount() {
      return this.$store.getters.getterCount
    }
  },
  mounted() {
    console.log(this.$store);
  },
  created() {

  },
  methods:{
    addState() {
      this.$store.commit('mutationAdd')
    },
    reduceState() {
      this.$store.dispatch('actionAdd')
    }
  }
}
</script>
<style scoped>
.add{
  display:block;
}
.reduce{
  display:block;
}
</style>