import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  console.log("Your Pokedex:");
  
  const caughtPokemonNames = Object.keys(state.pokedex);
  
  for (const name of caughtPokemonNames) {
    console.log(` - ${name}`);
  }
}