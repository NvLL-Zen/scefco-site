function countdown() {
    const now = new Date().getTime();
    const eventDate = new Date('November 02, 2024 00:00:00').getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysStr = days.toString().padStart(2, '0');
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    document.getElementById('days').innerHTML = `${daysStr}`;
    document.getElementById('hours').innerHTML = `${hoursStr}`;
    document.getElementById('minutes').innerHTML = `${minutesStr}`;
    document.getElementById('seconds').innerHTML = `${secondsStr}`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "The event has started!";
    }
}

countdown();
const x = setInterval(countdown, 1000);
