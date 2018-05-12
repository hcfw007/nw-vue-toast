import Vue from 'vue'
import App from './App.vue'
import ToastPlugin from '../../src/index.js'

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