let contacts = [];

function addContact() {
    const nameInput = document.getElementById("name").value.trim();

    if (nameInput !== "") {
        contacts.push({ name: nameInput });
        document.getElementById("name").value = "";
        renderContacts();
    } else {
        alert("Please enter the name and the phone number");
    }
}

function sortContacts() {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    renderContacts();
}

function searchContacts() {
    const searchValues = document.getElementById("search").value.toLowerCase();
    const filterContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValues)
    );
    renderContacts(filterContacts);
}

function removeContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

function renderContacts() {
    const constListElement = document.getElementById("contact-list");
    constListElement.innerHTML = "";

    contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${contact.name} <button onclick=removeContact(${index})>Remove Contact</button>`
        constListElement.appendChild(li);
    })
}
