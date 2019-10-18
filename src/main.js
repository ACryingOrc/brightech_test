// MAIN IMPORT
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// LIBS IMPORT
import { LayoutPlugin } from 'bootstrap-vue'
import { TabsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps"
import { VueMaskDirective } from 'v-mask'
var VueScrollTo = require('vue-scrollto')
 
// В ДАЛЬНЕЙШЕМ ЛУЧШЕ ОТКАЗАТЬСЯ ОТ КОМПОНЕНТА ValidationProvider 
// ТАК КАК ОШИБКИ ДОЛЖНЫ ПРИХОДИТЬ С СЕРВЕРА. 
// ЭТОТ ФУНКЦИОНАЛ НЕ ИМЕЕТ СМЫСЛА НА ФРОНТЕ.

// ОН ЗДЕСЬ ПОТОМУ ЧТО В ЗАДАНИИ НАПИСАНО ВАЛИДИРОВАТЬ ФОРМУ, ОН УСЛОЖНЯЕТ АРХИТЕКТУРУ ВЕРСТКИ,
// ПРОЩЕ ПРОВЕРЯТЬ ПОЛЯ НА ПУСТОТУ, А ОШИБКИ ВЫВОДИТЬ С СЕРВЕРА.

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
Vue.component('ValidationProvider', ValidationProvider)

Vue.use(LayoutPlugin)
Vue.use(TabsPlugin)
Vue.use(VueScrollTo)
Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyCmUwELDWqVZ_1w-2TLIATA1iKh7lObquE' }
})

Vue.directive('mask', VueMaskDirective)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
