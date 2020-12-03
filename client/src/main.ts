import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'
import './global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  ElButton,
  ElRow,
  ElCol,
  ElAvatar,
  ElInput,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
} from 'element-plus'

import File from '@/components/File.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

const app = createApp(App)

app.component(ElButton.name, ElButton)
app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElAvatar.name, ElAvatar)
app.component(ElInput.name, ElInput)
app.component(ElBreadcrumb.name, ElBreadcrumb)
app.component(ElBreadcrumbItem.name, ElBreadcrumbItem)
app.component(ElDropdown.name, ElDropdown)
app.component(ElDropdownItem.name, ElDropdownItem)
app.component(ElDropdownMenu.name, ElDropdownMenu)

app.component(File.name, File)
app.component(Header.name, Header)
app.component(Sidebar.name, Sidebar)

app
  .use(store)
  .use(router)
  .mount('#app')
