import Vue from 'vue'
import App from './App.vue'
import { eventExtend } from './extends';

eventExtend(Vue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
