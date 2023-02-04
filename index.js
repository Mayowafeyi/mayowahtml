const btn = document.getElementById("btn")
const total = document.getElementById("badge")

btn.addEventListener("click", function () {
  let inital = parseInt(total.innerText)
  inital += 1
  total.innerText = inital
})
