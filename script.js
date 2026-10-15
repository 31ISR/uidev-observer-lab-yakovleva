//console.log("Скрипт подключен");

const cards = document.querySelectorAll(".service-card");
//console.log(cards);

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -80px 0px"
};

const recipleObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

cards.forEach((card)=> {
    recipleObserver.observe(card);
});

const items = parentElement.querySelectorAll(".stagger-item");

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add("shown");
    }, index * 150);
});