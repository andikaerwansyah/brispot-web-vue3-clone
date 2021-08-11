import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

/**Sweet Alert */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak"

};

const app = createApp(App)
app.use(VueSweetalert2, options);
app.use(router);
app.mount('#app');