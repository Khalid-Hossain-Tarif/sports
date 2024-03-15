const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#video-modal-open");
const showButton2 = document.querySelector("#video-modal-open2");
const showButton3 = document.querySelector("#video-modal-open3");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", handleShowButton);
showButton2.addEventListener("click", handleShowButton);
showButton3.addEventListener("click", handleShowButton);

function handleShowButton() {
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

closeButton.addEventListener("click", () => {
  dialog.close();
  document.body.style.overflow = "auto";
});
