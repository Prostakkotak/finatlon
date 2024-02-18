import { useMainStore } from '~/store/main'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: {
        main: useMainStore($pinia),
      },
    },
  }
})
