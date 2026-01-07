let users = [
    {nombre: "Santiago", apellido: "Zapata",  edad: "17", correo: "dev.santizapata@gmail.com", documento: "1033491102", genero: "masculino", estado: "active"}
];
const userRegisterBtn = document.querySelector("#user-register");
const showUserInfoBtn = document.querySelector("#show-user-info");
const checkAgeBtn = document.querySelector("#check-age");
const changeUserStatusBtn = document.querySelector("#change-user-status");
const errorMessage = document.querySelector("#error-main-message");

userRegisterBtn.addEventListener("click", function() {
    hideMainMenu()
    document.querySelector("#user-register-form").style.display = "block";
})

showUserInfoBtn.addEventListener("click", function() {
    if (users.length === 0){
        errorMessage.style.display = "block";
        errorMessage.textContent = "No hay usuarios registrado";
    } else {
        document.querySelector("#show-user-info-btn").style.display = "none";
        document.querySelector("#search-user").style.display = "inline";
        document.querySelector("#search-user-btn").style.display = "inline";
        document.querySelector("#search-user-btn").addEventListener("click", function() {
            const searchUserDoc = document.querySelector("#search-user");
            console.log(searchUserDoc.value)
            for (let i = 0; i < users.length; i ++) {
                if (searchUserDoc.value === users[i].documento){
                    hideMainMenu()
                    document.querySelector("#data-searched").innerHTML = `
                    <p>Nombre: ${users[i].nombre}</p>
                    <p>Apellido: ${users[i].apellido}</p>
                    <p>Edad: ${users[i].edad}</p>
                    <p>Correo: ${users[i].correo}</p>
                    <p>Documento: ${users[i].documento}</p>
                    <p>Genero: ${users[i].genero}</p>
                    <p>Estado: ${users[i].estado}</p>
                    `;
                } else {
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "No hay usuarios registrados con ese documento";
                }
            }
        })
    }
})

// Functions

function hideMainMenu() {
    userRegisterBtn.style.display = "none";
    showUserInfoBtn.style.display = "none";
    checkAgeBtn.style.display = "none";
    changeUserStatusBtn.style.display = "none";
    errorMessage.style.display = "none";
}