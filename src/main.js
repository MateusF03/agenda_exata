import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";     
import "primevue/resources/primevue.min.css";


const app = createApp(App);
app.use(PrimeVue);
app.mount("#app")