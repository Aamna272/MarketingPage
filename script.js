function faqBtn(ele) {
  const answer = ele.querySelector(".answer");
  const icon = ele.querySelector(".button-img");
  const isOpen = answer.classList.contains("open");

  if (isOpen) {
    answer.style.maxHeight = "0px";
    answer.classList.remove("open", "opacity-100");
    answer.classList.add("opacity-0");

    icon.src = "./images/plus.svg";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.classList.add("open", "opacity-100");
    answer.classList.remove("opacity-0");

    icon.src = "./images/minus.svg";
  }
}
