export interface Imovie {
    id: string,
    rank: string,
    fullTitle: string,
    title: string,
    year: string,
    image: string,
    imDbRating?: string,
    imDbRatingCount?:string,
    worldwide?: string,

    
}

export interface Iapi {
    items: Imovie[]
}