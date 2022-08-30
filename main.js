const moon = document.querySelector(".moon");
const ship = document.querySelector(".ship");
const mount_1 = document.querySelector(".mount-1");
const mount_2 = document.querySelector(".mount-2");
window.addEventListener("scroll", (e) => {
  var scr = this.scrollY / 10;
  moon.style.top = `${scr}%`;
  moon.style.left = `${scr / 20 + 50}%`;
  ship.style.left = `${(scr + 40) / 2}%`;
  mount_1.style.bottom = `${scr * 5 - 180}px`;
  mount_2.style.bottom = `${scr * 10 - 300}px`;
});
