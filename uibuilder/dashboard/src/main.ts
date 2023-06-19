import { createApp } from 'vue'
import GitsUi from '@morpheme/ui'
import App from './App.vue'
import uibuilderPlugin from './plugin/uiBuilderPlugin'
import router from './routes'
import './assets/index.css'
import './assets/global.scss'

import '@morpheme/ui/styles.scss'

const app = createApp(App)

// use uibuilderPlugin
app.use(uibuilderPlugin, { nameSpace: '/vue3-app' })

app.use(router)
app.use(GitsUi)

// mount app
app.mount('#app')
