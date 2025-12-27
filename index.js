import path from "path"
import express from "express"
import cors from "cors"
import ejs from "ejs"
import { promises as fs } from "fs"

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"));

let html = await fs.readFile("./index.html", "utf-8")

app.get("/", async (req, res) => {
    res.set("Content-Type", "text/html")
    res.send(html)
})

app.get("/index.html", async (req, res) => {
    res.set("Content-Type", "text/html")
    res.send(html)
})

app.get("/assets/css/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/css/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/assets/css/images/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/css/images/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/svg")
    res.send(data)
})

app.get("/assets/js/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/js/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/js")
    res.send(data)
})

app.get("/assets/sass/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/sass/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/assets/sass/base/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/sass/base/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/assets/sass/components/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/sass/components/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/assets/sass/layout/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/sass/layout/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/assets/sass/libs/:roadName", async (req, res) => {
    let data = await fs.readFile(`./assets/sass/libs/${req.params.roadName}`, "utf-8")
    res.set("Content-Type", "text/css")
    res.send(data)
})

app.get("/images/fulls/:roadName", async (req, res) => {
    let data = await fs.readFile(`./images/fulls/${req.params.roadName}`)
    res.set("Content-Type", "image/jpg")
    res.send(data)
})

app.get("/images/thumbs/:roadName", async (req, res) => {
    let data = await fs.readFile(`./images/thumbs/${req.params.roadName}`)
    res.set("Content-Type", "image/jpg")
    res.send(data)
})


app.get("/assets/webfonts/:fontName", async (req, res) => {
    try {
        const data = await fs.readFile(`./assets/webfonts/${req.params.fontName}`);

        let contentType;
        if (req.params.fontName.endsWith(".eot")) contentType = "application/vnd.ms-fontobject";
        else if (req.params.fontName.endsWith(".ttf")) contentType = "font/ttf";
        else if (req.params.fontName.endsWith(".woff")) contentType = "font/woff";
        else if (req.params.fontName.endsWith(".woff2")) contentType = "font/woff2";
        else contentType = "application/octet-stream";

        res.set("Content-Type", contentType);
        res.send(data);

    } catch (err) {
        res.status(404).send("Font not found");
    }
});


app.listen(3000, () => {
    console.log("server on 3000");
})