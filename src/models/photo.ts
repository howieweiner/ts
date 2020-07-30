interface IPhoto {
    path: string;
    description: string;
    title: string;
}

class ZiggyPhoto implements IPhoto {
    public path: string;
    public description: string;
    public title = "Ziggy";

    constructor(path: string, description: string) {
        this.path = path;
        this.description = description;
    }
}

export default ZiggyPhoto;
