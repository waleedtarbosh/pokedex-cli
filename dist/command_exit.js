export async function commandExit(state) {
    console.log("Closing the Pokedex... Goodbye!");
    state.api['cache'].stopReapLoop();
    state.rl.close();
    process.exit(0);
}
