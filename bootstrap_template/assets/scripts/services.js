/** On va simuler le stockage de donnée par le biais du localstorage et de fichier json externe **/

// Gestion des utilisateurs //

const KEY = "SESSION"; // Pour servir une clée pour la sessionStorage

async function getUsers() {
    const users = await fetch("./../assets/db/users.json")
        .then(response => {
            return response.json();
        })
        //function get(data){return data.users}
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

const KEY_PRODUCTS = "PRODUCTS";

function getProducts() {
    const products = JSON.parse(window.localStorage.getItem(KEY_PRODUCTS));
    if (!products) {
        window.localStorage.setItem(KEY_PRODUCTS, JSON.stringify([]));
        return [];
    }
    return products;
}

function setProducts(products) {
    window.localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
}


// Gestion des paniers //
const KEY_PANIERS = "PANIERS";

function getPaniers() {
    const paniers = JSON.parse(window.sessionStorage.getItem(KEY_PANIERS));
    if (!paniers) {
        window.sessionStorage.setItem(KEY_PANIERS, JSON.stringify([]));
        return [];
    }
    return paniers;
}

function setPaniers(paniers) {
    window.sessionStorage.setItem(KEY_PANIERS, JSON.stringify(paniers));
}