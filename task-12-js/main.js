const accordion = document.querySelectorAll(
  ".bad-practice-mid, .alternative-mid"
);

accordion.forEach((acc) => {
  let icon = acc.querySelector("i");
  let content = acc.querySelector(".accordion-content");

  content.style.maxHeight = "0";

  acc.addEventListener("click", () => {
    let Open = acc.classList.contains("active");

    if (Open) {
      acc.classList.remove("active");
      content.style.maxHeight = "0";
      icon.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
      acc.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.replace("fa-angle-down", "fa-angle-up");
    }
  });
});
