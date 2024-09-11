let modalQt = 1
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
        modalQt = 1

        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        c('.pizzaBig img').setAttribute('src', `${pizzaJson[key].img}`)
        c('.pizzaInfo h1').innerHTML = `${pizzaJson[key].name}`
        c('.pizzaInfo--actualPrice').innerHTML = `${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--desc').innerHTML = `${pizzaJson[key].description}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=> {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }


            size.querySelector('span').innerHTML = `${pizzaJson[key].sizes[sizeIndex]}`

            c('.pizzaInfo--qt').innerHTML = modalQt
            
        })


        c('.pizzaWindowArea').style.opacity = '0'
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
         c('.pizzaWindowArea').style.opacity = '1'
        }, 200)

    })
    c('.pizza-area').append(pizzaItem)

})



//Funções
function closeModal() {
    c('.pizzaWindowArea').style.opacity = '0'
    setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none'
       }, 200)
}
  cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> {
    item.addEventListener('click', closeModal)
  })