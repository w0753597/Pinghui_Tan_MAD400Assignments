import { IContent } from "./icontent";

export class ContentList {
    private _contents: IContent[];

    public constructor() {
        this._contents = [];
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
        if (content.description != null) {
            result += "<p class='content-desc'>" + content.description + "</p>";
        }
        result += "<p class='content-author'>" + content.author + "</p>";
        if (content.imgSrc != null) {
        result += "<img class='content-imgsrc' src='" + content.imgSrc + "'/>";
        }
        result += "<p class='content-type'>" + content.type + "</p>";
        if (content.tags != null) {
        result += "<p class='content-tags'>" + content.tags + "</p>";
        }
        return result;
    }
}
