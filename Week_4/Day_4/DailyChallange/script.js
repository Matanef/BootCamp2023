//created array with objects which each have 3 keys. colors in hex.
let solarArray = [
    {name: 'Mercury', moons: 0, color: "#c8c3cc"},
    {name: 'Venus', moons: 0, color: "#ff7b25"},
    {name: 'Earth', moons: 1, color: "blue"},
    {name: 'Mars', moons: 2, color: "#c94c4c"},
    {name: 'Jupiter', moons: 79, color: "#bc5a45"},
    {name: 'Saturn', moons: 82, color: "#dac292"},
    {name: 'Uranus', moons: 27, color: "#b7d7e8"},
    {name: 'Neptun', moons: 14, color: "#034f84"},
    {name: 'Pluto', moons: 5, color: "#cab577"}
    ]

//accessed the section tag and saved it into a variable.
    let planetSection = document.querySelector('section');
    console.log(planetSection);
//created a loop to go through the array's objects with element planet to be able to edit all of them togther.
    for (let planet of solarArray){
        //created a div tag.
        let divPlanets = document.createElement('div');
        //added the class "planet" to the div tag"
        divPlanets.classList.add('planet');
        //thr loop will name each "planet" with the objects in the array.
        divPlanets.innerText = planet.name;
        //again, giving each "planet" the propertie color
        divPlanets.style.backgroundColor = planet.color;
        //and here the div tag is inserted into the section tag.
        planetSection.appendChild(divPlanets)
        // console.log(divPlanets);

        //kind of doing the same thing with the moons iside the planets loop.
    for (let moons of solarArray){
        //creating a div tag for the moons
        let divMoons = document.createElement('div');
        //adding class of moons the the new div.
        divMoons.classList.add('moon');
        //editing the inner text to the amount of moons which is the key in the objects.
        divMoons.innerText = planet.moons;
        divMoons.style.left = "250px"
        divMoons.style.backgroundColor = planet.color;
        divMoons.style.textAlign = "center"
        planetSection.appendChild(divMoons)
    // console.log(divMoons);
    }
    };

