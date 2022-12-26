const main1 = document.getElementById("main1")
const main2 = document.querySelector(".main2")
const submitButton = document.getElementById("submit") 
const rating = document.getElementById("rating")
const rates = document.querySelectorAll("#nums")

submitButton.addEventListener("click", () => {
      main2.classList.remove("hidden")
      main1.style.display = "none"
})

rates.forEach((rate) => {
      rate.addEventListener("click", () => {
            rating.innerHTML = rate.innerHTML
      })
})