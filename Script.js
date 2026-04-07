let count = 0;

// Toggle Visibility
function toggleDropdown() {
    const dropdown = document.getElementById('notif-dropdown');
    dropdown.classList.toggle('dropdown-show');
}

// Dynamic Addition
function sendNotification() {
    count++;
    const badge = document.getElementById('notif-badge');
    const list = document.getElementById('message-list');

    // Update Badge
    badge.innerText = count;
    badge.style.display = "block";

    // Remove empty message if it's the first one
    if (count === 1) list.innerHTML = '';

    // Create and append new item
    const li = document.createElement('li');
    li.className = 'message-item';
    li.innerText = `Update #${count}: You have a new notification!`;
    list.prepend(li); // Adds to the top
}
