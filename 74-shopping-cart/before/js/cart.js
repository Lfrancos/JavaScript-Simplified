import items from '../items.json';

// //  IMPORTANT  you need to make sure that all the information that you are adding to the cart is saved to local storage.

const cartButton = document.querySelector('[data-cart-button]');
const cartAll = document.querySelector('[data-cart]');
// const cartContainer = document.querySelector('[data-cart-container]');
const cartItemsContainer = document.querySelector('[data-cart-items-container]');
const displayAmountOfItems = document.querySelector('[data-amount-of-items]');
let cartCountItems = cartItemsContainer.childElementCount;
const cartItemTemplate = document.querySelector('[data-cart-item-template]');
const cartTotal = document.querySelector('[data-cart-total]');
export const cartData = [];



export function cartSetup() {
    // Hide the cart button if it has no items inside.
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
    const duplicatedCartItem = cartData.find(item => item.id === id);
    if (!duplicatedCartItem) {
        const itemObject = {
            id: id,
            quantity: 1
        }

        cartData.push(itemObject);
    } else {

        duplicatedCartItem.quantity++

    }

    renderCartItems();
    countItemsOnCart();
}

function countItemsOnCart() {
    displayAmountOfItems.textContent = cartData.length;
}

function deleteCartContent() {
    cartItemsContainer.innerHTML = '';
}

function renderCartItems() {
    deleteCartContent();
    cartData.forEach(itemData => {
        const item = items.find( i => i.id == itemData.id);

        const newItem = cartItemTemplate.content.cloneNode(true);

        const imageUrl = 'https://dummyimage.com/210x130/';
        // // add the information of the item to the template duplicate
        const id = newItem.querySelector('[data-cart-id]');
        id.id = item.id;

        const image = newItem.querySelector('[data-cart-image]');
        image.src = `${imageUrl}${item.imageColor}/${item.imageColor}`;

        const name = newItem.querySelector('[data-cart-name]');
        name.textContent = item.name;

        if (itemData.quantity > 1) {
            const quantity = newItem.querySelector('[data-cart-quantity]');
            quantity.textContent = `x${itemData.quantity}`;
        }

        const price = newItem.querySelector('[data-cart-price-cent]');
        price.textContent = item.priceCents * itemData.quantity;
        // add the items to the cart container
        cartItemsContainer.appendChild(newItem);
    });
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
// make sure you don't get duplicate items in the cart. if they are duplicate they should add to the quantity,

// add and event listener to the close button of each of the item added to the cart.



    // when clicked the item that you selected needs to be deleted
    // make sure that the item is deleted from the local storage (that way is going to be updated when I reload the page.)

// if you have not selected any item the button of the cart should not appear

// read what you have on local storage and update the cart. (this will help to make sure that if you change tabs the information that you have is always the same.)



