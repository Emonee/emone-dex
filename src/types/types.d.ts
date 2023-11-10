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
  name: string
  url: string
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
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export type GenerationI = {
  'red-blue': RedBlue
  yellow: RedBlue
}

export type RedBlue = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export type GenerationIi = {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

export type Crystal = {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export type Gold = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent?: string
}

export type GenerationIii = {
  emerald: OfficialArtwork
  'firered-leafgreen': Gold
  'ruby-sapphire': Gold
}

export type OfficialArtwork = {
  front_default: string
  front_shiny: string
}

export type Home = {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export type GenerationVii = {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export type DreamWorld = {
  front_default: string
  front_female: null
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
