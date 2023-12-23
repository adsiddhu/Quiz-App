const login = document.getElementById("login")
const unHide = document.getElementsByClassName("quiz-question")
login.addEventListener("click", () => {
    console.log(`login is clicked`);
    unHide.style.display = "flex"
    login.classList.toggle("quiz-question")

})
