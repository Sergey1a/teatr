const clickBurger = document.querySelector(".header__burger");
const activeBurger = document.querySelector(".burger-active");
const burger = document.querySelector(".burger");
const closeBurgerBtn = document.querySelector(".burger__close")


clickBurger.addEventListener("click", ()=> {
    document.querySelector(".burger").classList.add("burger-active");
});

closeBurgerBtn.addEventListener("click", ()=> {
    document.querySelector(".burger").classList.remove("burger-active");
});

