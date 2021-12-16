let products, addButton;

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
    // recuperer les produits
    products = getProducts();
    // initialiser le tableau des produits
    for (const product of products) {
        addToView(product);
    }

    addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name-add');
        const price = document.getElementById('price-add');

        if (name.value && price.value) {
            addProduct({name: name.value, price: price.value});
            name.value = '';
            price.value = '';
        }
    });
}

// Alimenter le tableau (view)
function addToView(element) {
    // recuperer le conteneur des elements à afficher
    const tbody = document.getElementById('productList');
    tbody.innerHTML += `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>
                <a type="button" class="btn btn-outline-primary mr-3" href=""> <i class="fas fa-plus"></i></a> 
                <a type="button" class="btn btn-outline-primary mr-3" href=""> <i class="fas fa-edit"></i></a> 
                <a type="button" class="btn btn-outline-primary mr-3" href=""> <i class="fas fa-trash"></i></a> 
            </td>
        </tr>

    `
}

function addProduct(value) {
    // ajouter le nouveau element au tab produits
    const id = products.length > 0 ? (products[products.length - 1].id + 1) : 0;
    products.push({id, ...value});
    // persister le changement
    setProducts(products);
    addToView({id, ...value});
}

function removeProduct(id) {
    // enlever l'element en question du tab products
    products = products.filter(p => p.id === id);
    // persister le changement
    setProducts(products);
    //TODO removeFromView
}


function logout() {
    removeSession();
    window.location.replace('login.html'); // redirection à login page
    return;
}