window.onload = function () {

    let form = document.querySelector("form");
    form.onsubmit = function (event) {

        event.preventDefault();
        const person1Input = document.getElementById("person1Input").value;
        const person2Input = document.getElementById("person2Input").value;
        const animalInput = document.getElementById("animalInput").value;
        const exclamationInput = document.getElementById("exclamationInput").value;
        const verbInput = document.getElementById("verbInput").value;

        console.log("verbInput = " + verbInput);
        const nounInput = document.getElementById("nounInput").value;

        document.querySelector("span#person1a").innerText = person1Input.toUpperCase();
        document.querySelector("span#person1b").innerText = person1Input.toUpperCase();
        document.querySelector("span#person1c").innerText = person1Input.toUpperCase();
        document.querySelector("span#person2a").innerText = person2Input.toUpperCase();
        document.querySelector("span#person2b").innerText = person2Input.toUpperCase();
        document.querySelector("span#animal").innerText = animalInput.toUpperCase();
        document.querySelector("span#exclamation").innerText = exclamationInput.toUpperCase();
        document.querySelector("span#verb").innerText = verbInput.toUpperCase();
        document.querySelector("span#noun").innerText = nounInput.toUpperCase();
        document.querySelector("div#story").removeAttribute("class");
    };

};
