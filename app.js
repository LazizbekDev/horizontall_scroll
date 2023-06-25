const stickySections = [...document.querySelectorAll('.sticky')];

const images = [
    "https://dr.savee-cdn.com/things/6/4/95f0712425c73bb0ff5d68.webp",
    "https://dr.savee-cdn.com/things/6/4/84bdfb34035ac5a004d551.webp",
    "https://dr.savee-cdn.com/things/6/4/8778d5c6549e733f496b26.webp",
    "https://dr.savee-cdn.com/things/6/4/95ecc143d8b312ff28179a.webp",
    "https://dr.savee-cdn.com/things/6/4/8349556b2acf15f062749b.webp",
    "https://dr.savee-cdn.com/things/6/2/0bc6ec5ce30f230b064a6c.webp"
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector(".scroll__secetion").appendChild(image)
    })
})

const transform = (e) => {
    const offset = e.parentElement.offsetTop;
    const scrollSection = e.querySelector(".scroll__secetion");
    let percentage = (window.scrollY - offset) / window.innerHeight * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}

window.addEventListener("scroll", () => {
    for (let i = 0; i<stickySections.length;i++) {
        transform(stickySections[i]);
    }
})

// i love js <3