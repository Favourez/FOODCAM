document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantName = urlParams.get('restaurant');

    // Function to get dishes by restaurant name from the mock API
    function getDishes(restaurantName) {
        const dishesData = {
            "The Famous": [
                { dish: "Beef Stroganoff", price: "5000 CFA", image: "styles/menu/fame1.jpeg" },
                { dish: "Grilled Salmon", price: "6000 CFA", image: "styles/menu/fame2.jpeg" },
                { dish: "Chicken Caesar Salad", price: "3500 CFA", image: "styles/menu/fame3.jpeg" },
                { dish: "Vegetable Soup", price: "2500 CFA", image: "styles/menu/fame4.jpeg" },
                { dish: "Chocolate Lava Cake", price: "2000 CFA", image: "styles/menu/fame5.jpeg" },
                { dish: "Spaghetti Carbonara", price: "4000 CFA", image: "styles/menu/fame6.jpeg" },
                { dish: "Margherita Pizza", price: "3500 CFA", image: "styles/menu/fame7.jpeg" },
                { dish: "Lamb Chops", price: "7000 CFA", image: "styles/menu/fame8.jpeg" },
                { dish: "Shrimp Scampi", price: "6000 CFA", image: "styles/menu/fame9.jpeg" },
                { dish: "Tiramisu", price: "2500 CFA", image: "styles/menu/fame10.jpeg" },
            ],
            "Instanbul": [
                { dish: "Chicken Kebab", price: "4500 CFA", image: "styles/menu/is1.jpeg" },
                { dish: "Lamb Kofta", price: "5000 CFA", image: "styles/menu/is2.jpeg"},
                { dish: "Falafel Wrap", price: "3000 CFA", image: "styles/menu/is3.jpeg"},
                { dish: "Turkish Pizza", price: "3500 CFA", image: "styles/menu/is4.jpeg" },
                { dish: "Baklava", price: "2000 CFA", image: "styles/menu/is5.jpeg" },
                { dish: "Grilled Halloumi", price: "2500 CFA",image: "styles/menu/is6.jpeg" },
                { dish: "Hummus with Pita", price: "2000 CFA", image: "styles/menu/is7.jpeg" },
                { dish: "Lentil Soup", price: "2000 CFA", image: "styles/menu/is8.jpeg" },
                { dish: "Dolma", price: "3000 CFA" ,image: "styles/menu/is9.jpeg" },
                { dish: "Stuffed Grape Leaves", price: "3500 CFA", image: "styles/menu/is10.jpeg" }
            ],
            "Le Gourmet": [
                { dish: "Duck Confit", price: "7000 CFA" ,image: "styles/menu/goum1.jpeg" },
                { dish: "Escargots", price: "6000 CFA",image: "styles/menu/goum2.jpeg" },
                { dish: "Beef Bourguignon", price: "6500 CFA",image: "styles/menu/goum3.jpeg" },
                { dish: "Ratatouille", price: "4000 CFA",image: "styles/menu/goum4.jpg" },
                { dish: "Crème Brûlée", price: "3000 CFA",image: "styles/menu/goum5.jpeg" },
                { dish: "Coq au Vin", price: "5500 CFA",image: "styles/menu/goum6.jpeg" },
                { dish: "French Onion Soup", price: "2500 CFA",image: "styles/menu/goum7.jpeg" },
                { dish: "Quiche Lorraine", price: "3000 CFA",image: "styles/menu/goum8.jpeg" },
                { dish: "Salmon Tartare", price: "5000 CFA",image: "styles/menu/goum9.jpeg" },
                { dish: "Cheese Plate", price: "4000 CFA",image: "styles/menu/goum10.jpeg" }
            ],
            "L’Authentique": [
                { dish: "Jollof Rice", price: "3500 CFA" , image: "styles/menu/aut1.jpeg" },
                { dish: "Pounded Yam with Egusi Soup", price: "5000 CFA" , image: "styles/menu/aut2.jpeg"},
                { dish: "Grilled Fish", price: "4000 CFA" , image: "styles/menu/aut3.jpeg"},
                { dish: "Beef Kebabs", price: "4500 CFA" , image: "styles/menu/aut4.jpeg"},
                { dish: "Moi Moi", price: "2500 CFA" , image: "styles/menu/aut5.jpeg"},
                { dish: "Suya", price: "3000 CFA" , image: "styles/menu/aut6.jpeg"},
                { dish: "Plantains", price: "2000 CFA" , image: "styles/menu/aut7.jpeg" },
                { dish: "Chicken Stew", price: "4000 CFA" , image: "styles/menu/aut8.jpeg" },
                { dish: "Bitterleaf Soup", price: "3500 CFA" , image: "styles/menu/aut9.jpeg"},
                { dish: "Fufu", price: "2500 CFA" , image: "styles/menu/aut10.jpeg" }
            ],
            "KMC": [
                { dish: "Fried Chicken", price: "3000 CFA" , image: "styles/menu/kmc1.jpeg"},
                { dish: "Chicken Nuggets", price: "2500 CFA", image: "styles/menu/kmc2.jpeg" },
                { dish: "French Fries", price: "1500 CFA", image: "styles/menu/kmc3.jpeg" },
                { dish: "Chocolate Cake", price: "2000 CFA", image: "styles/menu/kmc4.jpeg" },
                { dish: "Apple Pie", price: "2000 CFA", image: "styles/menu/kmc5.jpeg" },
                { dish: "Milkshake", price: "1500 CFA", image: "styles/menu/kmc6.jpeg" },
                { dish: "Coffee", price: "1000 CFA", image: "styles/menu/kmc7.jpeg" },
                { dish: "Donuts", price: "1500 CFA", image: "styles/menu/kmc8.jpeg" },
                { dish: "Chicken Burger", price: "3500 CFA", image: "styles/menu/kmc9.jpeg" },
                { dish: "Cheeseburger", price: "4000 CFA", image: "styles/menu/kmc10.jpeg" }
            ],
            "Cold stone": [
                { dish: "Grilled Tuna", price: "5500 CFA" },
                { dish: "Crab Cakes", price: "6000 CFA" },
                { dish: "Seafood Paella", price: "7000 CFA" },
                { dish: "Calamari Rings", price: "4000 CFA" },
                { dish: "Fish Tacos", price: "3500 CFA" },
                { dish: "Prawn Skewers", price: "5000 CFA" },
                { dish: "Clam Chowder", price: "3000 CFA" },
                { dish: "Shrimp Tempura", price: "4500 CFA" },
                { dish: "Seafood Pasta", price: "5500 CFA" },
                { dish: "Mango Sorbet", price: "2000 CFA" }
            ],
            "Bliss Restaurant": [
                { dish: "Spicy Chicken Wings", price: "3500 CFA" },
                { dish: "Chili Con Carne", price: "4000 CFA" },
                { dish: "BBQ Ribs", price: "6000 CFA" },
                { dish: "Hot and Spicy Pizza", price: "4500 CFA" },
                { dish: "Buffalo Cauliflower", price: "2500 CFA" },
                { dish: "Spicy Sausage Pasta", price: "3500 CFA" },
                { dish: "Jalapeno Poppers", price: "2000 CFA" },
                { dish: "Buffalo Chicken Salad", price: "3000 CFA" },
                { dish: "Spicy Quesadillas", price: "3000 CFA" },
                { dish: "Churros", price: "2000 CFA" }
            ],
            "La Force du Poulet": [
                { dish: "Grilled Chicken Sandwich", price: "3500 CFA" },
                { dish: "Chicken Caesar Wrap", price: "3000 CFA" },
                { dish: "Buffalo Chicken Salad", price: "3500 CFA" },
                { dish: "Chicken Tenders", price: "2500 CFA" },
                { dish: "BBQ Chicken Pizza", price: "4000 CFA" },
                { dish: "Chicken Quesadilla", price: "3000 CFA" },
                { dish: "Spicy Chicken Wings", price: "3500 CFA" },
                { dish: "Chicken and Waffles", price: "4000 CFA" },
                { dish: "Chicken Burrito", price: "3500 CFA" },
                { dish: "Peach Cobbler", price: "2500 CFA" }
            ],
            "Wonderland": [
                { dish: "African Beef Stew", price: "4000 CFA" },
                { dish: "Spicy Jollof Rice", price: "3500 CFA" },
                { dish: "Grilled Plantains", price: "2000 CFA" },
                { dish: "Chicken Yassa", price: "4500 CFA" },
                { dish: "Fufu with Egusi", price: "5000 CFA" },
                { dish: "Vegetable Bantu", price: "3000 CFA" },
                { dish: "Fish Kebabs", price: "4000 CFA" },
                { dish: "Beef Suya", price: "3500 CFA" },
                { dish: "Coconut Rice", price: "3000 CFA" },
                { dish: "Puff-Puff", price: "1500 CFA" }
            ],
            "African Grill": [
                { dish: "Grilled Chicken", price: "4000 CFA" },
                { dish: "Beef Steak", price: "5000 CFA" },
                { dish: "BBQ Ribs", price: "6000 CFA" },
                { dish: "Grilled Sausages", price: "3000 CFA" },
                { dish: "Spicy Chicken Wings", price: "3500 CFA" },
                { dish: "Corn on the Cob", price: "2000 CFA" },
                { dish: "Vegetable Skewers", price: "2500 CFA" },
                { dish: "Pork Chops", price: "4500 CFA" },
                { dish: "Baked Beans", price: "2000 CFA" },
                { dish: "Garlic Bread", price: "1500 CFA" }
            ],
            "The Italian Bistro": [
                { dish: "Margherita Pizza", price: "3500 CFA" },
                { dish: "Lasagna", price: "5000 CFA" },
                { dish: "Spaghetti Bolognese", price: "4000 CFA" },
                { dish: "Risotto Milanese", price: "4500 CFA" },
                { dish: "Tiramisu", price: "3000 CFA" },
                { dish: "Caprese Salad", price: "2500 CFA" },
                { dish: "Fettuccine Alfredo", price: "4000 CFA" },
                { dish: "Penne Arrabbiata", price: "3500 CFA" },
                { dish: "Prosciutto and Melon", price: "3000 CFA" },
                { dish: "Panna Cotta", price: "2500 CFA" }
            ],
            "Le Safoutier": [
                { dish: "Chicken Yassa", price: "4500 CFA" },
                { dish: "Grilled Fish", price: "4000 CFA" },
                { dish: "Ceebu Jën", price: "5000 CFA" },
                { dish: "Beef Kebabs", price: "4500 CFA" },
                { dish: "Vegetable Couscous", price: "3500 CFA" },
                { dish: "Mafe", price: "4000 CFA" },
                { dish: "Plantains", price: "2000 CFA" },
                { dish: "Lentil Soup", price: "2500 CFA" },
                { dish: "Chicken Stew", price: "4000 CFA" },
                { dish: "Bissap Juice", price: "1500 CFA" }
            ],
            "Sushi Corner": [
                { dish: "California Roll", price: "3500 CFA" },
                { dish: "Spicy Tuna Roll", price: "4000 CFA" },
                { dish: "Sashimi Platter", price: "5000 CFA" },
                { dish: "Tempura Roll", price: "4000 CFA" },
                { dish: "Miso Soup", price: "2000 CFA" },
                { dish: "Edamame", price: "1500 CFA" },
                { dish: "Rainbow Roll", price: "4500 CFA" },
                { dish: "Teriyaki Chicken Roll", price: "3500 CFA" },
                { dish: "Nigiri Sampler", price: "5000 CFA" },
                { dish: "Green Tea Ice Cream", price: "2000 CFA" }
            ],
            "Yunnicks": [
                { dish: "Beef Stroganoff", price: "5000 CFA" },
                { dish: "Chicken Alfredo", price: "4000 CFA" },
                { dish: "Grilled Salmon", price: "6000 CFA" },
                { dish: "Vegetable Stir-Fry", price: "3000 CFA" },
                { dish: "Cheesecake", price: "2500 CFA" },
                { dish: "Garlic Shrimp", price: "3500 CFA" },
                { dish: "Pork Schnitzel", price: "4500 CFA" },
                { dish: "Caesar Salad", price: "2500 CFA" },
                { dish: "Spaghetti Carbonara", price: "4000 CFA" },
                { dish: "Chocolate Fondant", price: "3000 CFA" }
            ],
            "Waffle House": [
                { dish: "Classic Waffles", price: "2500 CFA" },
                { dish: "Berry Waffles", price: "3000 CFA" },
                { dish: "Waffles with Ice Cream", price: "3500 CFA" },
                { dish: "Chocolate Waffles", price: "3000 CFA" },
                { dish: "Banana Nut Waffles", price: "3500 CFA" },
                { dish: "Maple Syrup Waffles", price: "2500 CFA" },
                { dish: "Waffle Sundae", price: "3000 CFA" },
                { dish: "Strawberry Waffles", price: "3000 CFA" },
                { dish: "Waffle Sticks", price: "2000 CFA" },
                { dish: "Hot Chocolate", price: "1500 CFA" }
            ],
            "Chinese Restaurant": [
                { dish: "Sweet and Sour Chicken", price: "4000 CFA" },
                { dish: "Kung Pao Chicken", price: "4500 CFA" },
                { dish: "Fried Rice", price: "3000 CFA" },
                { dish: "Spring Rolls", price: "2000 CFA" },
                { dish: "Beef with Broccoli", price: "4000 CFA" },
                { dish: "Hot and Sour Soup", price: "2500 CFA" },
                { dish: "Mapo Tofu", price: "3500 CFA" },
                { dish: "Peking Duck", price: "6000 CFA" },
                { dish: "Dumplings", price: "2500 CFA" },
                { dish: "Mango Pudding", price: "2000 CFA" }
            ],
            "Seven hills": [
                { dish: "Grilled Chicken", price: "4000 CFA" },
                { dish: "Beef Steak", price: "5000 CFA" },
                { dish: "BBQ Ribs", price: "6000 CFA" },
                { dish: "Vegetable Skewers", price: "2500 CFA" },
                { dish: "Corn on the Cob", price: "2000 CFA" },
                { dish: "Garlic Bread", price: "1500 CFA" },
                { dish: "Pork Chops", price: "4500 CFA" },
                { dish: "Spicy Chicken Wings", price: "3500 CFA" },
                { dish: "Baked Beans", price: "2000 CFA" },
                { dish: "Cheese Fries", price: "2000 CFA" }
            ],
            "Socrat": [
                { dish: "Mediterranean Chicken", price: "4500 CFA" },
                { dish: "Lamb Gyro", price: "5000 CFA" },
                { dish: "Falafel Plate", price: "3000 CFA" },
                { dish: "Hummus and Pita", price: "2000 CFA" },
                { dish: "Greek Salad", price: "2500 CFA" },
                { dish: "Stuffed Grape Leaves", price: "3000 CFA" },
                { dish: "Lentil Soup", price: "2000 CFA" },
                { dish: "Dolmas", price: "2500 CFA" },
                { dish: "Baklava", price: "2000 CFA" },
                { dish: "Tzatziki with Pita", price: "1500 CFA" }
            ],
            "Tchop Yamo": [
                { dish: "Cameroonian Jollof Rice", price: "3500 CFA" },
                { dish: "Grilled Chicken", price: "4000 CFA" },
                { dish: "Beef Kebabs", price: "4500 CFA" },
                { dish: "Plantains", price: "2000 CFA" },
                { dish: "Chicken Stew", price: "4000 CFA" },
                { dish: "Moi Moi", price: "2500 CFA" },
                { dish: "Fufu", price: "2000 CFA" },
                { dish: "Pepper Soup", price: "3000 CFA" },
                { dish: "Bitterleaf Soup", price: "3500 CFA" },
                { dish: "Pounded Yam", price: "2500 CFA" }
            ],
            "Le Moulin de France": [
                { dish: "Croissant", price: "1500 CFA" },
                { dish: "Baguette Sandwich", price: "2500 CFA" },
                { dish: "Quiche Lorraine", price: "3000 CFA" },
                { dish: "Crepes Suzette", price: "2500 CFA" },
                { dish: "Ratatouille", price: "4000 CFA" },
                { dish: "French Onion Soup", price: "2500 CFA" },
                { dish: "Tarte Tatin", price: "2500 CFA" },
                { dish: "Cheese Plate", price: "3000 CFA" },
                { dish: "Duck Confit", price: "7000 CFA" },
                { dish: "Eclairs", price: "2000 CFA" }
            ],
            "Myka": [
                { dish: "Grilled Tuna", price: "5500 CFA" },
                { dish: "Crab Cakes", price: "6000 CFA" },
                { dish: "Seafood Paella", price: "7000 CFA" },
                { dish: "Calamari Rings", price: "4000 CFA" },
                { dish: "Fish Tacos", price: "3500 CFA" },
                { dish: "Prawn Skewers", price: "5000 CFA" },
                { dish: "Clam Chowder", price: "3000 CFA" },
                { dish: "Shrimp Tempura", price: "4500 CFA" },
                { dish: "Seafood Pasta", price: "5500 CFA" },
                { dish: "Mango Sorbet", price: "2000 CFA" }
            ],
            "Le Carino Pizzeria": [
                { dish: "Margherita Pizza", price: "3500 CFA" },
                { dish: "Pepperoni Pizza", price: "4000 CFA" },
                { dish: "Vegetarian Pizza", price: "3500 CFA" },
                { dish: "Hawaiian Pizza", price: "4000 CFA" },
                { dish: "BBQ Chicken Pizza", price: "4500 CFA" },
                { dish: "Four Cheese Pizza", price: "4000 CFA" },
                { dish: "Pizza Bianca", price: "3500 CFA" },
                { dish: "Calzone", price: "4000 CFA" },
                { dish: "Garlic Bread", price: "1500 CFA" },
                { dish: "Tiramisu", price: "2500 CFA" }
            ],
            "Boukarou Lounge": [
                { dish: "Chicken Wings", price: "3500 CFA" },
                { dish: "Beef Sliders", price: "4000 CFA" },
                { dish: "Spicy Nachos", price: "3000 CFA" },
                { dish: "Loaded Fries", price: "2500 CFA" },
                { dish: "Barbecue Ribs", price: "5000 CFA" },
                { dish: "Mozzarella Sticks", price: "2000 CFA" },
                { dish: "Buffalo Chicken Wrap", price: "3000 CFA" },
                { dish: "Cheeseburger", price: "4000 CFA" },
                { dish: "Poutine", price: "2500 CFA" },
                { dish: "Chocolate Brownie", price: "2000 CFA" }
            ],
            "The Sushi Bar": [
                { dish: "Spicy Tuna Roll", price: "4000 CFA" },
                { dish: "California Roll", price: "3500 CFA" },
                { dish: "Dragon Roll", price: "4500 CFA" },
                { dish: "Ebi Nigiri", price: "3500 CFA" },
                { dish: "Tempura Roll", price: "4000 CFA" },
                { dish: "Sashimi Platter", price: "5000 CFA" },
                { dish: "Miso Soup", price: "2000 CFA" },
                { dish: "Edamame", price: "1500 CFA" },
                { dish: "Rainbow Roll", price: "4500 CFA" },
                { dish: "Green Tea Ice Cream", price: "2000 CFA" }
            ],
            "Panoramique Bar": [
                { dish: "Grilled Fish", price: "4000 CFA" },
                { dish: "BBQ Ribs", price: "5000 CFA" },
                { dish: "Chicken Skewers", price: "3500 CFA" },
                { dish: "Vegetable Tempura", price: "3000 CFA" },
                { dish: "Garlic Bread", price: "1500 CFA" },
                { dish: "Beef Sliders", price: "4000 CFA" },
                { dish: "Corn on the Cob", price: "2000 CFA" },
                { dish: "Spicy Sausages", price: "2500 CFA" },
                { dish: "Chicken Wings", price: "3500 CFA" },
                { dish: "Panna Cotta", price: "2500 CFA" }
            ],
            "La Terrasse": [
                { dish: "Chicken Satay", price: "3500 CFA" },
                { dish: "Grilled Vegetables", price: "2500 CFA" },
                { dish: "Beef Kebabs", price: "4000 CFA" },
                { dish: "Fish Tacos", price: "3500 CFA" },
                { dish: "Mango Salad", price: "3000 CFA" },
                { dish: "Spicy Shrimp", price: "4000 CFA" },
                { dish: "Garlic Fries", price: "2000 CFA" },
                { dish: "Caprese Salad", price: "2500 CFA" },
                { dish: "Cheese Platter", price: "3000 CFA" },
                { dish: "Lemon Tart", price: "2500 CFA" }
            ],
            "Chez Wou": [
                { dish: "Grilled Chicken", price: "4000 CFA" },
                { dish: "Chicken Stew", price: "3500 CFA" },
                { dish: "Fried Rice", price: "3000 CFA" },
                { dish: "Plantains", price: "2000 CFA" },
                { dish: "Pepper Soup", price: "2500 CFA" },
                { dish: "Moi Moi", price: "2000 CFA" },
                { dish: "Jollof Rice", price: "3500 CFA" },
                { dish: "Beef Kebabs", price: "4000 CFA" },
                { dish: "Fufu", price: "2000 CFA" },
                { dish: "Bitterleaf Soup", price: "3000 CFA" }
            ],
            "Mapamba Grill": [
                { dish: "Spicy BBQ Chicken", price: "4000 CFA" },
                { dish: "Beef Burgers", price: "3500 CFA" },
                { dish: "Grilled Sausages", price: "3000 CFA" },
                { dish: "Corn on the Cob", price: "2000 CFA" },
                { dish: "Potato Wedges", price: "2000 CFA" },
                { dish: "Garlic Bread", price: "1500 CFA" },
                { dish: "Cheese Fries", price: "2500 CFA" },
                { dish: "Grilled Fish", price: "4000 CFA" },
                { dish: "Vegetable Skewers", price: "2500 CFA" },
                { dish: "Chocolate Cake", price: "2000 CFA" }
            ],
            "The Bistro Lounge": [
                { dish: "Grilled Steak", price: "5000 CFA" },
                { dish: "Chicken Caesar Salad", price: "3000 CFA" },
                { dish: "Vegetable Stir-Fry", price: "3000 CFA" },
                { dish: "Beef Tacos", price: "3500 CFA" },
                { dish: "Spaghetti Bolognese", price: "4000 CFA" },
                { dish: "Cheesecake", price: "2500 CFA" },
                { dish: "Garlic Shrimp", price: "3500 CFA" },
                { dish: "Pork Schnitzel", price: "4500 CFA" },
                { dish: "Spicy Chicken Wings", price: "3500 CFA" },
                { dish: "Chocolate Fondant", price: "3000 CFA" }
            ],
            "Black and white": [
                { dish: "Classic Burger", price: "3500 CFA" },
                { dish: "Cheeseburger", price: "4000 CFA" },
                { dish: "Chicken Wings", price: "3000 CFA" },
                { dish: "Loaded Fries", price: "2500 CFA" },
                { dish: "BBQ Ribs", price: "5000 CFA" },
                { dish: "Mozzarella Sticks", price: "2000 CFA" },
                { dish: "Buffalo Chicken Wrap", price: "3000 CFA" },
                { dish: "Cheese Fries", price: "2000 CFA" },
                { dish: "Chocolate Brownie", price: "2000 CFA" },
                { dish: "Milkshake", price: "1500 CFA" }
            ]
        };

        return dishesData[restaurantName] || [];
    }

    function renderMenu(dishes) {
        const menuList = document.getElementById('menu-list');
        menuList.innerHTML = '';

        if (dishes.length === 0) {
            menuList.innerHTML = '<p>No menu items found.</p>';
            return;
        }

        dishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.className = 'col-md-4 mb-4';
            dishElement.innerHTML = `
                <div class="card">
                    <img src="${dish.image}" class="card-img-top" alt="${dish.dish}">
                    <div class="card-body">
                        <h5 class="card-title">${dish.dish}</h5>
                        <p class="card-text">${dish.price}</p>
                        <button class="btn btn-primary add-to-cart" data-dish="${dish.dish}">Add to Cart</button>
                    </div>
                </div>
            `;
            menuList.appendChild(dishElement);
        });
        
        // Add event listener to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const dishName = this.getAttribute('data-dish');
                addToCart(dishName);
            });
        });
    }

    // Function to handle adding items to cart
    function addToCart(dishName) {
        alert(`${dishName} has been added to your cart.`);
        // Here, you can add logic to actually manage cart items, e.g., saving to localStorage or updating UI
    }

    // Initialize the menu
    function init() {
        if (!restaurantName) {
            document.getElementById('restaurant-name').textContent = 'Restaurant not found';
            return;
        }

        document.getElementById('restaurant-name').textContent = restaurantName;
        const dishes = getDishes(restaurantName);
        renderMenu(dishes);
    }

    init();
});