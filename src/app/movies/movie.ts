export interface Imovie {
    id: string,
    rank: string,
    fullTitle: string,
    year: string,
    image: string,
    imDbRating: string,
    imDbRatingCount:string,
    title?: string,
}

export interface Iapi {
    items: Imovie[]
}