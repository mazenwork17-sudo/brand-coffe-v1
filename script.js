gsap.from(".hero-text h1", {
    duration: 1,
    y: 80,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero-text p", {
    duration: 1,
    delay: 0.3,
    y: 40,
    opacity: 0
});

gsap.from(".hero-image img", {
    duration: 1,
    delay: 0.5,
    scale: 0.8,
    opacity: 0
});

document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");

    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".hero-image").style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});


document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-text h1", {
    duration: 1,
    y: 80,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero-text p", {
    duration: 1,
    delay: 0.3,
    y: 40,
    opacity: 0
});

gsap.from(".hero-image img", {
    duration: 1,
    delay: 0.5,
    scale: 0.8,
    opacity: 0
});

    /*================ PRELOADER =================*/
    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    });

    /*================ NAVBAR SCROLL EFFECT =================*/
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /*================ MOBILE MENU =================*/
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.getElementById("navbar");

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    /*================ COUNTER ANIMATION =================*/
    const counters = document.querySelectorAll(".count");

    const startCounters = () => {
        counters.forEach(counter => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;

                const increment = target / 100;

                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    };

    let counterStarted = false;

    window.addEventListener("scroll", () => {
        const counterSection = document.querySelector(".counter");

        if (!counterStarted &&
            window.scrollY + window.innerHeight >= counterSection.offsetTop) {
            startCounters();
            counterStarted = true;
        }
    });

    /*================ FAQ TOGGLE =================*/
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    /*================ SMOOTH SCROLL =================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    /*================ SCROLL REVEAL =================*/
    const revealElements = document.querySelectorAll(
        ".hero-text, .hero-image, .about-container, .feature-card, .product-card, .gallery-item, .testimonial-card"
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});

const navLinks = document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", () => {

    let fromTop = window.scrollY;

    document.querySelectorAll("section").forEach(section => {

        if (
            section.offsetTop <= fromTop + 200 &&
            section.offsetTop + section.offsetHeight > fromTop + 200
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href").includes(section.id)) {
                    link.classList.add("active");
                }
            });
        }

    });

});