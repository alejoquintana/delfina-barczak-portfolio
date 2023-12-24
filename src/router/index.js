import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/redacciones',
            name: 'redacciones',
            component: () => import('../views/RedaccionesView.vue')
        },
        {
            path: '/curiosidades-sobre-mi',
            name: 'curiosidades-sobre-mi',
            component: () => import('../views/CuriosidadesSobreMiView.vue')
        },
        {
            path: '/producciones-audiovisuales',
            name: 'producciones-audiovisuales',
            component: () => import('../views/ProduccionesAudiovisualesView.vue')
        },
        {
            path: '/actividades',
            name: 'actividades',
            component: () => import('../views/ActividadesView.vue')
        },
        {
            path: '/publicaciones-argentina',
            name: 'publicaciones-argentina',
            component: () => import('../views/PublicacionesArgentinaView.vue')
        }
    ]
})

export default router
