import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DutyShifts from '@/components/DutyShifts'
import Event from '@/components/Event'
import Shift from '@/components/Shift'
import Auth from '@/components/Auth'
import Volunteer from '@/components/Volunteer'

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
    },
    {
      path: '/volunteer',
      name: 'Volunteer',
      component: Volunteer
    },
    {
      path: '/add-shifts',
      name: 'Shift',
      component: Shift
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth
    }
  ]
})
