import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        console.log(to)
        console.log(savedPosition)
        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo, { duration: 1000, offset: 75, easing: 'easeInOutCubic' })
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
