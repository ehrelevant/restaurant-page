
let menupageQueue = [];

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
    const menu = generateFoodMenu();

    menupageQueue = menu.map((food) => {
        const menuOption = document.createElement('div');

        const foodName = document.createElement('p');
        foodName.textContent = `"${food.name}"`;

        const foodPrice = document.createElement('p');
        foodPrice.textContent = `PHP ${food.price}`;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add food to cart';

        menuOption.appendChild(foodName);
        menuOption.appendChild(foodPrice);
        menuOption.appendChild(addButton);
        return menuOption;
    });
}

loadMenu();

export {menupageQueue};