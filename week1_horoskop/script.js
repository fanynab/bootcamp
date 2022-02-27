const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    const randomNumber = (Date.now() % 3) + 1;
    console.log(randomNumber);
    function displayResult() {
        if (randomNumber === 1) {
            return "Hebat!!";
        }
        else if (randomNumber === 2) {
            return "Boleh Juga!";
        }
        else {
            return "Mengerikan...";
        }
    }

    const hasil = document.getElementById("result");
    const paragraf = document.createElement("p");
    paragraf.innerHTML = displayResult();
    hasil.append(paragraf);
});
