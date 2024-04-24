import {PhotoDto} from "@/_type/photo.dto";

export interface SpeciesDto{
    specie_id?: string
    specie_name: string
    specie_description: string
    specie_type: string
    pictures:PhotoDto[]|null
}
export interface CreateSpeciesDto{
    specie_id?: string
    specie_name: string
    specie_description: string
    specie_type: string
    pictures:PhotoDto[]|null
}