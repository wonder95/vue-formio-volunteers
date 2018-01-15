import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DutyShifts from '@/components/DutyShifts'
import Event from '@/components/Event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shifts',
      name: 'DutyShifts',
      component: DutyShifts
    },
    {
      path: '/events',
      name: 'Event',
      component: Event
    }
  ]
})
