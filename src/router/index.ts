import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@views/HomeView.vue'
import EventDetail from '@views/event/Detail.vue'
import EventLayout from '@views/event/Layout.vue'
import EventRegister from '@views/event/Register.vue'
import EventEdit from '@views/event/Edit.vue'
import NotFound from '@views/NotFoundView.vue'
import NetworkError from '@views/NetworkErrorView.vue'

const routes = [
    { 
        path: '/' ,
        name: 'Home',
        component: HomeView,
        props: (route: any) => ({page: parseInt(route.query.page) || 1})
    },
    { 
        path: '/events/:id' ,
        name: 'EventLayout',
        props: (route: any) => ({id: Number(route.params.id)}),
        component: EventLayout,
        children: [
            { 
                path: '' ,
                name: 'EventDetail',
                component: EventDetail,
            },
            { 
                path: 'register' ,
                name: 'EventRegister',
                component: EventRegister,
            },
            { 
                path: 'edit' ,
                name: 'EventEdit',
                component: EventEdit,
            },
        ]
    },
    {
        path: '/event/:afterEvent(.*)',
        redirect: (to: any) => {
            return { path: '/events/' + to.params.afterEvent} 
        },
    },
    { 
        path: '/about-us',
        name: 'About',
        component: () => import('@views/AboutView.vue')
    },
    {
        path: '/about',
        redirect: {name: 'About'}
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetworkError
    },
    {
        path: '/:cathAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})