import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/fruit",
        name: "fruit.index",
        component: () => import('./components/fruit/index.vue'),
    },

    {
        path: "/fruit/add",
        name: "fruit.create",
        component: () => import('./components/fruit/create.vue'),
    },

    {
        path: "/fruit/:id",
        name: "fruit.show",
        component: () => import('./components/fruit/show.vue'),
    },

    {
        path: "/fruit/:id/edit",
        name: "fruit.edit",
        component: () => import('./components/fruit/edit.vue'),
    },

    {
        path: "/user/login",
        name: "user.login",
        component: () => import('./components/user/login.vue'),
    },

    {
        path: "/user/personal",
        name: "user.personal",
        component: () => import('./components/user/personal.vue'),
    },

    {
        path: "/users/logout",
        name: "user.logout",
        component: () => import('./components/user/logout.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

router.beforeEach((to, from) => {

})

export default router;
