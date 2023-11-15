export type Pokemon = {
  game_indices: GameIndex[]
  id: number
  location_area_encounters: string
  name: string
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  pokedex_number: number
}

export type GameIndex = {
  game_index: number
  version: Version
}

export type Version = {
  name: Name
  url: string
}

export enum Name {
  Attack = 'attack',
  Black = 'black',
  Black2 = 'black-2',
  Blue = 'blue',
  Bug = 'bug',
  Crystal = 'crystal',
  Dark = 'dark',
  Defense = 'defense',
  Diamond = 'diamond',
  Dragon = 'dragon',
  Electric = 'electric',
  Emerald = 'emerald',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Firered = 'firered',
  Flying = 'flying',
  Ghost = 'ghost',
  Gold = 'gold',
  Grass = 'grass',
  Ground = 'ground',
  HP = 'hp',
  Heartgold = 'heartgold',
  Ice = 'ice',
  Leafgreen = 'leafgreen',
  Normal = 'normal',
  Pearl = 'pearl',
  Platinum = 'platinum',
  Poison = 'poison',
  Psychic = 'psychic',
  Red = 'red',
  Rock = 'rock',
  Ruby = 'ruby',
  Sapphire = 'sapphire',
  Silver = 'silver',
  Soulsilver = 'soulsilver',
  SpecialAttack = 'special-attack',
  SpecialDefense = 'special-defense',
  Speed = 'speed',
  Steel = 'steel',
  Water = 'water',
  White = 'white',
  White2 = 'white-2',
  Yellow = 'yellow',
}

export type GenerationV = {
  'black-white': Sprites
}

export type GenerationIv = {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}

export type Versions = {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': { [key: string]: Home }
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export type Sprites = {
  back_default: string
  back_female: null | string
  back_shiny: string
  back_shiny_female: null | string
  front_default: string
  front_female: null | string
  front_shiny: string
  front_shiny_female: null | string
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export type GenerationI = {
  'red-blue': RedBlue
  yellow: RedBlue
}

export type RedBlue = {
  back_default: null | string
  back_gray: null | string
  back_transparent: null | string
  front_default: null | string
  front_gray: null | string
  front_transparent: null | string
}

export type GenerationIi = {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

export type Crystal = {
  back_default: null | string
  back_shiny: null | string
  back_shiny_transparent: null | string
  back_transparent: null | string
  front_default: null | string
  front_shiny: null | string
  front_shiny_transparent: null | string
  front_transparent: null | string
}

export type Gold = {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
  front_transparent?: null | string
}

export type GenerationIii = {
  emerald: OfficialArtwork
  'firered-leafgreen': Gold
  'ruby-sapphire': Gold
}

export type OfficialArtwork = {
  front_default: null | string
  front_shiny: null | string
}

export type Home = {
  front_default: string
  front_female: null | string
  front_shiny: string
  front_shiny_female: null | string
}

export type GenerationVii = {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export type DreamWorld = {
  front_default: string
  front_female: null | string
}

export type GenerationViii = {
  icons: DreamWorld
}

export type Other = {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export type Stat = {
  base_stat: number
  effort: number
  stat: Version
}

export type Type = {
  slot: number
  type: Version
}

export type TypeData = {
  damage_relations: DamageRelations
  id: number
  name: string
}

export type DamageRelations = {
  double_damage_from: DamageFrom[]
  half_damage_from: DamageFrom[]
  no_damage_from: any[]
}

export type DamageFrom = {
  name: string
  url: string
}
