import  cartItems  from './store.js';


//  IMPORTANT  you need to make sure that all the information that you are adding to the cart is saved to local storage.

const cartButton = document.querySelector('[data-cart-button]');
const cartContainer = document.querySelector('[data-cart-container]');
const itemTemplate = document.querySelector('[data-item-template]');
const cartItemTemplate = document.querySelector('[data-cart-item-template]');
const displayAmountOfItems = document.querySelector('[data-amount-of-items]');
const cartItemsContainer = document.querySelector('[data-cart-items-container]');
const cartCountItems = cartItemsContainer.childElementCount;

// get the information from the local storage
const dataLocalStorage = JSON.parse(localStorage.getItem('Cart Items'));
console.log(dataLocalStorage);



export function cart() {
    // create an event listener to the cart button
    cartButton.addEventListener('click', e => {
        console.log('hello');
        // add the ability to hide and open (toggle) the cart window
        cartContainer.classList.toggle('invisible');
    })
    // console.log(cartItems);
    displayAmountOfItems.textContent = cartCountItems;
    if (displayAmountOfItems.textContent == 0) {
        cartButton.classList.add('invisible');
    }
}

const cartItem = cartItemTemplate.content.cloneNode(true);
console.log(cartItem);


export function createCartItem() {


    console.log(cartItems);


    // dataLocalStorage.forEach( item => {

        // console.log(item);


        // duplicate the template of the cart item


        // // select the elements that you need
        // const image = cartItem.querySelector('[data-cart-image]');
        // image.src = item.image;


        // const name = cartItem.querySelector('[data-cart-name]');
        // name.textContent = item.name;

        // const price = cartItem.querySelector('[data-cart-price]');
        // price.textContent = item.price;

        // // console.log(cartItem);
    //     cartItemsContainer.appendChild(cartItem);

    // })

}

// add and event listener to the button of add to cart
    // when you click on the button the item that you selected needs to be added to the cart
    // make sure that the information is being added to the local storage.

// add and event listener to the close button of each of the item added to the cart.
    // when clicked the item that you selected needs to be deleted
    // make sure that the item is deleted from the local storage (that way is going to be updated when I reload the page.)

// if you have not selected any item the button of the cart should not appear

// read what you have on local storage and update the cart. (this will help to make sure that if you change tabs the information that you have is always the same.)



