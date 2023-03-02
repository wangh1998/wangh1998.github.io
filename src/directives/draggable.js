/*
 * @Description: 
 * @Date: 2023-03-02 16:22:20
 * @LastEditTime: 2023-03-02 16:42:59
 * @FilePath: /wangh1998.github.io/src/directives/draggable.js
 */
const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
        if (x > el.offsetParent.offsetWidth - el.offsetWidth) {
          x = el.offsetParent.offsetWidth - el.offsetWidth - 3
        }
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        if (y > el.offsetParent.offsetHeight - el.offsetHeight) {
          y = el.offsetParent.offsetHeight - el.offsetHeight - 3
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}
export default draggable