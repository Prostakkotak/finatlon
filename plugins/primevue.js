import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Toolbar from 'primevue/toolbar'
import Checkbox from 'primevue/checkbox'
import InputSwitch from 'primevue/inputswitch'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Password from 'primevue/password'
import OverlayPanel from 'primevue/overlaypanel'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import Menu from 'primevue/menu'
import Skeleton from 'primevue/skeleton'
import Sidebar from 'primevue/sidebar'
import DataTable from 'primevue/datatable'
import ProgressBar from 'primevue/progressbar'
import Column from 'primevue/column'
import CascadeSelect from 'primevue/cascadeselect'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import TreeSelect from 'primevue/treeselect'
import { defineNuxtPlugin } from '#app'
import DynamicDialog from 'primevue/dynamicdialog'
import Carousel from 'primevue/carousel'
import DialogService from 'primevue/dialogservice'
import TabMenu from 'primevue/tabmenu'
import Menubar from 'primevue/menubar'
import Tag from 'primevue/tag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })

  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('Toolbar', Toolbar)
  nuxtApp.vueApp.component('DynamicDialog', DynamicDialog)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Divider', Divider)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('InputSwitch', InputSwitch)
  nuxtApp.vueApp.component('Input', InputText)
  nuxtApp.vueApp.component('Checkbox', Checkbox)
  nuxtApp.vueApp.component('TabView', TabView)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Tab', TabPanel)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Select', Dropdown)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
  nuxtApp.vueApp.component('SidebarPopup', Sidebar)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Skeleton', Skeleton)
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('DataTableColumn', Column)
  nuxtApp.vueApp.component('CascadeSelect', CascadeSelect)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('TreeSelect', TreeSelect)
  nuxtApp.vueApp.component('ProgressBar', ProgressBar)
  nuxtApp.vueApp.component('TabMenu', TabMenu)

  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.use(DialogService)
})
