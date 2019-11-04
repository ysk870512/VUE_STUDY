import Vue from 'vue'
import TodoList from './components/TodoList.vue'
import store from './store' // 추가

Vue.config.productionTip = false

new Vue({
    store, // 추가 (store 객체를 Vue 인스턴스에 주입)
    render: h => h(TodoList)
}).$mount('#app')