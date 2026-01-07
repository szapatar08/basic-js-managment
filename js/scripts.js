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
            const i = search(searchUserDoc, users);
            if (i != -10) {
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
        document.querySelector("#check-age").style.display = "none";
        document.querySelector("#search-user-age").style.display = "inline";
        document.querySelector("#search-user-btn-age").style.display = "inline";
        
        document.querySelector("#search-user-btn-age").addEventListener("click", function() {
            const searchUserDoc = document.querySelector("#search-user-age");
            const i = search(searchUserDoc, users);
            if (i != 10) {
                hideMainMenu()
                document.querySelector("#age-container").style.display = "block";
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
        document.querySelector("#change-user-status").style.display = "none";
        document.querySelector("#search-user-status").style.display = "inline";
        document.querySelector("#search-user-btn-status").style.display = "inline";
        
        document.querySelector("#search-user-btn-status").addEventListener("click", function() {
            const searchUserDoc = document.querySelector("#search-user-status");
            const i = search(searchUserDoc, users);
            console.log(i)
            if (i != 10) {
                hideMainMenu()
                document.querySelector("#status-container").style.display = "block";
                if (users[i].estado === "activo") {
                    users[i].estado = "inactivo";
                    document.querySelector("#status-container").textContent = `El estado de ${users[i].nombre} era de activo, quedo inactivo`;
                } else {
                    users[i].estado = "activo";
                    document.querySelector("#status-container").textContent = `El estado de ${users[i].nombre} era de inactivo, quedo activo`;
                }
            } else {
                errorMessage.textContent = "No se encontraron usuarios con este documento.";
                errorMessage.style.display = "block";
            }
        })
    }
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

function hideMainMenu() {
    userRegisterBtn.style.display = "none";
    showUserInfoBtn.style.display = "none";
    checkAgeBtn.style.display = "none";
    changeUserStatusBtn.style.display = "none";
    errorMessage.style.display = "none";
}