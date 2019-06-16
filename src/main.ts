import Vue from 'vue';
import App from './components/app/app.vue';
import EventBus from 'vue-bus-ts';

Vue.use(EventBus);
Vue.config.productionTip = false;
const bus = new EventBus.Bus();

new Vue({
  bus,
  render: (h) => h(App),
}).$mount('#app');
