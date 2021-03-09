import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import FilmsGhibli from '../views/FilmsGhibli.vue'
import PeopleGhibli from '../views/PeopleGhibli.vue'




Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/filmsGhibli',
    name: 'FilmsGhibli',
    component: FilmsGhibli,
    props: true,
    children: [
      {
        name: 'peopleGhibli',
        path: ':peopleghibli',
        component: PeopleGhibli

      }
    ]
  },

  
]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
})

export default router
