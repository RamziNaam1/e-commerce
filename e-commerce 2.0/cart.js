
const product = [
    {
        id: 0,
        image: 'images/adidasorion2.jpg',
        title: 'Adidas Orion 2',
        price: 120,
    },
    {
        id: 1,
        image: 'images/adidassuperstar.jpg',
        title: 'Adidas Superstar',
        price: 60,
    },
    {
        id: 2,
        image: 'images/adidasWomens.jpg',
        title: 'Adidas Women',
        price: 230,
    },
    {
        id: 3,
        image: 'images/apexx826.jpg',
        title: 'Apex X826',
        price: 100,
    },
    {
        id: 4,
        image: 'images/batapower.jpg',
        title: 'Bata Power',
        price: 230,
    },
    {
        id: 5,
        image: 'images/chunkytrainer.jpg',
        title: 'Chunky Trainer',
        price: 180,
    },
    {
        id: 6,
        image: 'images/terrexhikeradidas.jpg',
        title: 'Terrex Hiker Adidas',
        price: 190,
    },
    {
        id: 7,
        image: 'images/newbalance530.jpg',
        title: 'New Balance 530',
        price: 160,
    },
    {
        id: 8,
        image: 'images/newbalance550.jpg',
        title: 'New Balance 550',
        price: 170,
    },
    {
        id: 9,
        image: 'images/nikenocta.jpg',
        title: 'Nike Nocta',
        price: 120,
    },
    {
        id: 10,
        image: 'images/nikeairyeezy1.jpg',
        title: 'Nike Air Yeezy 1',
        price: 100,
    },
    {
        id: 11,
        image: 'images/product-1.jpg',
        title: 'Running Sneaker Shoes ',
        price: 180,
    },
    {
        id: 12,
        image: 'images/product-2.jpg',
        title: 'Leather Mens Slipper',
        price: 190,
    },
    {
        id: 13,
        image: 'images/product-3.jpg',
        title: 'Nike Air Max ',
        price: 160,
    },
    {
        id: 14,
        image: 'images/product-4.png',
        title: 'Air Jordan 7 Retro',
        price: 170,
    },
    {
        id: 15,
        image: 'images/product-5.jpg',
        title: 'Nike Air Max 270 SE',
        price: 120,
    },
    {
        id: 16,
        image: 'images/product-6.jpg',
        title: 'Addidas Sneakers shoes',
        price: 100,
    },
    {
        id: 17,
        image: 'images/product-7.jpg',
        title: 'Nike Basketball Shoes',
        price: 120,
    },
    {
        id: 18,
        image: 'images/product-8.jpg',
        title: 'Simple Fabric Shoes',
        price: 100,
    },
    {
        id: 19,
        image: 'images/puma.jpg',
        title: 'Puma',
        price: 60,
    },
    {
        id: 20,
        image: 'images/pumaEkstra.jpg',
        title: 'Puma Ekstra',
        price: 230,
    },
    {
        id: 21,
        image: 'images/jordan4.jpg',
        title: 'Jordan 4',
        price: 100,
    },
    {
        id: 22,
        image: 'images/jordanXI.jpg',
        title: 'Jordan XI',
        price: 230,
    },
    {
        id: 23,
        image: 'images/flash.jpg',
        title: 'Flash',
        price: 100,
    },
];
const categories = [...new Set(product.map((item) => item.title))];

// Add event listener to search bar input
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = product.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    });
    displayItem(filteredData);
});
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2> ${price}.00 TND</h2>
                    <button onclick='addtocart("${title}", ${price})'>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};

// Display initial items
displayItem(product);

// Add items to cart array and update cart display
var cart = [];

function addtocart(title, price) {
    cart.push({ title, price });
    displaycart();
}

// Remove item from cart array and update cart display
function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

// Display items in cart and update total price
function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "TND " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var { title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "TND " + total + ".00";
            return (
                `<div class='cart-item'>
                    <p>${title}</p>
                    <h2> ${price}.00 TND</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}


