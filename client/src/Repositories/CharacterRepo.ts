import { CharacterDto } from "../Models/CharacterDto";


export async function fetchCharactes(gameId: number) {
    return [
        new CharacterDto(1, "Hehe", "Fluffy", "None", ""),
        new CharacterDto(2, "Haha", "Fluffy2", "None2", ""),
        new CharacterDto(3, "Huhu", "Fluffy3", "None3", "Trallallaa")
    ]
}
