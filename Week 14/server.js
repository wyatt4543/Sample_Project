import http from "http"; //lets you create a web server
import fs from "fs"; //lets you read files from your computer
import path from "path"; //lets you build correct file paths
import { fileURLToPath } from "url"; //fixes path issues with using ES module

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const port = 3000;

const server = http.createServer(function (request, response) {
    let filePath = path.join(
        dirname,
        "public",
        request.url === "/" ? "index.html" : request.url
    );
    const ext = path.extname(filePath);

    const types = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".jpg": "image/jpeg",
        ".png": "image/png",
    };

    const contentType = types[ext] || "text/plain";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(400, { "content-type": "text/plain" });
            response.end("not Found")
            return;
        }
        response.writeHead(200, { "content-type": contentType });
        response.end(content);
    });
});

server.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});