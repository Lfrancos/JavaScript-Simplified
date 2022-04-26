import items from '../items.json';

// select the items that you need.
const itemTemplate = document.querySelector('[data-item-template]');
const cartItemTemplate = document.querySelector('[data-cart-item]');
const elementsContainer = document.querySelector('#elements-container')
const cartItems = [];


// functions


export function createItem(item) {
    // create a duplicate of the template item
    const newItem = itemTemplate.content.cloneNode(true);

    const imageUrl = 'https://dummyimage.com/420x260/';

    // select the items that you need
    const image = newItem.querySelector('[data-image]');
    const name = newItem.querySelector('[data-name]');
    const category = newItem.querySelector('[data-category]');
    const price = newItem.querySelector('[data-price-cent]');

    // add the information of the item to the template duplicate
    image.src = `${imageUrl}${item.imageColor}/${item.imageColor}`;
    name.textContent = item.name;
    category.textContent = item.category;
    price.textContent = item.priceCents;

    const addToCart = newItem.querySelector('[data-add-to-cart]');
    addToCart.addEventListener('click', e => {
        console.log(e.target);
        const parent = e.target.closest('.parent');
        console.log(parent);

        const newCartItem = {
            name: parent.querySelector('[data-name]').textContent,
            price: parent.querySelector('[data-price-cent]').textContent,
            image: parent.querySelector('[data-image]').src,
            quantity: 1
        }
        // if (cartItems )
        cartItems.push(newCartItem);

        console.log(cartItems);
        addToLocalStorage(cartItems);
    })

    elementsContainer.appendChild(newItem);
}

function addToLocalStorage (data) {
    const stringData = JSON.stringify(data)
    localStorage.setItem('Cart Items', stringData);
}
function getFromLocalStorage () {
    localStorage.getItem('Cart Items');
}

export function createItemCart(itemCart) {
    const newItemcart = cartItemTemplate.content.cloneNode(true);
    const localStorage = getFromLocalStorage();
    

}

// Intl.NumberFormat()

export function loadInformation() {
    items.forEach(item => {
        createItem(item)

    })
}
