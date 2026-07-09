export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (const commandName in state.commands) {
        const cmd = state.commands[commandName];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}
