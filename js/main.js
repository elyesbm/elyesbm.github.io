
        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 2000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            document.getElementById('navLinks').classList.toggle('active');
        });

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Generate particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });

        // Excursion buttons popup
        document.querySelectorAll('.excursion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.open('https://wa.me/905555555555', '_blank');
            });
        });
    


        (function() {
            const canvas = document.getElementById('bosphorusCanvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let waves = [];
            let boats = [];
            let seagulls = [];

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);

            // Create waves
            for (let i = 0; i < 5; i++) {
                waves.push({
                    y: height * 0.6 + i * 30,
                    amplitude: 20 + i * 10,
                    frequency: 0.01 + i * 0.002,
                    speed: 0.02 + i * 0.005,
                    offset: i * Math.PI / 3,
                    alpha: 0.1 + i * 0.05
                });
            }

            // Create boats
            for (let i = 0; i < 3; i++) {
                boats.push({
                    x: Math.random() * width,
                    y: height * 0.55 + Math.random() * 100,
                    speed: 0.3 + Math.random() * 0.5,
                    size: 15 + Math.random() * 20,
                    direction: Math.random() > 0.5 ? 1 : -1
                });
            }

            // Create seagulls
            for (let i = 0; i < 8; i++) {
                seagulls.push({
                    x: Math.random() * width,
                    y: Math.random() * height * 0.4,
                    speed: 1 + Math.random() * 2,
                    amplitude: 30 + Math.random() * 50,
                    frequency: 0.01 + Math.random() * 0.01,
                    offset: Math.random() * Math.PI * 2,
                    wingPhase: Math.random() * Math.PI * 2
                });
            }

            let time = 0;

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // Draw Bosphorus water with golden shimmer
                const gradient = ctx.createLinearGradient(0, height * 0.5, 0, height);
                gradient.addColorStop(0, 'rgba(201, 168, 76, 0.05)');
                gradient.addColorStop(0.5, 'rgba(201, 168, 76, 0.1)');
                gradient.addColorStop(1, 'rgba(26, 28, 38, 0.3)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, height * 0.5, width, height * 0.5);

                // Draw waves
                waves.forEach((wave, index) => {
                    ctx.beginPath();
                    ctx.moveTo(0, wave.y);
                    for (let x = 0; x <= width; x += 5) {
                        const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
                        ctx.lineTo(x, y);
                    }
                    ctx.lineTo(width, height);
                    ctx.lineTo(0, height);
                    ctx.closePath();
                    ctx.fillStyle = `rgba(201, 168, 76, ${wave.alpha})`;
                    ctx.fill();

                    // Wave highlight
                    ctx.beginPath();
                    ctx.moveTo(0, wave.y);
                    for (let x = 0; x <= width; x += 5) {
                        const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
                        ctx.lineTo(x, y);
                    }
                    ctx.strokeStyle = `rgba(232, 213, 163, ${wave.alpha * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                });

                // Draw boats
                boats.forEach(boat => {
                    boat.x += boat.speed * boat.direction;
                    if (boat.x > width + 50) boat.x = -50;
                    if (boat.x < -50) boat.x = width + 50;

                    const boatY = boat.y + Math.sin(time * 0.02 + boat.x * 0.01) * 5;

                    // Boat body
                    ctx.beginPath();
                    ctx.moveTo(boat.x - boat.size, boatY);
                    ctx.lineTo(boat.x + boat.size, boatY);
                    ctx.lineTo(boat.x + boat.size * 0.7, boatY + boat.size * 0.4);
                    ctx.lineTo(boat.x - boat.size * 0.7, boatY + boat.size * 0.4);
                    ctx.closePath();
                    ctx.fillStyle = 'rgba(201, 168, 76, 0.6)';
                    ctx.fill();

                    // Boat reflection
                    ctx.beginPath();
                    ctx.moveTo(boat.x - boat.size * 0.5, boatY + boat.size * 0.5);
                    ctx.lineTo(boat.x + boat.size * 0.5, boatY + boat.size * 0.5);
                    ctx.lineTo(boat.x + boat.size * 0.3, boatY + boat.size * 0.8);
                    ctx.lineTo(boat.x - boat.size * 0.3, boatY + boat.size * 0.8);
                    ctx.closePath();
                    ctx.fillStyle = 'rgba(201, 168, 76, 0.15)';
                    ctx.fill();
                });

                // Draw seagulls
                seagulls.forEach(gull => {
                    gull.x += gull.speed;
                    gull.wingPhase += 0.1;
                    if (gull.x > width + 30) gull.x = -30;

                    const gullY = gull.y + Math.sin(time * gull.frequency + gull.offset) * gull.amplitude;
                    const wingY = Math.sin(gull.wingPhase) * 8;

                    ctx.beginPath();
                    ctx.moveTo(gull.x - 12, gullY + wingY);
                    ctx.quadraticCurveTo(gull.x, gullY - 5, gull.x + 12, gullY + wingY);
                    ctx.strokeStyle = 'rgba(240, 230, 200, 0.7)';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                });

                // Golden sparkles on water
                for (let i = 0; i < 20; i++) {
                    const sx = Math.random() * width;
                    const sy = height * 0.6 + Math.random() * height * 0.4;
                    const size = Math.random() * 2;
                    const alpha = Math.sin(time * 0.05 + i) * 0.5 + 0.5;
                    ctx.beginPath();
                    ctx.arc(sx, sy, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.4})`;
                    ctx.fill();
                }

                time++;
                requestAnimationFrame(draw);
            }

            draw();
        })();
    

