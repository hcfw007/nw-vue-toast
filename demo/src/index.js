import Vue from 'vue'
import App from './App.vue'
import ToastPlugin from '../../index.js'

console.log('test')

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