import {useAuthStore} from "@/store/useAuthStore";
import { createWebHistory, createRouter } from "vue-router";
import FAQ from "@/components/FAQ.vue";
import LoginSignupForm from "@/components/SignupSigninForm.vue";

const routes = [
    {
        path: "/",
        name: "FAQ",
        component: FAQ,
    },
    {
        meta: {
            title: 'SuiFAQ SignUp Page',
            hideForAuth: true,
        },
        path: "/login-signup",
        name: "login-signup",
        component: LoginSignupForm
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useAuthStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.isLoggedIn) {
            next({ name: 'login' })
        } else {
            next() // go to wherever I'm going
        }
    }
    if (to.matched.some(record => record.meta.hideForAuth)) {
        if (store.isLoggedIn) {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;
