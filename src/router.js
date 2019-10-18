import VueRouter from 'vue-router';
import Chart from '@/components/Echarts'
import Hello from '@/components/Hello'

const router = new VueRouter({
    routes: [
        {path: '/', component: Chart},
        {path: '/login', component: Hello}
    ],
    mode: "history"
});

export default router;