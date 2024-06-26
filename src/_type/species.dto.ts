import { PhotoDto } from './photo.dto.ts';

export interface SpeciesDto{
    specie_id?: string
    specie_name: string
    specie_description: string
    specie_type: SpecieType
    pictures?:PhotoDto[]|null
}
export interface CreateSpeciesDto{
    specie_id?: string
    specie_name: string
    specie_description: string
    specie_type: SpecieType
    pictures?:PhotoDto[]|null
}
export enum SpecieType {
    ANIMAL= "animal",
    PLANT = "plant"
}