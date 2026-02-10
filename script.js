function sayYes() {
  document.getElementById("message").innerText =
    "YAY!!! 💕 I knew you would say yes 😘";
}


const noButton = document.querySelector("button[onclick='sayNo()']");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);

  let top = window.innerHeight;
  const interval = setInterval(() => {
    top -= 2;
    heart.style.top = top + "px";
    if (top < -50) {
      heart.remove();
      clearInterval(interval);
    }
  }, 10);
}

// Call hearts when Yes is clicked
function sayYes() {
  document.getElementById("message").innerText =
    "YAY!!! 💕 I knew you would say yes 😘";

  for (let i = 0; i < 30; i++) { // create 30 hearts
    setTimeout(createHeart, i * 100);
  }
}



const photos = ["pics/pic1.jpg", "pics/pic2.jpg", "pics/pic3.jpg", "pics/pic4.jpg", "pics/pic5.jpg" , "pics/pic6.jpg", "pics/pic7.jpg", "pics/pic8.jpg"
    , "pics/pic10.png"];

let current = 0;
const photoEl = document.getElementById("photo");

// Function to show current photo
function showPhoto() {
  photoEl.src = photos[current];
}

// Swipe detection for mobile
let startX = 0;

photoEl.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

photoEl.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 30) { // swipe left → next
    current = (current + 1) % photos.length;
  } else if (endX > startX + 30) { // swipe right → previous
    current = (current - 1 + photos.length) % photos.length;
  }
  showPhoto();
});

// Desktop click navigation
photoEl.addEventListener("click", e => {
  const rect = photoEl.getBoundingClientRect();
  const clickX = e.clientX - rect.left;

  if (clickX > rect.width / 2) {
    // clicked right half → next
    current = (current + 1) % photos.length;
  } else {
    // clicked left half → previous
    current = (current - 1 + photos.length) % photos.length;
  }
  showPhoto();
});


function sayYes() {
  // small delay so the click feels intentional
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 500);
}



const iconFiles = ["icons/heart.png", "icons/hearts.png", "icons/jellyFish.png"];
const floatingContainer = document.getElementById("floating-icons");

function createFloatingIcon() {
  const iconEl = document.createElement("img");
  iconEl.src = iconFiles[Math.floor(Math.random() * iconFiles.length)];
  iconEl.classList.add("floating-icon");

  // random position
  iconEl.style.top = Math.random() * window.innerHeight + "px";
  iconEl.style.left = Math.random() * window.innerWidth + "px";

  // random initial rotation angle
  const baseAngle = (Math.random() - 0.5) * 20; // small starting tilt -10 to 10 deg

  // random size
  const size = 10 + Math.random() * 60;
  iconEl.style.width = size + "px";
  iconEl.style.height = size + "px";

  floatingContainer.appendChild(iconEl);

  // wiggle animation
  let counter = Math.random() * 1000; // random start phase
  setInterval(() => {
    counter += 0.1;
    const wiggle = Math.sin(counter) * 15; // wiggle ±15 degrees
    iconEl.style.transform = `rotate(${baseAngle + wiggle}deg)`;
    iconEl.style.top = parseFloat(iconEl.style.top) + Math.sin(counter / 2) * 0.5 + "px"; // slight vertical float
  }, 50);
}


// create 20 floating icons
for (let i = 0; i < 60; i++) {
  createFloatingIcon();
}
