// console.log("Скрипт подключен");

const staggered = document.querySelectorAll(".services-grid, .stats-grid, .testimonials");
//console.log(staggered);

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -80px 0px"
};

const recipleObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stagger-item");
            
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 300);
            });
        }
    });
}, options);

const scrollindicator = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    const percent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%";
    scrollindicator.style.width = percent;
    //console.log(window.scrollY);
});

const sidebar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        sidebar.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        sidebar.style.background = "rgba(10, 10, 10, 0.9)";
    }
});

staggered.forEach((card)=> {
    recipleObserver.observe(card);
});

