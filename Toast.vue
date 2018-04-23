<template>
  <div class="toast-body" :class="classObj">
    {{ content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  beforeMount() {
    let container = document.querySelector('.toast')
    if (!container) {
      container = document.createElement('div')
      container.className = 'toast'
      document.body.appendChild(container)
    }
    container.appendChild(this.$el)
  },
  computed: {
    classObj() {
      return {
        top: this.position.indexOf('top') > -1,
        bottom: this.position.indexOf('bottom') > -1,
        center: this.position.indexOf('center') > -1,
      }
    }
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
.toast-body
  margin: auto
  border: solid 1px black
  border-radius: 15px
  font-size: 14px
  color: black
  padding: 10px 20px
  position: absolute
  .bottom
    bottom: 10%
  .top
    top: 10%
</style>

