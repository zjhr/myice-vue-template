import 'normalize.css/normalize.css';
import '@style/index.css';
import '@style/web.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@style/style.scss';
import '@style/theme1/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store/index';
import "@/components";
import './plugin/axios';
// import pluginOpen from './plugin/open';

Vue.use(ElementUI);
// Vue.use(pluginOpen);

Vue.config.productionTip = false;

// Vue.prototype.$env = process.env.NODE_ENV
// Vue.prototype.$baseUrl = process.env.BASE_URL

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
