document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Countdown Logic
    // ----------------------------------------------------
    const launchDate = new Date('2026-02-07T13:30:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-container').innerHTML =
                '<div class="time-box" style="width:100%"><span style="color: var(--secondary);">JÁ DISPONÍVEL!</span></div>';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);


    // ----------------------------------------------------
    // 2. Scroll Animation Observer
    // ----------------------------------------------------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });


    // ----------------------------------------------------
    // 3. 3D Tilt Effect for Hero Image
    // ----------------------------------------------------
    const card = document.getElementById('tiltCard');
    const container = document.querySelector('.hero-image-container');
    const glow = document.querySelector('.card-glow');

    if (card && container) {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (center is 0)
            const xPct = x / rect.width;
            const yPct = y / rect.height;

            const xRot = (yPct - 0.5) * -20; // Max 10 deg rotation X (inverted)
            const yRot = (xPct - 0.5) * 20;  // Max 10 deg rotation Y

            card.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.05)`;

            // Move glow effect
            glow.style.opacity = '1';
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
        });

        container.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
            glow.style.opacity = '0';
        });
    }
});
