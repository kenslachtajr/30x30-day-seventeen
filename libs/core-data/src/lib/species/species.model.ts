export interface Specie {
  id: number,
  title: string,
  details: string,
  intelligenceLevel: number,
  approved: boolean
}

export const emptySpecie: Specie = {
  id: null,
  title: '',
  details: '',
  intelligenceLevel: null,
  approved: null
}
