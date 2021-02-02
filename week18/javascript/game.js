Trump = () => {
    console.log("working");
    let trump = document.getElementById("Trump");
    let w = Math.random() * (window.innerWidth - 100);
    let h = Math.random() * (window.innerHeight - 100);
    trump.style.transform = "translate(" + w + "px, " + h + "px)";
  };

  setInterval(Trump, 500);
