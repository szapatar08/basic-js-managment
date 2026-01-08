let users = [
    {nombre: "Santiago", apellido: "Zapata",  edad: "17", correo: "dev.santizapata@gmail.com", documento: "1033491102", genero: "masculino", estado: "activo"}
];
const userRegisterBtn = document.querySelector("#user-register");
const showUserInfoBtn = document.querySelector("#show-user-info");
const checkAgeBtn = document.querySelector("#check-age");
const changeUserStatusBtn = document.querySelector("#change-user-status");
const errorMessage = document.querySelector("#error-main-message");

// Register Users
userRegisterBtn.addEventListener("click", function() {
    displayMainMenu("none")
    document.querySelector("#error-register").style.display = "none";
    document.querySelector("#user-register-form").style.display = "block";
    document.querySelector("#user-register-form .back-home").style.display = "block";
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
                errorRegisterMesssage.textContent = "Todas las filas que tienen que completar";
                errorRegisterMesssage.style.display = "block";
            } else {
                errorRegisterMesssage.style.display = "block";
                errorRegisterMesssage.style.color = "green";
                errorRegisterMesssage.style.borderColor = "green";
                errorRegisterMesssage.textContent = "El usuario fue correctamente registrado";
                users.push({nombre: inputName.value, apellido: inputLastame.value,  edad: inputAge.value, correo: inputEmail.value, documento: inputDoc.value, genero: inputGender.value, estado: "activo"})
                console.log(users)
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
            const i = search(searchUserDoc, users);
            if (i != -10) {
                displayMainMenu("none")
                document.querySelector("#data-searched .back-home").style.display = "block";
                document.querySelector("#data-searched").style.display = "block";
                document.querySelector("#data-searched div").innerHTML = `
                <p>Nombre: ${users[i].nombre}</p>
                <p>Apellido: ${users[i].apellido}</p>
                <p>Edad: ${users[i].edad}</p>
                <p>Correo: ${users[i].correo}</p>
                <p>Documento: ${users[i].documento}</p>
                <p>Genero: ${users[i].genero}</p>
                <p>Estado: ${users[i].estado}</p>
                `;
            } else {
                errorMessage.textContent = "No se encontraron usuarios con este documento.";
                errorMessage.style.display = "block";
            }
        })
    }
})

//Check if is underage
checkAgeBtn.addEventListener("click", function() {
    if (users.length === 0){
        errorMessage.style.display = "block";
        errorMessage.textContent = "No hay usuarios registrado";
    } else {
        document.querySelector("#check-age-btn").style.display = "none";
        document.querySelector("#search-user-age").style.display = "inline";
        document.querySelector("#search-user-btn-age").style.display = "inline";
        
        document.querySelector("#search-user-btn-age").addEventListener("click", function() {
            const searchUserDoc = document.querySelector("#search-user-age");
            const i = search(searchUserDoc, users);
            if (i != 10) {
                displayMainMenu("none")
                document.querySelector("#age-container").style.display = "block";
                document.querySelector("#age-container-article .back-home").style.display = "block";
                document.querySelector("#age-container-article").style.display = "block";
                if (+users[i].edad > 17) {
                    document.querySelector("#age-container").textContent = `El usuario con nombre ${users[i].nombre} si es mayor de edad, tiene ${users[i].edad}`
                } else {
                    document.querySelector("#age-container").textContent = `El usuario con nombre ${users[i].nombre} no es mayor de edad, tiene ${users[i].edad}`
                }
            } else {
                errorMessage.textContent = "No se encontraron usuarios con este documento.";
                errorMessage.style.display = "block";
            }
        })
    }
})

//Change status
changeUserStatusBtn.addEventListener("click", function() {
    if (users.length === 0){
        errorMessage.style.display = "block";
        errorMessage.textContent = "No hay usuarios registrado";
    } else {
        document.querySelector("#change-user-status-btn").style.display = "none";
        document.querySelector("#search-user-status").style.display = "inline";
        document.querySelector("#search-user-btn-status").style.display = "inline";
        
        document.querySelector("#search-user-btn-status").addEventListener("click", function() {
            const searchUserDoc = document.querySelector("#search-user-status");
            const i = search(searchUserDoc, users);
            console.log(i)
            if (i != 10) {
                displayMainMenu("none")
                document.querySelector("#status-container").style.display = "block";
                document.querySelector("#status-container-article .back-home").style.display = "block";
                document.querySelector("#status-container-article").style.display = "block";
                if (users[i].estado === "activo") {
                    users[i].estado = "inactivo";
                    document.querySelector("#status-container").textContent = `El estado de ${users[i].nombre} era activo, quedo inactivo`;
                } else {
                    users[i].estado = "activo";
                    document.querySelector("#status-container").textContent = `El estado de ${users[i].nombre} era inactivo, quedo activo`;
                }
            } else {
                errorMessage.textContent = "No se encontraron usuarios con este documento.";
                errorMessage.style.display = "block";
            }
        })
    }
})

document.querySelector("#user-register-form .back-home").addEventListener("click", function() {
    backHome()
})

document.querySelector("#data-searched .back-home").addEventListener("click", function() {
    backHome()
})

document.querySelector("#age-container-article .back-home").addEventListener("click", function() {
    backHome()
})

document.querySelector("#status-container-article .back-home").addEventListener("click", function() {
    backHome()
})

// Functions
function search (input, array) {
    for (let i = 0; i < users.length; i ++) {
        if (input.value === array[i].documento){
        return i
        }
    }
    return -10
}

function displayMainMenu(value) {
    userRegisterBtn.style.display = value;
    showUserInfoBtn.style.display = value;
    checkAgeBtn.style.display = value;
    changeUserStatusBtn.style.display = value;
    errorMessage.style.display = value;
}

function backHome() {
    const elementoHide = ["#user-register-form", ".back-home", "#data-searched", "#age-container-article", "#status-container-article", "#search-user", "#search-user-btn", "#search-user-age", "#search-user-btn-age", "#search-user-status", "#search-user-btn-status"];
    for (let i = 0; i < elementoHide.length; i++) {
        document.querySelector(elementoHide[i]).style.display = "none";
    }
    displayMainMenu("block")
    errorMessage.style.display = "none";
    document.querySelector("#show-user-info-btn").style.display = "block";
    document.querySelector("#check-age-btn").style.display = "block";
    document.querySelector("#change-user-status-btn").style.display = "block";
}