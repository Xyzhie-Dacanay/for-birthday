function revealMessage() {
  const message = document.getElementById("message");
  message.style.display = "block";
  message.classList.add("fade-in");

  message.innerText = `Labb, happy happy birthdayyy!

You know what, I’m so proud of you palagi dahil sa mga bagay na kaya mong i-handle at pagsabay-sabayin. Kahit na busy ka sa org, acads, at family mo, nagagawa mo pa rin magkaroon ng time para sa atin. I know na hindi madali and nakaka-pressure, lalo na’t humihirap na ‘yung subjects mo, but you still make sure na pasado ka and mataas ang score mo and that’s something I admire so much sa’yo simula pa nung SHS tayo.

Hindi ko man nasasabi sa’yo palagi, pero please know that I’m always here. I will do my best para mapasaya ka, at para ako ‘yung maging pahinga mo every time na pagod ka na sa school or kapag may problema ka.

I hope you enjoy this day sa pag-celebrate ng birthday mo with your family. And I hope maging masaya ka talaga sa birthday mo.

Gusto ko lang sabihin na I’m really thankful kasi nabuhay ka sa mundong ‘to and I’m really lucky to call you mine.

Happy happy birthday ulit, lovey. I love you every single day. 🩷`;

  launchChickens();
}

function launchChickens() {
  const numChickens = 20;

  for (let i = 0; i < numChickens; i++) {
    const chicken = document.createElement("img");
    chicken.src = "chicken.png";
    chicken.classList.add("flying-chicken");

    // Random position & size
    chicken.style.left = Math.random() * 100 + "vw";
    chicken.style.top = Math.random() * 100 + "vh";
    chicken.style.width = Math.random() * 60 + 40 + "px";

    document.body.appendChild(chicken);

    // Auto-remove after animation
    setTimeout(() => {
      chicken.remove();
    }, 4000);
  }
}
