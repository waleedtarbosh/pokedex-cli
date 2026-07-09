import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  try {
    const data = await state.api.fetchLocations(state.nextLocationsURL);
    
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;

    for (const location of data.results) {
      console.log(location.name);
    }
  } catch (error) {
    console.error("Error fetching locations");
  }
}