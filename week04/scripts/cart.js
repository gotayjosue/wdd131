const products = [
    {id: 2401, name: 'Apples', price: 10},
    {id: 2402, name: 'Limes', price: 5},
    {id: 2403, name: 'Banana', price: 7},
    {id: 2404, name: 'Carrots', price: 11},
    {id: 2405, name: 'Bread', price: 12},
];

const productInput = document.querySelector('#product')

const addButton = document.querySelector('#add')

const productList = document.querySelector('#cart-list')

let cart = []

addButton.addEventListener('click', function(){

    const productValue = parseInt(productInput.value, 10)
    const product = products.find(item => item.id === productValue)

    if (product) {
        const cartItem = cart.find(item => item.id === product.id);

        if (cartItem){
            cartItem.quantity += 1;
        }else{
            cart.push({id: product.id, name: product.name, price: product.price, quantity: 1});
        }
        
        updateCart();
        productInput.value = ''
        focus()
        
    }

});

function updateCart(){

    productList.innerHTML = ''

    cart.forEach((item, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = `Cantidad: ${item.quantity} - ${item.name} - ${item.price * item.quantity}`
        const eraseButton = document.createElement('button')
        eraseButton.textContent = '❌'
        eraseButton.addEventListener('click', function(){
            cart.splice(index, 1)
            updateCart()
        })
        productList.appendChild(listItem);
        listItem.append(eraseButton)
    })
}

    //  if (product){
    //     const productList = document.querySelector('#cart-list')
    //     const item = document.createElement('li')
    //     const eraseButton = document.createElement('button')
    //     eraseButton.textContent = '❌'
    //     eraseButton.addEventListener('click', function(){
    //         productList.removeChild(item)
    //     })
    //     item.textContent = `${product.name} ${product.price}`
    //     productList.append(item)
    //     item.append(eraseButton)
    //     productInput.value = ''
    //  };

    // if (productValue != ''){
    //     const productList = document.querySelector('#cart-list')
    //     const item = document.createElement('li')
    //     const eraseButton = document.createElement('button')
    //     eraseButton.textContent = '❌'
    //     eraseButton.addEventListener('click', function(){
    //         productList.removeChild(item)
    //     })
    //     item.textContent = productValue
    //     productList.append(item);
    //     item.append(eraseButton)
    //     product.value = ''
    // }