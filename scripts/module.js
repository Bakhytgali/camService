document.addEventListener("DOMContentLoaded", () => {
    const modalBlock = document.querySelector(".form-modal");
    const openModalBtn = document.querySelector(".leave-order-module");
    const exitModalBtn = document.querySelector(".exit-modal");
    
    openModalBtn.addEventListener("click", openModal);
    exitModalBtn.addEventListener("click", closeModal);

    function openModal() {
        modalBlock.style.display = "flex";
        modalBlock.style.alignItems = "center";
        modalBlock.style.justifyContent = "center";
    }

    function closeModal() {
        modalBlock.style.display = "none";
    }
});