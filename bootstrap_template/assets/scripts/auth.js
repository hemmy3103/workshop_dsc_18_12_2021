let loginInput, passwordInput;

window.addEventListener('DOMContentLoaded', initLogin);

/**
 * Fonction initiale
 */
function initLogin() {
    // initialiser les champs du formulaire
    loginInput = document.getElementById('exampleInputEmail1');
    passwordInput = document.querySelector('#exampleInputPassword1');
}

/**
 * Lorsque le bouton se connecter est appuyé
 */
async function onAuthenticate(event) {
    event.preventDefault();
    const login = loginInput.value;
    const pass = passwordInput.value;
    if (login && pass) {
        const users = await getUsers();
        const validUser = users.find(u => u.username === login && u.password === pass);
        if (validUser) {
            setSession(validUser);
            window.location.replace("listeProduit.html");
            return;
        } else {
            console.error("Afficher à l'utilisateur qu'il n'est pas authorisé");
        }
    } else {
        console.warn("Diriger l'utilisateur pour remplir le formulaire");
    }
    console.log(loginInput.value, passwordInput.value);
}