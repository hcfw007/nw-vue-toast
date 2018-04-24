import Toast from './Toast.vue'

var toastQueue = []
const DEFAULT = {
  position: 'bottom center',
  time: 3000,
  showAnimation: 'fade-in',
  removeAnimation: 'fade-out',
}

const ToastPlugin = {
  install(Vue, options) {

    this.config = DEFAULT
    for (let porperty in options) {
      this.config[property] = options[property]
    }

    Vue.prototype.$toast = function(str, options, force) {
      options = options || {}
      for (let i in this.config) {
        if (!options[i]) {
          options[i] = this.config[i]
        }
      }
      options.content = str

      let ToastClass = Vue.extend(Toast)
      console.log(options)
      let toastComponent = new ToastClass({
        el: document.createElement('div'),
        propsData: options,
      })
      toastQueue.push(toastComponent)
    }

  }
}

export default ToastPlugin