import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 消息总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
