import _ from 'lodash'
import style from './index.scss'
import './clearButton'

const button = document.getElementById('buttonClick')

button.addEventListener('click', function () {
  const element = document.getElementById('h1_element')

  element.innerHTML = 'Button Clicked!'

  const listFruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']

  const ul = document.getElementById('shoppingList')

  _.forEach(listFruits, function (fruit) {
    const li = document.createElement('li')
    li.innerHTML = fruit
    ul.appendChild(li)
  })
})
button.classList.add([style.button])
