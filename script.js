// script.js for Coffee Shop Website

//Functionality for adding coffee to cart
const addToCart = (coffee) => {
    console.log(`${coffee} added to cart`);
};

//Functionality to display coffee options
const displayCoffees = (coffees) => {
    coffees.forEach(coffee => {
        console.log(`Coffee: ${coffee.name}, Price: ${coffee.price}`);
    });
};

// Example coffee data
const coffees = [
    { name: 'Espresso', price: 3.00 },
    { name: 'Latte', price: 3.50 },
    { name: 'Cappuccino', price: 3.75 }
];

displayCoffees(coffees);