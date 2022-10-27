const btn = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit-btn");
const thankYou = document.querySelector(".thank-you");
const hideRatingCard = document.getElementById("rating-card");
const showRating = document.getElementById("rating");

submitBtn.addEventListener("click", () => {
  hideRatingCard.style.display = "none";
  thankYou.classList.remove("hide");
});

btn.forEach((rating) => {
  rating.addEventListener("click", () => {
    showRating.textContent = rating.textContent;
  });
});
