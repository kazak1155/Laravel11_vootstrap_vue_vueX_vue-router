import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/",
        name: "main",
        component: () => import('./components/mainPage.vue'),
    },

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
        path: "/user/registration",
        name: "user.registration",
        component: () => import('./components/user/registration.vue'),
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

    {
        path: "/:pathToMatch(.*)*",
        name: "404",
        component: () => import('./components/404.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

router.beforeEach((to, from) => {

    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'user.login' ||  to.name === 'user.registration') {
            return true
        } else {
            return { name: 'user.login' }
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
        return { name: 'user.personal' }
    }

    return true
})

export default router;
