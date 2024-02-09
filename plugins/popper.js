import Popper from 'vue3-popper'

/* Website: https://valgeirb.github.io/vue3-popper/ */
/* API: https://valgeirb.github.io/vue3-popper/guide/api.html */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Popper', Popper)
})
