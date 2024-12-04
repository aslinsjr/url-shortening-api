const express = require('express')
const axios = require('axios');
const app = express()


app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Url Shortening API" });
});

app.post('/url', async (req, res) => {
    const {url} = req.body

    try {
        const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
            url: url
        })

        res.status(201).json(response.data)

    } catch (error) {
        console.log(error)
    }
})

app.listen(3000)