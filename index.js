import express from "express"
import { promises as fs } from "fs"
import ejs from "ejs"

const app = express()
app.use("/assets", express.static("assets"))
app.use("/images", express.static("images"))

let features = ["Consequat tempus", "Etiam adipiscing", "Libero nullam", "Blandit condimentum", "Lorem ipsum dolor", "Nibh amet venenatis"]

let gallery = [
    {
        image: {
            fulls: "images/gallery/fulls/01.jpg",
            thumbs: "images/gallery/thumbs/01.jpg"
        }
    },
    {
        image: {
            fulls: "images/gallery/fulls/02.jpg",
            thumbs: "images/gallery/thumbs/02.jpg"
        }
    },
    {
        image: {
            fulls: "images/gallery/fulls/03.jpg",
            thumbs: "images/gallery/thumbs/03.jpg"
        }
    },
    {
        image: {
            fulls: "images/gallery/fulls/04.jpg",
            thumbs: "images/gallery/thumbs/04.jpg"
        }
    },

]

let gallery2 = [
    {
        image: {
            rasm5: "images/gallery/fulls/05.jpg",
            rasm55: "images/gallery/thumbs/05.jpg"
        }
    },
    {
        image: {
            rasm5: "images/gallery/fulls/06.jpg",
            rasm55: "images/gallery/thumbs/06.jpg"
        }
    },
    {
        image: {
            rasm5: "images/gallery/fulls/07.jpg",
            rasm55: "images/gallery/thumbs/07.jpg"
        }
    }
]

let gallery3 = [
    {
        image: {
            rasm5: "images/gallery/fulls/08.jpg",
            rasm55: "images/gallery/thumbs/08.jpg"
        }
    },
    {
        image: {
            rasm5: "images/gallery/fulls/09.jpg",
            rasm55: "images/gallery/thumbs/09.jpg"
        }
    },
    {
        image: {
            rasm5: "images/gallery/fulls/10.jpg",
            rasm55: "images/gallery/thumbs/10.jpg"
        }
    }
]

app.get("/", async (req, res) => {
    let data = await fs.readFile("./index.html", "utf-8")
    let result = ejs.render(data, {
        features,
        gallery,
        gallery2,
        gallery3
    })
    res.set("Content-Type", "text/html")
    res.send(result)
})


app.listen(3000, () => {
    console.log("3000");
})