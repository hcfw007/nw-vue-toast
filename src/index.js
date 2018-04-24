import Toast from './Toast.vue'

var toastQueue = []
const DEFAULT = {

}

const ToastPlugin = {
  install(Vue, options) {

    this.config = DEFAULT
    for (let porperty in options) {
      this.config[property] = options[property]
    }

    Vue.prototype.$toast = function(str, type, force) {
      console.log('toasted')
      let ToastClass = Vue.extend(Toast)
      let toastComponent = new ToastClass({
        el: document.createElement('div'),
      })
      toastQueue.push(toastComponent)
    }

  }
}

export default ToastPlugin