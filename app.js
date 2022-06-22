/*
 * @Description: 
 * @Date: 2022-06-20 17:03:53
 * @LastEditTime: 2022-06-21 15:03:26
 * @FilePath: /vue2-project/app.js
 */
/**
 * 把平铺的数组结构转成树形结构
 */
console.time()
var data = [
  { 'id': '2d', 'pid': '2c', 'name': '财务核算部' },
  { 'id': '2c', 'pid': '', 'name': '财务部' },
  { 'id': '3d', 'pid': '2d', 'name': '核算一部' },
  { 'id': '4d', 'pid': '3d', 'name': '核算一部1' },
  { 'id': '5d', 'pid': '4d', 'name': '核算一部2' },
]

function transferDataToTree (data) {
  let result = [] // 最后的结果
  let map = {} // 映射关系

  data.forEach(v => {
    v.chlidren = []
    map[v.id] = v
    /**
     * map
     * 2c --> { 'id': '2c', 'pid': '', 'name': '财务部' } 
     * 2d --> { 'id': '2d', 'pid': '2c', 'name': '财务核算部' }
     * 
     * ...
     */
  })
  data.forEach(v => {

    let parent = map[v.pid]

    if (parent) {
      parent.chlidren.push(v)
    } else {
      result.push(v)
    }
  })
  return result
}

console.log(JSON.stringify(transferDataToTree(data)))

// function transferDataToTree (data) {
//   let mainOrg = []
//   for (let i = 0; i < data.length; i++) {
//     if (!data[i].pid) {
//       mainOrg.push({ ...data[i], children: [] })
//       data.splice(i, 1)
//       i--
//     }
//   }
//   const pushChildrenTree = mainOrg => {
//     for (let i = 0; i < mainOrg.length; i++) {
//       for (let j = 0; j < data.length; j++) {
//         if (data[j].pid === mainOrg[i].id) {
//           mainOrg[i].children.push({ ...data[j], children: [] })
//           pushChildrenTree(mainOrg[i].children)
//           data.splice(j, 1)
//           j--
//         }
//       }
//     }
//   }
//   pushChildrenTree(mainOrg)
//   return mainOrg
// }

// console.log(transferDataToTree(data))
console.timeEnd()