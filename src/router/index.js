import { createWebHistory, createRouter } from "vue-router";
import FAQ from "@/components/FAQ.vue";
import loginForm from "@/components/LoginForm.vue";

const routes = [
    {
        path: "/",
        name: "FAQ",
        component: FAQ,
    },
    {
        path: "/login",
        name: "login",
        component: loginForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
