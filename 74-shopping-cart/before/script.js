import { createItem, loadInformation } from "./js/store.js";
import { cart, createCartItem } from "./js/cart.js";


loadInformation();
cart();
createCartItem();   


// const dataLocalStorage = JSON.parse(localStorage.getItem('Cart Items'));
// console.log(dataLocalStorage);



// add and event listener to the button of add to cart
// when you click on the button the item that you selected needs to be added to the cart
// make sure that the information is being added to the local storage.

// add and event listener to the close button of each of the item added to the cart.
// when clicked the item that you selected needs to be deleted
// make sure that the item is deleted from the local storage (that way is going to be updated when I reload the page.)

// if you have not selected any item the button of the cart should not appear

// read what you have on local storage and update the cart. (this will help to make sure that if you change tabs the information that you have is always the same.)
