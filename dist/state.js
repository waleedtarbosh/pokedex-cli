import * as readline from 'node:readline';
import { commandHelp } from './command_help.js';
import { commandExit } from './command_exit.js';
import { commandMap } from './command_map.js';
import { commandMapb } from './command_mapb.js';
import { commandExplore } from './command_explore.js';
import { commandCatch } from './command_catch.js';
import { commandInspect } from './command_inspect.js';
import { commandPokedex } from './command_pokedex.js';
import { PokeAPI } from './pokeapi.js';
export function initState() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });
    const commands = {
        help: { name: "help", description: "Displays a help message", callback: commandHelp },
        exit: { name: "exit", description: "Exit the Pokedex", callback: commandExit },
        map: { name: "map", description: "Displays the next 20 location areas", callback: commandMap },
        mapb: { name: "mapb", description: "Displays the previous 20 location areas", callback: commandMapb },
        explore: { name: "explore", description: "Explore a location area for Pokemon", callback: commandExplore },
        catch: { name: "catch", description: "Attempt to catch a pokemon", callback: commandCatch },
        inspect: { name: "inspect", description: "Inspect a caught pokemon", callback: commandInspect },
        pokedex: { name: "pokedex", description: "View all the pokemon you have caught", callback: commandPokedex }
    };
    return {
        rl,
        commands,
        api: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
        pokedex: {}
    };
}
