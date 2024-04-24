export enum SpecieType {
    animal = "animal",
    vegetal = "vegetal"
}

export type Specie = {
    specie_name:string 
    specie_description:string
    specie_type: SpecieType | string
    photos: string[]
}