import { createWebHistory, createRouter } from "vue-router";
import FAQ from "@/components/FAQ.vue";

const routes = [
    {
        path: "/",
        name: "FAQ",
        component: FAQ,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
