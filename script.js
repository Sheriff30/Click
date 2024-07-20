// Ensure GSAP and ScrollTrigger are available
gsap.registerPlugin(ScrollTrigger);

// Select all .images containers
const imageContainers = document.querySelectorAll(".images");

// Loop through each .images container and set up ScrollTrigger animations
imageContainers.forEach((container) => {
  gsap.fromTo(
    container.querySelectorAll(".img-contanier"),
    {
      opacity: 0, // Start from opacity 0
    },
    {
      opacity: 1, // End at opacity 1
      y: 0, // Optional: end with no vertical offset
      duration: 1, // Duration of the animation
      stagger: 0.2, // Stagger animation for each .img-contanier
      scrollTrigger: {
        trigger: container, // Element that triggers the animation
        start: "top bottom", // When the top of the container hits the bottom of the viewport
        end: "bottom top", // When the bottom of the container hits the top of the viewport
      },
    }
  );
});
