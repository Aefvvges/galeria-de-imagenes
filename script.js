const images = document.querySelectorAll(".hover");
const imageNameDisplay = document.getElementById("nombre");

images.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
      const imageName = event.target.getAttribute("data-name");
      imageNameDisplay.textContent = imageName;
    });

    image.addEventListener("mouseout", () => {
      imageNameDisplay.textContent = "";
    });
});