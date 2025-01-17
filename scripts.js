// Location Data
const locations = {
    1: {
        name: "Amphitheater",
        desc: "An open area for performances and gatherings.",
        img: "images/1.jpg",
        position: { top: "51%", left: "37%" },
    },
    2: {
        name: "Banda Kawayan, Sining Lahi Headquarters",
        desc: "A cultural center showcasing traditional Filipino performances.",
        img: "images/2.jpg",
        position: { top: "8%", left: "26%" },
    },
    3: {
        name: "Building and Grounds Maintenance Office",
        desc: "The office responsible for managing campus infrastructure and upkeep.",
        img: "images/3.jpg",
        position: { top: "92%", left: "33%" },
    },
    4: {
        name: "Catwalk",
        desc: "A pathway connecting buildings to provide easy access around the campus.",
        img: "images/4.jpg",
        position: { top: "40%", left: "67%" },
    },
    5: {
        name: "Centennial Monument",
        desc: "A landmark commemorating a century of achievements and milestones.",
        img: "images/5.jpg",
        position: { top: "42%", left: "49%" },
    },
    6: {
        name: "Charlie Del Rosario Student Development Center",
        desc: "A facility dedicated to fostering student growth and activities.",
        img: "images/6.jpg",
        position: { top: "38%", left: "17%" },
    },
    7: {
        name: "East Gate",
        desc: "A major entrance located on the eastern side of the campus.",
        img: "images/7.jpg",
        position: { top: "88%", left: "90%" },
    },
    8: {
        name: "Flag Pole",
        desc: "The site where the national flag is ceremoniously raised.",
        img: "images/8.jpg",
        position: { top: "57%", left: "52%" },
    },
    9: {
        name: "Grandstand",
        desc: "A large viewing area for events, performances, and other activities.",
        img: "images/9.png",
        position: { top: "61%", left: "65%" },
    },
    10: {
        name: "Gymnasium",
        desc: "A facility designed for indoor sports and fitness activities.",
        img: "images/10.jpg",
        position: { top: "14%", left: "72%" },
    },
    11: {
        name: "Interfaith Chapel",
        desc: "A serene space open to individuals of different faiths and spiritual practices.",
        img: "images/11.jpg",
        position: { top: "78%", left: "48%" },
    },
    12: {
        name: "Laboratory High School",
        desc: "A high school focused on hands-on, laboratory-based learning.",
        img: "images/12.jpg",
        position: { top: "23%", left: "17%" },
    },
    13: {
        name: "Lagoon",
        desc: "A tranquil water feature surrounded by lush greenery.",
        img: "images/13.jpg",
        position: { top: "43%", left: "41%" },
    },
    14: {
        name: "Main Building - Dome",
        desc: "The central dome structure of the campus' main building.",
        img: "images/14.jpg",
        position: { top: "67%", left: "36%" },
    },
    15: {
        name: "Main Building - East Wing",
        desc: "The eastern wing of the main campus building housing classrooms and offices.",
        img: "images/15.jpg",
        position: { top: "79%", left: "35%" },
    },
    16: {
        name: "Main Building - North Wing",
        desc: "The northern section of the main campus building with various facilities.",
        img: "images/16.jpg",
        position: { top: "61%", left: "44%" },
    },
    17: {
        name: "Main Building - South Wing",
        desc: "The southern extension of the main campus building.",
        img: "images/17.jpg",
        position: { top: "74%", left: "26%" },
    },
    18: {
        name: "Main Building - West Wing",
        desc: "The western wing of the main campus building, hosting offices and classrooms.",
        img: "images/18.jpg",
        position: { top: "60%", left: "27%" },
    },
    19: {
        name: "Main Gate",
        desc: "The primary entrance welcoming visitors to the campus.",
        img: "images/19.jpg",
        position: { top: "43%", left: "90%" },
    },
    20: {
        name: "Nemensio E. Prudente Freedom Park",
        desc: "A public park symbolizing freedom and space for gatherings.",
        img: "images/20.jpg",
        position: { top: "53%", left: "54%" },
    },
    21: {
        name: "Ninoy Aquino Library and Learning Resources Center",
        desc: "A comprehensive library offering learning resources for students.",
        img: "images/21.jpg",
        position: { top: "23%", left: "34%" },
    },
    22: {
        name: "Open Court",
        desc: "An outdoor space designed for sports and recreational activities.",
        img: "images/22.jpg",
        position: { top: "29%", left: "63%" },
    },
    23: {
        name: "Nutrition and Food Science Building",
        desc: "A facility dedicated to the study of nutrition and food sciences.",
        img: "images/23.jpg",
        position: { top: "92%", left: "46%" },
    },
    24: {
        name: "Oval Open Field",
        desc: "A large field used for outdoor sports and campus events.",
        img: "images/24.jpg",
        position: { top: "71%", left: "75%" },
    },
    25: {
        name: "P.E. Building",
        desc: "The building dedicated to physical education and fitness training.",
        img: "images/25.jpg",
        position: { top: "16%", left: "47%" },
    },
    26: {
        name: "Pasig River",
        desc: "The historic river adjacent to the campus, contributing to its scenic beauty.",
        img: "images/26.jpg",
        position: { top: "75%", left: "7%" },
    },
    27: {
        name: "Pasig River Ferry (Sta. Mesa Station)",
        desc: "A ferry station facilitating transport along the Pasig River.",
        img: "images/27.jpg",
        position: { top: "92%", left: "21%" },
    },
    28: {
        name: "Proposed Access Road",
        desc: "A planned road aimed at improving campus accessibility.",
        img: "images/28.jpg",
        position: { top: "59%", left: "60%" },
    },
    29: {
        name: "Public Restroom",
        desc: "Convenient and accessible restroom facilities for students and visitors.",
        img: "images/29.jpg",
        position: { top: "55%", left: "22%" },
    },
    30: {
        name: "PUP Linear Park",
        desc: "A linear park featuring green spaces and pedestrian pathways.",
        img: "images/30.jpg",
        position: { top: "62%", left: "15%" },
    },
    31: {
        name: "PUP Mural and Shrine of Heroism",
        desc: "A mural and shrine honoring heroism and the legacy of the campus.",
        img: "images/31.jpg",
        position: { top: "47%", left: "90%" },
    },
    32: {
        name: "PUP Obelisk (Mabini Monument)",
        desc: "An obelisk dedicated to the memory of Apolinario Mabini.",
        img: "images/32.jpg",
        position: { top: "42%", left: "55%" },
    },
    33: {
        name: "PUP Property Building and Motorpool",
        desc: "A facility managing campus vehicles and equipment.",
        img: "images/33.jpg",
        position: { top: "10%", left: "8%" },
    },
    34: {
        name: "PUPylon",
        desc: "A symbolic structure representing the university's enduring legacy.",
        img: "images/34.jpg",
        position: { top: "39%", left: "90%" },
    },
    35: {
        name: "Sampaguita Building",
        desc: "A building hosting various student activities and events.",
        img: "images/35.jpg",
        position: { top: "53%", left: "17%" },
    },
    36: {
        name: "Student Pavilion",
        desc: "A hub for student organizations, events, and gatherings.",
        img: "images/36.jpg",
        position: { top: "46%", left: "70%" },
    },
    37: {
        name: "Swimming Pool",
        desc: "A facility for swimming and aquatic training.",
        img: "images/37.jpg",
        position: { top: "14%", left: "57%" },
    },
    38: {
        name: "Tennis Open Court",
        desc: "An outdoor court dedicated to tennis games and practice.",
        img: "images/38.jpg",
        position: { top: "29%", left: "74%" },
    },
    39: {
        name: "Water Tank",
        desc: "A campus facility used for water storage and distribution.",
        img: "images/39.jpg",
        position: { top: "16%", left: "27%" },
    },
    40: {
        name: "West Gate",
        desc: "An entrance located on the western side of the campus.",
        img: "images/40.jpg",
        position: { top: "29%", left: "91%" },
    },
    41: {
        name: "Engineering And Science Research Center",
        desc: "A hub for innovative research and scientific advancements located on campus.",
        img: "images/41.jpg",
        position: { top: "15%", left: "87%" },
    },
    42: {
        name: "Information Desk",
        desc: "A central point for inquiries and assistance for students and visitors.",
        img: "images/42.jpg",
        position: { top: "46%", left: "87%" },
    },
    43: {
        name: "PUP Souvenir Shop",
        desc: "A shop offering a variety of PUP-branded merchandise and memorabilia.",
        img: "images/43.jpg",
        position: { top: "45%", left: "65%" },
    },
    44: {
        name: "Visitors Lounge",
        desc: "A comfortable area for visitors to relax and wait.",
        img: "images/44.jpg",
        position: { top: "36%", left: "85%" },
    },
    45: {
        name: "Museo Ni Apolinario Mabini",
        desc: "A museum dedicated to the life and legacy of Apolinario Mabini, the Sublime Paralytic.",
        img: "images/45.jpg",
        position: { top: "64%", left: "59%" },
    },
    46: {
        name: "Motor Parking",
        desc: "A designated parking area for motorcycles on campus.",
        img: "images/46.jpg",
        position: { top: "46%", left: "83%" },
    },
    47: {
        name: "Public Assistance & Complaint Desk",
        desc: "A desk for addressing public concerns and providing assistance to the community.",
        img: "images/47.jpg",
        position: { top: "62%", left: "36%" },
    },
    48: {
        name: "PUP Pumping Station",
        desc: "A facility responsible for the campus water supply system.",
        img: "images/48.jpg",
        position: { top: "69%", left: "17%" },
    },
    49: {
        name: "Medical Clinic",
        desc: "A healthcare facility providing medical services to students and staff.",
        img: "images/49.jpg",
        position: { top: "84%", left: "36%" },
    },
    50: {
        name: "Famo Building",
        desc: "An academic building that houses various classrooms and offices equipments.",
        img: "images/50.jpg",
        position: { top: "80%", left: "19%" },
    },
};

const mapContainer = document.querySelector(".map-container");
const locationList = document.getElementById("location-list");

Object.keys(locations).forEach((id) => {
    const location = locations[id];

    // Create a new div element for the map point
    const mapPoint = document.createElement("div");
    mapPoint.className = "map-point";
    mapPoint.style.top = location.position.top;
    mapPoint.style.left = location.position.left;
    mapPoint.dataset.id = id;
    mapPoint.textContent = id;

    // Append the map point to the map container
    mapContainer.appendChild(mapPoint);
});

Object.keys(locations).forEach((id) => {
    const location = locations[id];

    // Create a new span element
    const locationItem = document.createElement("span");
    locationItem.textContent = `${id}. ${location.name}`;

    // Append the span to the list container
    locationList.appendChild(locationItem);
});

// Event listeners for hover interactions
document.querySelectorAll(".map-point").forEach((point) => {
    point.addEventListener("mouseenter", (e) => {
        const id = e.target.dataset.id;
        const popup = document.getElementById("popup");
        const location = locations[id];

        // Get the map-container element's position
        const mapContainer = document.querySelector(".map-container");
        const mapRect = mapContainer.getBoundingClientRect();

        // Calculate the absolute position of the popup based on the location position
        const popupLeft =
            mapRect.left +
            mapRect.width * (parseFloat(location.position.left) / 100);
        const popupTop =
            mapRect.top +
            mapRect.height * (parseFloat(location.position.top) / 100);

        // Position the popup
        popup.style.left = `${popupLeft - popup.offsetWidth - -7}px`; // Center horizontally
        popup.style.top = `${popupTop - popup.offsetHeight - 20}px`; // Above the map point with padding

        // Update popup content
        document.getElementById("popup-img").src = location.img;
        document.getElementById("popup-title").textContent = location.name;
        document.getElementById("popup-desc").textContent = location.desc;

        // Display the popup
        popup.style.display = "block";
    });

    point.addEventListener("mouseleave", () => {
        // Hide the popup when the mouse leaves the map point
        document.getElementById("popup").style.display = "none";
    });
});

// Add hover interactions for location list items
document.querySelectorAll("#location-list span").forEach((listItem, index) => {
    listItem.addEventListener("mouseenter", () => {
        const id = index + 1; // Match the location ID with the array index
        const popup = document.getElementById("popup");
        const location = locations[id];

        // Get the map-container element's position
        const mapContainer = document.querySelector(".map-container");
        const mapRect = mapContainer.getBoundingClientRect();

        // Calculate the absolute position of the popup based on the location position
        const popupLeft =
            mapRect.left +
            mapRect.width * (parseFloat(location.position.left) / 100);
        const popupTop =
            mapRect.top +
            mapRect.height * (parseFloat(location.position.top) / 100);

        // Position the popup
        popup.style.left = `${popupLeft - popup.offsetWidth - -7}px`; // Center horizontally
        popup.style.top = `${popupTop - popup.offsetHeight - 20}px`; // Above the map point with padding

        // Update popup content
        document.getElementById("popup-img").src = location.img;
        document.getElementById("popup-title").textContent = location.name;
        document.getElementById("popup-desc").textContent = location.desc;

        // Display the popup
        popup.style.display = "block";
    });

    listItem.addEventListener("mouseleave", () => {
        // Hide the popup when the mouse leaves the list item
        document.getElementById("popup").style.display = "none";
    });
});

// Code made by Justin James Corral BSIT 3-3 2024