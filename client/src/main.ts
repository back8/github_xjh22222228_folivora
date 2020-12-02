import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'

const app = createApp(App)

app.component(ElButton.name, ElButton)

app
  .use(store)
  .use(router)
  .mount('#app')
