import Vue from 'vue'
import App from './App.vue'
import ToastPlugin from '../../dist/nw-vue-toast'

Vue.use(ToastPlugin, {
    position: 'top center'
})

new Vue({
    render(h) {
        return h('App')
    },
    components: {
        App,
    },
    el: '#app',
})