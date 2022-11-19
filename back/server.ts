import express from 'express';
const app = express()

app.get("/api", (_req, res) => {
    res.json({ "aaaa": ["aaaa"] })
})

app.listen(5000, () => { console.log("server started on port 5000") })