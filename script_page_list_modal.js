const modalSnk = document.getElementById("dialog_snk");
const carrouselSnk = document.getElementById("carrousel_snk");
const buttonClose = document.querySelector(".button_close");

carrouselSnk.addEventListener("click", () => {
    modalSnk.showModal();
    document.body.style.overflow = "hidden";
});

buttonClose.addEventListener("click", () => {
    modalSnk.close();
    document.body.style.overflow = "initial";
});
