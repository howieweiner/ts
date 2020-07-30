import express from "express";
import path from "path";
import homeHandler from "./handlers/home";

const app = express();
const port = 8080; // default port to listen

// Serve stsatic assets
app.use(express.static("assets"));

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", homeHandler);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
