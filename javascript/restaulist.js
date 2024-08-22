document.addEventListener('DOMContentLoaded', function() {
    const restaurants = [
        { id: 1, name: "The Famous", description: "A luxurious dining experience with a variety of international cuisines.", image: "assets/img1.jpg", location: "Bastos Yaoundé" },
        { id: 2, name: "Instanbul", description: "Cozy bistro offering local and continental dishes.", image: "assets/img2.jpeg", location: "Bastos" },
        { id: 3, name: "Le Gourmet", description: "Fine dining restaurant known for its exquisite French dishes.", image: "assets/img3.jpeg", location: "Yaoundé Central" },
        { id: 4, name: "L’Authentique", description: "Authentic Cameroonian cuisine with a homey atmosphere.", image: "assets/img4.jpeg", location: "Mfoundi" },
        { id: 5, name: "KMC", description: "Charming crispy fried chicken with a selection of pastries and coffee.", image: "assets/img5.jpg", location: "Bastos Yaounde" },
        { id: 6, name: "Cold stone", description: "Fresh seafood and a variety of fish dishes.", image: "assets/img6.jpeg", location: "Nouvelle route Bastos" },
        { id: 7, name: "Bliss Restaurant", description: "Restaurant specializing in spicy and flavorful dishes.", image: "assets/img7.jpeg", location: "Orthodoxe Bastos" },
        { id: 8, name: "La Force du Poulet", description: "Modern eatery with a trendy menu and great ambiance.", image: "assets/img8.jpg", location: "Playce Warda" },
        { id: 9, name: "Wonderland", description: "Offers traditional African dishes with a modern twist.", image: "assets/img9.jpeg", location: "Djoungolo" },
        { id: 10, name: "African Grill", description: "Specializes in grilled meats and barbecue.", image: "assets/img10.jpeg", location: "Ekounou" },
        { id: 11, name: "The Italian Bistro", description: "Italian cuisine with a range of pasta and pizza options.", image: "assets/img11.jpg", location: "Messa" },
        { id: 12, name: "Le Safoutier", description: "Top notch meals and vegan-friendly options.", image: "assets/img12.jpg", location: "Yaoundé South" },
        { id: 13, name: "Sushi Corner", description: "Japanese restaurant offering sushi and sashimi.", image: "assets/img13.jpg", location: "Nkoabang" },
        { id: 14, name: "Yunnicks", description: "Delicious pasta dishes with a variety of sauces.", image: "assets/img14.jpeg", location: "Ronf pOint Express" },
        { id: 15, name: "Waffle House", description: "Casual spot for breakfast with a range of pancakes and waffles.", image: "assets/img15.jpeg", location: "Ngoketunjia" },
        { id: 16, name: "Chinese Restaurant", description: "Asian cuisine with a focus on stir-fried dishes.", image: "assets/img16.jpeg", location: "Akwa" },
        { id: 17, name: "Seven hills", description: "Sandwiches, salads, and deli-style fare.", image: "assets/img17.jpeg", location: "Makary" },
        { id: 18, name: "Socrat", description: "Mexican restaurant with tacos, burritos, and more.", image: "assets/img18.jpeg", location: "Palais" },
        { id: 19, name: "Tchop Yamo", description: "Mediterranean dishes with fresh ingredients and vibrant flavors.", image: "assets/img19.jpeg", location: "Yoaundé" },
        { id: 20, name: "Le Moulin de France", description: "All-you-can-eat buffet with a wide range of dishes.", image: "assets/img20.jpg", location: "Yaoundé City Center" },
        { id: 21, name: "Myka", description: "Elegant café overlooking a beautiful park.", image: "assets/img21.png", location: "Central Yaoundé" },
        { id: 22, name: "Le Carino Pizzeria", description: "A bustling pizza with fresh market ingredients.", image: "assets/img22.jpeg", location: "Marché de Mokolo" },
        { id: 23, name: "Boukarou Lounge", description: "Indian restaurant known for its tandoori dishes.", image: "assets/img23.jpeg", location: "Bastos" },
        { id: 24, name: "The Sushi Bar", description: "Authentic sushi and Japanese cuisine.", image: "assets/img24.jpeg", location: "Yaoundé Center" },
        { id: 25, name: "Panoramique Bar", description: "Gourmet burgers and fast food favorites.", image: "assets/img25.jpeg", location: "Nkongsamba" },
        { id: 26, name: "La Terrasse", description: "Outdoor dining with a great view.", image: "assets/img26.jpeg", location: "Yaoundé South" },
        { id: 27, name: "Chez Wou", description: "Chinese restaurant with a wide selection of dishes.", image: "assets/img27.jpg", location: "Rue de l'Ambassade" },
        { id: 28, name: "Mapamba Grill", description: "Exotic dishes from various Asian countries.", image: "assets/img28.jpeg", location: "Playce Warda" },
        { id: 29, name: "The Bistro Lounge", description: "Lounge atmosphere with a diverse menu.", image: "assets/img29.jpeg", location: "Shell Obili" },
        { id: 30, name: "Black and white", description: "Casual café with comfort food and great coffee.", image: "assets/img30.jpeg", location: "Tsinga Yaoundé" }
    ];

    const restaurantList = document.getElementById('restaurant-list');

    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'col-md-4 restaurant-card';

        restaurantCard.innerHTML = `
            <div class="card">
                <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
                <div class="card-body">
                    <h5 class="card-title">${restaurant.name}</h5>
                    <p class="card-text">${restaurant.description}</p>
                    <p class="restaurant-location">${restaurant.location}</p>
                    <button class="btn btn-primary" onclick="viewMenu('${restaurant.name}')">View Menu</button>
                </div>
            </div>
        `;

        restaurantList.appendChild(restaurantCard);
    });
});

function viewMenu(restaurantName) {
    const url = `menu.html?restaurant=${encodeURIComponent(restaurantName)}`;
    window.location.href = url;
}
