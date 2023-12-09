import { navbarLinks} from "../product-links/navbar-links/navbarLinks.js";

const navbar = () => {
    const navbar = document.getElementById('links');
    navbar.innerHTML = navbarLinks.map((item)=>{
    let {name,link, products, id} = item;
    if (products) {
        // If the object has a 'products' property, create a select element
        return (
            `<li key=${id} class="col">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${name}
                </button>
                <ul class="products dropdown-menu">
                ${products.map((product)=>`<li key=${product.id}><a class="dropdown-item" href="${product.link}">${product.name}</a></li>`).join('')}
                </ul>
            </li>`
        );
    } else {
        // If the object doesn't have a 'products' property, create a regular link
        return (
            `<li key=${id} class="col">
                <a href="${link}">${name}</a>
            </li>`
        );
    }
    }).join('');

    return navbar;
}

export default navbar;