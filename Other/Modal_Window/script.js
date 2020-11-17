"use strict";

const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-button");

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    model.classList.remove("hidden"); //removing only the hidden word
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (k) {
  console.log(k.key);
  if (k.key === "q") {
    if (!model.classList.contains("hidden")) {
      closeModal();
    }
  }
});
