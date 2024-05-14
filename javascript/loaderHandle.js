window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 2000);
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
