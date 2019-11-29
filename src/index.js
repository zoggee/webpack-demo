// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = 'xinzeng'
// document.body.appendChild(btn)
// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

import counter from './counter'
import number from './number'

counter();
number();

// css-loader内置了下面类似的代码编写 vue也一样
if(module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}