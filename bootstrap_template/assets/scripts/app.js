

/** La fonction initiale **/
window.addEventListener("DOMContentLoaded", init);

/**
 * Fonction initiale, cad ce qui va s'executer dès que la page est chargée
 */
function init() {
    // verififier l'authentification
    if (!getSession()) { // pas de session courante
        window.location.replace('login.html'); // redirection à login page
        return;
    }
    document.getElementById('sign-out').addEventListener('click',logout)

}

function logout() {
    removeSession();
    window.location.replace('login.html'); // redirection à login page
    return;
}