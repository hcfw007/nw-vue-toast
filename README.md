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
Vue.use(Toast[, options]) // options here will apply to all toasts
```
## use in component
```javascript
this.$toast('Test-Toast'[, options]}) // options here will apply to only this toast
```
## available options
| Name | Description | Type | Default Value |
| - | - | - | - |
| position | position of the toast[1] | String | 'bottom center' |
| content | content of the toast, HTML compatible | String | 'toast' |
| time | duration of the toast in ms | Integer | 3000 |
| showAnimation | animation when the toast appers[2] | String | 'fade-in' |
| removeAnimation | animation when the toast disappears[3] | String | 'fade-out' |
| customCss | your own css in json-object[4] | Object | null |
| customClass | classes to be assign to the toast[5] | String | "" |
| afterRemoved | callback after the toast disappears | Function | null |

[1] Built in position = choose one from ['top', 'bottom', 'middle'] and another one from ['left', 'center', 'right'], eg. 'top center'. You can also pass empty string and define position in customCss
<br>
[2][3] Built in showAnimation including ['fade-in', 'fly-in-left', 'fly-in-right', 'fly-in-top', 'fly-in-bottom']; Built in showAnimation including ['fade-out', 'fly-out-left', 'fly-out-right', 'fly-out-top', 'fly-out-bottom']
<br>
[4] eg. {'background-color': 'black', 'color': 'white'}
<br>
[5] eg. "toast-class1 toast-class2"

## methods
```javascript
toast = this.$toast('Test-Toast')
toast.shake(n)  //Toast will virerate n times in 1 seoconds. By default n = 40
toast.cancelTimeout() //Toast will not disappear until automatically
toast.setNewTime(n) //Set a new timer for the toast in ms
toast.remove() //Toast will be removed immediately(and the animation you choose still works)
toast.setContent(str) //Change content for the toast
```
more methods to be added

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