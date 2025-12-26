const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("image");
const message = document.getElementById("message");

let noCount = 0;
let stage = 0;

// YES button logic
// YES button logic
yesBtn.addEventListener("click", () => {
  stage++;

  if (stage === 1) {
    image.src = "erm-fingers.gif"; // Yes clicked first
    message.innerText = "Oops… I forgot 😅";
    yesBtn.innerText = "Just kidding";
    noBtn.style.display = "none";
  } 
  else if (stage === 2) {
    image.src = "cat-dollar.gif"; // Just kidding clicked
    message.innerText = "Don’t spend it all at once 💸";
    yesBtn.innerText = "No, for real this time!";
  } 
  else if (stage === 3) {
    image.src = "hollow-knight.gif"; // Final Yes click
    message.innerHTML = `
      🎮 Steam Gift Card 🎮<br><br>
      <strong>XXXX-XXXX-XXXX</strong><br><br>
      Merry Christmas ❤️
    `;
    yesBtn.style.display = "none";
  }
});

// NO button logic
noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    image.src = "cute-dog.gif"; // First No click
    message.innerText = "Why not? 🥺";
    yesBtn.style.transform = "scale(1.2)";
  } 
  else if (noCount === 2) {
    image.src = "please-asking.gif"; // Second No click
    message.innerText = "I promise you’ll like it 🥹";
    yesBtn.style.transform = "scale(1.4)";
  } 
  else {
    image.src = "pouty.gif"; // Third No click
    message.innerText = "Too bad 😤";
    noBtn.disabled = true;
    noBtn.style.backgroundColor = "#888";
    yesBtn.style.transform = "scale(1.6)";
  }
});

