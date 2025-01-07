const form = document.getElementById('contact-form');
const messageRecords = document.getElementById('message-history');

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const password = document.getElementById('password').value.trim();
    const profileImageInput = document.getElementById('profile-image');

    if (!name || !email || !message || !password) {
        console.log('Please enter the required content.');
        return;
    }

    if (!validateEmail(email)) {
        console.log('Please enter a valid email address.');
        return;
    }

    let profileImage;
    if (profileImageInput.files.length > 0) {
        profileImage = profileImageInput.files[0];
        if (profileImage.size > 2 * 1024 * 1024) {
            console.log('Please upload a picture smaller than 2 MB.');
            return;
        }
    }

    const timestamp = new Date().toLocaleString();
    let messageHTML = `
        <div class="message">
            <strong>${name}</strong> (${email}) <br>
            ${message} <br>
            <small>${timestamp}</small> <br>
    `;

    if (profileImage) {
        const imgURL = URL.createObjectURL(profileImage);
        messageHTML += `<img src="${imgURL}" class="profile-pic">`;
    } else {
        messageHTML += `<div class="empty-img"></div>`;
    }

    messageHTML += `</div>`;
    messageRecords.innerHTML += messageHTML;
    form.reset(); 
});
