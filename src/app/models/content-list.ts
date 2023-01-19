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

    public toString(index: number): string {
        let content = this._contents[index];
        let result = "";
        result += "<p class='content-id'>" + content.id + "</p>";
        result += "<p class='content-name'>" + content.name + "</p>";
        result += "<p class='content-desc'>" + content.description + "</p>";
        result += "<p class='content-author'>" + content.author + "</p>";
        result += "<img class='content-imgsrc' src='" + content.imgSrc + "'/>";
        result += "<p class='content-type'>" + content.type + "</p>";
        result += "<p class='content-tags'>" + content.tags + "</p>";
        return result;
    }
}
