const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", () => {
    const outputText = document.getElementById("output");
    const inputNumber = document.getElementById("number").value;

    outputText.textContent = "";
    outputText.style.backgroundColor = "";
    outputText.style.color = "";
    outputText.style.borderColor = "";

    if (!inputNumber) {
        outputText.textContent = "Please enter a valid number";
        outputText.style.backgroundColor = "#f29ec8";
        outputText.style.color = "#f20b97";
        outputText.style.borderColor = "red";
        return;
    }

    if (inputNumber <= 0 || inputNumber === -1) {
        outputText.textContent = "Please enter a number greater than or equal to 1";
        outputText.style.backgroundColor = "#f29ec8";
        outputText.style.color = "#f20b97";
        outputText.style.borderColor = "red";
        return;
    }

    if (inputNumber >= 4000) {
        outputText.textContent = "Please enter a number less than or equal to 3999";
        outputText.style.backgroundColor = "#f29ec8";
        outputText.style.color = "#f20b97";
        outputText.style.borderColor = "red";
        return;
    }

    const romanNumerals = [
        { number: 1000, romanSymbol: "M" },
        { number: 900, romanSymbol: "CM" },
        { number: 500, romanSymbol: "D" },
        { number: 400, romanSymbol: "CD" },
        { number: 100, romanSymbol: "C" },
        { number: 90, romanSymbol: "XC" },
        { number: 50, romanSymbol: "L" },
        { number: 40, romanSymbol: "XL" },
        { number: 10, romanSymbol: "X" },
        { number: 9, romanSymbol: "IX" },
        { number: 5, romanSymbol: "V" },
        { number: 4, romanSymbol: "IV" },
        { number: 1, romanSymbol: "I" }
    ];

    let result = "";
    let num = inputNumber;

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].number) {
            result += romanNumerals[i].romanSymbol;
            num -= romanNumerals[i].number;
        }
    }

    outputText.textContent = result;
});