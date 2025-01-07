const themeToggleButton = document.getElementById(`theme-toggle`);
const body = document.body;
body.classList.add(`light-theme`);

themeToggleButton.addEventListener(`click`,function(){
    body.classList.toggle(`dark-theme`);
    body.classList.toggle(`light-theme`);
    if (body.classList.contains(`light-theme`)){
        themeToggleButton.textContent = `Dark Mode`;
    }else{
        themeToggleButton.textContent = `Light Mode`;
    }
})

function padWithZero(number) {
    return number.toString().padStart(2, '0');
}

function currentDateAndTime() {
    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');
    const now = new Date();
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const timeOptions = { hour12: true };
    const dateFormatted = now.toLocaleDateString('en-US', dateOptions);
    const hours = padWithZero(now.getHours() % 12 || 12);
    const minutes = padWithZero(now.getMinutes());
    const seconds = padWithZero(now.getSeconds());
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeFormatted = `${hours}:${minutes}:${seconds} ${ampm}`;
    currentDate.textContent = dateFormatted;
    currentTime.textContent = timeFormatted;
}

setInterval(currentDateAndTime, 1000);
currentDateAndTime();