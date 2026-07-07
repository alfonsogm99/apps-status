//intro

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.classList.add("active");
  }, 150);

  setTimeout(() => {
    intro.classList.add("hide");
  }, 2600);
});


//out
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault();

        const url = this.href;
        const logo = document.querySelector(".img_logo");

        logo.classList.add("hide");

        logo.addEventListener("animationend", function handler() {
            window.location.href = url;
            logo.removeEventListener("animationend", handler);
        });

    });
});