// app.js
// Main application file containing dynamic rendering and user interactions.

document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC RENDERING FROM portfolioData

    // Personal Info & Navbar
    const info = portfolioData.personalInfo;
    document.getElementById('nav-initials').textContent = info.initials;
    document.getElementById('nav-logo-text').textContent = info.fullName;
    document.getElementById('nav-resume-btn').href = info.resumeLink;
    document.getElementById('hero-tagline').textContent = info.tagline;
    document.getElementById('hero-name').textContent = info.fullName;
    document.getElementById('hero-bio').textContent = info.bio;
    document.getElementById('hero-download-resume').href = info.resumeLink;
    document.getElementById('hero-download-resume').setAttribute('download', info.resumeLink.split('/').pop());
    document.getElementById('hero-view-resume').href = info.resumeLink;
    document.getElementById('nameplate-title').textContent = info.signatureTitle;
    document.getElementById('nameplate-subtitle').textContent = info.subtitle;
    document.getElementById('footer-text').innerHTML = `&copy; ${new Date().getFullYear()} ${info.fullName}. All rights reserved.`;

    // Social Links
    const socialLinksContainer = document.getElementById('hero-social-links');
    socialLinksContainer.innerHTML = '';
    
    if (info.socials.linkedin) {
        socialLinksContainer.innerHTML += `<a href="${info.socials.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>`;
    }
    if (info.socials.github) {
        socialLinksContainer.innerHTML += `<a href="${info.socials.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`;
    }
    if (info.socials.email) {
        socialLinksContainer.innerHTML += `<a href="mailto:${info.socials.email}" title="Email"><i class="fas fa-envelope"></i></a>`;
    }
    socialLinksContainer.innerHTML += `<a href="#contact" title="Direct Contact" class="arrow-down-btn"><i class="fa-solid fa-arrow-down"></i></a>`;

    // Orbiting Nodes Layout
    const orbitingNodes = [
        { wrapperClass: "dev-orbit", nodeClass: "node-purple", iconClass: "fa-solid fa-laptop", label: "Developer" },
        { wrapperClass: "cloud-orbit", nodeClass: "node-blue", iconClass: "fa-solid fa-cloud", label: "Cloud Explorer" },
        { wrapperClass: "problem-orbit", nodeClass: "node-cyan", iconClass: "fa-solid fa-rocket", label: "Problem Solver" },
        { wrapperClass: "learner-orbit", nodeClass: "node-cyan", iconClass: "fa-solid fa-book-open", label: "Lifelong Learner" },
        { wrapperClass: "team-orbit", nodeClass: "node-purple", iconClass: "fa-solid fa-users", label: "Team Player" },
        { wrapperClass: "code-orbit", nodeClass: "node-purple", iconClass: "fa-solid fa-code", label: "Code Enthusiast" }
    ];

    const orbitContainer = document.getElementById('orbiting-nodes-container');
    orbitContainer.innerHTML = '';
    orbitingNodes.forEach(node => {
        orbitContainer.innerHTML += `
            <div class="node-orbit-wrapper ${node.wrapperClass}">
                <div class="node-orbit-inner">
                    <div class="orbit-node ${node.nodeClass}">
                        <div class="node-icon"><i class="${node.iconClass}"></i></div>
                    </div>
                    <div class="node-label">${node.label}</div>
                </div>
            </div>
        `;
    });

    // Hero Stats Bar
    const statsBar = document.getElementById('hero-stats-bar');
    statsBar.innerHTML = '';
    portfolioData.stats.forEach((stat, idx) => {
        const itemHtml = `
            <div class="stat-bar-item">
                <div class="stat-bar-icon ${stat.colorClass}"><i class="${stat.icon}"></i></div>
                <div class="stat-bar-text">
                    ${stat.isStatic 
                        ? `<span class="stat-bar-value-static">${stat.value}</span>` 
                        : `<span class="stat-value" data-value="${stat.value}">0</span>`
                    }
                    <span class="stat-bar-label">${stat.label}</span>
                </div>
            </div>
        `;
        statsBar.innerHTML += itemHtml;
        if (idx < portfolioData.stats.length - 1) {
            statsBar.innerHTML += `<div class="stat-bar-divider"></div>`;
        }
    });

    // About Bullets
    const aboutBullets = document.getElementById('about-bullets');
    aboutBullets.innerHTML = '';
    portfolioData.about.bullets.forEach(bullet => {
        aboutBullets.innerHTML += `
            <li>
                <span class="bullet-icon-wrapper ${bullet.colorClass}"><i class="${bullet.icon}"></i></span>
                <span class="bullet-text-content">${bullet.text}</span>
            </li>
        `;
    });

    // About Stats Row
    const aboutStatsRow = document.getElementById('about-stats-row');
    aboutStatsRow.innerHTML = '';
    portfolioData.about.stats.forEach(stat => {
        aboutStatsRow.innerHTML += `
            <div class="glass-card stat-item-box ${stat.borderColorClass}">
                <div class="stat-icon-area"><i class="${stat.icon}"></i></div>
                <div class="stat-value" data-value="${stat.value}">0</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
    });

    // Education horizontal timeline
    const educationTimeline = document.getElementById('education-timeline');
    // Clear everything except the timeline horizontal line
    educationTimeline.innerHTML = '<div class="timeline-horizontal-line"></div>';
    portfolioData.education.forEach(edu => {
        const courseworkHtml = edu.coursework ? `
            <div class="timeline-sub-course">
                <h5>${edu.coursework.title}</h5>
                <ul>
                    ${edu.coursework.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        ` : '';
        const percentageHtml = edu.percentage ? `<div class="percentage-badge">${edu.percentage}</div>` : '';

        educationTimeline.innerHTML += `
            <div class="horizontal-timeline-step">
                <div class="timeline-time-label">${edu.timeRange}</div>
                <div class="timeline-node ${edu.nodeClass}"><i class="${edu.nodeIcon}"></i></div>
                <div class="glass-card timeline-card ${edu.cardBorderClass}">
                    <h3>${edu.degree}</h3>
                    <h4 class="timeline-inst">${edu.institution}</h4>
                    <div class="timeline-badge-label">${edu.badge}</div>
                    ${courseworkHtml}
                    ${percentageHtml}
                </div>
            </div>
        `;
    });

    // Experience timeline
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '<div class="timeline-v-line"></div>';
    portfolioData.experience.jobs.forEach(job => {
        experienceTimeline.innerHTML += `
            <div class="timeline-v-row">
                <div class="timeline-v-node ${job.nodeClass}"><i class="${job.nodeIcon}"></i></div>
                <div class="timeline-v-info">
                    <span class="timeline-v-date">${job.timeRange}</span>
                    <h3>${job.role}</h3>
                    <h4 class="timeline-v-inst ${job.colorClass}">${job.company}</h4>
                    <p>${job.description}</p>
                </div>
            </div>
        `;
    });
    document.getElementById('experience-quote').textContent = portfolioData.experience.quote;

    // Featured Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    const badgeColors = ['badge-purple', 'badge-cyan', 'badge-pink', 'badge-blue'];
    portfolioData.projects.forEach(proj => {
        const tagsHtml = proj.tags.map((tag, tIdx) => `
            <span class="tag-pill ${badgeColors[tIdx % badgeColors.length]}">${tag}</span>
        `).join('');

        projectsContainer.innerHTML += `
            <div class="glass-card project-carousel-card ${proj.borderClass}">
                <div class="card-image-box">
                    <img src="${proj.image}" alt="${proj.title}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'">
                </div>
                <div class="card-content-area">
                    <div class="card-title-icon-row">
                        <span class="proj-card-icon"><i class="${proj.iconClass}"></i></span>
                        <h3>${proj.title}</h3>
                    </div>
                    <p class="proj-card-desc">${proj.description}</p>
                    <div class="proj-card-tags">
                        ${tagsHtml}
                    </div>
                    <div class="proj-card-links">
                        ${proj.liveDemo && proj.liveDemo !== '#' ? `<a href="${proj.liveDemo}" class="btn-card-link" target="_blank">Live Demo <i class="fa-solid fa-up-right-from-square"></i></a>` : `<a href="#" class="btn-card-link" onclick="event.preventDefault()">Live Demo <i class="fa-solid fa-up-right-from-square"></i></a>`}
                        <a href="${proj.github}" target="_blank" class="btn-card-link">GitHub <i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('projects-github-link').href = info.socials.github;

    // Technical Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    portfolioData.skills.forEach(skill => {
        const itemsHtml = skill.items.map(item => `
            <div class="timeline-item">
                <div class="skill-info">
                    ${item.isFontAwesome 
                        ? `<i class="${item.icon}" style="${item.iconStyle || ''}"></i>` 
                        : `<i class="${item.icon}"></i>`
                    }
                    <span class="skill-name">${item.name}</span>
                </div>
                <div class="timeline-dot"></div>
            </div>
        `).join('');

        skillsContainer.innerHTML += `
            <div class="skills-card-modern">
                <div class="skills-card-header">
                    <div class="category-icon-circle ${skill.colorClass}">
                        <i class="${skill.iconClass}"></i>
                    </div>
                    <span class="category-title">${skill.category}</span>
                </div>
                <div class="skills-timeline-container ${skill.timelineClass}">
                    <div class="timeline-line"></div>
                    <div class="skills-timeline-grid">
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        `;
    });

    // Certifications
    const certsContainer = document.getElementById('certs-container');
    certsContainer.innerHTML = '';
    portfolioData.certifications.forEach(cert => {
        certsContainer.innerHTML += `
            <div class="glass-card cert-scroll-item border-cyan">
                <div class="cert-logo-box ${cert.logoClass}">
                    <span class="${cert.textClass}">${cert.logoText}</span>
                </div>
                <div class="cert-item-details">
                    <h3>${cert.name}</h3>
                    <p class="issuer-name">${cert.issuer}</p>
                </div>
                <a href="${cert.link}" class="cert-link-arrow" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        `;
    });
    document.getElementById('certs-all-link').href = info.socials.github;

    // Focus Area
    const focusContainer = document.getElementById('focus-container');
    focusContainer.innerHTML = '';
    portfolioData.focus.forEach(foc => {
        focusContainer.innerHTML += `
            <div class="glass-card focus-grid-card ${foc.borderClass}">
                <div class="focus-icon ${foc.glowClass}"><i class="${foc.icon}"></i></div>
                <div class="focus-card-text">
                    <h3>${foc.title}</h3>
                </div>
            </div>
        `;
    });

    // Contact Details
    const contactLinksContainer = document.getElementById('contact-links-container');
    contactLinksContainer.innerHTML = '';
    if (info.socials.email) {
        contactLinksContainer.innerHTML += `
            <div class="contact-link-row">
                <span class="contact-link-icon glow-cyan"><i class="fa-solid fa-envelope"></i></span>
                <a href="mailto:${info.socials.email}" class="contact-link-anchor">${info.socials.email}</a>
            </div>
        `;
    }
    if (info.socials.linkedin) {
        const cleanLinkedin = info.socials.linkedin.replace(/^https?:\/\/(www\.)?/, '');
        contactLinksContainer.innerHTML += `
            <div class="contact-link-row">
                <span class="contact-link-icon glow-purple"><i class="fab fa-linkedin-in"></i></span>
                <a href="${info.socials.linkedin}" target="_blank" class="contact-link-anchor">${cleanLinkedin}</a>
            </div>
        `;
    }
    if (info.socials.github) {
        const cleanGithub = info.socials.github.replace(/^https?:\/\/(www\.)?/, '');
        contactLinksContainer.innerHTML += `
            <div class="contact-link-row">
                <span class="contact-link-icon glow-pink"><i class="fab fa-github"></i></span>
                <a href="${info.socials.github}" target="_blank" class="contact-link-anchor">${cleanGithub}</a>
            </div>
        `;
    }

    // Set Form Placeholders and Submit Labels
    const contactForm = portfolioData.contact;
    document.getElementById('form-name').placeholder = contactForm.form.namePlaceholder;
    document.getElementById('form-email').placeholder = contactForm.form.emailPlaceholder;
    document.getElementById('form-subject').placeholder = contactForm.form.subjectPlaceholder;
    document.getElementById('form-message').placeholder = contactForm.form.messagePlaceholder;
    document.getElementById('form-submit-btn').innerHTML = `${contactForm.form.buttonText} <i class="fa-solid fa-paper-plane"></i>`;


    // 2. INTERACTIONS AND EFFECTS

    // Cursor Light Position Tracking
    const cursorGlow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-nav-toggle');
    const navLinksList = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navAnchors.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinksList.classList.remove('active');
            });
        });
    }

    // Typewriter Effect
    const roles = portfolioData.roles;
    let currentRoleIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    const typedRolesSpan = document.getElementById('typed-roles');
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseTime = 2000;

    function typeEffect() {
        if (!typedRolesSpan) return;
        const currentRole = roles[currentRoleIdx];
        if (isDeleting) {
            typedRolesSpan.textContent = currentRole.substring(0, currentCharIdx - 1);
            currentCharIdx--;
        } else {
            typedRolesSpan.textContent = currentRole.substring(0, currentCharIdx + 1);
            currentCharIdx++;
        }

        if (!isDeleting && currentCharIdx === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        } else if (isDeleting && currentCharIdx === 0) {
            isDeleting = false;
            currentRoleIdx = (currentRoleIdx + 1) % roles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }
    }
    setTimeout(typeEffect, 1000);

    // Section Reveal Animations (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Sync Active Nav Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSec = 'home';
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 150;
            if (window.scrollY >= secTop) {
                currentSec = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSec) {
                link.classList.add('active');
            }
        });
    });

    // Smart Stats Counter Animation
    function animateStats(container) {
        const stats = container.querySelectorAll('.stat-value');
        stats.forEach(stat => {
            if (stat.classList.contains('animated')) return;
            stat.classList.add('animated');
            
            const targetText = stat.getAttribute('data-value') || stat.textContent;
            const targetVal = parseFloat(targetText);

            if (isNaN(targetVal)) {
                stat.textContent = targetText;
                return;
            }

            if (targetText.includes('.')) {
                // Decimals
                let current = 0.0;
                const duration = 1000;
                const steps = 25;
                const increment = targetVal / steps;
                const stepTime = duration / steps;
                let stepCount = 0;
                const interval = setInterval(() => {
                    current += increment;
                    stepCount++;
                    if (stepCount >= steps) {
                        stat.textContent = targetVal.toFixed(2);
                        clearInterval(interval);
                    } else {
                        stat.textContent = current.toFixed(2);
                    }
                }, stepTime);
            } else {
                // Integers
                let current = 0;
                const duration = 800;
                const steps = 20;
                const increment = Math.ceil(targetVal / steps);
                const stepTime = duration / steps;
                let stepCount = 0;
                const interval = setInterval(() => {
                    current += increment;
                    stepCount++;
                    if (stepCount >= steps || current >= targetVal) {
                        stat.textContent = targetVal + '+';
                        clearInterval(interval);
                    } else {
                        stat.textContent = Math.ceil(current) + '+';
                    }
                }, stepTime);
            }
        });
    }

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.about-stats-row, .hero-stats-bar').forEach(el => {
        statsObserver.observe(el);
    });

    // Horizontal Carousel Scrolling
    const carouselGrid = document.getElementById('projects-container');
    const nextBtn = document.getElementById('carousel-next');
    const prevBtn = document.getElementById('carousel-prev');

    if (carouselGrid && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const firstCard = carouselGrid.querySelector('.project-carousel-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = parseFloat(window.getComputedStyle(carouselGrid).gap) || 28;
                carouselGrid.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
            }
        });
        prevBtn.addEventListener('click', () => {
            const firstCard = carouselGrid.querySelector('.project-carousel-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = parseFloat(window.getComputedStyle(carouselGrid).gap) || 28;
                carouselGrid.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
            }
        });
    }

    // Hero Floating Particle Canvas
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.color = Math.random() > 0.5 ? 'rgba(167, 139, 250, 0.4)' : 'rgba(34, 211, 238, 0.3)';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(Math.floor(canvas.width / 15), 60);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

});

// Contact Form Submission Handler
function handleContactSubmit(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    submitBtn.disabled = true;
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Message <i class="fas fa-spinner fa-spin"></i>';

    // Simulate sending mail
    setTimeout(() => {
        status.className = 'form-status success';
        status.textContent = 'Thank you! Your message has been sent successfully.';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        e.target.reset();

        setTimeout(() => {
            status.textContent = '';
            status.className = 'form-status';
        }, 5000);
    }, 1800);
}
