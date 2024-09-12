let modalQt = 1
let cart = []
let modalKey = 0
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

        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1
        modalKey = key



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
  c('.pizzaInfo--qtmais').addEventListener('click', ()=> {
    c('.pizzaInfo--qt').innerHTML = modalQt += 1
  })
  c('.pizzaInfo--qtmenos').addEventListener('click', ()=> {
    if(modalQt > 1) {
        c('.pizzaInfo--qt').innerHTML = modalQt -= 1
    }

  })

  cs('.pizzaInfo--size').forEach((size, sizeIndex)=> {
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
  })
    c('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = c('.pizzaInfo--size.selected').getAttribute('data-key')

    let identifier = pizzaJson[modalKey].id+'@'+size
    let key = cart.findIndex((item) =>item.identifier==identifier)
        if(key > -1) {
            cart[key].qt += modalQt
        } else {
            cart.push({
                identifier,
                id:pizzaJson[modalKey].id,
                size,
                qt:modalQt
            })
    }

    console.log(cart)
    closeModal()
  })