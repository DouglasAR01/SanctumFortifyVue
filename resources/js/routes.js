import VueRouter from "vue-router";
import Home from "./components/Home";
import Login from "./components/auth/Login";
const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
    },
    {
        path:'/login',
        component: Login,
        name:'login'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export default router;