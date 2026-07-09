export async function commandPokedex(state) {
    console.log("Your Pokedex:");
    const caughtPokemonNames = Object.keys(state.pokedex);
    for (const name of caughtPokemonNames) {
        console.log(` - ${name}`);
    }
}
