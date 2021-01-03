/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Librerías génericas para casi cualquier proyecto
import router from "./routes";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Index from "./Index";

// Set-up de la librería dayjs para que sirva igual que moment.js
// Para más info, ver la documentaci/on de DayJs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuex);

// Creación del datastore
import DataStore from "./store";
const store = new Vuex.Store(DataStore);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// GLOBAL COMPONENT REGISTRATION

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    components: {
        "index": Index
    },
    beforeCreate() {
        // 
    }
});
