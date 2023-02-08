const ratingNum = [
    1,2,3,4,5
]

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    var ratings = document.getElementById('rating-selected');
    ratings.innerHTML = `you selected this number`;
})

function nextWindow() {
    var x = document.getElementById("first-panel");
    var y = document.getElementById("second-panel");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else if (x.style.display = "none") {
      y.style.display = "flex";
    }
  }



