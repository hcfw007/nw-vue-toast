<template>
  <div class="toast-body" :style="styleObj" :class="classObj">
    {{ content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeoutCounter: null,
    }
  },
  props: {
    position: {
      type: String,
      default: 'bottom center',
    },
    content: {
      type: String,
      default: 'toast'
    },
    time: {
      type: Number,
      default: 3000,
    },
    showAnimation: {
      type: String,
      default: 'fade-in'
    },
    removeAnimation: {
      type: String,
      default: 'fade-out'
    },
    customCss: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  beforeMount() {
    // let container = document.getElementById('nw-toast-container')
    // if (!container) {
    //   container = document.createElement('div')
    //   container.id = 'nw-toast-container'
    //   container.style.position = 'absolute'
    //   container.style.backgroundColor = 'transparent'
    //   container.style.alignItems = 'center'
    //   container.style.justifyContent = 'center'
    //   container.style.zIndex = '-1'
    //   container.style.top = 0
    //   container.style.bottom = 0
    //   container.style.left = 0
    //   container.style.right = 0
    //   document.body.appendChild(container)
    // }
    this.$el.style.opacity = 0
    //container.appendChild(this.$el)
  },
  mounted() {
    for (let i in this.customCss) {
      this.$el.style[i] = this.customCss[i]
    }
    this.show()
  },
  methods: {
    show() {
      this.$el.classList.add(this.showAnimation)
      let addRemove = (e) => {
        if (e.type == 'animationend') {
          this.$el.removeEventListener('animationend', addRemove, false)
          this.timeoutCounter = setTimeout(() => {
            this.remove()
          }, this.time)
        }
      }
      this.$el.addEventListener('animationend', addRemove, false)
    },
    remove() {
      let container = document.getElementById('nw-toast-container')
      this.$el.classList.add(this.removeAnimation)
      console.log(this.$el.classList)
      this.$el.addEventListener('animationend', (e) => {
        if (e.type == 'animationend') {
          this.$destroy(this) //to trigger Vue destroy method to remove all hooks and listeners 
          container.removeChild(this.$el)
        }
      })
    },
    changeContent(content) {
      this.content = content
    },
    cancelTimeout() {
      if (this.timeoutCounter) {
        clearTimeout(this.timeoutCounter)
      }
    },
    setNewTime(time) {
      this.cancelTimeout()
      this.time = time
      this.timeoutCounter = setTimeout(() => {
        this.remove()
      }, this.time)
    },
  },
  computed: {
    classObj() {
      let t = {
        top: this.position.indexOf('top') > -1,
        bottom: this.position.indexOf('bottom') > -1,
        center: this.position.indexOf('center') > -1,
        left: this.position.indexOf('left') > -1,
        right: this.position.indexOf('right') > -1,
        middle: this.position.indexOf('middle') > -1,
      }
      return t
    },
    styleObj() {
      let t = {}
      if (this.position.indexOf('top') > -1) {
        t.top = '100px'
      }
      if (this.position.indexOf('bottom') > -1) {
        t.bottom = '100px'
      }
      if (this.position.indexOf('middle') > -1) {
        t.top = '400px'
      }
      if (this.position.indexOf('left') > -1) {
        t.left = '0'
        t.right = '60%'
      }
      if (this.position.indexOf('right') > -1) {
        t.left = '60%'
        t.right = '0'
      }
      if (this.position.indexOf('center') > -1) {
        t.left = '0'
        t.right = '0'
      }
      return t
    },
  },
  name: 'Toast',
}
</script>

<style lang="stylus" scoped>
.toast-body
  margin: auto
  border-radius: 15px
  font-size: 14px
  color: #ffffff
  background-color: #c0c0c0 
  padding: 10px 20px
  position: absolute
  width: 20%
  text-align: center
  z-index: 999
  &.fade-in
    animation fade-in 1s
  &.fade-out
    animation fade-out 1s

@keyframes fade-in
  0%
    opacity: 0
  50%
    opacity: 0.5
  100%
    opacity: 1
@keyframes fade-out
  0%
    opacity: 1
  50%
    opacity: 0.5
  100%
    opacity: 0
</style>

