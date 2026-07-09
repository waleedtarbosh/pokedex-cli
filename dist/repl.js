export function cleanInput(input) {
    const trimmed = input.trim();
    if (trimmed === "") {
        return [];
    }
    return trimmed.toLowerCase().split(/\s+/);
}
export function startREPL(state) {
    state.rl.prompt();
    state.rl.on('line', async (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            state.rl.prompt();
            return;
        }
        const commandName = words[0];
        const args = words.slice(1);
        const command = state.commands[commandName];
        if (command) {
            try {
                await command.callback(state, ...args);
            }
            catch (error) {
                console.error("Error executing command:", error);
            }
        }
        else {
            console.log("Unknown command");
        }
        state.rl.prompt();
    });
}
