export interface IContent {
    id: number,
    name: string,
    description?: string,
    author: string,
    imgSrc?: string,
    type: string,
    tags?: SVGStringList[]
}
