function countdown() {
    const now = new Date().getTime();
    const eventDate = new Date('November 11, 2024 00:00:00').getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown-timer').innerHTML = "The event has started!";
    }
}

countdown();
const x = setInterval(countdown, 1000);
