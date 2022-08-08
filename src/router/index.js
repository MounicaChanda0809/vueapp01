import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldTest2 from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldTest2',
      component: HelloWorldTest2
    }
  ]
})
