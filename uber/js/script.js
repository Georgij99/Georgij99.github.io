window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {

    const arrowOnTop = document.querySelector('.on-top');

    window.addEventListener('scroll', () => {
        document.documentElement.scrollTop > 300 ? arrowOnTop.style.visibility = "visible" : arrowOnTop.style.visibility = "hidden";
    });

    arrowOnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
});