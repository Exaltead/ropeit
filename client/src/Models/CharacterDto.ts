export class CharacterDto {
    public readonly id: number;
    public readonly name: string;
    public readonly fluff: string;
    public readonly mechanics: string;
    public readonly notes: string;
    constructor(id: number, name: string,
        fluff: string, mechanics: string, notes: string) {
        this.fluff = fluff;
        this.id = id;
        this.name = name;
        this.mechanics = mechanics;
        this.notes = notes;
    }
}