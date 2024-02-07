const container = document.getElementById('container')
const button = document.getElementById('random')

button.addEventListener('click', async () =>{
    try {
        const allPokemonresponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        if(!allPokemonresponse.ok){
            throw new Error('Failed Response');
        }
        const allPokemonData = await allPokemonresponse.json();
        const totalPokemonCount = allPokemonData.count;
        const randomId = Math.floor(Math.random()* totalPokemonCount);

        const randomPokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        if(!allPokemonresponse.ok){
            throw new Error('Failed Response');
            
        }
        const randomPokemonData = randomPokemonResponse.json();
        displayPokemon(randomPokemonData)
    } catch (error) {
        console.log('this is an Error message', error.message);
    }
});

const displayPokemon = () =>{
    const pokemonName = pokemon.name;
    const pokemonImgUrl = 
}