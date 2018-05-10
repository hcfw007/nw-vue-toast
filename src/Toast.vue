<template>
  <div class="toast-body" :style="styleObj" :class="classObj" v-html='content'>
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
    afterRemoved: {
      type: Function,
      default: undefined,
    },
    displayMethod: {
      type: String,
      default: "default"
    },
    customeClass: {
      type: String,
      default: "",
    },
  },
  mounted() {
    for (let i in this.customCss) {
      this.$el.style[i] = this.customCss[i]
    }
    if (!this.customCss.top && !this.customCss.bottom && this.displayMethod == 'default') {
      let classSelector = '.toast-body.' + this.position.split(" ").join(".")
      let siblings = document.querySelectorAll(classSelector)
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] != this.$el && parseInt(siblings[i].style.top) == parseInt(this.$el.style.top)) {
          this.$el.style.top = parseInt(this.$el.style.top) + 50 + "px"
        }
        if (siblings[i] != this.$el && parseInt(siblings[i].style.bottom) == parseInt(this.$el.style.bottom)) {
          this.$el.style.bottom = parseInt(this.$el.style.bottom) + 50 + "px"
        }
      }
    }
    this.show()
  },
  destroyed() {
    if (this.afterRemoved) {
      try {
        this.afterRemoved()
      } catch (error) {
        console.log(error)
      }
    }
  },
  methods: {
    show() {
      if (this.showAnimation != "none") {
        this.$el.classList.add(this.showAnimation)
        let addRemove = (e) => {
          if (e.type == 'animationend') {
            this.$el.removeEventListener('animationend', addRemove, false)
            this.$el.classList.remove(this.showAnimation)
            this.timeoutCounter = setTimeout(() => {
              this.remove()
            }, this.time)
          }
        }
        this.$el.addEventListener('animationend', addRemove, false)
      } else {
        this.$el.style.opacity = 1
        this.timeoutCounter = setTimeout(() => {
          this.remove()
        }, this.time)
      }
    },
    remove() {
      let container = document.getElementById('nw-toast-container')
      if (this.removeAnimation != "none") {
        this.$el.classList.add(this.removeAnimation)
        this.$el.addEventListener('animationend', (e) => {
          if (e.type == 'animationend') {
            this.$destroy(this) //to trigger Vue destroy method to remove all hooks and listeners 
            container.removeChild(this.$el)
          }
        })
      } else {
        this.$destroy(this)
        container.removeChild(this.$el)
      }
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
    shake(times = 40) {
      let originTop = parseInt(this.$el.style.top)
      let originLeft = parseInt(this.$el.style.left)
      let originBottom = parseInt(this.$el.style.bottom)
      let _shake = (timer) => {
        if (timer <= 0) {
          if (originTop != NaN) {
            this.$el.style.top = originTop + 'px'
          } else {
            this.$el.style.bottom = originBottom + 'px'
          }
          this.$el.style.left = originLeft + 'px'
          return
        }
        let horizontalOffset = Math.floor(Math.random() * 21) - 10
        let verticalOffert = Math.floor(Math.random() * 11) - 5
        if (originTop != NaN) {
          this.$el.style.top = originTop + verticalOffert + 'px'
        } else {
          this.$el.style.bottom = originBottom + verticalOffert + 'px'
        }
        this.$el.style.left = originLeft + horizontalOffset + 'px'
        timer --
        setTimeout(() => {_shake(timer)}, 1000 / times)
      }
      _shake(times)
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
      let customClassStr = this.customeClass
      let customClasses = customClassStr.split[' ']
      for (let i in customClasses) {
        t[customClasses[i]] = true
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
    animation: fade-in 1s
  &.fade-out
    animation: fade-out 1s
  for direction in left right top bottom
    &.fly-in-{direction}
      animation: fly-in- + direction 2s
    &.fly-out-{direction}
      animation: fly-out- + direction 2s

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: default
@keyframes fade-out
  0%
    opacity: default
  100%
    opacity: 0
for direction in left right top bottom
  @keyframes fly-in-{direction}
    0%
      {direction}: -150%
    100%
      {direction}: default
  @keyframes fly-out-{direction}
    0%
      {direction}: default
    100%
      {direction}: -150%
</style>

