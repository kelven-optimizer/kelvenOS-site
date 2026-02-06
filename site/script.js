document.addEventListener('DOMContentLoaded', () => {
    // Set the launch date: Tomorrow (Feb 7, 2026) at 13:30
    const launchDate = new Date('2026-02-07T13:30:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            // Launch time passed
            document.querySelector('.countdown-container').innerHTML = '<div class="time-box" style="width:100%"><span style="font-size: 3rem; color: var(--accent);">JÁ DISPONÍVEL!</span></div>';
            return;
        }

        // Time calculations
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    };

    // Run immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
