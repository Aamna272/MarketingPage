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

const navbar = document.getElementById("navbar");
const navImg = document.getElementById("navImg");
const scrollThreshold = 10;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.remove("-translate-y-full");
    navImg.classList.remove("sm:hidden");
    navbar.classList.add("translate-y-0");
    navbar.classList.add("mt-8");
    navbar.classList.add("md:mt-[46.25px]");
  } else {
    navbar.classList.remove("translate-y-0,mt-8 ,md:mt-[46.25px]");

    navbar.classList.remove("mt-8");
    navbar.classList.remove("md:mt-[46.25px]");

    navbar.classList.add("-translate-y-full");
  }
});
