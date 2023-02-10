const firstPanel = document.querySelector('#first-panel');
const secondPanel = document.querySelector('#second-panel');
const ratingForm = document.querySelector('.btns');


ratingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const selector = "input[name=ratings]:checked";
    const selectedInput = document.querySelector(selector);

    if(selectedInput !== null){
        const selectedStar = document.querySelector("#rating-selected");
        selectedStar.textContent = "You selected " + selectedInput.getAttribute("value") + " out of 5";
        firstPanel.classList.add('hidden');
        secondPanel.classList.remove('hidden');
    }
})
