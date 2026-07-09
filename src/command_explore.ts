import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  if (args.length === 0) {
    console.log("Please provide a location area to explore. Example: explore pastoria-city-area");
    return;
  }

  const locationName = args[0];
  console.log(`Exploring ${locationName}...`);

  try {
    const data = await state.api.fetchLocationArea(locationName);
    
    console.log("Found Pokemon:");
    for (const encounter of data.pokemon_encounters) {
      console.log(` - ${encounter.pokemon.name}`);
    }
  } catch (error) {
    console.error(`Error: Could not find area '${locationName}'`);
  }
}