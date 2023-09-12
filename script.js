// items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-one.jpg",
        desc: `Pancakes are a little indulgent and yet still somehow appropriate first thing in the morning, those fluffy stacks with crisped edges, dripping with maple syrup, are everything you want.`,
    },
    {
        id: 2,
        title: "Açai Bowl",
        category: "breakfast",
        price: 10.99,
        img: "./images/item-two.jpg",
        desc: `Enjoy this powerhouse of fiber, antioxidants, and healthy fats anytime you want for a fraction of the cost!`,
    },
    {
        id: 3,
        title: "Breakfast Toast",
        category: "breakfast",
        price: 6.99,
        img: "./images/item-three.jpg",
        desc: `Made with fresh ingredients, and tons of variety including fresh fruits and veggies to make sure you’re getting healthy ingredients first thing in the morning.`,
    },
    {
        id: 4,
        title: "Italian Sub Sandwich",
        category: "lunch",
        price: 13.99,
        img: "./images/item-four.jpg",
        desc: `Soft Italian sub buns are split and filled with different Italian meats and cheeses, crisp lettuce, ripe tomato, and drizzled with a homemade Italian sub dressing.`,
    },
    {
        id: 5,
        title: "Pizza",
        category: "lunch",
        price: 9.99,
        img: "./images/item-five.jpg",
        desc: `This homemade pizza crust has it all: soft & chewy with a delicious crisp and AWESOME flavor. Toppings are customizable.`,
    },
    {
        id: 6,
        title: "Bagel Sandwich",
        category: "lunch",
        price: 7.99,
        img: "./images/item-six.jpg",
        desc: `Soft, freshly-baked bagels with chicken and lettuce stuffed in between them. A nice and light lunch!`,
    },
    {
        id: 7,
        title: "Vegetable Stir-Fry",
        category: "dinner",
        price: 11.99,
        img: "./images/item-seven.jpg",
        desc: `A mixture of colorful vegetables sautéed in a sweet and savory sauce that makes for a simple weeknight dinner meal!`,
    },
    {
        id: 8,
        title: "Grilled Lamb Kebabs",
        category: "dinner",
        price: 16.99,
        img: "./images/item-eight.jpg",
        desc: `A special Mediterranean marinade that flavors and tenderizes the meat, plus a bit of grilling technique for the juiciest ever kebabs!`,
    },
    {
        id: 9,
        title: "Skillet Pork Chops",
        category: "dinner",
        price: 16.99,
        img: "./images/item-nine.jpg",
        desc: `Juicy honey garlic pork chops with caramelised edges ready and on your table in less than 15 minutes!`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-ten.jpg",
        desc: `This Pan-Seared Steak has a garlic rosemary-infused butter that makes it taste steakhouse quality. Seared and caramelized on the outside, and so juicy inside.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');


// load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});
// filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});









function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;

    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

