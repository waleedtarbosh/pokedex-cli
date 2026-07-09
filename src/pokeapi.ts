import { Cache } from './pokecache.js';

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{ name: string; url: string; }>;
};

export type LocationAreaDetail = {
  pokemon_encounters: Array<{
    pokemon: {
      name: string;
      url: string;
    };
  }>;
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  
  private cache = new Cache(5 * 60 * 1000);

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    
    const cachedData = this.cache.get<ShallowLocations>(url);
    if (cachedData) return cachedData;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch locations`);
    
    const data = await response.json();
    this.cache.add<ShallowLocations>(url, data);
    
    return data;
  }

  async fetchLocationArea(locationName: string): Promise<LocationAreaDetail> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    
    const cachedData = this.cache.get<LocationAreaDetail>(url);
    if (cachedData) {
      return cachedData;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch location area: ${response.statusText}`);
    }
    
    const data = await response.json();
    this.cache.add<LocationAreaDetail>(url, data);
    
    return data;
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    
    const cachedData = this.cache.get<Pokemon>(url);
    if (cachedData) {
      return cachedData;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon: ${response.statusText}`);
    }
    
    const data = await response.json();
    this.cache.add<Pokemon>(url, data);
    
    return data;
  }
}