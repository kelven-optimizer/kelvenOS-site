document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Countdown Logic
    // ----------------------------------------------------
    const launchDate = new Date('2026-02-07T14:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-container').innerHTML =
                '<div class="time-box" style="width:100%"><span style="color: var(--secondary);">SISTEMA ONLINE - ACESSO LIBERADO</span></div>';
            document.getElementById('suspense-message').style.display = 'none';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');

        if (hEl) hEl.innerText = hours < 10 ? '0' + hours : hours;
        if (mEl) mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        if (sEl) sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ----------------------------------------------------
    // Suspense Messages
    // ----------------------------------------------------
    const messages = [
        "Iniciando protocolos de otimização...",
        "Calibrando núcleos do sistema...",
        "Verificando integridade da rede...",
        "Sincronizando banco de dados global...",
        "Aguardando liberação do servidor...",
        "Otimizando threads de processamento...",
        "Quase lá..."
    ];

    const messageEl = document.getElementById('suspense-message');
    let msgIndex = 0;

    if (messageEl) {
        setInterval(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                msgIndex = (msgIndex + 1) % messages.length;
                messageEl.innerText = messages[msgIndex];
                messageEl.style.opacity = '1';
            }, 500);
        }, 3000);
    }


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
    // ----------------------------------------------------
    // 4. Hero Slideshow
    // ----------------------------------------------------
    const slides = document.querySelectorAll('.slide-image');
    let currentSlide = 0;

    if (slides.length > 1) {
        setInterval(() => {
            // Mark current as exit
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('exit');

            const prevSlide = currentSlide;

            // Move to next
            currentSlide = (currentSlide + 1) % slides.length;

            // Prepare next slide (remove exit if it was there from previous cycle)
            slides[currentSlide].classList.remove('exit');
            slides[currentSlide].classList.add('active');

            // Cleanup exit class from the previous slide after transition is done (1s)
            setTimeout(() => {
                slides[prevSlide].classList.remove('exit');
            }, 1000);

        }, 4000); // 4 seconds per slide
    }
});
