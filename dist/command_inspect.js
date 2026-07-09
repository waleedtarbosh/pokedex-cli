export async function commandInspect(state, ...args) {
    if (args.length === 0) {
        console.log("Please provide a Pokemon name. Example: inspect pidgey");
        return;
    }
    const pokemonName = args[0];
    const pokemon = state.pokedex[pokemonName];
    if (!pokemon) {
        console.log("you have not caught that pokemon");
        return;
    }
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    for (const statInfo of pokemon.stats) {
        console.log(`  -${statInfo.stat.name}: ${statInfo.base_stat}`);
    }
    console.log("Types:");
    for (const typeInfo of pokemon.types) {
        console.log(`  - ${typeInfo.type.name}`);
    }
}
