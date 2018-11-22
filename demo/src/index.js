import Vue from 'vue'
import App from './App.vue'
import ToastPlugin from '../../dist/nw-vue-toast'

console.log(ToastPlugin)

Vue.use(ToastPlugin)

new Vue({
    render(h) {
        return h('App')
    },
    components: {
        App,
    },
    el: '#app',
})