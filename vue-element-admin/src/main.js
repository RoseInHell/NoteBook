import Vue from 'vue';

import '@/assets/css/reset.scss';
import { message, Button } from 'element-ui';
import App from '@/App.vue';

Vue.use(Button);
Vue.config.productionTip = false;

Vue.prototype.$message = message;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
