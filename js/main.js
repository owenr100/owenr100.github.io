// Click a figure to open it larger; click outside, press Esc, or × to close.
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

document.querySelectorAll(".fig").forEach((fig) => {
  fig.querySelector(".fig-open").addEventListener("click", () => {
    const img = fig.querySelector("img");
    const title = fig.querySelector("figcaption strong");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = title ? title.textContent : "";
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());

// Close when clicking the dark area around the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});
