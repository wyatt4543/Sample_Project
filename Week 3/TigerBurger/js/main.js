const burgerPrice = 5.99
const pizzaPrice = 8.99
const saladPrice = 4.99
const drinkPrice = 1.99

function calculateOrder() {
    let total = 0;

    if (document.getElementById("burger").checked) {
        total += burgerPrice;
    }
    if (document.getElementById("pizza").checked) {
        total += pizzaPrice;
    }
    if (document.getElementById("salad").checked) {
        total += saladPrice;
    }
    if (document.getElementById("drink").checked) {
        total += drinkPrice;
    }

    document.getElementById("totalBeforeDiscount").innerText = `Total before discount: ${total.toFixed(2)}`

    let discountCode = document.getElementById("discountCode").value.trim();
    let finalTotal = total;

    let discountMessage = "No discount is applied";

    if (discountCode === "SAVE10") {
        finalTotal = total * 0.9;
        discountMessage = "10% discount is applied"
    } else if (discountCode === "SAVE20") {
        finalTotal = total * 0.8;
        discountMessage = "20% discount is applied"
    }

    document.getElementById("finalTotal").innerText = `Final Total: ${finalTotal.toFixed(2)}`;
    document.getElementById("discountApplied").innerText = discountMessage
}