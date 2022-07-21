import {createRouter, createWebHistory} from "vue-router";
import Home from "./../views/Home.vue";
import sourceData from "./../data.json";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/login", name: "login", component: () => import("./../views/Login.vue")},
    {
        path: "/protected",
        name: "protected",
        component: () => import("./../views/Protected.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/destination/:slug",
        name: "destination.show",
        component: () => import("./../views/DestinationShow.vue"),
        props: true,
        beforeEnter(to) {
            const destinationExists = sourceData.destinations.find(destination => destination.slug === to.params.slug);
            if (!destinationExists) {
                return {
                    name: "NotFound",
                    params: {pathMatch: to.path.split("/").slice(1)},
                    query: to.query,
                    hash: to.hash
                }
            }
        },
        children: [
            {
                path: ":experienceSlug",
                name: "experience.show",
                component: () => import("./../views/ExperienceShow.vue"),
                props: true,
                beforeEnter(to) {
                    const destinationExists = sourceData.destinations.find(destination => destination.slug === to.params.slug);
                    let experienceExists = null;
                    if (destinationExists) {
                        experienceExists = destinationExists.experiences.find(experience => experience.slug === to.params.experienceSlug);
                    }
                    if (!destinationExists || !experienceExists) {
                        return {
                            name: "NotFound",
                            params: {pathMatch: to.path.split("/").slice(1)},
                            query: to.query,
                            hash: to.hash
                        }
                    }
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("./../views/NotFound.vue")
    }
    // {
    //     path: "/destination/:slug/:experienceSlug",
    //     name: "experience.show" ,
    //     component: () => import("./../views/ExperienceShow.vue"),
    //     props: true,
    // }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0, behavior: "smooth"}), 300);
        });
    },
    linkActiveClass: "vue-school-active-link"
});
router.beforeEach((to) => {
    if (to.meta.requiresAuth && !window.user) {
        return {name: "login"};
    }
});
export default router;
