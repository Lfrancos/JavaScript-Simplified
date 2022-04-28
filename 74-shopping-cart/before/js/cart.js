import items from '../items.json';

// //  IMPORTANT  you need to make sure that all the information that you are adding to the cart is saved to local storage.

const cartButton = document.querySelector('[data-cart-button]');
const cartAll = document.querySelector('[data-cart]');
const cartContainer = document.querySelector('[data-cart-container]');
const cartItemsContainer = document.querySelector('[data-cart-items-container]');
const displayAmountOfItems = document.querySelector('[data-amount-of-items]');
let cartCountItems = cartItemsContainer.childElementCount;
const cartItemTemplate = document.querySelector('[data-cart-item-template]');
const cartTotal = document.querySelector('[data-cart-total]');
const cartData = [];



export function cartSetup() {
    // Hide the cart button if it has no items inside.
    if (cartData.length == 0) {
        cartButton.classList.add('invisible');
    }
    // create an event listener to the cart button
    cartButtonListener();

}

function cartButtonListener() {
    // add the ability to hide and open (toggle) the cart window every time you click the button
    cartButton.addEventListener('click', e => {
        cartAll.classList.toggle('invisible');
    })
}

export function addItemToCartData(id) {

    const itemObject = {
        id: id,
        quantity: 1
    }

    cartData.push(itemObject);

    countItemsOnCart();
    // make the cart button appear if it has items inside.
    if (cartData.length > 0) {
        cartButton.classList.remove('invisible');
    }


}

function countItemsOnCart() {
    displayAmountOfItems.textContent = cartData.length;
}

export function deleteCartContent() {
    cartItemsContainer.innerHTML = '';
}

export function renderCartItems() {
    cartData.forEach(itemData => {
        // console.log(items);
        // console.log(itemData);
        const item = items.find( i => i.id == itemData.id);
        console.log(item);

        const newItem = cartItemTemplate.content.cloneNode(true);

        const imageUrl = 'https://dummyimage.com/210x130/';


        // // add the information of the item to the template duplicate

        const id = newItem.querySelector('[data-cart-id]');
        id.id = item.id;

        const image = newItem.querySelector('[data-cart-image]');
        image.src = `${imageUrl}${item.imageColor}/${item.imageColor}`;

        const name = newItem.querySelector('[data-cart-name]');
        name.textContent = item.name;

        // const quantity = newItem.querySelector('[data-cart-quantity]');
        // // category.textContent = item.category;

        const price = newItem.querySelector('[data-cart-price-cent]');
        price.textContent = item.priceCents;



        cartItemsContainer.appendChild(newItem);
    })

    sumPriceItemsOnCart();
}

function sumPriceItemsOnCart() {
    const cartItemsPriceArray = cartItemsContainer.querySelectorAll('[data-cart-price-cent]');
    const newArray =[]
    cartItemsPriceArray.forEach(div => {
        newArray.push(div.innerHTML);
    })
    const sumPrices = newArray.reduce((a,c) => Number(a) + Number(c), 0);
    cartTotal.textContent = sumPrices;
}

    // make sure that the information is being added to the local storage.
// cart
// Make sure the total is the sum of the price of all the items inside of the cart.
// add and event listener to the close button of each of the item added to the cart.
    // when clicked the item that you selected needs to be deleted
    // make sure that the item is deleted from the local storage (that way is going to be updated when I reload the page.)

// if you have not selected any item the button of the cart should not appear

// read what you have on local storage and update the cart. (this will help to make sure that if you change tabs the information that you have is always the same.)



