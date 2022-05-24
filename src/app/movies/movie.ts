export interface Imovie {
    id: string,
    rank: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    imDbRating: string,
    imDbRatingCount:string
}

export interface Iapi {
    items: Imovie[]
}