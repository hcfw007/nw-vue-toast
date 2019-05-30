import Toast from './Toast.vue'

const DEFAULT = {
  position: 'bottom center',
  time: 3000,
  showAnimation: 'fade-in',
  removeAnimation: 'fade-out',
}

const toastPlugin = {
  install(Vue, options) {
    let container = document.getElementById('nw-toast-container')
    if (!container) {
      container = document.createElement('div')
      container.id = 'nw-toast-container'
    }
    container.style.position = 'absolute'
    container.style.backgroundColor = 'transparent'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    container.style.zIndex = '-1'
    container.style.top = 0
    container.style.bottom = 0
    container.style.left = 0
    container.style.right = 0
    container.style.overflow = 'hidden'
    document.body.appendChild(container)
    this.container = container
    this.config = DEFAULT
    for (let property in options) {
      this.config[property] = options[property]
    }

    Vue.prototype.$toast = (str, options, type) => {
      options = options || {}
      for (let i in this.config) {
        if (!options[i]) {
          options[i] = this.config[i]
        }
      }
      options.content = str
      let componentContainer = document.createElement('div')
      this.container.appendChild(componentContainer)
      let ToastClass = Vue.extend(Toast)
      let toastComponent = new ToastClass({
        el: componentContainer,
        propsData: options,
      })

      return toastComponent
    }

  }
}

export default toastPlugin