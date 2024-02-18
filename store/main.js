import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    elements: [],
  }),
  actions: {
    setElements(value) {
      this.elements = value
    },
  },
})
