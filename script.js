// MODAL
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

// Modal navigation logic

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.getElementsByClassName("close")[0];
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentImgIndex;
  const images = document.querySelectorAll(".img-contanier img");

  function showImage(index) {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    modal.style.display = "block";
    modalImg.src = images[index].src;
    currentImgIndex = index;
  }

  images.forEach((img, index) => {
    img.parentElement.addEventListener("click", () => {
      showImage(index);
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

  prevBtn.addEventListener("click", () => {
    showImage(currentImgIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentImgIndex + 1);
  });
});
