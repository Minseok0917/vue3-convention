import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 };
    },
});

// 페이지 접근 제어
router.beforeEach((to, from, next) => {
    next();
});

export default router;
