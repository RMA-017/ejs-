import express from "express"
import { promises as fs } from "fs"
import ejs from "ejs"

const app = express()
app.use(express.json())

app.get("/", async (req, resp) => {
    let homePage = await fs.readFile("./index.html", "utf8")
    resp.send(homePage)
})

app.get("/assets/:fileName", async (req, resp) => {
    let cssData = await fs.readFile(`./assets/${req.params.fileName}`, "utf8")
    resp.set("content-type", "text/css")
    resp.send(cssData)
})

app.listen(3000, () => {
    console.log(`server on port: 3000`);
})
