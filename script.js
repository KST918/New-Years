function updateCountdown() {
    const newYearDate = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`);
    const currentDate = new Date();
    const difference = newYearDate - currentDate;

    if (difference <= 0) {
        document.getElementById("countdown-timer").innerText = "З Новим Роком!";
        clearInterval(timerInterval); // Зупиняємо таймер
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText =
        `${days} днів : ${hours} годин : ${minutes} хвилин : ${seconds} секунд`;
}

// Оновлюємо таймер кожну секунду
const timerInterval = setInterval(updateCountdown, 1000);

// Оновлюємо таймер при завантаженні сторінки
updateCountdown();