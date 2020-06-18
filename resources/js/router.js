import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./view/home.vue').default
    },
    {
        path: '/first',
        component: require('./view/FirstForm.vue').default
    },
    {
        path: '/secound',
        component: require('./view/SecoundForm.vue').default
    },
    {
        path: '/summary',
        component: require('./view/Summary.vue').default
    }
]

export default new VueRouter({
    routes
})
