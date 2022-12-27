function clicked(num) {
  let btn = document.getElementById("service" + num);
  let active = "active";
  let a = document.querySelector(".active");
  let aT = document.querySelectorAll(".textService");

  switch (num) {
    case 0:
      a.classList.toggle("service");
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
        }
      });
      break;
    case 1:
      console.log(num);
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");

          item.style.display = "block";
        }
      });
      break;
    case 2:
      console.log(num);
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      break;
    case 3:
      console.log(num);
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      break;
    case 4:
      console.log(num);
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      break;
  }
}

function repeatCarousel() {
  setInterval(() => {
    let rdm = Math.random() * (5 - 0) + 0;
    console.log(rdm);
    clicked(Math.floor(rdm));
    repeatCarousel();
  }, 10000);
}
