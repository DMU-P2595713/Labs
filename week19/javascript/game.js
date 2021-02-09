Trump = () => {
    console.log("working");
    let trump = document.getElementById("Trump");
    let w = Math.random() * (window.innerWidth - 100);
    let h = Math.random() * (window.innerHeight - 100);
    trump.style.transform = "translate(" + w + "px, " + h + "px)";
  };

  setInterval(Trump, 1000);

Countdownupdate = () => {
  console.log("countdown")
  time--;
  document.getElementById('countdown').textContent = time + 's';
  if(time == 0) {
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('finalscore').textContent = "You scored " + score + " points";
  }
}

Scoreupdate = () => {
  console.log("score")
  score++;
  document.getElementById('score').textContent = score;
}

let time = 30;
let score = 0;
let countdownTimer = setInterval(Countdownupdate, 1000);


document.getElementById('Trump').addEventListener('click', Scoreupdate)
