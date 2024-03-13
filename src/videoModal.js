const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#video-modal-open");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  dialog.close();
  document.body.style.overflow = "auto";
});
