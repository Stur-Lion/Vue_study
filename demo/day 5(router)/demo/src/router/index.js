import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import hi from '@/components/hi'
/*import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import Left from '@/components/left'
import Right from '@/components/right'*/
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/hi',
      name:'hi',
      component:hi,
      children:[
        {path:'/',name:'hi',component:hi},
        {path:'hi1',name:'hi1',component:hi1},
        {path:'hi2',name:'hi2',component:hi2},
      ]
    }*/
    /*{
      path:'/',
      name:Hello,
      component:Hello
    },
    {
      path:'/lion',
      name:Hello,
      components:{
        default :Hello,
        left:Left,
        right:Right
      }
    }*/
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/params/:id(\\d+)/:title',
      name:'params',
      component:Params
    }
  ]
})
