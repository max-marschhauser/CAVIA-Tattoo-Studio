//MOBILE HAMBURGER TOGGLE

const navBtn = document.getElementById("header__hamburger");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
});

//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";

//INTERSECTION OBSERVER

const cards = document.querySelectorAll("[data-card]");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("section-show", entry.isIntersecting);
        });
    },
    {
        root: null,
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
    }
);

cards.forEach((card) => {
    observer.observe(card);
});

//FULLSCREEN PORTFOLIO IMAGES

//1

const tetovaza1 = document.querySelector("[data-tetovaza1]");
const tetovaza1Dialog = document.querySelector("[data-dialog-tetovaza1]");
const tetovaza1DialogClose = document.querySelector("[data-dialog-close-tetovaza1]");

tetovaza1.addEventListener("click", () => {
    tetovaza1Dialog.showModal();
});

tetovaza1DialogClose.addEventListener("click", () => {
    tetovaza1Dialog.close();
});

//2

const tetovaza2 = document.querySelector("[data-tetovaza2]");
const tetovaza2Dialog = document.querySelector("[data-dialog-tetovaza2]");
const tetovaza2DialogClose = document.querySelector("[data-dialog-close-tetovaza2]");

tetovaza2.addEventListener("click", () => {
    tetovaza2Dialog.showModal();
});

tetovaza2DialogClose.addEventListener("click", () => {
    tetovaza2Dialog.close();
});

//3

const tetovaza3 = document.querySelector("[data-tetovaza3]");
const tetovaza3Dialog = document.querySelector("[data-dialog-tetovaza3]");
const tetovaza3DialogClose = document.querySelector("[data-dialog-close-tetovaza3]");

tetovaza3.addEventListener("click", () => {
    tetovaza3Dialog.showModal();
});

tetovaza3DialogClose.addEventListener("click", () => {
    tetovaza3Dialog.close();
});

//4

const tetovaza4 = document.querySelector("[data-tetovaza4]");
const tetovaza4Dialog = document.querySelector("[data-dialog-tetovaza4]");
const tetovaza4DialogClose = document.querySelector("[data-dialog-close-tetovaza4]");

tetovaza4.addEventListener("click", () => {
    tetovaza4Dialog.showModal();
});

tetovaza4DialogClose.addEventListener("click", () => {
    tetovaza4Dialog.close();
});

//5

const tetovaza5 = document.querySelector("[data-tetovaza5]");
const tetovaza5Dialog = document.querySelector("[data-dialog-tetovaza5]");
const tetovaza5DialogClose = document.querySelector("[data-dialog-close-tetovaza5]");

tetovaza5.addEventListener("click", () => {
    tetovaza5Dialog.showModal();
});

tetovaza5DialogClose.addEventListener("click", () => {
    tetovaza5Dialog.close();
});

//6

const tetovaza6 = document.querySelector("[data-tetovaza6]");
const tetovaza6Dialog = document.querySelector("[data-dialog-tetovaza6]");
const tetovaza6DialogClose = document.querySelector("[data-dialog-close-tetovaza6]");

tetovaza6.addEventListener("click", () => {
    tetovaza6Dialog.showModal();
});

tetovaza6DialogClose.addEventListener("click", () => {
    tetovaza6Dialog.close();
});

//7

const tetovaza7 = document.querySelector("[data-tetovaza7]");
const tetovaza7Dialog = document.querySelector("[data-dialog-tetovaza7]");
const tetovaza7DialogClose = document.querySelector("[data-dialog-close-tetovaza7]");

tetovaza7.addEventListener("click", () => {
    tetovaza7Dialog.showModal();
});

tetovaza7DialogClose.addEventListener("click", () => {
    tetovaza7Dialog.close();
});

//8

const tetovaza8 = document.querySelector("[data-tetovaza8]");
const tetovaza8Dialog = document.querySelector("[data-dialog-tetovaza8]");
const tetovaza8DialogClose = document.querySelector("[data-dialog-close-tetovaza8]");

tetovaza8.addEventListener("click", () => {
    tetovaza8Dialog.showModal();
});

tetovaza8DialogClose.addEventListener("click", () => {
    tetovaza8Dialog.close();
});
