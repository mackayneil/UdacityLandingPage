const destinations = {   
    japan: {
        name: `Japan`,
        info: `Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.`,
        fact1: `The world’s oldest company is in Japan`,
        fact2: `It has the 11th largest population in the world`,
        fact3: `There is 1 vending machine for every 24 people`,
        image: `./Assets/japan.jpg`
    },
    southafrica: {
        name: `South Africa`,
        info: `South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.`,
        fact1: `The longest continuous wine route on earth is found in South Africa`,
        fact2: `It is the largest meat producer in Africa`,
        fact3: `Table Mountain is one of the oldest mountains on the planet`,
        image: `./Assets/south_africa.jpg`
    },
    scotland: {
        name: `Scotland`,
        info: `Scotland is a country that is part of the United Kingdom. Covering the northern third of the island of Great Britain, mainland Scotland has a 96-mile (154 km) border with England to the southeast and is otherwise surrounded by the Atlantic Ocean to the north and west, the North Sea to the northeast and the Irish Sea to the south`,
        fact1: `The official animal of Scotland is the Unicorn`,
        fact2: `Scotland has approximately 790 islands`,
        fact3: `There are over 600 square miles of freshwater lakes`,
        image: `./Assets/scotland.jpg`
    },
    iceland: {
        name: `Iceland`,
        info: `Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks.`,
        fact1: `Iceland was the last place on earth to be settled by humans`,
        fact2: `About 11% of Iceland is covered by glaciers`,
        fact3: `You can swim outdoors in hot springs all year round`,
        image: `./Assets/iceland.jpg`
    },
    newzealand: {
        name: `New Zealand`,
        info: `New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and more than 700 smaller islands, covering a total area of 268,021 square kilometres.`,
        fact1: `It has the town with the longest name in the world`,
        fact2: `There are more sheep than people`,
        fact3: `It has the most southerly capital in the world`,
        image: `./Assets/new_zealand.jpg`
    },
    australia: {
        name: `Australia`,
        info: `Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country by area in Oceania and the world's sixth-largest country.`,
        fact1: `The Australian Alps get more snow than the Swiss Alps`,
        fact2: `90% of Australians live on the coast`,
        fact3: `The Great Barrier Reef is the largest eco-system in the world`,
        image: `./Assets/australia.jpg`
    },
    thailand: {
        name: `Thailand`,
        info: `Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew).`,
        fact1: `Siamese cats are native to Thailand`,
        fact2: `It is illegal to leave your house without underwear on`,
        fact3: `Thailand is the world's largest exporter of rice`,
        image: `./Assets/thailand.jpg`
    },
    france: {
        name: `France`,
        info: `France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.`,
        fact1: `France Is The Most-Visited Country In The World`,
        fact2: `France Is Smaller Than Texas`,
        fact3: `The French Eat 25,000 Tons Of Snails Each Year`,
        image: `./Assets/france.jpg`
    },
    italy: {
        name: `Italy`,
        info: `Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.`,
        fact1: `Italy has a free wine fountain`,
        fact2: `All three of Europe’s active volcanoes are in Italy`,
        fact3: `Italians invented pizza in Naples`,
        image: `./Assets/italy.jpg`
    },
    spain: {
        name: `Spain`,
        info: `Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters.`,
        fact1: `Spain discovered oranges and chocolate`,
        fact2: `Spain gave the first modern novel to the world`,
        fact3: `The Spanish anthem has no words`,
        image: `./Assets/spain.jpg`
    },
    portugal: {
        name: `Portugal`,
        info: `Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire`,
        fact1: `Portuguese Is the Official Language of Nine Countries`,
        fact2: `Portugal Is the Oldest Country in Europe`,
        fact3: `The Oldest Bookstore in the World Is in Portugal's Capital`,
        image: `./Assets/portugal.jpg`
    },
    none: {
        name: `--Please select an option--`,        
    }
}


const userData = {
    name : ``,
    place1 : ``,
    place2 : ``,
    place3 : ``,
    place4 : ``,
    place5 : ``,
    color : ``
};


// Back to top button function 
const toTopBtn = document.querySelector('#back-to-top');
      
// Scrolls back to the top of the page
let scrollToTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
};

 // Shows or hides the button depending on the height of the page       
let checkHeight = () => {
    const heroSection =  document.querySelector('#hero-section'),
          topHeight = heroSection.clientHeight / 2;
    if (window.scrollY >= topHeight) {
        toTopBtn.classList.remove('d-none')
    } else {
        toTopBtn.classList.add('d-none')
    }
}

// Invokes the back to top
let backToTop = () => { 
    window.addEventListener('scroll', checkHeight);
    toTopBtn.addEventListener('click', scrollToTop);
}
    
backToTop();

const mobileMenuBtn = document.querySelector('#mobile-menu'),
      navItems = document.querySelector('#nav-items'),
      navLinks = navItems.children;


const toggleMenu = () => {
    navItems.classList.toggle('d-none');
};

      
const menuClickEvent = () => {
        mobileMenuBtn.addEventListener('click', toggleMenu);
};

window.addEventListener('resize', function() {
    if (window.innerWidth >= 800) {
        navItems.classList.remove('d-none');
    } else {        
        navItems.classList.add('d-none');
    }
})
    

for (const i of navLinks) {
    i.addEventListener('click', function() {
        if (window.innerWidth < 800) {
            navItems.classList.add('d-none');
        }
    })
}




// Modal
const colorBtns = document.querySelectorAll('.color-btn'),            
      btnContinue = document.querySelectorAll('.continue'),
      btnBack = document.querySelectorAll('.back'),    
      resetBtn = document.querySelector('.reset'),
      btnComplete = document.querySelector('.complete'),
      userNameInput = document.querySelector('#name'),
      placeInputs = document.querySelectorAll('.inputs select');

// Prevents body scrolling when modal is open
const modal = document.querySelector('.modal'),
      body = document.querySelector('body');

if (!modal.classList.contains('d-none')) {
    body.classList.toggle('fixed')
} 

    

let currentModal = '',
    count = 0,
    btnsArray = [...btnContinue];  

// Removes and adds d-none class on slides
const moveModals = () => {
    const modals = document.querySelectorAll('.modal-contents');
    for (const i of modals) {       
        if (!i.classList.contains('d-none')) {
            currentModal = i;                
        }
    };
    currentModal.classList.add('d-none');
};

// Checks to see if input has value
let btnContinueDisabled = (index, num) => {
    if (index.value !== '') {
        btnContinue[num].disabled = false;
    } else {
        btnContinue[num].disabled = true;
    }
}

// Removes disabled from continue button only when the input contains text
userNameInput.addEventListener('keyup', function(i) {
    btnContinueDisabled(i, 0)
});

// Checks to see if a user has selected an option, if not then continue button is disabled
for (const i of placeInputs) {
    i.addEventListener('change', () => {
        btnContinueDisabled(i, 1)
    });
};


// Saves the user inputs
const saveUserInput = () => {
    userData.name = userNameInput.value;
    userData.place1 = placeInputs[0].value
    userData.place2 = placeInputs[1].value
    userData.place3 = placeInputs[2].value
    userData.place4 = placeInputs[3].value
    userData.place5 = placeInputs[4].value

    for (const i of colorBtns) {
        if (i.classList.contains('clicked')) {
            userData.color = i.getAttribute('data-hex');
        }
    }
};

// Shows error message
let showErrorMsg = () => {
    const  errorMsg = document.querySelectorAll('.error-message');
    errorMsg[count].classList.remove('d-none');
} ;

// Functionality for continue buttons
    //First continue button
btnsArray[0].addEventListener('click', (e) => {
    e.preventDefault();
      if (userNameInput.value === '') {
        showErrorMsg()
    } else {
        moveModals(); 
        currentModal.nextElementSibling.classList.remove('d-none');
        count++;   
    }
});


// Checks to see if a destination option has been selected, if not then continue button is disabled
const checkInputs = () => {
    for (const i of placeInputs) {       
        if (i.value === '--Please select an option--') {
            return false
        } else {
            return true
        }
    };
};

//Second continue button
btnsArray[1].addEventListener('click', (e) => {
    e.preventDefault();
    if (!checkInputs()) {
        showErrorMsg()
    } else {
        moveModals(); 
        currentModal.nextElementSibling.classList.remove('d-none');      
        count++;   
    }
});


// If a color button is not clicked, error message shows. If a color button is clicked, removes modal
let checkClicked = () => {
        for (const i of colorBtns) {        
            if (i.classList.contains('clicked')) {
                modal.classList.add('d-none');   
                body.classList.toggle('fixed')
            } else {
                showErrorMsg()
            }
        };
}

// Removes clicked class from all buttons
let removeClicked = () => {
    for (const i of colorBtns) {
        i.classList.remove('clicked');       
    };
};

// Envoked above function, then adds clicked class to clicked button
for (const i of colorBtns) {
    i.addEventListener('click', () => {
        removeClicked()
        i.classList.toggle('clicked');
    });
};


// Functionality for back button
for (const i of btnBack) {
    i.addEventListener('click', (e) => {       
        count--;     
        e.preventDefault();    
        moveModals();
        currentModal.previousElementSibling.classList.remove('d-none');
    });
};


//Saves the destinations object names in an array
let destinationNames = [];
for (let key in destinations) {
    if (Object.hasOwnProperty.call(destinations, key)) {
        let element = destinations[key];
        destinationNames.push(element.name);   
    }
}
// Fills in the drop downs based off of the destinations object content
for (let i of placeInputs) {
    for (const j of destinationNames) {
        let text = `<option selected value="${j}">${j}</option>`
    i.insertAdjacentHTML('afterbegin',text);
    }
 }

// Creates empty array of selected destinations
let selectedInputs = [];
// Pushes selected destinations into the array
for (const i of placeInputs) {
    i.addEventListener('change', () => {       
        selectedInputs.push(i.value);
        i.disabled = true;
    });
}

// If an option is already selected it becomes disabled in the list
for (const i of placeInputs) {
    i.addEventListener('mouseover', () => {
        let options = i.options;
        for (const i of options) {
            if (selectedInputs.includes(i.value)) {
                i.disabled = true;
            }             
        }
    });
};

// Resets the destination choices
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    selectedInputs = [];
    for (const i of placeInputs) {
        let options = i.options;
        i.disabled = false;
        i.value = '--Please select an option--';       
        for (const i of options) {            
            i.disabled = false;                      
        }
    };
})



let userSelectedPlaces = [];


// Create nav items and appends them to the nav bar
const addNavLinks = () => {
    for (let i = 0; i < 5; i++) {
        let navItem =  document.createElement('li'),
        navLink = document.createElement('a');
        navItems.append(navItem);
        navItem.appendChild(navLink)  
    };
};

const highLightFocus = () => {
    window.addEventListener('scroll', function() {        
        const placeContainer = document.querySelectorAll('.place-container');  
        for (const i of placeContainer) {           
            if (i.getBoundingClientRect().top <= 450 && i.getBoundingClientRect().top >= -350) {
               i.classList.remove('opacity')
            } else {
                i.classList.add('opacity')
            }
        }
    })
}

// Fills user data into the page
const setName = () => {
    const username = document.querySelector('#user-name');
    username.innerHTML = userData.name;
};

const setNavItems = () => {
    navItems.children[0].firstElementChild.setAttribute('data-text', userData.place1);
    navItems.children[0].firstElementChild.innerHTML = userData.place1;
    navItems.children[0].firstElementChild.setAttribute('href', `#${userData.place1}`);

    navItems.children[1].firstElementChild.setAttribute('data-text', userData.place2);
    navItems.children[2].firstElementChild.setAttribute('data-text', userData.place3);
    navItems.children[3].firstElementChild.setAttribute('data-text', userData.place4);
    navItems.children[4].firstElementChild.setAttribute('data-text', userData.place5);


   
    navItems.children[1].firstElementChild.innerHTML = userData.place2;
    navItems.children[2].firstElementChild.innerHTML = userData.place3;
    navItems.children[3].firstElementChild.innerHTML = userData.place4;
    navItems.children[4].firstElementChild.innerHTML = userData.place5;

   
    navItems.children[1].firstElementChild.setAttribute('href', `#${userData.place2}`);
    navItems.children[2].firstElementChild.setAttribute('href', `#${userData.place3}`);
    navItems.children[3].firstElementChild.setAttribute('href', `#${userData.place4}`);
    navItems.children[4].firstElementChild.setAttribute('href', `#${userData.place5}`);
};

const setPlace = () => {
    userSelectedPlaces = [userData.place1, userData.place2, userData.place3, userData.place4, userData.place5];
};

const setColor = () => {
    const root= document.documentElement;
    root.style.setProperty('--color-accent', userData.color);
};

const addUserData = () => {
    
    setName();
    setNavItems();
    setPlace();
    setColor();  
};

const addPlaces = () => {
    let  allPlaces = document.querySelector('.all-places'),
         text = '';
    for (const i of userSelectedPlaces.reverse()) {
        let place = i.replace(/\s/g, "").toLowerCase();
        if(userSelectedPlaces.indexOf(i) % 2 === 0) {
            text = `<section class="place-container opacity" id="${i}">
                        <div class="left">
                            <h2 class="place-name">${destinations[place].name}</h2>
                            <p class="place-description">${destinations[place].info}</p>
                            <ul class="place-facts">
                                <li>
                                    <p><strong>Fact 1</strong></p>
                                    <p>${destinations[place].fact1}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 2</strong></p>
                                    <p>${destinations[place].fact2}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 3</strong></p>
                                    <p>${destinations[place].fact3}</p>
                                </li>
                            </ul>
                        </div>  
                        <figure class="place-image left-gradient">
                            <img src="${destinations[place].image}" alt="${destinations[place.name]}">
                        </figure>   
                    </section>`
                    } else {
                    text = `<section class="place-container opacity" id="${i}">
                        <div class="right">
                            <h2 class="place-name">${destinations[place].name}</h2>
                            <p class="place-description">${destinations[place].info}</p>
                            <ul class="place-facts">
                                <li>
                                    <p><strong>Fact 1</strong></p>
                                    <p>${destinations[place].fact1}</p>
                                </li>
                                <li>
                                    <p><strong>Fact 2</strong></p>
                                    <p>${destinations[place].fact2}e</p>
                                </li>
                                <li>
                                    <p><strong>Fact 3</strong></p>
                                    <p>${destinations[place].fact3}</p>
                                </li>
                            </ul>
                        </div>  
                        <figure class="place-image right-gradient">
                            <img src="${destinations[place].image}" alt="${destinations[place.name]}">
                        </figure>   
                    </section>`
                }
        allPlaces.insertAdjacentHTML('afterbegin',text);
  }          
}                   

menuClickEvent();
highLightFocus();

// Functionality for complete buttons
btnComplete.addEventListener('click', function(e) {
    e.preventDefault();
    addNavLinks();
    checkClicked();
    saveUserInput();
    addUserData();
    addPlaces();
});


