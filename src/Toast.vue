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
      default: 3000,
    },
    showAnimation: {
      type: String,
      default: 'fade-in'
    },
    removeAnimation: {
      type: String,
      default: 'fade-out'
    }
  },
  beforeMount() {
    let container = document.querySelector('.toast')
    if (!container) {
      container = document.createElement('div')
      container.className = 'toast'
      document.body.appendChild(container)
    }
    this.$el.style.opacity = 0
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
  text-align: center
  z-index: -1
.toast-body
  margin: auto
  border: solid 1px black
  border-radius: 15px
  font-size: 14px
  color: black
  padding: 10px 20px
  position: absolute
  width: 20%
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
    bottom: 15%
  &.top
    top: 15%
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

