import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import App from '@/App.vue'
import '@/index.css'


library.add(faSearch)

//builder pattern to cofiguring global access the FontAwesome faSearch icon library
createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
