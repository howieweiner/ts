import * as express from "express";
import data from "../data/photos.json";
import ZiggyPhoto from "../models/photo";

export default (req: express.Request, res: express.Response) => {
    // create context for view
    const photos = data.map((item) => new ZiggyPhoto(item.path, item.description));

    const ctx = { photos };
    // render the index template view with the context
    res.render( "index", ctx);
};
