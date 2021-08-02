import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/profile",
        name: "Profile",
        component: UserProfile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;