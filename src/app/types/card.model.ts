export interface Card {
    id: number;
    name: string;
    type: string;
    attack: number;
    defence: number;
    card_images: { image_url: string}[];
}