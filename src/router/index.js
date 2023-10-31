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
        path: "/login-signup",
        name: "login-signup",
        component: LoginSignupForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
