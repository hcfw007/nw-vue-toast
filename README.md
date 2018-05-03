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

# build on your own

```bash

# install dependencies
$ npm install

# run demo
$ npm run-script run-demo
// visit localhost:8080 to see demo

```
# how to get involved
open an issue or PR