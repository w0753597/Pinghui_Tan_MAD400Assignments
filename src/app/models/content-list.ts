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
        result += "<p class='content-id'><span class='field-name'>ID:</span>" + content.id + "</p>";
        result += "<p class='content-name'><span class='field-name'>Title:</span>" + content.name + "</p>";        
        if (content.description != null) {
            result += "<p class='content-desc'><span class='field-name'>Desc:</span>" + content.description + "</p>";
        }
        result += "<p class='content-author'><span class='field-name'>Author:</span>" + content.author + "</p>";
        if (content.imgSrc != null) {
            result += "<img class='content-imgsrc' src='" + content.imgSrc + "'/>";
        }
        result += "<p class='content-type'><span class='field-name'>Type:</span>" + content.type + "</p>";
        if (content.tags != null) {
            result += "<p class='content-tags'>" + content.tags + "</p>";
        }
        return result;
    }
}
