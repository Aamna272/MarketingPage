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

// const navbar = document.querySelector(".navbar");
// const scrollThreshold = 1000;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > scrollThreshold) {
//     // alert("threshold reached");
//     navbar.classList.remove("hidden");
//     navbar.classList.add("flex");
//   } else {
//     navbar.classList.remove("flex");
//     navbar.classList.add("hidden");
//   }
// });

let isVisible = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500 && !isVisible) {
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("translate-y-0", "mt-8", "md:mt-11");
    isVisible = true;
  }

  if (window.scrollY <= 500 && isVisible) {
    navbar.classList.remove("translate-y-0", "mt-8", "md:mt-11");
    navbar.classList.add("-translate-y-full");
    isVisible = false;
  }
});
