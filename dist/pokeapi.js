import { Cache } from './pokecache.js';
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(5 * 60 * 1000);
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cachedData = this.cache.get(url);
        if (cachedData)
            return cachedData;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Failed to fetch locations`);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
    async fetchLocationArea(locationName) {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cachedData = this.cache.get(url);
        if (cachedData) {
            return cachedData;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch location area: ${response.statusText}`);
        }
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
    async fetchPokemon(pokemonName) {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const cachedData = this.cache.get(url);
        if (cachedData) {
            return cachedData;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon: ${response.statusText}`);
        }
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
}
