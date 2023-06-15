import { createApp } from 'vue'
import App from './App.vue'
import uibuilderPlugin from './plugin/uiBuilderPlugin';
import router from './routes';

const app = createApp(App);

// use uibuilderPlugin
app.use(uibuilderPlugin, { 'nameSpace': '/vue3-app' });

app.use(router)

// mount app
app.mount('#app')
