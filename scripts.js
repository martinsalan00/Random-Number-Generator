document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("toggle-theme");
    const langButton = document.getElementById("toggle-lang");
    const generateButton = document.getElementById("generate-btn");
    const title = document.getElementById("title");
    const result = document.getElementById("result");
    const minInput = document.getElementById("input-min");
    const maxInput = document.getElementById("input-max");
    const logoText = document.getElementById("logo-text");

    let isEnglish = false;

    // Alterna entre temas claro e escuro
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeButton.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    // Alterna entre português e inglês
    langButton.addEventListener("click", () => {
        isEnglish = !isEnglish;
        langButton.textContent = isEnglish ? "PT" : "EN";
        title.textContent = isEnglish ? "Draw a Number" : "Sortear um Número";
        minInput.placeholder = isEnglish ? "From" : "Entre";
        maxInput.placeholder = isEnglish ? "To" : "E";
        generateButton.textContent = isEnglish ? "Draw" : "Sortear";
        
        // Atualiza o nome "DevSorteio" para "DevDraw" corretamente
        logoText.textContent = isEnglish ? "DevDraw" : "DevSorteio";
    });

    // Gera um número aleatório
    generateButton.addEventListener("click", () => {
        const min = Math.ceil(minInput.value);
        const max = Math.floor(maxInput.value);

        if (isNaN(min) || isNaN(max) || min >= max) {
            result.textContent = isEnglish ? "Invalid" : "Inválido";
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = randomNumber;
    });
});