// SCROLL FADE IN ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section, .service-card, .investor-card, .blog-card")
    .forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


// STATS COUNT ANIMATION
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText.replace("+", "");
        const count = +counter.getAttribute("data-count") || 0;
        const increment = target / 100;

        if (count < target) {
            counter.setAttribute("data-count", count + increment);
            counter.innerText = Math.ceil(count + increment) + "+";
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    observer.observe(counter.parentElement);
    counter.parentElement.addEventListener("transitionend", updateCount);
});


// HERO FLOATING ANIMATION
const floatingCards = document.querySelectorAll(".floating");

floatingCards.forEach((card, index) => {
    let direction = 1;
    setInterval(() => {
        card.style.transform = `translateY(${direction * 10}px)`;
        direction *= -1;
    }, 2000 + index * 500);
});


// BUTTON RIPPLE EFFECT
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});