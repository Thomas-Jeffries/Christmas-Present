const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("image");
const message = document.getElementById("message");
const buttonContainer = document.getElementById("button-container");

let noCount = 0;
let stage = 0;

/* -----------------------------
   CREATE REVEAL BUTTON (HIDDEN)
------------------------------ */
const revealBtn = document.createElement("button");
revealBtn.innerText = "🎁 Reveal your Steam gift 🎁";
revealBtn.style.display = "none";
revealBtn.style.marginTop = "20px";
revealBtn.style.fontSize = "18px";
revealBtn.style.padding = "10px 22px";
revealBtn.style.borderRadius = "12px";
revealBtn.style.cursor = "pointer";
revealBtn.style.border = "none";
revealBtn.style.backgroundColor = "#4CAF50";
revealBtn.style.color = "white";
revealBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
revealBtn.style.transition = "transform 0.2s ease";

// Hover effect
revealBtn.addEventListener("mouseenter", () => {
  revealBtn.style.transform = "scale(1.1)";
});
revealBtn.addEventListener("mouseleave", () => {
  revealBtn.style.transform = "scale(1)";
});

// IMPORTANT: add it where the Yes/No buttons are
buttonContainer.appendChild(revealBtn);

/* -----------------------------
   YES BUTTON LOGIC
------------------------------ */
yesBtn.addEventListener("click", () => {
  stage++;

  if (stage === 1) {
    image.src = "erm-fingers.gif";
    message.innerText = "Oops… I forgot 😅";
    yesBtn.innerText = "Just kidding";
    noBtn.style.display = "none";
  } 
  else if (stage === 2) {
    image.src = "cat-dollar.gif";
    message.innerText = "Don’t spend it all at once 💸";
    yesBtn.innerText = "No, for real this time!";
  } 
  else if (stage === 3) {
    image.src = "hollow-knight.gif";
    message.innerText = "Okay okay… THIS time for real 😏";

    // Hide Yes button
    yesBtn.style.display = "none";

    // Show reveal button in the center
    revealBtn.style.display = "inline-block";
  }
});

/* -----------------------------
   REVEAL BUTTON LOGIC
------------------------------ */
revealBtn.addEventListener("click", () => {
  message.innerHTML = `
    🎮 <strong>Valorant Gift Card</strong> 🎮<br><br>
    <strong></strong> RA-F3SGQX96R3TL83CB <br><br>
    Have a very Merry Christmas Jenny ❤️<br><br>
    (You deserve it, even if you didnt get to diamond)
  `;
  revealBtn.style.display = "none";
});

/* -----------------------------
   NO BUTTON LOGIC
------------------------------ */
noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    image.src = "cute-dog.gif";
    message.innerText = "Why not? 🥺";
    yesBtn.style.transform = "scale(1.2)";
  } 
  else if (noCount === 2) {
    image.src = "please-asking.gif";
    message.innerText = "I promise you’ll like it 🥹";
    yesBtn.style.transform = "scale(1.4)";
  } 
  else {
    image.src = "pouty.gif";
    message.innerText = "Too bad 😤";
    noBtn.disabled = true;
    noBtn.style.backgroundColor = "#888";
    yesBtn.style.transform = "scale(1.6)";
  }
});
