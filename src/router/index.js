import {createRouter, createWebHistory} from "vue-router";
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

const moviesPage = () => import('../views/moviesListPage.vue');
const moviePage = () => import('../views/movieDetailPage.vue');
const movieInfo = () => import('../components/movieInfo.vue');
const routes = [
    {
    path: '/' ,
    name: 'home',
    component: HomePage
    },
    {
        path: '/about' ,
        name: 'about',
        component: AboutPage
        },
        {
            path: '/films',
            name: 'films',
            component: moviesPage,
          },
        {
            path: '/films/:id',
            component: moviePage,
            props: true,
            children: [
              { path: '', name: 'film-info', component: movieInfo }
            ],
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes ,
});

export default router;
