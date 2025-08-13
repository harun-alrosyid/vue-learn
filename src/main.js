import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionComponent from './components/OptionComponent.vue'

const app = createApp(App)

// register components global
app.component("CompositionComponent", CompositionComponent)
app.component("OptionComponent", OptionComponent)

app.mount('#app')

