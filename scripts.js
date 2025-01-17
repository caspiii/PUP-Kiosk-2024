
// Location Data
const locations = {
    1: {
        name: "Amphitheater",
        desc: "An open area for performances and gatherings.",
        img: "images/1.jpg"
    },
    2: {
        name: "Banda Kawayan, Sining Lahi Headquarters",
        desc: "A cultural center showcasing traditional Filipino performances.",
        img: "images/2.jpg"
    },
    3: {
        name: "Building and Grounds Maintenance Office",
        desc: "The office responsible for managing campus infrastructure and upkeep.",
        img: "images/3.jpg"
    },
    4: {
        name: "Catwalk",
        desc: "A pathway connecting buildings to provide easy access around the campus.",
        img: "images/4.jpg"
    },
    5: {
        name: "Centennial Monument",
        desc: "A landmark commemorating a century of achievements and milestones.",
        img: "images/5.jpg"
    },
    6: {
        name: "Charlie Del Rosario Student Development Center",
        desc: "A facility dedicated to fostering student growth and activities.",
        img: "images/6.jpg"
    },
    7: {
        name: "East Gate",
        desc: "A major entrance located on the eastern side of the campus.",
        img: "images/7.jpg"
    },
    8: {
        name: "Flag Pole",
        desc: "The site where the national flag is ceremoniously raised.",
        img: "images/8.jpg"
    },
    9: {
        name: "Grandstand",
        desc: "A large viewing area for events, performances, and other activities.",
        img: "images/9.png"
    },
    10: {
        name: "Gymnasium",
        desc: "A facility designed for indoor sports and fitness activities.",
        img: "images/10.jpg"
    },
    11: {
        name: "Interfaith Chapel",
        desc: "A serene space open to individuals of different faiths and spiritual practices.",
        img: "images/11.jpg"
    },
    12: {
        name: "Laboratory High School",
        desc: "A high school focused on hands-on, laboratory-based learning.",
        img: "images/12.jpg"
    },
    13: {
        name: "Lagoon",
        desc: "A tranquil water feature surrounded by lush greenery.",
        img: "images/13.jpg"
    },
    14: {
        name: "Main Building - Dome",
        desc: "The central dome structure of the campus' main building.",
        img: "images/14.jpg"
    },
    15: {
        name: "Main Building - East Wing",
        desc: "The eastern wing of the main campus building housing classrooms and offices.",
        img: "images/15.jpg"
    },
    16: {
        name: "Main Building - North Wing",
        desc: "The northern section of the main campus building with various facilities.",
        img: "images/16.jpg"
    },
    17: {
        name: "Main Building - South Wing",
        desc: "The southern extension of the main campus building.",
        img: "images/17.jpg"
    },
    18: {
        name: "Main Building - West Wing",
        desc: "The western wing of the main campus building, hosting offices and classrooms.",
        img: "images/18.jpg"
    },
    19: {
        name: "Main Gate",
        desc: "The primary entrance welcoming visitors to the campus.",
        img: "images/19.jpg"
    },
    20: {
        name: "Nemensio E. Prudente Freedom Park",
        desc: "A public park symbolizing freedom and space for gatherings.",
        img: "images/20.jpg"
    },
    21: {
        name: "Ninoy Aquino Library and Learning Resources Center",
        desc: "A comprehensive library offering learning resources for students.",
        img: "images/21.jpg"
    },
    22: {
        name: "Open Court",
        desc: "An outdoor space designed for sports and recreational activities.",
        img: "images/22.jpg"
    },
    23: {
        name: "Nutrition and Food Science Building",
        desc: "A facility dedicated to the study of nutrition and food sciences.",
        img: "images/23.jpg"
    },
    24: {
        name: "Oval Open Field",
        desc: "A large field used for outdoor sports and campus events.",
        img: "images/24.jpg"
    },
    25: {
        name: "P.E. Building",
        desc: "The building dedicated to physical education and fitness training.",
        img: "images/25.jpg"
    },
    26: {
        name: "Pasig River",
        desc: "The historic river adjacent to the campus, contributing to its scenic beauty.",
        img: "images/26.jpg"
    },
    27: {
        name: "Pasig River Ferry (Sta. Mesa Station)",
        desc: "A ferry station facilitating transport along the Pasig River.",
        img: "images/27.jpg"
    },
    28: {
        name: "Proposed Access Road",
        desc: "A planned road aimed at improving campus accessibility.",
        img: "images/28.jpg"
    },
    29: {
        name: "Public Restroom",
        desc: "Convenient and accessible restroom facilities for students and visitors.",
        img: "images/29.jpg"
    },
    30: {
        name: "PUP Linear Park",
        desc: "A linear park featuring green spaces and pedestrian pathways.",
        img: "images/30.jpg"
    },
    31: {
        name: "PUP Mural and Shrine of Heroism",
        desc: "A mural and shrine honoring heroism and the legacy of the campus.",
        img: "images/31.jpg"
    },
    32: {
        name: "PUP Obelisk (Mabini Monument)",
        desc: "An obelisk dedicated to the memory of Apolinario Mabini.",
        img: "images/32.jpg"
    },
    33: {
        name: "PUP Property Building and Motorpool",
        desc: "A facility managing campus vehicles and equipment.",
        img: "images/33.jpg"
    },
    34: {
        name: "PUPylon",
        desc: "A symbolic structure representing the university's enduring legacy.",
        img: "images/34.jpg"
    },
    35: {
        name: "Sampaguita Building",
        desc: "A building hosting various student activities and events.",
        img: "images/35.jpg"
    },
    36: {
        name: "Student Pavilion",
        desc: "A hub for student organizations, events, and gatherings.",
        img: "images/36.jpg"
    },
    37: {
        name: "Swimming Pool",
        desc: "A facility for swimming and aquatic training.",
        img: "images/37.jpg"
    },
    38: {
        name: "Tennis Open Court",
        desc: "An outdoor court dedicated to tennis games and practice.",
        img: "images/38.jpg"
    },
    39: {
        name: "Water Tank",
        desc: "A campus facility used for water storage and distribution.",
        img: "images/39.jpg"
    },
    40: {
        name: "West Gate",
        desc: "An entrance located on the western side of the campus.",
        img: "images/40.jpg"
    },
    41: {
        name: "Engineering And Science Research Center",
        desc: "A hub for innovative research and scientific advancements located on campus.",
        img: "images/41.jpg"
    },
    42: {
        name: "Information Desk",
        desc: "A central point for inquiries and assistance for students and visitors.",
        img: "images/42.jpg"
    },
    43: {
        name: "PUP Souvenir Shop",
        desc: "A shop offering a variety of PUP-branded merchandise and memorabilia.",
        img: "images/43.jpg"
    },
    44: {
        name: "Visitors Lounge",
        desc: "A comfortable area for visitors to relax and wait.",
        img: "images/44.jpg"
    },
    45: {
        name: "Museo Ni Apolinario Mabini",
        desc: "A museum dedicated to the life and legacy of Apolinario Mabini, the Sublime Paralytic.",
        img: "images/45.jpg"
    },
    46: {
        name: "Motor Parking",
        desc: "A designated parking area for motorcycles on campus.",
        img: "images/46.jpg"
    },
    47: {
        name: "Public Assistance & Complaint Desk",
        desc: "A desk for addressing public concerns and providing assistance to the community.",
        img: "images/47.jpg"
    },
    48: {
        name: "PUP Pumping Station",
        desc: "A facility responsible for the campus water supply system.",
        img: "images/48.jpg"
    },
    49: {
        name: "Medical Clinic",
        desc: "A healthcare facility providing medical services to students and staff.",
        img: "images/49.jpg"
    },
    50: {
        name: "Famo Building",
        desc: "An academic building that houses various classrooms and offices equipments.",
        img: "images/50.jpg"
    }
};

  
function navigateToLocation(id) {
    const location = locations[id];
    const mapPoint = document.querySelector(`.map-point[data-id='${id}']`);

    if (mapPoint && location) {
        // Scroll to map point
        mapPoint.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

        // Display popup
        const popup = document.getElementById("popup");
        const rect = mapPoint.getBoundingClientRect();

        popup.style.left = `${rect.left + window.scrollX}px`;
        popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight}px`;

        document.getElementById("popup-img").src = location.img;
        document.getElementById("popup-title").textContent = location.name;
        document.getElementById("popup-desc").textContent = location.desc;

        popup.style.display = "block";
    }
}

// Event listeners for hover interactions
document.querySelectorAll(".map-point").forEach((point) => {
    point.addEventListener("mouseenter", (e) => {
        const id = e.target.dataset.id;
        const popup = document.getElementById("popup");
        const location = locations[id];

        popup.style.left = `${e.pageX}px`;
        popup.style.top = `${e.pageY}px`;

        document.getElementById("popup-img").src = location.img;
        document.getElementById("popup-title").textContent = location.name;
        document.getElementById("popup-desc").textContent = location.desc;

        popup.style.display = "block";
    });

    point.addEventListener("mouseleave", () => {
        document.getElementById("popup").style.display = "none";
    });
});


// Code made by Justin James Corral BSIT 3-3 2024 
