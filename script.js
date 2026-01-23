function toggleFaq(button) {
  const faqItem = button.closest(".faq-item");
  const text = faqItem.querySelector(".faq-text");
  const icon = faqItem.querySelector(".faq-icon");

  const isHidden = text.classList.contains("hidden");

  text.classList.toggle("hidden");

  icon.src = isHidden ? "./images/minus.svg" : "./images/plus.svg";
}
