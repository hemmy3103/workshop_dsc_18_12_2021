/** On va simuler le stockage de donnée par le biais du localstorage et de fichier json externe **/

// Gestion des utilisateurs //

const KEY = "SESSION"; // Pour servir une clée pour la sessionStorage

async function getUsers() {
    const users = await fetch("./../assets/db/users.json")
        .then(response => {
            return response.json();
        })
        .then(data => data.users);
    return users;
}

function setSession(user) {
    removeSession();
    window.sessionStorage.setItem(KEY, JSON.stringify(user));
}

function getSession() {
    return JSON.parse(window.sessionStorage.getItem(KEY));
}

function removeSession() {
    if (getSession()) {
        window.sessionStorage.removeItem(KEY);
    }
}


// Gestion des produits //





// Gestion des paniers //