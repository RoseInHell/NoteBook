import Vue from 'vue';

import '@/assets/css/reset.scss';
import { message, Button } from 'element-ui';
import App from '@/App.vue';
import router from './router';

Vue.use(Button);
Vue.config.productionTip = false;

Vue.prototype.$message = message;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
