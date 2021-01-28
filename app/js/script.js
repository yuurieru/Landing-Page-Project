//put sections in variable
const sections = document.querySelectorAll('section');
//create navbar from sections names
function makeNav() {
    for (let name of sections) {
        // variable for creating list
        const navList = document.createElement("li");
        //replace content of navlist with anchor link
        navList.innerHTML = `<a class="menu__link" href="#${name.id}">${name.dataset.nav}</a>`;
        // append link to nav
        document.querySelector('#navbar__list').appendChild(navList);
    }
};
//helper function for active state
function viewPortBounding (element) {
    return (element.getBoundingClientRect().top);
};
//main function for scrolling to beginning section
function activeState() {
    //check for visible section
    for (let section of sections) {
        if (viewPortBounding(section) < 330 && viewPortBounding(section) >= -330); {
            let menuAnchors = document.getElementsByTagName('a');
            let listItem = section.dataset.nav;
            
            for (let currentMenuAnchor of menuAnchors) {
                if (listItem == currentMenuAnchor.innerText) {
                    console.log(currentMenuAnchor.innerText);
                } 
            };
        
        };
    };
};
//call function
makeNav();