import items from '../items.json';
import { addItemToCartData, renderCartItems, deleteCartContent, cartData } from './cart';
import { moneyFormatter } from './utils/moneyFormatter';

// select the items that you need.
const itemTemplate = document.querySelector('[data-item-template]');
const elementsContainer = document.querySelector('#elements-container')


// functions
export function setupStore() {
    // adds an event listener to the "add to cart" button
    document.addEventListener('click', e => {

        if (e.target.matches('[data-add-to-cart]')) {
            // select the item id of the element that we are clicking
            const id = e.target.closest('[data-id]').id;

            addItemToCartData(id);
            // Mak sure the items don't get duplicated if they are the same.
        }

    })

    items.forEach(createItem)
}



function createItem(item) {
    // create a duplicate of the template item


    const newItem = itemTemplate.content.cloneNode(true);

    const imageUrl = 'https://dummyimage.com/420x260/';


    // add the information of the item to the template duplicate

    const id = newItem.querySelector('[data-id]');
    id.id = item.id;

    const image = newItem.querySelector('[data-image]');
    image.src = `${imageUrl}${item.imageColor}/${item.imageColor}`;

    const name = newItem.querySelector('[data-name]');
    name.textContent = item.name;

    const category = newItem.querySelector('[data-category]');
    category.textContent = item.category;

    const price = newItem.querySelector('[data-price-cent]');
    price.textContent = moneyFormatter(item.priceCents/100) ;



    elementsContainer.appendChild(newItem);
}



