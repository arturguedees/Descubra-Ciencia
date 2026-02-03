// função para redirecionar após o login
document.querySelector(".login-form").addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "Home/home.html";
});