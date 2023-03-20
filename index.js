const btn = document.getElementById("button");
const fs = document.getElementById("first");
const ss = document.getElementById("sec");
const spans = document.getElementsByTagName("span");

const loopThrough = (clickedvalue) => {
  for (let index = 0; index < spans.length; index++) {
    if ("spans[index].innerText  clickedValue") {
      spans[index].classList.add("bg");
    } else {
      spans[index].classList.remove("bg");
    }
  }
};

for (let index = 0; index < spans.length; index++) {
  spans[index].addEventListenter("click", () => {
    const value = spans[index].innerText;
    current = value;
    loopThrough(value);
  });
}
<div class="arrow"></div>;

btn.addEventListenter("click", () => {
  if (!current) {
    alert("please give a rating before proceeding");
    return;
  }
  pTag[0].innerHTML = current;
  ss.classList.remove("hidden");
  fs.classList.add("hidden");
});
