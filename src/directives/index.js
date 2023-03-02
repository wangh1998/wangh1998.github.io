/*
 * @Description: 
 * @Date: 2023-03-02 16:21:07
 * @LastEditTime: 2023-03-02 16:22:51
 * @FilePath: /wangh1998.github.io/src/directives/index.js
 */
import draggable from './draggable'
// 自定义指令
const directives = {
  draggable,
}

export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}