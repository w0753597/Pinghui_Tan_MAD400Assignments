export interface IContent {
    id: number,     // valid id is a positive integer
    name: string,
    description?: string,
    author: string,
    imgSrc?: string,
    type: string,
    tags?: string[]
}
