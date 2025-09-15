/*
Let

-Block scoped
-TDZ
-redeclare

*/

let holidayName = "October Fest";

function buyTickets() {
    console.log(`Welcome to ${holidayName} ticket counter`);

    if (true) {
        let ticketPrice = 50;
        console.log(`Standard ticket price is ${ticketPrice}`);
    }

    // holidayName = "Thanksgiving";
    console.log(`Welcome to ${holidayName} ticket counter`);

    // console.log(ticketPrice);


    let bandName = "RockStars";
    console.log(`Band performed is: ${bandName}`);
}

buyTickets();