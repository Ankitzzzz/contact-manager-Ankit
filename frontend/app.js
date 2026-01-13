const API = 'http://localhost:3000/api/contacts';

// Input references
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const tbody = document.getElementById('contacts');

// Load contacts from server
const loadContacts = async () => {
    const res = await fetch(API);
    const data = await res.json();

    tbody.innerHTML = '';
    data.forEach(c => {
        tbody.innerHTML += `
<tr>
    <td>${c.name}</td>
    <td>${c.email}</td>
    <td>${c.phone}</td>
    <td>
        <button onclick="deleteContact(${c.id})">Delete</button>
    </td>
</tr>`;
    });
};

// Delete contact
const deleteContact = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadContacts();
};

// Add contact
document.getElementById('contactForm').onsubmit = async e => {
    e.preventDefault();

    if (phoneInput.value.length < 10) {
        alert("Phone must be at least 10 digits");
        return;
    }

    const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        })
    });

    if (!res.ok) {
        const err = await res.json();
        alert(err.message);
        return;
    }

    e.target.reset();
    loadContacts();
};

// Initial load
loadContacts();
