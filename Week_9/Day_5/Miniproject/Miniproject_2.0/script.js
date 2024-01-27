const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];



const cardContainer = document.querySelector('.card-wrapper');
const searchInput = document.getElementById('inputUser');

function createCard(robot) {
  const card = document.createElement('div');
  card.className = 'card';

  const imageContent = document.createElement('div');
  imageContent.className = 'image-content';

  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  const img = document.createElement('img');
  img.src = robot.image;
  img.alt = 'Robot Image';
  img.className = 'card-img';

  cardImage.appendChild(img);
  imageContent.appendChild(cardImage);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  const nameOrganization = document.createElement('h2');
  nameOrganization.className = 'name-organization';
  nameOrganization.textContent = robot.name;
  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = robot.email;

  cardContent.appendChild(nameOrganization);
  cardContent.appendChild(description);

  card.appendChild(imageContent);
  card.appendChild(cardContent);

  return card;
}

function displayRobots(robots) {
  cardContainer.innerHTML = '';

  robots.forEach(robot => {
    const card = createCard(robot);
    cardContainer.appendChild(card);
  });
}
function filterRobots() {
  const searchText = searchInput.value.toLowerCase();
  const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchText)
  );

  displayRobots(filteredRobots);
}

displayRobots(robots);