const hotelsData = {
    "MountainRetreat": [
        { name: "Mountain View Inn", img: "../img/hotel1.jpg", description: "Located close to the Mountain Retreat, offering breathtaking views." },
        { name: "Alpine Lodge", img: "../img/hotel4.jpg", description: "A cozy lodge with spectacular mountain vistas." }
    ],
    "SeasideParadise": [
        { name: "Seaside Escape", img: "../img/hotel2.jpg", description: "Luxurious stay near the Seaside Paradise beach, perfect for sun lovers." },
        { name: "Ocean Breeze Resort", img: "../img/hotel5.jpg", description: "Experience the calm ocean breeze with premium amenities." }
    ],
    "HistoricalCity": [
        { name: "Heritage Hotel", img: "../img/hotel3.jpg", description: "Experience culture and history near the Historical City." },
        { name: "Old Town Inn", img: "../img/hotel6.jpg", description: "A charming inn located in the heart of the historical city." }
    ],
    "EiffelTower": [
        { name: "Parisian Lux", img: "../img/hotel7.jpg", description: "Luxury hotel near the Eiffel Tower with stunning city views." },
        { name: "Champs Elysees Hotel", img: "../img/hotel8.jpg", description: "Stay close to the most famous avenue in Paris." }
    ],
    "StatueOfLiberty": [
        { name: "Liberty Tower Hotel", img: "../img/hotel9.jpg", description: "Comfortable stay near the Statue of Liberty." },
        { name: "Harbor View Suites", img: "../img/hotel10.jpg", description: "Enjoy views of the New York Harbor in luxury." }
    ],
    "GreatWall": [
        { name: "Great Wall Resort", img: "../img/hotel11.jpg", description: "Experience a stay near the Great Wall with modern amenities." },
        { name: "Emperor's Palace Hotel", img: "../img/hotel12.jpg", description: "Luxury accommodation with cultural significance near the Great Wall." }
    ]
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadHotels() {
    const attraction = getQueryParam("attraction");
    const attractionName = document.getElementById("attraction-name");
    const hotelList = document.getElementById("hotel-list");

    if (attraction && hotelsData[attraction]) {
        attractionName.textContent = attraction.replace(/([A-Z])/g, ' $1').trim();  
        
        hotelsData[attraction].forEach(hotel => {
            const hotelItem = document.createElement("div");
            hotelItem.classList.add("hotel-item");

            hotelItem.innerHTML = `
                <img src="${hotel.img}" alt="${hotel.name}">
                <h3>${hotel.name}</h3>
                <p>${hotel.description}</p>
                <a href="booking.html?hotel=${hotel.name}" class="book-btn">Book Now</a>
            `;

            hotelList.appendChild(hotelItem);
        });
    } else {
        attractionName.textContent = "Unknown Location";
        hotelList.innerHTML = `<p>No hotels found for the selected attraction.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", loadHotels);
