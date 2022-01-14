import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bio from '@/components/Bio'
import BioSection from '@/components/BioSection'
import Discog from '@/components/Discog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/bio-section',
      name: 'BioSection',
      component: BioSection
    },
    {
      path: '/discog',
      name: 'Discog',
      component: Discog
    }
  ]
})
