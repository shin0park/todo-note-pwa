import './firebase';
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {routes} from "./routes"
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter
);

const myRouter = new VueRouter({
    routes: routes
});

new Vue({
    router: myRouter,
    store,
    render: h => h(App)
}).$mount('#app')
