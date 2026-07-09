export async function commandCatch(state, ...args) {
    if (args.length === 0) {
        console.log("Please provide a Pokemon name. Example: catch pikachu");
        return;
    }
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    try {
        const pokemon = await state.api.fetchPokemon(pokemonName);
        const difficulty = pokemon.base_experience / 300;
        const catchChance = Math.random();
        if (catchChance > difficulty) {
            console.log(`${pokemon.name} was caught!`);
            state.pokedex[pokemon.name] = pokemon;
        }
        else {
            console.log(`${pokemon.name} escaped!`);
        }
    }
    catch (error) {
        console.error(`Error: Could not find Pokemon '${pokemonName}'`);
    }
}
