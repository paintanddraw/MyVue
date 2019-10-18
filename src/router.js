import Vue from 'vue';
import VueRouter from 'vue-router';
import Chart from '@/components/Echarts';
import Hello from '@/components/Hello';
import HelloWorld from '@/components/HelloWorld';
import User from '@/components/User';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/chart', component: Chart},
        {path: '/', component: HelloWorld},
        {path: '/hello', component: Hello},
        {path: '/user', component: User}
    ],
    mode: "history"
});

export default router;