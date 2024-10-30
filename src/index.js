const container1 = document.querySelector(".title")
const content1 = document.createElement("h1");
content1.textContent = "Welcome to Resturant 15";

const container2 = document.querySelector(".description");
const content2 = document.createElement("p")
content2.textContent = "Here is a story of a resturant who was able to go further beyong the limits of resturants.  They found ways to sell and serve other beings besides humans in a way never seen before.  Therefore, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "

container2.appendChild(content2) 
container1.appendChild(content1);
