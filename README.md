# nw-vue-toast

[English](https://github.com/hcfw007/nw-vue-toast/blob/master/readme-en.md)

>又一个vue的提示插件

# 如何使用
## 使用包管理下载安装
```bash
$ npm install --S nw-vue-toast
```
## 使用模块管理引用
```javascript
import ToastPlugin from 'nw-vue-toast'
Vue.use(ToastPlugin[, options]) // options here will apply to all toasts
```
## 在组件中使用
```javascript
this.$toast('Test-Toast'[, options]}) // options here will apply to only this toast
```
## 可用的选项
| 名称 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| position | 提示框的位置[1] | String | 'bottom center' |
| content | 提示的内容，可以使用HTML | String | 'toast' |
| time | 提示的持续时间，单位：毫秒（ms） | Integer | 3000 |
| showAnimation | 提示出现时的动画效果[2] | String | 'fade-in' |
| removeAnimation | 提示消失时的动画效果[3] | String | 'fade-out' |
| customCss | 用户自定义的css[4], 形式为JavaScript对象 | Object | null |
| customClass | 将会赋予提示栏的class[5] | String | "" |
| afterRemoved | 在提示消失后进行回调 | Function | null |

[1] 内置的位置包括['top', 'bottom', 'middle']之一加上['left', 'center', 'right']之一, 例如. 'top center'. 也可以传入空字符串然后在customCss中进行具体设置。
<br>
[2][3] 内置的进入动画包括['fade-in', 'fly-in-left', 'fly-in-right', 'fly-in-top', 'fly-in-bottom']; 内置的离场动画包括['fade-out', 'fly-out-left', 'fly-out-right', 'fly-out-top', 'fly-out-bottom']
<br>
[4] 例如 {'background-color': 'black', 'color': 'white'}
<br>
[5] 例如 "toast-class1 toast-class2"

## 方法
```javascript
toast = this.$toast('Test-Toast')
toast.shake(n)  //提示框将会在一秒内抖动n次，默认值为40
toast.cancelTimeout() //取消自动的消失计时
toast.setNewTime(n) //新建消失计时，单位为毫秒（ms）
toast.remove() //提示会立刻以创建时选择的离场方式关闭
toast.setContent(str) //改变提示的内容
```

# 运行demo

```bash

# 安装依赖
$ npm install

# 运行demo
$ npm start
// visit localhost:8080 to see demo

```