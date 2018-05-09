# nw-vue-toast
>yet another vue toast plugin

# how to use
## install
```bash
$ npm install --S nw-vue-toast
```
## import
```javascript
import ToastPlugin from 'nw-vue-toast'
Vue.use(Toast)
```
## use in component
```javascript
this.$toast('Test-Toast', {
  position: 'bottom center',
  showAnimation: 'fade-in',
  removeAnimation: 'fly-out-right',
  afterRemoved: function() {
    console.log("I'm removed!")
  },
})
//Config is optional
```
## more options to be added

## methods
```javascript
toast = this.$toast('Test-Toast')
toast.shake(n)  //Toast will virerate n times in 1 seoconds. By default n = 40
toast.cancelTimeout() //Toast will not disappear until automatically
toast.setNewTime(n) //Set a new timer for the toast in ms
toast.remove() //Toast will be removed (and the animation you choose still works)
toast.setContent(str) //Change content for the toast

```

# build on your own

```bash

# install dependencies
$ npm install

# run demo
$ npm start
// visit localhost:8080 to see demo

```
# how to get involved
open an issue or PR