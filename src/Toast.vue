<template>
  <div class="toast-body" :class="classObj">
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
      default: 30000,
    },
    showAnimation: {
      type: String,
      default: 'fade-in'
    },
    removeAnimation: {
      type: String,
      default: 'fade-out'
    },
    customeCss: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  beforeMount() {
    let container = document.querySelector('.toast')
    if (!container) {
      container = document.createElement('div')
      container.className = 'toast'
      document.body.appendChild(container)
    }
    this.$el.style.opacity = 0
    for (let i in this.customeCss) {
      this.$el.style[i] = this.customeCss[i]
    }
    container.appendChild(this.$el)
  },
  mounted() {
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
      let container = document.querySelector('.toast')
      this.$el.classList.add(this.removeAnimation)
      console.log(this.$el.classList)
      this.$el.addEventListener('animationend', (e) => {
        if (e.type == 'animationend') {
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
  },
  name: 'Toast',
}
</script>

<style lang="stylus">
.toast
  top: 0
  left: 0
  right: 0
  bottom: 0
  position: absolute
  background-color: transparent
  align-items: center
  justify-content: center
  z-index: -1
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
  &.center
    left: 0
    right: 0
  &.left
    left: 0
    right: 50%
  &.right
    left: 50%
    right: 0
  &.bottom
    bottom: 100px
  &.top
    top: 100px
  &.middle
    top: 45%
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

