export interface ItemType {
  name: string;
  url: string;
}

export interface PokemonType {
  abilities: {
    ability: ItemType;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: ItemType[];
  game_indices: {
    game_index: number;
    version: ItemType;
  }[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: ItemType;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: ItemType;
      version_group: ItemType;
    }[];
  }[];
  name: string;
  order: number;
  past_types: any[];
  species: ItemType;
  sprites?: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default?: string;
        front_female?: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: any;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: ItemType;
  }[];
  types: {
    slot: number;
    type: ItemType;
  }[];
  weight: number;
}
