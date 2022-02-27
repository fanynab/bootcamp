const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    const number = document.getElementById("inputValue").value;
    console.log(number);
    function displayResult() {
        if (number == 0 || number > 100) {
            return "Invalid input";
        }
        else if (number % 3 === 0 && number % 5 === 0) {
            return "FizzBuzz!";
        }
        else if (number % 3 === 0) {
            return "Fizz!";
        }
        else if (number % 5 === 0) {
            return "Buzz!";
        }
        else {
            return number;
        }
    }

    const hasil = document.getElementById("result");
    const paragraf = document.createElement("p");
    paragraf.innerHTML = displayResult();
    hasil.append(paragraf);
});
