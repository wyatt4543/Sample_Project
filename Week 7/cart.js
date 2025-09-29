let cart = {
    items: [],

    //Method to add an item to the cart
    addItem(item) {
        this.items.push(item);
    },

    displayItems() {
        let cartItemsDiv = document.getElementById("cart-items");
        cartItemsDiv.innerHTML = "";

        this.items.forEach((item) => {
            let itemElement = document.createElement("p");
            itemElement.textContent = `${item.name} - ${item.quantity} - units @@ ${item.price} each`;
            cartItemsDiv.appendChild(itemElement);
        });
    },

    calculateTotal() {
        let total = 0;
        this.items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    },
};

let discountCart = Object.create(cart);

discountCart.discount = 0.1;
discountCart.calculateTotal = function () {
    let total = cart.calculateTotal.call(this);
    return total * (1 - this.discount);
};

document.getElementById("add-item-btn").addEventListener("click", function () {
    let itemName = document.getElementById("item-name").value;
    let itemPrice = document.getElementById("item-price").value;
    let itemQuantity = document.getElementById("item-quantity").value;

    if (itemName && itemPrice > 0 && itemQuantity > 0) {
        let newItem = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity,
        };

        cart.addItem(newItem);

        cart.displayItems();

        document.getElementById("total-cost").textContent = cart
            .calculateTotal()
            .toFixed(2);

        document.getElementById("discount-total").textContent = discountCart
            .calculateTotal()
            .toFixed(2);

        document.getElementById("item-name").value = "";
        document.getElementById("item-price").value = "";
        document.getElementById("item-quantity").value = "";
    } else {
        alert("Please enter valid information");
    }
});
