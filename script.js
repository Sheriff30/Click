gsap.registerPlugin(ScrollTrigger);

const imageContainers = document.querySelectorAll(".images");

imageContainers.forEach((container) => {
  gsap.fromTo(
    container.querySelectorAll(".img-contanier"),
    {
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".img-contanier").forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
