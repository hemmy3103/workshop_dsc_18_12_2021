let products, addButton ;

/** La fonction initiale **/
window.addEventListener("DOMContentLoaded", initProducts);

/**
 * Fonction initiale, cad ce qui va s'executer dès que la page est chargée
 */
function initProducts(){
    // recuperer les produits
    products = getProducts();

    // initialiser le tableau des produits
    updateProductsView()

    //EVENEMENT click du bouton ajout produit
   addProductButton = document.querySelector('#add-button');
   addProductButton.addEventListener('click', function(event) {
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
function addToProductsView(element) {
    //ajouter un produit
    const tbody = document.getElementById('productList');
    tbody.innerHTML += `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>
                <button type="button" class="btn btn-outline-primary mr-3" onclick="addfocus()"> <i class="fas fa-plus"></i></button> 
                <a type="button" class="btn btn-outline-primary mr-3" href="#"> <i class="fas fa-edit"></i></a> 
                <button type="button" class="btn btn-outline-primary mr-3" onclick="removeProduct(${element.id})"><i class="fas fa-trash"></i></button> 
            </td>
        </tr>
    `
}

function addfocus(){
    document.getElementById('name-add').focus()
}

function addProduct(value) {
    // ajouter le nouveau element au tab produits
    const id = products.length > 0 ? (products[products.length - 1].id + 1) : 0;
    products.push({id, ...value});
    // persister le changement
    setProducts(products);
    addToProductsView({id, ...value});
}

function removeProduct(id) {
    // enlever l'element en question du tab products
    products = products.filter(p => p.id != id);    
    // persister le changement
    updateProductsView()
    setProducts(products);

}
function updateProductsView(){
    let listProduits = products.map(element => {
        let ligne =`
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>
                <button type="button" class="btn btn-outline-primary mr-3" onclick="addfocus()"> <i class="fas fa-plus"></i></button> 
                <a type="button" class="btn btn-outline-primary mr-3" href="#"> <i class="fas fa-edit"></i></a> 
                <button type="button" class="btn btn-outline-primary mr-3" onclick="removeProduct(${element.id})"><i class="fas fa-trash"></i></button> 
            </td>
        </tr>
        `
        return ligne
    }).join('')
    document.getElementById('productList').innerHTML=listProduits;
}