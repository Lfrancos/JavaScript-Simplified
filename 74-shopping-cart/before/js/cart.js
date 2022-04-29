import items from '../items.json';
import { moneyFormatter } from './utils/moneyFormatter';

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
    deleteItemButtonListener();
 }

function cartButtonListener() {
    // add the ability to hide and open (toggle) the cart window every time you click the button
    cartButton.addEventListener('click', e => {
        cartAll.classList.toggle('invisible');
    })
}
function deleteItemButtonListener() {
    cartItemsContainer.addEventListener('click', e => {
        if (e.target.matches('[data-remove-from-cart-button]')) {
            const id = e.target.closest('[data-cart-id]').id;
            const item = cartData.find(i => i.id === id);
            console.log(item);
            const index = cartData.indexOf(item);
            console.log(index);
            cartData.splice(index,1)
            deleteCartContent();
            renderCartItems();
            countItemsOnCart();
        }
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
    const array = [];
    cartData.forEach(item => {
        array.push(item.quantity);
    })

    const sumAmountOfItems = array.reduce((a , c) => a + c , 0);
    displayAmountOfItems.textContent = sumAmountOfItems;
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
        console.log(typeof item.priceCents)
        price.textContent = moneyFormatter((item.priceCents / 100) * itemData.quantity)  ;
        // add the items to the cart container
        cartItemsContainer.appendChild(newItem);
    });
    sumPriceItemsOnCart();
    console.log(cartData);
}

function sumPriceItemsOnCart() {
    // const cartItemsPriceArray = cartItemsContainer.querySelectorAll('[data-cart-price-cent]');
    const newArray =[]

    cartData.forEach(item => {
        const price = items.find(i => i.id == item.id)
        newArray.push(price.priceCents * item.quantity);
    })
    const sumPrices = newArray.reduce((a,c) => Number(a) + Number(c), 0);
    cartTotal.textContent = moneyFormatter(sumPrices / 100);
}

    // make sure that the information is being added to the local storage.
// cart
// make sure you don't get duplicate items in the cart. if they are duplicate they should add to the quantity,

// add and event listener to the close button of each of the item added to the cart.



    // when clicked the item that you selected needs to be deleted
    // make sure that the item is deleted from the local storage (that way is going to be updated when I reload the page.)

// if you have not selected any item the button of the cart should not appear

// read what you have on local storage and update the cart. (this will help to make sure that if you change tabs the information that you have is always the same.)



