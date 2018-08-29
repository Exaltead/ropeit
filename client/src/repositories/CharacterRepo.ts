import { Character } from "src/store/characters/types";



export async function fetchCharacters() {
    return [
        createCharacter(1, "Hehe", "Fluffy", "None", ""),
        createCharacter(2, "Haha", "Fluffy2", "None2", ""),
        createCharacter(3, "Huhu", "Fluffy3", "None3", "Trallallaa")
    ]
}

function createCharacter(id: number, name: string, fluff: string,
    mechanics: string, notes: string): Character {
    return { id, name, fluff, mechanics, notes }
}
