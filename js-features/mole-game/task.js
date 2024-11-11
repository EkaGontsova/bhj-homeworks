let catchedMole = document.getElementById("dead");
let escapedMole = document.getElementById("lost");

let getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      catchedMole.textContent = +catchedMole.textContent + 1;
    } else {
      escapedMole.textContent = +escapedMole.textContent + 1;
    }

    if (catchedMole.textContent == 10) {
      alert("Победа!");
      catchedMole.textContent = 0;
      escapedMole.textContent = 0;
    }

    if (escapedMole.textContent == 5) {
      alert("Вы проиграли!");
      catchedMole.textContent = 0;
      escapedMole.textContent = 0;
    }
  };
}
