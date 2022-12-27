import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue';
import DashboardView from '../views/DashboardView.vue';
import FavoriteView from '../views/FavoriteView.vue';
import TrashView from '../views/TrashView.vue';
import ProfileView from '../views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component: LandingView,
      meta : {
        title: 'Free Cloud Storage | Panalama'
      },
      metaTags : [
        {
          name : 'description',
          content: 'The most luminous cloud storage application in the century!'
        }
      ]
    },
    {
      path: '/signin',
      name : 'sign in',
      component: SignInView,
      meta : {
        title: 'Sign In | Panalama'
      },
      metaTags:[
        {
          name : 'description',
          content: 'Try the app for free'
        }

      ]
     
    },
    {
      path: '/signup',
      name : 'sign up',
      component: SignUpView,
      meta : {
        title : 'Create your account | Panalama'
      },
      metaTags : [
        {
          name : 'description',
          content: 'Create your account for free!'
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta : {
        title : 'Dashboard '
      }
     
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    },
    {
      path: '/trash',
      name: 'trash',
      component: TrashView,
      meta: {
        title : 'Trash '
      }
    },
    {
      path:'/profile',
      name : 'Profile',
      component: ProfileView,
      meta : {
        title : 'Info '
      }
    }

    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'exact-route'
})
router.beforeEach((to,from) => {
  if(to.meta.title) {
    document.title = to.meta.title || 'Panalama';
  }
})


export default router
