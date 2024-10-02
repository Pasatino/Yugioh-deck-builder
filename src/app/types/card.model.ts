export interface Card {
    slice(arg0: number, arg1: number): Card[];
    id: number;
    name: string;
    type: string;
    attack: number;
    defence: number;
    card_images: { image_url: string}[];
}