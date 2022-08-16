import Vue from 'vue'
import {Vuelidate} from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from "@/utils/message.plugin";
import dateFilter from "@/filters/date.filter";
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'
import axios from "axios";


Vue.config.productionTip = false

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('dateFilter', dateFilter)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
