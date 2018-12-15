import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Formio from 'formiojs'

Vue.use(VueI18n);

import {
  messages
} from 'vue-bootstrap4-calendar';
import 'formiojs/dist/formio.form.min.css'
import 'formiojs/dist/formio.full.css'
import 'bootstrap/dist/css/bootstrap.min.css'

window.i18n = new VueI18n({
  locale: 'en',
  messages
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
