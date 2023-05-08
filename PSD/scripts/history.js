const images = document.querySelectorAll(".horizontal_bar img");
const imageHolder = document.getElementsByTagName("body")[0];

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => {
      img.classList.remove("active");
    });

    // add the "active" class to the clicked image
    image.classList.add("active");

    // get the source of the clicked image
    const src = image.getAttribute("src");

    imageHolder.style.backgroundImage = `url(${src})`;
  });
});
