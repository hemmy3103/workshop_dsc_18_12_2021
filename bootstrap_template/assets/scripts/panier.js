
window.addEventListener("DOMContentLoaded", initPaniers);

/**
 * Fonction initiale, cad ce qui va s'executer dès que la page est chargée
 */
function initPaniers(){
    
    // recuperer le panier
    paniers = getPaniers();
    products = getProducts();
    
    provideMenu();
    if(paniers != ""){
        updatePaniersView();
    }
    

    //EVENEMENT click du bouton ajout panier
    addPanierButton = document.querySelector('#add-panier');
    addPanierButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('menu');
        const quantity = document.getElementById('quantity-add');
        

        if (name.value && quantity.value) {
            addPaniers({name: name.value, quantity: quantity.value , price : 1000});
            name.value = '';
            quantity.value = '';
        }
    });
}

//les menu dans le panier venant du product
function provideMenu(){
    products = products.map(element => {
        let menu = `<option value="${element.name}"> ${element.name} </option>`
        return menu
    }).join('')
    document.getElementById('menu').innerHTML += products
}

//ajout panier
function addPaniers(value) {
    // ajouter le nouveau element au tab produits
    const id = paniers.length > 0 ? (paniers[paniers.length - 1].id + 1) : 0;
    paniers.push({id, ...value});
    // persister le changement
    setPaniers(paniers);
    addToPaniersView({id, ...value});
}

function addToPaniersView(element){
     //ajouter un panier
     const panierBody = document.getElementById('panierTab');
     panierBody.innerHTML += `
      <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.quantity}</td>
            <td>${element.price * element.quantity} ar</td>
      </tr>
     `
     totalPrixPanier()
}


function updatePaniersView(){
    let listPaniers = paniers.map( element => {
    let ligne =`
        <tr>
          <th scope="row">${element.id}</th>
             <td>${element.name}</td>
             <td>${element.price} ar</td>
             <td>${element.quantity}</td>
             <td>${element.price * element.quantity} ar</td>
         </tr>
        `
    return ligne
    }).join('')
    document.getElementById('panierTab').innerHTML=listPaniers;
    totalPrixPanier()
}

function totalPrixPanier(){
    let totalPrix = paniers.map( element => element.quantity*element.price ).reduce((compteur,element)=>compteur+element)
    document.getElementById('Prix-Total').innerHTML=totalPrix+" ar"
}