document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const overlayIframe = overlay.querySelector("iframe");
  const closeBtn = overlay.querySelector(".overlay-close");

  document.addEventListener("click", (e) => {
    const catcher = e.target.closest(".click-catcher");
    if (!catcher) return;

    const src = catcher.dataset.src;
    overlayIframe.src = src;
    overlay.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    overlayIframe.src = ""; // reset iframe
  });
});
