const c = (el) => {
    return document.querySelector(el)
}
const cs = (el) => {
    return document.querySelectorAll(el)
}


pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price.toFixed(2)
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--img img').setAttribute('src', item.img)
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        c('.pizzaWindowArea').style.opacity = '0'
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
         c('.pizzaWindowArea').style.opacity = '1'
        }, 1+50)
    })
    c('.pizza-area').append(pizzaItem)
})