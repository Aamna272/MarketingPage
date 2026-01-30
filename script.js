function faqBtn(ele) {
  const answer = ele.querySelector(".answer");
  const icon = ele.querySelector(".button-img");
  const isOpen = answer.classList.contains("hidden");
  answer.classList.toggle("hidden");

  icon.src = isOpen ? "./images/minus.svg" : "./images/plus.svg";
}

const ele = document.querySelector(".insetShadow");

ele.addEventListener("focus", () => {
  ele.classList.add("custom-inset-shadow");
});

ele.addEventListener("blur", () => {
  ele.classList.remove("custom-inset-shadow");
});
