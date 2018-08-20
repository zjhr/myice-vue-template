// const moduleA = {...}
// const moduleB = {...}
// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })
// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态

import Vue from 'vue'
import Vuex from 'vuex'

// import moduleRoute from '@module/modules-route'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // mRoute:moduleRoute
  }
})
