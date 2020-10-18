interface ICard {   
    id: number;
    collectible: number;
    slug: string;
    classId: number;
    cardTypeId: number;
    cardSetId: number;
    rarityId: number;
    artistName: string;
    manaCost: number;
    name: string;
    text: string;
    image: string;
    imageGold: string;
    flavorText: string;
    cropImage: string;
}


export class Card implements ICard {
    id: number;
    collectible: number;
    slug: string;
    classId: number;
    cardTypeId: number;
    cardSetId: number;
    rarityId: number;
    artistName: string;
    manaCost: number;
    name: string;
    text: string;
    image: string;
    imageGold: string;
    flavorText: string;
    cropImage: string;
}
