// Part 1
// 2:
var products = [
    {
        name: "shirt",
        price: 10,
        inventory: {
            stock: 10,
            colorOptions: ["red", "blue", "green"],
        },
    },
    {
        name: "pants",
        price: 20,
        inventory: {
            stock: 10,
            colorOptions: ["red", "green"],
        },
    },
    {
        name: "shoes",
        price: 30,
        inventory: {
            stock: 10,
            colorOptions: ["red", "blue", "green"],
        },
    },
];
// 3:
function changeColor(product, newColor) {
    product.inventory.colorOptions.push(newColor);
    switch (product.inventory.colorOptions.length) {
        case 5:
            product.price += 5;
            break;
        case 2:
            product.price += 10;
            break;
        case 3:
            product.price += 2;
            break;
        default:
            break;
    }
}
changeColor(products[1], "black");
// 4:
products.forEach(function (product) {
    console.log(product);
});
