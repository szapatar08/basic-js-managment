let users = [
    {nombre: "Santiago", apellido: "Zapata",  edad: "17", correo: "dev.santizapata@gmail.com", documento: "1033491102", genero: "masculino", estado: "active"}
];
const userRegisterBtn = document.querySelector("#user-register");
const showUserInfoBtn = document.querySelector("#show-user-info");
const checkAgeBtn = document.querySelector("#check-age");
const changeUserStatusBtn = document.querySelector("#change-user-status");
const errorMessage = document.querySelector("#error-main-message");

// Register Users
userRegisterBtn.addEventListener("click", function() {
    hideMainMenu()
    document.querySelector("#user-register-form").style.display = "block";
    document.querySelector("#register").addEventListener("click", function() {
        const inputName = document.querySelector("#name");
        const inputLastame = document.querySelector("#lastname");
        const inputAge = document.querySelector("#age");
        const inputEmail = document.querySelector("#email");
        const inputDoc = document.querySelector("#id");
        const inputGender = document.querySelector("#gender");
        const errorRegisterMesssage = document.querySelector("#error-register");

        if (+inputAge.value > 0 && +inputDoc.value > 0) {
            if (inputName.value === "" && inputLastame.value === "" && inputEmail.value === "") {
                errorRegisterMesssage.textContent = "All the fields have to be field";
                errorRegisterMesssage.style.display = "block";
            } else {
                errorRegisterMesssage.style.display = "block";
                errorRegisterMesssage.style.color = "green";
                errorRegisterMesssage.style.borderColor = "green";
                errorRegisterMesssage.textContent = "El usuario fue correctamente registrado";
                users.push({nombre: inputName.value, apellido: inputLastame,  edad: inputAge, correo: inputEmail, documento: inputDoc, genero: inputGender, estado: "active"})
                inputName.value = "";
                inputLastame.value = "";
                inputAge.value = "";
                inputEmail.value = "";
                inputDoc.value = "";
            }
        } else {
            errorRegisterMesssage.textContent = "The age and documento has to be bigger than 0";
            errorRegisterMesssage.style.display = "block";
        }
    })
})

// Search users
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
            let message = true;
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
                    message = false;
                } else {
                    message = true;
                }
            }
            if (message) {
                errorMessage.textContent = "No se encontraron usuarios con este documento.";
                errorMessage.style.display = "block";
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