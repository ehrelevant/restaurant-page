
import {appendChildren} from './helper.js'

// Food factory
const Food = (name, price) => {
    return {
        name, price
    };
}

function generateFoodMenu() {
    let foodMenu = []
    foodMenu.push(Food('Chicken', 220));
    foodMenu.push(Food('Fish', 180));
    foodMenu.push(Food('Pork', 325));

    return foodMenu;
}

function loadMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('page', 'menu-page');


    const menu = generateFoodMenu();

    appendChildren(menuContainer, menu.map((food) => {
        const menuOption = document.createElement('div');
        menuOption.classList.add('food-item')

        const foodName = document.createElement('p');
        foodName.textContent = `"${food.name}"`;
        foodName.classList.add('food-name')

        const foodPrice = document.createElement('p');
        foodPrice.textContent = `Php ${food.price}`;
        foodPrice.classList.add('food-price')

        const addButton = document.createElement('button');
        addButton.textContent = 'Add food to cart';
        addButton.classList.add('add-food-btn')

        menuOption.appendChild(foodName);
        menuOption.appendChild(foodPrice);
        menuOption.appendChild(addButton);
        return menuOption;
    }));

    return menuContainer;
}

const menuContainer = loadMenu();

export {menuContainer};