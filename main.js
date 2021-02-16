const showMoreButton = document.getElementById("show-button");
const main_main = document.getElementById("main");
const presentation = document.getElementById("presentation");

function showContent() {
    main_main.style.display = "block";
    presentation.style.display = "none";
}

function main() {
    showMoreButton.addEventListener('click', () => showContent());
}

main()