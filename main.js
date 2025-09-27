const btn = document.getElementById("likeBtn");
const plus = document.getElementById("plusOne");

btn.addEventListener("click", (thancks) => {
  plus.style.opacity = "1";
  plus.style.transform = "translateX(-50%) translateY(-20px)";
  setTimeout(() => {
    plus.style.opacity = "0";
    plus.style.transform = "translateX(-50%) translateY(0)";
  }, 800);
});
