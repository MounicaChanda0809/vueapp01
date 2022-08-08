import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldTest from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldTest',
      component: HelloWorldTest
    }
  ]
})
