import { IContent } from "./icontent";

export class ContentList {
    private _contents: IContent[];

    public constructor(contents: IContent[]) {
        this._contents = contents;
    }

    public getContents(): IContent[] {
        return this._contents;
    }

    public addContent(content: IContent) {
        this._contents.push(content);
    }

    public length(): number {
        return this._contents.length;
    }
}
