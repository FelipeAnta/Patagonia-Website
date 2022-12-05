const product = [
    {
        id: 0,
        image:'img/patagonia247.jpeg',
        title:'Patagonia 24/7',
        price: 120,
    },
    {
        id: 1,
        image:'img/patagoniaAmber.jpeg',
        title:'Patagonia Amber',
        price: 120,
    },
    {
        id: 2,
        image:'img/patagoniaHoppy.jpeg',
        title:'Patagonia Hoppy',
        price: 120,
    },
    {
        id: 3,
        image:'img/patagoniaKune.jpeg',
        title:'Patagonia Kune',
        price: 120,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')