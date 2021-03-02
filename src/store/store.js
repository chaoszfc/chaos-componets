import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state =  {
  count: 0,
  getCount: 0,
}

// mutation 放置我们对state对象的操作 mutation只支持同步的情况
const mutations = {
  mutationAdd(state) {
    console.log(state)
    setTimeout(() => {
      return state.count++
    }, 1000);
  }
}
// action 放置我们对state对象的操作 action支持异步的操作
const actions = {
  actionAdd(context) {
    console.log(context);
    setTimeout(() => {
      return context.commit('mutationAdd')
    }, 1000);
  }
}
// getter 类似vue的computed计算属性
const getters = {
  getterCount(state, n=2) {
    return state.getCount + 2
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})