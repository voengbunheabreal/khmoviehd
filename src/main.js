import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);
app.use(router);
app.mount('#app');
// In your API routes
res.setHeader('Access-Control-Allow-Origin', 'https://your-vercel-app.vercel.app');
res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');