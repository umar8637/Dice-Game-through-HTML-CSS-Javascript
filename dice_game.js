let images = ["img1", "img2", "img3", "img4", "img5", "img6"];

images.forEach((img) => {
  let select = document.getElementById(img);
  select.style.display = "none"; //disappear all
});

let img = document.getElementById(images[0]); //instead of showing black/empty screen at start show images[0] at start
img.style.display = "block";

let button = document.getElementById("button"); //button to select random image and playing audio
button.addEventListener("click", function () {
  //audio playing
  const audio = new Audio("dice_sound.mp3");
  audio.play();

  let randomIndex = Math.floor(Math.random() * 6); //random index for for random no selection

  let selectedImage = images[randomIndex];
  console.log(`selected image is ${selectedImage}`);

  images.forEach((image) => {
    //when certain image is being shown make else one's disappear
    let img = document.getElementById(image);
    img.style.display = "none";
  });

  let img = document.getElementById(selectedImage);
  img.style.display = "block";
});
